"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Download, Plus, Trash2 } from "lucide-react";
import { SneakerVisual } from "@/components/sneaker-visual";
import { Button } from "@/components/ui/button";
import { removeCollectionItem, upsertCollectionItem, type CollectionItemInput } from "@/lib/local-collection";
import type { ArchiveSneaker } from "@/types/archive";
import { useLocalCollection, writeLocalCollection } from "./use-local-collection";
import { renderCollectionPng, selectShareEntries } from "@/lib/collection-share";
import { canonicalSneakerSlug } from "@/lib/sneaker-aliases";

const emptyForm: CollectionItemInput = { sneakerSlug: "", status: "owned", size: "", notes: "" };
const statuses = ["owned", "wanted", "sold", "watching"] as const;
const statusLabels: Record<string, string> = { all: "全部", owned: "已拥有", wanted: "想入手", sold: "已出", watching: "关注中" };

export function CollectionManager({ sneakers }: { sneakers: ArchiveSneaker[] }) {
  const items = useLocalCollection();
  const [form, setForm] = useState<CollectionItemInput>(emptyForm);
  const [filter, setFilter] = useState<string>("all");
  const [shareState, setShareState] = useState<"idle" | "busy" | "success" | "error">("idle");
  const [shareMessage, setShareMessage] = useState("");
  const sneakerBySlug = new Map(sneakers.map(item => [item.slug, item]));
  const visible = items.filter(item => filter === "all" || item.status === filter);
  const update = (key: keyof CollectionItemInput, value: string) => setForm(current => ({ ...current, [key]: value }));
  const downloadList = async () => {
    setShareState("busy");
    try {
      const entries = selectShareEntries(visible, sneakers);
      const blob = await renderCollectionPng(entries, statusLabels[filter]);
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `nb-archive-${filter}.png`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 10_000);
      setShareState("success");
      setShareMessage(`已生成当前筛选的 ${entries.length} 双鞋清单。`);
    } catch (error) {
      setShareState("error");
      setShareMessage(error instanceof Error ? error.message : "导出失败，请稍后重试。");
    }
  };

  return <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
    <aside>
      <form onSubmit={event => {
        event.preventDefault();
        if (!form.sneakerSlug) return;
        writeLocalCollection(upsertCollectionItem(items, form));
        setForm(emptyForm);
      }} className="space-y-4 border-t-2 border-archive-ink pt-5 lg:sticky lg:top-24">
        <div className="flex items-center gap-2"><Plus className="h-4 w-4 text-archive-red" /><h2 className="text-sm font-semibold uppercase tracking-widest">添加鞋款</h2></div>
        <Field label="鞋款"><select required value={form.sneakerSlug} onChange={event => update("sneakerSlug", event.target.value)} className="field-select"><option value="">从档案中选择</option>{sneakers.map(item => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></Field>
        <Field label="状态"><select value={form.status} onChange={event => update("status", event.target.value)} className="field-select">{statuses.map(status => <option key={status} value={status}>{statusLabels[status]}</option>)}</select></Field>
        <Field label="尺码"><input value={form.size} maxLength={32} onChange={event => update("size", event.target.value)} placeholder="US 9 / EU 42.5" className="field-select" /></Field>
        <Field label="品相"><input value={form.condition ?? ""} maxLength={60} onChange={event => update("condition", event.target.value)} placeholder="全新 / 穿着 / 修复" className="field-select" /></Field>
        <div className="grid grid-cols-[1fr_92px] gap-2"><Field label="入手价"><input type="number" min="0" step="0.01" value={form.purchasePrice ?? ""} onChange={event => update("purchasePrice", event.target.value)} placeholder="0.00" className="field-select" /></Field><Field label="币种"><input value={form.currency ?? ""} maxLength={8} onChange={event => update("currency", event.target.value.toUpperCase())} placeholder="CNY" className="field-select" /></Field></div>
        <Field label="入手日期"><input type="date" value={form.purchaseDate ?? ""} onChange={event => update("purchaseDate", event.target.value)} className="field-select" /></Field>
        <Field label="备注"><textarea value={form.notes} maxLength={500} onChange={event => update("notes", event.target.value)} rows={3} className="field-select h-auto py-3" /></Field>
        <Button type="submit" variant="red" className="w-full">保存</Button>
      </form>
    </aside>
    <section>
      <div className="flex flex-wrap gap-2 border-b border-archive-ink/15 pb-4">{["all", ...statuses].map(status => <button key={status} onClick={() => { setFilter(status); setShareState("idle"); setShareMessage(""); }} className={`border-b-2 px-3 py-2 text-sm transition ${filter === status ? "border-archive-red text-archive-ink" : "border-transparent text-archive-graphite hover:text-archive-ink"}`}>{statusLabels[status]} <span className="ml-1 text-xs opacity-60">{status === "all" ? items.length : items.filter(item => item.status === status).length}</span></button>)}</div>
      <div className="flex flex-wrap items-center gap-3 py-4"><Button type="button" variant="outline" disabled={shareState === "busy"} onClick={downloadList}><Download className="h-4 w-4" /> {shareState === "busy" ? "生成中…" : "下载当前清单 PNG"}</Button><p role="status" className={`text-xs ${shareState === "error" ? "text-archive-red" : "text-archive-graphite"}`}>{shareMessage || "只包含鞋图、名称和收藏状态，不包含私人记录。"}</p></div>
      {visible.length ? <div className="divide-y divide-archive-ink/10">{visible.map(item => {
        const sneaker = sneakerBySlug.get(canonicalSneakerSlug(item.sneakerSlug));
        return <article key={item.sneakerSlug} className="grid grid-cols-[92px_1fr] gap-4 py-5 sm:grid-cols-[132px_1fr_auto] sm:gap-6">
          <div className="aspect-square overflow-hidden bg-white"><SneakerVisual name={sneaker?.name ?? item.sneakerSlug} imageUrl={sneaker?.cardImageUrl} /></div>
          <div className="min-w-0"><p className="text-[11px] font-semibold uppercase tracking-widest text-archive-red">{statusLabels[item.status]} / {sneaker?.modelSeries.name ?? "档案"}</p><Link href={`/sneakers/${sneaker?.slug ?? item.sneakerSlug}`} className="mt-2 block font-editorial text-xl leading-tight hover:text-archive-red sm:text-2xl">{sneaker?.name ?? item.sneakerSlug}</Link><p className="mt-2 text-xs text-archive-graphite">{[item.size, item.condition, item.purchasePrice ? `${item.currency || ""} ${item.purchasePrice}`.trim() : null, item.purchaseDate, item.notes].filter(Boolean).join(" / ") || "暂无备注"}</p><div className="mt-3 flex gap-4 text-xs"><button onClick={() => setForm({ sneakerSlug: sneaker?.slug ?? item.sneakerSlug, status: item.status, size: item.size, condition: item.condition, purchasePrice: item.purchasePrice, currency: item.currency, purchaseDate: item.purchaseDate, notes: item.notes })} className="underline underline-offset-4">编辑</button><Link href={`/community?shoe=${sneaker?.slug ?? item.sneakerSlug}`} className="inline-flex items-center gap-1 text-archive-red">分享穿搭照片 <ArrowUpRight className="h-3 w-3" /></Link></div></div>
          <button onClick={() => writeLocalCollection(removeCollectionItem(items, item.sneakerSlug))} aria-label={`Remove ${sneaker?.name ?? item.sneakerSlug}`} title="Remove pair" className="col-start-2 justify-self-end self-start p-2 text-archive-graphite hover:text-archive-red sm:col-start-3"><Trash2 className="h-4 w-4" /></button>
        </article>;
      })}</div> : <div className="py-20 text-center"><p className="font-editorial text-3xl">{items.length ? "这里还没有鞋" : "从第一双开始整理"}</p><p className="mt-3 text-sm text-archive-graphite">{items.length ? "试试切换状态。" : "从档案挑一双加入鞋柜。"}</p><Link href="/archive" className="mt-6 inline-block text-sm font-medium text-archive-red underline underline-offset-4">浏览档案</Link></div>}
    </section>
  </div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-xs uppercase tracking-widest text-archive-graphite">{label}</span>{children}</label>;
}
