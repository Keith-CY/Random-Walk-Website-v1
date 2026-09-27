import { CloseSection } from "@/components/site/close-section";
import { PaintingHero } from "@/components/site/painting-hero";
import { isLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { company, getSiteCopy, paintings } from "@/lib/site-copy";
import { eventPresenceItems } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return localizedMetadata(locale, "/company", "Company", getSiteCopy(locale).company.lede);
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getSiteCopy(locale).company;
  const events = eventPresenceItems.en;

  return (
    <main>
      <PaintingHero painting={paintings.company} kicker={copy.kicker} title={copy.title} lede={copy.lede} titleId="company-title" />

      <section className="s-section" aria-labelledby="token-plant-title">
        <div className="s-wrap s-split">
          <h2 className="s-h2" id="token-plant-title">{copy.tokenPlantTitle}</h2>
          <div className="s-prose"><p style={{ marginTop: 0 }}>{copy.tokenPlant}</p></div>
        </div>
      </section>

      <section className="s-section" id="events" aria-labelledby="events-title">
        <div className="s-wrap s-split">
          <h2 className="s-h2" id="events-title">{copy.eventsTitle}</h2>
          <div className="s-table-wrap" style={{ marginTop: 0 }}>
            <table className="s-table">
              <thead><tr><th scope="col">Event</th><th scope="col">Where</th><th scope="col">When</th></tr></thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.slug}>
                    <td>{event.href ? <a className="s-link" href={event.href} rel="noopener noreferrer" target="_blank">{event.title}</a> : event.title}<br /><span className="s-caption">{event.role}</span></td>
                    <td>{event.location}</td>
                    <td>{event.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="s-section" aria-labelledby="registered-title">
        <div className="s-wrap s-split">
          <h2 className="s-h2" id="registered-title">{copy.registeredTitle}</h2>
          <div>
            <dl className="s-dl" style={{ marginTop: 0 }}>
              <dt>Registered name</dt><dd>{company.name} ({company.nameLatin})</dd>
              <dt>Corporate number</dt><dd className="s-num">{company.corporateNumber}</dd>
              <dt>Registered</dt><dd>{company.registered}</dd>
              <dt>Address</dt><dd>{company.addressBlock}<br />{company.addressBlockLatin}</dd>
              <dt>Email</dt><dd>{company.email}</dd>
            </dl>
            <p className="s-caption" style={{ marginTop: 16 }}>{copy.registeredNote}</p>
          </div>
        </div>
      </section>

      <CloseSection locale={locale} />
    </main>
  );
}
