const aliases: Record<string, string> = {
  "concepts-x-new-balance-990v4-patina-pumpernickel-dark-olivine": "concepts-x-new-balance-990v4-patina"
};

export function canonicalSneakerSlug(slug: string): string {
  return aliases[slug] ?? slug;
}
