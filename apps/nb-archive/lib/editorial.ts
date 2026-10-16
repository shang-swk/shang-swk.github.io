import type { ArchiveSneaker } from "@/types/archive";

export const starterModels = [
  { model: "990v1", visualCue: "鞋身低而简洁，侧面大片麂皮与网眼，是后来 990 的灰色原型。", representativeSlug: "carhartt-wip-x-new-balance-990v1-sculpture-center" },
  { model: "990v2", visualCue: "侧面 N 更小，后跟露出圆润的 ABZORB 缓震结构。", representativeSlug: "wtaps-x-new-balance-990v2-quarry" },
  { model: "990v3", visualCue: "鞋身更宽厚，侧墙与前掌层次更密，整体轮廓比 v2 饱满。", representativeSlug: "patta-x-new-balance-990v3-keep-your-family-close" },
  { model: "990v4", visualCue: "延续 v3 的厚实感，但鞋面线条收紧，侧面结构更利落。", representativeSlug: "concepts-x-new-balance-990v4-patina" },
  { model: "990v5", visualCue: "后跟外侧多了醒目的支撑片，鞋领也显得更挺。", representativeSlug: "engineered-garments-x-new-balance-990v5-grey" },
  { model: "990v6", visualCue: "去掉传统中足鞍片，覆盖片顺着鞋身流动，线条更有速度感。", representativeSlug: "dtlr-x-new-balance-990v6-cornerstone" },
  { model: "991", visualCue: "鞋身紧凑、后跟有可见缓震窗；常见 Made in UK 版本。", representativeSlug: "aime-leon-dore-x-new-balance-991-celery" },
  { model: "992", visualCue: "鞋身宽而圆，侧面多层麂皮覆盖，前后掌缓震块辨识度很高。", representativeSlug: "kith-x-new-balance-992-osaka" },
  { model: "993", visualCue: "像 991 与 992 之间的平衡点：保留层次，但侧面更平顺修长。", representativeSlug: "aime-leon-dore-x-new-balance-993-beef-and-broccoli" }
] as const;

export const themeCatalog = [
  {
    id: "olive",
    title: "四双绿鞋，四种穿法",
    description: "同样用绿色，有的低调到能天天穿，有的远远就能认出来。",
    picks: [
      { slug: "wtaps-x-new-balance-992-olive-drab", reason: "WTAPS 选了沉稳的军绿，992 原本的层次就很够看。" },
      { slug: "jjjjound-x-new-balance-990v3-olive", reason: "这双 990v3 的绿偏灰，和日常衣服很好搭。" },
      { slug: "patta-x-new-balance-990v3-keep-your-family-close", reason: "橄榄绿里跳出一点亮绿，Patta 的家庭主题也藏在细节里。" },
      { slug: "aime-leon-dore-x-new-balance-993-beef-and-broccoli", reason: "绿加棕，难怪大家叫它 Beef & Broccoli。" }
    ]
  },
  {
    id: "992",
    title: "都是 992，差别在哪？",
    description: "把四双摆在一起看：同一款鞋，不同品牌各挑了自己的颜色和材料。",
    picks: [
      { slug: "kith-x-new-balance-992-osaka", reason: "为大阪新店做的蓝绿色 992，线下只在大阪发售。" },
      { slug: "wtaps-x-new-balance-992-olive-drab", reason: "WTAPS 没有大改 992，用军绿就让它有了自己的样子。" },
      { slug: "jjjjound-x-new-balance-992-grey", reason: "还是灰色，但各处深浅和材质值得凑近看。" },
      { slug: "every-now-and-then-x-new-balance-992-westbound", reason: "薄荷绿配奶油色，来自 Joe Freshgoods 的芝加哥社区空间。" }
    ]
  },
  {
    id: "jjjjound",
    title: "JJJJound 为什么总能把灰做得不一样？",
    description: "从 990v3 看到 993，它改动不多，但每双的比例和颜色都拿捏得不一样。",
    picks: [
      { slug: "jjjjound-x-new-balance-990v3-olive", reason: "这次没用灰，选了同样好搭的暗橄榄绿。" },
      { slug: "jjjjound-x-new-balance-991-grey", reason: "991 比 992 瘦一点，灰色的层次也更紧凑。" },
      { slug: "jjjjound-x-new-balance-992-grey", reason: "992 本来就厚，灰色放在它身上更能看清不同材料。" },
      { slug: "jjjjound-x-new-balance-993-mushroom-white", reason: "Mushroom White 比经典灰更暖，换在 993 上又是另一种感觉。" }
    ]
  }
] as const;

export function getWeeklyCuration(now: Date, catalog: ArchiveSneaker[]) {
  const mondayEpoch = Date.UTC(1970, 0, 5);
  const day = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const week = Math.floor((day - mondayEpoch) / (7 * 24 * 60 * 60 * 1000));
  const theme = themeCatalog[((week % themeCatalog.length) + themeCatalog.length) % themeCatalog.length];
  const bySlug = new Map(catalog.map(sneaker => [sneaker.slug, sneaker]));
  return { ...theme, picks: theme.picks.flatMap(pick => {
    const sneaker = bySlug.get(pick.slug);
    return sneaker ? [{ sneaker, reason: pick.reason }] : [];
  }) };
}

const detailIntroductions: Record<string, string> = {
  "kith-x-new-balance-992-osaka": "为 Kith Osaka 开幕做的蓝绿色 992。线下只在大阪卖，线上也有发售；具体渠道可以看 Kith 的公告。",
  "kith-x-new-balance-991v2-osaka": "同一组大阪限定里还有 991v2。它比 992 瘦一些，一起看更容易认出两种鞋型的差别。",
  "concepts-x-new-balance-990v4-patina": "Patina 的意思是旧物上的包浆。Concepts 用深绿、棕色和会留下穿着痕迹的材料做这双 990v4。",
  "patta-x-new-balance-990v3-keep-your-family-close": "Patta 把家庭主题放进这双 990v3，橄榄绿鞋身上那点亮绿很醒目。"
};

export function getCuratorIntro(slug: string): string | null {
  if (detailIntroductions[slug]) return detailIntroductions[slug];
  for (const theme of themeCatalog) {
    for (const pick of theme.picks) if (pick.slug === slug) return pick.reason;
  }
  return null;
}
