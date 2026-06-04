import { EnglishFooterDetailRoute } from "@/components/english-footer-detail-route";
import { serviceDetailPages } from "@/lib/footer-detail-pages";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

const copy = serviceDetailPages[defaultLocale]["privacy-data"];

export const metadata = localizedMetadata(defaultLocale, "/services/privacy-data", copy.title, copy.description);

export default function PrivacyDataAliasPage() {
  return <EnglishFooterDetailRoute copy={copy} />;
}
