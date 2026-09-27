// Detail copy written for the previous site still links to retired routes; point those links at their new homes.
const rules: [RegExp, string][] = [
  [/^\/creations\/melix\/?$/, "/melix"],
  [/^\/creations\/(neuron|1-tok|fiber-link|utxo-data|distributed-paradigm)\/?$/, "/earlier-work/$1"],
  [/^\/creations\/?$/, "/earlier-work"],
  [/^\/services\/[a-z-]+\/?$/, "/services"],
  [/^\/resources\/[a-z-]+\/?$/, "/notes"],
  [/^\/(articles)\/?$/, "/notes"],
  [/^\/(philosophy)\/?$/, "/company"],
  [/^\/events\/?$/, "/company#events"],
  [/^\/work\/(finance-regulated-records|legal-ip-private-model|manufacturing-edge-ai)\/?$/, "/work"],
  [/^\/home\/?$/, "/"]
];

export function modernHref(href: string) {
  for (const [pattern, target] of rules) if (pattern.test(href)) return href.replace(pattern, target);
  return href;
}
