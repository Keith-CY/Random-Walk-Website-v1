import EventsPage from "@/app/[locale]/events/page";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { eventsPageCopy } from "@/lib/site-data";

export const dynamic = "force-static";

const copy = eventsPageCopy[defaultLocale];

export const metadata = localizedMetadata(defaultLocale, "/events", copy.hero.title, copy.hero.description);

export default async function EventsAliasPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      {await EventsPage({ params: Promise.resolve({ locale: defaultLocale }) })}
    </LocalizedPageShell>
  );
}
