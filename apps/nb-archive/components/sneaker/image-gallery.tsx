"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { SneakerVisual } from "@/components/sneaker-visual";
import type { ArchiveSneaker } from "@/types/archive";

const roleLabels: Record<string, string> = { side: "侧面", top: "俯视", heel: "后跟", material: "材质", outsole: "鞋底", "on-foot": "上脚", editorial: "专题影像", archive: "档案照片" };

export function ImageGallery({ sneaker }: { sneaker: ArchiveSneaker }) {
  const images = sneaker.images?.filter(image => image.imageUrl) ?? [];
  const [index, setIndex] = useState(0);
  const active = images[index] ?? images[0];
  if (!active) return <p className="mt-5 text-sm text-archive-graphite">这双鞋暂时没有可标明来源的照片。</p>;
  return (
    <div className="mt-6">
      <div className="aspect-[4/3] max-h-[70svh] w-full bg-white sm:aspect-[16/10]">
        <SneakerVisual name={active.alt} imageUrl={active.imageUrl} fit="contain" className="p-3 sm:p-6" />
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
        {images.map((image, position) => <button key={image.id} type="button" onClick={() => setIndex(position)} aria-label={`查看${roleLabels[image.role ?? "archive"]}照片 ${position + 1}`} aria-pressed={position === index} className={`relative h-20 w-24 shrink-0 border bg-white sm:h-24 sm:w-32 ${position === index ? "border-archive-red" : "border-archive-ink/10"}`}><SneakerVisual name={image.alt} imageUrl={image.imageUrl} fit="contain" className="p-1 pb-5" /><span className="absolute bottom-0 left-0 right-0 bg-white/90 py-0.5 text-[10px]">{roleLabels[image.role ?? "archive"]}</span></button>)}
      </div>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-2 text-xs leading-5 text-archive-graphite">
        <p><strong>{roleLabels[active.role ?? "archive"]}</strong> · {active.alt}. {active.copyrightNote}</p>
        {active.sourceUrl ? <a href={active.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1 text-archive-red">图片来源 <ExternalLink className="h-3 w-3" /></a> : null}
      </div>
    </div>
  );
}
