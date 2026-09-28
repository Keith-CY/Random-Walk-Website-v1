import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { domains, highlighted, painting, steps } from "./examination/data";
import { locales } from "./i18n";
import { localizedMetadata, ogImageFor, ogImageNames } from "./metadata";
import { earlierWork } from "./detail-copy";
import { company, getSiteCopy, notePaintings, paintings } from "./site-copy";
import { earlierWorkSlugs, workEntries } from "./work-entries";

const root = process.cwd();
const read = (...parts: string[]) => readFileSync(join(root, ...parts), "utf8");
const pageFor = (path: string) => join(root, "app", "[locale]", ...path.split("/").filter(Boolean), "page.tsx");

type Redirect = { source: string; destination: string };
const redirects: Redirect[] = JSON.parse(read("vercel.json")).redirects;

describe("routes", () => {
  test("every navigation and footer link has a page", () => {
    const copy = getSiteCopy("en");
    const links = [...copy.nav.items, ...copy.footer.groups.flatMap((g) => g.links)].map((l) => l.href);
    for (const href of links) expect(existsSync(pageFor(href)) || existsSync(join(root, "app", "[locale]", "legal", "[slug]", "page.tsx"))).toBe(true);
    for (const href of copy.nav.items.map((i) => i.href)) expect(existsSync(pageFor(href))).toBe(true);
  });

  test("text pages use the new layouts, not the previous site's components", () => {
    const pages = ["notes/page.tsx", "notes/[slug]/page.tsx", "security/page.tsx", "privacy/page.tsx", "terms/page.tsx", "legal/[slug]/page.tsx", "earlier-work/page.tsx", "earlier-work/[slug]/page.tsx"];
    for (const page of pages) {
      const source = read("app", "[locale]", ...page.split("/"));
      for (const old of ["FooterDetailPage", "InstitutionalGrid", "PlaceholderImage", "rw-page-title"]) expect(source).not.toContain(old);
    }
  });

  test("retired routes no longer have pages", () => {
    for (const path of ["/creations", "/events", "/philosophy", "/articles", "/home", "/resources"]) {
      expect(existsSync(join(root, "app", "[locale]", path.slice(1)))).toBe(false);
      expect(existsSync(join(root, "app", path.slice(1)))).toBe(false);
    }
  });

  test("retired routes are permanently redirected to pages that exist", () => {
    const retired = ["/home", "/articles", "/philosophy", "/events", "/creations", "/creations/melix", "/creations/:slug", "/services/:slug", "/resources/:slug", "/work/:slug"];
    for (const path of retired) {
      expect(redirects.some((r) => r.source.startsWith(`/:locale(en|zh|ja|ko)${path}`))).toBe(true);
    }
    for (const r of redirects) {
      const destination = r.destination.replace(/^\/(:locale|en)/, "").replace(/#.*$/, "").replace(/\/$/, "").replace(":slug", "neuron");
      const target = destination === "" ? join(root, "app", "[locale]", "page.tsx") : pageFor(destination.startsWith("/earlier-work/") ? "/earlier-work/[slug]" : destination);
      expect(existsSync(target)).toBe(true);
    }
  });

  test("the sitemap lists the new routes and keeps the visit page private", () => {
    const sitemap = read("app", "sitemap.ts");
    for (const path of ["/services", "/datasets", "/work", "/melix", "/company", "/earlier-work"]) expect(sitemap).toContain(`"${path}"`);
    expect(sitemap).not.toContain('"/meet"');
    expect(read("app", "[locale]", "meet", "page.tsx")).toContain("index: false");
  });

  test("the home page is the examination, with its own navigation", () => {
    expect(read("components", "home", "home-content.tsx")).toContain("<Examination");
    expect(read("app", "page.tsx")).toContain("HomeContent");
    expect(read("components", "site-header.tsx")).toContain("homePath");
    expect(read("components", "home", "examination.tsx")).toContain("<SiteNav");
  });
});

describe("search and sharing", () => {
  test("every indexed page has its own share image on disk", () => {
    for (const name of [...ogImageNames, "default"]) expect(existsSync(join(root, "public", "og", `${name}.jpg`))).toBe(true);
    const pages = ["/", "/services", "/datasets", "/work", "/melix", "/company", "/contact", "/notes", "/earlier-work", "/security", "/privacy", "/terms",
      ...workEntries.map((e) => `/work/${e.slug}`), ...earlierWorkSlugs.map((s) => `/earlier-work/${s}`), "/legal/responsible-use", "/legal/security-review",
      "/notes/evaluate-local-lora", "/notes/private-deployment-boundaries"];
    for (const path of pages) expect(ogImageFor(path, "x").url).not.toBe("/og/default.jpg");
  });

  test("pages declare an x-default language and a proper og:locale", () => {
    const meta = localizedMetadata("ja", "/services", "Services");
    expect((meta.alternates?.languages as Record<string, string>)["x-default"]).toBe("/en/services/");
    expect((meta.openGraph as { locale?: string }).locale).toBe("ja_JP");
  });
});

describe("booking functions", () => {
  // package.json is "type": "module", so Vercel runs these as Node ESM, which cannot resolve extensionless paths.
  test("import local modules with explicit .js extensions", () => {
    for (const file of ["slots.ts", "book.ts"]) {
      const source = read("api", "meet", file);
      for (const [, specifier] of source.matchAll(/from "(\.[^"]+)"/g)) expect(specifier.endsWith(".js")).toBe(true);
    }
  });

  test("are not redirected to a trailing slash", () => {
    expect(JSON.parse(read("vercel.json")).trailingSlash).toBeUndefined();
  });
});

describe("copy", () => {
  test("every locale has site copy", () => {
    for (const locale of locales) expect(getSiteCopy(locale).nav.items.length).toBe(5);
  });

  test("the site shows the address to the block, and only the legal pages carry the room number", () => {
    expect(company.addressBlock.endsWith("1丁目")).toBe(true);
    expect(company.addressFull).toContain("203");
    for (const page of ["company", "contact"]) expect(read("app", "[locale]", page, "page.tsx")).not.toContain("addressFull");
    expect(read("app", "[locale]", "contact", "page.tsx")).toContain("company.addressBlock");
    for (const page of ["terms", "privacy"]) expect(read("app", "[locale]", page, "page.tsx")).toContain("<LegalDocument");
    expect(read("components", "site", "legal-document.tsx")).toContain("<OperatorDetails");
  });

  test("work entries and earlier work are complete", () => {
    expect(workEntries.map((e) => e.slug)).toEqual(["mac-computer-use", "business-arenas", "turnvector", "sayit"]);
    expect(workEntries.find((e) => e.slug === "turnvector")?.status).toBe("In development");
    expect(earlierWorkSlugs).toHaveLength(5);
  });
});

describe("paintings", () => {
  test("every painting the site uses exists on disk", () => {
    const used = [...Object.values(paintings), ...workEntries.flatMap((e) => (e.painting ? [e.painting] : []))];
    for (const p of used) expect(existsSync(join(root, "public", p.src))).toBe(true);
    expect(existsSync(join(root, "public", painting.src))).toBe(true);
    expect(existsSync(join(root, "public", painting.ghost))).toBe(true);
  });

  test("every note and earlier-work page has its image, and product screenshots exist", () => {
    for (const slug of ["evaluate-local-lora", "private-deployment-boundaries"]) expect(existsSync(join(root, "public", notePaintings[slug].src))).toBe(true);
    for (const slug of earlierWorkSlugs) {
      const exhibit = earlierWork[slug].exhibit;
      expect(exhibit).toBeDefined();
      expect(existsSync(join(root, "public", exhibit!.src))).toBe(true);
    }
    const melix = getSiteCopy("en").melix;
    for (const image of [melix.window, melix.cover]) expect(existsSync(join(root, "public", image.src))).toBe(true);
  });
});

describe("examination", () => {
  test("has six layers in order, starting with visible light and the token map", () => {
    expect(steps.map((s) => s.mode)).toEqual([0, 5, 1, 2, 3, 4]);
    expect(steps[0].title).toBe("A model is made in layers.");
  });

  test("places every mark inside the painting", () => {
    const points = [...painting.boxes.map((b) => [b[0], b[1], b[0] + b[2], b[1] + b[3]]), ...painting.xray, ...painting.raking, ...painting.spots].flat().filter((n): n is number => typeof n === "number");
    for (const n of points) {
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThanOrEqual(1);
    }
    expect(painting.spots).toHaveLength(4);
  });

  test("the trained model's top word is the highlighted one in every demo", () => {
    for (const d of domains) {
      const trainedTop = [...d.candidates].sort((a, b) => b[2] - a[2])[0][0];
      const baseTop = [...d.candidates].sort((a, b) => b[1] - a[1])[0][0];
      expect(highlighted.has(trainedTop)).toBe(true);
      expect(baseTop).not.toBe(trainedTop);
      for (const col of [1, 2]) expect(d.candidates.reduce((sum, c) => sum + (c[col] as number), 0)).toBeLessThanOrEqual(1);
      expect(d.trained[0].startsWith(d.prompt)).toBe(true);
    }
  });
});
