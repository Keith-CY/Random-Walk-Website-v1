import { Examination } from "@/components/home/examination";
import { CloseSection } from "@/components/site/close-section";
import { JsonLd } from "@/components/site/json-ld";
import { getExaminationContent, getExaminationCopy } from "@/lib/examination/content";
import type { Locale } from "@/lib/i18n";
import { company, getPaintings, getSiteCopy } from "@/lib/site-copy";
import { organizationData } from "@/lib/structured-data";

export function HomeContent({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const exam = getExaminationCopy(locale);
  return (
    <main>
      <JsonLd data={organizationData(locale)} />
      <Examination
        locale={locale}
        nav={copy.nav}
        lensHint={copy.home.lensHint}
        email={company.email}
        still={getPaintings(locale).home}
        content={getExaminationContent(locale)}
        marks={exam.marks}
        ui={exam.ui}
      />
      <CloseSection locale={locale} />
    </main>
  );
}
