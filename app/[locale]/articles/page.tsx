import { notFound } from "next/navigation";
import { RedirectPage } from "@/components/redirect-page";
import { isLocale } from "@/lib/i18n";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return {
    title: "Notes | Random Walk",
    description: "Articles have moved into Notes."
  };
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RedirectPage to={`/${locale}/notes/`} label="Go to notes" />;
}
