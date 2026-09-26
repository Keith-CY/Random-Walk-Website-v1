import type { MetadataRoute } from "next";
import { getContentEntries } from "@/lib/content";
import { creationDetailSlugs, legalDetailSlugs, resourceDetailSlugs, serviceDetailSlugs } from "@/lib/footer-detail-pages";
import { locales, localizePath, type Locale } from "@/lib/i18n";

export const dynamic = "force-static";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://random-walk.co.jp").replace(/\/$/, "");

// Canonical localized routes only: English compatibility aliases, /home, /melix and /articles
// canonicalize to these paths, and /meet is intentionally unlisted.
const staticPaths = ["/", "/company", "/services", "/creations", "/work", "/notes", "/security", "/contact", "/events", "/philosophy", "/privacy", "/terms"];

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

function contentPaths(type: "work" | "notes") {
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
    ...serviceDetailSlugs.flatMap((slug) => entry(`/services/${slug}`)),
    ...creationDetailSlugs.flatMap((slug) => entry(`/creations/${slug}`)),
    ...resourceDetailSlugs.flatMap((slug) => entry(`/resources/${slug}`)),
    ...legalDetailSlugs.flatMap((slug) => entry(`/legal/${slug}`)),
    ...contentPaths("work"),
    ...contentPaths("notes")
  ];
}
