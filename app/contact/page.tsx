import ContactPage from "@/app/[locale]/contact/page";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";

export const dynamic = "force-static";

const copy = getSiteCopy(defaultLocale).contact;

export const metadata = localizedMetadata(defaultLocale, "/contact", copy.kicker, copy.lede);

export default async function ContactAliasPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      {await ContactPage({ params: Promise.resolve({ locale: defaultLocale }) })}
    </LocalizedPageShell>
  );
}
