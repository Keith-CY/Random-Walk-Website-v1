// Screenshots shown on the site, with their sizes. Every language shares the files and writes its own alt text and caption.
export type Exhibit = { src: string; alt: string; width: number; height: number; caption: string };

type Frame = Omit<Exhibit, "alt" | "caption">;

const shot = (src: string, width: number, height: number): Frame => ({ src, width, height });

export const exhibitFiles = {
  neuron: shot("/images/product-covers/neuron.png", 1536, 1024),
  "1-tok": shot("/images/product-covers/1-tok.png", 1536, 1024),
  "fiber-link": shot("/images/product-covers/fiber-link.png", 1619, 971),
  "utxo-data": shot("/images/product-covers/utxo-data.png", 1536, 1024),
  "distributed-paradigm": shot("/images/product-covers/distributed-paradigm.png", 1683, 935),
  melix: shot("/images/product-covers/melix.png", 1536, 1024),
  melixWindow: shot("/images/melix/window-ui.png", 2880, 1920)
} as const;

export function exhibit(name: keyof typeof exhibitFiles, alt: string, caption: string): Exhibit {
  return { ...exhibitFiles[name], alt, caption };
}
