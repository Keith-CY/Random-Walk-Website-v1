# Random Walk Image Shot List

These image slots are temporary production-facing placeholders for the v0.6 site. They must remain conservative: no fake customer names, customer logos, certification badges, invented metrics, readable private UI content, or unsupported compliance claims.

The intended visual direction is mostly restrained, with a small number of warm color photo assets to keep the site from feeling flat. Most placeholder slots can remain black-and-white neo-engraved editorial illustration: pure ink linework on a clean white ground, dense hatching, cross-hatching, stippling, and antique technical-book detail. Key high-visibility slots may use tasteful color editorial photography with cream, sage, graphite, clay, and muted blue details. Avoid fake dashboard proof, readable labels, brand marks, customer identifiers, and unsupported compliance claims.

Current generation note: the Home hero, Services support model, Work case materials, and Contact scoping hero use ChatGPT generated color editorial photo assets. The Home delivery-chain and Home Melix panel remain ChatGPT generated black-and-white image assets. The remaining slots are documented below with exact ChatGPT/gpt-image prompt subjects so they can be regenerated consistently when Image API access is available. The local environment does not currently expose `OPENAI_API_KEY`, so direct `gpt-image-2` batch generation is not available from the repo.

## Shared Generation Prompt

Use this shared prompt around black-and-white engraved subjects:

```text
Do not edit or revise any previous image. Create one completely new standalone image. Use gpt-image-2 if available. Landscape 1536x1024. Subject: {subject}.

Style: pure black ink on clean white paper, 19th-century book engraving, Victorian newspaper illustration, steel engraving, woodcut etching, antique encyclopedia line art, high contrast monochrome, crisp outlines, dense cross-hatching, fine parallel hatching, contour hatching, stippling, scratchboard engraved texture, small broken ink lines.

Composition: centered composition, isolated subject, clean white background, generous negative space, balanced editorial spot illustration, subtle ground shadow made only from engraved hatch lines.

Avoid: color, grayscale wash, filled gray areas, photorealism, 3D render, modern vector icon, flat cartoon, smooth digital gradients, watercolor, halftone dots, labels, readable text, letters, numbers, UI text, brand marks, manufacturer logos, customer names, metrics, certifications, watermark, border, frame.
```

Use this shared prompt around color photo subjects:

```text
Do not edit or revise any previous image. Create one completely new standalone image. Landscape 1536x1024. Subject: {subject}.

Style: photorealistic editorial photography for a premium technology and infrastructure website. Use natural daylight, soft cream surfaces, graphite equipment, muted sage or olive paper, small clay or copper details, and occasional muted blue-gray hardware. The image should feel real, warm, and active, but still restrained and trustworthy.

Composition: wide 3:2 website crop, clean negative space, no aggressive perspective, no visible brand marks. Prefer real physical materials, equipment, workshops, desks, folders, and support scenes over fake UI screenshots.

Avoid: readable text, logos, customer names, fake metrics, certification badges, compliance seals, confidential-looking records, close-up identifiable faces, stock-photo posing, dramatic sci-fi lighting, watermark, illustration, monochrome engraving.
```

## Required Assets

| Placeholder file | Page slot | Size | Prompt subject | Final replacement needed |
| --- | --- | --- | --- | --- |
| `public/photos/local-ai-workshop-photo.png` | Home hero | `1536x1024` | Color editorial photo: clean on-premise AI workshop with server rack, secure cabinet, workstation, cable trays, model artifact cases, cream walls, warm wood, graphite hardware, and subtle olive/blue accents. | Approved real photo showing Random Walk's local AI infrastructure boundary, hardware, private data flow, and deployment environment. |
| `public/placeholders/home-delivery-chain.png` | Home delivery chain | `1536x1024` | Chain of physical private AI delivery artifacts: sealed private document bundle, dataset archive box, adapter cartridge, model package crate, evaluation ledger, deployment runbook, and support toolkit arranged left to right as objects. | Approved visual explaining the real Dataset Package, LoRA Adapter, Fused Model, Evaluation Report, Deployment Runbook, and support flow. |
| `public/placeholders/home-melix-product-panel.png` | Home Melix proof point | `1536x1024` | Local AI model studio workstation with an unbranded desktop monitor showing only blank interface panels, model registry shelf, adapter cartridges, benchmark grid shapes, local server cube, and evidence folders. | Real Melix screenshots or approved product mockups that show the actual local model studio workflow without invented metrics. |
| `public/placeholders/services-hero-private-data.png` | Services hero | `1536x1024` | Private business records moving into a controlled local model workshop: locked folders, dataset curation desk, compact server, and sealed model artifact. | Approved services hero showing how private source material is transformed into reviewable model artifacts inside a controlled boundary. |
| `public/placeholders/services-dataset-package.png` | Services artifact tab | `1024x1024` | Curated dataset package artifact: stacked index cards, manifest binder with blank cover, split trays, exclusion slips, and version seal. | Real anonymized dataset package photo or diagram, including manifest, splits, exclusions, and versioning artifacts without customer identifiers. |
| `public/placeholders/services-lora-adapter.png` | Services artifact tab | `1024x1024` | LoRA adapter training artifact: small mechanical adapter cartridge connected to a model engine, training ledger, and evidence cards. | Approved adapter training artifact visual showing configuration, model references, training records, and evidence without readable private content. |
| `public/placeholders/services-fused-model.png` | Services artifact tab | `1024x1024` | Fused model delivery artifact: sealed model crate, compact computing module, blank license folder, and deployment tag with no writing. | Real deployable model package visual, private licensing context, and deployment notes after customer-side approval. |
| `public/placeholders/services-evaluation-report.png` | Services artifact tab | `1024x1024` | Evaluation report artifact: open ledger pages with abstract blank grid marks, test cards, failure pins, and limitation notes represented as blank slips. | Sanitized evaluation report screenshot or report spread showing task coverage, failures, limitations, and recommendations without sensitive data. |
| `public/placeholders/services-deployment-runbook.png` | Services artifact tab | `1024x1024` | Deployment runbook and environment map: open blank runbook, network topology of nodes and cables, rollback lever, and operator checklist represented by blank tick boxes. | Real deployment runbook, environment topology, access path, rollback plan, and operator checklist visual after review. |
| `public/photos/support-engineering-photo.png` | Services support model | `1536x1024` | Color editorial photo: on-site and remote engineering support with side/back-view engineers, compact server, toolkit, blank papers, blurred remote monitor, warm cream room, olive folders, and copper detail. | Approved real photo process imagery showing on-site introduction, remote engineering support, handoff, and optional continuous tuning. |
| `public/placeholders/melix-main-ui.png` | Melix hero | `1536x1024` | Melix local model studio as an unbranded native workstation scene: blank panels, model registry shelves, local server cube, adapter tools, benchmark grid, and evidence folders. | Real Melix screenshots showing model registry, local serving, training, benchmark, and evidence panels without fake metrics. |
| `public/placeholders/melix-scene-composite.png` | Melix scenes | `1536x1024` | Five local AI workflow scenes in one engraved plate: model registry cabinet, local server, adapter training bench, benchmark comparison board with blank cells, and evidence archive. | Approved composite of actual Melix workflows or separate real screenshots for registry, server, training, benchmark, and evidence views. |
| `public/placeholders/security-boundary-model.png` | Security hero | `1536x1024` | Security boundary model: nested data vault, network gate, runtime chamber, and model artifact behind separate rings and cables. | Reviewed architecture diagram showing real data, network, runtime, and model boundaries for the deployment pattern. |
| `public/placeholders/security-evidence-dashboard.png` | Security evidence | `1536x1024` | Reviewable security evidence dashboard as a physical evidence board: boundary cards, log strips, check tokens, and archive folders, all blank with no text. | Sanitized evidence dashboard or artifact package showing boundary state, logs, checks, and review material without certification claims. |
| `public/photos/anonymized-case-materials-photo.png` | Work index and case pages | `1536x1024` | Color editorial photo: anonymized project materials with sealed folders, edge-device components, sensor hardware, blank binders, soft color tabs, and abstract unreadable charts. | Approved public or anonymized real photo case-study assets, keeping placeholder labels until customer names, logos, and metrics are explicitly cleared. |
| `public/photos/contact-scoping-photo.png` | Contact hero | `1536x1024` | Color editorial photo: first-contact scoping table with blank intake forms, unlabeled deployment target tokens, sensitivity folders, blurred laptop interface, small hardware module, pen, and coffee. | Approved real photo scoping workflow image showing constraint review, deployment target, data sensitivity, support needs, and next-step process. |
| `public/placeholders/home-constraint-matrix-board.png` | Home constrained-environments section | `1536x1024` | Private AI constraint matrix board: blank columns represented by boundary, retention, access, review, latency, and air-gap symbols, without text. | Approved constraint-review visual showing real deployment, privacy, retention, access, and review boundaries without sensitive details. |
| `public/placeholders/home-evidence-archive-scene.png` | Home evidence section | `1536x1024` | Private AI evidence archive: manifest binders, run records, evaluation ledgers, deployment runbooks, and change-log drawers with blank covers. | Approved evidence package imagery showing reviewed manifests, run records, evaluation reports, runbooks, and change logs. |
| `public/placeholders/home-technical-heritage-plate.png` | Home heritage strip | `1536x1024` | Systems work heritage plate: distributed infrastructure nodes, cryptographic key device, local-first workstation, edge device, and data platform pipes. | Approved real technical heritage imagery showing Random Walk systems, infrastructure, edge, and operator workflow work. |
| `public/placeholders/services-deployment-topology.png` | Services deployment section | `1536x1024` | Private AI deployment topology: unbranded workstation, on-premise GPU tower, private cloud vault, VPC enclosure, air-gapped case, and edge device connected by controlled paths. | Reviewed deployment topology visual showing actual approved runtime targets and access boundaries. |
| `public/placeholders/services-industry-patterns.png` | Services industry patterns | `1536x1024` | Three industry workflow vignettes: legal archive desk, industrial equipment console, and financial records vault, separated as unlabeled engraved panels. | Approved industry-specific imagery for legal, manufacturing, and finance workflows without customer names, logos, or private material. |
| `public/placeholders/contact-first-review-tray.png` | Contact scoping detail | `1536x1024` | Safe first-contact review tray: blank intake card, deployment target tokens, data sensitivity folders, support preference tiles, and a closed lock. | Approved scoping visual showing safe first-contact categories, deployment targets, sensitivity review, and support preferences. |
| `public/placeholders/security-access-control-diagram.png` | Security access section | `1536x1024` | Access and deployment control diagram: identity gate, permission keys, runtime boundary, audit ledger, and model chamber connected by controlled paths. | Reviewed access-control and deployment-boundary diagram for a real customer-controlled environment. |
| `public/placeholders/security-responsibility-handoff.png` | Security responsibility section | `1536x1024` | Security responsibility handoff scene: two desks exchanging a sealed engineering packet, customer review folder, advisor stamp without text, and blank boundary diagram. | Approved review material showing the real split between Random Walk engineering support and customer or advisor decisions. |

## Replacement Rules

- Replace placeholders only with real product, project, architecture, or process assets that have been approved for publication.
- Keep placeholder status on anonymized Work pages until customer names, logos, screenshots, and metrics are explicitly cleared.
- Do not add compliance-certification language or visual badges unless Random Walk has the exact certification and public approval to use it.
- Avoid screenshots that reveal private customer data, internal tokens, local file paths, private model names, or sensitive infrastructure details.
