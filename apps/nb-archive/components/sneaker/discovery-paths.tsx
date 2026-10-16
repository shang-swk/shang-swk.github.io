import { SneakerCard } from "@/components/sneaker-card";
import type { DiscoveryGroup } from "@/lib/discovery";

export function DiscoveryPaths({ groups }: { groups: DiscoveryGroup[] }) {
  if (!groups.length) return null;
  return <section className="mx-auto max-w-7xl space-y-12 px-4 pb-16 sm:px-6 lg:px-8">
    <div className="border-t border-archive-ink/15 pt-10"><p className="text-xs font-semibold text-archive-red">继续探索</p><h2 className="mt-2 font-editorial text-4xl">下一双，从这里看起</h2></div>
    {groups.map(group => <div key={group.id}><h3 className="mb-5 font-editorial text-2xl sm:text-3xl">{group.title}</h3><div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-5 lg:grid-cols-3">{group.items.map(({ sneaker, reason }) => <div key={sneaker.slug}><SneakerCard sneaker={sneaker} compact /><p className="mt-3 border-l-2 border-archive-red pl-3 text-xs leading-6 text-archive-graphite">{reason}</p></div>)}</div></div>)}
  </section>;
}
