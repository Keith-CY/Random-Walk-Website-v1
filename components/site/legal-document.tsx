import { OperatorDetails } from "@/components/site/operator-details";
import { PageIntro } from "@/components/site/page-intro";
import type { Locale } from "@/lib/i18n";
import type { LegalPageContent } from "@/lib/legal-content";
import { getSiteCopy } from "@/lib/site-copy";

const anchor = (i: number) => `section-${i + 1}`;

export function LegalDocument({ content, locale }: { content: LegalPageContent; locale: Locale }) {
  const copy = getSiteCopy(locale).document;
  return (
    <main>
      <PageIntro kicker={content.eyebrow} title={content.title} lede={content.description} titleId="doc-title" />
      <section className="s-section" aria-label={content.title}>
        <div className="s-wrap s-split">
          <nav className="s-toc" aria-label={copy.contents}>
            <p className="s-kicker">{copy.contents}</p>
            <ol>
              {content.sections.map((section, i) => (
                <li key={section.heading}><a href={`#${anchor(i)}`}>{section.heading}</a></li>
              ))}
            </ol>
          </nav>
          <div className="s-doc">
            {content.sections.map((section, i) => (
              <section key={section.heading} id={anchor(i)}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <OperatorDetails />
          </div>
        </div>
      </section>
    </main>
  );
}
