import Image from "next/image";
import Link from "next/link";
import { CloseSection } from "@/components/site/close-section";
import { PageIntro } from "@/components/site/page-intro";
import { getContentEntries, getString } from "@/lib/content";
import { isLocale, localizePath } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getNotePainting, getSiteCopy } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).notes;
  return localizedMetadata(locale, "/notes", copy.kicker, copy.lede);
}

export default async function NotesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).notes;
  const entries = getContentEntries("notes", locale).sort((a, b) => getString(b.frontmatter, "date").localeCompare(getString(a.frontmatter, "date")));

  return (
    <main>
      <PageIntro kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="notes-title" />
      <section className="s-section" aria-label={copy.kicker}>
        <div className="s-wrap">
          <div className="s-cards s-cards-2">
            {entries.map((entry) => {
              const art = getNotePainting(locale, entry.slug);
              const date = getString(entry.frontmatter, "date");
              return (
                <Link className="s-card" key={entry.slug} href={localizePath(locale, `/notes/${entry.slug}`)}>
                  <div className="s-card-art">
                    <Image src={art.src} alt={art.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                  </div>
                  <time className="s-caption s-num" dateTime={date}>{date}</time>
                  <h2 className="s-h3">{getString(entry.frontmatter, "title")}</h2>
                  <p style={{ margin: 0, lineHeight: 1.6 }}>{getString(entry.frontmatter, "summary")}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <CloseSection locale={locale} />
    </main>
  );
}
