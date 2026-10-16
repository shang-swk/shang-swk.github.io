import type { ArchiveFilters, ArchiveSort } from "@/types/archive";

const keys = ["q", "brand", "model", "family", "year", "madeIn", "rarity", "status", "color"] as const;
const sorts: ArchiveSort[] = ["newest", "oldest", "recently_added", "brand_az", "model_order", "rarity"];

export function normalizeArchivePage(requested: number, resultCount: number, pageSize: number): number {
  const lastPage = Math.max(1, Math.ceil(resultCount / pageSize));
  return Number.isInteger(requested) ? Math.min(Math.max(requested, 1), lastPage) : 1;
}

export function readArchiveLocation(location: string): { filters: ArchiveFilters; page: number } {
  const params = new URL(location, "http://localhost").searchParams;
  const filters: ArchiveFilters = { sort: sorts.includes(params.get("sort") as ArchiveSort) ? params.get("sort") as ArchiveSort : "newest" };
  for (const key of keys) {
    const value = params.get(key);
    if (value) filters[key] = value;
  }
  if (params.get("verifiedOnly") === "1") filters.verifiedOnly = true;
  const value = Number(params.get("page"));
  return { filters, page: Number.isInteger(value) && value > 0 ? value : 1 };
}

export function writeArchiveLocation(path: string, filters: ArchiveFilters, page: number): string {
  const params = new URLSearchParams();
  for (const key of keys) if (filters[key]) params.set(key, filters[key]);
  if (filters.verifiedOnly) params.set("verifiedOnly", "1");
  if (filters.sort && filters.sort !== "newest") params.set("sort", filters.sort);
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return `${path}${query ? `?${query}` : ""}`;
}
