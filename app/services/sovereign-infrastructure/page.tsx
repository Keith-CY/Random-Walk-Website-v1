import { EnglishFooterDetailRoute } from "@/components/english-footer-detail-route";
import { serviceDetailPages } from "@/lib/footer-detail-pages";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

const copy = serviceDetailPages[defaultLocale]["sovereign-infrastructure"];

export const metadata = localizedMetadata(defaultLocale, "/services/sovereign-infrastructure", copy.title, copy.description);

export default function SovereignInfrastructureAliasPage() {
  return <EnglishFooterDetailRoute copy={copy} />;
}
