import Link from "next/link";
import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { eventPresenceItems, eventsPageCopy } from "@/lib/site-data";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const copy = eventsPageCopy[rawLocale];
  return localizedMetadata(rawLocale, "/events", copy.hero.title, copy.hero.description);
}

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const dictionary = getDictionary(locale);
  const copy = eventsPageCopy[locale];
  const events = eventPresenceItems[locale];
  const [featured, ...archive] = events;

  return (
    <main>
      <section className="rw-section rw-section-major">
        <div className="rw-container rw-grid items-center">
          <div className="col-span-12 lg:col-span-6">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="rw-page-title mt-5">{copy.hero.title}</h1>
            <p className="rw-body-large mt-6">{copy.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rw-button rw-button-primary" href={localizePath(locale, "/contact?intent=speaking")}>{copy.inviteLabel}</Link>
              <Link className="rw-button rw-button-secondary" href={localizePath(locale, "/work")}>{dictionary.nav.work}</Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <a className="rw-event-image-link" href={featured.href} target="_blank" rel="noreferrer" aria-label={`${featured.title}: ${featured.linkLabel}`}>
              <PlaceholderImage assetId={featured.assetId} ratio="4 / 3" variant="paper" priority />
            </a>
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-lined">
        <div className="rw-container">
          <article className="rw-event-feature-card">
            <div>
              <p className="rw-eyebrow">{copy.featuredLabel}</p>
              <h2 className="rw-heading mt-4">{featured.title}</h2>
              <p className="rw-body-large mt-5">{featured.summary}</p>
              <blockquote className="rw-presence-quote mt-6">{featured.pullLine}</blockquote>
              <div className="rw-tag-row mt-6">
                {featured.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <div className="rw-event-facts">
              <p className="rw-caption">{featured.role}</p>
              <p>{featured.date}</p>
              <p>{featured.location}</p>
              <a className="rw-text-link mt-5" href={featured.href} target="_blank" rel="noreferrer">{featured.linkLabel} -&gt;</a>
            </div>
          </article>
        </div>
      </section>

      <section className="rw-section rw-section-supporting">
        <div className="rw-container">
          <SectionHeading copy={copy.archive} />
          <div className="rw-event-grid mt-10">
            {archive.map((event) => (
              <article className="rw-event-card" key={event.slug}>
                <div className="rw-card-media">
                  <a className="rw-event-image-link" href={event.href} target="_blank" rel="noreferrer" aria-label={`${event.title}: ${event.linkLabel}`}>
                    <PlaceholderImage assetId={event.assetId} ratio="16 / 10" variant="paper" />
                  </a>
                </div>
                <p className="rw-caption">{event.role} · {event.date}</p>
                <h3 className="rw-subheading mt-3">{event.title}</h3>
                <p className="rw-body mt-4">{event.summary}</p>
                <div className="rw-tag-row mt-5">
                  {event.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="rw-event-card-footer mt-5">
                  <span>{event.location}</span>
                  <a className="rw-text-link" href={event.href} target="_blank" rel="noreferrer">{event.linkLabel} -&gt;</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rw-section rw-section-marked rw-section-major">
        <div className="rw-container">
          <div className="rw-obsidian-panel rw-ink rw-cta-watermark mx-auto max-w-4xl text-center">
            <p className="rw-eyebrow">{copy.hero.eyebrow}</p>
            <h2 className="rw-heading mt-4 text-[var(--rw-paper)]">{copy.inviteLabel}</h2>
            <p className="rw-body-large mt-5">{copy.hero.description}</p>
            <Link className="rw-button rw-button-inverse mt-8" href={localizePath(locale, "/contact?intent=speaking")}>{copy.inviteLabel}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
