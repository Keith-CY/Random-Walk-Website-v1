// Content for the home page examination. Scores, dataset steps and the release log are real;
// the next-word probabilities and the objects labelled on the painting are made up for the demo.

export type LayerMode = 0 | 1 | 2 | 3 | 4 | 5; // visible, infrared, x-ray, raking, ultraviolet, token map

export type Step = {
  mode: LayerMode;
  tone: "night" | "day";
  index: string;
  instrument: string;
  setting: string;
  lens: string;
  kicker?: string;
  title: string;
  body?: string;
  receive?: string;
};

export const steps: Step[] = [
  {
    mode: 0,
    tone: "night",
    index: "Visible",
    instrument: "Visible light",
    setting: "400–700 nm",
    lens: "the words in the paint",
    title: "A model is made in layers.",
    body: "Look closely at an old painting and you find it was built slowly: a drawing, an underpainting, glaze upon glaze. A good model is made the same way. Random Walk is an AI lab for growing companies: we choose the right model, build the data, train it when it pays and keep it running in your own cloud, server room or Macs."
  },
  {
    mode: 5,
    tone: "night",
    index: "The next word",
    instrument: "Token map",
    setting: "One word per stroke",
    lens: "the model's words",
    kicker: "The next word",
    title: "A general model paints the gist. Yours paints the detail."
  },
  {
    mode: 1,
    tone: "day",
    index: "Infrared · data",
    instrument: "Infrared reflectogram",
    setting: "1,100–1,700 nm",
    lens: "steps from our dataset",
    kicker: "i. Data",
    title: "Beneath the paint, the drawing.",
    body: "Infrared passes through paint and finds the lines drawn first. Beneath a model, those lines are its data. Ours are drawn from the software companies open every morning, and the same workshop turns your documents, tickets and screen recordings into training data within days.",
    receive: "You receive a dataset card listing every source, every exclusion and the audited error rate."
  },
  {
    mode: 2,
    tone: "night",
    index: "X-ray · base model",
    instrument: "X-radiograph",
    setting: "40 kV, 10 mA",
    lens: "what the base model read",
    kicker: "ii. Base model",
    title: "Beneath the drawing, an earlier picture.",
    body: "X-rays often find a second painting under the first. Models are made the same way, over an open base model someone else trained. We choose that foundation for your task, your languages and your hardware, and paint over it only where your field demands.",
    receive: "You receive the base model's licence, the training runs and their logs."
  },
  {
    mode: 3,
    tone: "night",
    index: "Raking light · evaluation",
    instrument: "Raking light",
    setting: "8° from the left",
    lens: "the tests it must pass",
    kicker: "iii. Training and evaluation",
    title: "Light from the side shows every stroke.",
    body: "We train on the work your people actually do, and agree a test with you before anything ships. Every release is held up to it beside the base model and a plain rules-based tool.",
    receive: "You receive the model weights and an evaluation report you can re-run."
  },
  {
    mode: 4,
    tone: "night",
    index: "Ultraviolet · upkeep",
    instrument: "Ultraviolet fluorescence",
    setting: "365 nm",
    lens: "the release log",
    kicker: "iv. Deployment and upkeep",
    title: "Ultraviolet shows every later retouch.",
    body: "We deploy where your data already lives: on vLLM in your cloud or server room, or on your Macs with Melix. Then we watch the model, retrain it on new material and sign every release.",
    receive: "You receive a versioned model, a runbook and a change log."
  }
];

export type Domain = {
  key: string;
  label: string;
  prompt: string;
  /** [word, base model probability, trained model probability] */
  candidates: [string, number, number][];
  trained: string[];
  base: string[];
};

export const domains: Domain[] = [
  {
    key: "contracts",
    label: "Contracts",
    prompt: "Under our standard distributor agreement, liability is capped at",
    candidates: [["twelve", 0.09, 0.68], ["the", 0.31, 0.07], ["an", 0.18, 0.04], ["fees", 0.08, 0.11], ["100%", 0.12, 0.03]],
    trained: [
      "Under our standard distributor agreement, liability is capped at twelve months' fees paid before the claim.",
      "Either party may end the agreement on ninety days' written notice before the renewal date.",
      "Consequential loss is excluded, save for fraud or wilful misconduct.",
      "Schedule B sets out the rebates, the service levels and the credits payable.",
      "Stock returned within thirty days is credited at the invoiced price less a ten per cent restocking fee."
    ],
    base: [
      "The agreement probably limits liability in some way, depending on how it is written.",
      "Contracts usually say something about ending the relationship, so it is worth checking.",
      "There may be exclusions, or there may not be, and a lawyer can usually help.",
      "Generally speaking, agreements like this include some provisions about this kind of thing."
    ]
  },
  {
    key: "support",
    label: "Support",
    prompt: "Customers on the Studio plan who report a sync error should first",
    candidates: [["reset", 0.06, 0.64], ["contact", 0.34, 0.08], ["check", 0.27, 0.12], ["restart", 0.15, 0.09], ["update", 0.1, 0.04]],
    trained: [
      "Customers on the Studio plan who report a sync error should first reset the workspace token from Settings, then sign in again.",
      "If the error returns within an hour, collect the sync log and escalate to tier two with the workspace ID.",
      "Studio plans renew on the first of the month; failed payments pause sync after seven days.",
      "Refunds for Studio plans are prorated to the day and issued to the original card."
    ],
    base: [
      "The customer should probably try a few things, such as checking their connection.",
      "Sync errors can happen for many reasons and support can usually help.",
      "It may be worth restarting the app or updating it to the latest version.",
      "If that does not work, the customer could contact someone for more help."
    ]
  },
  {
    key: "accounts",
    label: "Accounts",
    prompt: "Invoices from our Japanese distributors are settled within",
    candidates: [["sixty", 0.07, 0.71], ["thirty", 0.41, 0.12], ["30", 0.22, 0.06], ["ninety", 0.05, 0.05], ["the", 0.12, 0.03]],
    trained: [
      "Invoices from our Japanese distributors are settled within sixty days of the end of the month of delivery.",
      "Payments above ¥5,000,000 need a second approval from the finance lead before release.",
      "Credit notes are matched to the original invoice number and posted in the same period.",
      "Foreign-currency invoices are booked at the rate on the delivery date and revalued at month end."
    ],
    base: [
      "Invoices are usually paid within a standard period, often around thirty days.",
      "Payment terms can vary between companies and it is best to check the contract.",
      "Some businesses pay faster and some pay slower, depending on the situation.",
      "The accounting team would normally know the exact rules for this."
    ]
  }
];

export const highlighted = new Set(["twelve", "reset", "sixty"]);

/** What the lens reads beneath the paint at each depth. */
export const corpora: Record<"visible" | "infrared" | "xray" | "raking" | "ultraviolet", string[]> = {
  visible: [
    "Random Walk is an AI lab for growing companies. We choose the right model, build the data, train it when it pays and keep it running.",
    "Under our standard distributor agreement, liability is capped at twelve months' fees paid before the claim.",
    "Spindle vibration above 4.5 mm/s after 600 operating hours usually points to bearing wear on the drive side.",
    "請求書の支払期限は受領後六十日以内とする。",
    "Customers on the Studio plan who report a sync error should first reset the workspace token.",
    "合同第七条约定的保修期自验收之日起计算。",
    "Invoices from our Japanese distributors are settled within sixty days of the end of the month.",
    "보증 기간은 인수일로부터 24개월이다.",
    "Every release is measured against a test agreed before anything ships.",
    "Delivered where it must run: your cloud, your server room or your Macs."
  ],
  infrared: [
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
  ],
  xray: [
    "The history of the region dates back to the first settlements along the river.",
    "In mathematics, a prime number is a natural number greater than one with no divisors but itself and one.",
    "The recipe calls for two cups of flour, a pinch of salt and a little patience.",
    "Photosynthesis turns light into chemical energy.",
    "The match ended in a draw after extra time.",
    "Many languages borrow words from their neighbours.",
    "The museum reopened after a long restoration.",
    "Rain is expected across the north by the weekend."
  ],
  raking: [
    "Frozen offline test, 477 steps: action score 0.326 before training, 0.770 after.",
    "Reconciliation arena, one month of entries: rules engine 36, local 27B model 72, GPT-5.6-SOL 84.",
    "Data refinery arena: rules 31% of records clean, local 27B 83%, GPT-5.6-SOL 100%.",
    "Spot check, 1,015 steps: click on target about 90%, whole action right about 70%.",
    "Test: open the Night Shift schedule. Expected click near (0.65, 0.44). PASS",
    "Test: create a script in Godot's Attach Script dialog. Expected the Create button. PASS"
  ],
  ultraviolet: [
    "v1 · 23 September 2026 · 1,616 steps across two topics",
    "v1.1 · 24 September 2026 · a held-out development split",
    "v2 · 25 September 2026 · 15,854 steps; Blender and Godot added",
    "v2.1 · 25 September 2026 · audited release",
    "deployed on vLLM in the client's own cloud, or on Macs with Melix",
    "monitoring, retraining on new material and a change log for every release"
  ]
};

/** Marks placed on The Meridian, in fractions of the painting. */
export const painting = {
  src: "/paintings/home.jpg",
  ghost: "/paintings/home-xray.jpg",
  size: [1664, 1040] as [number, number],
  focus: [0.6, 0.5] as [number, number],
  boxes: [
    [0.69, 0.12, 0.075, 0.46, "window 0.97"],
    [0.528, 0.245, 0.05, 0.09, "aperture 0.91"],
    [0.49, 0.595, 0.17, 0.225, "person 0.99"],
    [0.495, 0.8, 0.12, 0.07, "ledger 0.95"],
    [0.4, 0.755, 0.08, 0.055, "sunlight 0.88"]
  ] as [number, number, number, number, string][],
  // X-ray: the base model is the astronomer in the night painting beneath; your layer is the scholar painted over him.
  xray: [
    [0.43, 0.55, "The earlier picture: an open base model", false],
    [0.58, 0.66, "Your layer: continued pre-training", false]
  ] as [number, number, string, boolean][],
  // Raking light: each score sits where measuring happens in the painting.
  raking: [
    [0.44, 0.5, "Clicks on target: about 90%", false],
    [0.468, 0.74, "Action score 0.33 → 0.77", false],
    [0.55, 0.835, "Reconciliation: rules 36, 27B 72, GPT-5.6-SOL 84", false]
  ] as [number, number, string, boolean][],
  // Ultraviolet: each release is a retouch on the graduated meridian, oldest nearest the viewer,
  // the latest where today's light falls under the dividers. Kept above y 0.9 so wide screens still show them.
  spots: [
    [0.499, 0.88, 0.012, 0.01, "v1 · 23 Sep 2026 · 1,616 steps", false],
    [0.488, 0.84, 0.012, 0.01, "v1.1 · 24 Sep · development split", false],
    [0.476, 0.8, 0.012, 0.01, "v2 · 25 Sep · 15,854 steps", false],
    [0.465, 0.76, 0.012, 0.01, "v2.1 · 25 Sep · audited", false]
  ] as [number, number, number, number, string, boolean][]
};

const alternatives: Record<string, [string, number][]> = {
  twelve: [["twelve", 0.68], ["fees", 0.11], ["the", 0.07]],
  reset: [["reset", 0.64], ["check", 0.12], ["restart", 0.09]],
  sixty: [["sixty", 0.71], ["thirty", 0.12], ["30", 0.06]],
  model: [["model", 0.58], ["system", 0.17], ["tool", 0.09]],
  release: [["release", 0.61], ["version", 0.2], ["update", 0.08]],
  data: [["data", 0.55], ["records", 0.18], ["files", 0.12]]
};
const pool = ["the", "a", "your", "model", "contract", "release", "data", "clause", "field", "team", "report", "source", "term", "device", "record", "step"];

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 10000) / 10000;
}

/** Plausible next-word odds for any word under the lens. */
export function candidatesFor(word: string): [string, number][] {
  const clean = word.replace(/[.,;:’'()]+$/g, "");
  const key = clean.toLowerCase();
  if (alternatives[key]) return alternatives[key];
  const p = +(0.38 + hash(key) * 0.54).toFixed(2);
  const a = pool[Math.floor(hash(`${key}a`) * pool.length)];
  const b = pool[Math.floor(hash(`${key}b`) * pool.length)];
  const second = +((1 - p) * (0.45 + hash(`${key}c`) * 0.3)).toFixed(2);
  return [[clean, p], [a === key ? "it" : a, second], [b === key || b === a ? "this" : b, +((1 - p - second) * 0.5).toFixed(2)]];
}
