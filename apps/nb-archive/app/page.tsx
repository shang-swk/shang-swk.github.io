import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { HomeHero } from "@/components/home/home-hero";
import { Reveal } from "@/components/home/reveal";
import { SneakerVisual } from "@/components/sneaker-visual";
import { getChineseEditorial } from "@/lib/chinese-editorial";
import { getWeeklyCuration } from "@/lib/editorial";
import { getHomeHeroSlides } from "@/lib/home-presentation";
import { getArchiveSneakers, getFeaturedSneakers, getHomeTaxonomy, getRecentSneakers } from "@/lib/sneakers";

export const dynamic = "force-static";

const modelNames = ["990v3", "991", "992", "993", "998", "1000"];

export default async function HomePage() {
  const [featured, recent, taxonomy, catalog] = await Promise.all([
    getFeaturedSneakers(), getRecentSneakers(), getHomeTaxonomy(), getArchiveSneakers()
  ]);
  const slides = getHomeHeroSlides(catalog);
  const curation = getWeeklyCuration(new Date(), catalog);
  const photoCount = catalog.filter(item => item.heroImageUrl).length;
  const brands = [...taxonomy.brands].sort((a, b) => b._count.sneakers - a._count.sneakers);
  const models = modelNames.flatMap(name => {
    const model = taxonomy.models.find(item => item.name === name);
    const sneaker = catalog.find(item => item.modelSeries.name === name && item.cardImageUrl);
    return model ? [{ model, sneaker }] : [];
  });
  const feature = featured.find(item => item.cardImageUrl) ?? featured[0];

  return (
    <div className="overflow-hidden">
      <HomeHero slides={slides} />

      <section className="home-stat-strip" aria-label="档案概览">
        <div className="mx-auto grid max-w-[1440px] grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1.2fr]">
          {[
            { value: catalog.length, label: "双联名收录" },
            { value: photoCount, label: "双配有图片" },
            { value: taxonomy.brands.length, label: "个合作品牌" }
          ].map(stat => <div key={stat.label} className="border-r border-archive-ink/10 px-5 py-5 sm:px-8 sm:py-6 lg:px-12"><p className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</p><p className="mt-2 text-[11px] text-archive-graphite sm:text-xs">{stat.label}</p></div>)}
          <Link href="/history" className="group col-span-3 flex items-center justify-between border-t border-archive-ink/10 px-5 py-5 text-sm font-medium transition hover:bg-archive-ink/5 sm:px-8 lg:col-span-1 lg:border-t-0 lg:px-12">从 990 开始读历史 <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <section className="home-section bg-archive-paper" id="models">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="grid gap-6 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-archive-red">01 / MODEL INDEX</p><h2 className="mt-5 max-w-4xl font-sans section-title">从鞋型开始。</h2></div>
            <div className="max-w-md lg:justify-self-end"><p className="text-sm leading-7 text-archive-graphite sm:text-base">990 每代都不太一样。991 更紧凑，992 更宽厚，1000 则有很鲜明的千禧年味道。先认鞋型，逛联名会有趣得多。</p><Link href="/start" className="mt-6 inline-flex items-center gap-2 border-b border-archive-ink pb-2 text-sm font-semibold transition hover:border-archive-red hover:text-archive-red">从鞋型入门 <ArrowUpRight className="h-4 w-4" /></Link></div>
          </Reveal>
          <div className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0">
            {models.map(({ model, sneaker }, index) => <Link key={model.id} href={`/models/${model.slug}`} className="model-tile group min-w-[200px] snap-start p-4 sm:min-w-[220px] lg:min-w-0"><span className="flex items-start justify-between text-[10px] font-semibold uppercase tracking-[0.14em] text-archive-graphite"><span>MODEL / {String(index + 1).padStart(2, "0")}</span><ArrowUpRight className="h-4 w-4 text-archive-red transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span><span className="mt-7 block font-sans text-3xl font-semibold tracking-tight sm:text-4xl">{model.name}</span><div className="shoe-surface mt-3 aspect-[5/4] w-full overflow-hidden"><SneakerVisual name={sneaker?.name ?? model.name} imageUrl={sneaker?.cardImageUrl} className="p-1 transition-transform duration-500 group-hover:scale-105" /></div><span className="mt-4 block text-xs text-archive-graphite">{model._count.sneakers} 双联名档案</span></Link>)}
          </div>
        </div>
      </section>

      <section className="home-section bg-white" id="curated">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col gap-7 border-b border-archive-ink/20 pb-9 lg:flex-row lg:items-end lg:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-archive-red">02 / THE WEEKLY EDIT</p><h2 className="mt-5 font-sans section-title">{curation.title}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-archive-graphite sm:text-base">{curation.description}</p></div><Link href="/archive" className="group inline-flex shrink-0 items-center gap-3 border-b border-archive-ink pb-2 text-sm font-semibold transition hover:border-archive-red hover:text-archive-red">进入完整档案 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 pt-10 sm:gap-x-6 lg:grid-cols-4">
            {curation.picks.map(({ sneaker, reason }, index) => <Reveal key={sneaker.id} delay={index * 0.08}><Link href={`/sneakers/${sneaker.slug}`} className="group block"><div className="shoe-surface relative aspect-[4/3] overflow-hidden"><SneakerVisual name={sneaker.name} imageUrl={sneaker.cardImageUrl} className="p-2 transition-transform duration-500 group-hover:scale-105" /><span className="absolute bottom-3 left-3 bg-white px-2 py-1 text-[10px] font-semibold">{String(index + 1).padStart(2, "0")}</span></div><div className="mt-4 flex items-start justify-between gap-2"><div><p className="text-[10px] font-semibold uppercase text-archive-red">{sneaker.brand.name} / {sneaker.modelSeries.name}</p><h3 className="mt-2 font-sans text-sm font-semibold leading-5 sm:text-lg sm:leading-6">{sneaker.name}</h3></div><ArrowUpRight className="mt-1 h-4 w-4 shrink-0 opacity-50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-archive-red group-hover:opacity-100" /></div><p className="mt-3 border-t border-archive-ink/10 pt-3 text-[11px] leading-6 text-archive-graphite sm:text-xs">{reason}</p></Link></Reveal>)}
          </div>
        </div>
      </section>

      {feature ? <section className="home-section bg-[#242e27] text-white"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12"><Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">03 / IN FOCUS</p><h2 className="mt-5 max-w-xl font-sans text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">{feature.name.replace(`${feature.brand.name} x New Balance `, "")}</h2><p className="mt-7 max-w-lg text-sm leading-8 text-white/70 sm:text-base">{getChineseEditorial(feature.slug)?.story ?? `${feature.brand.name} 和 New Balance 的 ${feature.modelSeries.name} 合作。照片和目前找到的资料都在鞋款页；还没查实的细节，我们会直接写明。`}</p><Link href={`/sneakers/${feature.slug}`} className="group mt-9 inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-semibold">看看这双鞋 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link><p className="mt-16 text-[11px] uppercase text-white/45">{feature.brand.name} / {feature.modelSeries.name} / {feature.releaseYear ?? "年份待核"}</p></Reveal><Reveal delay={0.15} className="shoe-surface relative aspect-[4/3] overflow-hidden"><SneakerVisual name={feature.name} imageUrl={feature.cardImageUrl} className="p-5 transition-transform duration-700 hover:scale-105" /><span className="absolute bottom-4 left-4 bg-white px-3 py-2 text-[10px] font-semibold uppercase text-archive-ink">本期鞋款</span></Reveal></div></section> : null}

      <section className="home-section bg-archive-paper"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-16 lg:px-12"><Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-archive-red">04 / COLLABORATORS</p><h2 className="mt-5 font-sans section-title">合作品牌。<br /><span className="text-archive-graphite">各有表达。</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-archive-graphite">Kith、ALD、JJJJound……从熟悉的品牌进去，看看它们各自做过哪些 9XX 和 1000。</p><Link href="/brands" className="mt-7 inline-flex items-center gap-2 border-b border-archive-ink pb-2 text-sm font-semibold hover:border-archive-red hover:text-archive-red">查看所有品牌 <ArrowUpRight className="h-4 w-4" /></Link></Reveal><Reveal delay={0.1} className="border-t border-archive-ink/25">{brands.slice(0, 7).map((brand, index) => <Link href={`/brands/${brand.slug}`} key={brand.id} className="group grid grid-cols-[32px_1fr_auto_24px] items-center gap-3 border-b border-archive-ink/20 py-4 transition-colors hover:pl-2 hover:text-archive-red sm:grid-cols-[44px_1fr_auto_24px] sm:py-5"><span className="text-[10px] text-archive-graphite">{String(index + 1).padStart(2, "0")}</span><span className="min-w-0 truncate font-sans text-xl font-semibold sm:text-3xl">{brand.name}</span><span className="text-xs text-archive-graphite">{brand._count.sneakers} 双</span><ArrowDownRight className="h-5 w-5 transition-transform group-hover:rotate-[-90deg]" /></Link>)}</Reveal></div></section>

      <section className="home-section bg-white"><div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><Reveal className="flex items-end justify-between gap-6 border-b border-archive-ink/20 pb-8"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-archive-red">05 / THE LATEST</p><h2 className="mt-5 font-sans section-title">近期收录</h2></div><Link href="/timeline" className="shrink-0 text-sm font-semibold hover:text-archive-red">查看时间线 <ArrowRight className="inline h-4 w-4" /></Link></Reveal><div className="divide-y divide-archive-ink/15">{recent.slice(0, 5).map((item, index) => <Link href={`/sneakers/${item.slug}`} key={item.id} className="group grid grid-cols-[24px_72px_1fr_22px] items-center gap-3 py-4 transition-colors hover:text-archive-red sm:grid-cols-[40px_120px_1fr_auto_24px] sm:gap-6 sm:py-5"><span className="text-[10px] text-archive-graphite">{String(index + 1).padStart(2, "0")}</span><div className="aspect-[4/3] overflow-hidden shoe-surface"><SneakerVisual name={item.name} imageUrl={item.cardImageUrl} className="p-1 transition-transform duration-500 group-hover:scale-105" /></div><div className="min-w-0"><p className="truncate font-sans text-sm font-semibold sm:text-xl">{item.name}</p><p className="mt-1 text-xs text-archive-graphite">{item.brand.name} / {item.modelSeries.name}</p></div><span className="hidden text-xs text-archive-graphite sm:block">{item.releaseYear ?? "年份待核"}</span><ArrowUpRight className="h-5 w-5 text-archive-graphite transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>)}</div></div></section>

      <section className="bg-[#eceee7] px-5 py-12 text-archive-ink sm:px-8 sm:py-16 lg:px-12"><div className="mx-auto flex max-w-[1440px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-archive-red">AN ARCHIVE IN PROGRESS</p><h2 className="mt-5 font-sans text-4xl font-semibold leading-tight sm:text-6xl">下一双，值得了解。</h2><p className="mt-4 max-w-xl text-sm leading-7 text-archive-graphite">有些鞋还只有一张照片，有些发售日期还没找到可靠记录。没查实的地方，我们会直接标出来。</p></div><Link href="/archive" className="group inline-flex w-fit items-center gap-6 border-b border-archive-ink pb-2 text-sm font-semibold">继续探索档案 <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></Link></div></section>
    </div>
  );
}
