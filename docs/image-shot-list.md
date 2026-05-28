# Random Walk Image Shot List

These image slots are temporary production-facing placeholders for the v0.6 site. They must remain conservative: no fake customer names, customer logos, certification badges, invented metrics, readable private UI content, or unsupported compliance claims.

The intended visual direction is mostly restrained. Color photography is reserved for company-introduction and team-context scenes so the site gains human warmth without turning every service slot into stock business imagery. High-visibility brand slots should follow the Titan-like image system more closely: heavier black-and-white neo-engraved linework, white or cool-gray backgrounds, clear silhouettes, and single classical philosophical or institutional objects with generous whitespace. Favor philosopher busts, sculptural profiles, archival ledgers, manuscript objects, geometric instruments, column fragments, vault doors, and marble public-space objects. Avoid full scenes, literal workflow explainers, modern city-street subjects as the main theme, yellowed paper, and obvious finance symbols.

Current generation note: the Company page uses Titan-inspired ChatGPT generated team photos with Asian subjects. The Home hero, Services support slot, Home heritage strip, Evaluation & Evidence slot, and Security responsibility slot now use approved source images from the user-provided review set. The remaining slots are documented below with exact ChatGPT/gpt-image prompt subjects so they can be regenerated consistently when Image API access is available.

## Shared Generation Prompt

Use this shared prompt around black-and-white engraved subjects:

```text
Do not edit or revise any previous image. Create one completely new standalone image. Use gpt-image-2 if available. Landscape 1536x1024. Subject: {subject}.

Style: heavier Titan-like neo-engraving. Use thick, confident black outer contours, heavier structural lines, and strong black ink presence. Add deliberate medium hatch density only where form needs weight. Keep the result bold and graphic from a distance, while cleaner and more spacious than dense Victorian book engraving.

Composition: one isolated symbolic object, no surrounding scene, clean white or very pale cool-gray background, generous negative space, balanced editorial spot illustration, localized shadows made only from engraved hatch lines.

Avoid: color, yellow, cream, beige, tan, sepia, parchment, antique paper, stained texture, gold, brown, grayscale wash, filled gray areas, photorealism, 3D render, modern vector icon, flat cartoon, smooth digital gradients, watercolor, halftone dots, bull, coin, cash, stock chart, candlestick, ticker, labels, readable text, letters, numbers, UI text, brand marks, manufacturer logos, customer names, metrics, certifications, watermark, border, frame.
```

Use this shared prompt around company-introduction photo subjects:

```text
Do not edit or revise any previous image. Create one completely new standalone image. Landscape 1536x1024. Subject: {subject}. Use the Titan reference mood: candid panel discussion, bright office salon, tall windows, premium but natural company-team introduction. Use Asian people as the main subjects.

Style: photorealistic editorial photography for a premium technology and infrastructure website. Use natural daylight, soft cream surfaces, graphite chairs, black clothing, warm wood, soft film grain, and quiet documentary framing. The image should feel real, thoughtful, and active, but still restrained and trustworthy.

Composition: wide 3:2 website crop, clean negative space, no aggressive perspective, no visible brand marks. Prefer team panel, listening room, workshop salon, and in-office discussion scenes over fake UI screenshots.

Avoid: readable text, logos, customer names, fake metrics, certification badges, compliance seals, confidential-looking records, stock-photo posing, dramatic sci-fi lighting, watermark, illustration.
```

## Required Assets

| Placeholder file | Page slot | Size | Prompt subject | Final replacement needed |
| --- | --- | --- | --- | --- |
| `public/photos/company-team-panel-photo.png` | Company hero | `1536x1024` | Titan-inspired color editorial photo: Asian founders or senior engineers seated in a small panel discussion with microphone, tall windows, cream room, graphite chairs, warm wood, and documentary framing. | Approved real Random Walk team photo from a panel, salon, or company introduction setting. |
| `public/photos/company-team-room-photo.png` | Company team section | `1536x1024` | Titan-inspired black-and-white editorial photo: Asian team gathered in a bright discussion room, tall windows, layered foreground blur, focused listening posture, premium team introduction feel. | Approved real Random Walk team culture photo showing a thoughtful in-office discussion or company gathering. |
| `public/placeholders/brand/brand-city-walk.png` | Home hero | `1536x1024` | Approved Titan-like heavy neo-engraved classical figure holding a sphere, centered with large surrounding whitespace. | Approved abstract brand visual about research, judgement, and method rather than a literal business workflow. |
| `public/placeholders/home-delivery-chain.png` | Home delivery chain | `1536x1024` | Titan-like heavy neo-engraved single sealed delivery case on a small plinth, with large surrounding whitespace. | Approved single-object visual for the delivery chain or approved real delivery material without readable private details. |
| `public/images/product-covers/melix.png` | Home Melix proof point | `1536x1024` | Original Melix product cover showing LoRA training, MLX, and Apple Silicon positioning. | Update with approved Melix product cover or product screenshot when the surface changes. |
| `public/placeholders/services-hero-private-data.png` | Services hero | `1536x1024` | Titan-like heavy neo-engraved single faceted private data core on a stone plinth, with large surrounding whitespace. | Approved single-object private-data-boundary visual or approved real source-material artifact without readable private details. |
| `public/placeholders/services-dataset-package.png` | Services artifact tab | `1536x1024` | Titan-like heavy neo-engraved single modular dataset package block on a small plinth, with large surrounding whitespace. | Real anonymized dataset package photo or approved single-object package visual without customer identifiers. |
| `public/placeholders/services-lora-adapter.png` | Services artifact tab | `1536x1024` | Titan-like heavy neo-engraved single LoRA adapter bridge on a small plinth, with large surrounding whitespace. | Approved adapter training artifact or approved single-object visual without readable private content. |
| `public/placeholders/services-fused-model.png` | Services artifact tab | `1536x1024` | Titan-like heavy neo-engraved single fused model core in a marble cradle, with large surrounding whitespace. | Real deployable model package visual or approved single-object module visual after customer-side approval. |
| `public/placeholders/services-evaluation-report.png` | Services artifact tab | `1536x1024` | Approved Titan-like heavy neo-engraved single balance scale object, centered with large surrounding whitespace. | Sanitized evaluation artifact or approved single-object evaluation visual without sensitive data. |
| `public/placeholders/services-deployment-runbook.png` | Services artifact tab | `1536x1024` | Titan-like heavy neo-engraved single deployment runbook passage on a low stone base, with large surrounding whitespace. | Real deployment runbook artifact or approved single-object visual after review. |
| `public/placeholders/brand/brand-navigation-plaza.png` | Services support model | `1536x1024` | Approved Titan-like heavy neo-engraved single classical bank facade with columns and pediment, centered with large surrounding whitespace. | Approved abstract building visual about enterprise support, institutional trust, and implementation maturity rather than a literal support workflow. |
| `public/placeholders/melix-main-ui.png` | Melix hero | `1536x1024` | Titan-like heavy neo-engraved single blank Melix workstation panel on a small plinth, with large surrounding whitespace. | Real Melix screenshots or approved single-object workstation panel without fake metrics or readable private details. |
| `public/placeholders/melix-scene-composite.png` | Melix scenes | `1536x1024` | Titan-like heavy neo-engraved single local model registry vault on a small plinth, with large surrounding whitespace. | Approved real Melix workflow material or approved single-object registry visual. |
| `public/placeholders/security-boundary-model.png` | Security hero | `1536x1024` | Titan-like heavy neo-engraved single nested boundary seal on a small plinth, with large surrounding whitespace. | Reviewed architecture artifact or approved single-object boundary visual for the deployment pattern. |
| `public/placeholders/security-evidence-dashboard.png` | Security evidence | `1536x1024` | Titan-like heavy neo-engraved single security evidence cube on a small plinth, with large surrounding whitespace. | Sanitized evidence artifact or approved single-object evidence visual without certification claims. |
| `public/placeholders/brand/brand-archive-courtyard.png` | Work index and case pages | `1536x1024` | Titan-like heavy neo-engraved single clamped archive case on a small plinth, with large surrounding whitespace. | Approved abstract brand visual about evidence, memory, and durable technical records; keep customer names, logos, readable text, and metrics out until explicitly cleared. |
| `public/placeholders/brand/brand-institutional-threshold.png` | Contact hero | `1536x1024` | Titan-like heavy neo-engraved single round vault door object on a small plinth, with large surrounding whitespace. | Approved abstract brand visual about controlled passage and confidentiality rather than a literal scoping diagram. |
| `public/placeholders/home-constraint-matrix-board.png` | Home constrained-environments section | `1536x1024` | Titan-like heavy neo-engraved single interlocking constraint matrix relief, centered with large surrounding whitespace. | Approved single-object constraint-review visual showing real deployment, privacy, retention, access, and review boundaries without sensitive details. |
| `public/placeholders/home-evidence-archive-scene.png` | Home evidence section | `1536x1024` | Titan-like heavy neo-engraved single fire wax seal, centered with large surrounding whitespace. | Approved evidence package imagery or approved single-object seal visual without readable private details. |
| `https://cdn.prod.website-files.com/68ef4e884c8ceec3926e731f/690d06571d5158bef82c1146_first.webp` | Home first-review triptych item | external | User-specified first-review reference asset. | Mirror locally when network access is available, then keep the Home triptych pointed at the local copy. |
| `public/placeholders/home-technical-heritage-plate.png` | Home heritage strip | `1536x1024` | Approved Titan-like heavy neo-engraved single classical half-figure holding a sphere, centered with large surrounding whitespace. | Approved real technical heritage imagery or approved single-object classical figure visual. |
| `public/placeholders/services-deployment-topology.png` | Services deployment section | `1536x1024` | Titan-like heavy neo-engraved single deployment topology courtyard model, centered with large surrounding whitespace. | Reviewed deployment topology artifact or approved single-object topology visual showing actual approved runtime targets and access boundaries. |
| `public/placeholders/services-industry-patterns.png` | Services industry patterns | `1536x1024` | Titan-like heavy neo-engraved single three-facet marble keystone on a small plinth, with large surrounding whitespace. | Approved industry-specific imagery or approved single-object industry-pattern visual without customer names, logos, or private material. |
| `public/placeholders/contact-first-review-tray.png` | Contact scoping detail | `1536x1024` | Titan-like heavy neo-engraved single first-contact intake threshold with a blank stone stele, centered with large surrounding whitespace. | Approved single-object scoping visual showing safe first-contact categories, deployment targets, sensitivity review, and support preferences. |
| `public/placeholders/security-access-control-diagram.png` | Security access section | `1536x1024` | Titan-like heavy neo-engraved single monumental access key on a low stone plinth, with large surrounding whitespace. | Reviewed access-control artifact or approved single-object access visual for a real customer-controlled environment. |
| `public/placeholders/security-responsibility-handoff.png` | Security responsibility section | `1536x1024` | Approved Titan-like heavy neo-engraved reaching hands, centered with large surrounding whitespace. | Approved review material or approved single-object handoff visual showing the real responsibility split. |

## Replacement Rules

- Replace placeholders only with real product, project, architecture, or process assets that have been approved for publication.
- Keep placeholder status on anonymized Work pages until customer names, logos, screenshots, and metrics are explicitly cleared.
- Do not add compliance-certification language or visual badges unless Random Walk has the exact certification and public approval to use it.
- Avoid screenshots that reveal private customer data, internal tokens, local file paths, private model names, or sensitive infrastructure details.
