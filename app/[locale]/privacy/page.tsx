import { isLocale } from "@/lib/i18n";
import { legalContent } from "@/lib/legal-content";
import { localizedMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = legalContent.privacy[locale];
  return localizedMetadata(locale, "/privacy", content.title, content.description);
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = legalContent.privacy[locale];

  return (
    <main className="rw-section">
      <article className="rw-container max-w-4xl">
        <p className="rw-eyebrow">{content.eyebrow}</p>
        <h1 className="rw-page-title mt-5">{content.title}</h1>
        <p className="rw-body-large mt-6">{content.description}</p>
        <div className="rw-prose rw-legal-panel rw-legal-content mt-10 grid gap-5">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
