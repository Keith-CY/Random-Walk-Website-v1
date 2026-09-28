// Shared by every language: the order of the layers, where the marks sit on the painting and how
// the lens makes up next-word odds. The words themselves live in ./content.ts and lib/translations/*.

export type LayerMode = 0 | 1 | 2 | 3 | 4 | 5; // visible, infrared, x-ray, raking, ultraviolet, token map

export type StepCopy = {
  index: string;
  instrument: string;
  setting: string;
  lens: string;
  kicker?: string;
  title: string;
  body?: string;
  receive?: string;
};

export type Step = StepCopy & { mode: LayerMode; tone: "night" | "day"; titleParts?: string[] };

export const stepFrames: { mode: LayerMode; tone: "night" | "day" }[] = [
  { mode: 0, tone: "night" },
  { mode: 5, tone: "night" },
  { mode: 1, tone: "day" },
  { mode: 2, tone: "night" },
  { mode: 3, tone: "night" },
  { mode: 4, tone: "night" }
];

export type Domain = {
  key: string;
  label: string;
  /** The sentence the model is asked to continue. */
  prompt: string;
  /** [word, base model probability, trained model probability] */
  candidates: [string, number, number][];
  /** Paragraphs as each model writes them. */
  trained: string[];
  base: string[];
};

export type Corpus = "visible" | "infrared" | "xray" | "raking" | "ultraviolet";

/** Real steps from the macOS computer-use dataset, as recorded. Infrared reads them in every language. */
export const datasetSteps = [
  "System Settings · click (0.648, 0.436) · Click the Schedule dropdown showing Off near the upper-right of the Night Shift dialog",
  "CapCut · click (0.690, 0.234) · Click the Custom curve preset tile in the Curve preset row at the top of the right inspector",
  "Blender · hotkey shift+a · Press the shortcut in the Blender 3D Viewport above the seabed plane",
  "Godot · click (0.453, 0.638) · Click the Create button in the lower-right of the Attach Script dialog",
  "Finder · hotkey cmd+shift+n · Press the shortcut in the Finder Desktop file list in the main window",
  "iMovie · hotkey cmd++ · Press the shortcut in the active iMovie timeline panel at the bottom of the workspace",
  "Godot · write · Type button.mouse_exited.connect(_on_mouse_hovered.bind(false))",
  "System Settings · click (0.355, 0.539) · Click the Always option in the open Show scroll bars pop-up menu",
  "Blender · click (0.291, 0.360) · Click the vertical pose bone beneath the large green stacked component",
  "CapCut · click (0.947, 0.934) · Click the Modify button in the project Details panel on the right side of the editor"
];

export type Lexicon = {
  /** Fixed odds for words worth showing. */
  alternatives: Record<string, [string, number][]>;
  /** Words to draw other candidates from. */
  pool: string[];
  /** Used when a pool word repeats the word under the lens. */
  fallback: [string, string];
};

export type ExaminationCopy = {
  lang: string;
  steps: StepCopy[];
  /** Names of the demo's subjects, in the order of the English demo in ./content.ts. */
  domainLabels: string[];
  /** What the lens reads beneath the paint at each depth; infrared always reads datasetSteps. */
  corpora: Record<Exclude<Corpus, "infrared">, string[]>;
  /** Labels for the marks on the painting, in the order of painting.boxes, .xray, .raking and .spots. */
  marks: { boxes: string[]; xray: string[]; raking: string[]; spots: string[] };
  lexicon: Lexicon;
  ui: {
    subject: string;
    model: string;
    base: string;
    trained: string;
    light: string;
    setting: string;
    lens: string;
    /** "{lens}" is replaced with the step's lens. */
    lensValue: string;
    position: string;
    layers: string;
    tip: string;
  };
};

export type ExaminationContent = {
  lang: string;
  steps: Step[];
  domains: Domain[];
  /** The words the trained model gets right; drawn in blue. */
  highlighted: string[];
  corpora: Record<Corpus, string[]>;
  lexicon: Lexicon;
  tip: string;
};

/** Marks placed on The Meridian, in fractions of the painting. */
export const painting = {
  src: "/paintings/home.jpg",
  ghost: "/paintings/home-xray.jpg",
  size: [1664, 1040] as [number, number],
  focus: [0.6, 0.5] as [number, number],
  // [x, y, width, height, detector confidence]
  boxes: [
    [0.69, 0.12, 0.075, 0.46, 0.97],
    [0.528, 0.245, 0.05, 0.09, 0.91],
    [0.49, 0.595, 0.17, 0.225, 0.99],
    [0.495, 0.8, 0.12, 0.07, 0.95],
    [0.4, 0.755, 0.08, 0.055, 0.88]
  ] as [number, number, number, number, number][],
  // X-ray: the astronomer beneath, then the scholar painted over him.
  xray: [
    [0.43, 0.55],
    [0.58, 0.66]
  ] as [number, number][],
  // Raking light: the telescope, the dividers and the ledger.
  raking: [
    [0.44, 0.5],
    [0.468, 0.74],
    [0.55, 0.835]
  ] as [number, number][],
  // Ultraviolet: retouches along the graduated meridian, oldest nearest the viewer, the latest where
  // today's light falls under the dividers. Kept above y 0.9 so wide screens still show them.
  spots: [
    [0.499, 0.88, 0.012, 0.01],
    [0.488, 0.84, 0.012, 0.01],
    [0.476, 0.8, 0.012, 0.01],
    [0.465, 0.76, 0.012, 0.01]
  ] as [number, number, number, number][]
};

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 10000) / 10000;
}

/** Trailing punctuation in any of the site's languages. */
export const trailingPunctuation = /[.,;:!?’'()「」『』（）、。，；：！？]+$/u;

/** Plausible next-word odds for any word under the lens. */
export function candidatesFor(word: string, lexicon: Lexicon): [string, number][] {
  const clean = word.replace(trailingPunctuation, "");
  const key = clean.toLowerCase();
  if (lexicon.alternatives[key]) return lexicon.alternatives[key];
  const { pool, fallback } = lexicon;
  const p = +(0.38 + hash(key) * 0.54).toFixed(2);
  const a = pool[Math.floor(hash(`${key}a`) * pool.length)];
  const b = pool[Math.floor(hash(`${key}b`) * pool.length)];
  const second = +((1 - p) * (0.45 + hash(`${key}c`) * 0.3)).toFixed(2);
  return [[clean, p], [a === key ? fallback[0] : a, second], [b === key || b === a ? fallback[1] : b, +((1 - p - second) * 0.5).toFixed(2)]];
}
