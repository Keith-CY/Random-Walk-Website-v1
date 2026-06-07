import type { PageCopy } from "@/lib/site-data";

export function SectionHeading({ copy, inverse = false, showEyebrow = true }: { copy: PageCopy; inverse?: boolean; showEyebrow?: boolean }) {
  return (
    <div className="max-w-3xl">
      {showEyebrow ? <p className="rw-eyebrow">{copy.eyebrow}</p> : null}
      <h2 className={`rw-heading ${showEyebrow ? "mt-4" : ""} ${inverse ? "text-[var(--rw-paper)]" : "text-[var(--rw-text-primary)]"}`}>{copy.title}</h2>
      <p className="rw-body-large mt-5">{copy.description}</p>
    </div>
  );
}
