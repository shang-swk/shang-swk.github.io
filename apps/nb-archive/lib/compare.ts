export function normalizeCompareSlugs(value: string | string[] | undefined, available: string[]): string[] {
  const valid = new Set(available);
  const requested = (Array.isArray(value) ? value.join(",") : value ?? "").split(",");
  return [...new Set(requested.map(slug => slug.trim()).filter(slug => valid.has(slug)))].slice(0, 4);
}

export function toggleCompareSlug(current: string[], slug: string): string[] {
  if (current.includes(slug)) return current.filter(item => item !== slug);
  return current.length < 4 ? [...current, slug] : current;
}
