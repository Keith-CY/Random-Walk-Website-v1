import { ContactForm } from "@/components/contact-form";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { contactPageCopy, localizedDeploymentModes } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = contactPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/contact", copy.hero.title, copy.hero.description);
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const copy = contactPageCopy[locale];
  const deploymentLabels = localizedDeploymentModes[locale].map((mode) => mode.label);
  const emailAddress = "biz@random-walk.co.jp";

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6">{copy.hero.description}</p>
            <p className="rw-caption mt-6">{copy.directEmail}: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage
              assetId="contact-scoping-flow"
              label="Placeholder: vault door and confidentiality visual"
              description="Single vault door as a brand-level controlled-access metaphor."
              priority
            />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container rw-grid">
          <div className="col-span-12 lg:col-span-5">
            <p className="rw-eyebrow">{copy.intake.eyebrow}</p>
            <h2 className="rw-heading mt-4">{copy.intake.title}</h2>
            <p className="rw-body-large mt-5">{copy.intake.description}</p>
            <div className="rw-contact-review-band mt-8">
              <PlaceholderImage
                assetId="contact-first-review-tray"
                label="Placeholder: first-contact review tray"
                description="Boundary checklist, deployment target sheet, sensitivity folders, and support preference cards."
                ratio="16 / 10"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ContactForm locale={locale} pageOrigin={`/${locale}/contact`} emailAddress={emailAddress} />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.nextEyebrow}</p>
          <InstitutionalGrid className="mt-8" columns={3}>
            {copy.steps.map((step) => (
              <InstitutionalCell key={step.title}>
                <div className="rw-card-media rw-card-media-line" aria-hidden="true" />
                <h3 className="rw-subheading">{step.title}</h3>
                <p className="rw-body mt-4">{step.description}</p>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
          <p className="rw-taxonomy-line mt-10">{deploymentLabels.join(" / ")}</p>
        </div>
      </section>
    </main>
  );
}
