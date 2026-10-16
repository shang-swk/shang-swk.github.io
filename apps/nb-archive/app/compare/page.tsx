import { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { StaticCompareExplorer } from "@/components/compare/static-compare-explorer";
import { getArchiveSneakers } from "@/lib/sneakers";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "鞋款对比", description: "并排比较 2–4 双 New Balance 9XX 与 1000 联名鞋款。" };

export default async function ComparePage() {
  const sneakers = await getArchiveSneakers();
  return <main className="site-container py-10"><Breadcrumb items={[{ label: "鞋款对比" }]} /><header className="mb-10 max-w-3xl border-b border-archive-ink/15 pb-9 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-archive-red">并排观察</p><h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight sm:text-6xl">鞋款对比</h1><p className="mt-4 text-sm leading-7 text-archive-graphite">固定视角，对照不同合作的鞋型、材质、配色与发售记录。</p></header><Suspense fallback={<p>正在载入鞋款对比…</p>}><StaticCompareExplorer sneakers={sneakers} /></Suspense></main>;
}
