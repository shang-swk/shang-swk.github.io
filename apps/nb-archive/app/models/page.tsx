import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { getModels } from "@/lib/sneakers";
import { modelGuides } from "@/lib/model-guides";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "鞋型索引",
  description: "认识 New Balance 9XX 与 1000 的型号、外形差异和代表联名。"
};

export default async function ModelsPage() {
  const models = await getModels();

  return (
    <div className="site-container py-12">
      <Breadcrumb items={[{ label: "鞋型" }]} />
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-archive-red">型号族谱</p>
        <h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight sm:text-6xl">9XX / 1000 鞋型索引</h1>
        <p className="mt-5 text-sm leading-7 text-archive-graphite">
          从 990 六代到 991、992、993，按型号浏览联名。550、574、9060、1906R 和 2002R 不计入这个档案。
        </p>
        <Link href="/start" className="mt-4 inline-block text-sm text-archive-red underline">第一次来？先看轮廓指南 →</Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((model) => (
          <Link key={model.id} href={`/models/${model.slug}`} className="group border border-archive-ink/10 bg-white/50 p-5 transition hover:border-archive-ink/30 hover:bg-white">
            <div className="flex items-start justify-between">
              <p className="font-editorial text-4xl">{model.name}</p>
              <ArrowRight className="h-5 w-5 text-archive-red transition group-hover:translate-x-1" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-archive-graphite">
              {model.releaseYear ?? "年份待核实"} / {model._count.sneakers} 双联名
            </p>
            <p className="mt-4 line-clamp-3 text-xs leading-5 text-archive-graphite">{modelGuides[model.name]?.history ?? model.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
