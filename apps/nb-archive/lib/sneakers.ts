import type { Prisma } from "@prisma/client";
import { fallbackBrands, fallbackModels, fallbackSneakers } from "@/lib/fallback-data";
import { prisma } from "@/lib/prisma";
import { photoPresentation } from "@/lib/photo-policy";
import type { ArchiveSneaker } from "@/types/archive";

export const sneakerListInclude = {
  brand: true,
  modelSeries: true,
  images: { orderBy: { sortOrder: "asc" as const } },
  colorPalettes: { orderBy: { sortOrder: "asc" as const } },
  sources: { orderBy: { reliabilityScore: "desc" as const } }
};

export const sneakerDetailInclude = {
  brand: true,
  modelSeries: true,
  collaboration: true,
  images: { orderBy: { sortOrder: "asc" as const } },
  releases: { orderBy: { releaseDate: "desc" as const } },
  sources: { orderBy: { reliabilityScore: "desc" as const } },
  sneakerTags: { include: { tag: true } },
  colorPalettes: { orderBy: { sortOrder: "asc" as const } },
  sneakerMaterials: { include: { material: true } }
};

type SneakerListRecord = Prisma.SneakerGetPayload<{ include: typeof sneakerListInclude }>;
type SneakerDetailRecord = Prisma.SneakerGetPayload<{ include: typeof sneakerDetailInclude }>;
const normalizedCardSlugs = new Set(fallbackSneakers.filter(item => item.cardImageUrl?.startsWith("/images/cards/")).map(item => item.slug));

export function serializeSneaker(sneaker: SneakerListRecord | SneakerDetailRecord): ArchiveSneaker {
  const presentation = photoPresentation(sneaker.slug, sneaker.images.map(image => image.imageUrl));
  return {
    id: sneaker.id,
    name: sneaker.name,
    slug: sneaker.slug,
    sku: sneaker.sku,
    nickname: sneaker.nickname,
    colorway: sneaker.colorway,
    colorFamily: sneaker.colorFamily,
    releaseDate: sneaker.releaseDate?.toISOString() ?? null,
    releaseYear: sneaker.releaseYear,
    retailPrice: sneaker.retailPrice?.toString() ?? null,
    currency: sneaker.currency,
    region: sneaker.region,
    madeIn: sneaker.madeIn,
    materialsText: sneaker.materialsText,
    story: sneaker.story,
    designInspiration: sneaker.designInspiration,
    culturalContext: sneaker.culturalContext,
    rarityLevel: sneaker.rarityLevel,
    status: sneaker.status,
    verificationStatus: sneaker.verificationStatus,
    heroImageUrl: presentation.heroImageUrl ?? sneaker.heroImageUrl,
    cardImageUrl: presentation.cardImageUrl?.startsWith("/images/") && normalizedCardSlugs.has(sneaker.slug) ? `/images/cards/${sneaker.slug}.webp` : presentation.cardImageUrl,
    officialSourceUrl: sneaker.officialSourceUrl,
    createdAt: sneaker.createdAt.toISOString(),
    updatedAt: sneaker.updatedAt.toISOString(),
    brand: {
      id: sneaker.brand.id,
      name: sneaker.brand.name,
      slug: sneaker.brand.slug
    },
    modelSeries: {
      id: sneaker.modelSeries.id,
      name: sneaker.modelSeries.name,
      slug: sneaker.modelSeries.slug,
      family: sneaker.modelSeries.family
    },
    images: sneaker.images?.map((image, index) => ({
      id: image.id,
      imageUrl: image.imageUrl,
      alt: image.alt,
      source: image.source,
      sourceUrl: image.sourceUrl,
      copyrightNote: image.copyrightNote,
      sortOrder: image.sortOrder,
      role: presentation.roles[index]
    })),
    sources: sneaker.sources?.map((source) => ({
      id: source.id,
      title: source.title,
      url: source.url,
      sourceType: source.sourceType,
      reliabilityScore: source.reliabilityScore
    })),
    releases:
      "releases" in sneaker
        ? sneaker.releases.map((release) => ({
            id: release.id,
            releaseType: release.releaseType,
            releaseDate: release.releaseDate?.toISOString() ?? null,
            storeName: release.storeName,
            storeUrl: release.storeUrl,
            country: release.country,
            notes: release.notes
          }))
        : undefined,
    colorPalettes: sneaker.colorPalettes?.map((color) => ({
      id: color.id,
      name: color.name,
      hex: color.hex,
      sortOrder: color.sortOrder
    }))
  };
}

export async function getFeaturedSneakers() {
  return withFallback(async () => {
    const sneakers = await prisma.sneaker.findMany({
      take: 6,
      orderBy: [{ verificationStatus: "desc" }, { releaseDate: "desc" }],
      include: sneakerListInclude
    });
    return sneakers.map(serializeSneaker);
  }, [...fallbackSneakers].filter((item) => item.heroImageUrl).sort((a, b) => (b.releaseYear ?? 0) - (a.releaseYear ?? 0)).slice(0, 6));
}

export async function getRecentSneakers() {
  return withFallback(async () => {
    const sneakers = await prisma.sneaker.findMany({
      take: 8,
      orderBy: { updatedAt: "desc" },
      include: sneakerListInclude
    });
    return sneakers.map(serializeSneaker);
  }, [...fallbackSneakers].sort((a, b) => (b.releaseYear ?? 0) - (a.releaseYear ?? 0)).slice(0, 8));
}

export async function getArchiveSneakers() {
  return withFallback(async () => {
    const sneakers = await prisma.sneaker.findMany({
      orderBy: [{ releaseDate: "desc" }, { name: "asc" }],
      include: sneakerListInclude
    });
    return sneakers.map(serializeSneaker);
  }, [...fallbackSneakers].sort((a, b) => (b.releaseYear ?? 0) - (a.releaseYear ?? 0) || a.name.localeCompare(b.name)));
}

export async function getSneakerBySlug(slug: string) {
  return withFallback(async () => {
    const sneaker = await prisma.sneaker.findUnique({
      where: { slug },
      include: sneakerDetailInclude
    });
    return sneaker ? { raw: sneaker, view: serializeSneaker(sneaker) } : null;
  }, fallbackSneakers.find((item) => item.slug === slug)
    ? {
        raw: {
          slug,
          modelSeriesId: fallbackSneakers.find((item) => item.slug === slug)?.modelSeries.id ?? "",
          brandId: fallbackSneakers.find((item) => item.slug === slug)?.brand.id ?? ""
        },
        view: fallbackSneakers.find((item) => item.slug === slug)!
      }
    : null);
}

export async function getRelatedSneakers(slug: string, modelSeriesId: string, brandId: string) {
  return withFallback(async () => {
    const sneakers = await prisma.sneaker.findMany({
      where: {
        slug: { not: slug },
        OR: [{ modelSeriesId }, { brandId }]
      },
      take: 4,
      orderBy: { releaseDate: "desc" },
      include: sneakerListInclude
    });
    return sneakers.map(serializeSneaker);
  }, fallbackSneakers.filter((item) => item.slug !== slug && (item.modelSeries.id === modelSeriesId || item.brand.id === brandId)).slice(0, 4));
}

export async function getHomeTaxonomy() {
  return withFallback(async () => {
    const [brands, models] = await Promise.all([
      prisma.brand.findMany({
        orderBy: { name: "asc" },
        take: 12,
        include: { _count: { select: { sneakers: true } } }
      }),
      prisma.modelSeries.findMany({
        orderBy: [{ family: "asc" }, { releaseYear: "asc" }],
        include: { _count: { select: { sneakers: true } } }
      })
    ]);

    return { brands, models };
  }, { brands: fallbackBrands, models: fallbackModels });
}

export async function getBrands() {
  return withFallback(
    () =>
      prisma.brand.findMany({
        orderBy: { name: "asc" },
        include: { _count: { select: { sneakers: true } } }
      }),
    fallbackBrands
  );
}

export async function getBrandBySlug(slug: string) {
  const fallback = fallbackBrands.find((brand) => brand.slug === slug);
  return withFallback(
    () =>
      prisma.brand.findUnique({
        where: { slug },
        include: {
          _count: { select: { sneakers: true } },
          sneakers: {
            orderBy: { releaseDate: "desc" },
            include: sneakerListInclude
          }
        }
      }),
    fallback ? { ...fallback, sneakers: fallbackSneakers.filter((item) => item.brand.slug === slug) } : null
  );
}

export async function getModels() {
  return withFallback(
    () =>
      prisma.modelSeries.findMany({
        orderBy: [{ family: "asc" }, { releaseYear: "asc" }],
        include: { _count: { select: { sneakers: true } } }
      }),
    fallbackModels
  );
}

export async function getModelBySlug(slug: string) {
  const fallback = fallbackModels.find((model) => model.slug === slug);
  return withFallback(
    () =>
      prisma.modelSeries.findUnique({
        where: { slug },
        include: {
          _count: { select: { sneakers: true } },
          sneakers: {
            orderBy: { releaseDate: "desc" },
            include: sneakerListInclude
          }
        }
      }),
    fallback ? { ...fallback, sneakers: fallbackSneakers.filter((item) => item.modelSeries.slug === slug) } : null
  );
}

export async function getTimelineSneakers() {
  return getArchiveSneakers();
}

async function withFallback<T>(query: () => Promise<unknown>, fallback: T): Promise<T> {
  if (process.env.DATA_SOURCE !== "postgres") return fallback;
  if (!process.env.DATABASE_URL) throw new Error("DATA_SOURCE=postgres requires DATABASE_URL");
  try {
    return (await query()) as T;
  } catch (error) {
    console.error("Database query failed:", error);
    throw error;
  }
}
