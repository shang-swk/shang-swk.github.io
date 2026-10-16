import { archiveCatalog, brandProfiles, modelReleaseYears } from "@/lib/archive-catalog";
import researchPhotos from "@/data/catalog/research-photos.json";
import marketplacePhotoLeads from "@/data/catalog/marketplace-photo-leads.json";
import curatedGalleryCache from "@/data/catalog/curated-gallery-cache.json";
import { slugify } from "@/lib/utils";
import { modelGuides } from "@/lib/model-guides";
import { photoPresentation } from "@/lib/photo-policy";
import type { ArchiveSneaker } from "@/types/archive";

const photos = researchPhotos as Record<string, string>;
const marketplaceSources = new Map(marketplacePhotoLeads.map(lead => [lead.name, lead.sourcePageUrl]));
const cachedGalleries = curatedGalleryCache as Record<string, string[]>;
const colors: Record<string, string> = {
  black: "#1b1b1b", blue: "#5279a1", brown: "#806448", cream: "#e8dfc9",
  green: "#687b59", grey: "#b4b5b2", orange: "#c46c37", pink: "#dca9b6",
  purple: "#796189", red: "#af2934", white: "#f4f4f0", yellow: "#d3b75d"
};

function sourceType(url: string): string {
  const host = new URL(url).hostname.replace(/^www\./, "");
  if (["aimeleondore.com", "joefreshgoods.com", "everynow-andthen.com", "kith.com", "jjjjound.com", "cncpts.com", "bdgastore.com", "apbstore.com", "auralee.jp", "wtaps.com", "newbalance.com", "newbalance.jp", "patta.nl", "carhartt-wip.com", "carhartt-wip.com.sg", "dtlr.com"].some(domain => host === domain || host.endsWith(`.${domain}`))) return "official";
  if (host.includes("goat.com") || host.includes("stockx.com")) return "resale";
  if (host.includes("instagram.com") || host === "x.com" || host === "youtube.com" || host === "youtu.be") return "social";
  if (host === "reddit.com" || host.endsWith(".reddit.com")) return "community";
  return "magazine";
}

function sourceTitle(url: string): string {
  const parsed = new URL(url);
  const host = parsed.hostname.replace(/^www\./, "");
  const lastPart = parsed.pathname.split("/").filter(Boolean).at(-1);
  if (!lastPart) return host;
  const title = decodeURIComponent(lastPart).replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  return `${host} / ${title.slice(0, 72)}`;
}

export const fallbackSneakers: ArchiveSneaker[] = archiveCatalog.map((item) => {
  const slug = item.slug?.startsWith("source-") ? slugify(item.name) : item.slug ?? slugify(item.name);
  const brandSlug = slugify(item.brand);
  const sourceUrls = [...new Set([...(item.sourceUrls ?? []), item.officialSourceUrl].filter((url): url is string => Boolean(url)))];
  const leadSource = marketplaceSources.get(item.name) ?? item.imageSourceUrl ?? item.officialSourceUrl ?? item.sourceUrls?.[0] ?? null;
  const candidates = [
    { imageUrl: photos[item.name], sourceUrl: leadSource },
    { imageUrl: item.imageUrl?.startsWith("/images/") ? item.imageUrl : null, sourceUrl: item.imageSourceUrl ?? item.officialSourceUrl ?? item.sourceUrls?.[0] ?? null },
    ...(cachedGalleries[item.name] ?? item.galleryImages ?? []).map(imageUrl => ({ imageUrl, sourceUrl: item.imageSourceUrl ?? item.officialSourceUrl ?? item.sourceUrls?.[0] ?? null }))
  ];
  const galleryByUrl = new Map<string, { imageUrl: string; sourceUrl: string | null }>();
  for (const entry of candidates) if (entry.imageUrl && !galleryByUrl.has(entry.imageUrl)) galleryByUrl.set(entry.imageUrl, { imageUrl: entry.imageUrl, sourceUrl: entry.sourceUrl });
  const galleryEntries = [...galleryByUrl.values()];
  const gallery = galleryEntries.map(entry => entry.imageUrl);
  const presentation = photoPresentation(slug, gallery);
  const releaseYear = item.releaseYear ?? (item.releaseDate ? Number(item.releaseDate.slice(0, 4)) : null);
  const sourceDate = item.checkedAt ?? "2026-10-04";
  return {
    id: slug,
    name: item.name,
    slug,
    sku: item.sku ?? null,
    nickname: item.colorway ?? null,
    colorway: item.colorway ?? null,
    colorFamily: item.colorFamily ?? null,
    releaseDate: item.releaseDate ?? null,
    releaseYear,
    retailPrice: null,
    currency: null,
    region: null,
    madeIn: item.madeIn ?? null,
    materialsText: item.materialsText ?? null,
    story: item.story || null,
    designInspiration: item.designInspiration ?? null,
    culturalContext: item.culturalContext ?? null,
    rarityLevel: item.rarityLevel ?? "unknown",
    status: item.status ?? "released",
    verificationStatus: item.verificationStatus ?? "unverified",
    heroImageUrl: presentation.heroImageUrl,
    cardImageUrl: presentation.cardImageUrl?.startsWith("/images/") ? `/images/cards/${slug}.webp` : presentation.cardImageUrl,
    officialSourceUrl: item.officialSourceUrl ?? null,
    createdAt: `${sourceDate}T00:00:00.000Z`,
    updatedAt: `${sourceDate}T00:00:00.000Z`,
    brand: { id: brandSlug, name: item.brand, slug: brandSlug },
    modelSeries: { id: item.model, name: item.model, slug: slugify(item.model), family: item.model === "1000" ? "ONE_THOUSAND" : "NINETY_NINE_X" },
    images: gallery.map((imageUrl, index) => ({
      id: `${slug}-image-${index}`,
      imageUrl,
      alt: `${item.name}，${({ side: "侧面", top: "俯视", heel: "后跟", material: "材质", outsole: "鞋底", "on-foot": "上脚", editorial: "专题", archive: "档案" } as const)[presentation.roles[index]]}照片 ${index + 1}`,
      source: galleryEntries[index].sourceUrl ? new URL(galleryEntries[index].sourceUrl).hostname.replace(/^www\./, "") : null,
      sourceUrl: galleryEntries[index].sourceUrl,
      copyrightNote: "Image from a third-party source; credited for local archive reference. Rights remain with the original owner.",
      sortOrder: index,
      role: presentation.roles[index]
    })),
    releases: item.releaseDate ? [{ id: `${slug}-release`, releaseType: "online", releaseDate: item.releaseDate, storeName: null, storeUrl: item.officialSourceUrl ?? null, country: null, notes: null }] : [],
    sources: sourceUrls.map((url, index) => ({ id: `${slug}-source-${index}`, title: sourceTitle(url), url, sourceType: sourceType(url), reliabilityScore: sourceType(url) === "official" ? 90 : sourceType(url) === "resale" ? 55 : ["community", "social"].includes(sourceType(url)) ? 30 : 65 })),
    colorPalettes: item.colorFamily && colors[item.colorFamily] ? [{ id: `${slug}-color`, name: item.colorFamily, hex: colors[item.colorFamily], sortOrder: 0 }] : []
  };
});

export const fallbackBrands = [...new Map(fallbackSneakers.map(item => [item.brand.slug, item.brand])).values()]
  .map(brand => ({ ...brand, description: brandProfiles[brand.name]?.description ?? null, collaborationHistory: null, _count: { sneakers: fallbackSneakers.filter(item => item.brand.slug === brand.slug).length }, sneakers: [] }));

export const fallbackModels = Object.entries(modelReleaseYears)
  .map(([name, releaseYear]) => ({
    id: name, name, slug: slugify(name), family: name === "1000" ? "ONE_THOUSAND" : "NINETY_NINE_X", releaseYear,
    description: modelGuides[name]?.history ?? null,
    features: modelGuides[name]?.features ?? null,
    madeInNotes: modelGuides[name]?.madeInNotes ?? null,
    _count: { sneakers: fallbackSneakers.filter(item => item.modelSeries.name === name).length }, sneakers: []
  }));
