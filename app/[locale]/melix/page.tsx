import { notFound } from "next/navigation";
import { RedirectPage } from "@/components/redirect-page";
import { isLocale } from "@/lib/i18n";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return {
    title: "Melix | Random Walk",
    description: "Melix has moved into Creations."
  };
}

export default async function MelixPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RedirectPage to={`/${locale}/creations/melix/`} label="Go to Melix" />;
}
