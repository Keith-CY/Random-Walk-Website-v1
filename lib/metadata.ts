import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

const defaultDescription = "Random Walk builds private and local AI infrastructure for organizations that need model workflows inside customer-controlled environments.";
export const ogImage = {
  url: "/brand/og-default.png",
  width: 1200,
  height: 630,
  alt: "Random Walk - Private AI systems under control."
};

function routeFor(locale: Locale, path: string) {
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalizedPath}/`.replace(/\/{2,}/g, "/");
}

export function localizedMetadata(locale: Locale, path: string, title: string, description = defaultDescription): Metadata {
  const canonical = routeFor(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(locales.map((item) => [item, routeFor(item, path)]))
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      locale,
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url]
    }
  };
}
