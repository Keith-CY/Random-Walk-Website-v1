import { EnglishFooterDetailRoute } from "@/components/english-footer-detail-route";
import { creationDetailPages } from "@/lib/footer-detail-pages";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

const copy = creationDetailPages[defaultLocale]["fiber-link"];

export const metadata = localizedMetadata(defaultLocale, "/creations/fiber-link", copy.title, copy.description);

export default function FiberLinkAliasPage() {
  return <EnglishFooterDetailRoute copy={copy} />;
}
