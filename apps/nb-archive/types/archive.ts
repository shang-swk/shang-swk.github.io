import type {
  ModelFamily,
  RarityLevel,
  SneakerStatus,
  VerificationStatus
} from "@prisma/client";

export type ArchiveSneaker = {
  id: string;
  name: string;
  slug: string;
  sku: string | null;
  nickname: string | null;
  colorway: string | null;
  colorFamily: string | null;
  releaseDate: string | null;
  releaseYear: number | null;
  retailPrice: string | null;
  currency: string | null;
  region: string | null;
  madeIn: string | null;
  materialsText: string | null;
  story: string | null;
  designInspiration: string | null;
  culturalContext: string | null;
  rarityLevel: RarityLevel;
  status: SneakerStatus;
  verificationStatus: VerificationStatus;
  heroImageUrl: string | null;
  cardImageUrl?: string | null;
  officialSourceUrl: string | null;
  createdAt: string;
  updatedAt: string;
  brand: {
    id: string;
    name: string;
    slug: string;
  };
  modelSeries: {
    id: string;
    name: string;
    slug: string;
    family: ModelFamily;
  };
  images?: Array<{
    id: string;
    imageUrl: string | null;
    alt: string;
    source: string | null;
    sourceUrl: string | null;
    copyrightNote: string | null;
    sortOrder: number;
    role?: import("@/lib/photo-policy").PhotoRole;
  }>;
  sources?: Array<{
    id: string;
    title: string;
    url: string;
    sourceType: string;
    reliabilityScore: number | null;
  }>;
  releases?: Array<{
    id: string;
    releaseType: string;
    releaseDate: string | null;
    storeName: string | null;
    storeUrl: string | null;
    country: string | null;
    notes: string | null;
  }>;
  colorPalettes?: Array<{
    id: string;
    name: string | null;
    hex: string;
    sortOrder: number;
  }>;
};

export type ArchiveFilters = {
  q?: string;
  brand?: string;
  model?: string;
  family?: string;
  year?: string;
  madeIn?: string;
  rarity?: string;
  status?: string;
  color?: string;
  verifiedOnly?: boolean;
  sort?: ArchiveSort;
};

export type ArchiveSort =
  | "newest"
  | "oldest"
  | "recently_added"
  | "brand_az"
  | "model_order"
  | "rarity";
