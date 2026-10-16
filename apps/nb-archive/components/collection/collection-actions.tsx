"use client";

import Link from "next/link";
import { Check, Heart, LibraryBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import { upsertCollectionItem } from "@/lib/local-collection";
import { useLocalCollection, writeLocalCollection } from "./use-local-collection";

export function CollectionActions({ sneakerSlug }: { sneakerSlug: string }) {
  const items = useLocalCollection();
  const current = items.find(item => item.sneakerSlug === sneakerSlug);
  const save = (status: "owned" | "wanted") => {
    writeLocalCollection(upsertCollectionItem(items, { sneakerSlug, status, size: current?.size ?? "", condition: current?.condition, purchasePrice: current?.purchasePrice, currency: current?.currency, purchaseDate: current?.purchaseDate, notes: current?.notes ?? "" }));
  };
  return <div className="mt-7 flex flex-wrap gap-2">
    <Button type="button" variant={current?.status === "owned" ? "red" : "outline"} onClick={() => save("owned")}><Check className="h-4 w-4" /> {current?.status === "owned" ? "已拥有" : "加入已拥有"}</Button>
    <Button type="button" variant={current?.status === "wanted" ? "red" : "outline"} onClick={() => save("wanted")}><Heart className="h-4 w-4" /> {current?.status === "wanted" ? "想入手" : "加入想入手"}</Button>
    <Button asChild variant="ghost"><Link href="/collection"><LibraryBig className="h-4 w-4" /> 我的鞋柜</Link></Button>
  </div>;
}
