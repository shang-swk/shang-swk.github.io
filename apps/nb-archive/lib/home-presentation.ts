import type { ArchiveSneaker } from "@/types/archive";

const heroFeatures = [
  {
    slug: "aime-leon-dore-x-new-balance-993-beef-and-broccoli",
    imageUrl: "/images/catalog/2e5800f798525f5b20.jpg",
    eyebrow: "AIMÉ LEON DORE / 993",
    title: "Beef & Broccoli",
    description: "棕色麂皮与深绿网布，在经典 993 上相遇。",
    tone: "dark" as const,
    imagePosition: "65% center"
  },
  {
    slug: "joe-freshgoods-x-new-balance-992-no-emotions-are-emotions",
    imageUrl: "/images/catalog/3c83870b916d571330.jpg",
    eyebrow: "STORY / 992",
    title: "No Emotions Are Emotions",
    description: "从大胆配色出发，重新认识 Joe Freshgoods 的 992。",
    tone: "color" as const,
    imagePosition: "center center"
  }
];

export type HomeHeroSlide = {
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number | null;
  imageUrl: string;
  sourceUrl: string;
  eyebrow: string;
  title: string;
  description: string;
  tone: "dark" | "color";
  imagePosition: string;
};

export function getHomeHeroSlides(catalog: ArchiveSneaker[]): HomeHeroSlide[] {
  const bySlug = new Map(catalog.map(sneaker => [sneaker.slug, sneaker]));
  return heroFeatures.flatMap(feature => {
    const sneaker = bySlug.get(feature.slug);
    const image = sneaker?.images?.find(item => item.imageUrl === feature.imageUrl && item.sourceUrl);
    if (!sneaker || !image?.sourceUrl) return [];
    return [{
      slug: sneaker.slug,
      name: sneaker.name,
      brand: sneaker.brand.name,
      model: sneaker.modelSeries.name,
      year: sneaker.releaseYear,
      imageUrl: feature.imageUrl,
      sourceUrl: image.sourceUrl,
      eyebrow: feature.eyebrow,
      title: feature.title,
      description: feature.description,
      tone: feature.tone,
      imagePosition: feature.imagePosition
    }];
  });
}
