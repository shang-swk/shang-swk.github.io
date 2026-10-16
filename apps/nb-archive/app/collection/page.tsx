import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CollectionManager } from "@/components/collection/collection-manager";
import { getArchiveSneakers } from "@/lib/sneakers";

export const dynamic = "force-static";
export const metadata: Metadata = { title: "我的鞋柜", description: "在本机记录已拥有与想入手的 New Balance 9XX / 1000 鞋款。", robots: { index: false } };

export default async function CollectionPage() {
  const sneakers = await getArchiveSneakers();
  return <main className="site-container py-10"><Breadcrumb items={[{ label: "我的鞋柜" }]} /><header className="mb-12 max-w-3xl border-b border-archive-ink/15 pb-9 pt-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-archive-red">个人收藏 / LOCAL COLLECTION</p><h1 className="mt-3 font-sans text-4xl font-semibold tracking-tight sm:text-6xl">我的鞋柜</h1><p className="mt-4 text-sm leading-7 text-archive-graphite">记录已拥有、想入手的鞋款和尺码、价格与备注。清单只保存在当前浏览器；分享穿搭照片由你自己决定。</p></header><CollectionManager sneakers={sneakers} /></main>;
}
