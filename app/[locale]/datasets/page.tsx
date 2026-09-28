import { CloseSection } from "@/components/site/close-section";
import { PaintingHero } from "@/components/site/painting-hero";
import { datasetSteps } from "@/lib/examination/data";
import { isLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getPaintings, getSiteCopy } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).datasets;
  return localizedMetadata(locale, "/datasets", copy.kicker, copy.lede);
}

export default async function DatasetsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).datasets;
  const samples = datasetSteps.slice(0, 8).map((line) => line.split(" · "));

  return (
    <main>
      <PaintingHero painting={getPaintings(locale).datasets} kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="datasets-title" />

      <section className="s-section" aria-labelledby="release-title">
        <div className="s-wrap s-split">
          <div>
            <h2 className="s-h2" id="release-title">{copy.releaseTitle}</h2>
            <p className="s-caption" style={{ marginTop: 12 }}>{copy.release}</p>
          </div>
          <div>
            <dl className="s-facts" style={{ marginTop: 0 }}>
              {copy.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="s-prose">
              <p>{copy.topics}</p>
              <p>{copy.heldOut}</p>
              <p>{copy.audit}</p>
            </div>
            <div className="s-table-wrap">
              <table className="s-table">
                <caption>{copy.byTopicNote}</caption>
                <thead><tr><th scope="col">{copy.byTopicHead[0]}</th><th scope="col" className="s-r">{copy.byTopicHead[1]}</th></tr></thead>
                <tbody>
                  {copy.byTopic.map((row) => (
                    <tr key={row.topic}><td>{row.topic}</td><td className="s-r">{row.action}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="s-caption" style={{ marginTop: 20 }}>{copy.honest}</p>
          </div>
        </div>
      </section>

      <section className="s-section" aria-labelledby="pipeline-title">
        <div className="s-wrap s-split">
          <h2 className="s-h2" id="pipeline-title">{copy.pipelineTitle}</h2>
          <div className="s-prose">
            <p style={{ marginTop: 0 }}>{copy.pipeline}</p>
            <p>{copy.pace}</p>
            <h3 className="s-h3" style={{ marginTop: 44 }}>{copy.stepsTitle}</h3>
            <ul className="s-steplog" aria-label={copy.stepsTitle}>
              {samples.map(([app, act, what]) => (
                <li key={what}>
                  <span className="s-app">{app}</span>
                  <span className="s-act">{act}</span>
                  <span>{what}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="s-section" aria-labelledby="yours-title">
        <div className="s-wrap s-split">
          <h2 className="s-h2" id="yours-title">{copy.yoursTitle}</h2>
          <div className="s-prose"><p style={{ marginTop: 0 }}>{copy.yours}</p></div>
        </div>
      </section>

      <CloseSection locale={locale} />
    </main>
  );
}
