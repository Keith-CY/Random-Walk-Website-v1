// Flows words across the canvas in reading order, around the page's own text, and paints them
// into a mask: red for ordinary words, blue for the words the demo highlights.

export type Token = { t: string; cjk?: boolean };
export type Rect = { x1: number; x2: number; y1: number; y2: number };
export type LaidWord = { x: number; w: number; t: string; blue: boolean };
export type Layout = { lines: { y: number; words: LaidWord[] }[]; count: number };
export type FlowOptions = { W: number; H: number; top: number; side: number; lh: number; font: string; stretch?: string; tokens: Token[]; excl: Rect[]; blue?: Set<string> };

const cjk = /[぀-ヿ一-鿿가-힯]/;
const trailing = /[.,;:’'。、，；：]+$/u;

type Segmenter = { segment: (input: string) => Iterable<{ segment: string }> };
const segmenters = new Map<string, Segmenter | null>();

function segmenterFor(lang: string): Segmenter | null {
  if (!segmenters.has(lang)) {
    const Ctor = (Intl as unknown as { Segmenter?: new (lang: string, o: { granularity: "word" }) => Segmenter }).Segmenter;
    segmenters.set(lang, Ctor ? new Ctor(lang, { granularity: "word" }) : null);
  }
  return segmenters.get(lang) ?? null;
}

/** Words of a CJK run: the browser's word breaker when it has one, three characters at a time when not. */
function pieces(run: string, lang: string): string[] {
  const seg = segmenterFor(lang);
  if (seg) return [...seg.segment(run)].map((s) => s.segment);
  const out: string[] = [];
  for (const part of run.split(/(\s+)/)) {
    if (/^\s+$/.test(part)) out.push(part);
    else for (let i = 0; i < part.length; i += 3) out.push(part.slice(i, i + 3));
  }
  return out;
}

/**
 * Splits paragraphs into the words the lens reads. Latin text breaks at spaces. Chinese, Japanese and
 * Korean break at word edges.
 */
export function tokenize(paragraphs: readonly string[], lang = "en"): Token[] {
  const out: Token[] = [];
  for (const p of paragraphs) {
    if (cjk.test(p)) {
      const start = out.length;
      for (const piece of pieces(p, lang)) {
        if (!piece) continue;
        if (/^\s+$/.test(piece)) {
          if (out.length > start) out[out.length - 1].cjk = false;
        } else {
          out.push({ t: piece, cjk: true });
        }
      }
      if (out.length > start) out[out.length - 1].cjk = false;
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
        words.push({ x, w, t: tk.t, blue: Boolean(o.blue?.has(tk.t.replace(trailing, ""))) });
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
