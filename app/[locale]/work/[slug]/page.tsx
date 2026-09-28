import Link from "next/link";
import { CloseSection } from "@/components/site/close-section";
import { PaintingHero } from "@/components/site/painting-hero";
import { isLocale, locales, localizePath } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";
import { getWorkEntry, workEntries } from "@/lib/work-entries";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => workEntries.map((entry) => ({ locale, slug: entry.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const entry = getWorkEntry(locale, slug);
  if (!entry) notFound();
  return localizedMetadata(locale, `/work/${slug}`, entry.title, entry.summary);
}

export default async function WorkEntryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const entry = getWorkEntry(locale, slug);
  if (!entry) notFound();
  const copy = getSiteCopy(locale).work;

  return (
    <main>
      {entry.painting ? (
        <PaintingHero painting={entry.painting} kicker={entry.kicker} title={entry.title} lede={entry.summary} titleId="entry-title" />
      ) : (
        <section className="s-section" aria-labelledby="entry-title">
          <div className="s-wrap">
            <p className="s-kicker">{entry.kicker}</p>
            <h1 className="s-h1" id="entry-title">{entry.title}</h1>
            <p className="s-lede">{entry.summary}</p>
          </div>
        </section>
      )}

      <section className="s-section" aria-label={copy.facts}>
        <div className="s-wrap">
          <dl className="s-facts" style={{ marginTop: 0 }}>
            {entry.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {entry.sections.map((section) => (
        <section className="s-section" key={section.title} aria-label={section.title}>
          <div className="s-wrap s-split">
            <h2 className="s-h2">{section.title}</h2>
            <div className="s-prose">
              {section.body.map((p, i) => <p key={p} style={i === 0 ? { marginTop: 0 } : undefined}>{p}</p>)}
            </div>
          </div>
        </section>
      ))}

      {entry.table ? (
        <section className="s-section" aria-label={entry.table.caption}>
          <div className="s-wrap s-split">
            <h2 className="s-h2">{copy.scores}</h2>
            <div className="s-table-wrap" style={{ marginTop: 0 }}>
              <table className="s-table">
                <caption>{entry.table.caption}</caption>
                <thead>
                  <tr>{entry.table.head.map((h, i) => <th scope="col" key={h} className={i ? "s-r" : undefined}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {entry.table.rows.map((row) => (
                    <tr key={row[0]}>{row.map((cell, i) => <td key={`${row[0]}-${i}`} className={i ? "s-r" : undefined}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <section className="s-section" aria-label={copy.back}>
        <div className="s-wrap">
          <Link className="s-link" href={localizePath(locale, "/work")}>{copy.back}</Link>
        </div>
      </section>
      <CloseSection locale={locale} />
    </main>
  );
}
