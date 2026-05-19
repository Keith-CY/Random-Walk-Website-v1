import { spawn } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const baseUrl = process.argv[2] || "http://127.0.0.1:4173";
const outputDir = process.argv[3] || ".visual-check";
const devtoolsPort = Number(process.env.RW_VISUAL_CHECK_PORT || "9333");

const pages = [
  "/en/",
  "/en/company/",
  "/en/services/",
  "/en/melix/",
  "/en/security/",
  "/en/work/",
  "/en/work/legal-ip-private-model/",
  "/en/notes/",
  "/en/notes/evaluate-local-lora/",
  "/en/contact/",
  "/en/privacy/",
  "/en/terms/"
];

const viewports = [
  { name: "desktop", width: 1440, height: 1100, mobile: false },
  { name: "mobile", width: 390, height: 844, mobile: true }
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.nextId = 1;
    this.pending = new Map();
    this.events = [];
    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(JSON.stringify(message.error)));
        else resolve(message.result);
        return;
      }
      if (message.method) this.events.push(message);
    });
  }

  send(method, params = {}, sessionId) {
    const id = this.nextId++;
    const payload = sessionId ? { id, method, params, sessionId } : { id, method, params };
    this.ws.send(JSON.stringify(payload));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }

  async waitFor(method, sessionId, timeoutMs = 8000) {
    const started = Date.now();
    while (Date.now() - started < timeoutMs) {
      const index = this.events.findIndex((event) => event.method === method && (!sessionId || event.sessionId === sessionId));
      if (index >= 0) return this.events.splice(index, 1)[0];
      await delay(50);
    }
    throw new Error(`Timed out waiting for ${method}`);
  }
}

async function waitForVersion(port) {
  const endpoint = `http://127.0.0.1:${port}/json/version`;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(endpoint);
      if (response.ok) return response.json();
    } catch {
      // Chrome is still starting.
    }
    await delay(100);
  }
  throw new Error("Chrome DevTools endpoint did not start");
}

function slugFor(pathname, viewportName) {
  return `${viewportName}-${pathname.replace(/^\/|\/$/g, "").replaceAll("/", "-") || "root"}.png`;
}

const metricsExpression = `(() => {
  const doc = document.documentElement;
  const footer = document.querySelector("footer");
  const main = document.querySelector("main");
  const overflowElements = Array.from(document.querySelectorAll("body *"))
    .map((element) => {
      const rect = element.getBoundingClientRect();
      return { element, rect };
    })
    .filter(({ rect }) => rect.width > 0 && rect.height > 0 && (rect.left < -1 || rect.right > window.innerWidth + 1))
    .slice(0, 8)
    .map(({ element, rect }) => ({
      tag: element.tagName.toLowerCase(),
      className: String(element.className || ""),
      text: (element.textContent || "").trim().slice(0, 80),
      left: Math.round(rect.left),
      right: Math.round(rect.right)
    }));
  const brokenImages = Array.from(document.images)
    .filter((image) => {
      const src = image.currentSrc || image.src || "";
      if (src.includes(".svg")) return false;
      if (!image.complete) return true;
      if (image.naturalWidth > 0) return false;
      return true;
    })
    .map((image) => image.currentSrc || image.src || image.alt);
  const imageFrameText = Array.from(document.querySelectorAll(".rw-image-frame"))
    .map((frame) => (frame.innerText || "").trim())
    .filter(Boolean);

  return {
    path: location.pathname,
    title: document.title,
    scrollWidth: doc.scrollWidth,
    clientWidth: doc.clientWidth,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    horizontalOverflow: doc.scrollWidth > doc.clientWidth + 1,
    overflowElements,
    brokenImages,
    imageCount: document.images.length,
    imageFrameText,
    footerBottom: footer ? Math.round(footer.getBoundingClientRect().bottom) : null,
    footerTouchesViewport: footer ? footer.getBoundingClientRect().bottom >= window.innerHeight - 2 : false,
    mainBottom: main ? Math.round(main.getBoundingClientRect().bottom) : null,
    fileInputs: document.querySelectorAll('input[type="file"]').length,
    confidentialityWarning: Boolean(Array.from(document.querySelectorAll("body *")).find((element) => (element.textContent || "").includes("Confidentiality warning"))),
    reducedMotionQuery: matchMedia("(prefers-reduced-motion: reduce)").matches
  };
})()`;

const warmPageExpression = `(async () => {
  const step = Math.max(420, Math.floor(window.innerHeight * 0.72));
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const waitForVisibleImages = () => Promise.race([
    Promise.all(Array.from(document.images).map((image) => {
      const rect = image.getBoundingClientRect();
      const isNearViewport = rect.bottom >= -window.innerHeight && rect.top <= window.innerHeight * 2;
      if (!isNearViewport || image.complete) return true;
      return new Promise((resolve) => {
        image.addEventListener("load", () => resolve(true), { once: true });
        image.addEventListener("error", () => resolve(false), { once: true });
      });
    })).then(() => true),
    new Promise((resolve) => setTimeout(() => resolve(false), 900))
  ]);
  for (let y = 0; y <= maxY; y += step) {
    window.scrollTo(0, y);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    await waitForVisibleImages();
    await new Promise((resolve) => setTimeout(resolve, 80));
  }
  window.scrollTo(0, 0);
  await new Promise((resolve) => setTimeout(resolve, 220));
  return true;
})()`;

const waitForImagesExpression = `Promise.race([
  Promise.all(Array.from(document.images).map((image) => {
    if (image.complete) return true;
    return new Promise((resolve) => {
      image.addEventListener("load", () => resolve(true), { once: true });
      image.addEventListener("error", () => resolve(false), { once: true });
    });
  })).then(() => true),
  new Promise((resolve) => setTimeout(() => resolve(false), 5000))
])`;

async function main() {
  if (!existsSync(chromePath)) throw new Error(`Chrome was not found at ${chromePath}`);
  rmSync(outputDir, { recursive: true, force: true });
  mkdirSync(outputDir, { recursive: true });

  const userDataDir = join(tmpdir(), `rw-chrome-${Date.now()}`);
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--disable-extensions",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${devtoolsPort}`,
    `--user-data-dir=${userDataDir}`,
    "about:blank"
  ], { stdio: ["ignore", "ignore", "pipe"] });

  const stderr = [];
  chrome.stderr.on("data", (chunk) => stderr.push(String(chunk)));

  try {
    const version = await waitForVersion(devtoolsPort);
    const ws = new WebSocket(version.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      ws.addEventListener("open", resolve, { once: true });
      ws.addEventListener("error", reject, { once: true });
    });
    const cdp = new Cdp(ws);
    const target = await cdp.send("Target.createTarget", { url: "about:blank" });
    const attached = await cdp.send("Target.attachToTarget", { targetId: target.targetId, flatten: true });
    const sessionId = attached.sessionId;

    await cdp.send("Page.enable", {}, sessionId);
    await cdp.send("Runtime.enable", {}, sessionId);
    await cdp.send("Log.enable", {}, sessionId);

    const results = [];

    for (const viewport of viewports) {
      await cdp.send("Emulation.setDeviceMetricsOverride", {
        width: viewport.width,
        height: viewport.height,
        deviceScaleFactor: 1,
        mobile: viewport.mobile
      }, sessionId);

      for (const page of pages) {
        const url = `${baseUrl}${page}`;
        const eventOffset = cdp.events.length;
        await cdp.send("Page.navigate", { url }, sessionId);
        await cdp.waitFor("Page.loadEventFired", sessionId);
        await cdp.send("Runtime.evaluate", {
          expression: warmPageExpression,
          awaitPromise: true,
          returnByValue: true
        }, sessionId);
        await cdp.send("Runtime.evaluate", {
          expression: waitForImagesExpression,
          awaitPromise: true,
          returnByValue: true
        }, sessionId);
        await delay(250);

        const metricsResult = await cdp.send("Runtime.evaluate", {
          expression: metricsExpression,
          returnByValue: true
        }, sessionId);
        const layout = await cdp.send("Page.getLayoutMetrics", {}, sessionId);
        const contentSize = layout.cssContentSize || layout.contentSize;
        const screenshot = await cdp.send("Page.captureScreenshot", {
          format: "png",
          fromSurface: true,
          captureBeyondViewport: true,
          clip: {
            x: 0,
            y: 0,
            width: Math.ceil(contentSize.width),
            height: Math.ceil(contentSize.height),
            scale: 1
          }
        }, sessionId);
        const screenshotPath = join(outputDir, slugFor(page, viewport.name));
        writeFileSync(screenshotPath, Buffer.from(screenshot.data, "base64"));

        const pageEvents = cdp.events.slice(eventOffset);
        const consoleProblems = pageEvents.filter((event) => {
          if (event.method === "Runtime.exceptionThrown") return true;
          if (event.method === "Log.entryAdded") return ["error", "warning"].includes(event.params.entry.level);
          if (event.method === "Runtime.consoleAPICalled") return ["error", "warning"].includes(event.params.type);
          return false;
        }).map((event) => event.method);

        results.push({
          viewport: viewport.name,
          page,
          screenshotPath,
          ...metricsResult.result.value,
          consoleProblems
        });
      }
    }

    writeFileSync(join(outputDir, "summary.json"), JSON.stringify(results, null, 2));
    ws.close();
    const failures = results.filter((result) =>
      result.horizontalOverflow ||
      result.brokenImages.length > 0 ||
      result.imageFrameText.length > 0 ||
      result.consoleProblems.length > 0 ||
      (["/en/notes/", "/en/privacy/", "/en/terms/"].includes(result.page) && !result.footerTouchesViewport) ||
      (result.page === "/en/contact/" && (result.fileInputs !== 0 || !result.confidentialityWarning))
    );
    process.stdout.write(JSON.stringify({
      outputDir,
      total: results.length,
      failures
    }, null, 2));
    if (failures.length > 0) process.exitCode = 1;
  } finally {
    chrome.kill();
    await Promise.race([
      new Promise((resolve) => chrome.once("exit", resolve)),
      delay(1500)
    ]);
    rmSync(userDataDir, { recursive: true, force: true, maxRetries: 4, retryDelay: 120 });
    if (stderr.length > 0) writeFileSync(join(outputDir, "chrome-stderr.log"), stderr.join(""));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
