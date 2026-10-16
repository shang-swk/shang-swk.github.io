import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#20231f] text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 border-b border-white/20 pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">NEW BALANCE / 9XX & 1000</p><p className="mt-5 font-sans text-4xl font-bold tracking-[-.06em] sm:text-6xl">NB ARCHIVE</p><p className="mt-5 max-w-xl text-sm leading-7 text-white/60">从经典鞋型出发，记录每一次合作。鞋款、设计细节与发售历史，在这里相遇。</p></div>
          <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm font-medium"><Link href="/archive" className="inline-flex items-center gap-1 hover:text-white/60">鞋款档案 <ArrowUpRight className="h-4 w-4" /></Link><Link href="/history" className="inline-flex items-center gap-1 hover:text-white/60">元年史 <ArrowUpRight className="h-4 w-4" /></Link><Link href="/brands" className="inline-flex items-center gap-1 hover:text-white/60">合作品牌 <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-[11px] leading-5 text-white/60 sm:flex-row"><span>© {new Date().getFullYear()} NB Archive</span><span className="max-w-2xl">This website is an independent fan-made archive and is not affiliated with New Balance or any collaborator brand.</span></div>
      </div>
    </footer>
  );
}
