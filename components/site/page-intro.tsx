import type { ReactNode } from "react";
import { Phrased } from "@/components/site/phrased";

// The quiet opening used by text pages that carry no painting.
export function PageIntro({ kicker, title, lede, titleId, children }: { kicker?: string; title: string; lede?: string; titleId: string; children?: ReactNode }) {
  return (
    <section className="s-section s-intro" aria-labelledby={titleId}>
      <div className="s-wrap">
        {kicker ? <p className="s-kicker">{kicker}</p> : null}
        <h1 className="s-h1 s-h1-doc s-phrased" id={titleId}><Phrased text={title} /></h1>
        {lede ? <p className="s-lede">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
