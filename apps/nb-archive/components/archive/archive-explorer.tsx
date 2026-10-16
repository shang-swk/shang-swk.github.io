"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Grid2X2, Grid3X3, Scale, SlidersHorizontal, X } from "lucide-react";
import { EmptyState } from "@/components/archive/empty-state";
import { Button } from "@/components/ui/button";
import { SneakerCard } from "@/components/sneaker-card";
import { filterAndSortSneakers, getArchiveFacets } from "@/lib/search";
import { toggleCompareSlug } from "@/lib/compare";
import { COLOR_FAMILY_LABELS, RARITY_LABELS, STATUS_LABELS } from "@/lib/constants";
import { normalizeArchivePage, readArchiveLocation, writeArchiveLocation } from "@/lib/archive-navigation";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { ArchiveFilters, ArchiveSneaker, ArchiveSort } from "@/types/archive";

const sortOptions: Array<{ label: string; value: ArchiveSort }> = [
  { label: "最新发售", value: "newest" },
  { label: "最早发售", value: "oldest" },
  { label: "最近收录", value: "recently_added" },
  { label: "品牌 A–Z", value: "brand_az" },
  { label: "鞋型顺序", value: "model_order" },
  { label: "稀有度", value: "rarity" }
];
const filterLabels: Record<string, string> = { q: "搜索", brand: "品牌", model: "型号", family: "系列", year: "年份", madeIn: "产地", rarity: "稀有度", status: "状态", color: "配色", verifiedOnly: "核实状态" };

export function ArchiveExplorer({ sneakers }: { sneakers: ArchiveSneaker[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const { filters, page: requestedPage } = readArchiveLocation(`/archive${query ? `?${query}` : ""}`);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);
  useEffect(() => {
    const saved = sessionStorage.getItem("nb-archive-return");
    if (saved) {
      try {
        const position = JSON.parse(saved) as { url: string; y: number; restore?: boolean };
        if (position.restore && position.url === window.location.pathname + window.location.search) {
          requestAnimationFrame(() => setTimeout(() => window.scrollTo(0, position.y), 150));
          sessionStorage.setItem("nb-archive-return", JSON.stringify({ ...position, restore: false }));
        }
      } catch { sessionStorage.removeItem("nb-archive-return"); }
    }
  }, []);
  const facets = useMemo(() => getArchiveFacets(sneakers), [sneakers]);
  const results = filterAndSortSneakers(sneakers, filters);
  const pageSize = 24;
  const pageCount = Math.max(1, Math.ceil(results.length / pageSize));
  const page = normalizeArchivePage(requestedPage, results.length, pageSize);
  const visible = results.slice((page - 1) * pageSize, page * pageSize);
  const activeFilters = Object.entries(filters).filter(([key, value]) => key !== "sort" && Boolean(value));
  const displayFilterValue = (key: string, value: string | boolean) => key === "verifiedOnly" ? "已核实" : key === "color" ? COLOR_FAMILY_LABELS[String(value)] ?? String(value) : key === "rarity" ? RARITY_LABELS[String(value)] ?? String(value) : key === "status" ? STATUS_LABELS[String(value)] ?? String(value) : key === "brand" ? facets.brands.find(option => option.value === value)?.label ?? String(value) : String(value);
  useEffect(() => {
    if (!drawerOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
      if (event.key !== "Tab") return;
      const controls = drawerRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), input, select, a[href]');
      if (!controls?.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", close);
    return () => { window.removeEventListener("keydown", close); document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, [drawerOpen]);
  const stats = useMemo(
    () => ({
      total: sneakers.length,
      imageLeads: sneakers.filter((sneaker) => sneaker.heroImageUrl).length,
      verified: sneakers.filter((sneaker) => ["verified", "published"].includes(sneaker.verificationStatus)).length,
      needsReview: sneakers.filter((sneaker) => !["verified", "published"].includes(sneaker.verificationStatus)).length
    }),
    [sneakers]
  );

  const update = (key: keyof ArchiveFilters, value: string | boolean) => {
    navigate({ ...filters, [key]: value || undefined }, 1, key === "q" ? "replace" : "push");
  };
  const navigate = (nextFilters: ArchiveFilters, nextPage: number, mode: "replace" | "push" = "push") => {
    const url = writeArchiveLocation("/archive", nextFilters, nextPage);
    if (url === window.location.pathname + window.location.search) return;
    router[mode](url, { scroll: false });
  };

  const filterPanel = (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.22em]">筛选</p>
        <Button variant="ghost" size="sm" onClick={() => navigate({ sort: "newest" }, 1)}>
          <X className="h-4 w-4" />
          清空
        </Button>
      </div>
      <input
        value={filters.q ?? ""}
        onChange={(event) => update("q", event.target.value)}
        aria-label="搜索品牌、型号、货号"
        placeholder="品牌 / 型号 / 货号"
        className="h-11 w-full rounded-sm border border-archive-ink/15 bg-white px-3 text-sm outline-none focus:border-archive-red"
      />
      <Select label="品牌" value={filters.brand} options={facets.brands} onChange={(value) => update("brand", value)} />
      <Select label="型号" value={filters.model} options={facets.models} onChange={(value) => update("model", value)} />
      <Select label="系列" value={filters.family} options={facets.families} onChange={(value) => update("family", value)} />
      <Select label="年份" value={filters.year} options={facets.years} onChange={(value) => update("year", value)} />
      <Select label="产地" value={filters.madeIn} options={facets.madeIn} onChange={(value) => update("madeIn", value)} />
      {facets.rarities.some(option => option.value !== "unknown") ? <Select label="稀有度" value={filters.rarity} options={facets.rarities} onChange={(value) => update("rarity", value)} /> : null}
      {facets.statuses.length > 1 ? <Select label="状态" value={filters.status} options={facets.statuses} onChange={(value) => update("status", value)} /> : null}
      <Select label="配色" value={filters.color} options={facets.colors} onChange={(value) => update("color", value)} />
      <label className="flex items-center gap-3 rounded-sm border border-archive-ink/10 bg-white/45 px-3 py-3 text-sm">
        <input
          type="checkbox"
          checked={Boolean(filters.verifiedOnly)}
          onChange={(event) => update("verifiedOnly", event.target.checked)}
          className="h-4 w-4 accent-archive-red"
        />
        仅看已核实
      </label>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="hidden lg:block">
        <div className="sticky top-28 max-h-[calc(100svh-8rem)] overflow-y-auto border-r border-archive-ink/10 pr-5">
          {filterPanel}
        </div>
      </aside>

      <div>
        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-b border-archive-ink/10 pb-4 text-xs text-archive-graphite">
          <span><strong className="text-archive-ink">{stats.total}</strong> 双收录</span>
          <span><strong className="text-archive-ink">{stats.imageLeads}</strong> 双有图</span>
          <span><strong className="text-archive-ink">{stats.verified}</strong> 双已核实</span>
          <span><strong className="text-archive-ink">{stats.needsReview}</strong> 双待核对</span>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Button variant="outline" className="lg:hidden" onClick={() => setDrawerOpen(true)}>
            <SlidersHorizontal className="h-4 w-4" />
            筛选{activeFilters.length ? ` (${activeFilters.length})` : ""}
          </Button>
          <p className="text-sm text-archive-graphite">{results.length} 双结果</p>
          <div className="ml-auto flex items-center border border-archive-ink/15 bg-white" role="group" aria-label="网格密度">
            <button type="button" onClick={() => setDensity("comfortable")} aria-label="标准网格" aria-pressed={density === "comfortable"} title="标准网格" className={`flex h-10 w-10 items-center justify-center ${density === "comfortable" ? "bg-archive-ink text-white" : "text-archive-graphite hover:text-archive-ink"}`}><Grid2X2 className="h-4 w-4" /></button>
            <button type="button" onClick={() => setDensity("compact")} aria-label="紧凑网格" aria-pressed={density === "compact"} title="紧凑网格" className={`flex h-10 w-10 items-center justify-center ${density === "compact" ? "bg-archive-ink text-white" : "text-archive-graphite hover:text-archive-ink"}`}><Grid3X3 className="h-4 w-4" /></button>
          </div>
          <select
            aria-label="鞋款排序"
            value={filters.sort ?? "newest"}
            onChange={(event) => update("sort", event.target.value)}
            className="h-10 rounded-sm border border-archive-ink/15 bg-white px-3 text-sm outline-none"
          >
            {sortOptions.filter(option => option.value !== "rarity" || facets.rarities.some(facet => facet.value !== "unknown")).map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {activeFilters.length ? <div className="mb-5 flex flex-wrap gap-2" aria-label="已选筛选条件">{activeFilters.map(([key, value]) => <button key={key} type="button" onClick={() => update(key as keyof ArchiveFilters, key === "verifiedOnly" ? false : "")} className="inline-flex items-center gap-1 border border-archive-ink/20 bg-white px-2 py-1 text-xs hover:border-archive-red">{filterLabels[key]}：{displayFilterValue(key, value)} <X className="h-3 w-3" /></button>)}<button type="button" onClick={() => navigate({ sort: "newest" }, 1)} className="px-2 py-1 text-xs text-archive-red underline">全部清空</button></div> : null}
        {results.length ? (
          <div className={density === "compact" ? "grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4" : "grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-3"}>
            {visible.map((sneaker) => (
              <SneakerCard key={sneaker.id} sneaker={sneaker} compact={density === "compact"} selected={compareSlugs.includes(sneaker.slug)} onCompareToggle={() => setCompareSlugs(current => toggleCompareSlug(current, sneaker.slug))} onOpen={() => sessionStorage.setItem("nb-archive-return", JSON.stringify({ url: window.location.pathname + window.location.search, y: window.scrollY, restore: true, slug: sneaker.slug }))} />
            ))}
          </div>
        ) : (
          <EmptyState onClear={() => navigate({ sort: "newest" }, 1)} />
        )}
        {results.length > pageSize ? <nav aria-label="档案页码" className="mt-8 flex items-center justify-between border-t border-archive-ink/10 pt-5">
          <Button variant="outline" size="sm" disabled={page === 1} onClick={() => { navigate(filters, page - 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}><ChevronLeft className="h-4 w-4" /> 上一页</Button>
          <span className="text-sm text-archive-graphite">{page} / {pageCount}</span>
          <Button variant="outline" size="sm" disabled={page === pageCount} onClick={() => { navigate(filters, page + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>下一页 <ChevronRight className="h-4 w-4" /></Button>
        </nav> : null}
      </div>

      {compareSlugs.length ? <div className="fixed bottom-3 left-3 right-3 z-40 mx-auto flex max-w-xl items-center gap-3 border border-archive-ink/20 bg-archive-ink px-4 py-3 text-white shadow-lg sm:bottom-6 sm:left-auto sm:right-6"><Scale className="h-4 w-4 shrink-0 text-red-300" /><span className="flex-1 text-sm">已选 {compareSlugs.length} / 4 双</span><button type="button" onClick={() => setCompareSlugs([])} className="text-xs text-white/70 underline underline-offset-4">清空</button>{compareSlugs.length >= 2 ? <Link href={`/compare?shoes=${encodeURIComponent(compareSlugs.join(","))}`} className="bg-white px-4 py-2 text-sm font-medium text-archive-ink hover:bg-red-100">开始对比</Link> : <span className="px-2 text-xs text-white/60">至少选 2 双</span>}</div> : null}

      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="关闭筛选"
            className="absolute inset-0 bg-archive-ink/45"
            onClick={() => setDrawerOpen(false)}
          />
          <div ref={drawerRef} role="dialog" aria-modal="true" aria-label="筛选档案" className="absolute bottom-0 left-0 right-0 flex max-h-[88svh] flex-col overflow-hidden rounded-t-xl bg-archive-paper p-5 shadow-editorial">
            <div className="mb-4 flex shrink-0 items-center justify-between"><span className="text-sm font-medium">筛选档案</span><button onClick={() => setDrawerOpen(false)} aria-label="关闭筛选" className="p-2"><X className="h-5 w-5" /></button></div>
            <div className="min-h-0 overflow-y-auto overscroll-contain pr-1">{filterPanel}</div>
            <Button variant="red" className="mt-5 w-full shrink-0" onClick={() => setDrawerOpen(false)}>查看 {results.length} 双鞋</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value?: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-archive-graphite">{label}</span>
      <select
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 w-full rounded-sm border border-archive-ink/15 bg-white px-3 text-sm outline-none focus:border-archive-red"
      >
        <option value="">全部</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
