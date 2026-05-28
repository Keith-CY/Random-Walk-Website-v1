import Link from "next/link";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { VisualTabs } from "@/components/visual-tabs";
import { serviceDetailPages, serviceDetailSlugs } from "@/lib/footer-detail-pages";
import { getDictionary, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import {
  localizedDeliveryChain,
  localizedDeploymentModes,
  localizedIndustries,
  localizedServiceModules,
  serviceVisualItems,
  servicesPageCopy
} from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = servicesPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/services", copy.hero.title, copy.hero.description);
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const copy = servicesPageCopy[locale];
  const chain = localizedDeliveryChain[locale];
  const deployments = localizedDeploymentModes[locale];
  const industryItems = localizedIndustries[locale];
  const modules = localizedServiceModules[locale];
  const visualItems = serviceVisualItems[locale];
  const serviceAreas = serviceDetailSlugs.map((slug) => ({ slug, copy: serviceDetailPages[locale][slug] }));

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6">{copy.hero.description}</p>
            <p className="rw-taxonomy-line mt-6">{copy.taxonomy.join(" / ")}</p>
            <Link className="rw-button rw-button-primary mt-8" href={localizePath(locale, "/contact")}>{dictionary.cta.primary}</Link>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage
              assetId="services-hero-private-data"
              label="Placeholder: private data to local model asset"
              description="Private data to local model artifact, with reviewable evidence at each step."
              priority
            />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.modules.eyebrow}</p>
          <h2 className="rw-heading mt-4">{copy.modules.title}</h2>
          <p className="rw-body-large mt-5 max-w-3xl">{copy.modules.description}</p>
          <InstitutionalGrid columns={3} className="mt-10">
            {serviceAreas.map(({ slug, copy: area }) => (
              <InstitutionalCell key={slug}>
                <p className="rw-caption">{area.taxonomy.slice(0, 2).join(" / ")}</p>
                <h3 className="rw-subheading mt-4">{area.title}</h3>
                <p className="rw-body mt-4">{area.description}</p>
                <Link className="rw-text-link mt-5" href={localizePath(locale, `/services/${slug}`)}>{dictionary.common.readMore} -&gt;</Link>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.industries.eyebrow}</p>
          <h2 className="rw-heading mt-4">{copy.industries.title}</h2>
          <div className="mt-10">
            <PlaceholderImage
              assetId="services-industry-patterns"
              label="Placeholder: industry entry pattern vignettes"
              description="Legal, manufacturing, and finance workflow patterns represented as neutral technical artifacts."
              ratio="16 / 7"
            />
          </div>
          <InstitutionalGrid columns={3} className="mt-10">
            {industryItems.map((industry) => (
              <InstitutionalCell key={industry.title}>
                <div className="rw-card-media rw-card-media-line" aria-hidden="true" />
                <h3 className="rw-subheading">{industry.title}</h3>
                <p className="rw-body mt-4">{industry.description}</p>
                <ul className="mt-5 grid gap-2 text-sm">
                  {industry.needs.map((need) => <li key={need}>• {need}</li>)}
                </ul>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.delivery.eyebrow}</p>
          <h2 className="rw-heading mt-4">{copy.delivery.title}</h2>
          <p className="rw-body-large mt-5 max-w-3xl">{copy.delivery.description}</p>
          <InstitutionalGrid columns={7} className="rw-delivery-chain mt-10">
            {chain.map((step, index) => (
              <InstitutionalCell key={step}>
                <p className="rw-artifact-index">{index === chain.length - 1 ? "OPS" : `0${index + 1}`}</p>
                <h3 className="rw-chain-title mt-3 text-base font-medium text-[var(--rw-text-primary)]">{step}</h3>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-marked rw-section-major">
        <div className="rw-container">
          <div className="rw-obsidian-panel rw-ink">
            <p className="rw-eyebrow">{copy.modules.eyebrow}</p>
            <h2 className="rw-heading mt-4 text-[var(--rw-paper)]">{copy.modules.title}</h2>
            <div className="mt-10">
              <VisualTabs items={visualItems} variant="ink" />
            </div>
            <div className="rw-deliverable-groups mt-10">
              {[
                { label: copy.groupLabels[0], items: modules.slice(0, 4) },
                { label: copy.groupLabels[1], items: modules.slice(4) }
              ].map((group, groupIndex) => {
                const grid = (
                  <InstitutionalGrid columns={2} variant="ink" className="mt-4">
                    {group.items.map((service) => (
                      <InstitutionalCell className="rw-deliverable-card" key={service.title}>
                        <h3 className="rw-subheading">{service.title}</h3>
                        <p className="rw-body mt-4">{service.description}</p>
                        <ul className="rw-deliverable-preview">
                          {service.deliverables.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        {service.deliverables.length > 3 ? (
                          <details className="rw-deliverable-details">
                            <summary className="rw-deliverable-summary">{copy.additionalDeliverables}</summary>
                            <ul>
                              {service.deliverables.slice(3).map((item) => <li key={item}>{item}</li>)}
                            </ul>
                          </details>
                        ) : null}
                      </InstitutionalCell>
                    ))}
                  </InstitutionalGrid>
                );

                if (groupIndex === 0) {
                  return (
                    <div key={group.label}>
                      <p className="rw-deliverable-group-label">{group.label}</p>
                      {grid}
                    </div>
                  );
                }

                return (
                  <details className="rw-deliverable-group-details" key={group.label}>
                    <summary className="rw-deliverable-group-summary">{group.label}</summary>
                    {grid}
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <div className="max-w-4xl">
            <p className="rw-eyebrow">{copy.deployment.eyebrow}</p>
            <h2 className="rw-heading mt-4">{copy.deployment.title}</h2>
          </div>
          <div className="mt-10">
            <PlaceholderImage
              assetId="services-deployment-topology"
              label="Placeholder: private AI deployment topology"
              description="Apple Silicon, on-prem GPU, private cloud, customer VPC, and edge device runtime targets."
              ratio="16 / 7"
            />
          </div>
          <InstitutionalGrid columns={3} className="mt-10">
            {deployments.map((mode) => (
              <InstitutionalCell key={mode.label}>
                <h3 className="rw-subheading">{mode.label}</h3>
                <p className="rw-body mt-4">{mode.where}</p>
                <p className="rw-caption mt-5">{copy.evidenceLabel}: {mode.evidence}</p>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>
    </main>
  );
}
