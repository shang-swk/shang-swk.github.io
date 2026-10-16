"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";
import { SneakerVisual } from "@/components/sneaker-visual";
import { Button } from "@/components/ui/button";
import type { ArchiveSneaker } from "@/types/archive";
import { getChineseEditorial } from "@/lib/chinese-editorial";
import { COLOR_FAMILY_LABELS, RARITY_LABELS } from "@/lib/constants";
import { formatReleasePrecision } from "@/lib/evidence";

export function CompareExplorer({ sneakers, initialSlugs }: { sneakers: ArchiveSneaker[]; initialSlugs: string[] }) {
  const [slugs, setSlugs] = useState(initialSlugs);
  const [nextSlug, setNextSlug] = useState("");
  const selected = slugs.map(slug => sneakers.find(item => item.slug === slug)).filter((item): item is ArchiveSneaker => Boolean(item));
  const available = sneakers.filter(item => !slugs.includes(item.slug));
  const rows: Array<[string, (item: ArchiveSneaker) => string]> = [
    ["合作品牌", item => item.brand.name],
    ["鞋型", item => item.modelSeries.name],
    ["发售时间", item => formatReleasePrecision(item)],
    ["货号", item => item.sku ?? "待核实"],
    ["产地", item => item.madeIn ?? "待核实"],
    ["材质", item => item.materialsText ?? "待核实"],
    ["配色", item => item.colorway ?? (item.colorFamily ? COLOR_FAMILY_LABELS[item.colorFamily] : null) ?? "待核实"],
    ["稀有度", item => RARITY_LABELS[item.rarityLevel] ?? "待核实"],
    ["故事摘要", item => getChineseEditorial(item.slug)?.story ?? "中文故事待来源核对与编辑。"]
  ];

  return <div>
    <div className="flex flex-wrap items-end gap-3 border-y border-archive-ink/15 py-5">
      <label className="min-w-0 flex-1 sm:max-w-md"><span className="mb-2 block text-xs uppercase tracking-widest text-archive-graphite">添加鞋款</span><select value={nextSlug} onChange={event => setNextSlug(event.target.value)} disabled={slugs.length >= 4} className="field-select"><option value="">从档案中选择</option>{available.map(item => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></label>
      <Button type="button" variant="red" disabled={!nextSlug || slugs.length >= 4} onClick={() => { setSlugs(current => [...current, nextSlug]); setNextSlug(""); }}><Plus className="h-4 w-4" /> 添加</Button>
      <span className="py-3 text-xs uppercase tracking-widest text-archive-graphite">{slugs.length} / 4 双</span>
    </div>
    {selected.length ? <div className="mt-8 overflow-x-auto border border-archive-ink/10 bg-white">
      <table className="w-full min-w-[690px] border-collapse text-left text-sm"><thead><tr><th scope="col" className="sticky left-0 z-10 w-28 min-w-28 border-b border-r border-archive-ink/10 bg-white p-3 align-bottom text-xs uppercase tracking-widest text-archive-graphite">鞋款</th>{selected.map(item => <th scope="col" key={item.slug} className="min-w-44 border-b border-r border-archive-ink/10 p-3 align-top font-normal last:border-r-0"><div className="aspect-[4/3] bg-archive-mist"><SneakerVisual name={item.name} imageUrl={item.cardImageUrl} fit="contain" className="p-2" /></div><div className="mt-3 flex items-start justify-between gap-2"><Link href={`/sneakers/${item.slug}`} className="font-editorial text-lg leading-tight hover:text-archive-red">{item.name}</Link><button type="button" onClick={() => setSlugs(current => current.filter(slug => slug !== item.slug))} aria-label={`移除 ${item.name}`} title="从对比中移除" className="p-1 text-archive-graphite hover:text-archive-red"><X className="h-4 w-4" /></button></div></th>)}</tr></thead><tbody>{rows.map(([label, value]) => <tr key={label}><th scope="row" className="sticky left-0 z-10 border-b border-r border-archive-ink/10 bg-white p-3 align-top text-xs font-medium uppercase tracking-wide text-archive-graphite">{label}</th>{selected.map(item => <td key={item.slug} className="border-b border-r border-archive-ink/10 p-3 align-top leading-6 text-archive-ink last:border-r-0">{value(item)}</td>)}</tr>)}</tbody></table>
    </div> : <div className="py-20 text-center"><p className="font-editorial text-3xl">选择两双鞋开始对比</p><p className="mt-3 text-sm text-archive-graphite">并排查看鞋型、材质、发售信息与故事。</p><Link href="/archive" className="mt-6 inline-block text-sm text-archive-red underline underline-offset-4">浏览鞋款档案</Link></div>}
    {selected.length === 1 ? <p className="mt-4 text-sm text-archive-graphite">再添加一双，即可完整对比。</p> : null}
  </div>;
}
