export const SITE_NAME = "NB Archive";
export const SITE_URL = "https://shang-swk.github.io/nb-archive";

export const DISCLAIMER =
  "This website is an independent fan-made archive and is not affiliated with New Balance or any collaborator brand.";

export const ALLOWED_MODEL_NAMES = [
  "990v1",
  "990v2",
  "990v3",
  "990v4",
  "990v5",
  "990v6",
  "991",
  "991v2",
  "992",
  "993",
  "995",
  "996",
  "997",
  "997.5",
  "998",
  "999",
  "1000"
];

export const RARITY_LABELS: Record<string, string> = {
  general: "常规", limited: "限量", very_limited: "极少量", friends_and_family: "亲友限定", sample: "样品", unknown: "待核实"
};

export const VERIFICATION_LABELS: Record<string, string> = {
  draft: "草稿", imported: "导入待核", unverified: "待核实", needs_source: "缺来源", partially_verified: "部分核实", verified: "已核实", published: "已发布", deprecated: "已归档", duplicate: "重复"
};

export const STATUS_LABELS: Record<string, string> = {
  released: "已发售", rumored: "传闻", upcoming: "即将发售", cancelled: "已取消", archived: "已归档"
};

export const COLOR_FAMILY_LABELS: Record<string, string> = {
  black: "黑色", blue: "蓝色", brown: "棕色", cream: "米白色", green: "绿色",
  grey: "灰色", multi: "多色", orange: "橙色", pink: "粉色", purple: "紫色",
  red: "红色", white: "白色", yellow: "黄色"
};

export const MODEL_ORDER = new Map(ALLOWED_MODEL_NAMES.map((model, index) => [model, index]));
