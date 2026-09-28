// Renders the 1200x630 share image for every public page in every language, in the site's own type
// and palette, from the same copy the pages use. Run with `bun run og:images` after changing a title.
// Needs Google Chrome installed and a network connection for the web fonts.
import { spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";
import { getContentEntry, getString } from "../lib/content";
import { getEarlierWork, getLegalDetail } from "../lib/detail-copy";
import { getExaminationCopy } from "../lib/examination/content";
import { locales, type Locale } from "../lib/i18n";
import { legalContent } from "../lib/legal-content";
import { ogImageNames } from "../lib/metadata";
import { phraseParts } from "../lib/phrases";
import { getSiteCopy } from "../lib/site-copy";
import { getWorkEntries } from "../lib/work-entries";

const chrome = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const root = process.cwd();
const publicDir = join(root, "public");
const file = (path: string) => pathToFileURL(join(publicDir, path)).href;

type Painted = { kind: "painted"; painting: string; position: string; kicker: string; title: string };
type Product = { kind: "product"; cover: string; kicker: string; title: string; line: string };
type Card = Painted | Product;

// Which painting each page shares, and where to crop it.
const art: Record<string, [string, string]> = {
  home: ["home", "50% 62%"],
  services: ["services", "50% 40%"],
  datasets: ["datasets", "50% 45%"],
  work: ["mac-computer-use", "50% 50%"],
  "work-mac-computer-use": ["mac-computer-use", "50% 50%"],
  "work-business-arenas": ["business-arenas", "50% 55%"],
  "work-turnvector": ["turnvector", "50% 55%"],
  "work-sayit": ["home-xray", "50% 55%"],
  melix: ["melix", "50% 60%"],
  company: ["company", "50% 45%"],
  contact: ["contact", "50% 45%"],
  notes: ["note-alcove", "50% 50%"],
  "notes-evaluate-local-lora": ["note-assay", "50% 55%"],
  "notes-private-deployment-boundaries": ["note-alcove", "50% 50%"],
  "earlier-work": ["not-found", "50% 50%"],
  security: ["home-xray", "50% 55%"],
  privacy: ["home-xray", "50% 55%"],
  terms: ["home-xray", "50% 55%"],
  "legal-responsible-use": ["home-xray", "50% 55%"],
  "legal-security-review": ["home-xray", "50% 55%"]
};

// Earlier work gets one short line under its name; the page descriptions are too long for a card.
const productLines: Record<Locale, Record<string, string>> = {
  en: {
    neuron: "An open-source desktop wallet for Nervos CKB.",
    "1-tok": "A marketplace for AI agent work, metered by the token.",
    "fiber-link": "Community rewards and tipping, settled over Fiber.",
    "utxo-data": "Indexed UTXO chain activity through APIs and analytics.",
    "distributed-paradigm": "Kuai: distributed applications on CKB as actors."
  },
  zh: {
    neuron: "一款开源的 Nervos CKB 桌面钱包。",
    "1-tok": "按 token 计量的 AI 智能体工作市场。",
    "fiber-link": "社区奖励与打赏，通过 Fiber 结算。",
    "utxo-data": "通过 API 和分析工具提供的 UTXO 链上索引数据。",
    "distributed-paradigm": "Kuai：在 CKB 上以 actor 构建分布式应用。"
  },
  ja: {
    neuron: "Nervos CKB のためのオープンソースのデスクトップウォレット。",
    "1-tok": "トークン単位で計測する、AI エージェントの仕事のマーケットプレイス。",
    "fiber-link": "Fiber で決済する、コミュニティの報酬と投げ銭。",
    "utxo-data": "API と分析で提供する、UTXO チェーンのインデックスデータ。",
    "distributed-paradigm": "Kuai：CKB 上の分散アプリケーションをアクターで。"
  },
  ko: {
    neuron: "Nervos CKB를 위한 오픈 소스 데스크톱 지갑.",
    "1-tok": "토큰 단위로 측정하는 AI 에이전트 작업 마켓플레이스.",
    "fiber-link": "Fiber로 정산하는 커뮤니티 보상과 팁.",
    "utxo-data": "API와 분석으로 제공하는 UTXO 체인 인덱스 데이터.",
    "distributed-paradigm": "Kuai: CKB 위의 분산 애플리케이션을 액터로."
  }
};

function cardsFor(locale: Locale): Record<string, Card> {
  const site = getSiteCopy(locale);
  const painted = (name: string, kicker: string, title: string): Painted => ({ kind: "painted", painting: art[name][0], position: art[name][1], kicker, title });
  const cards: Record<string, Card> = {
    home: painted("home", site.meta.siteTitle, getExaminationCopy(locale).steps[0].title),
    services: painted("services", site.services.kicker, site.services.title),
    datasets: painted("datasets", site.datasets.kicker, site.datasets.title),
    work: painted("work", site.work.kicker, site.work.title),
    melix: painted("melix", site.melix.kicker, site.melix.title),
    company: painted("company", site.company.kicker, site.company.title),
    contact: painted("contact", site.contact.kicker, site.contact.title),
    notes: painted("notes", site.notes.kicker, site.notes.title),
    "earlier-work": painted("earlier-work", site.earlierWork.kicker, site.earlierWork.title),
    security: painted("security", site.security.kicker, site.security.title),
    privacy: painted("privacy", legalContent.privacy[locale].eyebrow, legalContent.privacy[locale].title),
    terms: painted("terms", legalContent.terms[locale].eyebrow, legalContent.terms[locale].title)
  };
  for (const entry of getWorkEntries(locale)) {
    const name = `work-${entry.slug}`;
    cards[name] = entry.painting ? painted(name, entry.kicker, entry.title) : painted(name, entry.title, entry.summary);
  }
  for (const slug of ["evaluate-local-lora", "private-deployment-boundaries"]) {
    const note = getContentEntry("notes", locale, slug);
    if (!note) throw new Error(`Missing note ${locale}/${slug}`);
    cards[`notes-${slug}`] = painted(`notes-${slug}`, site.notes.kicker, getString(note.frontmatter, "title"));
  }
  for (const slug of ["responsible-use", "security-review"]) {
    const page = getLegalDetail(locale, slug);
    if (!page) throw new Error(`Missing legal page ${locale}/${slug}`);
    cards[`legal-${slug}`] = painted(`legal-${slug}`, page.eyebrow, page.title);
  }
  for (const [slug, line] of Object.entries(productLines[locale])) {
    const page = getEarlierWork(locale, slug);
    if (!page?.exhibit) throw new Error(`Missing earlier work ${locale}/${slug}`);
    cards[`earlier-work-${slug}`] = { kind: "product", cover: page.exhibit.src, kicker: site.earlierWork.kicker, title: page.title, line };
  }
  return cards;
}

const cjkSerif: Partial<Record<Locale, string>> = { zh: "Noto Serif SC", ja: "Noto Serif JP", ko: "Noto Serif KR" };
const cjkSans: Record<Locale, string> = { en: "", zh: "'PingFang SC', ", ja: "'Hiragino Sans', ", ko: "'Apple SD Gothic Neo', " };
const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const phrased = (s: string) => phraseParts(s).map(escape).join("<wbr>");

function html(locale: Locale, card: Card) {
  const serif = cjkSerif[locale];
  const families = ["family=Archivo:wdth,wght@62..125,100..900", "family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400", ...(serif ? [`family=${serif.replace(/ /g, "+")}:wght@500`] : [])];
  const display = `'Bodoni Moda', ${serif ? `'${serif}', ` : ""}serif`;
  const text = `'Archivo', ${cjkSans[locale]}sans-serif`;
  const lang = locale === "zh" ? "zh-Hans" : locale;
  const head = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${families.join("&")}&display=block">
<style>*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden}
body{font-family:${text};font-synthesis:weight}
.k{font:italic 400 26px/1.25 ${display};margin:0 0 14px}
.t{font:400 64px/1.02 ${display};letter-spacing:-.015em;margin:0;text-wrap:balance}
html:not([lang=en]) .t{font-size:52px;line-height:1.3;letter-spacing:.01em}
html:not([lang=en]) .k{font-size:24px}
html[lang=ja] .t{word-break:auto-phrase}
html[lang=zh-Hans] .t{word-break:keep-all;overflow-wrap:anywhere}
html[lang=ko]{word-break:keep-all}
.u{font:500 18px ${text};letter-spacing:.01em}
.bar{width:44px;height:3px;background:#2437ff;margin:0 0 18px}`;
  const logo = `<img class="logo" src="${file("brand/logo-wordmark.svg")}">`;

  if (card.kind === "painted") {
    return `${head}
body{background:#0e0c0a;color:#f4f1ea;position:relative}
.art{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${card.position}}
.veil{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,6,4,.86) 0%,rgba(8,6,4,.6) 38%,rgba(8,6,4,.05) 72%),linear-gradient(0deg,rgba(8,6,4,.55),rgba(8,6,4,0) 45%)}
.logo{position:absolute;left:64px;top:52px;height:36px;filter:invert(1)}
.copy{position:absolute;left:64px;bottom:58px;width:660px}
.k{color:#d9d3c7}.u{color:#b9b4aa;margin-top:26px}
</style></head><body><img class="art" src="${file(`paintings/${card.painting}.jpg`)}"><div class="veil"></div>
${logo}<div class="copy"><div class="bar"></div><p class="k">${escape(card.kicker)}</p><h1 class="t">${phrased(card.title)}</h1><div class="u">random-walk.co.jp</div></div></body></html>`;
  }
  return `${head}
body{background:#fbfaf7;color:#1b1712;display:grid;grid-template-columns:430px 1fr;gap:40px;padding:56px 56px 56px 64px}
.logo{height:32px;width:auto;display:block;align-self:flex-start}
.left{display:flex;flex-direction:column;justify-content:space-between}
.k{color:#6a655c}.t{font-size:60px}.d{font:400 21px/1.5 ${text};color:#3b3730;margin:18px 0 0}
.u{color:#6a655c}
.mat{background:#f3f0e9;border:1px solid #e3dfd7;display:grid;place-items:center;padding:34px}
.mat img{width:100%;height:auto;max-height:100%;object-fit:contain;box-shadow:0 1px 2px rgba(27,23,18,.08),0 18px 40px rgba(27,23,18,.14)}
</style></head><body><div class="left">${logo}<div><div class="bar"></div><p class="k">${escape(card.kicker)}</p><h1 class="t">${phrased(card.title)}</h1><p class="d">${escape(card.line)}</p></div><div class="u">random-walk.co.jp</div></div>
<div class="mat"><img src="${file(card.cover.replace(/^\//, ""))}"></div></body></html>`;
}

// A small DevTools client: one headless Chrome, one tab, pages rendered in turn.
type Pending = { resolve: (value: Record<string, unknown>) => void; reject: (error: Error) => void };

async function openChrome(profile: string) {
  const port = 9340 + Math.floor(Math.random() * 400);
  const child = spawn(chrome, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--no-default-browser-check",
    "--allow-file-access-from-files", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, "about:blank"], { stdio: "ignore" });
  let endpoint = "";
  for (let i = 0; i < 100 && !endpoint; i++) {
    try {
      endpoint = ((await (await fetch(`http://127.0.0.1:${port}/json/version`)).json()) as { webSocketDebuggerUrl: string }).webSocketDebuggerUrl;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  if (!endpoint) throw new Error("Chrome did not start");
  const ws = new WebSocket(endpoint);
  await new Promise((r) => ws.addEventListener("open", r, { once: true }));
  let id = 0;
  const pending = new Map<number, Pending>();
  const waiters: { method: string; resolve: () => void }[] = [];
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(String(event.data));
    if (message.id && pending.has(message.id)) {
      const p = pending.get(message.id)!;
      pending.delete(message.id);
      if (message.error) p.reject(new Error(JSON.stringify(message.error)));
      else p.resolve(message.result);
    } else if (message.method) {
      const i = waiters.findIndex((w) => w.method === message.method);
      if (i >= 0) waiters.splice(i, 1)[0].resolve();
    }
  });
  let session = "";
  const send = (method: string, params: Record<string, unknown> = {}) =>
    new Promise<Record<string, unknown>>((resolve, reject) => {
      const n = ++id;
      pending.set(n, { resolve, reject });
      ws.send(JSON.stringify(session ? { id: n, method, params, sessionId: session } : { id: n, method, params }));
    });
  const next = (method: string) => new Promise<void>((resolve) => waiters.push({ method, resolve }));
  const { targetId } = (await send("Target.createTarget", { url: "about:blank" })) as { targetId: string };
  session = ((await send("Target.attachToTarget", { targetId, flatten: true })) as { sessionId: string }).sessionId;
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: 1200, height: 630, deviceScaleFactor: 1, mobile: false });

  return {
    async shoot(page: string) {
      const loaded = next("Page.loadEventFired");
      await send("Page.navigate", { url: pathToFileURL(page).href });
      await loaded;
      await send("Runtime.evaluate", {
        // CJK faces arrive in unicode-range slices, so ask for the exact glyphs each line uses before capturing.
        expression: `(async () => {
          await Promise.all([...document.querySelectorAll(".k, .t, .d, .u")].map((el) => {
            const cs = getComputedStyle(el);
            return document.fonts.load(cs.fontStyle + " " + cs.fontWeight + " " + cs.fontSize + " " + cs.fontFamily, el.textContent).catch(() => null);
          }));
          await document.fonts.ready;
          await Promise.all([...document.images].map((i) => i.decode().catch(() => null)));
          await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
        })()`,
        awaitPromise: true
      });
      const { data } = (await send("Page.captureScreenshot", { format: "png" })) as { data: string };
      return Buffer.from(data, "base64");
    },
    close() {
      ws.close();
      child.kill();
    }
  };
}

const work = mkdtempSync(join(tmpdir(), "rw-og-"));
const jobs: { page: string; out: string }[] = [];
for (const locale of locales) {
  const cards = cardsFor(locale);
  const missing = ogImageNames.filter((name) => !cards[name]);
  if (missing.length) throw new Error(`No share card for ${missing.join(", ")}`);
  mkdirSync(join(publicDir, "og", locale), { recursive: true });
  for (const name of ogImageNames) {
    const page = join(work, `${locale}-${name}.html`);
    writeFileSync(page, html(locale, cards[name]));
    jobs.push({ page, out: join(publicDir, "og", locale, `${name}.jpg`) });
  }
  if (locale === "en") jobs.push({ page: join(work, "en-home.html"), out: join(publicDir, "og", "default.jpg") });
}

const browser = await openChrome(join(work, "profile"));
try {
  for (const job of jobs) await sharp(await browser.shoot(job.page)).jpeg({ quality: 86, mozjpeg: true }).toFile(job.out);
} finally {
  browser.close();
}
rmSync(work, { recursive: true, force: true });
console.log(`Rendered ${jobs.length} share images into public/og.`);
