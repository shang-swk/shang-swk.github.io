"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Search } from "lucide-react";

const primaryNav = [
  { href: "/archive", label: "鞋款档案" }, { href: "/models", label: "鞋型索引" },
  { href: "/history", label: "元年史" }, { href: "/brands", label: "合作品牌" }
];
const secondaryNav = [
  { href: "https://shang-swk.github.io/projects/", label: "返回寻影博客" },
  { href: "/start", label: "鞋型入门" }, { href: "/timeline", label: "时间线" },
  { href: "/collection", label: "我的鞋柜" }, { href: "/community", label: "公开版说明" }, { href: "/compare", label: "鞋款对比" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const disclosure = useRef<HTMLDetailsElement>(null);
  const close = () => { if (disclosure.current) disclosure.current.open = false; };
  const navLink = (item: { href: string; label: string }, mobile = false) => <Link key={item.href} href={item.href} onClick={close} aria-current={pathname.startsWith(item.href) ? "page" : undefined} className={mobile ? "menu-link" : "nav-link"}>{item.label}{mobile ? <ArrowUpRight className="h-4 w-4 opacity-40" /> : null}</Link>;
  return (
    <header className="site-header">
      <div className="site-container flex h-[76px] items-center justify-between gap-4 sm:h-[84px]">
        <Link href="/" aria-label="NB Archive 首页" onClick={close} className="flex shrink-0 items-center gap-3"><span className="archive-mark">N<span className="absolute bottom-1 right-1 h-1 w-1 bg-white" /></span><span className="leading-none"><span className="block text-[17px] font-extrabold tracking-[-.045em] sm:text-xl">NB ARCHIVE</span><span className="mt-1.5 block text-[8px] tracking-[.23em] text-archive-graphite">THE COLLABORATION INDEX</span></span></Link>
        <nav className="hidden items-center gap-8 text-[13px] font-medium lg:flex" aria-label="主要导航">{primaryNav.map(item => navLink(item))}</nav>
        <div className="flex items-center gap-2 sm:gap-5">
          <Link href="/archive" aria-label="搜索档案" title="搜索档案" onClick={close} className="flex h-10 w-10 items-center justify-center hover:text-archive-red"><Search className="h-[18px] w-[18px]" strokeWidth={1.5} /></Link>
          <Link href="/collection" className="hidden text-link text-xs sm:inline-flex">我的鞋柜 <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          <details ref={disclosure} className="relative" onKeyDown={event => { if (event.key === "Escape") close(); }}>
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center border-l border-archive-ink/15 hover:text-archive-red [&::-webkit-details-marker]:hidden" aria-label="打开导航"><Menu className="h-5 w-5" strokeWidth={1.5} /></summary>
            <nav className="absolute right-0 top-14 z-50 w-64 border border-archive-ink/10 bg-archive-paper p-4 shadow-editorial" aria-label="更多导航"><p className="px-2 py-3 text-[9px] tracking-[.2em] text-archive-graphite">EXPLORE THE ARCHIVE</p><div className="lg:hidden">{primaryNav.map(item => navLink(item, true))}<div className="my-2 border-t border-archive-ink/10" /></div>{secondaryNav.map(item => navLink(item, true))}</nav>
          </details>
        </div>
      </div>
    </header>
  );
}
