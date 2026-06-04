import { notFound } from "next/navigation";
import { HomePageContent } from "@/components/home-page-content";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { homeCopy } from "@/lib/site-data";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = homeCopy[rawLocale];
  return localizedMetadata(rawLocale, "/", copy.hero.title, copy.hero.description);
}

export default async function LocalizedHomeAliasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  return <HomePageContent locale={rawLocale as Locale} />;
}
