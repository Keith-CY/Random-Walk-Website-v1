import { EnglishFooterDetailRoute } from "@/components/english-footer-detail-route";
import { creationsIndexPages } from "@/lib/footer-detail-pages";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

const copy = creationsIndexPages[defaultLocale];

export const metadata = localizedMetadata(defaultLocale, "/creations", copy.title, copy.description);

export default function CreationsAliasPage() {
  return <EnglishFooterDetailRoute copy={copy} />;
}
