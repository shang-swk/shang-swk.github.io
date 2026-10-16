import { COLOR_FAMILY_LABELS, MODEL_ORDER, RARITY_LABELS, STATUS_LABELS } from "@/lib/constants";
import type { ArchiveFilters, ArchiveSneaker } from "@/types/archive";

const rarityRank: Record<string, number> = {
  friends_and_family: 0,
  sample: 1,
  very_limited: 2,
  limited: 3,
  general: 4,
  unknown: 5
};

export function filterAndSortSneakers(
  sneakers: ArchiveSneaker[],
  filters: ArchiveFilters
): ArchiveSneaker[] {
  const query = normalize(filters.q).split(/\s+/).filter(Boolean);

  const filtered = sneakers.filter((sneaker) => {
    if (query.length && !matchesQuery(searchText(sneaker), query)) return false;
    if (filters.brand && sneaker.brand.slug !== filters.brand) return false;
    if (filters.model && sneaker.modelSeries.slug !== filters.model) return false;
    if (filters.family && sneaker.modelSeries.family !== filters.family) return false;
    if (filters.year && String(sneaker.releaseYear ?? "") !== filters.year) return false;
    if (filters.madeIn && normalize(sneaker.madeIn) !== normalize(filters.madeIn)) return false;
    if (filters.rarity && sneaker.rarityLevel !== filters.rarity) return false;
    if (filters.status && sneaker.status !== filters.status) return false;
    if (filters.color && normalize(sneaker.colorFamily) !== normalize(filters.color)) return false;
    if (filters.verifiedOnly && !["verified", "published"].includes(sneaker.verificationStatus)) {
      return false;
    }
    return true;
  });

  return [...filtered].sort((a, b) => compareSneakers(a, b, filters.sort ?? "newest"));
}

export function getArchiveFacets(sneakers: ArchiveSneaker[]) {
  return {
    brands: uniqueBy(
      sneakers.map((item) => ({ label: item.brand.name, value: item.brand.slug })),
      "value"
    ),
    models: uniqueBy(
      sneakers.map((item) => ({ label: item.modelSeries.name, value: item.modelSeries.slug })),
      "value"
    ),
    families: uniqueBy(
      sneakers.map((item) => ({ label: item.modelSeries.family === "ONE_THOUSAND" ? "1000" : "99X", value: item.modelSeries.family })),
      "value"
    ),
    years: uniqueBy(
      sneakers
        .filter((item) => item.releaseYear)
        .map((item) => ({ label: String(item.releaseYear), value: String(item.releaseYear) })),
      "value"
    ).sort((a, b) => Number(b.value) - Number(a.value)),
    madeIn: uniqueBy(
      sneakers.filter((item) => item.madeIn).map((item) => ({ label: String(item.madeIn), value: String(item.madeIn) })),
      "value"
    ),
    rarities: uniqueBy(
      sneakers.map((item) => ({ label: RARITY_LABELS[item.rarityLevel] ?? item.rarityLevel, value: item.rarityLevel })),
      "value"
    ),
    statuses: uniqueBy(
      sneakers.map((item) => ({ label: STATUS_LABELS[item.status] ?? item.status, value: item.status })),
      "value"
    ),
    colors: uniqueBy(
      sneakers.filter((item) => item.colorFamily).map((item) => ({ label: COLOR_FAMILY_LABELS[String(item.colorFamily)] ?? String(item.colorFamily), value: String(item.colorFamily) })),
      "value"
    )
  };
}

function compareSneakers(a: ArchiveSneaker, b: ArchiveSneaker, sort: string) {
  if (sort === "oldest") return dateValue(a.releaseDate) - dateValue(b.releaseDate);
  if (sort === "recently_added") return dateValue(b.createdAt) - dateValue(a.createdAt);
  if (sort === "brand_az") return a.brand.name.localeCompare(b.brand.name) || a.name.localeCompare(b.name);
  if (sort === "model_order") {
    return (
      (MODEL_ORDER.get(a.modelSeries.name) ?? 999) -
        (MODEL_ORDER.get(b.modelSeries.name) ?? 999) || a.name.localeCompare(b.name)
    );
  }
  if (sort === "rarity") return (rarityRank[a.rarityLevel] ?? 999) - (rarityRank[b.rarityLevel] ?? 999);
  return dateValue(b.releaseDate) - dateValue(a.releaseDate);
}

function searchText(sneaker: ArchiveSneaker) {
  return normalize(
    [
      sneaker.name,
      sneaker.brand.name,
      acronym(sneaker.brand.name),
      sneaker.modelSeries.name,
      sneaker.sku,
      sneaker.nickname,
      sneaker.colorway,
      sneaker.madeIn,
      sneaker.story
    ].join(" ")
  );
}

function normalize(value?: string | null) {
  return (value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function matchesQuery(haystack: string, terms: string[]) {
  const words = haystack.split(/\s+/);
  return terms.every(term => haystack.includes(term) || (term.length >= 4 && words.some(word => oneEditApart(term, word))));
}

function oneEditApart(left: string, right: string) {
  if (Math.abs(left.length - right.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (left.length >= right.length) i++;
    if (right.length >= left.length) j++;
  }
  return edits + (left.length - i) + (right.length - j) <= 1;
}

function acronym(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("");
}

function dateValue(value?: string | null) {
  return value ? new Date(value).getTime() : 0;
}

function uniqueBy<T extends Record<string, string>>(items: T[], key: keyof T) {
  const seen = new Set<string>();
  return items.filter((item) => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}
