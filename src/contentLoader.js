import heroEnRaw from "./content/hero.en.md?raw";
import heroEsRaw from "./content/hero.es.md?raw";
import topbarEnRaw from "./content/topbar.en.md?raw";
import topbarEsRaw from "./content/topbar.es.md?raw";
import manifestoEnRaw from "./content/manifesto.en.md?raw";
import manifestoEsRaw from "./content/manifesto.es.md?raw";
import collectionEnRaw from "./content/collection.en.md?raw";
import collectionEsRaw from "./content/collection.es.md?raw";
import craftEnRaw from "./content/craft.en.md?raw";
import craftEsRaw from "./content/craft.es.md?raw";
import storyEnRaw from "./content/story.en.md?raw";
import storyEsRaw from "./content/story.es.md?raw";
import occasionEnRaw from "./content/occasion.en.md?raw";
import occasionEsRaw from "./content/occasion.es.md?raw";
import orderEnRaw from "./content/order.en.md?raw";
import orderEsRaw from "./content/order.es.md?raw";
import footerEnRaw from "./content/footer.en.md?raw";
import footerEsRaw from "./content/footer.es.md?raw";

export function parseMarkdownContent(raw = "") {
  const normalized = raw.replace(/\r\n/g, "\n").trim();

  if (!normalized.startsWith("---")) {
    return { meta: {}, body: normalized };
  }

  const endIndex = normalized.indexOf("\n---", 3);

  if (endIndex === -1) {
    return { meta: {}, body: normalized };
  }

  const frontmatter = normalized.slice(3, endIndex).trim();
  const body = normalized.slice(endIndex + 4).trim();
  const meta = {};

  frontmatter.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      return;
    }

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    meta[key] = value;
  });

  return { meta, body };
}

export const siteContent = {
  es: {
    topbar: parseMarkdownContent(topbarEsRaw),
    hero: parseMarkdownContent(heroEsRaw),
    manifesto: parseMarkdownContent(manifestoEsRaw),
    collection: parseMarkdownContent(collectionEsRaw),
    craft: parseMarkdownContent(craftEsRaw),
    story: parseMarkdownContent(storyEsRaw),
    occasion: parseMarkdownContent(occasionEsRaw),
    order: parseMarkdownContent(orderEsRaw),
    footer: parseMarkdownContent(footerEsRaw),
  },
  en: {
    topbar: parseMarkdownContent(topbarEnRaw),
    hero: parseMarkdownContent(heroEnRaw),
    manifesto: parseMarkdownContent(manifestoEnRaw),
    collection: parseMarkdownContent(collectionEnRaw),
    craft: parseMarkdownContent(craftEnRaw),
    story: parseMarkdownContent(storyEnRaw),
    occasion: parseMarkdownContent(occasionEnRaw),
    order: parseMarkdownContent(orderEnRaw),
    footer: parseMarkdownContent(footerEnRaw),
  },
};
