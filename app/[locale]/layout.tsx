import type { Metadata } from "next";
import { MotionController } from "@/components/motion-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { ogImage } from "@/lib/metadata";
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
  const dictionary = getDictionary(locale);

  return {
    title: {
      default: "Controlled infrastructure for private AI systems",
      template: "%s - Random Walk"
    },
    description: "Random Walk builds private AI infrastructure, model workflows, private deployment, evaluation evidence, and FDE support for controlled environments.",
    alternates: {
      canonical: `/${locale}/`,
      languages: Object.fromEntries(locales.map((item) => [item, `/${item}/`]))
    },
    openGraph: {
      title: "Random Walk - Private AI Infrastructure",
      description: "Controlled infrastructure for private AI systems.",
      type: "website",
      locale,
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: "Random Walk - Private AI Infrastructure",
      description: dictionary.common.brandDescriptor,
      images: [ogImage.url]
    }
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <html lang={locale}>
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
