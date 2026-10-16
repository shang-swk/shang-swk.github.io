export type ModelGuide = {
  history: string;
  features: string;
  madeInNotes: string;
  sourceUrl: string;
};

const chronology = "https://shop.newbalance.jp/lp-history.html";

export const modelGuides: Record<string, ModelGuide> = {
  "990v1": {
    history: "初代 990 于 1982 年作为高端跑鞋推出。灰色麂皮配网眼的样子，后来几代 990 都能看到。",
    features: "鞋身偏低、线条简单，麂皮与网眼拼接；经典灰最能看清它的原貌。",
    madeInNotes: "现在的 M990GR1 复刻是 Made in USA，不能把它当成 1982 年的元年实物。",
    sourceUrl: "https://www.newbalance.com/pd/made-in-usa-990v4/U990GR4-D-095.html"
  },
  "990v2": {
    history: "1998 年推出的第二代，鞋底缓震更显眼。侧面的 N 缩小了，后跟也比初代更有立体感。",
    features: "露在外面的 ABZORB 后跟、小 N 标、层次更多的跑鞋鞋面。",
    madeInNotes: "Made in USA 的 990v2 有灰色常规款，也有不少联名版本。",
    sourceUrl: chronology
  },
  "990v3": {
    history: "2012 年，990 迎来三十周年，也迎来了 v3。鞋身更宽、更有层次，后来被不少球鞋店选去做联名。",
    features: "麂皮和网眼多层叠加，ENCAP 支撑，中底比早期 990 厚实。",
    madeInNotes: "灰色 M990GY3 是有资料可查的 Made in USA 复刻，不是 1982 年的初代。",
    sourceUrl: "https://store.newbalance.co.jp/press/2021/p-57768"
  },
  "990v4": {
    history: "990v4 于 2016 年推出。它保留了 v3 的厚实感，但把鞋面的线条收得更利落。看过普通灰，再看联名的材质和颜色会更有感觉。",
    features: "网眼配猪皮麂皮，ENCAP 缓震，鞋面拼接比 v3 更紧凑。",
    madeInNotes: "New Balance 将灰色常规款 U990GR4 标为 Made in USA。",
    sourceUrl: "https://www.newbalance.com/pd/made-in-usa-990v4/U990GR4-D-095.html"
  },
  "990v5": {
    history: "2019 年的 990v5 一看还是 990，但后跟和支撑结构有了新变化。它正好站在 v4 与变化更大的 v6 之间。",
    features: "后跟外侧有 TPU 支撑片，采用 ENCAP 缓震；鞋领比上一代更挺。",
    madeInNotes: "经典灰 M990GL5 作为 Made in USA 款销售。",
    sourceUrl: "https://newbalance.pl/buty_meskie_new_balance_m990gl5_szare"
  },
  "990v6": {
    history: "2022 年的 v6 改得更明显：传统的中足鞍片没了，覆盖片顺着鞋身往前走，整双鞋看起来更快。",
    features: "FuelCell 缓震配 ENCAP 支撑，网眼外叠加麂皮与合成材料。",
    madeInNotes: "M990GL6 是 New Balance 的 Made in USA 灰色常规款。",
    sourceUrl: "https://www.newbalance.com/pd/made-in-usa-990v6/M990V6-43094-PMG-NA.html?dwvar_M990V6-MPS_style=M990GL6"
  },
  "990v7": {
    history: "New Balance 日本宣布，990v7 将在 2026 年 10 月 9 至 12 日于东京首次公开展出。截至 10 月 5 日，正式发售日和联名消息都还没有确认。",
    features: "官方公告确认了下一代 990，但未公布技术配置。网传照片不能当作正式产品资料。",
    madeInNotes: "预告属于 Made in U.S.A. 展览的一部分；零售版本的生产细节尚未确认。",
    sourceUrl: "https://company.newbalance.jp/press/2026/p-73643"
  },
  "991": {
    history: "991 于 2001 年推出，鞋身比 992 紧凑。常见的 Made in UK 版本，也让它和美产 990、993 有了不同的位置。",
    features: "麂皮与网眼多层拼接，中底缓震块可见，鞋身偏窄。",
    madeInNotes: "灰色 M991GL 是 Made in UK；具体鞋款仍要看鞋标。",
    sourceUrl: chronology
  },
  "991v2": {
    history: "2023 年的 991v2 保留了 991 熟悉的拼接方式，鞋底和结构却换了新一代配置。它不是初代 991 的另一种配色。",
    features: "全掌 FuelCell、ENCAP 支撑、半透明 ABZORB SBS 缓震块，以及重新设计的鞋面。",
    madeInNotes: "U991GL2 是官方可查的 Made in UK 灰色参考款。",
    sourceUrl: "https://www.newbalance.com.cn/productDetail/U991GL2/MADE%20in%20UK%20991v2/LCL"
  },
  "992": {
    history: "992 于 2006 年推出，到了 2020 年前后又被联名带回大家眼前。它比 991 更宽厚，麂皮层层叠上去，很容易认。",
    features: "前后掌 ABZORB 缓震、ENCAP 支撑，网眼外面叠了多层麂皮。",
    madeInNotes: "U992GY 是官方可查的 Made in USA 灰色款；其他年份可能使用不同货号。",
    sourceUrl: "https://www.newbalance.com/pd/made-in-usa-992-core/U992GY-D-09.html"
  },
  "993": {
    history: "2008 年推出的 993，介于紧凑的 991 和厚实的 992 之间。除了少量联名，它也一直是常见的 Made in USA 鞋款。",
    features: "ABZORB 中底、ACTEVA 缓震、网眼与麂皮鞋面，后跟使用 Ndurance。",
    madeInNotes: "MR993GL 是 New Balance 的 Made in USA 灰色常规款。",
    sourceUrl: "https://www.newbalance.com/pd/made-in-usa-993/MR993GL-D-12.html"
  },
  "995": {
    history: "995 出现在初代 990 之后的八十年代中期。它是 99X 历史里资料较少的一支；没有可靠依据的灰色货号，这里不会硬填。",
    features: "保留早期 99X 跑鞋比例，外形介于初代 990 与 996 之间。",
    madeInNotes: "具体版本的产地要看鞋标和原始资料，不能一概而论。",
    sourceUrl: chronology
  },
  "996": {
    history: "1988 年的 996，比后来的 992、993 瘦得多。它从专业跑鞋走进日常，也成了很多人熟悉的 New Balance 轮廓。",
    features: "鞋身修长，麂皮配网眼，很有八十年代末跑鞋的样子。",
    madeInNotes: "996 有 Made in USA 版本，但不同发售批次的产地不能混为一谈。",
    sourceUrl: chronology
  },
  "997": {
    history: "997 于 1990 年推出。更有雕塑感的鞋底和细密拼接，让它比前几代显得更锐利；普通灰与鲜艳联名都能驾驭。",
    features: "造型鲜明的 ENCAP 中底，麂皮与网眼拼接，后跟棱角清楚。",
    madeInNotes: "U997GY 是有资料可查的 Made in USA 灰色复刻，不是当年生产的元年鞋。",
    sourceUrl: "https://company.newbalance.jp/press/2019/p-49572"
  },
  "997.5": {
    history: "997.5 是 2016 年推出的混合鞋型：上面像 997，下面用 998 的中底。它不是 997 或 998 的下一代。",
    features: "997 鞋面配 998 的 ABZORB 中底，别和普通 997 看混。",
    madeInNotes: "2016 年的灰色 M9975GR 是 Made in USA；其他版本要分别核对。",
    sourceUrl: "https://company.newbalance.jp/press/2016/p-38380"
  },
  "998": {
    history: "1993 年的 998 是 New Balance 第一款用上 ABZORB 缓震的型号。鞋面大片拼接，也给后来的店铺联名留出了发挥空间。",
    features: "ABZORB 中底、大片麂皮覆盖片，以及明显抬高的后跟。",
    madeInNotes: "档案里的不少 998 是 Made in USA，但每双仍要看具体鞋标。",
    sourceUrl: "https://company.newbalance.jp/wp-content/uploads/import/press/pdf/NBPR20170824.pdf"
  },
  "999": {
    history: "999 在九十年代中期加入 99X 家族。弯曲的鞋底和多层鞋面，和前一代 998 放在一起也不会认错。",
    features: "弧线明显的鞋底、多块拼接鞋面，适合颜色鲜明的主题款。",
    madeInNotes: "产地随版本而变，不能把所有 999 都算作美产或英产。",
    sourceUrl: chronology
  },
  "1000": {
    history: "1000 最早在 1999 年发售，是那种一眼带着千禧年前后味道的技术跑鞋。近年复刻后，Joe Freshgoods 等品牌也开始用它做联名。",
    features: "合成材料与网眼层层交叠，比 99X 看起来更前卫。",
    madeInNotes: "1000 不能一概标为美产或英产；具体产地看每次发售。",
    sourceUrl: "https://www.newbalance.com/pd/1000/M1000V1-49912-EGR.html"
  }
};

export type OriginalGreyReference = {
  model: string;
  sku: string;
  sourceUrl: string;
  imageUrl?: string;
  imageSourceUrl?: string;
  isCollaboration: false;
};

export const originalGreyReferences: OriginalGreyReference[] = [
  { model: "990v1", sku: "M990GR1", sourceUrl: "https://eu.kith.com/collections/size-11/products/nbm990gr1", imageUrl: "/images/originals/M990GR1.jpg", imageSourceUrl: "https://nb.scene7.com/is/image/NB/m990gr1_nb_02_i?$pdpflexf2$", isCollaboration: false },
  { model: "990v2", sku: "990GR2", sourceUrl: "https://company.newbalance.jp/shopmagazine/44540", imageUrl: "/images/originals/990GR2.jpg", isCollaboration: false },
  { model: "990v3", sku: "M990GY3", sourceUrl: "https://store.newbalance.co.jp/press/2021/p-57768", imageUrl: "/images/originals/M990GY3.jpg", isCollaboration: false },
  { model: "990v4", sku: "U990GR4", sourceUrl: "https://kith.com/products/nbu990gr4", imageUrl: "/images/originals/U990GR4.jpg", isCollaboration: false },
  { model: "990v5", sku: "M990GL5", sourceUrl: "https://eu.kith.com/products/nbm990gl5", imageUrl: "/images/originals/M990GL5.jpg", isCollaboration: false },
  { model: "990v6", sku: "M990GL6", sourceUrl: "https://www.newbalance.com/pd/made-in-usa-990v6/M990GL6-D-08.html", imageUrl: "/images/originals/M990GL6.jpg", isCollaboration: false },
  { model: "991", sku: "M991GL", sourceUrl: "https://uk.kith.com/collections/new-balance/products/new-balance-991-grey-white", imageUrl: "/images/originals/M991GL.jpg", isCollaboration: false },
  { model: "991v2", sku: "U991GL2", sourceUrl: "https://www.newbalance.com.cn/productDetail/U991GL2/MADE%20in%20UK%20991v2/LCL", imageUrl: "/images/originals/U991GL2.jpg", isCollaboration: false },
  { model: "992", sku: "U992GY", sourceUrl: "https://www.newbalance.com.cn/productDetail/U992GY", imageUrl: "/images/originals/U992GY.jpg", isCollaboration: false },
  { model: "993", sku: "MR993GL", sourceUrl: "https://www.newbalance.com.cn/productDetail/MR993GL/MADE%20in%20USA%20993%20%E7%94%B7%E6%AC%BE/LCL", imageUrl: "/images/originals/MR993GL.jpg", isCollaboration: false },
  { model: "997", sku: "U997GY", sourceUrl: "https://www.newbalance.com.au/pd/made-in-usa-997-core/U997V1-47656.html?dwvar_U997V1-47656_style=U997GY", imageUrl: "/images/originals/U997GY.jpg", isCollaboration: false },
  { model: "997.5", sku: "M9975GR", sourceUrl: "https://company.newbalance.jp/shopmagazine/44540", imageUrl: "/images/originals/M9975GR.jpg", isCollaboration: false }
];
