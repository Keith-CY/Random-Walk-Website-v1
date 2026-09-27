// Flows words across the canvas in reading order, around the page's own text, and paints them
// into a mask: red for ordinary words, blue for the words the demo highlights.

export type Token = { t: string; cjk?: boolean };
export type Rect = { x1: number; x2: number; y1: number; y2: number };
export type LaidWord = { x: number; w: number; t: string; blue: boolean };
export type Layout = { lines: { y: number; words: LaidWord[] }[]; count: number };
export type FlowOptions = { W: number; H: number; top: number; side: number; lh: number; font: string; stretch?: string; tokens: Token[]; excl: Rect[]; blue?: Set<string> };

const cjk = /[぀-ヿ一-鿿가-힯]/;

export function tokenize(paragraphs: readonly string[]): Token[] {
  const out: Token[] = [];
  for (const p of paragraphs) {
    if (cjk.test(p)) {
      for (let i = 0; i < p.length; i += 3) out.push({ t: p.slice(i, i + 3), cjk: i + 3 < p.length });
    } else {
      for (const w of p.split(/\s+/)) if (w) out.push({ t: w });
    }
  }
  return out;
}

function setFont(ctx: CanvasRenderingContext2D, o: Pick<FlowOptions, "font" | "stretch">) {
  ctx.font = o.font;
  if ("fontStretch" in ctx && o.stretch) ctx.fontStretch = o.stretch as CanvasFontStretch;
}

export function flow(ctx: CanvasRenderingContext2D, o: FlowOptions): Layout {
  setFont(ctx, o);
  const cache = new Map<string, number>();
  const measure = (t: string) => {
    let w = cache.get(t);
    if (w === undefined) {
      w = ctx.measureText(t).width;
      cache.set(t, w);
    }
    return w;
  };
  const space = measure(" ");
  const lines: Layout["lines"] = [];
  const n = o.tokens.length;
  let k = 0;
  let line = 0;
  if (!n) return { lines, count: 0 };
  for (let y = o.top; y + o.lh <= o.H + 0.01; y += o.lh, line++) {
    let spans: [number, number][] = [[o.side, o.W - o.side]];
    for (const r of o.excl) {
      if (r.y2 <= y || r.y1 >= y + o.lh) continue;
      const next: [number, number][] = [];
      for (const [a, b] of spans) {
        if (r.x2 <= a || r.x1 >= b) {
          next.push([a, b]);
          continue;
        }
        if (r.x1 > a) next.push([a, r.x1]);
        if (r.x2 < b) next.push([r.x2, b]);
      }
      spans = next;
    }
    const words: LaidWord[] = [];
    for (const [a, b] of spans) {
      if (b - a < 64) continue;
      let x = a;
      for (;;) {
        const tk = o.tokens[k % n];
        const w = measure(tk.t);
        if (x + w > b) break;
        words.push({ x, w, t: tk.t, blue: Boolean(o.blue?.has(tk.t.replace(/[.,;:’']+$/, ""))) });
        x += w + (tk.cjk ? 0 : space);
        k++;
      }
    }
    lines.push({ y, words });
  }
  return { lines, count: line };
}

export function drawMask(canvas: HTMLCanvasElement, layout: Layout, o: FlowOptions, dpr: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  setFont(ctx, o);
  for (const ln of layout.lines) {
    for (const w of ln.words) {
      ctx.fillStyle = w.blue ? "#0000ff" : "#ff0000";
      ctx.fillText(w.t, w.x, ln.y + o.lh * 0.78);
    }
  }
}
