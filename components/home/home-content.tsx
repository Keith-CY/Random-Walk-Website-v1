import { Examination } from "@/components/home/examination";
import { CloseSection } from "@/components/site/close-section";
import { JsonLd } from "@/components/site/json-ld";
import { organizationData } from "@/lib/structured-data";
import type { Locale } from "@/lib/i18n";

export function HomeContent({ locale }: { locale: Locale }) {
  return (
    <main>
      <JsonLd data={organizationData()} />
      <Examination locale={locale} />
      <CloseSection locale={locale} />
    </main>
  );
}
