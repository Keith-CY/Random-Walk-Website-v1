import type { Locale } from "./i18n";

// Copy for the rebuilt site. English is the source of truth; zh, ja and ko reuse it until the
// English is final and translated (see docs/site-content-draft.md).

export type Painting = { src: string; alt: string; width: number; height: number };

const painting = (name: string, alt: string): Painting => ({ src: `/paintings/${name}.jpg`, alt, width: 1664, height: 1040 });

export const paintings = {
  home: painting("home", "An oil painting of an observatory hall: a beam of sunlight from a round opening falls on a graduated brass line in the floor, where a scholar in an indigo robe kneels to mark it with dividers."),
  homeXray: painting("home-xray", "The same observatory hall at night, an astronomer at a brass telescope and a lantern on the floor."),
  services: painting("services", "An oil painting of a clockmaker's shop: a lady reaches for a smartwatch hanging among gold pocket watches while a longcase clock is fitted for a gentleman."),
  datasets: painting("datasets", "An oil painting of three apprentices copying an anatomical drawing from a modern display that stands among inkwells, while their master checks the copies."),
  macComputerUse: painting("mac-computer-use", "An oil painting of an old master guiding a young clerk who works on an open MacBook Pro among quills and an Imari cup."),
  businessArenas: painting("business-arenas", "An oil painting of clerks reconciling ledgers in a counting house, a roll of receipt paper spilling over the table."),
  turnvector: painting("turnvector", "An oil painting of three musicians sharing one harpsichord by candlelight, a Mac Studio on the side table."),
  melix: painting("melix", "A still life of a pewter jug, a peeled lemon, an Imari bowl, walnuts and a Mac Studio on a stone ledge."),
  company: painting("company", "An oil painting of a painter's workshop, assistants in robes seen from behind at their easels."),
  contact: painting("contact", "An oil painting of a merchant writing a letter of commission at a black and gold lacquer writing box."),
  notFound: painting("not-found", "A vanitas still life: an empty gilded frame, a snuffed candle, an hourglass, a pocket watch and a wilting tulip."),
  noteAssay: painting("note-assay", "An oil painting of an assay office: an assayer tests a gold bar on a touchstone beside a brass balance, a small modern flash drive among the weights."),
  noteAlcove: painting("note-alcove", "An oil painting of a cabinetmaker measuring an empty alcove with a brass-tipped rod before building a clock to fit it, a modern laser measure on the floor.")
} as const;

/** Each note has its own painting; notes without one fall back to the workshop. */
export const notePaintings: Record<string, Painting> = {
  "evaluate-local-lora": paintings.noteAssay,
  "private-deployment-boundaries": paintings.noteAlcove
};

export const company = {
  name: "Random Walk株式会社",
  nameLatin: "Random Walk K.K.",
  corporateNumber: "7040001125050",
  registered: "14 September 2022",
  addressBlock: "東京都東大和市新堀1丁目",
  addressBlockLatin: "Shinbori 1-chome, Higashiyamato, Tokyo, Japan",
  addressFull: "〒207-0012 東京都東大和市新堀1丁目1432-83-203",
  addressFullLatin: "1432-83-203 Shinbori 1-chome, Higashiyamato, Tokyo 207-0012, Japan",
  email: "biz@random-walk.co.jp",
  // The office door, as placed on the previous site's map; the GSI geocoder puts lot 1432 within about 60 m of it.
  coordinates: "35.7401,139.4497"
} as const;

const en = {
  nav: {
    items: [
      { label: "Services", href: "/services" },
      { label: "Datasets", href: "/datasets" },
      { label: "Work", href: "/work" },
      { label: "Melix", href: "/melix" },
      { label: "Company", href: "/company" }
    ],
    cta: "Start a project",
    menu: "Menu",
    language: "Change language",
    home: "Random Walk home"
  },
  footer: {
    line: "An AI lab for growing companies. We choose the model, build the data, train it where it pays, and keep it running on your own machines.",
    groups: [
      { title: "The lab", links: [{ label: "Services", href: "/services" }, { label: "Datasets", href: "/datasets" }, { label: "Work", href: "/work" }, { label: "Melix", href: "/melix" }] },
      { title: "Company", links: [{ label: "About", href: "/company" }, { label: "Notes", href: "/notes" }, { label: "Earlier work", href: "/earlier-work" }, { label: "Start a project", href: "/contact" }] },
      { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Security", href: "/security" }, { label: "Responsible use", href: "/legal/responsible-use" }] }
    ],
    credits: "Paintings made in our own studio.",
    copyright: "© 2026 Random Walk K.K."
  },
  home: {
    title: "A model is made in layers",
    description: "Random Walk is an AI lab for growing companies. We choose the right model, build the data, train it when it pays and keep it running in your own cloud, server room or Macs.",
    lensHint: "Move across the painting to read what each layer is made of."
  },
  close: {
    title: "Every commission begins with a conversation.",
    body: "Tell us what the work is, what data you keep and where it has to run. We reply within two business days.",
    cta: "Start a project"
  },
  services: {
    kicker: "Services",
    title: "Ready-made, or made to measure.",
    lede: "Every project starts by learning the work. Then we decide together what it needs: a good existing model, fitted with care, or a model of your own. Most companies begin with the first and reach for the second where it pays.",
    levels: [
      {
        name: "Ready-made",
        title: "An existing model, fitted to your work",
        body: "For work that general models already do well: drafting, summarising, answering from your own documents, filling in forms. The craft is in the fitting.",
        items: [
          "We map the workflow and the data it touches.",
          "We choose the model and connect it to your documents and tools.",
          "We agree a test and measure the model against it.",
          "We deploy on vLLM in your cloud or server room, or on your Macs with Melix.",
          "We keep it running and bring in better models as they appear.",
          "If your data cannot leave your building, we do the work offline on site."
        ]
      },
      {
        name: "Made to measure",
        title: "A model of your own",
        body: "For work that depends on what only your company knows, its terms, procedures, formats and software, or for when you need a smaller model that lives on your own hardware.",
        lead: "Everything in Ready-made, plus:",
        items: [
          "a dataset built from your material, with a dataset card;",
          "fine-tuning and preference tuning on your people's real tasks;",
          "continued pre-training, when your field's vocabulary is missing from general models."
        ]
      }
    ],
    processTitle: "How a project runs",
    process: [
      { title: "Understand the business.", receive: "You receive a written map of the workflow and where AI helps." },
      { title: "Choose the level.", receive: "You receive a proposal: ready-made or made to measure, with scope and the test we will use." },
      { title: "Prepare the data.", receive: "You receive a dataset card.", note: "Made to measure only." },
      { title: "Train.", receive: "You receive weights and an evaluation report.", note: "Made to measure only." },
      { title: "Deploy.", receive: "You receive a versioned model and a runbook." },
      { title: "Maintain.", receive: "You receive a change log for every release." }
    ],
    whereTitle: "Where it runs",
    where: [
      { place: "Your cloud or server room", how: "served with vLLM" },
      { place: "Your Macs", how: "served with Melix" }
    ],
    adviceTitle: "Advice, before or without a build",
    advice: "A clear read of where AI fits your business, or a second opinion on a system you already run."
  },
  datasets: {
    kicker: "Datasets",
    title: "Data no one else has.",
    lede: "Public datasets teach models the software of a decade ago. We record the tools companies open every morning, and we can gather yours just as quickly.",
    releaseTitle: "The macOS computer-use dataset",
    facts: [
      { value: "15,854", label: "annotated steps" },
      { value: "450", label: "tasks" },
      { value: "175", label: "tutorials" }
    ],
    topics: "Everyday macOS, video editing, Blender and Godot.",
    heldOut: "Held out for testing only: Photoshop, DaVinci Resolve, Audacity, Camtasia, QuickTime and others.",
    audit: "In spot checks of 1,015 steps, about 90% of clicks land on the right target and about 70% of actions are fully right.",
    byTopic: [
      { topic: "Everyday macOS", action: "76%" },
      { topic: "Video editing", action: "78%" },
      { topic: "Blender", action: "71%" },
      { topic: "Godot", action: "55%" }
    ],
    byTopicNote: "Share of actions fully right, by topic. Blender and Godot were checked in batches of 30, so their figures are rougher.",
    honest: "Labels are made by models from tutorial videos and checked by sampling, not by hand.",
    pipelineTitle: "How a tutorial becomes training data",
    pipeline: "We find the tutorials the world learns from and keep only the clear ones. Each is cut into moments. For every moment we recover what was done and why, find the exact spot on the screen, and assemble the moments into tasks. Before release, a random sample is audited again.",
    pace: "From the first release to the second took two days and brought ten times the data.",
    stepsTitle: "Steps from the dataset",
    yoursTitle: "Your dataset",
    yours: "The same workshop, turned to your documents, tickets and screen recordings. If your data cannot leave your building, we work offline on site: we bring the machines, and the data never leaves your hands."
  },
  work: {
    kicker: "Work",
    title: "What we have made.",
    lede: "Our own projects, built the way we build for clients: a dataset, a model, a test it has to pass and the machine it runs on.",
    back: "All work"
  },
  melix: {
    kicker: "Melix",
    title: "Your models, at home on your Macs.",
    lede: "Melix is our inference engine for companies that deploy on Apple Silicon. Register models, serve them, fine-tune them with LoRA, then benchmark and evaluate them, from a native Mac app or the command line. Nothing leaves the machine.",
    capabilities: [
      { title: "Model registry", body: "Import models from disk or from Hugging Face into a registry you control." },
      { title: "Serving", body: "Start, pause, resume and stop local model servers with one command or one click." },
      { title: "LoRA and QLoRA", body: "Train an adapter on your own data, then compare it with the base model side by side." },
      { title: "Benchmarks and evaluation", body: "Run repeatable benchmarks and evaluation suites and keep the results in a format you own." },
      { title: "Native Mac app", body: "A menu bar app and workspace for all of the above, backed by the same command line." }
    ],
    source: "Melix is open source under the Apache 2.0 licence.",
    loopTitle: "One loop, on one machine.",
    window: { src: "/images/melix/window-ui.png", alt: "The Melix window on macOS: a local server running a model with a LoRA adapter, its gateway and serving settings.", width: 2880, height: 1920, caption: "The Melix workspace on macOS, serving a model with a LoRA adapter on the local machine." },
    cover: { src: "/images/product-covers/melix.png", alt: "Melix product page: LoRA training and adapters with MLX, built for Apple Silicon.", width: 1536, height: 1024, caption: "Melix, from the product's own site." },
    repo: "View the repository"
  },
  company: {
    kicker: "Company",
    title: "A path made one step at a time.",
    lede: "A random walk is a path made of small steps, each one a choice. It is also how a language model writes, one word after another. Random Walk is an AI lab that helps growing companies take those steps with a model that knows their business.",
    tokenPlantTitle: "Token Plant",
    tokenPlant: "Token Plant is our public project group. TurnVector, a runtime for running several models on one Apple Silicon machine, comes from it.",
    eventsTitle: "Events",
    registeredTitle: "Registered details",
    registeredNote: "The full registered address appears on the legal pages."
  },
  contact: {
    kicker: "Start a project",
    title: "Every commission begins with a conversation.",
    lede: "Tell us what the work is, what data you keep and where it has to run. We reply within two business days.",
    formTitle: "Tell us about the work.",
    writeTo: "Or write to",
    mapTitle: "Where we are",
    mapBody: "Our studio is in Shinbori, Higashiyamato, on the western edge of Tokyo. We work with companies anywhere, and meet in person by appointment.",
    mapLink: "Open in Google Maps"
  },
  earlierWork: {
    kicker: "Earlier work",
    title: "Earlier work.",
    lede: "Before Random Walk became an AI lab, we built wallets, payment tools and data services for the Nervos CKB blockchain. They are listed here for the record, with links to where each one lives now.",
    back: "All earlier work"
  },
  notes: {
    kicker: "Notes",
    title: "Notes from the workshop.",
    lede: "Short pieces on how we choose, train, test and deploy models for companies, written from the work itself.",
    read: "Read the note",
    back: "All notes",
    by: "By",
    topics: "Topics"
  },
  security: {
    kicker: "Security",
    title: "Your data stays where you decide.",
    lede: "Before any model work starts, we agree the boundary with you: where the data lives, who can reach it, what the model may do and who signs off each release. When the data cannot leave your building, we work offline on site with our own machines.",
    whereTitle: "Where the data lives",
    whereBody: "Your material, the datasets built from it, the model, its adapters, the running service and its logs all stay inside the boundary we draw together.",
    whereHead: ["Where", "Suits", "You receive"],
    places: [
      ["Your Macs", "Teams that want models on their own Apple Silicon machines.", "Setup notes for each machine and the runtime."],
      ["Your server room", "Training and serving on GPUs you own.", "An environment record and an operator runbook."],
      ["Your private cloud", "Dedicated infrastructure with controlled ways in.", "An architecture diagram and access notes."],
      ["Your cloud account", "Deployment inside a cloud boundary you have already approved.", "A record of how data moves and how the service runs."],
      ["An air-gapped room", "Environments with no connection to the outside.", "How files come in, how updates happen and how evidence is handled."],
      ["Devices in the field", "Models that run next to machines, sensors or people at work.", "How devices are updated and what runs on each."]
    ],
    evidenceTitle: "What every project leaves behind",
    evidenceBody: "So your security team can review the work without taking our word for it.",
    records: [
      ["Constraint register", "Your privacy, compliance and deployment constraints, written down before work starts."],
      ["Dataset card", "Every source, every change, everything excluded and how long it is kept."],
      ["Training record", "The base model, data, adapter, runtime and settings behind each run."],
      ["Evaluation report", "The tests, the results, the failures and the known limits."],
      ["Runbook", "How to install, reach, monitor and roll back the model, and who owns it."],
      ["Change log", "What changed in the model, data, adapter or runtime, release by release."]
    ],
    ownershipTitle: "Who decides what",
    ours: "What we provide",
    oursBody: "Architecture, access paths, deployment runbooks, evaluation evidence, documentation and support for your own review.",
    yours: "What you and your advisers own",
    yoursBody: "The legal basis for using the data, policy approval, identity and user management, internal audit, certification and regulatory filings.",
    more: "Read more",
    responsibleUse: "Responsible use",
    securityReview: "Security review"
  },
  document: {
    contents: "Contents",
    atGlance: "At a glance",
    fit: "A good fit",
    notFit: "Not a good fit"
  },
  notFound: {
    title: "This page has been painted over.",
    body: "The address may have changed when we rebuilt the site. The home page is where every path begins.",
    cta: "Back to the home page"
  }
};

export type SiteCopy = typeof en;

const copies: Record<Locale, SiteCopy> = { en, zh: en, ja: en, ko: en };

export function getSiteCopy(locale: Locale): SiteCopy {
  return copies[locale];
}
