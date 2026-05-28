import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import {
  creationDetailSlugs,
  legalDetailSlugs,
  resourceDetailSlugs,
  serviceDetailSlugs
} from "./footer-detail-pages";
import { dictionaries, locales } from "./i18n";

const projectRoot = process.cwd();
const dynamicFooterRoutes = new Map<string, readonly string[]>([
  ["services", serviceDetailSlugs],
  ["creations", creationDetailSlugs],
  ["resources", resourceDetailSlugs],
  ["legal", legalDetailSlugs]
]);

function readSource(path: string) {
  return readFileSync(join(projectRoot, ...path.split("/")), "utf8");
}

function footerHrefs(locale: keyof typeof dictionaries) {
  return dictionaries[locale].footer.groups.flatMap((group) => group.links.map((link) => link.href.replace(/\/$/, "")));
}

function hasLocalizedRoute(href: string) {
  if (href.includes("#")) return false;
  const segments = href.split("/").filter(Boolean);
  if (segments.length === 1) {
    return existsSync(join(projectRoot, "app", "[locale]", segments[0], "page.tsx"));
  }

  if (segments.length === 2) {
    const [section, slug] = segments;
    const dynamicSlugs = dynamicFooterRoutes.get(section);
    if (dynamicSlugs) {
      return dynamicSlugs.includes(slug) && existsSync(join(projectRoot, "app", "[locale]", section, "[slug]", "page.tsx"));
    }

    if (section === "notes") {
      return existsSync(join(projectRoot, "content", "notes", "en", `${slug}.mdx`));
    }

    if (section === "work") {
      return existsSync(join(projectRoot, "content", "work", "en", `${slug}.mdx`));
    }

    return existsSync(join(projectRoot, "app", "[locale]", section, slug, "page.tsx"));
  }

  return false;
}

describe("footer links", () => {
  test("do not reuse a single href for multiple footer items", () => {
    for (const locale of locales) {
      const hrefs = footerHrefs(locale);
      expect(new Set(hrefs).size).toBe(hrefs.length);
    }
  });

  test("point to pages rather than borrowed anchors", () => {
    for (const locale of locales) {
      for (const href of footerHrefs(locale)) {
        expect(href, `${locale} ${href}`).not.toContain("#");
        expect(hasLocalizedRoute(href), `${locale} ${href}`).toBe(true);
      }
    }
  });

  test("uses real localized detail pages for footer leaf sections", () => {
    const routeSources = [
      "app/[locale]/services/[slug]/page.tsx",
      "app/[locale]/creations/[slug]/page.tsx",
      "app/[locale]/resources/[slug]/page.tsx",
      "app/[locale]/legal/[slug]/page.tsx",
      "app/[locale]/philosophy/page.tsx",
      "app/[locale]/creations/page.tsx"
    ];

    for (const path of routeSources) {
      expect(readSource(path), path).not.toContain("RedirectPage");
      expect(readSource(path), path).toContain("FooterDetailPage");
    }
  });

  test("keeps retired writing routes as explicit compatibility redirects", () => {
    const articlesRedirect = readSource("app/[locale]/articles/page.tsx");
    const melixRedirect = readSource("app/[locale]/melix/page.tsx");

    expect(articlesRedirect).toContain("RedirectPage");
    expect(articlesRedirect).toContain("/notes/");
    expect(melixRedirect).toContain("RedirectPage");
    expect(melixRedirect).toContain("/creations/melix/");
  });
});
