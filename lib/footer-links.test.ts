import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
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

function appPageSources(dir = join(projectRoot, "app")): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) return appPageSources(fullPath);
    return entry === "page.tsx" ? [fullPath] : [];
  });
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

  test("renders compatibility routes directly instead of moved-page redirects", () => {
    const rootHome = readSource("app/home/page.tsx");
    const localizedHomePath = join(projectRoot, "app", "[locale]", "home", "page.tsx");

    expect(rootHome).toContain("HomePageContent");
    expect(existsSync(localizedHomePath)).toBe(true);
    expect(readFileSync(localizedHomePath, "utf8")).toContain("HomePageContent");

    for (const path of appPageSources()) {
      expect(readFileSync(path, "utf8"), relative(projectRoot, path)).not.toContain("RedirectPage");
    }
  });
});
