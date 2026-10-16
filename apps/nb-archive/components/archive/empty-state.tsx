import { Button } from "@/components/ui/button";

export function EmptyState({
  title = "没有找到符合条件的鞋款",
  description = "试试更宽的关键词，或清空筛选条件。",
  onClear
}: {
  title?: string;
  description?: string;
  onClear?: () => void;
}) {
  return (
    <div className="rounded-lg border border-dashed border-archive-ink/20 bg-white/30 p-12 text-center">
      <p className="font-editorial text-3xl">{title}</p>
      <p className="mt-3 text-sm text-archive-graphite">{description}</p>
      {onClear ? <Button type="button" variant="outline" className="mt-6" onClick={onClear}>清空筛选</Button> : null}
    </div>
  );
}
