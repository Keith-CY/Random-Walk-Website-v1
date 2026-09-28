import type { Locale } from "../i18n";
import { ja } from "../translations/ja";
import { ko } from "../translations/ko";
import { zh } from "../translations/zh";
import { phraseParts } from "../phrases";
import { datasetSteps, stepFrames, type Domain, type ExaminationContent, type ExaminationCopy, type Lexicon } from "./data";

// The words of the home page examination. Scores, dataset steps and the release log are real;
// the next-word odds and the objects labelled on the painting are made up for the demo.
// Server components read this and hand the browser only the current language.

// The next-word demo reads in English in every language; only the subject buttons are translated.
const demo: { domains: Domain[]; highlighted: string[]; alternatives: Lexicon["alternatives"] } = {
  domains: [
    {
      key: "contracts",
      label: "Contracts",
      prompt: "Under our standard distributor agreement, liability is capped at",
      candidates: [["twelve", 0.09, 0.68], ["the", 0.31, 0.07], ["an", 0.18, 0.04], ["fees", 0.08, 0.11], ["100%", 0.12, 0.03]],
      trained: [
        "Under our standard distributor agreement, liability is capped at twelve months' fees paid before the claim.",
        "Either party may end the agreement on ninety days' written notice before the renewal date.",
        "Consequential loss is excluded, save for fraud or willful misconduct.",
        "Schedule B sets out the rebates, the service levels and the credits payable.",
        "Stock returned within thirty days is credited at the invoiced price less a ten percent restocking fee."
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
  ],
  highlighted: ["twelve", "reset", "sixty"],
  alternatives: {
    twelve: [["twelve", 0.68], ["fees", 0.11], ["the", 0.07]],
    reset: [["reset", 0.64], ["check", 0.12], ["restart", 0.09]],
    sixty: [["sixty", 0.71], ["thirty", 0.12], ["30", 0.06]]
  }
};

const en: ExaminationCopy = {
  lang: "en",
  steps: [
    {
      index: "Visible",
      instrument: "Visible light",
      setting: "400–700 nm",
      lens: "the words in the paint",
      title: "A model is made in layers.",
      body: "Look closely at an old painting and you find it was built slowly: a drawing, an underpainting, glaze upon glaze. A good model is made the same way. Random Walk is an AI lab for growing companies: we choose the right model, build the data, train it when it pays and keep it running in your own cloud, server room or Macs."
    },
    {
      index: "The next word",
      instrument: "Token map",
      setting: "One word per stroke",
      lens: "the model's words",
      kicker: "The next word",
      title: "A general model paints the gist. Yours paints the detail."
    },
    {
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
      index: "X-ray · base model",
      instrument: "X-radiograph",
      setting: "40 kV, 10 mA",
      lens: "what the base model read",
      kicker: "ii. Base model",
      title: "Beneath the drawing, an earlier picture.",
      body: "X-rays often find a second painting under the first. Models are made the same way, over an open base model someone else trained. We choose that foundation for your task, your languages and your hardware, and paint over it only where your field demands.",
      receive: "You receive the base model's license, the training runs and their logs."
    },
    {
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
      index: "Ultraviolet · upkeep",
      instrument: "Ultraviolet fluorescence",
      setting: "365 nm",
      lens: "the release log",
      kicker: "iv. Deployment and upkeep",
      title: "Ultraviolet shows every later retouch.",
      body: "We deploy where your data already lives: on vLLM in your cloud or server room, or on your Macs with Melix. Then we watch the model, retrain it on new material and sign every release.",
      receive: "You receive a versioned model, a runbook and a change log."
    }
  ],
  domainLabels: ["Contracts", "Support", "Accounts"],
  corpora: {
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
    xray: [
      "The history of the region dates back to the first settlements along the river.",
      "In mathematics, a prime number is a natural number greater than one with no divisors but itself and one.",
      "The recipe calls for two cups of flour, a pinch of salt and a little patience.",
      "Photosynthesis turns light into chemical energy.",
      "The match ended in a draw after extra time.",
      "Many languages borrow words from their neighbors.",
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
  },
  marks: {
    boxes: ["window", "aperture", "person", "ledger", "sunlight"],
    // X-ray: the base model is the astronomer in the night painting beneath; your layer is the scholar painted over him.
    xray: ["The earlier picture: an open base model", "Your layer: continued pre-training"],
    // Raking light: each score sits where measuring happens in the painting.
    raking: ["Clicks on target: about 90%", "Action score 0.33 → 0.77", "Reconciliation: rules 36, 27B 72, GPT-5.6-SOL 84"],
    // Ultraviolet: each release is a retouch on the graduated meridian, oldest nearest the viewer.
    spots: ["v1 · 23 Sep 2026 · 1,616 steps", "v1.1 · 24 Sep · development split", "v2 · 25 Sep · 15,854 steps", "v2.1 · 25 Sep · audited"]
  },
  lexicon: {
    alternatives: {
      model: [["model", 0.58], ["system", 0.17], ["tool", 0.09]],
      release: [["release", 0.61], ["version", 0.2], ["update", 0.08]],
      data: [["data", 0.55], ["records", 0.18], ["files", 0.12]]
    },
    pool: ["the", "a", "your", "model", "contract", "release", "data", "clause", "field", "team", "report", "source", "term", "device", "record", "step"],
    fallback: ["it", "this"]
  },
  ui: {
    subject: "Example subject",
    model: "Which model writes",
    base: "Base model",
    trained: "Trained on your data",
    light: "Light",
    setting: "Setting",
    lens: "Lens",
    lensValue: "Lens: {lens}",
    position: "Position",
    layers: "Layers of the painting",
    tip: "Odds for the next word"
  }
};

const copies: Record<Locale, ExaminationCopy> = { en, zh: zh.examination, ja: ja.examination, ko: ko.examination };

export function getExaminationCopy(locale: Locale): ExaminationCopy {
  return copies[locale];
}

/** What the engine needs, in the shape it reads. */
export function getExaminationContent(locale: Locale): ExaminationContent {
  const copy = copies[locale];
  return {
    lang: copy.lang,
    // Word edges are worked out here, on the server, so the browser renders exactly what was prerendered.
    steps: stepFrames.map((frame, i) => ({ ...frame, ...copy.steps[i], titleParts: phraseParts(copy.steps[i].title) })),
    domains: demo.domains.map((domain, i) => ({ ...domain, label: copy.domainLabels[i] })),
    highlighted: demo.highlighted,
    corpora: { ...copy.corpora, infrared: datasetSteps },
    lexicon: { ...copy.lexicon, alternatives: { ...demo.alternatives, ...copy.lexicon.alternatives } },
    tip: copy.ui.tip
  };
}
