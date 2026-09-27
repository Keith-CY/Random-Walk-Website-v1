import type { DetailPageCopy } from "./footer-detail-pages";

// Copy for the long-form detail pages in the rebuilt site. English is the source; the other
// languages reuse it until the English is final and translated.
export type Exhibit = { src: string; alt: string; width: number; height: number; caption: string };
export type DocumentCopy = Omit<DetailPageCopy, "assetId" | "taxonomy"> & { exhibit?: Exhibit };

const cover = (name: string, title: string, width: number, height: number): Exhibit => ({
  src: `/images/product-covers/${name}.png`,
  alt: `${title} product page`,
  width,
  height,
  caption: `${title}, from the product's own site.`
});

export const earlierWork: Record<string, DocumentCopy> = {
  neuron: {
    eyebrow: "Earlier work",
    title: "Neuron",
    description: "An open-source desktop wallet for Nervos CKB: hold assets, take part in governance and work with CKB scripts from one app.",
    exhibit: cover("neuron", "Neuron", 1536, 1024),
    officialLink: { label: "Visit Neuron", href: "http://neuron.magickbase.com/" },
    sections: [
      {
        title: "What it is",
        description: "A desktop wallet for people who hold CKB and want full control of their keys on their own machine.",
        points: ["Sending, receiving and holding CKB assets", "Voting and other governance activity", "Working with CKB scripts", "Open source, on the desktop"]
      },
      {
        title: "Who it was for",
        description: "Holders, developers and teams in the Nervos ecosystem who needed a reference wallet they could inspect and run themselves.",
        points: []
      }
    ]
  },
  "1-tok": {
    eyebrow: "Earlier work",
    title: "1-TOK",
    description: "A marketplace for AI agent work, where usage is metered by the tokens an agent produces and payment follows the work as it streams.",
    exhibit: cover("1-tok", "1-TOK", 1536, 1024),
    statusTag: "Product experiment",
    officialLink: { label: "Visit 1-TOK", href: "http://1-tok.pro/" },
    sections: [
      {
        title: "What it is",
        description: "A place to request work from AI agents and pay for exactly what was produced.",
        points: ["Requests for agent tasks", "Usage measured in output tokens", "Results streamed as the agent works", "A settlement record for every job"]
      },
      {
        title: "Who it was for",
        description: "Teams that wanted to buy agent work by the unit, with a clear record of what was used and what was paid.",
        points: []
      }
    ]
  },
  "fiber-link": {
    eyebrow: "Earlier work",
    title: "Fiber Link",
    description: "Tipping, creator rewards, balances and withdrawals for community platforms, settled over CKB's Fiber Network without asking members to handle on-chain steps.",
    exhibit: cover("fiber-link", "Fiber Link", 1619, 971),
    officialLink: { label: "Visit Fiber Link", href: "http://fiberlink.me/" },
    sections: [
      {
        title: "What it is",
        description: "A settlement layer a community platform can add so members can reward each other in a few taps.",
        points: ["Tips between members", "Rewards for creators", "Balances held on the platform", "Withdrawals when members want them"]
      },
      {
        title: "Who it was for",
        description: "Community platforms and creator programmes that wanted rewards to feel as simple as a like.",
        points: []
      }
    ]
  },
  "utxo-data": {
    eyebrow: "Earlier work",
    title: "UTXO Data",
    description: "Indexed activity from UTXO-based blockchains, served through APIs and analytics for monitoring, investigation and products.",
    exhibit: cover("utxo-data", "UTXO Data", 1536, 1024),
    officialLink: { label: "Open UTXO Data", href: "https://p.magickbase.com/" },
    sections: [
      {
        title: "What it is",
        description: "A data service that turns raw chain activity into records a product or analyst can query.",
        points: ["Indexed chain activity", "API access", "Analytics", "Data for products built on top"]
      },
      {
        title: "Who it was for",
        description: "Teams that needed to monitor activity, investigate incidents or feed chain data into their own products.",
        points: []
      }
    ]
  },
  "distributed-paradigm": {
    eyebrow: "Earlier work",
    title: "Distributed Paradigm",
    description: "Kuai, a framework for building distributed applications on CKB as actors that coordinate by passing messages.",
    exhibit: cover("distributed-paradigm", "Distributed Paradigm", 1683, 935),
    officialLink: { label: "View Kuai on GitHub", href: "https://github.com/ckb-js/kuai" },
    sections: [
      {
        title: "What it is",
        description: "A way of structuring a distributed application so each part owns its state and talks to the others by message.",
        points: ["Clear boundaries between services", "Coordination by message passing", "Structure at the level of the runtime", "An open-source framework, Kuai"]
      },
      {
        title: "Who it was for",
        description: "Developers building applications on CKB who wanted clearer ownership between the parts of their system.",
        points: []
      }
    ]
  }
};

export const legalDetails: Record<"responsible-use" | "security-review", DocumentCopy> = {
  "responsible-use": {
    eyebrow: "Responsible use",
    title: "Agree the limits before the model is built.",
    description: "Every project starts with a short written agreement: what the model may learn from, what it should and should not do, where you review the work and who decides. This page describes what goes into it.",
    primaryLink: { label: "Start a project", href: "/contact" },
    secondaryLink: { label: "Security review", href: "/legal/security-review" },
    outputsAtGlance: [
      { label: "Material", description: "What may be used, what is left out, and what is returned or deleted at the end." },
      { label: "Behaviour", description: "What the model is for, what it must not do and where it is weak." },
      { label: "Review points", description: "Where you check the work before it goes any further." },
      { label: "Decisions", description: "Who owns each business, domain and operational call." },
      { label: "Known limits", description: "Weak cases and open questions, kept where everyone can see them." }
    ],
    sections: [
      {
        eyebrow: "Material",
        title: "What the model may learn from",
        description: "Before any of your material is used for training, search or testing, we sort it with you.",
        points: ["Sources that may be used", "Material that is excluded or restricted", "What happens to copies and anything derived from them", "What is returned or deleted when the work ends"]
      },
      {
        eyebrow: "Behaviour",
        title: "What the model should and should not do",
        description: "We describe the model by its purpose, its limits and its weak spots.",
        points: ["The tasks it is meant to do", "Outputs it must not produce", "Uses it is not meant for", "Cases that are sensitive or ambiguous"]
      },
      {
        eyebrow: "Review",
        title: "Where you review the work",
        description: "You check the work at four points before it reaches your people.",
        points: ["The dataset, before training starts", "The evaluation, before deployment", "Sample outputs, before your staff or customers use them", "Switching on a new model or adapter"]
      },
      {
        eyebrow: "Decisions",
        title: "Who decides",
        description: "We do the engineering. You and your advisers make the business, domain and policy decisions.",
        points: ["Engineering support from Random Walk", "Decisions about use from you", "Advisers where the matter calls for them", "Exceptions written down before work continues"]
      },
      {
        eyebrow: "Limits",
        title: "Keeping the limits in view",
        description: "Weak cases and open questions stay next to the work, where the next person to touch it will see them.",
        points: ["Evaluation examples", "Notes on known limits", "Examples where the model fails", "Open questions and next steps"]
      },
      {
        eyebrow: "Scope",
        title: "What this page is not",
        description: "It describes how we work. It is not legal advice, an approval, a universal AI policy or a promise that every risk is gone.",
        points: []
      }
    ],
    notice: "This page is for information. It does not replace a contract, a policy or legal review.",
    closing: {
      title: "Write the limits down before deployment.",
      description: "A model is easier to trust when everyone agreed in advance what it may use, what it may do and who signs it off.",
      fit: ["You want a model with clear limits on what it may use and do.", "You want to review the work before it is deployed.", "You can name who owns each final decision."],
      notFit: ["You need legal or regulatory advice from this page.", "You want to use material nobody has reviewed.", "You expect engineering to replace your own judgement."],
      ctaTitle: "Start a project",
      ctaDescription: "Bring the kinds of material involved, what the model should do, where you want to review it and who decides."
    }
  },
  "security-review": {
    eyebrow: "Security review",
    title: "Evidence your security team can check.",
    description: "Before a model goes live in your environment, we prepare what your security team or advisers need to review it: where it runs, who can reach it, what moves where and how it was tested.",
    primaryLink: { label: "Start a project", href: "/contact" },
    secondaryLink: { label: "Responsible use", href: "/legal/responsible-use" },
    outputsAtGlance: [
      { label: "Where it runs", description: "The machines and network it lives on, what it connects to and what is out of scope." },
      { label: "Who can reach it", description: "Operator, administrator, service and support access, and the assumptions behind each." },
      { label: "What moves", description: "How data, models, adapters, logs, outputs and temporary files travel, and where they stop." },
      { label: "How it was tested", description: "Task examples, known limits, review notes and open questions." },
      { label: "How it is handed over", description: "Operation, rollback, ownership and what happens next." }
    ],
    sections: [
      {
        eyebrow: "Scope",
        title: "What the review covers",
        description: "We start by agreeing which system, environment, access and material are in scope, and who on your side owns the review.",
        points: ["The environment it runs in", "The runtime and what it depends on", "The boundary around data and model files", "Your review owner"]
      },
      {
        eyebrow: "Location",
        title: "Where it runs",
        description: "A plain description of where the model lives and what it touches.",
        points: ["The machines and operating environment", "Connected systems and the paths data takes", "Temporary material the system may create", "What sits outside the engagement"]
      },
      {
        eyebrow: "Access",
        title: "Who can reach it",
        description: "Who can use or change the system, through which door, under which assumptions.",
        points: ["Operators", "Administrators", "Other services", "Support and maintenance"]
      },
      {
        eyebrow: "Movement",
        title: "What moves and what is kept",
        description: "Every copy is written down before review and handover.",
        points: ["Datasets and search indexes", "Models, adapters and merged model files", "Logs, prompts, outputs, temporary files and caches", "What is returned, deleted or kept, and for how long"]
      },
      {
        eyebrow: "Evidence",
        title: "The evidence pack",
        description: "The review material travels with the deployment, so nothing has to be reconstructed later.",
        points: ["An architecture brief", "A configuration summary", "Evaluation examples and notes on known limits", "Rollback notes and open questions"]
      },
      {
        eyebrow: "After delivery",
        title: "Keeping it reviewable",
        description: "The material stays organised so your team can inspect it long after we hand over.",
        points: ["Evaluation material grouped by task", "Run notes and delivery decisions", "Notes on any exceptions", "Follow-up items kept in view"]
      },
      {
        eyebrow: "Decisions",
        title: "Who decides",
        description: "We prepare the engineering evidence. You and qualified advisers make the final acceptance decision.",
        points: []
      },
      {
        eyebrow: "Scope",
        title: "What this page is not",
        description: "It describes the evidence we prepare. It is not a security approval, legal or regulatory advice, a replacement for your own review or a promise that risk is gone.",
        points: []
      }
    ],
    notice: "We prepare engineering evidence for review. Final security, legal, regulatory and operational acceptance stay with you and your advisers.",
    closing: {
      title: "Prepare the review before deployment.",
      description: "A deployment is easier to review when where it runs, who can reach it, what moves and how it was tested are written down first.",
      fit: ["You need engineering evidence for a security review.", "Your team or advisers make the final decision.", "Location, access, movement, retention and handover need to be explicit."],
      notFit: ["You need a formal security approval from this page.", "You expect us to replace your internal review.", "You want blanket security claims regardless of scope."],
      ctaTitle: "Start a project",
      ctaDescription: "Bring where it will run, who needs access, what data moves, how long it is kept and who reviews it."
    }
  }
};
