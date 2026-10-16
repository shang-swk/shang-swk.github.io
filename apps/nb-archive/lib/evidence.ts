import type { ArchiveSneaker } from "@/types/archive";

export type FactField = "releaseDate" | "sku" | "story";

const evidence: Record<string, Partial<Record<FactField, string>>> = {
  "kith-x-new-balance-992-osaka": {
    releaseDate: "https://kith.com/blogs/discover/kith-new-balance-osaka",
    sku: "https://www.goat.com/en-au/sneakers/kith-x-992-made-in-usa-osaka-pack-00011-10000kx9miu",
    story: "https://kith.com/blogs/discover/kith-new-balance-osaka"
  },
  "kith-x-new-balance-991v2-osaka": {
    releaseDate: "https://kith.com/blogs/discover/kith-new-balance-osaka",
    sku: "https://www.goat.com/sneakers/kith-x-991v2-made-in-england-osaka-pack-00011-10000kx9mie",
    story: "https://kith.com/blogs/discover/kith-new-balance-osaka"
  },
  "aime-leon-dore-x-new-balance-1000-grey": {
    sku: "https://www.goat.com/sneakers/aime-leon-dore-x-1000-grey-m1000al1",
    story: "https://www.aimeleondore.com/blogs/news/aime-leon-dore-and-new-balance-1000"
  },
  "concepts-x-new-balance-990v4-patina": {
    releaseDate: "https://cncpts.com/blogs/news/the-cncpts-x-new-balance-990v4-patina",
    sku: "https://cncpts.com/products/new-balance-concepts-x-made-in-usa-990v4-pumpernickel-dark-olivine",
    story: "https://cncpts.com/blogs/news/the-cncpts-x-new-balance-990v4-patina"
  },
  "patta-x-new-balance-990v3-keep-your-family-close": {
    releaseDate: "https://patta.nl/blogs/news/patta-x-new-balance-990v3",
    story: "https://patta.nl/blogs/news/patta-x-new-balance-990v3"
  }
};

export function factEvidence(sneaker: ArchiveSneaker, field: FactField): string | null {
  const url = evidence[sneaker.slug]?.[field];
  return url && sneaker.sources?.some(source => source.url === url) ? url : null;
}

export function formatReleasePrecision(sneaker: Pick<ArchiveSneaker, "releaseDate" | "releaseYear">): string {
  const day = sneaker.releaseDate?.slice(0, 10);
  if (day && /^\d{4}-\d{2}-\d{2}$/.test(day)) {
    const [year, month, date] = day.split("-").map(Number);
    return `${year} 年 ${month} 月 ${date} 日`;
  }
  return sneaker.releaseYear ? `${sneaker.releaseYear} 年` : "日期待核实";
}
