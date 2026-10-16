type ChineseEditorial = {
  story: string;
  designInspiration?: string;
  culturalContext?: string;
};

const copy: Record<string, ChineseEditorial> = {
  "kith-x-united-arrows-and-sons-x-new-balance-990v3-black-oyster-mushroom": { story: "Kith 十五周年与 United Arrows & Sons 的合作，以黑色麂皮和灰色网眼为底，加入荧光绿色细节。" },
  "kith-x-new-balance-990v3-hallow": { story: "Kith 2026 年四款 99X 联名企划中的 990v3。Hallow 配色搭配猪皮麂皮与网眼。" },
  "kith-x-new-balance-990v4-dusty-mauve": { story: "Kith 2026 年四款 99X 联名企划中的 990v4，以 Dusty Mauve 配色呈现猪皮麂皮和网眼。" },
  "kith-x-new-balance-992-argon": { story: "Kith 2026 年四款 99X 联名企划中的 992，采用 Argon 配色、猪皮麂皮与网眼。" },
  "kith-x-new-balance-993-asteroid": { story: "Kith 2026 年四款 99X 联名企划中的 993，以 Asteroid 配色搭配猪皮麂皮和网眼。" },
  "carhartt-wip-x-new-balance-990v1-sculpture-center": { story: "Carhartt WIP 与 New Balance 的首个鞋履合作选用 990v1，Sculpture Center 企划借鉴社区健身房与工装语汇。" },
  "wtaps-x-new-balance-990v2-quarry": { story: "继 992 之后，WTAPS 再以灰色 990v2 与 New Balance 合作。品牌专题记录了克制的配色和 2021 年 8 月发售。" },
  "patta-x-new-balance-990v3-keep-your-family-close": {
    story: "Patta 首次以 990v3 讲述跨代家庭关系。橄榄绿鞋身配沙色与荧光绿细节，成人和童款同期推出。",
    designInspiration: "橄榄绿、沙色与荧光绿叠在经典 990v3 轮廓上；斑点鞋底与后跟 Patta 标记让联名身份清晰可见。",
    culturalContext: "Patta 与 New Balance 首次同步推出成人与儿童尺码。Kyle Weeks 拍摄了多代同堂的家庭烧烤，为“Keep Your Family Close”主题提供了具体场景。"
  },
  "concepts-x-new-balance-990v4-patina": {
    story: "Concepts 从古董与传承物件出发设计 Patina。上蜡麂皮会随穿着留下痕迹，仿翡翠细节与旅行箱式鞋盒延续“旧物”主题。",
    designInspiration: "上蜡麂皮用于记录穿着痕迹；备用鞋带借鉴旧纺织品，金色五金参考古董首饰，不对称鞋垫图案则来自仿翡翠玻璃器皿。",
    culturalContext: "波士顿发售活动邀请中签者带一位家人到场，对方也获赠一双鞋，让“代际传递”的主题进入真实发售体验。"
  },
  "engineered-garments-x-new-balance-990v5-grey": { story: "Engineered Garments 以不对称的同色层次重新处理 990v5，经 Nepenthes New York 发售。" },
  "dtlr-x-new-balance-990v6-cornerstone": {
    story: "DTLR 的 Cornerstone 在经典灰色网眼与深色麂皮间加入紫色、橙色亮点。品牌宣布于 2025 年 9 月 26 日限量发售 500 双。",
    designInspiration: "灰色网眼、海军蓝和黑色麂皮延续 990 的熟悉基调，荧光色鞋舌和 N 字细节打破灰色秩序。",
    culturalContext: "DTLR 将这双鞋定位为自家独占的 500 双限定，并通过门店和线上渠道发售。"
  },
  "aime-leon-dore-x-new-balance-991-celery": { story: "ALD 的产品页里能看到这双 Celery 991。鞋款和照片有官方出处，但具体是哪天发售，还没查到可靠记录。" },
  "kith-x-new-balance-992-osaka": {
    story: "为 Kith Osaka 开幕而推出的 992，以低饱和蓝绿色网眼搭配麂皮和皮革。实体发售仅在大阪，线上与 App 渠道也提供购买。",
    designInspiration: "大阪开幕企划以蓝、白、灰构成两双鞋的共同配色；992 与 991v2 都有联名鞋垫和 Kith 后跟细节，但分别保留 Made in USA 与 Made in UK 结构。",
    culturalContext: "这双鞋纪念 Kith 在日本的第二间旗舰店。与同期 991v2 相比，992 的线下渠道更具地点属性：Kith 只列出大阪店作为实体发售点。"
  },
  "kith-x-new-balance-991v2-osaka": {
    story: "Kith Osaka 企划中的 Made in UK 991v2，以 Steel Blue 回应日本收藏者熟悉的 1300JP 配色；网眼、麂皮与皮革鞋身加入后跟和鞋垫联名细节。",
    designInspiration: "Kith 明确将 1300JP 的 Steel Blue 作为这双 991v2 的配色参考，让新店开幕与 New Balance 在日本的收藏历史相连。",
    culturalContext: "与同期 992 不同，991v2 经 Kith 更广泛的门店网络及线上渠道发售；两双鞋共同纪念 2025 年 3 月大阪旗舰店开幕。"
  },
  "aime-leon-dore-x-new-balance-993-beef-and-broccoli": { story: "绿鞋面配棕色细节，Beef & Broccoli 这个名字很贴切。ALD 的 993 合作能查到，但我们还没找到品牌讲述这双鞋设计想法的原文。" },
  "wtaps-x-new-balance-992-olive-drab": { story: "军绿色的 WTAPS 992，鞋款身份和货号能在球鞋目录里核对。至于为什么选这个配色，暂时还没找到品牌自己的解释。" },
  "jjjjound-x-new-balance-990v3-olive": { story: "JJJJound 给 990v3 换上了偏灰的橄榄绿。工作室留有这次合作的项目页，可以看到原始图片。" },
  "jjjjound-x-new-balance-992-grey": { story: "灰色 992 看起来简单，细看才会发现深浅和材料的变化。JJJJound 的项目页还保留着这次合作的图片。" },
  "every-now-and-then-x-new-balance-992-westbound": { story: "Joe Freshgoods 的芝加哥社区空间 Every Now and Then 以薄荷绿和奶油色 992 推出首个 New Balance 合作，呼应 West Town 新店开幕。首轮店内发售与学习用品捐赠相关。" },
  "jjjjound-x-new-balance-991-grey": { story: "JJJJound 把熟悉的灰色放到更紧凑的 991 上。工作室的项目页还能看到当时的图片。" },
  "jjjjound-x-new-balance-993-mushroom-white": { story: "Mushroom White 比经典灰更暖，放在 993 上显得很轻。合作和图片都能在 JJJJound 的项目页找到。" }
};

export function getChineseEditorial(slug: string): ChineseEditorial | null {
  return copy[slug] ?? null;
}
