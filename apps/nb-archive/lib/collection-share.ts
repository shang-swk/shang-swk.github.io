import { publicPath } from "./public-path";
import type { ArchiveSneaker } from "@/types/archive";
import type { LocalCollectionItem } from "./local-collection";
import { canonicalSneakerSlug } from "./sneaker-aliases";

export type ShareEntry = { name: string; model: string; statusLabel: string; imageUrl: string | null };
const statusLabels: Record<LocalCollectionItem["status"], string> = { owned: "已拥有", wanted: "想入手", sold: "已出", watching: "关注中" };
export const maxShareItems = 40;

export function selectShareEntries(items: LocalCollectionItem[], sneakers: ArchiveSneaker[]): ShareEntry[] {
  const bySlug = new Map(sneakers.map(sneaker => [sneaker.slug, sneaker]));
  return items.flatMap(item => {
    const sneaker = bySlug.get(canonicalSneakerSlug(item.sneakerSlug));
    return sneaker ? [{ name: sneaker.name, model: sneaker.modelSeries.name, statusLabel: statusLabels[item.status], imageUrl: sneaker.cardImageUrl?.startsWith("/") ? sneaker.cardImageUrl : null }] : [];
  });
}

function linesFor(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth) { line = candidate; continue; }
    if (line) { lines.push(line); line = ""; }
    if (ctx.measureText(word).width <= maxWidth) { line = word; continue; }
    let part = "";
    for (const char of word) {
      if (ctx.measureText(part + char).width > maxWidth && part) { lines.push(part); part = ""; }
      part += char;
    }
    line = part;
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const visible = lines.slice(0, maxLines);
    let last = visible[maxLines - 1];
    while (last && ctx.measureText(`${last}…`).width > maxWidth) last = last.slice(0, -1);
    visible[maxLines - 1] = `${last}…`;
    return visible;
  }
  return lines;
}

function loadLocalImage(url: string): Promise<HTMLImageElement | null> {
  return new Promise(resolve => {
    const image = new Image();
    let settled = false;
    const finish = (value: HTMLImageElement | null) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      resolve(value);
    };
    const timeout = window.setTimeout(() => finish(null), 5000);
    image.onload = () => finish(image);
    image.onerror = () => finish(null);
    image.src = publicPath(url);
  });
}

export async function renderCollectionPng(entries: ShareEntry[], filterLabel: string): Promise<Blob> {
  if (!entries.length) throw new Error("当前筛选没有可导出的鞋款。");
  if (entries.length > maxShareItems) throw new Error(`单张图片最多展示 ${maxShareItems} 双，请缩小筛选范围。`);
  const canvas = document.createElement("canvas");
  const width = 1080, margin = 48, gap = 24, cardWidth = 480, cardHeight = 352;
  canvas.width = width;
  canvas.height = 154 + Math.ceil(entries.length / 2) * (cardHeight + gap) + 72;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("当前浏览器无法创建图片画布。");
  ctx.fillStyle = "#f5f5f2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#1b1b1b";
  ctx.font = "bold 36px system-ui, sans-serif";
  ctx.fillText("NB Archive · 我的鞋柜", margin, 64);
  ctx.font = "20px system-ui, sans-serif";
  ctx.fillStyle = "#666";
  ctx.fillText(`${filterLabel}  /  ${entries.length} 双`, margin, 103);
  ctx.fillStyle = "#a32932";
  ctx.fillRect(margin, 125, 86, 4);

  const images = await Promise.all(entries.map(entry => entry.imageUrl ? loadLocalImage(entry.imageUrl) : Promise.resolve(null)));
  entries.forEach((entry, index) => {
    const x = margin + (index % 2) * (cardWidth + gap);
    const y = 154 + Math.floor(index / 2) * (cardHeight + gap);
    ctx.fillStyle = "#fff";
    ctx.fillRect(x, y, cardWidth, cardHeight);
    ctx.strokeStyle = "#d7d7d3";
    ctx.strokeRect(x + 0.5, y + 0.5, cardWidth - 1, cardHeight - 1);
    ctx.fillStyle = "#f2f2f1";
    ctx.fillRect(x + 12, y + 12, cardWidth - 24, 242);
    const image = images[index];
    if (image) {
      const scale = Math.min((cardWidth - 32) / image.naturalWidth, 232 / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale, drawHeight = image.naturalHeight * scale;
      ctx.drawImage(image, x + (cardWidth - drawWidth) / 2, y + 17 + (232 - drawHeight) / 2, drawWidth, drawHeight);
    } else {
      ctx.fillStyle = "#888";
      ctx.font = "20px system-ui, sans-serif";
      ctx.fillText("图片待补", x + 188, y + 136);
    }
    ctx.fillStyle = "#a32932";
    ctx.font = "bold 17px system-ui, sans-serif";
    ctx.fillText(`${entry.model}  /  ${entry.statusLabel}`, x + 18, y + 279);
    ctx.fillStyle = "#1b1b1b";
    ctx.font = "21px system-ui, sans-serif";
    linesFor(ctx, entry.name, cardWidth - 36, 2).forEach((line, lineIndex) => ctx.fillText(line, x + 18, y + 309 + lineIndex * 26));
  });
  ctx.fillStyle = "#777";
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillText("仅供个人整理 · 图片版权归原始权利人", margin, canvas.height - 34);
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("图片生成失败，请稍后重试。")), "image/png"));
}
