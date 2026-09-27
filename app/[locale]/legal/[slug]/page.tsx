import { notFound } from "next/navigation";
import { DetailDocument } from "@/components/site/detail-document";
import { legalDetails } from "@/lib/detail-copy";
import { isLocale, locales } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";
export const dynamicParams = false;

const slugs = Object.keys(legalDetails) as (keyof typeof legalDetails)[];
const find = (slug: string) => (slugs as string[]).includes(slug) ? legalDetails[slug as keyof typeof legalDetails] : null;

export function generateStaticParams() {
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const copy = find(slug);
  if (!copy) notFound();
  return localizedMetadata(locale, `/legal/${slug}`, copy.eyebrow, copy.description);
}

export default async function LegalDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const copy = find(slug);
  if (!copy) notFound();
  return <DetailDocument copy={copy} locale={locale} />;
}
