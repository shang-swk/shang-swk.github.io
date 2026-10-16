import { getBrands as getStaticEntries } from "@/lib/sneakers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SneakerCard } from "@/components/sneaker-card";
import { serializeSneaker, getBrandBySlug } from "@/lib/sneakers";
import type { ArchiveSneaker } from "@/types/archive";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} x New Balance 联名档案`,
    description: `浏览 ${brand.name} 与 New Balance 9XX 和 1000 的联名、时间线与资料来源。`,
    alternates: { canonical: `/brands/${brand.slug}` },
    openGraph: {
      title: `${brand.name} x New Balance Archive`,
      description: brand.description ?? undefined
    }
  };
}

export default async function BrandDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  if (!brand) notFound();
  const sneakers = brand.sneakers.map((item) => {
    if (typeof (item as unknown as ArchiveSneaker).createdAt === "string") return item as unknown as ArchiveSneaker;
    return serializeSneaker(item as unknown as Parameters<typeof serializeSneaker>[0]);
  });
  const byYear = groupByYear(sneakers);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "合作品牌", href: "/brands" }, { label: brand.name }]} />
      <section className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-archive-red">合作品牌</p>
          <h1 className="mt-3 font-editorial text-6xl">{brand.name}</h1>
          <p className="mt-6 text-base leading-8 text-archive-graphite">
            {brand.description ?? "这家品牌的介绍还没补齐，先看看下面收录了哪些鞋。"}
          </p>
          <p className="mt-6 text-sm text-archive-graphite">目前收录 {brand._count.sneakers} 双</p>
        </div>
        <div className="rounded-lg border border-archive-ink/10 bg-white/35 p-6">
          <h2 className="font-editorial text-3xl">与 New Balance 的合作</h2>
          <p className="mt-4 text-sm leading-7 text-archive-graphite">
            {brand.collaborationHistory ?? "我们还没找到足够资料写好这段合作历史。下面按年份列出了已经收录的鞋款，可以先从那里逛起。"}
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-editorial text-4xl">合作时间线</h2>
        <div className="mt-6 space-y-5">
          {byYear.map(([year, items]) => (
            <div key={year} className="grid gap-4 border-t border-archive-ink/10 pt-5 md:grid-cols-[120px_1fr]">
              <p className="font-editorial text-3xl">{year}</p>
              <div className="grid gap-3">
                {items.map((sneaker) => (
                  <div key={sneaker.id} className="rounded-lg border border-archive-ink/10 bg-white/35 p-4">
                    <p className="font-medium">{sneaker.name}</p>
                    <p className="mt-1 text-sm text-archive-graphite">{sneaker.modelSeries.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-editorial text-4xl">全部收录</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {sneakers.map((sneaker) => (
            <SneakerCard key={sneaker.id} sneaker={sneaker} />
          ))}
        </div>
      </section>
    </div>
  );
}

function groupByYear<T extends { releaseYear: number | null }>(items: T[]) {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const year = String(item.releaseYear ?? "年份待核对");
    groups.set(year, [...(groups.get(year) ?? []), item]);
  }
  return [...groups.entries()].sort(([a], [b]) => Number(b) - Number(a));
}

export const dynamicParams = false;
export async function generateStaticParams() { return (await getStaticEntries()).map(item => ({ slug: item.slug })); }
