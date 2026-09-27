# Site structure and copy, second draft

Status: draft for review, 2026-09-27. English first; zh/ja/ko follow once this is final.
Design: the homepage is the examination prototype in `docs/design/homepage-examination/` (tab `#f4`).
Review page: https://claude.ai/artifact/44kBb3z5dGuormcJozMnd8

## Who we write for

The head of a business unit at a company of a few dozen people, anywhere in the world. They decide; they are not ML engineers.

- Let the painting carry the imagery. The sentences around it stay plain enough to act on.
- Say what changes for their business before saying how it is built.
- Proof figures are real and say where they come from; our own tests are called our own tests. The next-word probabilities in the demos are model output, so any plausible value is fair and they carry no label.
- No hype words, no competitor put-downs.

## Routes

Primary navigation: **Services · Datasets · Work · Melix · Company**. Every page's call to action is **Start a project**, which goes to `/contact`.

Every route exists under `/en`, `/zh`, `/ja` and `/ko`. A path without a language prefix sends the visitor to their language.

### Public pages

| Route | Page | Where it is linked |
|---|---|---|
| `/` | The examination | logo |
| `/services` | Ready-made, or made to measure | navigation |
| `/datasets` | Data no one else has | navigation |
| `/work` | What we have made | navigation |
| `/work/mac-computer-use` | Teaching a model to use a Mac (Model Train) | Work |
| `/work/business-arenas` | Models at the counting-house desk | Work |
| `/work/turnvector` | Many models, one machine (Token Plant) | Work |
| `/work/sayit` | SayIt, kept from the current site | Work |
| `/melix` | Your models, at home on your Macs | navigation |
| `/company` | About, Token Plant, events, registered details | navigation |
| `/contact` | Start a project | every page |
| `/notes` and `/notes/{slug}` | Articles | footer |
| `/earlier-work` and `/earlier-work/{slug}` | Neuron, 1-TOK, Fiber Link, UTXO Data, Distributed Paradigm | footer |
| `/privacy`, `/terms`, `/security` | Legal | footer |
| `/legal/responsible-use`, `/legal/security-review` | Legal details | footer |

### Hidden pages

| Route | What it is | Rule |
|---|---|---|
| `/meet` | Office-visit booking, backed by Cal.com through `/api/meet` | Shared by direct link only; `noindex`, left out of the sitemap. Restyled in the new design. The booking logic stays as it is. |
| 404 | Page not found | Rewritten (copy below). |
| `/api/meet` | Serverless booking endpoint | Unchanged. |
| `sitemap.xml`, `robots.txt` | Search engines | Regenerated from the new routes. |

### Redirects (301, in `vercel.json`)

| Old route | New route |
|---|---|
| `/home` | `/` |
| `/articles` | `/notes` |
| `/philosophy` | `/company` |
| `/events` | `/company#events` |
| `/creations` | `/earlier-work` |
| `/creations/melix` | `/melix` |
| `/creations/{neuron, 1-tok, fiber-link, utxo-data, distributed-paradigm}` | `/earlier-work/{slug}` |
| `/services/{ai-ml, data-platform, it-architecture, privacy-data, sovereign-infrastructure}` | `/services` |
| `/resources/{repository-metadata, engagement-patterns}` | `/notes/{slug}` |
| `/work/{finance-regulated-records, legal-ip-private-model, manufacturing-edge-ai}` | `/work` (the three placeholder cases are retired) |

---

## Home: the examination

### Visible light

**A model is made in layers.**

Look closely at any old painting and you find it was built slowly: a drawing, an underpainting, glaze upon glaze, and centuries of care. A good model is made the same way. Random Walk is an AI lab for growing companies. We learn how your business works, choose the right model for it, train one when it pays, and keep it working in your own cloud, server room or Macs.

[Start a project] biz@random-walk.co.jp

Under the lens: the site's own sentences and working text from many trades.

### Token map: the next word

**A general model paints the gist. Yours paints the detail.**

Every answer is written one word at a time, and every word is a choice. An off-the-shelf model chooses what most companies would say. A model that has read your contracts, prices and procedures chooses what you would say. Often the first is enough, and we fit it to your work. When it is not, the whole meaning can turn on a single word.

Demo:

| Subject | Prompt | Base model | Trained on your data |
|---|---|---|---|
| Contracts | Under our standard distributor agreement, liability is capped at | the 0.31 | twelve 0.68 |
| Support | Customers on the Studio plan who report a sync error should first | contact 0.34 | reset 0.64 |
| Accounts | Invoices from our Japanese distributors are settled within | thirty 0.41 | sixty 0.71 |

### Infrared: i. Data

**Beneath the paint, the drawing.**

Infrared light passes through paint and finds the lines the artist drew first. Beneath a model, those lines are its data. Public datasets were drawn from yesterday's software and old archives. Ours are drawn from the tools companies open every morning, the newest and best software on the Mac, and the same workshop can turn your documents, tickets and screen recordings into training data within days.

Proof: our macOS computer-use dataset, v2.1: 15,854 annotated steps in 450 tasks, drawn from 175 tutorials across everyday macOS, video editing, Blender and Godot. In spot checks of 1,015 steps, the click landed on the right target about 90% of the time and the whole action was right about 70% of the time.

You receive a dataset card listing every source, every exclusion and the audited error rate.

Under the lens: real steps from the dataset.

### X-ray: ii. Base model

**Beneath the drawing, an earlier picture.**

X-rays often reveal a second painting under the first, a canvas the artist reused. Models are made the same way, over an open base model that someone else trained. We choose that foundation for your task, your languages and your hardware, and paint over it only where your field demands.

Proof: for computer use on the Mac we chose Qwen3.5-9B, small enough to run on one machine and able to read a screen.

You receive the base model's licence, the training runs and their logs.

### Raking light: iii. Training and evaluation

**Light from the side shows every stroke.**

A restorer lowers the lamp and turns it sideways, and every ridge of paint throws a shadow. We test with the same patience. Before anything ships we agree a test with you, and every release is held up to it beside the base model and a plain rules-based tool, so you can see the difference for yourself.

Proof:
- After training, our Mac computer-use model's action score rose from 0.33 to 0.77 on a frozen 477-step test. This is our own offline test, not an official benchmark.
- On a month of bank reconciliation, a rules engine scored 36, a local 27B model 72 and GPT-5.6-SOL 84.

You receive the model weights and an evaluation report you can re-run.

### Ultraviolet: iv. Deployment and upkeep

**Ultraviolet shows every later retouch.**

Under ultraviolet, every repair made after the artist laid down the brush glows on its own. A model has a life after delivery too. We deploy it where your data already lives, on vLLM in your cloud or server room or on your Macs with Melix. Then we watch it, retrain it on new material and sign every release.

Proof (the real release log of our dataset):
- v1, 23 September 2026: 1,616 steps across two topics.
- v1.1, 24 September: a held-out development split.
- v2, 25 September: 15,854 steps, with Blender and Godot added.
- v2.1, 25 September.

You receive a versioned model, a runbook and a change log.

### Close

**Every commission begins with a conversation.**

Tell us what the work is, what data you keep and where it has to run. We reply within two business days.

[Start a project]

---

## Services

**Ready-made, or made to measure.**

Every project starts by learning the work. Then we decide together what it needs: a good existing model, fitted with care, or a model of your own. Most companies begin with the first and reach for the second where it pays.

### Ready-made: an existing model, fitted to your work

For work that general models already do well: drafting, summarising, answering from your own documents, filling in forms. The craft is in the fitting.

- We map the workflow and the data it touches.
- We choose the model and connect it to your documents and tools.
- We agree a test and measure the model against it.
- We deploy on vLLM in your cloud or server room, or on your Macs with Melix.
- We keep it running and bring in better models as they appear.
- If your data cannot leave your building, we do the work offline on site.

### Made to measure: a model of your own

For work that depends on what only your company knows, its terms, procedures, formats and software, or for when you need a smaller model that lives on your own hardware.

Everything in Ready-made, plus:

- a dataset built from your material, with a dataset card;
- fine-tuning and preference tuning on your people's real tasks;
- continued pre-training, when your field's vocabulary is missing from general models.

### How a project runs

1. **Understand the business.** You receive a written map of the workflow and where AI helps.
2. **Choose the level.** You receive a proposal: ready-made or made to measure, with scope and the test we will use.
3. **Prepare the data.** You receive a dataset card. (Made to measure only.)
4. **Train.** You receive weights and an evaluation report. (Made to measure only.)
5. **Deploy.** You receive a versioned model and a runbook.
6. **Maintain.** You receive a change log for every release.

### Where it runs

- **Your cloud or server room:** served with vLLM.
- **Your Macs:** served with Melix.

### Advice, before or without a build

A clear read of where AI fits your business, or a second opinion on a system you already run.

---

## Datasets

**Data no one else has.**

Public datasets teach models the software of a decade ago. We record the tools companies open every morning, and we can gather yours just as quickly.

### The macOS computer-use dataset

- v2.1: 15,854 annotated steps, 450 tasks, 175 tutorials.
- Topics: everyday macOS, video editing, Blender, Godot.
- Held out for testing only: Photoshop, DaVinci Resolve, Audacity, Camtasia, QuickTime and others.
- Spot checks of 1,015 steps: about 90% of clicks land on the right target and about 70% of actions are fully right. By topic, the whole action is right about 76% of the time in everyday macOS, 78% in video editing, 71% in Blender and 55% in Godot, the newest topic. Blender and Godot were checked in batches of 30, so their figures are rougher.
- Labels are made by models from tutorial videos and checked by sampling, not by hand.

### How a tutorial becomes training data

We find the tutorials the world learns from and keep only the clear ones. Each is cut into moments. For every moment we recover what was done and why, find the exact spot on the screen, and assemble the moments into tasks. Before release, a random sample is audited again.

From the first release to the second took two days and brought ten times the data.

### Your dataset

The same workshop, turned to your documents, tickets and screen recordings. If your data cannot leave your building, we work offline on site: we bring the machines, and the data never leaves your hands.

---

## Work

**What we have made.**

### Teaching a model to use a Mac (Model Train)

A dataset for the Mac software companies use today, and a Qwen3.5-9B model trained on it. On our frozen 477-step offline test, its action score rose from 0.33 to 0.77.

### Models at the counting-house desk (business arenas)

Live 3D arenas where models do real office work: reconciling a month of bank statements, cleaning customer records, planning database queries. Each is scored against a rules-based tool.

| Arena | Rules | Local 27B | GPT-5.6-SOL |
|---|---|---|---|
| Reconciliation | 36 | 72 | 84 |
| Data refinery | 31% | 83% | 100% |
| Query planning | 56 | 63 | 99 |

For now the arenas replay recorded runs. Soon they will run a model in your browser.

### Many models, one machine (TurnVector, from Token Plant, in development)

A runtime that lets several AI models share one Apple Silicon machine. It keeps every conversation responsive and divides the machine fairly between models. Its qualification benchmark runs 12 lanes and 385 cases.

### SayIt

Kept from the current site: dictation on the Mac that never leaves the machine.

---

## Melix

**Your models, at home on your Macs.**

Melix is our inference engine for companies that deploy on Apple Silicon. Register models, serve them, fine-tune them with LoRA, then benchmark and evaluate them, from a native Mac app or the command line. Nothing leaves the machine.

---

## Company

**A path made one step at a time.**

A random walk is a path made of small steps, each one a choice. It is also how a language model writes, one word after another. Random Walk is an AI lab that helps growing companies take those steps with a model that knows their business. Token Plant is our public project group, and TurnVector comes from it.

Events are listed on this page.

Registered details:

- Ｒａｎｄｏｍ Ｗａｌｋ株式会社 (Random Walk K.K.)
- Corporate number 7040001125050, registered 14 September 2022
- 東京都東大和市新堀1丁目 · Shinbori 1-chome, Higashiyamato, Tokyo, Japan

The full registered address, with building and room number, appears only on the legal pages.

---

## Page not found (404)

**This page has been painted over.**

The address may have changed when we rebuilt the site. The home page is where every path begins.

[Back to the home page]

---

## Paintings to make (for discussion)

One series in one hand, set in the age of Laplace (1760s to 1790s): Enlightenment interiors and still lifes in the manner of Joseph Wright of Derby, Chardin and David. Dawn and window light, ultramarine and warm wood. Every painting except the homepage hides one modern object painted in period technique, which carries the cross-era contrast. Japanese touches from the period recur: scholars in silk banyans cut from Japanese robes, Imari porcelain, lacquer. Wide 16:10 format with quiet space for type, and no lettering in the paint.

### Homepage options

- **A. The Sunrise Problem.** Before dawn, a scholar in an indigo silk banyan stands at a tall window. On the sill lies a ledger of tally marks, one for every sunrise recorded, and the sky has just begun to pale. Laplace asked how sure we can be that the sun will rise tomorrow, given that it always has: the first formula for predicting the next event from everything before it, which is what a model does with the next word. X-ray layer: the same window at night, an astronomer at a telescope.
- **B. Mécanique céleste.** A bright morning study around a large brass orrery. A scholar and a young woman measure the planets' paths with dividers among sheets of calculation. Laplace proved the solar system stable. X-ray layer: the same room with a single astronomer.
- **C. The horizon.** Taken from the idea of the Claude Opus 5.5 launch film ("There's more to discover", 20 s): one curved horizon crosses every frame, and each cut shows it in a different material and at a different scale, from the Earth's edge at dawn to a Petri dish, a leaf, lace, a micrograph, a thermal image, a blueprint arc and a pottery shard. We borrow the idea, not the look. The dawn horizon is also where Laplace's sunrise problem begins.
- **A + C (recommended).** The Sunrise Problem, built on the horizon. Seen from a hilltop observatory at first light, a wide arc of the Earth's horizon crosses the lower third of the canvas, orange paling into blue. A small scholar in an indigo banyan stands at the parapet with the tally ledger. The examination then works like the film: the same arc stays in place while the light changes the material beneath it. Across the other pages, each painting keeps one arc at the same height: a globe's rim, a clock dial, the edge of an Imari bowl, a lens. The series then reads as one continuous horizon.

### Series

| Page | Painting | Modern object |
|---|---|---|
| Home | Option A or B | none; the examination is the modern layer |
| Home, X-ray layer | The earlier picture beneath it | none |
| Services | The Instrument Maker: one customer chooses a finished pocket watch from a case; another's longcase clock is built to measure | a smartwatch among the pocket watches |
| Datasets | The Copyists: apprentices at a long table copy drawings by the light of an open laptop | the laptop |
| Work: Mac computer use | The Apprentice: a master's hand guides a young clerk's hand on a keyboard | the keyboard |
| Work: business arenas | The Counting House: two clerks reconcile ledgers among scales, coins and Imari jars | a receipt roll |
| Work: TurnVector | The Harpsichord: three players share one instrument | a Mac Studio as the instrument's base |
| Melix | Still life after Chardin: a Mac Studio among pewter, a lemon and an Imari bowl | the Mac Studio |
| Company | The Workshop: a painter's studio, assistants seen from behind in banyans | none |
| Contact | The Letter: a merchant writes a commission at a lacquer writing box | none |
| 404 | Vanitas with an empty frame | none |

---|---|---|
| Home | The Reader: a woman in an ultramarine jacket reads a letter at a window, with a world map on the wall | none; the examination is the modern layer |
| Home, X-ray layer | The earlier picture: the same room and window, an old scholar in the woman's place | none |
| Services | Ready-made, or made to measure: a lute shop, one customer choosing from the wall, another being fitted by the luthier | none |
| Datasets | The Copyists: apprentices at a long table copying drawings by the light of an open laptop | the laptop |
| Work: Mac computer use | The Apprentice: a young clerk at a desk, a master's hand guiding his on a keyboard | the keyboard |
| Work: business arenas | The Counting House: two clerks reconciling ledgers, scales and coins | a receipt roll |
| Work: TurnVector | The Organ Loft: one organ, several singers | a Mac Studio as the bellows box |
| Melix | Still life with a Mac Studio, among pewter, a lemon and a roemer | the Mac Studio |
| Company | The Workshop: a painter's studio with assistants seen from behind | none |
| Contact | The Letter Writer: a merchant writing a commission | none |
| 404 | Vanitas with an empty frame | none |

Option: Dutch merchants of the period wore Japanese robes and kept Imari porcelain and lacquer. A few of these would tie the series to a Tokyo company without leaving the period.

---

## Open items

Decided on 2026-09-27: GPT-5.6-SOL is named. The site shows the address to the block (新堀1丁目), and the legal pages carry the full address. Client data can be processed offline on site. TurnVector is described as in development. Demo probabilities are invented and carry no label. SayIt stays in Work as a small entry. Each painting hides one modern object, and Japanese touches are in.

1. **Paintings.** Choose the homepage option and agree the series, then generate on the Lay2 ComfyUI.
2. **In-browser models for the business arenas.** Until then, the arenas replay recorded runs.
3. **Layer annotations.** Use real data where it already exists, with no new runs: dataset steps under the infrared lens, real scores on the raking-light marks, and the real release log under ultraviolet. Everything else stays invented.
4. **`/meet` map.** Embed a Google Map of the office on the visit page with an "Open in Google Maps" link. The old site used an OpenStreetMap (Leaflet) map at 35.7401, 139.4497, with a Google Maps link to the full address. The visit page is for invited visitors, so it may show the full address.
