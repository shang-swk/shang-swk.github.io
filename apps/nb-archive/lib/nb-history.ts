export type HistoryEvent = {
  year: string;
  title: string;
  body: string;
  scope: "brand" | "99x" | "1000" | "collaboration";
  sourceUrl: string;
};

export const newBalanceHistory: HistoryEvent[] = [
  { year: "1906", title: "New Balance 在波士顿起步", body: "William J. Riley 从足弓支撑与合脚体验做起，在波士顿创立了 New Balance。", scope: "brand", sourceUrl: "https://shop.newbalance.jp/lp-history.html" },
  { year: "1960", title: "Trackster 跑鞋问世", body: "Trackster 把专业跑鞋和多鞋宽选择带进品牌的早期发展。", scope: "brand", sourceUrl: "https://shop.newbalance.jp/lp-history.html" },
  { year: "1982", title: "第一双 990", body: "初代 990 定下了高端跑鞋的方向。后来的 v2 到 v6 虽然越改越多，还是能看出它的影子。", scope: "99x", sourceUrl: "https://www.jjjjound.com/blogs/projects/new-balance-iii" },
  { year: "1988", title: "996 走进日常", body: "Made in USA 996 加入 99X 家族，后来也成为很多人日常穿的那双灰鞋。", scope: "99x", sourceUrl: "https://shop.newbalance.jp/lp-history.html" },
  { year: "1990", title: "997 出现", body: "997 的中底更有雕塑感，麂皮与网眼的拼接也更精细。", scope: "99x", sourceUrl: "https://company.newbalance.jp/press/2019/p-49572" },
  { year: "1993", title: "998 首次用上 ABZORB", body: "998 是 New Balance 第一款采用 ABZORB 缓震的鞋型，后来也成了联名常客。", scope: "99x", sourceUrl: "https://company.newbalance.jp/wp-content/uploads/import/press/pdf/NBPR20170824.pdf" },
  { year: "1996", title: "999 加入家族", body: "有起伏的中底和鲜明的九十年代线条，让 999 一眼就能和 998 分开。", scope: "99x", sourceUrl: "https://shop.newbalance.jp/lp-history.html" },
  { year: "1998", title: "990v2", body: "990 来到第二代。更明显的缓震结构，也为跨入新世纪的 991 做了铺垫。", scope: "99x", sourceUrl: "https://www.jjjjound.com/blogs/projects/new-balance-vii" },
  { year: "1999", title: "初代 1000", body: "1000 带着世纪之交的技术跑鞋外形登场。多年后的复刻，又让它回到联名视野。", scope: "1000", sourceUrl: "https://www.newbalance.com/pd/1000/M1000V1-49912-EGR.html" },
  { year: "2001", title: "991 登场", body: "991 的中底缓震块露在外面。后来，这双 Made in UK 鞋也成了联名品牌喜欢的型号。", scope: "99x", sourceUrl: "https://www.jjjjound.com/blogs/projects/new-balance-vii" },
  { year: "2006", title: "992 登场", body: "更宽、更厚、层次更多的 992，在 2020 年前后再次被联名推到聚光灯下。", scope: "99x", sourceUrl: "https://www.jjjjound.com/blogs/projects/reebok-ii-1" },
  { year: "2008", title: "993 登场", body: "993 带来 ABZORB DTS 缓震，也是延续至今的 Made in USA 型号。", scope: "99x", sourceUrl: "https://www.jjjjound.com/blogs/projects/new-balance-993-mushroom-white" },
  { year: "2011", title: "Concepts 999 Kennedy", body: "Concepts 把具体的地域故事做进 999，也让更多人看到球鞋店联名可以讲出自己的东西。", scope: "collaboration", sourceUrl: "https://www.complex.com/sneakers/a/complex/new-balance-and-concepts-team-up-to-re-release-the-999-hyannis-at-complexcon" },
  { year: "2012", title: "990v3 与三十周年", body: "初代 990 推出三十年后，第三代登场。宽厚的鞋身后来承载了不少球鞋店联名。", scope: "99x", sourceUrl: "https://crossoverconceptstore.com/blogs/crossover-main-blog/the-history-of-new-balance-s-990" },
  { year: "2016", title: "990v4", body: "v4 没有抛开 990 熟悉的样子，而是把上一代的线条收得更利落。", scope: "99x", sourceUrl: "https://www.webuomo.jp/sneaker/archive/132161/" },
  { year: "2016", title: "997.5：两双鞋合在一起", body: "997 的鞋面，配上 998 带 ABZORB 的中底，这就是 Made in USA 的 M9975。", scope: "99x", sourceUrl: "https://company.newbalance.jp/press/2016/p-38380" },
  { year: "2018", title: "JJJJound 的第一双 New Balance", body: "棕色 990v3 开启了 JJJJound 与 New Balance 的长期合作。后来那些大地色，能从这里找到起点。", scope: "collaboration", sourceUrl: "https://www.jjjjound.com/blogs/projects/new-balance" },
  { year: "2019", title: "990v5", body: "第五代继续调整 990 的支撑和后跟，之后的 v6 才迎来更明显的外形变化。", scope: "99x", sourceUrl: "https://crossoverconceptstore.com/blogs/crossover-main-blog/the-history-of-new-balance-s-990" },
  { year: "2020", title: "992 再次受到关注", body: "JJJJound 和 WTAPS 都做了 Made in USA 992。两种截然不同的做法，让这个型号又热闹起来。", scope: "collaboration", sourceUrl: "https://www.jjjjound.com/blogs/projects/reebok-ii-1" },
  { year: "2022", title: "990v6 改了鞋身线条", body: "v6 去掉传统的中足鞍片，加入 FuelCell 缓震。Joe Freshgoods 和 Action Bronson 后来也用它做联名。", scope: "99x", sourceUrl: "https://www.newbalance.com/pd/made-in-usa-990v6/M990NV6-4E-14.html" },
  { year: "2023", title: "991v2 接棒", body: "Made in UK 的 991 迎来新一代。Stone Island 等合作方随后选用了这个鞋型。", scope: "99x", sourceUrl: "https://www.goat.com/sneakers/stone-island-x-991v2-made-in-england-black-u991sd2" },
  { year: "2024", title: "1000 回来了", body: "Joe Freshgoods 的 1000 联名，让更多人重新注意到这双九十年代末的技术跑鞋。", scope: "1000", sourceUrl: "https://sneakernews.com/2024/03/04/joe-freshgoods-new-balance-1000-release-date/" },
  { year: "2025", title: "Concepts 把主题带到 1000", body: "Míle 1000 延续了 Concepts 对货币主题的兴趣，也能让人想起它早年的 998 C-Note。", scope: "collaboration", sourceUrl: "https://cncpts.com/blogs/news/cncpts-new-balance-1000-mile" },
  { year: "2025", title: "JJJJound 993 Mushroom", body: "JJJJound 把温暖的 Mushroom 配色用在 Made in USA 993 上，工作室记录了当年一月的发售。", scope: "collaboration", sourceUrl: "https://www.jjjjound.com/blogs/projects/new-balance-993-mushroom-white" },
  { year: "2026", title: "Kith 一次做了四个 99X 型号", body: "990v3、990v4、992 和 993 同时出现在 Kith 的 Made in USA 联名系列里。", scope: "collaboration", sourceUrl: "https://kith.com/blogs/discover/kith-new-balance-99x-series" },
  { year: "2026", title: "Kith 与 United Arrows & Sons 再合作", body: "这次做了两种 990v3 配色。更早的 997.5 和 990v4 合作，也能在两家品牌的关系里串起来看。", scope: "collaboration", sourceUrl: "https://kith.com/blogs/discover/kith-united-arrows-sons-for-new-balance-2026" },
  { year: "2026", title: "Concepts 990v4 Patina", body: "上蜡麂皮会随穿着留下痕迹，Concepts 用它讲旧物与传承。七月有少量鞋款在线上发售。", scope: "collaboration", sourceUrl: "https://cncpts.com/blogs/news/the-cncpts-x-new-balance-990v4-patina" },
  { year: "2026", title: "990v7 即将首次公开展出", body: "New Balance 日本确认，990v7 将于 10 月 9 至 12 日在东京亮相。发售日、货号和联名都尚未公布；网传照片不能当成官方产品图。", scope: "99x", sourceUrl: "https://company.newbalance.jp/press/2026/p-73643" }
];
