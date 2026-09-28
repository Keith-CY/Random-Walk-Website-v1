import type { DocumentCopy, EarlierWorkSlug, LegalDetailSlug } from "../detail-copy";
import type { ExaminationCopy } from "../examination/data";
import type { SiteCopy } from "../site-copy";
import type { WorkEntryCopy } from "../work-entries";

/** Everything one language says on the site, apart from the notes, legal pages and forms. */
export type Translation = {
  site: SiteCopy;
  earlierWork: Record<EarlierWorkSlug, DocumentCopy>;
  legalDetails: Record<LegalDetailSlug, DocumentCopy>;
  work: WorkEntryCopy[];
  examination: ExaminationCopy;
};
