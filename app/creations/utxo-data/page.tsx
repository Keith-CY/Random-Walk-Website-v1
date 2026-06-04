import { EnglishFooterDetailRoute } from "@/components/english-footer-detail-route";
import { creationDetailPages } from "@/lib/footer-detail-pages";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

const copy = creationDetailPages[defaultLocale]["utxo-data"];

export const metadata = localizedMetadata(defaultLocale, "/creations/utxo-data", copy.title, copy.description);

export default function UtxoAliasPage() {
  return <EnglishFooterDetailRoute copy={copy} />;
}
