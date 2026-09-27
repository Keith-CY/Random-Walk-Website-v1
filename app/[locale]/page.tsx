import { HomeContent } from "@/components/home/home-content";
import { isLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = getSiteCopy(rawLocale).home;
  return localizedMetadata(rawLocale, "/", copy.title, copy.description);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  return <HomeContent locale={rawLocale} />;
}
