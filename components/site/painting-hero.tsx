import Image from "next/image";
import type { ReactNode } from "react";
import { Phrased } from "@/components/site/phrased";
import type { Painting } from "@/lib/site-copy";

export function PaintingHero({ painting, kicker, title, lede, children, titleId }: { painting: Painting; kicker?: string; title: string; lede?: string; children?: ReactNode; titleId?: string }) {
  return (
    <section className="s-hero" aria-labelledby={titleId}>
      <div className="s-hero-art">
        <Image src={painting.src} alt={painting.alt} fill priority sizes="100vw" />
        <div className="s-hero-veil" />
      </div>
      <div className="s-hero-copy">
        {kicker ? <p className="s-kicker">{kicker}</p> : null}
        <h1 className="s-h1 s-phrased" id={titleId}><Phrased text={title} /></h1>
        {lede ? <p className="s-lede">{lede}</p> : null}
        {children}
      </div>
    </section>
  );
}
