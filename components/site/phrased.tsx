import { Fragment } from "react";
import { phraseParts } from "@/lib/phrases";

/** A heading's text with a break opportunity between words; see lib/phrases.ts. */
export function Phrased({ text, parts = phraseParts(text) }: { text: string; parts?: string[] }) {
  if (parts.length < 2) return <>{text}</>;
  return <>{parts.map((part, i) => <Fragment key={i}>{i ? <wbr /> : null}{part}</Fragment>)}</>;
}
