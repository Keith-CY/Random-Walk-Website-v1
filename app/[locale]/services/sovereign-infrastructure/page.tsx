import { notFound } from "next/navigation";
import { RedirectPage } from "@/components/redirect-page";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function LocalizedSovereignServiceRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RedirectPage to={`/${locale as Locale}/services/`} />;
}
