import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SneakerVisual } from "@/components/sneaker-visual";
import { starterModels } from "@/lib/editorial";
import { modelGuides, originalGreyReferences } from "@/lib/model-guides";
import { getArchiveSneakers } from "@/lib/sneakers";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = { title: "从这里开始：看懂 990、991、992 与 993", description: "用元祖灰的轮廓认识 New Balance 9XX 各代，再进入代表联名。", alternates: { canonical: "/start" } };
export const dynamic = "force-static";

export default async function StartPage() {
  const catalog = await getArchiveSneakers();
  const bySlug = new Map(catalog.map(item => [item.slug, item]));
  const greys = new Map(originalGreyReferences.map(item => [item.model, item]));
  return <div className="site-container py-10">
    <Breadcrumb items={[{ label: "从这里开始" }]} />
    <header className="max-w-4xl border-b border-archive-ink/15 pb-10 pt-4">
      <p className="text-xs font-semibold text-archive-red">型号入门 / THE 9XX FIELD GUIDE</p>
      <h1 className="mt-4 font-sans text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">先认轮廓，再看联名</h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-archive-graphite">990 六代并不是六种配色。先用普通灰色版本认清鞋身比例、侧面结构和鞋底，再看合作方如何重写同一个鞋型。</p>
    </header>
    <div className="grid border-l border-t border-archive-ink/15 sm:grid-cols-2 lg:grid-cols-3">
      {starterModels.map((entry, index) => {
        const grey = greys.get(entry.model);
        const representative = bySlug.get(entry.representativeSlug);
        const guide = modelGuides[entry.model];
        return <article key={entry.model} className="min-w-0 border-b border-r border-archive-ink/15 p-4 sm:p-6">
          <p className="text-[11px] font-medium text-archive-red">{String(index + 1).padStart(2, "0")} / {entry.model.startsWith("990") ? "990 世代" : "独立型号"}</p>
          <div className="mt-4 aspect-[4/3] bg-white"><SneakerVisual name={`New Balance ${entry.model} 元祖灰参考鞋`} imageUrl={grey?.imageUrl} /></div>
          <div className="mt-5 flex items-baseline justify-between gap-2"><h2 className="font-editorial text-3xl">{entry.model}</h2><span className="text-[11px] text-archive-graphite">{grey?.sku ?? "灰色参考待补"}</span></div>
          <p className="mt-2 min-h-20 text-sm leading-7 text-archive-graphite">{entry.visualCue}</p>
          <div className="mt-5 border-t border-archive-ink/15 pt-4"><p className="text-[11px] font-semibold text-archive-red">代表联名</p>{representative ? <Link href={`/sneakers/${representative.slug}`} className="mt-2 flex items-start justify-between gap-2 text-sm font-medium leading-6 hover:text-archive-red"><span>{representative.name}</span><ArrowUpRight className="mt-1 h-4 w-4 shrink-0" /></Link> : <p className="mt-2 text-sm text-archive-graphite">仍在核对</p>}</div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs"><Link href={`/models/${slugify(entry.model)}`} className="text-archive-red hover:underline">看全部 {entry.model} 联名</Link>{guide ? <a href={guide.sourceUrl} target="_blank" rel="noreferrer" className="text-archive-graphite hover:underline">型号资料来源 ↗</a> : null}</div>
        </article>;
      })}
    </div>
    <p className="mt-5 text-xs leading-6 text-archive-graphite">灰色鞋图是后来的普通版本或复刻，仅作轮廓对照，不计入联名总数；具体产品来源见各型号链接。</p>
  </div>;
}
