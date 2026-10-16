export type PhotoRole = "side" | "top" | "heel" | "material" | "outsole" | "on-foot" | "editorial" | "archive";

const sideIndex: Record<string, number> = {
  "kith-x-united-arrows-and-sons-x-new-balance-990v3-black-oyster-mushroom": 1,
  "dani-lle-cathari-x-kith-x-new-balance-991v2-reverse": 1
};

const noReviewedSide = new Set([
  "dani-lle-cathari-x-new-balance-991v2-matcha",
  "stussy-x-new-balance-990v4-stussy-cream",
  "kith-x-new-balance-993-spring-101",
  "kith-x-new-balance-993-pistachio",
  "concepts-x-new-balance-998-c-note-2013",
  "concepts-x-new-balance-1000-mile",
  "kith-x-new-balance-991v2-moonrock",
  "kith-x-new-balance-991-vetiver",
  "kith-x-new-balance-991-vetiver-womens",
  "joe-freshgoods-x-new-balance-992-no-emotions-are-emotions"
]);

const reviewedRoles: Record<string, PhotoRole[]> = {
  "kith-x-new-balance-992-osaka": ["side", "top", "heel", "side", "side", "top", "outsole", "outsole"],
  "kith-x-new-balance-991v2-osaka": ["side", "side", "side", "top", "outsole", "top"],
  "kith-x-united-arrows-and-sons-x-new-balance-990v3-black-oyster-mushroom": ["editorial", "side", "side", "heel", "side"],
  "dani-lle-cathari-x-new-balance-991v2-matcha": ["on-foot", "material", "top", "on-foot"],
  "dani-lle-cathari-x-kith-x-new-balance-991v2-reverse": ["on-foot", "side", "top", "editorial"]
};

export function photoPresentation(slug: string, gallery: Array<string | null>) {
  const index = noReviewedSide.has(slug) ? -1 : (sideIndex[slug] ?? 0);
  return {
    cardImageUrl: index >= 0 ? gallery[index] ?? null : null,
    heroImageUrl: gallery[index >= 0 ? index : 0] ?? null,
    roles: gallery.map((_, position): PhotoRole => reviewedRoles[slug]?.[position] ?? (position === index && index >= 0 ? "side" : "archive"))
  };
}
