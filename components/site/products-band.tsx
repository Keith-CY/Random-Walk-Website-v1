import Image from "next/image";
import Link from "next/link";
import { Phrased } from "@/components/site/phrased";
import { localizePath, type Locale } from "@/lib/i18n";
import { getPaintings, getSiteCopy } from "@/lib/site-copy";

// A quiet pointer from the home page to the products page: the lab's public projects, one row each.
export function ProductsBand({ locale }: { locale: Locale }) {
  const { kicker, title, band, lapla } = getSiteCopy(locale).products;
  const paintings = getPaintings(locale);
  return (
    <section className="s-section s-band" aria-labelledby="band-title">
      <div className="s-wrap s-split">
        <div data-reveal>
          <p className="s-kicker">{kicker}</p>
          <h2 className="s-h2 s-phrased" id="band-title"><Phrased text={title} /></h2>
        </div>
        <div data-reveal>
          <div className="s-rows s-band-rows">
            {lapla.projects.map((project) => (
              <Link key={project.href} href={`${localizePath(locale, "/products")}/#lapla-si`}>
                <span className="s-band-art"><Image src={paintings[project.painting].src} alt="" fill sizes="128px" /></span>
                <h3 className="s-h3">{project.name}</h3>
                <p>{project.line}</p>
                <span className="s-out" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <div className="s-actions">
            <Link className="s-link" href={localizePath(locale, "/products")}>{band.more}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
