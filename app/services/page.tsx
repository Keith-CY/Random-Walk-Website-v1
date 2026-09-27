import ServicesPage from "@/app/[locale]/services/page";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";

export const dynamic = "force-static";

export const metadata = localizedMetadata(defaultLocale, "/services", "Services", getSiteCopy(defaultLocale).services.lede);

export default async function ServicesAliasPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      {await ServicesPage({ params: Promise.resolve({ locale: defaultLocale }) })}
    </LocalizedPageShell>
  );
}
