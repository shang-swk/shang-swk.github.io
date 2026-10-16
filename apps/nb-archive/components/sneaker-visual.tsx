"use client";

import { publicPath } from "@/lib/public-path";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function SneakerVisual({ name, className, imageUrl, priority = false, fit = "contain" }: {
  name: string;
  className?: string;
  imageUrl?: string | null;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);
  if (imageUrl && failedUrl !== imageUrl) {
    return <img src={publicPath(imageUrl)} alt={name} loading={priority ? "eager" : "lazy"} onError={() => setFailedUrl(imageUrl)} className={cn("block h-full w-full", fit === "cover" ? "object-cover" : "object-contain", className)} />;
  }
  return (
    <div role="img" aria-label={`照片待补：${name}`} className={cn("flex h-full w-full flex-col items-center justify-center gap-3 bg-neutral-100 text-neutral-400", className)}>
      <ImageOff aria-hidden="true" className="h-7 w-7" strokeWidth={1.5} />
      <span className="text-center text-[10px] font-medium sm:text-[11px]">照片待补</span>
    </div>
  );
}
