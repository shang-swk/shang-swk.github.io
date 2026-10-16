import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "muted";

export function Badge({
  className,
  children,
  variant = "default"
}: {
  className?: string;
  children: React.ReactNode;
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-archive-ink/15 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.14em] text-archive-graphite",
        variant === "outline" && "border-archive-red/30 text-archive-red",
        variant === "muted" && "border-dashed text-archive-graphite/60",
        className
      )}
    >
      {children}
    </span>
  );
}
