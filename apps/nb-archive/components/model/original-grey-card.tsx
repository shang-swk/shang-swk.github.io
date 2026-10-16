import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SneakerVisual } from "@/components/sneaker-visual";
import type { OriginalGreyReference } from "@/lib/model-guides";
import { slugify } from "@/lib/utils";

export function OriginalGreyCard({ reference }: { reference: OriginalGreyReference }) {
  const source = new URL(reference.sourceUrl).hostname.replace(/^www\./, "");
  return (
    <article className="min-w-0 border border-archive-ink/10 bg-white">
      <div className="aspect-[4/3] overflow-hidden bg-[#f2f2f1]">
        <SneakerVisual name={`New Balance ${reference.model} grey, ${reference.sku}`} imageUrl={reference.imageUrl} className="p-2" />
      </div>
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-archive-red">General release / non-collaboration</p>
        <div className="mt-2 flex items-baseline justify-between gap-2">
          <Link href={`/models/${slugify(reference.model)}`} className="font-editorial text-2xl hover:text-archive-red">{reference.model} Grey</Link>
          <span className="shrink-0 text-[11px] text-archive-graphite">{reference.sku}</span>
        </div>
        <a href={reference.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex max-w-full items-center gap-1 text-[11px] text-archive-graphite hover:text-archive-red">
          <span className="truncate">{reference.imageUrl && !reference.imageSourceUrl ? "Photo / product source" : "Product source"}: {source}</span><ArrowUpRight className="h-3 w-3 shrink-0" />
        </a>
        {reference.imageSourceUrl ? <a href={reference.imageSourceUrl} target="_blank" rel="noreferrer" className="mt-1 flex items-center gap-1 text-[11px] text-archive-graphite hover:text-archive-red">Photo source: New Balance <ArrowUpRight className="h-3 w-3" /></a> : null}
        {reference.imageUrl ? <p className="mt-1 text-[10px] text-archive-graphite">Image rights remain with the source owner.</p> : null}
      </div>
    </article>
  );
}
