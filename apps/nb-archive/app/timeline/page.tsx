import { Suspense } from "react";
import type { Metadata } from "next";
import { getTimelineSneakers } from "@/lib/sneakers";
import { TimelineExplorer } from "@/components/timeline-explorer";
export const dynamic = "force-static";
export const metadata: Metadata = { title: "联名时间线", description: "按年份浏览 New Balance 联名档案。" };
export default async function TimelinePage() {
  const sneakers = await getTimelineSneakers();
  return <Suspense fallback={<p>正在载入时间线…</p>}><TimelineExplorer sneakers={sneakers} /></Suspense>;
}
