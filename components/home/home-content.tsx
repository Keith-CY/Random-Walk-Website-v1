import { Examination } from "@/components/home/examination";
import { CloseSection } from "@/components/site/close-section";
import type { Locale } from "@/lib/i18n";

export function HomeContent({ locale }: { locale: Locale }) {
  return (
    <main>
      <Examination locale={locale} />
      <CloseSection locale={locale} />
    </main>
  );
}
