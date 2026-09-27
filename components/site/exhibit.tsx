import Image from "next/image";
import type { Exhibit as ExhibitImage } from "@/lib/detail-copy";

// A product screenshot hung like a print on a mat, so real interfaces sit calmly beside the paintings.
export function Exhibit({ image, priority, sizes = "(max-width: 960px) 100vw, 1100px" }: { image: ExhibitImage; priority?: boolean; sizes?: string }) {
  return (
    <figure className="s-exhibit">
      <div className="s-exhibit-mat">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={sizes} priority={priority} />
      </div>
      <figcaption className="s-caption">{image.caption}</figcaption>
    </figure>
  );
}
