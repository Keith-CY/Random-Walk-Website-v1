import { company } from "@/lib/site-copy";

// The full registered address lives on the legal pages only; the rest of the site shows the block.
export function OperatorDetails() {
  return (
    <section aria-labelledby="operator-title">
      <h2 id="operator-title">Operator</h2>
      <dl className="s-dl">
        <dt>Company</dt><dd>{company.name} ({company.nameLatin})</dd>
        <dt>Corporate number</dt><dd className="s-num">{company.corporateNumber}</dd>
        <dt>Registered address</dt><dd>{company.addressFull}<br />{company.addressFullLatin}</dd>
        <dt>Contact</dt><dd>{company.email}</dd>
      </dl>
    </section>
  );
}
