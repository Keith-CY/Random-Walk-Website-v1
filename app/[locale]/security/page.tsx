import Link from "next/link";
import { CloseSection } from "@/components/site/close-section";
import { PageIntro } from "@/components/site/page-intro";
import { isLocale, localizePath } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { getSiteCopy } from "@/lib/site-copy";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).security;
  return localizedMetadata(locale, "/security", copy.kicker, copy.lede);
}

export default async function SecurityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).security;

  return (
    <main>
      <PageIntro kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="security-title" />

      <section className="s-section" aria-labelledby="where-title">
        <div className="s-wrap s-split">
          <div>
            <h2 className="s-h2" id="where-title">{copy.whereTitle}</h2>
            <p className="s-lede" style={{ fontSize: 17 }}>{copy.whereBody}</p>
          </div>
          <div className="s-table-wrap" style={{ marginTop: 0 }}>
            <table className="s-table">
              <thead><tr>{copy.whereHead.map((h) => <th scope="col" key={h}>{h}</th>)}</tr></thead>
              <tbody>
                {copy.places.map(([place, suits, receive]) => (
                  <tr key={place}><td>{place}</td><td>{suits}</td><td>{receive}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="s-section" aria-labelledby="evidence-title">
        <div className="s-wrap s-split">
          <div>
            <h2 className="s-h2" id="evidence-title">{copy.evidenceTitle}</h2>
            <p className="s-lede" style={{ fontSize: 17 }}>{copy.evidenceBody}</p>
          </div>
          <div className="s-rows">
            {copy.records.map(([name, body]) => (
              <div key={name}>
                <h3 className="s-h3">{name}</h3>
                <p className="s-row-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s-section" aria-labelledby="ownership-title">
        <div className="s-wrap s-split">
          <h2 className="s-h2" id="ownership-title">{copy.ownershipTitle}</h2>
          <div>
            <div className="s-levels" style={{ marginTop: 0 }}>
              <div className="s-level">
                <p className="s-level-name">{copy.ours}</p>
                <p className="s-row-body" style={{ marginTop: 0 }}>{copy.oursBody}</p>
              </div>
              <div className="s-level">
                <p className="s-level-name">{copy.yours}</p>
                <p className="s-row-body" style={{ marginTop: 0 }}>{copy.yoursBody}</p>
              </div>
            </div>
            <p className="s-caption" style={{ marginTop: 24 }}>
              {copy.more}: <Link className="s-link" href={localizePath(locale, "/legal/responsible-use")}>{copy.responsibleUse}</Link> · <Link className="s-link" href={localizePath(locale, "/legal/security-review")}>{copy.securityReview}</Link>
            </p>
          </div>
        </div>
      </section>

      <CloseSection locale={locale} />
    </main>
  );
}
