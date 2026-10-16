import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { getBrands } from "@/lib/sneakers";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "合作品牌",
  description: "浏览 New Balance 9XX 与 1000 联名档案中的合作品牌。"
};

export default async function BrandsPage() {
  const brands = await getBrands();

  return (
    <div className="site-container py-12">
      <Breadcrumb items={[{ label: "合作品牌" }]} />
      <div className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.24em] text-archive-red">COLLABORATORS</p>
        <h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight sm:text-6xl">合作品牌</h1>
        <p className="mt-5 text-sm leading-7 text-archive-graphite">
          从品牌视角追踪同一个设计语言，如何落在不同 New Balance 鞋型上。
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <Link key={brand.id} href={`/brands/${brand.slug}`} className="group border border-archive-ink/10 bg-white/50 p-6 transition hover:border-archive-ink/30 hover:bg-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-editorial text-3xl">{brand.name}</p>
                <p className="mt-3 text-sm leading-6 text-archive-graphite">{brand.description ?? "品牌资料整理中。"}</p>
              </div>
              <ArrowRight className="mt-2 h-5 w-5 text-archive-red transition group-hover:translate-x-1" />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-archive-graphite">收录 {brand._count.sneakers} 双</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
