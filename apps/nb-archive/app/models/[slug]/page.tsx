import { getModels as getStaticEntries } from "@/lib/sneakers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { SneakerCard } from "@/components/sneaker-card";
import { OriginalGreyCard } from "@/components/model/original-grey-card";
import { modelGuides, originalGreyReferences } from "@/lib/model-guides";
import { starterModels } from "@/lib/editorial";
import { getModelBySlug, serializeSneaker } from "@/lib/sneakers";
import type { ArchiveSneaker } from "@/types/archive";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const model = await getModelBySlug(slug);
  if (!model) return {};
  return {
    title: `New Balance ${model.name} 历史、元祖灰与联名`,
    description: `认识 New Balance ${model.name} 的轮廓、技术特点、普通灰色参考款和已收录联名。`,
    alternates: { canonical: `/models/${model.slug}` }
  };
}

export default async function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = await getModelBySlug(slug);
  if (!model) notFound();
  const guide = modelGuides[model.name];
  const visualCue = starterModels.find(item => item.model === model.name)?.visualCue;
  const grey = originalGreyReferences.find(item => item.model === model.name);
  const sneakers = model.sneakers.map((item) => {
    if (typeof (item as unknown as ArchiveSneaker).createdAt === "string") return item as unknown as ArchiveSneaker;
    return serializeSneaker(item as unknown as Parameters<typeof serializeSneaker>[0]);
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "鞋型", href: "/models" }, { label: model.name }]} />
      <section className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-archive-red">鞋型档案</p>
          <h1 className="mt-3 font-editorial text-7xl">{model.name}</h1>
          <p className="mt-5 text-sm uppercase tracking-[0.18em] text-archive-graphite">
            {model.family === "ONE_THOUSAND" ? "1000 系列" : "99X 系列"} / {model.releaseYear ? `${model.releaseYear} 年推出` : "推出年份待核对"}
          </p>
          {grey ? <div className="mt-9 max-w-sm"><OriginalGreyCard reference={grey} /></div> : <p className="mt-9 border-t border-archive-ink/15 pt-4 text-xs leading-6 text-archive-graphite">普通灰色参考款的可靠货号仍在核对。</p>}
        </div>
        <div className="divide-y divide-archive-ink/15 border-t border-archive-ink/15">
          {visualCue ? <div className="py-6"><h2 className="font-editorial text-3xl">一眼认出它</h2><p className="mt-4 text-sm leading-7 text-archive-graphite">{visualCue}</p></div> : null}
          <div className="py-6"><h2 className="font-editorial text-3xl">它从哪一年开始</h2><p className="mt-4 text-sm leading-7 text-archive-graphite">{guide?.history ?? model.description}</p></div>
          <div className="py-6"><h2 className="font-editorial text-3xl">结构与缓震</h2><p className="mt-4 text-sm leading-7 text-archive-graphite">{guide?.features ?? model.features}</p></div>
          <div className="py-6"><h2 className="font-editorial text-3xl">产地说明</h2><p className="mt-4 text-sm leading-7 text-archive-graphite">{guide?.madeInNotes ?? model.madeInNotes}</p></div>
          {guide ? <div className="py-6"><a href={guide.sourceUrl} target="_blank" rel="noreferrer" className="text-sm text-archive-red hover:underline">查看型号资料来源 ↗</a></div> : null}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="mb-2 font-editorial text-4xl">已收录联名</h2>
        <p className="mb-6 text-sm text-archive-graphite">当前独立档案收录 {sneakers.length} 双。</p>
        {sneakers.length ? <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">{sneakers.map(sneaker => <SneakerCard key={sneaker.id} sneaker={sneaker} />)}</div> : <div className="border-y border-archive-ink/15 py-10 text-sm text-archive-graphite">暂未找到有来源支撑的联名记录。</div>}
      </section>
    </div>
  );
}

export const dynamicParams = false;
export async function generateStaticParams() { return (await getStaticEntries()).map(item => ({ slug: item.slug })); }
