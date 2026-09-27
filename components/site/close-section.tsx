import Link from "next/link";
import { localizePath, type Locale } from "@/lib/i18n";
import { company, getSiteCopy } from "@/lib/site-copy";

export function CloseSection({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale).close;
  return (
    <section className="s-close" aria-labelledby="close-title">
      <div className="s-wrap">
        <h2 className="s-h2" id="close-title">{copy.title}</h2>
        <p className="s-lede">{copy.body}</p>
        <div className="s-actions">
          <Link className="s-btn" href={localizePath(locale, "/contact")}>{copy.cta}</Link>
          <span className="s-mail">{company.email}</span>
        </div>
      </div>
    </section>
  );
}
