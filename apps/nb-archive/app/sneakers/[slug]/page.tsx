import { getArchiveSneakers as getStaticEntries } from "@/lib/sneakers";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { RarityBadge, ReleaseStatusBadge, SourceReliabilityBadge, VerifiedBadge } from "@/components/sneaker/status-badges";
import { SneakerVisual } from "@/components/sneaker-visual";
import { ImageGallery } from "@/components/sneaker/image-gallery";
import { CorrectionForm } from "@/components/sneaker/correction-form";
import { DiscoveryPaths } from "@/components/sneaker/discovery-paths";
import { ArchiveBackLink } from "@/components/archive/archive-back-link";
import { CollectionActions } from "@/components/collection/collection-actions";
import { formatYear } from "@/lib/utils";
import { getArchiveSneakers, getSneakerBySlug } from "@/lib/sneakers";
import { buildDiscoveryPaths } from "@/lib/discovery";
import { factEvidence, formatReleasePrecision, type FactField } from "@/lib/evidence";
import { getCuratorIntro } from "@/lib/editorial";
import { canonicalSneakerSlug } from "@/lib/sneaker-aliases";
import { getChineseEditorial } from "@/lib/chinese-editorial";
import { RARITY_LABELS, STATUS_LABELS, VERIFICATION_LABELS } from "@/lib/constants";

export const dynamic = "force-static";

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = await getSneakerBySlug(canonicalSneakerSlug(slug));
  if (!record) return {};
  const sneaker = record.view;
  const chinese = getChineseEditorial(sneaker.slug);

  const title = sneaker.name;
  const description = chinese?.story ?? `查看 ${sneaker.name} 的发售信息、图片、货号与资料来源。`;

  return {
    title,
    description,
    alternates: { canonical: `/sneakers/${sneaker.slug}` },
    openGraph: {
      title,
      description,
      images: sneaker.heroImageUrl ? [sneaker.heroImageUrl] : []
    }
  };
}

export default async function SneakerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (canonicalSneakerSlug(slug) !== slug) permanentRedirect(`/sneakers/${canonicalSneakerSlug(slug)}`);
  const record = await getSneakerBySlug(slug);
  if (!record) notFound();
  const sneaker = record.view;
  const chinese = getChineseEditorial(sneaker.slug);
  const catalog = await getArchiveSneakers();
  const discovery = buildDiscoveryPaths(sneaker, catalog);
  const factRows: Array<[string, string | null, FactField | null]> = [
    ["合作品牌", sneaker.brand.name, null], ["鞋型", sneaker.modelSeries.name, null],
    ["货号", sneaker.sku, "sku"], ["别名", sneaker.nickname, null], ["配色", sneaker.colorway, null],
    ["发售时间", formatReleasePrecision(sneaker), "releaseDate"],
    ["零售价", sneaker.retailPrice ? `${sneaker.currency ?? "USD"} ${sneaker.retailPrice}` : null, null],
    ["发售地区", sneaker.region, null], ["产地", sneaker.madeIn, null],
    ["材质", sneaker.materialsText, null], ["稀有度", RARITY_LABELS[sneaker.rarityLevel], null],
    ["状态", STATUS_LABELS[sneaker.status], null], ["核实状态", VERIFICATION_LABELS[sneaker.verificationStatus], null]
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: sneaker.name,
    brand: {
      "@type": "Brand",
      name: sneaker.brand.name
    },
    model: sneaker.modelSeries.name,
    sku: sneaker.sku ?? undefined,
    releaseDate: sneaker.releaseDate ?? undefined,
    image: sneaker.heroImageUrl ?? undefined,
    description: sneaker.story ?? undefined
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="sneaker-detail-hero grid lg:grid-cols-[1.08fr_.92fr]">
        <div className="sneaker-detail-image aspect-[4/3] max-h-[62svh] min-h-0 lg:aspect-auto lg:max-h-[82svh] lg:min-h-[580px]">
          <SneakerVisual
            name={sneaker.name}
            imageUrl={sneaker.cardImageUrl ?? sneaker.heroImageUrl}
            priority
            fit="contain"
            className="p-3 sm:p-6 lg:p-10"
          />
        </div>
        <div className="flex items-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <ArchiveBackLink sneakerSlug={sneaker.slug} />
            <Breadcrumb items={[{ label: "鞋款档案", href: "/archive" }, { label: sneaker.name }]} />
            <div className="flex flex-wrap gap-2">
              <Badge>{sneaker.modelSeries.name}</Badge>
              <Badge>{sneaker.releaseYear ?? formatYear(sneaker.releaseDate)}</Badge>
              {sneaker.rarityLevel !== "unknown" ? <RarityBadge rarity={sneaker.rarityLevel} /> : null}
              <VerifiedBadge status={sneaker.verificationStatus} />
            </div>
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.17em] text-archive-red">
              {sneaker.brand.name} x New Balance
            </p>
            <h1 className="mt-3 font-sans text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-[46px]">{sneaker.name}</h1>
            <p className="mt-6 text-base leading-8 text-archive-graphite">{getCuratorIntro(sneaker.slug) ?? `这是 ${sneaker.brand.name} 和 New Balance 合作的 ${sneaker.modelSeries.name}。关于它的设计和发售，我们还在查资料；下面先放上能核对的信息。`}</p>
            <CollectionActions sneakerSlug={sneaker.slug} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <aside>
          <h2 className="font-sans text-3xl font-semibold">档案信息</h2>
          <dl className="mt-6 divide-y divide-archive-ink/10 border-y border-archive-ink/20">
            {factRows.map(([label, value, field]) => (
              <div key={label} className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 px-1 py-3 sm:grid-cols-[110px_minmax(0,1fr)] text-sm">
                <dt className="text-archive-graphite">{label}</dt>
                <dd className="break-words font-medium">{value ?? "待核实"}{field && value && factEvidence(sneaker, field) ? <a href={factEvidence(sneaker, field)!} target="_blank" rel="noreferrer" className="ml-2 whitespace-nowrap text-xs font-normal text-archive-red underline">来源 ↗</a> : field && value ? <span className="ml-2 text-[10px] font-normal text-archive-graphite">待逐项核对</span> : null}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs leading-6 text-archive-graphite">字段旁边有链接，可以点开查看出处；其他信息仍可能需要核对。</p>
        </aside>
        <div className="space-y-12">
          <section>
            <h2 className="font-sans text-3xl font-semibold sm:text-4xl">合作故事</h2>
            <p className="mt-5 text-base leading-8 text-archive-graphite">
              {chinese?.story ?? "这双鞋背后的故事还没查清。知道品牌原文或可靠报道？欢迎在下方提供线索。"}
            </p>
            {sneaker.story ? <details className="mt-4 border-t border-archive-ink/10 pt-3 text-xs leading-6 text-archive-graphite"><summary className="cursor-pointer text-archive-red">展开英文原始摘要</summary><p className="mt-3">{sneaker.story}</p></details> : null}
            {factEvidence(sneaker, "story") ? <a href={factEvidence(sneaker, "story")!} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs text-archive-red underline">阅读故事来源 ↗</a> : null}
          </section>
          <section>
            {sneaker.designInspiration ? <><h2 className="font-sans text-3xl font-semibold sm:text-4xl">设计灵感</h2>
            <p className="mt-5 text-base leading-8 text-archive-graphite">
              {chinese?.designInspiration ?? "还没找到能核对的设计说明。"}
            </p><details className="mt-3 text-xs leading-6 text-archive-graphite"><summary className="cursor-pointer text-archive-red">展开英文原始摘要</summary><p className="mt-3">{sneaker.designInspiration}</p></details></> : null}
          </section>
          <section>
            {sneaker.culturalContext ? <><h2 className="font-sans text-3xl font-semibold sm:text-4xl">合作背景</h2>
            <p className="mt-5 text-base leading-8 text-archive-graphite">
              {chinese?.culturalContext ?? "这部分背景还缺少可核对的资料。"}
            </p><details className="mt-3 text-xs leading-6 text-archive-graphite"><summary className="cursor-pointer text-archive-red">展开英文原始摘要</summary><p className="mt-3">{sneaker.culturalContext}</p></details></> : null}
          </section>
          <section>
            <h2 className="font-sans text-3xl font-semibold sm:text-4xl">配色</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {sneaker.colorPalettes?.length ? (
                sneaker.colorPalettes.map((color) => (
                  <div key={color.id} className="flex items-center gap-2 rounded-full border border-archive-ink/10 bg-white/45 px-3 py-2 text-xs uppercase tracking-[0.14em]">
                    <span className="h-5 w-5 rounded-full border border-archive-ink/15" style={{ background: color.hex }} />
                    {color.name ?? color.hex}
                  </div>
                ))
              ) : (
                <p className="text-sm text-archive-graphite">还没有这双鞋的配色样本。</p>
              )}
            </div>
          </section>
        </div>
      </section>

      <section className="border-y border-archive-ink/10 bg-archive-mist/55 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-sans text-3xl font-semibold sm:text-4xl">发售信息</h2>
            <div className="mt-6 space-y-3">
              {sneaker.releases?.length ? (
                sneaker.releases.map((release) => (
                  <div key={release.id} className="border-t border-archive-ink/20 py-4">
                    <p className="text-sm font-semibold">{release.storeName ?? release.releaseType}</p>
                    <div className="mt-2">
                      <ReleaseStatusBadge status={sneaker.status} />
                    </div>
                    <p className="mt-1 text-sm text-archive-graphite">
                      {release.releaseDate ? formatReleasePrecision({ releaseDate: release.releaseDate, releaseYear: null }) : formatReleasePrecision(sneaker)} / {release.country ?? "地区待核实"}
                    </p>
                    {release.notes ? <p className="mt-3 text-sm text-archive-graphite">{release.notes}</p> : null}
                  </div>
                ))
              ) : (
                <p className="text-sm text-archive-graphite">还没找到可靠的发售渠道记录。</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-sans text-3xl font-semibold sm:text-4xl">资料来源</h2>
            <div className="mt-6 space-y-3">
              {(sneaker.sources ?? []).map((source) => (
                <Link
                  key={source.id}
                  href={source.url}
                  className="block border-t border-archive-ink/20 py-4 transition hover:text-archive-red"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    {source.sourceType === "official" ? <ShieldCheck className="h-4 w-4 text-emerald-700" /> : null}
                    {source.title}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge>{source.sourceType}</Badge>
                    <SourceReliabilityBadge score={source.reliabilityScore} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-sans text-3xl font-semibold sm:text-4xl">多视角照片</h2>
        <ImageGallery sneaker={sneaker} />
        <div className="mt-10"><CorrectionForm sneakerSlug={sneaker.slug} /></div>
      </section>
      <DiscoveryPaths groups={discovery} />
    </article>
  );
}

export const dynamicParams = false;
export async function generateStaticParams() { return (await getStaticEntries()).map(item => ({ slug: item.slug })); }
