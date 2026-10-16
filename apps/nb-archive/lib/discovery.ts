import type { ArchiveSneaker } from "@/types/archive";

type DiscoveryItem = { sneaker: ArchiveSneaker; reason: string };
export type DiscoveryGroup = { id: "brand" | "model" | "color"; title: string; items: DiscoveryItem[] };

export function buildDiscoveryPaths(current: ArchiveSneaker, catalog: ArchiveSneaker[]): DiscoveryGroup[] {
  const used = new Set([current.slug]);
  const candidates = catalog.filter(item => item.slug !== current.slug)
    .sort((a, b) => Number(Boolean(b.cardImageUrl)) - Number(Boolean(a.cardImageUrl)) || (b.releaseYear ?? 0) - (a.releaseYear ?? 0));
  const select = (predicate: (item: ArchiveSneaker) => boolean, reason: (item: ArchiveSneaker) => string): DiscoveryItem[] => {
    const picked = candidates.filter(item => !used.has(item.slug) && predicate(item)).slice(0, 3);
    picked.forEach(item => used.add(item.slug));
    return picked.map(sneaker => ({ sneaker, reason: reason(sneaker) }));
  };
  const groups: DiscoveryGroup[] = [
    { id: "brand", title: `${current.brand.name} 的其他合作`, items: select(item => item.brand.slug === current.brand.slug, item => `同属 ${current.brand.name}，换成 ${item.modelSeries.name} 看品牌语言如何延续。`) },
    { id: "model", title: `同为 ${current.modelSeries.name}`, items: select(item => item.modelSeries.slug === current.modelSeries.slug, item => `鞋型相同，由 ${item.brand.name} 给出另一种材料与配色答案。`) },
    { id: "color", title: "相近配色，换个视角", items: select(item => Boolean(current.colorFamily) && item.colorFamily === current.colorFamily, item => `同属 ${current.colorFamily} 色系，看看 ${item.modelSeries.name} 的比例如何改变观感。`) }
  ];
  return groups.filter(group => group.items.length > 0);
}
