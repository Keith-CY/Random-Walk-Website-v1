import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://random-walk.co.jp").replace(/\/$/, "");

const defaultDescription = "Random Walk is an AI lab for growing companies. We choose the right model, build the data, train it when it pays and keep it running in your own cloud, server room or Macs.";

export const ogLocales: Record<Locale, string> = { en: "en_US", zh: "zh_CN", ja: "ja_JP", ko: "ko_KR" };

// Share images rendered for each public page (public/og/<name>.jpg), named after the page's path.
export const ogImageNames = [
  "home", "services", "datasets", "work", "work-mac-computer-use", "work-business-arenas", "work-turnvector", "work-sayit",
  "melix", "company", "contact", "notes", "notes-evaluate-local-lora", "notes-private-deployment-boundaries",
  "earlier-work", "earlier-work-neuron", "earlier-work-1-tok", "earlier-work-fiber-link", "earlier-work-utxo-data", "earlier-work-distributed-paradigm",
  "security", "privacy", "terms", "legal-responsible-use", "legal-security-review"
] as const;

export const ogImage = { url: "/og/default.jpg", width: 1200, height: 630, alt: "Random Walk - An AI lab for growing companies." };

export function ogImageFor(path: string, alt: string) {
  const name = path.replace(/^\/|\/$/g, "").replace(/\//g, "-") || "home";
  const known = (ogImageNames as readonly string[]).includes(name);
  return known ? { url: `/og/${name}.jpg`, width: 1200, height: 630, alt } : ogImage;
}

function routeFor(locale: Locale, path: string) {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalizedPath}/`.replace(/\/{2,}/g, "/");
}

export type PageMeta = { type?: "website" | "article"; publishedTime?: string; modifiedTime?: string };

export function localizedMetadata(locale: Locale, path: string, title: string, description = defaultDescription, meta: PageMeta = {}): Metadata {
  const canonical = routeFor(locale, path);
  const image = ogImageFor(path, `${title} - Random Walk`);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...Object.fromEntries(locales.map((item) => [item, routeFor(item, path)])), "x-default": routeFor(defaultLocale, path) }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Random Walk",
      locale: ogLocales[locale],
      alternateLocale: locales.filter((item) => item !== locale).map((item) => ogLocales[item]),
      images: [image],
      ...(meta.type === "article"
        ? { type: "article", publishedTime: meta.publishedTime, modifiedTime: meta.modifiedTime, authors: ["Random Walk"] }
        : { type: "website" })
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url]
    }
  };
}
