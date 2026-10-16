"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Scale } from "lucide-react";
import { SneakerVisual } from "@/components/sneaker-visual";
import { VerifiedBadge } from "@/components/sneaker/status-badges";
import type { ArchiveSneaker } from "@/types/archive";
import { getChineseEditorial } from "@/lib/chinese-editorial";

export function SneakerCard({ sneaker, compact = false, selected = false, onCompareToggle, onOpen }: { sneaker: ArchiveSneaker; compact?: boolean; selected?: boolean; onCompareToggle?: () => void; onOpen?: () => void }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.article initial={reducedMotion ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="group relative min-w-0">
      {onCompareToggle ? <button type="button" onClick={onCompareToggle} aria-label={`${selected ? "从对比中移除" : "加入对比"} ${sneaker.name}`} title={selected ? "从对比中移除" : "加入对比"} className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center border shadow-sm transition ${selected ? "border-archive-red bg-archive-red text-white" : "border-archive-ink/10 bg-white/90 text-archive-ink hover:border-archive-red hover:text-archive-red"}`}>{selected ? <Check className="h-4 w-4" /> : <Scale className="h-4 w-4" />}</button> : null}
      <Link href={`/sneakers/${sneaker.slug}`} onClick={onOpen} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-archive-red">
        <div className="shoe-surface aspect-[4/3] overflow-hidden">
          <SneakerVisual name={sneaker.name} imageUrl={sneaker.cardImageUrl ?? null} fit="contain" className="p-3 transition-transform duration-500 motion-reduce:transform-none group-hover:scale-105" />
        </div>
        <div className={compact ? "border-b border-archive-ink/10 px-0.5 pb-4 pt-4" : "border-b border-archive-ink/10 px-0.5 pb-5 pt-4"}>
          <div className="flex items-center justify-between gap-2 text-[9px] font-semibold uppercase tracking-[.05em] text-archive-red sm:text-[10px]">
            <span className="line-clamp-2">{sneaker.brand.name} · {sneaker.modelSeries.name}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-archive-red opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
          </div>
          <h3 className={compact ? "mt-2 line-clamp-3 min-h-[2.6rem] font-sans text-[13px] font-medium leading-[1.5] sm:text-base" : "mt-2 line-clamp-3 min-h-[3.8rem] font-sans text-[13px] font-medium leading-[1.5] sm:min-h-[3rem] sm:text-[17px]"}>{sneaker.name}</h3>
          {!compact ? <p className="mt-2 hidden line-clamp-2 text-xs leading-6 text-archive-graphite sm:block">{getChineseEditorial(sneaker.slug)?.story ?? "中文故事待来源核对与编辑。"}</p> : null}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[9px] text-archive-graphite sm:mt-4 sm:text-[10px]">
            <span className="min-w-0 truncate">{sneaker.releaseYear ?? "年份待核"} <span className="mx-1">/</span> {sneaker.sku ?? "货号待核"}</span>
            <VerifiedBadge status={sneaker.verificationStatus} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
