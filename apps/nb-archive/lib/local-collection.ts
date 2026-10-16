import { z } from "zod";
import { canonicalSneakerSlug } from "./sneaker-aliases";

export const collectionStorageKey = "nb-archive-collection-v1";

const collectionItemSchema = z.object({
  sneakerSlug: z.string().min(1),
  status: z.enum(["owned", "wanted", "sold", "watching"]),
  size: z.string().max(32),
  condition: z.string().max(60).optional(),
  purchasePrice: z.string().regex(/^(?:\d+(?:\.\d{1,2})?)?$/).optional(),
  currency: z.string().max(8).optional(),
  purchaseDate: z.string().regex(/^(?:\d{4}-\d{2}-\d{2})?$/).optional(),
  notes: z.string().max(500),
  updatedAt: z.string()
});

export type LocalCollectionItem = z.infer<typeof collectionItemSchema>;
export type CollectionItemInput = Omit<LocalCollectionItem, "updatedAt">;

export function parseCollection(raw: string | null): LocalCollectionItem[] {
  if (!raw) return [];
  try {
    const parsed = z.array(collectionItemSchema).parse(JSON.parse(raw));
    const bySlug = new Map<string, LocalCollectionItem>();
    for (const item of parsed) {
      const sneakerSlug = canonicalSneakerSlug(item.sneakerSlug);
      const existing = bySlug.get(sneakerSlug);
      if (!existing || item.updatedAt > existing.updatedAt) bySlug.set(sneakerSlug, { ...item, sneakerSlug });
    }
    return [...bySlug.values()].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  } catch {
    return [];
  }
}

export function upsertCollectionItem(items: LocalCollectionItem[], input: CollectionItemInput): LocalCollectionItem[] {
  const item = collectionItemSchema.parse({ ...input, updatedAt: new Date().toISOString() });
  return [item, ...items.filter(existing => existing.sneakerSlug !== item.sneakerSlug)];
}

export function removeCollectionItem(items: LocalCollectionItem[], sneakerSlug: string): LocalCollectionItem[] {
  return items.filter(item => item.sneakerSlug !== sneakerSlug);
}
