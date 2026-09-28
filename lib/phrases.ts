// Chinese has no spaces, so a heading may otherwise break between any two characters. Large headings
// mark the edges of words instead and break only there (.s-phrased in site.css applies it to Chinese).
const han = /[一-鿿]/;
const kanaOrHangul = /[぀-ヿ가-힯]/;
const closing = /^[，。、；：！？）」』”’,.;:!?)\s]+$/u;
const particle = /^[的了地得着]$/;
const singleHan = /^[一-鿿]$/;
const endsClause = /[，。、；：！？]$/;

let segmenter: { segment: (text: string) => Iterable<{ segment: string }> } | null | undefined;

export function phraseParts(text: string): string[] {
  if (!han.test(text) || kanaOrHangul.test(text)) return [text];
  if (segmenter === undefined) {
    const Ctor = (Intl as unknown as { Segmenter?: new (lang: string, o: { granularity: "word" }) => NonNullable<typeof segmenter> }).Segmenter;
    segmenter = Ctor ? new Ctor("zh", { granularity: "word" }) : null;
  }
  if (!segmenter) return [text];
  const parts: string[] = [];
  for (const { segment } of segmenter.segment(text)) {
    const last = parts.at(-1);
    // Punctuation and particles such as 的 stay with the word before them, so no line starts with them.
    // The word breaker also splits some words into single characters (量|身); those rejoin the word before,
    // unless that word closes a clause.
    if (last !== undefined && (closing.test(segment) || particle.test(segment) || (singleHan.test(segment) && !endsClause.test(last)))) parts[parts.length - 1] += segment;
    else parts.push(segment);
  }
  return parts;
}
