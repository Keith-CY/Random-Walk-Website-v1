import { CloseSection } from "@/components/site/close-section";
import { PaintingHero } from "@/components/site/painting-hero";
import { isLocale, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getPaintings, getSiteCopy } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).services;
  return localizedMetadata(locale, "/services", copy.kicker, copy.lede);
}

function ServicesContent({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale).services;
  return (
    <main>
      <PaintingHero painting={getPaintings(locale).services} kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="services-title" />

      <section className="s-section" aria-label={copy.levelsLabel}>
        <div className="s-wrap">
          <div className="s-levels">
            {copy.levels.map((level) => (
              <article className="s-level" key={level.name}>
                <p className="s-level-name">{level.name}</p>
                <h2 className="s-h3">{level.title}</h2>
                <div className="s-prose">
                  <p>{level.body}</p>
                  {"lead" in level && level.lead ? <p>{level.lead}</p> : null}
                  <ul>
                    {level.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="s-section" aria-labelledby="process-title">
        <div className="s-wrap s-split">
          <h2 className="s-h2" id="process-title">{copy.processTitle}</h2>
          <ol className="s-steps">
            {copy.process.map((step) => (
              <li key={step.title}>
                <b>{step.title}</b>
                <p className="s-you" style={{ margin: 0 }}>{step.receive}</p>
                {"note" in step && step.note ? <p className="s-caption">{step.note}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="s-section" aria-labelledby="where-title">
        <div className="s-wrap s-split">
          <div>
            <h2 className="s-h2" id="where-title">{copy.whereTitle}</h2>
          </div>
          <div>
            <dl className="s-dl" style={{ marginTop: 0 }}>
              {copy.where.map((w) => (
                <div key={w.place} style={{ display: "contents" }}>
                  <dt>{w.place}</dt>
                  <dd>{w.how}</dd>
                </div>
              ))}
            </dl>
            <h3 className="s-h3" style={{ marginTop: 48 }}>{copy.adviceTitle}</h3>
            <div className="s-prose"><p>{copy.advice}</p></div>
          </div>
        </div>
      </section>

      <CloseSection locale={locale} />
    </main>
  );
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ServicesContent locale={locale} />;
}
