import { HomePageContent } from "@/components/home-page-content";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { homeCopy } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const copy = homeCopy[locale];
  return localizedMetadata(locale, "/", copy.hero.title, copy.hero.description);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  return <HomePageContent locale={rawLocale} />;
}
