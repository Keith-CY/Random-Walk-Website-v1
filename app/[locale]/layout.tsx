import type { Metadata } from "next";
import { MotionController } from "@/components/motion-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { cjkSerif, fontVariables } from "@/lib/fonts";
import { ogImageFor, ogLocales } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

// Simplified Chinese needs its script named so browsers pick the right glyphs and fonts.
const htmlLang: Record<Locale, string> = { en: "en", zh: "zh-Hans", ja: "ja", ko: "ko" };
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const copy = getSiteCopy(locale);
  const siteDescription = copy.home.description;
  const siteTitle = `Random Walk - ${copy.meta.siteTitle}`;
  const image = ogImageFor(locale, "/", siteTitle);

  return {
    title: {
      default: copy.meta.siteTitle,
      template: "%s - Random Walk"
    },
    description: siteDescription,
    alternates: {
      canonical: `/${locale}/`,
      languages: { ...Object.fromEntries(locales.map((item) => [item, `/${item}/`])), "x-default": "/en/" }
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      type: "website",
      siteName: "Random Walk",
      locale: ogLocales[locale],
      images: [image]
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [image.url]
    }
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <html lang={htmlLang[locale]} className={fontVariables}>
      <head>{cjkSerif[locale] ? <link rel="stylesheet" href={cjkSerif[locale]} /> : null}</head>
      <body>
        <div className="flex min-h-dvh flex-col">
          <MotionController />
          <SiteHeader locale={locale} nav={getSiteCopy(locale).nav} />
          <div className="flex-1">{children}</div>
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
