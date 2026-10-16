import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { OriginalGreyCard } from "@/components/model/original-grey-card";
import { modelGuides, originalGreyReferences } from "@/lib/model-guides";
import { newBalanceHistory, type HistoryEvent } from "@/lib/nb-history";
import { modelReleaseYears } from "@/lib/archive-catalog";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "New Balance 9XX 与 1000 元年史",
  description: "按年份认识 New Balance 9XX 与 1000 的历代鞋型、经典灰色普通款和重要联名。"
};

const scopeLabels: Record<HistoryEvent["scope"], string> = {
  brand: "品牌历史",
  "99x": "9XX 鞋型",
  "1000": "1000 系列",
  collaboration: "联名记录"
};

export default function HistoryPage() {
  const models = Object.entries(modelGuides);
  return (
    <div className="site-container py-10">
      <Breadcrumb items={[{ label: "元年史" }]} />
      <header className="max-w-4xl border-b border-archive-ink/15 pb-12 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-archive-red">1906 — 2026 / 持续更新</p>
        <h1 className="mt-4 font-sans text-4xl font-semibold leading-[1.2] tracking-tight sm:text-6xl">从初代 990，到今天的联名</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-archive-graphite">每个型号是哪年出现的？经典灰长什么样？联名又从什么时候热闹起来？这页把几条线分开讲，每段都附了资料出处。</p>
      </header>
      <section id="990v7-preview" className="scroll-mt-24 border-b border-archive-ink/15 bg-archive-ink px-5 py-10 text-white sm:px-9 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_240px] md:items-end">
          <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-300">下一代 / 官方预告</p><h2 className="mt-3 font-sans text-4xl font-semibold tracking-tight sm:text-6xl">990v7</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-white/75">New Balance 日本宣布，990v7 将于 2026 年 10 月 9 至 12 日在东京首次公开展出。目前还没有正式发售日期、货号或联名消息。网传照片可以看看，但在官方公布产品图前，我们不会把它当作确定版本。</p></div>
          <div className="border-t border-white/30 pt-4 text-xs leading-6 text-white/70"><p className="uppercase tracking-widest text-white">目前已知</p><p>首次展出：2026 年 10 月 9—12 日，东京</p><p>正式发售：未公布</p><p>联名计划：未公布</p><a href="https://company.newbalance.jp/press/2026/p-73643" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-white underline underline-offset-4">查看官方公告 <ArrowUpRight className="h-3 w-3" /></a></div>
        </div>
      </section>
      <section id="original-grey" className="scroll-mt-24 border-b border-archive-ink/15 py-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-archive-red">灰色，从这里看起</p>
          <h2 className="mt-2 font-editorial text-4xl sm:text-5xl">先看看没有联名的它们</h2>
          <p className="mt-4 text-sm leading-7 text-archive-graphite">这些是有出处的灰色普通款或复刻，方便对照鞋型，不计入联名数量。图中的新货号也不代表它就是当年的元年实物。</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {originalGreyReferences.map(reference => <OriginalGreyCard key={reference.model} reference={reference} />)}
        </div>
      </section>
      <section id="model-lineage" className="scroll-mt-24 py-12">
        <div className="mb-7 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-archive-red">鞋型脉络 / {models.length} 个型号</p>
          <h2 className="mt-2 font-editorial text-4xl sm:text-5xl">每一代有什么不同</h2>
        </div>
        <div className="border-t border-archive-ink/15">
          {models.map(([name, guide]) => <article key={name} className="grid gap-4 border-b border-archive-ink/15 py-6 md:grid-cols-[120px_1fr_180px] md:gap-8">
            <div><Link href={`/models/${slugify(name)}`} className="font-editorial text-3xl hover:text-archive-red">{name}</Link><p className="mt-1 text-xs text-archive-graphite">{modelReleaseYears[name] ?? "年份待核对"}</p></div>
            <div><p className="text-sm leading-7 text-archive-ink">{guide.history}</p><p className="mt-2 text-xs leading-6 text-archive-graphite">{guide.features}</p></div>
            <a href={guide.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex h-fit items-center gap-1 text-xs text-archive-red">型号资料 <ArrowUpRight className="h-3.5 w-3.5" /></a>
          </article>)}
        </div>
      </section>
      <section className="border-t border-archive-ink/15 pt-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-archive-red">按年份往下看</p>
        <h2 className="mt-2 font-editorial text-4xl sm:text-5xl">这些年发生了什么</h2>
      </section>
      <div className="sticky top-16 z-20 -mx-4 flex gap-3 overflow-x-auto border-b border-archive-ink/10 bg-archive-paper/95 px-4 py-3 backdrop-blur sm:mx-0 sm:px-0">
        {[...new Set(newBalanceHistory.map(event => event.year))].map(year => <a key={year} href={`#year-${year}`} className="shrink-0 text-xs font-semibold text-archive-graphite hover:text-archive-red">{year}</a>)}
      </div>
      <div className="mt-5">
        {newBalanceHistory.map((event, index) => {
          return <article key={`${event.year}-${event.title}`} id={index === 0 || newBalanceHistory[index - 1]?.year !== event.year ? `year-${event.year}` : undefined} className="scroll-mt-32 grid gap-6 border-b border-archive-ink/10 py-8 md:grid-cols-[150px_1fr] md:gap-10">
            <p className="font-editorial text-4xl leading-none text-archive-red">{event.year}</p>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-archive-graphite">{scopeLabels[event.scope]}</p>
              <h2 className="mt-2 font-editorial text-2xl sm:text-3xl">{event.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-archive-graphite">{event.body}</p>
              <a href={event.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-archive-red">查看出处 <ArrowUpRight className="h-3.5 w-3.5" /></a>
            </div>
          </article>;
        })}
      </div>
      <div className="mt-10 flex flex-wrap gap-4 text-sm"><Link href="/timeline" className="inline-flex items-center gap-2 text-archive-red">按年份看联名 <ArrowUpRight className="h-4 w-4" /></Link><Link href="/models" className="inline-flex items-center gap-2">浏览所有鞋型 <ArrowUpRight className="h-4 w-4" /></Link></div>
    </div>
  );
}
