import NotesPage from "@/app/[locale]/notes/page";
import { LocalizedPageShell } from "@/components/localized-page-shell";
import { defaultLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";
import { notesPageCopy } from "@/lib/site-data";

export const dynamic = "force-static";

const copy = notesPageCopy[defaultLocale];

export const metadata = localizedMetadata(defaultLocale, "/notes", copy.hero.title, copy.hero.description);

export default async function ArticlesAliasPage() {
  return (
    <LocalizedPageShell locale={defaultLocale}>
      {await NotesPage({ params: Promise.resolve({ locale: defaultLocale }) })}
    </LocalizedPageShell>
  );
}
