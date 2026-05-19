import type { Metadata } from "next";
import { MotionController } from "@/components/motion-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
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
    title: "Private AI infrastructure for customer-controlled environments",
    description: "Random Walk builds private and local AI infrastructure for organizations that need model workflows inside customer-controlled environments.",
    alternates: {
      canonical: `/${locale}/`,
      languages: Object.fromEntries(locales.map((item) => [item, `/${item}/`]))
    },
    openGraph: {
      title: "Random Walk - Private AI Infrastructure",
      description: "Private and local AI infrastructure for customer-controlled environments.",
      type: "website",
      locale
    },
    twitter: {
      card: "summary_large_image",
      title: "Random Walk - Private AI Infrastructure",
      description: dictionary.common.brandDescriptor
    }
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <div lang={locale} className="flex min-h-dvh flex-col">
      <MotionController />
      <SiteHeader locale={locale} />
      <div className="flex-1">{children}</div>
      <SiteFooter locale={locale} />
    </div>
  );
}
