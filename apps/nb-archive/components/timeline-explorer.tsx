"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import type { ArchiveSneaker } from "@/types/archive";
import { filterAndSortSneakers, getArchiveFacets } from "@/lib/search";
import { SneakerVisual } from "@/components/sneaker-visual";

export function TimelineExplorer({ sneakers }: { sneakers: ArchiveSneaker[] }) {
  const search = useSearchParams();
  const params = { brand: search.get("brand") ?? "", model: search.get("model") ?? "" };
  const facets = getArchiveFacets(sneakers);
  const filtered = filterAndSortSneakers(sneakers, {
    brand: params?.brand,
    model: params?.model,
    sort: "newest"
  });
  const grouped = groupByYear(filtered);

  return (
    <div className="site-container py-12">
      <Breadcrumb items={[{ label: "时间线" }]} />
      <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_.7fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-archive-red">按年份浏览</p>
          <h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight sm:text-6xl">联名时间线</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-archive-graphite">
            用年份锚点穿过档案。日期证据不足的条目只标年份。
          </p>
        </div>
        <form className="grid gap-3 self-end sm:grid-cols-2">
          <select name="brand" defaultValue={params?.brand ?? ""} className="h-10 rounded-md border border-archive-ink/15 bg-white/70 px-3 text-sm">
            <option value="">全部品牌</option>
            {facets.brands.map((brand) => (
              <option key={brand.value} value={brand.value}>{brand.label}</option>
            ))}
          </select>
          <select name="model" defaultValue={params?.model ?? ""} className="h-10 rounded-md border border-archive-ink/15 bg-white/70 px-3 text-sm">
            <option value="">全部鞋型</option>
            {facets.models.map((model) => (
              <option key={model.value} value={model.value}>{model.label}</option>
            ))}
          </select>
          <button className="rounded-md bg-archive-ink px-4 py-2 text-sm font-medium text-white sm:col-span-2">应用筛选</button>
        </form>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {grouped.map(([year]) => (
          <a key={year} href={`#year-${year}`} className="rounded-full border border-archive-ink/10 bg-white/40 px-3 py-1 text-sm hover:border-archive-red">
            {year}
          </a>
        ))}
      </div>

      <div className="space-y-10">
        {grouped.map(([year, items]) => (
          <section key={year} id={`year-${year}`} className="scroll-mt-24 border-t border-archive-ink/10 pt-8">
            <div className="grid gap-6 md:grid-cols-[160px_1fr]">
              <h2 className="font-editorial text-5xl">{year}</h2>
              <div className="grid gap-3">
                {items.map((sneaker) => (
                  <Link key={sneaker.id} href={`/sneakers/${sneaker.slug}`} className="grid grid-cols-[76px_1fr] items-center gap-3 border-b border-archive-ink/10 py-3 transition hover:text-archive-red sm:grid-cols-[88px_1fr_120px]">
                    <div className="aspect-[4/3] bg-white"><SneakerVisual name={sneaker.name} imageUrl={sneaker.cardImageUrl} /></div>
                    <div>
                      <p className="font-medium">{sneaker.name}</p>
                      <p className="mt-1 text-sm text-archive-graphite">{sneaker.brand.name} / {sneaker.modelSeries.name}</p>
                    </div>
                    <p className="col-start-2 text-xs text-archive-graphite sm:col-start-auto sm:text-right">{sneaker.sku ?? "货号待核实"}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function groupByYear<T extends { releaseYear: number | null }>(items: T[]) {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const year = String(item.releaseYear ?? "TBC");
    groups.set(year, [...(groups.get(year) ?? []), item]);
  }
  return [...groups.entries()].sort(([a], [b]) => (Number(b) || 0) - (Number(a) || 0));
}
