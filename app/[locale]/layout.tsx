import type { Metadata } from "next";
import { MotionController } from "@/components/motion-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { fontVariables } from "@/lib/fonts";
import { ogImage, ogLocales } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const siteDescription = getSiteCopy(locale).home.description;

  return {
    title: {
      default: "An AI lab for growing companies",
      template: "%s - Random Walk"
    },
    description: siteDescription,
    alternates: {
      canonical: `/${locale}/`,
      languages: { ...Object.fromEntries(locales.map((item) => [item, `/${item}/`])), "x-default": "/en/" }
    },
    openGraph: {
      title: "Random Walk - An AI lab for growing companies",
      description: siteDescription,
      type: "website",
      siteName: "Random Walk",
      locale: ogLocales[locale],
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: "Random Walk - An AI lab for growing companies",
      description: siteDescription,
      images: [ogImage.url]
    }
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <div className="flex min-h-dvh flex-col">
          <MotionController />
          <SiteHeader locale={locale} />
          <div className="flex-1">{children}</div>
          <SiteFooter locale={locale} />
        </div>
      </body>
    </html>
  );
}
