import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-archive-graphite">
      <Link href="/" className="hover:text-archive-red">
        首页
      </Link>
      {items.map((item) => (
        <span key={`${item.label}-${item.href ?? "current"}`} className="flex items-center gap-2">
          <ChevronRight className="h-3 w-3" />
          {item.href ? (
            <Link href={item.href} className="hover:text-archive-red">
              {item.label}
            </Link>
          ) : (
            <span className="text-archive-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
