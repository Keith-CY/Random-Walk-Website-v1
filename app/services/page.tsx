import ServicesPage from "@/app/[locale]/services/page";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { servicesPageCopy } from "@/lib/site-data";

export const dynamic = "force-static";

const copy = servicesPageCopy[defaultLocale];

export const metadata = localizedMetadata(defaultLocale, "/services", copy.hero.title, copy.hero.description);

export default async function ServicesAliasPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      {await ServicesPage({ params: Promise.resolve({ locale: defaultLocale }) })}
    </LocalizedPageShell>
  );
}
