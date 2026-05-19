import Link from "next/link";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { VisualTabs } from "@/components/visual-tabs";
import { getDictionary, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { localizedEvidenceArtifacts, melixPageCopy, melixSceneItems } from "@/lib/site-data";
import melixMetadata from "@/content/generated/melix-repo.json";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = melixPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/melix", copy.hero.title, copy.hero.description);
}

export default async function MelixPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const copy = melixPageCopy[locale];
  const scenes = melixSceneItems[locale];
  const evidence = localizedEvidenceArtifacts[locale];
  const repositoryDescription = locale === "en" ? melixMetadata.description : copy.repositoryDescription;

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6">{copy.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rw-button rw-button-primary" href={melixMetadata.githubUrl}> {dictionary.cta.github}</a>
              <Link className="rw-button rw-button-secondary" href={localizePath(locale, "/contact")}>{dictionary.cta.primary}</Link>
            </div>
            <p className="rw-taxonomy-line mt-6">{copy.taxonomy.join(" / ")}</p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage
              assetId="melix-main-ui"
              label="Placeholder: Melix main app UI"
              description="Model registry, training, benchmark, and evidence panels for the local model loop."
              priority
            />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.workflow.eyebrow}</p>
          <h2 className="rw-heading mt-4">{copy.workflow.title}</h2>
          <p className="rw-body-large mt-5 max-w-3xl">{copy.workflow.description}</p>
          <div className="mt-10">
            <VisualTabs items={scenes} showVisual={false} />
          </div>
          <InstitutionalGrid columns={5} className="rw-workflow-chain mt-8">
            {scenes.map((scene, index) => (
              <InstitutionalCell key={scene.title}>
                <p className="rw-artifact-index">0{index + 1}</p>
                <h3 className="mt-4 font-medium text-[var(--rw-text-primary)]">{scene.title}</h3>
                <p className="rw-body mt-3">{copy.sceneState}</p>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage
              assetId="services-deployment-runbook"
              label="Enterprise deployment handoff artifact"
              description="Deployment runbook, environment map, support handoff, and reviewable operating context."
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.enterprise.eyebrow}</p>
            <h2 className="rw-heading mt-4">{copy.enterprise.title}</h2>
            <p className="rw-body-large mt-5">{copy.enterprise.description}</p>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.repositoryEyebrow}</p>
            <div className="rw-provenance-panel mt-6">
            <h2 className="rw-subheading">{melixMetadata.name}</h2>
            <p className="rw-body mt-3">{repositoryDescription}</p>
            <p className="rw-caption mt-4">{copy.repositoryStats.stars}: {melixMetadata.stars} · {copy.repositoryStats.forks}: {melixMetadata.forks} · {copy.repositoryStats.lastUpdated}: {melixMetadata.lastPushedAt}</p>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-marked rw-section-major">
        <div className="rw-container">
          <div className="rw-obsidian-panel rw-ink">
            <p className="rw-eyebrow">{copy.evidence.eyebrow}</p>
            <h2 className="rw-heading mt-4 text-[var(--rw-paper)]">{copy.evidence.title}</h2>
            <InstitutionalGrid columns={3} variant="ink" className="mt-10">
              {evidence.map(([artifact, value]) => (
                <InstitutionalCell key={artifact}>
                  <h3 className="font-medium">{artifact}</h3>
                  <p className="rw-body mt-3">{value}</p>
                </InstitutionalCell>
              ))}
            </InstitutionalGrid>
          </div>
        </div>
      </section>
    </main>
  );
}
