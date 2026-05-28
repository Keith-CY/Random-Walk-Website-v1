import { notFound } from "next/navigation";
import { FooterDetailPage } from "@/components/footer-detail-page";
import { creationsIndexPages } from "@/lib/footer-detail-pages";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = creationsIndexPages[rawLocale];
  return localizedMetadata(rawLocale, "/creations", copy.title, copy.description);
}

export default async function CreationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  return <FooterDetailPage copy={creationsIndexPages[locale]} locale={locale} />;
}
