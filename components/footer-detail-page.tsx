import Link from "next/link";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { localizePath, type Locale } from "@/lib/i18n";
import type { DetailPageCopy, DetailSection } from "@/lib/footer-detail-pages";

type DetailSectionGroup =
  | { kind: "text"; sections: DetailSection[] }
  | { kind: "media"; section: DetailSection; mediaIndex: number };

export function FooterDetailPage({ copy, locale }: { copy: DetailPageCopy; locale: Locale }) {
  const columns = copy.sections.length % 2 === 0 ? 2 : 3;
  const hasExpandedLayout = Boolean(copy.outputsAtGlance?.length || copy.closing || copy.sections.some((section) => section.eyebrow || section.assetId));
  const primaryAction = copy.officialLink ?? copy.primaryLink;
  const secondaryAction = copy.officialLink ? (copy.primaryLink ?? copy.secondaryLink) : copy.secondaryLink;
  let mediaIndex = 0;
  const expandedGroups = copy.sections.reduce<DetailSectionGroup[]>((groups, section) => {
    if (section.assetId) {
      groups.push({ kind: "media", section, mediaIndex });
      mediaIndex += 1;
      return groups;
    }

    const previous = groups.at(-1);
    if (previous?.kind === "text") {
      previous.sections.push(section);
    } else {
      groups.push({ kind: "text", sections: [section] });
    }
    return groups;
  }, []);

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.eyebrow}</p>
            {copy.statusTag ? <p className="rw-status-tag mt-4">{copy.statusTag}</p> : null}
            <h1 className="rw-page-title mt-5">{copy.title}</h1>
            <p className="rw-body-large mt-6">{copy.description}</p>
            <p className="rw-taxonomy-line mt-6">{copy.taxonomy.join(" / ")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryAction ? (
                copy.officialLink ? (
                  <a className="rw-button rw-button-primary" href={primaryAction.href} target="_blank" rel="noopener noreferrer">
                    {primaryAction.label}
                  </a>
                ) : (
                  <Link className="rw-button rw-button-primary" href={localizePath(locale, primaryAction.href)}>
                    {primaryAction.label}
                  </Link>
                )
              ) : null}
              {secondaryAction ? (
                <Link className="rw-button rw-button-secondary" href={localizePath(locale, secondaryAction.href)}>
                  {secondaryAction.label}
                </Link>
              ) : null}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage assetId={copy.assetId} ratio="16 / 10" priority />
          </div>
        </div>
      </section>

      {copy.outputsAtGlance?.length ? (
        <section className="rw-section rw-section-tight rw-section-lined">
          <div className="rw-container">
            <InstitutionalGrid columns={5} className="rw-detail-output-strip">
              {copy.outputsAtGlance.map((item, index) => (
                <InstitutionalCell key={item.label}>
                  <p className="rw-artifact-index">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="rw-subheading mt-5">{item.label}</h2>
                  <p className="rw-body mt-3">{item.description}</p>
                </InstitutionalCell>
              ))}
            </InstitutionalGrid>
          </div>
        </section>
      ) : null}

      {copy.technicalSchema?.length ? (
        <section className="rw-section rw-section-tight rw-section-lined">
          <div className="rw-container">
            <div className="rw-technical-schema">
              <p className="rw-eyebrow">System boundary</p>
              <div className="rw-technical-schema-grid">
                {copy.technicalSchema.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {hasExpandedLayout ? (
        <section className="rw-section rw-section-lined">
          <div className="rw-container">
            <div className="rw-detail-section-stack">
              {expandedGroups.map((group, groupIndex) => {
                if (group.kind === "media") {
                  return (
                    <article className={`rw-detail-media-row ${group.mediaIndex % 2 === 1 ? "rw-detail-media-row-reverse" : ""}`} key={group.section.title}>
                      <div className="rw-detail-media-copy">
                        {group.section.eyebrow ? <p className="rw-eyebrow">{group.section.eyebrow}</p> : null}
                        <h2 className="rw-heading mt-4">{group.section.title}</h2>
                        <p className="rw-body-large mt-5">{group.section.description}</p>
                        <ul className="rw-detail-point-list mt-7">
                          {group.section.points.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                      </div>
                      <PlaceholderImage assetId={group.section.assetId} ratio="16 / 10" variant="paper" />
                    </article>
                  );
                }

                return (
                  <InstitutionalGrid
                    columns={group.sections.length > 2 ? 3 : 2}
                    className={`rw-detail-text-grid ${group.sections.length === 1 ? "rw-detail-text-grid-single" : ""}`}
                    key={`text-${groupIndex}`}
                  >
                    {group.sections.map((section) => (
                      <InstitutionalCell key={section.title}>
                        {section.eyebrow ? <p className="rw-eyebrow">{section.eyebrow}</p> : null}
                        <h2 className="rw-subheading mt-4">{section.title}</h2>
                        <p className="rw-body mt-4">{section.description}</p>
                        <ul className="rw-deliverable-preview">
                          {section.points.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                      </InstitutionalCell>
                    ))}
                  </InstitutionalGrid>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="rw-section rw-section-lined">
          <div className="rw-container">
            <InstitutionalGrid columns={columns} className="mt-2">
              {copy.sections.map((section) => (
                <InstitutionalCell key={section.title}>
                  <h2 className="rw-subheading">{section.title}</h2>
                  <p className="rw-body mt-4">{section.description}</p>
                  <ul className="rw-deliverable-preview">
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </InstitutionalCell>
              ))}
            </InstitutionalGrid>
          </div>
        </section>
      )}

      {copy.closing ? (
        <section className="rw-section rw-section-marked rw-section-tight">
          <div className="rw-container">
            <div className="rw-obsidian-panel rw-ink rw-detail-closing">
              <div>
                <p className="rw-eyebrow">Boundary check</p>
                <h2 className="rw-heading mt-4">{copy.closing.title}</h2>
                <p className="rw-body-large mt-5">{copy.closing.description}</p>
                {copy.primaryLink ? (
                  <div className="mt-8">
                    <Link className="rw-button rw-button-secondary" href={localizePath(locale, copy.primaryLink.href)}>
                      {copy.closing.ctaTitle}
                    </Link>
                  </div>
                ) : null}
                <p className="rw-caption mt-5">{copy.closing.ctaDescription}</p>
              </div>
              <div className="rw-detail-fit-grid">
                <div>
                  <p className="rw-deliverable-group-label">System signals</p>
                  <ul className="rw-detail-fit-list mt-5">
                    {copy.closing.fit.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="rw-deliverable-group-label">Boundary limits</p>
                  <ul className="rw-detail-fit-list mt-5">
                    {copy.closing.notFit.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {!copy.closing ? (
        <section className="rw-section rw-section-marked rw-section-tight">
          <div className="rw-container">
            <div className="rw-legal-panel p-6">
              <p className="rw-body">{copy.notice}</p>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
