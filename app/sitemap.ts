import type { MetadataRoute } from "next";
import { getContentEntries } from "@/lib/content";
import { legalDetailSlugs } from "@/lib/footer-detail-pages";
import { locales, localizePath, type Locale } from "@/lib/i18n";
import { earlierWorkSlugs, workEntries } from "@/lib/work-entries";

export const dynamic = "force-static";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://random-walk.co.jp").replace(/\/$/, "");

// Canonical routes: unprefixed compatibility routes canonicalize to localized routes,
// retired routes redirect (vercel.json), and /meet is shared by direct link and left out.
const staticPaths = ["/", "/services", "/datasets", "/work", "/melix", "/company", "/contact", "/notes", "/earlier-work", "/security", "/privacy", "/terms"];

function absoluteUrl(locale: Locale, path: string) {
  return `${siteUrl}${localizePath(locale, path)}/`;
}

function entry(path: string, availableIn: readonly Locale[] = locales): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(availableIn.map((locale) => [locale, absoluteUrl(locale, path)]));
  return availableIn.map((locale) => ({
    url: absoluteUrl(locale, path),
    alternates: { languages }
  }));
}

function contentPaths(type: "notes") {
  const slugs = new Map<string, Locale[]>();
  for (const locale of locales) {
    for (const { slug } of getContentEntries(type, locale)) {
      slugs.set(slug, [...(slugs.get(slug) ?? []), locale]);
    }
  }
  return [...slugs].flatMap(([slug, availableIn]) => entry(`/${type}/${slug}`, availableIn));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.flatMap((path) => entry(path)),
    ...workEntries.flatMap(({ slug }) => entry(`/work/${slug}`)),
    ...earlierWorkSlugs.flatMap((slug) => entry(`/earlier-work/${slug}`)),
    ...legalDetailSlugs.flatMap((slug) => entry(`/legal/${slug}`)),
    ...contentPaths("notes"),
    { url: `${siteUrl}/sop-keyword-research/` },
    { url: `${siteUrl}/sop-keyword-research/privacy/` }
  ];
}
