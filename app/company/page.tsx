import CompanyPage from "@/app/[locale]/company/page";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { companyPageCopy } from "@/lib/site-data";

export const dynamic = "force-static";

const copy = companyPageCopy[defaultLocale];

export const metadata = localizedMetadata(defaultLocale, "/company", copy.hero.title, copy.hero.description);

export default async function CompanyAliasPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      {await CompanyPage({ params: Promise.resolve({ locale: defaultLocale }) })}
    </LocalizedPageShell>
  );
}
