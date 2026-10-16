export function CorrectionForm({ sneakerSlug }: { sneakerSlug: string }) {
  return <p className="border-t border-archive-ink/15 py-6 text-xs leading-7 text-archive-graphite" data-sneaker={sneakerSlug}>当前为独立档案浏览版。资料仍在逐条核对；请结合本页来源链接查阅，在线纠错提交暂未开放。</p>;
}
