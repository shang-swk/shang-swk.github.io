import type { Metadata } from "next";
import { Suspense } from "react";
import { ArchiveExplorer } from "@/components/archive/archive-explorer";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { getArchiveSneakers } from "@/lib/sneakers";

export const metadata: Metadata = {
  title: "鞋款档案",
  description: "按品牌、型号、年份、配色与货号检索 New Balance 9XX 和 1000 联名鞋款。"
};

export const dynamic = "force-static";

export default async function ArchivePage() {
  const sneakers = await getArchiveSneakers();
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
      <Breadcrumb items={[{ label: "鞋款档案" }]} />
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-archive-ink/15 pb-8">
        <div>
          <p className="eyebrow">THE CATALOG / 9XX & 1000</p>
          <h1 className="mt-4 font-sans text-4xl font-semibold tracking-tight sm:text-6xl">鞋款档案</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-archive-graphite">
            按品牌、鞋型、配色和货号，找到属于你的那一双。每双鞋保留发售记录与资料出处。
          </p>
        </div>
        <span className="hidden font-sans text-7xl font-medium tracking-[-.06em] text-archive-ink/10 sm:block">{String(sneakers.length).padStart(3, "0")}<span className="ml-3 align-top text-[10px] tracking-[.12em] text-archive-graphite">RECORDS</span></span>
      </div>
      <Suspense fallback={<p>正在载入档案筛选…</p>}><ArchiveExplorer sneakers={sneakers} /></Suspense>
    </div>
  );
}
