import { FooterDetailPage } from "@/components/footer-detail-page";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import type { DetailPageCopy } from "@/lib/footer-detail-pages";
import { defaultLocale } from "@/lib/i18n";

export function EnglishFooterDetailRoute({ copy }: { copy: DetailPageCopy }) {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      <FooterDetailPage copy={copy} locale={defaultLocale} />
    </LocalizedPageShell>
  );
}
