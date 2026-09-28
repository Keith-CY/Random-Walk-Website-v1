import { candidatesFor, painting, type Domain, type ExaminationContent } from "./data";
import { fragmentShader, uniformNames, vertexShader, type UniformName } from "./shaders";
import { drawMask, flow, tokenize, type Layout, type Rect } from "./text-layout";

export type Model = "base" | "trained";

export type ExaminationElements = {
  exam: HTMLElement;
  stage: HTMLElement;
  canvas: HTMLCanvasElement;
  map: HTMLElement;
  tip: HTMLElement;
  xy: HTMLElement;
  /** Elements the words flow around for a step: navigation and readouts, then that step's copy last. */
  obstacles: (step: number) => Element[];
};

export type ExaminationCallbacks = {
  onStep: (index: number) => void;
  onAutoTrained: () => void;
};

export type Examination = {
  setDemo: (domainKey: string, model: Model) => void;
  destroy: () => void;
};

const LINE_HEIGHT = 10;
const TOP = 6;
const clamp = (x: number, a: number, b: number) => Math.min(b, Math.max(a, x));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export function coverRect(W: number, H: number, iw: number, ih: number, fx: number, fy: number) {
  const s = Math.max(W / iw, H / ih);
  const w = iw * s;
  const h = ih * s;
  return { x: clamp(W / 2 - fx * w, W - w, 0), y: clamp(H / 2 - fy * h, H - h, 0), w, h };
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement | null>((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export function createExamination(el: ExaminationElements, cb: ExaminationCallbacks, opts: { reduce: boolean; fontFamily: string; content: ExaminationContent }): Examination | null {
  const { steps, domains, corpora, lexicon } = opts.content;
  const highlighted = new Set(opts.content.highlighted);
  const gl = el.canvas.getContext("webgl", { antialias: false, premultipliedAlpha: false, preserveDrawingBuffer: false });
  if (!gl) return null;

  const compile = (type: number, src: string) => {
    const s = gl.createShader(type);
    if (!s) throw new Error("Could not create shader");
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) ?? "Shader failed");
    return s;
  };
  const program = gl.createProgram();
  if (!program) return null;
  try {
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShader));
  } catch {
    return null;
  }
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
  gl.useProgram(program);
  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const attr = gl.getAttribLocation(program, "p");
  gl.enableVertexAttribArray(attr);
  gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);
  const u = Object.fromEntries(uniformNames.map((name) => [name, gl.getUniformLocation(program, name)])) as Record<UniformName, WebGLUniformLocation | null>;

  const texture = () => {
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, 1, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array([14, 12, 10]));
    return t;
  };
  const tImg = texture(), tGhost = texture(), tA = texture(), tB = texture(), tSoft = texture();
  gl.uniform1i(u.uImg, 0);
  gl.uniform1i(u.uGhost, 1);
  gl.uniform1i(u.uMaskA, 2);
  gl.uniform1i(u.uMaskB, 3);
  gl.uniform1i(u.uSoft, 4);
  const upload = (source: TexImageSource, t: WebGLTexture | null, unit: number) => {
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, source);
  };

  const font = `700 9px ${opts.fontFamily}`;
  const maskA = document.createElement("canvas");
  const maskB = document.createElement("canvas");
  let imageSize: [number, number] = painting.size;
  let ghostSize: [number, number] = painting.size;
  let softSize: [number, number] = [1, 1];
  let dpr = 1, W = 0, H = 0;
  let layA: Layout | null = null, layB: Layout | null = null;
  let current = -1, from = 0, to = 0, sweepStart = -1, writing = false, writeStart = 0, reveal = 1e5;
  let pendingStep: number | null = null;
  let swapStart = -1, swap = -1, blur = 1, blurFrom = 1, blurTo = 1;
  let domain: Domain = domains[0];
  let model: Model = "base";
  let autoTrained = false;
  let lens: [number, number, number] = [0, 0, 0];
  let clearRect: Rect | null = null;
  let ready = false;
  let raf = 0;
  let lastWidth = 0;
  let destroyed = false;
  const timers: number[] = [];

  const demoText = () => (model === "trained" ? domain.trained : domain.base);
  const corpusFor = (k: number) => {
    const mode = steps[k].mode;
    return mode === 5 ? demoText() : [corpora.visible, corpora.infrared, corpora.xray, corpora.raking, corpora.ultraviolet][mode];
  };
  const rectsOf = (elements: Element[], pad: number): Rect[] => {
    const s = el.stage.getBoundingClientRect();
    return elements
      .map((node) => node.getBoundingClientRect())
      .filter((r) => r.width > 0 && r.height > 0)
      .map((r) => ({ x1: r.left - s.left - pad, x2: r.right - s.left + pad, y1: r.top - s.top - pad, y2: r.bottom - s.top + pad }));
  };

  function layout(paragraphs: readonly string[], into: "A" | "B") {
    if (!W) return;
    const target = into === "B" ? maskB : maskA;
    target.width = Math.round(W * dpr);
    target.height = Math.round(H * dpr);
    const ctx = target.getContext("2d");
    if (!ctx) return;
    const o = { W, H, top: TOP, side: 8, lh: LINE_HEIGHT, font, stretch: "semi-condensed", tokens: tokenize(paragraphs, opts.content.lang), excl: rectsOf(el.obstacles(current), 14), blue: highlighted };
    const l = flow(ctx, o);
    drawMask(target, l, o, dpr);
    upload(target, into === "B" ? tB : tA, into === "B" ? 3 : 2);
    if (into === "B") layB = l;
    else {
      layA = l;
      delete el.tip.dataset.on;
    }
  }

  function commitSwap() {
    const ctx = maskA.getContext("2d");
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(maskB, 0, 0);
      upload(maskA, tA, 2);
    }
    layA = layB;
    swap = -1;
    blur = blurTo;
  }

  function rewrite() {
    blurTo = model === "trained" ? 0 : 1;
    if (current < 0 || steps[current].mode !== 5) {
      blur = blurTo;
      return;
    }
    if (writing || opts.reduce) {
      layout(demoText(), "A");
      blur = blurTo;
      return;
    }
    layout(demoText(), "B");
    blurFrom = blur;
    swapStart = performance.now();
  }

  function place() {
    W = el.stage.clientWidth;
    H = el.stage.clientHeight;
    // The shader runs per pixel, so cap the pixel count: phones render at 1x, large screens at up to ~2.2 MP.
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    dpr = Math.min(coarse ? 1 : 1.5, window.devicePixelRatio || 1);
    dpr = Math.min(dpr, Math.sqrt(2_200_000 / Math.max(1, W * H)));
    el.canvas.width = Math.round(W * dpr);
    el.canvas.height = Math.round(H * dpr);
    gl!.viewport(0, 0, el.canvas.width, el.canvas.height);
    const r = coverRect(W, H, imageSize[0], imageSize[1], painting.focus[0], painting.focus[1]);
    Object.assign(el.map.style, { left: `${r.x}px`, top: `${r.y}px`, width: `${r.w}px`, height: `${r.h}px` });
  }

  function stepAt() {
    const r = el.exam.getBoundingClientRect();
    const travel = Math.max(1, r.height - window.innerHeight);
    return Math.floor(clamp(-r.top / travel, 0, 0.9999) * steps.length);
  }

  function setStep(k: number, now: number) {
    if (k === current) return;
    current = k;
    const step = steps[k];
    cb.onStep(k);
    {
      clearRect = step.mode === 5 ? rectsOf(el.obstacles(k).slice(-1), -12)[0] ?? null : null;
      if (step.mode === 5) {
        if (sweepStart > 0) {
          from = to;
          sweepStart = -1;
        }
        pendingStep = null;
        to = 5;
        blur = blurTo = model === "trained" ? 0 : 1;
        layout(demoText(), "A");
        if (opts.reduce || from === 5) {
          from = 5;
          writing = false;
          reveal = 1e5;
        } else {
          writing = true;
          writeStart = now;
          reveal = 0;
        }
      } else {
        const leaving = writing || from === 5;
        if (writing) {
          writing = false;
          from = 5;
        } else if (sweepStart > 0) from = to;
        to = step.mode;
        if (from === to || opts.reduce) {
          from = to;
          sweepStart = -1;
          layout(corpusFor(k), "A");
        } else {
          sweepStart = now;
          if (leaving) pendingStep = k;
          else layout(corpusFor(k), "A");
        }
      }
    }
  }

  function wordAt(x: number, y: number) {
    if (!layA) return null;
    const line = layA.lines[Math.floor((y - TOP) / LINE_HEIGHT)];
    return line ? line.words.find((w) => x >= w.x - 2 && x <= w.x + w.w + 2) ?? null : null;
  }

  function showTip(x: number, y: number, word: string) {
    const r = el.stage.getBoundingClientRect();
    el.tip.replaceChildren(
      ...candidatesFor(word, lexicon).map(([w, p]) => {
        const row = document.createElement("div");
        row.className = "x-tip-row";
        const label = document.createElement("span");
        label.textContent = w;
        const bar = document.createElement("i");
        bar.style.width = `${Math.round(p * 100)}%`;
        const value = document.createElement("span");
        value.textContent = p.toFixed(2);
        row.append(label, bar, value);
        return row;
      }),
      Object.assign(document.createElement("p"), { textContent: opts.content.tip })
    );
    const left = x > r.width * 0.55 ? x - 124 - 220 : x + 124;
    el.tip.style.left = `${left}px`;
    el.tip.style.top = `${clamp(y - 40, 70, r.height - 140)}px`;
    el.tip.dataset.on = "true";
  }

  function onMove(e: PointerEvent) {
    if (e.pointerType === "touch") return;
    const r = el.stage.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const target = e.target as Element | null;
    if (target?.closest("a, button, [data-lens-off]")) {
      if (lens[2]) requestRender();
      lens = [0, 0, 0];
      delete el.tip.dataset.on;
      return;
    }
    lens = [x, y, window.innerWidth < 600 ? 66 : 104];
    requestRender();
    const m = coverRect(r.width, r.height, imageSize[0], imageSize[1], painting.focus[0], painting.focus[1]);
    el.xy.textContent = `x ${clamp((x - m.x) / m.w, 0, 1).toFixed(3)} · y ${clamp((y - m.y) / m.h, 0, 1).toFixed(3)}`;
    const word = wordAt(x, y);
    if (!word || !/\p{L}{2}/u.test(word.t)) {
      delete el.tip.dataset.on;
      return;
    }
    showTip(x, y, word.t);
  }
  function onLeave() {
    lens = [0, 0, 0];
    delete el.tip.dataset.on;
    requestRender();
  }

  // Draw only when something changed: a scroll, the lens, a demo switch, or while a transition runs.
  // A continuous loop kept phones busy (and hot) even when the painting sat still.
  function requestRender() {
    if (!raf && !destroyed && imageSize !== painting.size) raf = requestAnimationFrame(frame);
  }
  const animating = () => writing || sweepStart > 0 || swapStart > 0;

  function frame(now: number) {
    raf = 0;
    const ex = el.exam.getBoundingClientRect();
    if (ex.bottom < 0 || ex.top > window.innerHeight) return;
    setStep(stepAt(), now);
    if (current < 0) return;
    const lines = layA ? layA.count : 0;
    if (writing) {
      const t = clamp((now - writeStart) / 3400, 0, 1);
      reveal = ease(t) * (lines + 1);
      if (t >= 1) {
        writing = false;
        from = 5;
        reveal = 1e5;
        if (!autoTrained && model === "base") {
          autoTrained = true;
          timers.push(window.setTimeout(() => {
            if (!destroyed && steps[current].mode === 5 && model === "base") cb.onAutoTrained();
          }, 2600));
        }
      }
    }
    let sweep = 0;
    if (sweepStart > 0) {
      const t = clamp((now - sweepStart) / 1400, 0, 1);
      sweep = ease(t);
      if (t >= 1) {
        from = to;
        sweepStart = -1;
        sweep = 0;
        if (pendingStep !== null) {
          layout(corpusFor(pendingStep), "A");
          pendingStep = null;
        }
      }
    }
    if (swapStart > 0) {
      const t = clamp((now - swapStart) / 2400, 0, 1);
      swap = ease(t) * (lines + 1);
      blur = blurFrom + (blurTo - blurFrom) * ease(t);
      if (t >= 1) {
        commitSwap();
        swapStart = -1;
      }
    }
    const g = gl!;
    g.uniform2f(u.uRes, el.canvas.width, el.canvas.height);
    g.uniform2fv(u.uSize, imageSize);
    g.uniform2fv(u.uGSize, ghostSize);
    g.uniform2fv(u.uFocus, painting.focus);
    g.uniform2f(u.uGOff, 0, 0);
    g.uniform3f(u.uLens, lens[0] * dpr, lens[1] * dpr, lens[2] * dpr);
    g.uniform1f(u.uLensMode, steps[current].mode);
    g.uniform1f(u.uA, from);
    g.uniform1f(u.uB, to);
    g.uniform1f(u.uSweep, sweep);
    g.uniform1f(u.uWriting, writing ? 1 : 0);
    g.uniform1f(u.uReveal, reveal);
    g.uniform1f(u.uSwap, swapStart > 0 ? swap : -1);
    g.uniform1f(u.uTop, TOP * dpr);
    g.uniform1f(u.uLh, LINE_HEIGHT * dpr);
    g.uniform1f(u.uBlur, blur);
    g.uniform2fv(u.uSSize, softSize);
    g.uniform1f(u.uMag, 2.3);
    g.uniform1f(u.uGam, 1);
    g.uniform1f(u.uGain, 1.3);
    g.uniform1f(u.uUnder, 0.74);
    g.uniform1f(u.uTime, 0);
    g.uniform1f(u.uDpr, dpr);
    g.uniform4f(u.uClear0, clearRect ? clearRect.x1 * dpr : -9, clearRect ? clearRect.y1 * dpr : -9, clearRect ? clearRect.x2 * dpr : -9, clearRect ? clearRect.y2 * dpr : -9);
    painting.spots.forEach((s, i) => g.uniform4f(u[`uSpot${i}` as UniformName], s[0], s[1], s[2], s[3]));
    [tImg, tGhost, tA, tB, tSoft].forEach((t, i) => {
      g.activeTexture(g.TEXTURE0 + i);
      g.bindTexture(g.TEXTURE_2D, t);
    });
    g.drawArrays(g.TRIANGLE_STRIP, 0, 4);
    if (!ready) {
      ready = true;
      el.stage.dataset.ready = "true";
    }
    if (animating()) requestRender();
  }

  let resizeTimer = 0;
  const onResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      // Mobile browsers change the height as their toolbars slide in and out during a scroll.
      // Re-laying thousands of words for that is wasted work, so only react to real size changes.
      const width = el.stage.clientWidth;
      if (width === lastWidth && Math.abs(el.stage.clientHeight - H) < 160) return;
      lastWidth = width;
      place();
      if (current >= 0 && swapStart < 0 && !writing) layout(corpusFor(current), "A");
      requestRender();
    }, 150);
  };
  const onScroll = () => requestRender();

  el.stage.addEventListener("pointermove", onMove);
  el.stage.addEventListener("pointerleave", onLeave);
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", onScroll, { passive: true });
  place();
  lastWidth = W;

  Promise.all([loadImage(painting.src), loadImage(painting.ghost), document.fonts?.load(font).catch(() => undefined)]).then(([img, ghost]) => {
    if (destroyed) return;
    if (img) {
      upload(img, tImg, 0);
      imageSize = [img.naturalWidth, img.naturalHeight];
      // Halve repeatedly so the tiny copy is a smooth average: the general model sees only the gist.
      let source: HTMLImageElement | HTMLCanvasElement = img;
      let w = img.naturalWidth;
      let h = img.naturalHeight;
      while (w > 72) {
        const c = document.createElement("canvas");
        w = Math.max(40, Math.round(w / 2));
        h = Math.round((w * imageSize[1]) / imageSize[0]);
        c.width = w;
        c.height = h;
        const x = c.getContext("2d");
        if (!x) break;
        x.imageSmoothingQuality = "high";
        x.drawImage(source, 0, 0, w, h);
        source = c;
      }
      softSize = [w, h];
      upload(source, tSoft, 4);
    }
    if (ghost) {
      upload(ghost, tGhost, 1);
      ghostSize = [ghost.naturalWidth, ghost.naturalHeight];
    }
    place();
    if (img) requestRender();
  });

  return {
    setDemo(domainKey, nextModel) {
      const next = domains.find((d) => d.key === domainKey) ?? domains[0];
      if (next === domain && nextModel === model) return;
      if (nextModel !== model) autoTrained = true;
      domain = next;
      model = nextModel;
      rewrite();
      requestRender();
    },
    destroy() {
      destroyed = true;
      cancelAnimationFrame(raf);
      timers.forEach((t) => window.clearTimeout(t));
      window.clearTimeout(resizeTimer);
      el.stage.removeEventListener("pointermove", onMove);
      el.stage.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    }
  };
}
