import { notFound } from "next/navigation";
import { FooterDetailPage } from "@/components/footer-detail-page";
import { getDetailPage, legalDetailPages, legalDetailSlugs } from "@/lib/footer-detail-pages";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => legalDetailSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = getDetailPage(legalDetailPages, rawLocale, slug);
  if (!copy) notFound();
  return localizedMetadata(rawLocale, `/legal/${slug}`, copy.title, copy.description);
}

export default async function LocalizedLegalDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const copy = getDetailPage(legalDetailPages, locale, slug);
  if (!copy) notFound();
  return <FooterDetailPage copy={copy} locale={locale} />;
}
