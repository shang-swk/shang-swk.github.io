"use client";
import { useSearchParams } from "next/navigation";
import { CompareExplorer } from "./compare-explorer";
import { normalizeCompareSlugs } from "@/lib/compare";
import type { ArchiveSneaker } from "@/types/archive";
export function StaticCompareExplorer({ sneakers }: { sneakers: ArchiveSneaker[] }) {
  const query = useSearchParams();
  const slugs = normalizeCompareSlugs(query.get("shoes") ?? undefined, sneakers.map(item => item.slug));
  return <CompareExplorer key={query.toString()} sneakers={sneakers} initialSlugs={slugs} />;
}
