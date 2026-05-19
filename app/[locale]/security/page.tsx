import Link from "next/link";
import { EvidenceMatrix } from "@/components/evidence-matrix";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { getDictionary, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { localizedDeploymentModes, localizedEvidenceArtifacts, securityPageCopy } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = securityPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/security", copy.hero.title, copy.hero.description);
}

export default async function SecurityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const copy = securityPageCopy[locale];
  const deployments = localizedDeploymentModes[locale];
  const evidence = localizedEvidenceArtifacts[locale];

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6">{copy.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rw-button rw-button-primary" href={localizePath(locale, "/contact")}>{copy.primaryCta}</Link>
              <Link className="rw-button rw-button-secondary" href={localizePath(locale, "/services")}>{copy.secondaryCta}</Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage
              assetId="security-boundary-model"
              label="Placeholder: security boundary model"
              description="Organizational, network, runtime, model artifact, and evidence layers."
              priority
            />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.boundary.eyebrow}</p>
          <h2 className="rw-heading mt-4">{copy.boundary.title}</h2>
          <p className="rw-body-large mt-5 max-w-3xl">{copy.boundary.description}</p>
          <div className="mt-10">
            <PlaceholderImage
              assetId="security-access-control-diagram"
              label="Placeholder: access and deployment control diagram"
              description="Controlled paths between local workstation, private server, restricted runtime, and evidence register."
              ratio="16 / 7"
            />
          </div>
          <InstitutionalGrid className="mt-10" columns={3}>
            {deployments.map((mode) => (
              <InstitutionalCell key={mode.label}>
                <h3 className="rw-subheading">{mode.label}</h3>
                <p className="rw-body mt-3">{mode.where}</p>
                <p className="rw-caption mt-4">{mode.evidence}</p>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-marked">
        <div className="rw-container rw-grid">
          <div className="col-span-12 lg:col-span-5">
            <p className="rw-eyebrow">{copy.evidence.eyebrow}</p>
            <h2 className="rw-heading mt-4">{copy.evidence.title}</h2>
            <p className="rw-body-large mt-5">{copy.evidence.description}</p>
            <div className="mt-8">
              <PlaceholderImage
                assetId="security-evidence-dashboard"
                label="Placeholder: reviewable security evidence dashboard"
                description="Boundary state, logs, checks, and review material for security teams."
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <EvidenceMatrix rows={evidence} />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined" id="responsibility">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.responsibility.eyebrow}</p>
          <h2 className="rw-heading mt-4">{copy.responsibility.title}</h2>
          <p className="rw-body-large mt-5 max-w-4xl">{copy.responsibility.description}</p>
          <div className="mt-10">
            <PlaceholderImage
              assetId="security-responsibility-handoff"
              label="Placeholder: security responsibility handoff"
              description="Engineering support and customer review responsibility shown as separate controlled work areas."
              ratio="16 / 7"
            />
          </div>
          <InstitutionalGrid className="mt-10" columns={2}>
            <InstitutionalCell>
              <h3 className="rw-subheading">{copy.contributionTitle}</h3>
              <p className="rw-body mt-4">{copy.contributionBody}</p>
            </InstitutionalCell>
            <InstitutionalCell>
              <h3 className="rw-subheading">{copy.customerTitle}</h3>
              <p className="rw-body mt-4">{copy.customerBody}</p>
            </InstitutionalCell>
          </InstitutionalGrid>
          <p className="rw-caption mt-6">{dictionary.common.legalNotice}</p>
        </div>
      </section>
    </main>
  );
}
