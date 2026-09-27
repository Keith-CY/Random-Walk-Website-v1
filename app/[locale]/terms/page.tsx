import { LegalDocument } from "@/components/site/legal-document";
import { isLocale } from "@/lib/i18n";
import { legalContent } from "@/lib/legal-content";
import { localizedMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = legalContent.terms[locale];
  return localizedMetadata(locale, "/terms", content.title, content.description);
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalDocument content={legalContent.terms[locale]} locale={locale} />;
}
