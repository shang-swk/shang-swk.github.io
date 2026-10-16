"use client";

import { publicPath } from "@/lib/public-path";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import type { HomeHeroSlide } from "@/lib/home-presentation";

const slideDuration = 8000;

export function HomeHero({ slides }: { slides: HomeHeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const stopped = paused || hovered || reducedMotion;
  useEffect(() => {
    if (slides.length < 2 || stopped) return;
    const timer = window.setTimeout(() => setActive(index => (index + 1) % slides.length), slideDuration);
    return () => window.clearTimeout(timer);
  }, [active, stopped, slides.length]);
  const slide = slides[active];
  if (!slide) return null;

  return (
    <section className="home-hero" aria-label="首页精选专题" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setHovered(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false); }}>
      <div className="site-container hero-grid">
        <div className="hero-intro">
          <p className="eyebrow flex items-center gap-3"><span className="h-px w-7 bg-archive-red" /> NEW BALANCE / COLLABORATIONS</p>
          <h1 className="hero-title">经典鞋型。<br /><span className="text-archive-red">新的表达。</span></h1>
          <p className="mt-6 text-[11px] font-semibold tracking-[.25em] text-archive-graphite">THE COLLAB ARCHIVE · 9XX & 1000</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-archive-graphite">记录 New Balance 与创作者们的合作。<br className="hidden sm:block" /> 从一双鞋的配色、细节，读到它背后的故事。</p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/archive" className="editorial-button">探索鞋款档案 <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/start" className="text-link">鞋型入门 <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <a href="#curated" className="mt-12 hidden w-fit items-center gap-3 text-[10px] font-medium tracking-[.15em] text-archive-graphite lg:flex"><ArrowDown className="h-4 w-4" /> DISCOVER THE ARCHIVE</a>
        </div>
        <div className={`hero-cover ${slide.tone === "dark" ? "hero-cover-product" : "hero-cover-photo"}`}>
          <div className="relative z-10 flex items-center justify-between px-6 pt-6 text-[10px] font-semibold tracking-[.16em] sm:px-8 sm:pt-7"><span>ON THE COVER</span><span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span></div>
          {slide.tone === "dark" ? <span className="hero-model" aria-hidden="true">{slide.model}</span> : null}
          <Link href={`/sneakers/${slide.slug}`} className="hero-image-link" aria-label={`查看 ${slide.name}`}>
            <AnimatePresence initial={false} mode="wait">
              <motion.img key={slide.imageUrl} src={publicPath(slide.imageUrl)} alt={slide.name} loading="eager" className={slide.tone === "dark" ? "hero-product-image" : "hero-editorial-image"} initial={reducedMotion ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: reducedMotion ? 0 : .45 }} />
            </AnimatePresence>
          </Link>
          <div className="hero-cover-caption">
            <p className="text-[10px] font-semibold tracking-[.17em] opacity-70">{slide.eyebrow}</p>
            <Link href={`/sneakers/${slide.slug}`} className="mt-2 flex items-center justify-between gap-3"><h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{slide.title}</h2><ArrowUpRight className="h-5 w-5 shrink-0" /></Link>
            <p className="mt-2 text-xs leading-6 opacity-75">{slide.description}</p>
          </div>
        </div>
      </div>
      <div className="site-container hero-bottom">
        <span className="hidden text-[10px] tracking-[.14em] text-archive-graphite sm:block">INDEPENDENT SNEAKER ARCHIVE</span>
        <a href={slide.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] text-archive-graphite underline-offset-4 hover:underline">封面图片来源与版权 ↗</a>
        <div className="flex items-center gap-4" aria-label="切换首页专题">
          {slides.map((item, index) => <button key={item.slug} type="button" onClick={() => setActive(index)} aria-label={`查看专题 ${index + 1}：${item.name}`} aria-current={index === active ? "true" : undefined} className={`hero-slide-button ${index === active ? "is-active" : ""}`}>{String(index + 1).padStart(2, "0")}<span className="hero-slide-track">{index === active && !stopped ? <motion.span key={active} initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: slideDuration / 1000, ease: "linear" }} /> : null}</span></button>)}
          <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? "播放首页专题" : "暂停首页专题"} className="flex h-10 w-8 items-center justify-center text-archive-graphite">{paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}</button>
        </div>
      </div>
    </section>
  );
}
