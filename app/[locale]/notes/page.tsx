import Link from "next/link";
import { InstitutionalCell, InstitutionalGrid } from "@/components/institutional-grid";
import { PlaceholderImage } from "@/components/placeholder-image";
import { getContentEntries, getString } from "@/lib/content";
import { getDictionary, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { notesPageCopy } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = notesPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/notes", copy.hero.title, copy.hero.description);
}

export default async function NotesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const entries = getContentEntries("notes", locale);
  const copy = notesPageCopy[locale];

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6 max-w-3xl">{copy.hero.description}</p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PlaceholderImage assetId={copy.visuals.hero} priority />
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-tight rw-section-lined">
        <div className="rw-container">
          <InstitutionalGrid columns={5} className="rw-detail-output-strip">
            {copy.readingCues.map((cue) => (
              <InstitutionalCell key={cue.label}>
                <p className="rw-caption">{cue.label}</p>
                <p className="rw-body mt-4">{cue.description}</p>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <p className="rw-eyebrow">{copy.current.eyebrow}</p>
          <h2 className="rw-section-title mt-4">{copy.current.title}</h2>
          <p className="rw-body-large mt-5 max-w-3xl">{copy.current.description}</p>
          <InstitutionalGrid className="mt-10" columns={2}>
            {entries.map((entry) => (
              <InstitutionalCell key={entry.slug}>
                <p className="rw-caption">{getString(entry.frontmatter, "date")} · {getString(entry.frontmatter, "author")}</p>
                <h3 className="rw-subheading mt-3">{getString(entry.frontmatter, "title")}</h3>
                <p className="rw-body mt-4">{getString(entry.frontmatter, "summary")}</p>
                <Link className="rw-button rw-button-secondary mt-5" href={localizePath(locale, `/notes/${entry.slug}`)}>{dictionary.common.readMore}</Link>
              </InstitutionalCell>
            ))}
          </InstitutionalGrid>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container rw-grid">
          <div className="col-span-12 lg:col-span-5">
            <div className="rw-note-topics rw-provenance-panel">
              <p className="rw-eyebrow">{copy.topicsEyebrow}</p>
              <p className="rw-body mt-4">{copy.topicsDescription}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {copy.topics.map((topic) => (
                  <p className="rw-body" key={topic}>{topic}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="rw-eyebrow">{copy.comparison.eyebrow}</p>
            <h2 className="rw-section-title mt-4">{copy.comparison.title}</h2>
            <p className="rw-body-large mt-5 max-w-3xl">{copy.comparison.description}</p>
            <InstitutionalGrid columns={2} className="mt-8">
              <InstitutionalCell>
                <p className="rw-caption">{copy.comparison.notes.label}</p>
                <p className="rw-body mt-4">{copy.comparison.notes.body}</p>
              </InstitutionalCell>
              <InstitutionalCell>
                <p className="rw-caption">{copy.comparison.articles.label}</p>
                <p className="rw-body mt-4">{copy.comparison.articles.body}</p>
              </InstitutionalCell>
            </InstitutionalGrid>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-marked rw-section-tight">
        <div className="rw-container rw-grid items-center">
          <div className="rw-notes-publication-copy col-span-12 lg:col-span-5">
            <p className="rw-eyebrow">{copy.publication.eyebrow}</p>
            <h2 className="rw-section-title mt-4">{copy.publication.title}</h2>
            <p className="rw-body-large mt-5">{copy.publication.description}</p>
            <p className="rw-caption mt-6">{copy.moreNotes}</p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <PlaceholderImage assetId={copy.visuals.publication} />
          </div>
        </div>
      </section>
    </main>
  );
}
