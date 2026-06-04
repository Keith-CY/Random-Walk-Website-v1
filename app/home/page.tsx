import { HomePageContent } from "@/components/home-page-content";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { homeCopy } from "@/lib/site-data";

export const dynamic = "force-static";

const copy = homeCopy[defaultLocale];

export const metadata = localizedMetadata(defaultLocale, "/", copy.hero.title, copy.hero.description);

export default function HomeAliasPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      <HomePageContent locale={defaultLocale} />
    </LocalizedPageShell>
  );
}
