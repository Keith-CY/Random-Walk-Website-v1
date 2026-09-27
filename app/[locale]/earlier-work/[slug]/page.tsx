import { notFound } from "next/navigation";
import { DetailDocument } from "@/components/site/detail-document";
import { earlierWork } from "@/lib/detail-copy";
import { isLocale, locales } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";
import { earlierWorkSlugs } from "@/lib/work-entries";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => earlierWorkSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const copy = earlierWork[slug];
  if (!copy) notFound();
  return localizedMetadata(locale, `/earlier-work/${slug}`, copy.title, copy.description);
}

export default async function EarlierWorkEntryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const copy = earlierWork[slug];
  if (!copy) notFound();
  const labels = getSiteCopy(locale).earlierWork;
  return <DetailDocument copy={copy} locale={locale} back={{ label: labels.back, href: "/earlier-work" }} />;
}
