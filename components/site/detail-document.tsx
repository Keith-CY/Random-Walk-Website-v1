import Link from "next/link";
import { CloseSection } from "@/components/site/close-section";
import { Exhibit } from "@/components/site/exhibit";
import { PageIntro } from "@/components/site/page-intro";
import type { DocumentCopy } from "@/lib/detail-copy";
import type { DetailLink } from "@/lib/footer-detail-pages";
import { localizePath, type Locale } from "@/lib/i18n";
import { modernHref } from "@/lib/modern-href";
import { getSiteCopy } from "@/lib/site-copy";

function Action({ link, locale, primary }: { link: DetailLink; locale: Locale; primary?: boolean }) {
  const external = /^https?:\/\//.test(link.href);
  const className = primary ? "s-btn" : "s-link";
  if (external) return <a className={className} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>;
  return <Link className={className} href={localizePath(locale, modernHref(link.href))}>{link.label}</Link>;
}

// Long-form detail pages (earlier work, responsible use, security review) in the site's document voice.
// Earlier work passes its own kicker and a way back instead of the commission prompt.
export function DetailDocument({ copy, locale, kicker, back }: { copy: DocumentCopy; locale: Locale; kicker?: string; back?: DetailLink }) {
  const labels = getSiteCopy(locale).document;
  const primary = copy.officialLink ?? copy.primaryLink;
  const secondary = copy.officialLink ? (copy.primaryLink ?? copy.secondaryLink) : copy.secondaryLink;

  return (
    <main>
      <PageIntro kicker={kicker ?? copy.eyebrow} title={copy.title} lede={copy.description} titleId="detail-title">
        {copy.statusTag ? <p className="s-caption" style={{ marginTop: 14 }}>{copy.statusTag}</p> : null}
        {primary || secondary ? (
          <div className="s-actions">
            {primary ? <Action link={primary} locale={locale} primary /> : null}
            {secondary ? <Action link={secondary} locale={locale} /> : null}
          </div>
        ) : null}
      </PageIntro>

      {copy.exhibit ? (
        <section className="s-section s-section-tight" aria-label={copy.exhibit.alt}>
          <div className="s-wrap"><Exhibit image={copy.exhibit} priority /></div>
        </section>
      ) : null}

      {copy.technicalSchema?.length || copy.outputsAtGlance?.length ? (
        <section className="s-section" aria-labelledby="glance-title">
          <div className="s-wrap s-split">
            <h2 className="s-h2" id="glance-title">{labels.atGlance}</h2>
            <div>
              {copy.technicalSchema?.length ? (
                <dl className="s-dl" style={{ marginTop: 0 }}>
                  {copy.technicalSchema.map((row) => (
                    <div key={row.label} style={{ display: "contents" }}>
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              {copy.outputsAtGlance?.length ? (
                <div className="s-rows" style={{ marginTop: copy.technicalSchema?.length ? 32 : 0 }}>
                  {copy.outputsAtGlance.map((item) => (
                    <div key={item.label}>
                      <h3 className="s-h3">{item.label}</h3>
                      <p className="s-row-body">{item.description}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="s-section" aria-label={copy.title}>
        <div className="s-wrap s-doc-rows">
          {copy.sections.map((section) => (
            <article className="s-doc-row" key={section.title}>
              <div>
                {section.eyebrow ? <p className="s-kicker">{section.eyebrow}</p> : null}
                <h2 className="s-h3">{section.title}</h2>
              </div>
              <div className="s-prose">
                <p style={{ marginTop: 0 }}>{section.description}</p>
                {section.points.length ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}
              </div>
            </article>
          ))}
          {copy.notice ? <p className="s-caption">{copy.notice}</p> : null}
        </div>
      </section>

      {copy.closing ? (
        <section className="s-section" aria-labelledby="closing-title">
          <div className="s-wrap s-split">
            <div>
              <h2 className="s-h2" id="closing-title">{copy.closing.title}</h2>
              <p className="s-lede" style={{ fontSize: 17 }}>{copy.closing.description}</p>
            </div>
            <div className="s-levels" style={{ marginTop: 0 }}>
              <div className="s-level">
                <p className="s-level-name">{labels.fit}</p>
                <ul className="s-plain">{copy.closing.fit.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="s-level">
                <p className="s-level-name">{labels.notFit}</p>
                <ul className="s-plain">{copy.closing.notFit.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {back ? (
        <section className="s-section" aria-label={back.label}>
          <div className="s-wrap"><Link className="s-link" href={localizePath(locale, back.href)}>{back.label}</Link></div>
        </section>
      ) : (
        <CloseSection locale={locale} />
      )}
    </main>
  );
}
