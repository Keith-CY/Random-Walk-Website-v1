import type { Locale } from "@/lib/i18n";
import { company, getSiteCopy } from "@/lib/site-copy";

// The full registered address lives on the legal pages only; the rest of the site shows the block.
export function OperatorDetails({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale).operator;
  return (
    <section aria-labelledby="operator-title">
      <h2 id="operator-title">{copy.title}</h2>
      <dl className="s-dl">
        <dt>{copy.company}</dt><dd>{company.name} ({company.nameLatin})</dd>
        <dt>{copy.number}</dt><dd className="s-num">{company.corporateNumber}</dd>
        <dt>{copy.address}</dt><dd>{company.addressFull}<br />{company.addressFullLatin}</dd>
        <dt>{copy.contact}</dt><dd>{company.email}</dd>
      </dl>
    </section>
  );
}
