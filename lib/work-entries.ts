import { paintings, type Painting } from "./site-copy";

export type WorkEntry = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  painting: Painting | null;
  status?: string;
  facts: { label: string; value: string }[];
  sections: { title: string; body: string[] }[];
  table?: { caption: string; head: string[]; rows: string[][] };
};

export const workEntries: WorkEntry[] = [
  {
    slug: "mac-computer-use",
    kicker: "Model Train",
    title: "Teaching a model to use a Mac",
    summary: "A dataset for the Mac software companies use today, and a Qwen3.5-9B model trained on it.",
    painting: paintings.macComputerUse,
    facts: [
      { label: "Dataset", value: "15,854 steps in 450 tasks" },
      { label: "Base model", value: "Qwen3.5-9B" },
      { label: "Action score", value: "0.33 → 0.77" }
    ],
    sections: [
      {
        title: "The data",
        body: [
          "We turned 175 of the most-watched tutorials for macOS, video editing, Blender and Godot into 450 tasks: every click, keystroke and drag, with the reason for it and the exact point on the screen.",
          "Labels are made by models and audited by sampling. In spot checks of 1,015 steps, about 90% of clicks land on the right target and about 70% of actions are fully right."
        ]
      },
      {
        title: "The model",
        body: [
          "We chose Qwen3.5-9B because it can read a screen and still runs on a single Mac, then trained a LoRA adapter on the dataset.",
          "On a frozen 477-step offline test, its action score rose from 0.33 to 0.77. This is our own offline test, not an official benchmark, and part of the gain comes from learning the answer format."
        ]
      },
      {
        title: "What comes next",
        body: ["Live evaluation on real tasks, where success, recovery and wasted actions all count, not only whether the next action matches."]
      }
    ]
  },
  {
    slug: "business-arenas",
    kicker: "Showcases",
    title: "Models at the counting-house desk",
    summary: "Live 3D arenas where models do real office work, each scored against a rules-based tool.",
    painting: paintings.businessArenas,
    facts: [
      { label: "Reconciliation, rules engine", value: "36" },
      { label: "Reconciliation, local 27B model", value: "72" },
      { label: "Reconciliation, GPT-5.6-SOL", value: "84" }
    ],
    sections: [
      {
        title: "Why arenas",
        body: [
          "A benchmark score says little to a head of finance. So we built rooms where the work is visible: two paper tapes of bank statement and ledger hang from the ceiling, and every entry the model pairs is sewn with a golden thread.",
          "Each arena has a real rules-based baseline and exact ground truth, so the score is not a matter of taste."
        ]
      },
      {
        title: "Running them",
        body: ["For now the arenas replay recorded runs. Soon they will run a model in your browser."]
      }
    ],
    table: {
      caption: "Scores from single recorded runs",
      head: ["Arena", "Rules", "Local 27B", "GPT-5.6-SOL"],
      rows: [
        ["Reconciliation", "36", "72", "84"],
        ["Data refinery", "31%", "83%", "100%"],
        ["Query planning", "56", "63", "99"]
      ]
    }
  },
  {
    slug: "turnvector",
    kicker: "Token Plant",
    title: "Many models, one machine",
    summary: "TurnVector lets several AI models share one Apple Silicon machine, keeping every conversation responsive.",
    painting: paintings.turnvector,
    status: "In development",
    facts: [
      { label: "Status", value: "In development" },
      { label: "Qualification", value: "12 lanes, 385 cases" }
    ],
    sections: [
      {
        title: "The problem",
        body: ["A company rarely runs one model. A drafting model, a search model and a screen-reading model all want the same Mac, and the one a person is waiting on should not stall behind a long batch job."]
      },
      {
        title: "The approach",
        body: [
          "TurnVector gives each model short, bounded turns on the machine. Interactive answers stay fast, the machine is shared fairly between models, and throughput comes last, never at the cost of the first two.",
          "It is written in Rust and qualified by a separate benchmark of 12 lanes and 385 cases, which never counts a missing feature as a pass."
        ]
      }
    ]
  },
  {
    slug: "sayit",
    kicker: "Product",
    title: "SayIt",
    summary: "Dictation on the Mac that never leaves the machine.",
    painting: null,
    facts: [{ label: "Runs on", value: "Apple Silicon Macs" }],
    sections: [
      {
        title: "What it does",
        body: ["SayIt turns speech into text with a local model, shows a live preview and pastes straight into the app you are working in. No audio is sent to the cloud."]
      }
    ]
  }
];

export function getWorkEntry(slug: string) {
  return workEntries.find((entry) => entry.slug === slug);
}

/** Web3 products from before the AI lab, kept on a low-key page. */
export const earlierWorkSlugs = ["neuron", "1-tok", "fiber-link", "utxo-data", "distributed-paradigm"] as const;
