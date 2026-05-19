import type { PageCopy } from "@/lib/site-data";

export function SectionHeading({ copy, inverse = false }: { copy: PageCopy; inverse?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className="rw-eyebrow">{copy.eyebrow}</p>
      <h2 className={`rw-heading mt-4 ${inverse ? "text-[var(--rw-paper)]" : "text-[var(--rw-ink)]"}`}>{copy.title}</h2>
      <p className="rw-body-large mt-5">{copy.description}</p>
    </div>
  );
}
