import Link from "next/link";
export default function CommunityPage() {
  return <section className="site-container py-20"><p className="eyebrow">NB ARCHIVE</p><h1 className="mt-5 text-4xl font-semibold">穿搭交流，稍后见。</h1><p className="mt-6 max-w-2xl text-sm leading-8 text-archive-graphite">当前上线的是档案浏览版，暂未开放发帖、评论与图片上传。你可以继续查阅鞋款资料、比较不同鞋型，或在当前浏览器的鞋柜中记录收藏。</p><Link className="mt-8 inline-block text-link" href="/archive">浏览鞋款档案 →</Link></section>;
}
