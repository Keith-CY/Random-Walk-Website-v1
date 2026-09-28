import CompanyPage from "@/app/[locale]/company/page";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";

export const dynamic = "force-static";

export const metadata = localizedMetadata(defaultLocale, "/company", getSiteCopy(defaultLocale).company.kicker, getSiteCopy(defaultLocale).company.lede);

export default async function CompanyAliasPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      {await CompanyPage({ params: Promise.resolve({ locale: defaultLocale }) })}
    </LocalizedPageShell>
  );
}
