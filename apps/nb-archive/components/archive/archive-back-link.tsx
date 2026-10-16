"use client";

import Link from "next/link";
import { withoutBasePath } from "@/lib/public-path";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export function ArchiveBackLink({ sneakerSlug }: { sneakerSlug: string }) {
  const [href, setHref] = useState("/archive");
  useEffect(() => {
    const timer = window.setTimeout(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem("nb-archive-return") ?? "null") as { url?: string; slug?: string } | null;
      if (saved?.slug === sneakerSlug && saved.url && withoutBasePath(saved.url).startsWith("/archive")) setHref(withoutBasePath(saved.url));
    } catch { /* Ignore stale browser state. */ }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [sneakerSlug]);
  return <Link href={href} className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-archive-graphite hover:text-archive-red"><ArrowLeft className="h-4 w-4" /> 返回鞋款档案</Link>;
}
