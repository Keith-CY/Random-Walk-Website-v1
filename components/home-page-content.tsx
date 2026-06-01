import Link from "next/link";
import { EvidenceMatrix } from "@/components/evidence-matrix";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";
import { VisualTabs } from "@/components/visual-tabs";
import { WorkflowStepper } from "@/components/workflow-stepper";
import { getContentEntries, getString, getStringArray } from "@/lib/content";
import { creationDetailPages, creationDetailSlugs, creationsIndexPages } from "@/lib/footer-detail-pages";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
import {
  homeConstraintItems,
  homeCopy,
  homeWorkflowVisualItems,
  localizedDeliveryChain,
  localizedEvidenceArtifacts,
  localizedServiceModules,
  localizedTechnicalHeritage,
  notesPageCopy,
  workPageCopy
} from "@/lib/site-data";

const homeServiceAssetIds = [
  "services-dataset-package",
  "services-lora-adapter",
  "services-fused-model",
  "services-evaluation-report",
  "services-deployment-runbook",
  "services-support"
] as const;

export function HomePageContent({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = homeCopy[locale];
  const chain = localizedDeliveryChain[locale];
  const services = localizedServiceModules[locale];
  const evidence = localizedEvidenceArtifacts[locale];
  const heritage = localizedTechnicalHeritage[locale];
  const constraints = homeConstraintItems[locale];
  const workflowVisualItems = homeWorkflowVisualItems[locale];
  const deliverablesLabel = workPageCopy[locale].deliverablesLabel;
  const featuredCreations = creationDetailSlugs.slice(0, 3).map((slug) => ({ slug, copy: creationDetailPages[locale][slug] }));
  const featuredWork = getContentEntries("work", locale).slice(0, 3);
  const latestNotes = getContentEntries("notes", locale).slice(0, 2);

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-display mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6 max-w-2xl">{copy.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rw-button rw-button-primary" href={localizePath(locale, "/contact")}>{dictionary.cta.primary}</Link>
              <Link className="rw-button rw-button-secondary" href={localizePath(locale, "/creations")}>{dictionary.nav.creations}</Link>
            </div>
            <p className="rw-caption mt-6">{dictionary.common.proofLine}</p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage
              assetId="home-hero-local-ai-boundary"
              label="Placeholder: classical figure and judgement visual"
              description="Single classical figure with a sphere as a brand-level research and judgement metaphor."
              variant="paper"
              priority
            />
          </div>
          <div className="col-span-12">
            <div className="rw-visual-strip mt-12">
              <PlaceholderImage assetId="home-evidence-archive-scene" ratio="16 / 9" />
              <PlaceholderImage assetId="services-deployment-topology" ratio="16 / 9" />
              <PlaceholderImage assetId="home-first-review-reference" ratio="16 / 9" variant="paper" />
            </div>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container rw-grid">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeading copy={copy.constraint} />
            <div className="mt-8">
              <PlaceholderImage assetId="home-constraint-matrix-board" ratio="16 / 10" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <InstitutionalGrid columns={2}>
              {constraints.map((item) => (
                <InstitutionalCell key={item.title}>
                  <h3 className="rw-subheading">{item.title}</h3>
                  <p className="rw-body mt-3">{item.description}</p>
                </InstitutionalCell>
              ))}
            </InstitutionalGrid>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <div className="max-w-4xl">
            <SectionHeading copy={copy.workflow} />
          </div>
          <div className="mt-10">
            <VisualTabs items={workflowVisualItems} />
          </div>
          <WorkflowStepper className="mt-10" steps={chain} />
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <div className="rw-section-header-row">
            <SectionHeading copy={creationsIndexPages[locale]} />
            <Link className="rw-text-link" href={localizePath(locale, "/creations")}>{dictionary.common.readMore} -&gt;</Link>
          </div>
          <InstitutionalGrid columns={3} className="mt-10">
            {featuredCreations.map(({ slug, copy: creation }) => (
              <InstitutionalCell key={slug}>
                {creation.statusTag ? <p className="rw-status-tag">{creation.statusTag}</p> : null}
                <h3 className="rw-subheading mt-4">{creation.title}</h3>
                <p className="rw-body mt-4">{creation.description}</p>
                <p className="rw-caption mt-5">{creation.taxonomy.slice(0, 3).join(" / ")}</p>
                <Link className="rw-text-link mt-5" href={localizePath(locale, `/creations/${slug}`)}>{dictionary.common.readMore} -&gt;</Link>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <div className="rw-section-header-row">
            <SectionHeading copy={workPageCopy[locale].hero} />
            <Link className="rw-text-link" href={localizePath(locale, "/work")}>{dictionary.common.readMore} -&gt;</Link>
          </div>
          <InstitutionalGrid columns={3} className="mt-10">
            {featuredWork.map((entry) => (
              <InstitutionalCell key={entry.slug}>
                <p className="rw-caption">{getString(entry.frontmatter, "industry")}</p>
                <h3 className="rw-subheading mt-4">{getString(entry.frontmatter, "title")}</h3>
                <p className="rw-body mt-4">{getString(entry.frontmatter, "summary")}</p>
                <div className="rw-card-meta-grid mt-5">
                  <span>{getStringArray(entry.frontmatter, "deployment_modes").slice(0, 1).join(" / ")}</span>
                  <span>{getStringArray(entry.frontmatter, "deliverables").slice(0, 1).join(" / ")}</span>
                </div>
                <Link className="rw-text-link mt-5" href={localizePath(locale, `/work/${entry.slug}`)}>{dictionary.common.readMore} -&gt;</Link>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-marked rw-section-major">
        <div className="rw-container">
          <div className="rw-obsidian-panel rw-ink rw-grid items-center">
            <div className="col-span-12 lg:col-span-5">
              <SectionHeading copy={copy.melix} inverse />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="rw-button rw-button-inverse" href={localizePath(locale, "/creations/melix")}>{dictionary.cta.secondaryMelix}</Link>
                <Link className="rw-button rw-button-secondary border-[rgba(255,255,255,0.24)] text-[var(--rw-paper)]" href={localizePath(locale, "/contact")}>{dictionary.cta.primary}</Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <PlaceholderImage
                assetId="home-melix-product-panel"
                label="Placeholder: Melix local model studio panel"
                description="Model registry, local server, LoRA training, benchmark matrix, and evidence export."
                variant="ink"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <SectionHeading copy={copy.services} />
          <InstitutionalGrid columns={3} className="mt-10">
            {services.map((service, index) => (
              <InstitutionalCell key={service.title}>
                <div className="rw-card-media">
                  <PlaceholderImage assetId={homeServiceAssetIds[index % homeServiceAssetIds.length]} ratio="16 / 8" variant="paper" />
                </div>
                <h3 className="rw-subheading">{service.title}</h3>
                <p className="rw-body mt-4">{service.description}</p>
                <p className="rw-caption mt-5">{deliverablesLabel}: {service.deliverables.slice(0, 3).join(" · ")}</p>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container rw-grid">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeading copy={copy.security} />
            <div className="mt-8">
              <PlaceholderImage assetId="security-access-control-diagram" ratio="16 / 10" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <EvidenceMatrix rows={evidence} />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <SectionHeading copy={copy.heritage} />
          <div className="mt-10">
            <PlaceholderImage assetId="home-technical-heritage-plate" ratio="16 / 7" variant="paper" />
          </div>
          <p className="rw-taxonomy-line mt-8">{heritage.join(" / ")}</p>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <div className="rw-section-header-row">
            <SectionHeading copy={notesPageCopy[locale].hero} />
            <Link className="rw-text-link" href={localizePath(locale, "/notes")}>{dictionary.common.readMore} -&gt;</Link>
          </div>
          <InstitutionalGrid columns={2} className="mt-10">
            {latestNotes.map((entry) => (
              <InstitutionalCell key={entry.slug}>
                <p className="rw-caption">{getString(entry.frontmatter, "topic")}</p>
                <h3 className="rw-subheading mt-4">{getString(entry.frontmatter, "title")}</h3>
                <p className="rw-body mt-4">{getString(entry.frontmatter, "summary")}</p>
                <Link className="rw-text-link mt-5" href={localizePath(locale, `/notes/${entry.slug}`)}>{dictionary.common.readMore} -&gt;</Link>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>


      <section className="rw-section rw-section-marked rw-section-major">
        <div className="rw-container">
          <div className="rw-obsidian-panel rw-ink rw-cta-watermark mx-auto max-w-4xl text-center">
            <p className="rw-eyebrow">{copy.final.eyebrow}</p>
            <h2 className="rw-heading mt-4 text-[var(--rw-paper)]">{copy.final.title}</h2>
            <p className="rw-body-large mt-5">{copy.final.description}</p>
            <Link className="rw-button rw-button-inverse mt-8" href={localizePath(locale, "/contact")}>{dictionary.cta.primary}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
