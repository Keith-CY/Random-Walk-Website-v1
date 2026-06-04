import { notFound } from "next/navigation";
import { FooterDetailPage } from "@/components/footer-detail-page";
import { creationDetailPages } from "@/lib/footer-detail-pages";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = creationDetailPages[rawLocale].melix;
  return localizedMetadata(rawLocale, "/creations/melix", copy.title, copy.description);
}

export default async function MelixPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  return <FooterDetailPage copy={creationDetailPages[locale].melix} locale={locale} />;
}
