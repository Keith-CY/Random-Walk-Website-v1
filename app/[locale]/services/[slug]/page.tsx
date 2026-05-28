import { notFound } from "next/navigation";
import { FooterDetailPage } from "@/components/footer-detail-page";
import { getDetailPage, serviceDetailPages, serviceDetailSlugs } from "@/lib/footer-detail-pages";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => serviceDetailSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = getDetailPage(serviceDetailPages, rawLocale, slug);
  if (!copy) notFound();
  return localizedMetadata(rawLocale, `/services/${slug}`, copy.title, copy.description);
}

export default async function LocalizedServiceDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const copy = getDetailPage(serviceDetailPages, locale, slug);
  if (!copy) notFound();
  return <FooterDetailPage copy={copy} locale={locale} />;
}
