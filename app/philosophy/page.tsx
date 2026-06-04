import { EnglishFooterDetailRoute } from "@/components/english-footer-detail-route";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { standaloneDetailPages } from "@/lib/footer-detail-pages";

export const dynamic = "force-static";

const copy = standaloneDetailPages[defaultLocale].philosophy;

export const metadata = localizedMetadata(defaultLocale, "/philosophy", copy.title, copy.description);

export default function PhilosophyAliasPage() {
  return <EnglishFooterDetailRoute copy={copy} />;
}
