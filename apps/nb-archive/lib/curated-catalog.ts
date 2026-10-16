import type { CatalogSneaker } from "./archive-catalog";

const kith99x = "https://kith.com/blogs/discover/kith-new-balance-99x-series";
const kith2026 = "https://kith.com/blogs/discover/kith-united-arrows-sons-for-new-balance-2026";
const kithOsaka = "https://kith.com/blogs/discover/kith-new-balance-osaka";
const osakaImages = [
  "https://kith.com/cdn/shop/files/1_c52ab6ca-a505-4bd5-a6e3-90854231a8c1.jpg?v=1742312971&width=1200",
  "https://kith.com/cdn/shop/files/2_a217883a-07f4-410b-9ebf-9fd054c454be.jpg?v=1742312973&width=1200",
  "https://kith.com/cdn/shop/files/3_bc091eba-c7b5-4bac-952d-abd3bf8c81a3.jpg?v=1742312976&width=1200",
  "https://kith.com/cdn/shop/files/4_7acbd4de-f37e-4417-9d23-a4bcfa42ae2a.jpg?v=1742312977&width=1200",
  "https://kith.com/cdn/shop/files/5_83f6f5ba-a253-49f1-9b1a-ec8a4e3a2f0e.jpg?v=1742312980&width=1200",
  "https://kith.com/cdn/shop/files/6_e0f6adf6-eb83-4a70-8b79-cb477254789f.jpg?v=1742312983&width=1200",
  "https://kith.com/cdn/shop/files/7_04d8f73a-6082-4160-8370-c594362ac6a2.jpg?v=1742312985&width=1200",
  "https://kith.com/cdn/shop/files/8_c5f97e78-f655-4f66-8784-9865ff6c8294.jpg?v=1742312989&width=1200",
  "https://kith.com/cdn/shop/files/9_654f4d22-887e-4c8c-91de-91cac9ddb536.jpg?v=1742312991&width=1200",
  "https://kith.com/cdn/shop/files/10_f5c85a28-dc7e-45ad-8c7a-7781c033d1c8.jpg?v=1742312995&width=1200",
  "https://kith.com/cdn/shop/files/11_5515921b-e205-4be9-b163-1de81a853261.jpg?v=1742312998&width=1200",
  "https://kith.com/cdn/shop/files/12_b1a66196-c348-4d83-9574-c58fbe45d169.jpg?v=1742313002&width=1200",
  "https://kith.com/cdn/shop/files/13_85dc6c43-d3a7-4fe4-8b00-c711ed04e3a1.jpg?v=1742313005&width=1200",
  "https://kith.com/cdn/shop/files/14_f90b6f23-fc99-4ef4-abf9-9a90ee3cd1ae.jpg?v=1742313008&width=1200"
];

export const curatedCatalog: CatalogSneaker[] = [
  {
    name: "Kith x New Balance 992 Osaka", brand: "Kith", model: "992", sku: "U992KT",
    releaseDate: "2025-03-21", madeIn: "USA", colorFamily: "blue", colorway: "Aegean Blue / Shadow Grey",
    story: "Made for the opening of Kith Osaka, this 992 puts a muted blue-green mesh base beneath premium suede and leather. Kith limited the in-store release to Osaka, while also offering pairs through its online channels and app.",
    designInspiration: "Kith's Osaka opening shaped a two-shoe palette of blue, white and grey; the 992 and 991v2 share co-branded sockliners and Kith heel detailing, but retain their own Made in USA and Made in UK constructions.",
    culturalContext: "The pair marked Kith's second Japanese flagship. The 992 was the more location-specific of the two releases: Kith listed Osaka as its only physical retail location for this model.",
    materialsText: "Mesh; suede; leather", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: kithOsaka, sourceUrls: [kithOsaka, "https://jp.kith.com/blogs/discover/kith-new-balance-osaka", "https://www.goat.com/en-au/sneakers/kith-x-992-made-in-usa-osaka-pack-00011-10000kx9miu"],
    imageSourceUrl: kithOsaka, galleryImages: [osakaImages[3], ...osakaImages.slice(0, 3), ...osakaImages.slice(4, 8)]
  },
  {
    name: "Kith x New Balance 991v2 Osaka", brand: "Kith", model: "991v2", sku: "U991KH2",
    releaseDate: "2025-03-21", madeIn: "UK", colorFamily: "blue", colorway: "Asphalt / Lead / Oyster Mushroom",
    story: "The Made in UK half of Kith's Osaka opening pack revisits Steel Blue, a deliberate nod to the 1300JP colorway admired in Japan. Kith used mesh, suede and leather with heel and sockliner co-branding.",
    designInspiration: "Kith explicitly cites the rare 1300JP Steel Blue as the reference for its 991v2 interpretation, linking a new flagship opening to New Balance's older Japanese collector history.",
    culturalContext: "Unlike the companion 992, Kith distributed the 991v2 through its broader store network as well as online. Both pairs accompanied the March 2025 Osaka flagship opening.",
    materialsText: "Mesh; suede; leather", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: kithOsaka, sourceUrls: [kithOsaka, "https://jp.kith.com/blogs/discover/kith-new-balance-osaka", "https://www.goat.com/sneakers/kith-x-991v2-made-in-england-osaka-pack-00011-10000kx9mie", "https://www.reddit.com/r/Newbalance/comments/1vz7z64/finally_secured_the_osaka_v2/"],
    imageSourceUrl: kithOsaka, galleryImages: [osakaImages[9], osakaImages[8], ...osakaImages.slice(10)]
  },
  {
    name: "Aime Leon Dore x New Balance 1000 Grey", brand: "Aime Leon Dore", model: "1000", sku: "M1000AL1",
    releaseDate: null, releaseYear: 2024, madeIn: null, colorFamily: "grey", colorway: "Grey",
    story: "One of three ALD interpretations of the revived 1000. Grey perforated leather and mesh temper the turn-of-the-millennium running shape; Aimé branding appears on the lateral forefoot.",
    materialsText: "Perforated leather; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.aimeleondore.com/blogs/news/aime-leon-dore-and-new-balance-1000",
    sourceUrls: ["https://www.aimeleondore.com/blogs/news/aime-leon-dore-and-new-balance-1000", "https://www.goat.com/sneakers/aime-leon-dore-x-1000-grey-m1000al1", "https://www.nicekicks.com/aime-leon-dore-new-balance-1000-grey-m1000al1/", "https://www.reddit.com/r/Newbalance/comments/1daeudu/"],
    imageSourceUrl: "https://www.nicekicks.com/aime-leon-dore-new-balance-1000-grey-m1000al1/",
    galleryImages: ["https://www.nicekicks.com/files/2024/05/aime-leon-dore-new-balance-1000-grey-m1000al1-0.jpg"]
  },
  {
    name: "Aime Leon Dore x New Balance 1000 Black", brand: "Aime Leon Dore", model: "1000", sku: "M1000AD1",
    releaseDate: null, releaseYear: 2024, madeIn: null, colorFamily: "black", colorway: "Black",
    story: "The black entry in ALD's three-piece 1000 capsule contrasts an almost all-black technical upper with white stitching and Aimé lettering near the forefoot.",
    materialsText: "Mesh; synthetic leather", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.aimeleondore.com/blogs/news/aime-leon-dore-and-new-balance-1000",
    sourceUrls: ["https://www.aimeleondore.com/blogs/news/aime-leon-dore-and-new-balance-1000", "https://www.goat.com/sneakers/aim-leon-dore-x-1000-black-m1000ad1"]
  },
  {
    name: "Aime Leon Dore x New Balance 1000 Sea Salt Concrete", brand: "Aime Leon Dore", model: "1000", sku: "M1000AC1",
    releaseDate: null, releaseYear: 2024, madeIn: null, colorFamily: "white", colorway: "Sea Salt / Concrete",
    story: "The pale third colorway in ALD's 1000 capsule uses white and soft grey across perforated leather and mesh, setting the shoe's layered construction against a quieter palette.",
    materialsText: "Perforated leather; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.aimeleondore.com/blogs/news/aime-leon-dore-and-new-balance-1000",
    sourceUrls: ["https://www.aimeleondore.com/blogs/news/aime-leon-dore-and-new-balance-1000", "https://www.goat.com/en-ca/sneakers/aim-leon-dore-x-1000-white-m1000ac1"]
  },
  {
    name: "Aime Leon Dore x New Balance 997 OG Mismatch 2024", brand: "Aime Leon Dore", model: "997", sku: "U997ALL",
    releaseDate: "2024-11-29", madeIn: "USA", colorFamily: "multi", colorway: "Grey / Midnight",
    story: "ALD revisited the 997 OG Mismatch that began its New Balance footwear partnership in 2019. Asymmetric yellow, pink, teal and navy accents reference New York handball culture across a grey suede-and-mesh base.",
    designInspiration: "Aimé Leon Dore's own feature links the mismatched color pairing to New York City's handball courts and cultural mix.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.aimeleondore.com/blogs/news/ald-new-balance-997-og-mismatch",
    sourceUrls: ["https://www.aimeleondore.com/blogs/news/ald-new-balance-997-og-mismatch", "https://www.goat.com/en-ca/sneakers/aime-leon-dore-x-997-made-in-usa-og-mismatch-00011-10000aldx9m-mult"]
  },
  {
    name: "Aime Leon Dore x New Balance 997 Dark Moss Angora", brand: "Aime Leon Dore", model: "997", sku: "U997AIM",
    releaseDate: null, releaseYear: 2024, madeIn: "USA", colorFamily: "green", colorway: "Dark Moss / Angora",
    story: "A 2024 ALD Made in USA 997 with olive leather, mesh and contrast stitching. Floral-print sockliners and a yellow leather tongue distinguish it from the OG Mismatch return.",
    materialsText: "Leather; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.aimeleondore.com/blogs/news/ald-new-balance-997-capsule",
    sourceUrls: ["https://www.aimeleondore.com/blogs/news/ald-new-balance-997-capsule", "https://www.goat.com/sneakers/aime-leon-dore-x-997-made-in-usa-dark-moss-angora-u997aim"]
  },
  {
    name: "Palace x New Balance 991 Black Ultra Violet", brand: "Palace", model: "991", sku: "M991PLE",
    releaseDate: "2023-05-12", madeIn: "UK", colorFamily: "purple", colorway: "Black / Griffin / Ultra Violet",
    story: "Palace replaced the familiar 991 mesh with violet ripstop, then mixed dark suede, pink trim and split PALACE heel lettering across the Made in UK runner.",
    materialsText: "Ripstop; suede; leather", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.newbalance.com.tw/gender-neutral/shoes/ML991V1-43247.html",
    sourceUrls: ["https://www.newbalance.com.tw/gender-neutral/shoes/ML991V1-43247.html", "https://www.goat.com/sneakers/palace-x-991-made-in-england-purple-m991ple"]
  },
  {
    name: "Sneakersnstuff x New Balance 991 Secret Colorway", brand: "Sneakersnstuff", model: "991", sku: "M991SNS",
    releaseDate: "2022-03-11", madeIn: "UK", colorFamily: "yellow", colorway: "Yellow / Mint / White / Grey",
    story: "SNS revisited the unexpected first-batch colors of its 2005 New Balance 577 project on the Made in UK 991. Mint and mustard panels against white leather turn a production-history footnote into a deliberate release.",
    materialsText: "Leather; suede", rarityLevel: "unknown", status: "released", verificationStatus: "unverified",
    sourceUrls: ["https://www.goat.com/sneakers/sneakersnstuff-x-991-made-in-england-laser-orange-m991sns", "https://sneakernews.com/2022/03/11/sns-new-balance-991-mint-yellow-m991sns-release-date/"]
  },
  {
    name: "Daniëlle Cathari x New Balance 991v2 Matcha", brand: "Daniëlle Cathari", model: "991v2", sku: "U991DD2",
    releaseDate: "2024-02-09", madeIn: "UK", colorFamily: "brown", colorway: "Chocolate Brown / Pistachio",
    story: "Daniëlle Cathari's debut New Balance partnership for Kith Women drew on her love of pastries. Chocolate and pistachio shades across suede and mesh were echoed by a custom pastry created with Queens bakery Kora.",
    designInspiration: "Kith describes the palette as a pastry reference, extending the idea beyond footwear with a limited cafe collaboration.",
    materialsText: "Suede; mesh", rarityLevel: "limited", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://kith.com/blogs/discover/danielle-cathari-for-new-balance-made-in-uk-991v2",
    sourceUrls: ["https://kith.com/blogs/discover/danielle-cathari-for-new-balance-made-in-uk-991v2", "https://www.goat.com/en-gb/sneakers/danielle-cathari-x-991v2-made-in-england-matcha-u991dd2"],
    imageSourceUrl: "https://kith.com/blogs/discover/danielle-cathari-for-new-balance-made-in-uk-991v2",
    galleryImages: [
      "https://kith.com/cdn/shop/files/1_0dfb5dae-760a-4883-a512-4993c4b0d881.jpg?v=1707267816&width=1200",
      "https://kith.com/cdn/shop/files/2_d2b71f41-76ed-45ec-9a44-29a050a34361.jpg?v=1707267819&width=1200",
      "https://kith.com/cdn/shop/files/3_e43bb662-d9d7-433c-ae52-16edbd912619.jpg?v=1707267821&width=1200",
      "https://kith.com/cdn/shop/files/4_7e5f8a0c-26ce-40bf-b14f-27344746d613.jpg?v=1707267825&width=1200"
    ]
  },
  {
    name: "Daniëlle Cathari x Kith x New Balance 991v2 Reverse", brand: "Daniëlle Cathari", model: "991v2", sku: "U991CK2",
    releaseDate: "2025-10-31", madeIn: "UK", colorFamily: "green", colorway: "Pistachio / Chocolate Brown",
    story: "The second Cathari 991v2 reverses the first pair's balance: pistachio becomes the base and chocolate the accent. Kith Women presented it as a continuation of Cathari's pastry-inspired color story.",
    designInspiration: "A deliberate inversion of the 2024 Chocolate Brown and Pistachio edition, retaining soft suede, open mesh and Cathari tongue embroidery.",
    materialsText: "Suede; mesh", rarityLevel: "limited", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://kith.com/blogs/discover/kith-danielle-cathari-new-balance-made-in-uk-991v2-reverse",
    sourceUrls: ["https://kith.com/blogs/discover/kith-danielle-cathari-new-balance-made-in-uk-991v2-reverse", "https://www.goat.com/en-gb/sneakers/danielle-cathari-x-kith-x-new-balance-991v2-made-in-uk-reverse-u991ck2"],
    imageSourceUrl: "https://kith.com/blogs/discover/kith-danielle-cathari-new-balance-made-in-uk-991v2-reverse",
    galleryImages: [
      "https://eu.kith.com/cdn/shop/files/1_c83bb2bf-aa1a-4547-9791-23b68d0a11a1.jpg?v=1761668570&width=1200",
      "https://eu.kith.com/cdn/shop/files/2_39dffb6e-df48-4ed9-9bd3-75bba75de0a0.jpg?v=1761668570&width=1200",
      "https://eu.kith.com/cdn/shop/files/3_f1a558fc-1c55-45a2-86b9-56bcb2ab769b.jpg?v=1761668570&width=1200",
      "https://eu.kith.com/cdn/shop/files/4_cbf96900-88cb-47a1-8add-35b092b9f841.jpg?v=1761668570&width=1200"
    ]
  },
  {
    name: "Salehe Bembury x New Balance 991v2 Colors Be The Palette", brand: "Salehe Bembury", model: "991v2", sku: "U991SB2",
    releaseDate: "2025-03-13", madeIn: "UK", colorFamily: "purple", colorway: "Purple Heart / Mulled Grape / Nautical Blue",
    story: "Salehe Bembury applies his fingerprint motif to a lavender and grape 991v2, contrasting hairy suede with blue, green, yellow and red accents. Release identity and SKU are documented by GOAT; the design story needs a primary source.",
    materialsText: "Hairy suede; mesh; leather", rarityLevel: "unknown", status: "released", verificationStatus: "unverified",
    sourceUrls: ["https://www.goat.com/sneakers/salehe-bembury-x-991v2-made-in-england-purple-u991sb2"]
  },
  {
    name: "Concepts x New Balance 990v4 Patina", brand: "Concepts", model: "990v4", sku: "U990CP4",
    releaseDate: "2026-07-18", madeIn: "USA", colorFamily: "brown", colorway: "Pumpernickel / Dark Olivine",
    story: "Concepts built Patina around antiques and inherited objects: waxed suede is intended to change with wear, while jadeite-inspired details and a trunk-like box extend the heirloom theme.",
    designInspiration: "Concepts selected waxed suede to acquire marks through wear, then referenced antique textiles in the alternate laces, estate jewelry in the gold hardware and jadeite glassware in the asymmetrical footbed pattern.",
    culturalContext: "The Boston release event invited raffle winners to bring a family member, who received a second pair. That gesture made the brand's idea of an object passed between generations part of the release itself.",
    materialsText: "Waxed suede leather; mesh; synthetic overlays", rarityLevel: "limited", status: "released", verificationStatus: "verified",
    officialSourceUrl: "https://cncpts.com/blogs/news/the-cncpts-x-new-balance-990v4-patina",
    sourceUrls: ["https://cncpts.com/blogs/news/the-cncpts-x-new-balance-990v4-patina", "https://cncpts.com/products/new-balance-concepts-x-made-in-usa-990v4-pumpernickel-dark-olivine"]
  },
  {
    name: "DTLR x New Balance 990v6 Cornerstone", brand: "DTLR", model: "990v6", sku: "U990DT6",
    releaseDate: "2025-09-26", madeIn: "USA", colorFamily: "grey", colorway: "Grey / Navy / Black",
    story: "DTLR's Cornerstone combines classic grey mesh and dark suede with bright purple and orange accents. DTLR announced a 500-pair release for September 26, 2025.",
    designInspiration: "DTLR frames the grey mesh and navy-black suede as a meeting of its own history with the 990 lineage; highlighter-toned tongue and N details, purple and orange accents interrupt the familiar New Balance grey.",
    culturalContext: "The retailer positioned Cornerstone as a DTLR-exclusive 500-pair release, available both in its stores and online rather than a general New Balance launch.",
    materialsText: "Suede; mesh", rarityLevel: "very_limited", status: "released", verificationStatus: "verified",
    officialSourceUrl: "https://www.dtlr.com/blogs/the-lifestyle/the-dtlr-exclusive-new-balance-990v6-cornerstone-is-coming-soon",
    sourceUrls: ["https://www.dtlr.com/blogs/the-lifestyle/the-dtlr-exclusive-new-balance-990v6-cornerstone-is-coming-soon", "https://www.dtlr.com/products/new-balance-990v6-cornerstone-mf-multi-u990dt6"]
  },
  {
    name: "Stussy x New Balance 990v4 Stussy Cream", brand: "Stussy", model: "990v4", sku: "M990SC4",
    releaseDate: "2017-09-29", madeIn: "USA", colorFamily: "cream", colorway: "Stussy Cream",
    story: "Stussy and New Balance used a near-monochrome cream palette for this Made in USA 990v4, with suede, mesh and a Stussy-branded insole. New Balance Japan documented the worldwide launch.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "verified",
    officialSourceUrl: "https://company.newbalance.jp/press/2017/p-38116",
    sourceUrls: ["https://company.newbalance.jp/press/2017/p-38116"]
  },
  {
    name: "Patta x New Balance 990v3 Keep Your Family Close", brand: "Patta", model: "990v3", sku: "M990PP3",
    releaseDate: "2022-09-30", madeIn: "USA", colorFamily: "green", colorway: "Olivine / Green",
    story: "Patta's first 990v3 centers extended family and intergenerational connection. The Amsterdam label paired olivine with sandy and fluorescent green accents, releasing adult and children's sizes together.",
    designInspiration: "The olivine upper and sandy, fluorescent green accents mix a classic New Balance base with Patta's brighter palette; a speckled sole and Patta heel marks keep the partnership legible without changing the 990v3 silhouette.",
    culturalContext: "Patta and New Balance presented adult and kids sizes together for the first time in their partnership. Kyle Weeks photographed a multi-generational family BBQ for the campaign, giving the 'Keep Your Family Close' theme a human setting.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://patta.nl/blogs/news/patta-x-new-balance-990v3",
    sourceUrls: ["https://patta.nl/blogs/news/patta-x-new-balance-990v3", "https://www.goat.com/sneakers/patta-x-990v3-made-in-usa-light-olive-m990pp3"]
  },
  {
    name: "Carhartt WIP x New Balance 990v1 Sculpture Center", brand: "Carhartt WIP", model: "990v1", sku: "M990CH1",
    releaseDate: null, releaseYear: 2022, madeIn: "USA", colorFamily: "blue", colorway: "Dark Navy / Pussywillow Grey",
    story: "The first Carhartt WIP and New Balance footwear project used the 990v1 as part of its Sculpture Center capsule, referencing neighborhood gyms and utilitarian workwear.",
    materialsText: null, rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://carhartt-wip.com.sg/blogs/news/new-balance-x-carhartt-wip",
    sourceUrls: ["https://carhartt-wip.com.sg/blogs/news/new-balance-x-carhartt-wip", "https://eu.kith.com/products/nbm990ch1"]
  },
  {
    name: "Carhartt WIP x New Balance 990v6 Hamilton Brown", brand: "Carhartt WIP", model: "990v6", sku: "M990CH6",
    releaseDate: null, releaseYear: 2023, madeIn: "USA", colorFamily: "brown", colorway: "Hamilton Brown / Military Green",
    story: "Carhartt WIP returned to the 990 line with a 990v6 in Hamilton Brown pigskin suede and synthetic underlays, set against a military-green N and tonal mesh.",
    designInspiration: "Carhartt WIP maps its signature Hamilton Brown workwear color onto soft pigskin suede and synthetic underlays, then uses military green on the N to contrast with the tonal mesh and FuelCell midsole.",
    culturalContext: "The brands describe the 990v6 as a meeting of their histories of durable, recognizable originals: the workwear palette is translated onto New Balance's newer Made in USA running shape.",
    materialsText: "Pigskin suede; synthetic underlays; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://us.carhartt-wip.com/en-us/journal/new-balance-x-carhartt-wip",
    sourceUrls: ["https://us.carhartt-wip.com/en-us/journal/new-balance-x-carhartt-wip", "https://www.goat.com/sneakers/carhartt-wip-x-990v6-made-in-usa-workwear-m990ch6"]
  },
  {
    name: "DTLR x New Balance 990v4 EST DMV Black", brand: "DTLR", model: "990v4", sku: "M990NBK4",
    releaseDate: null, releaseYear: null, madeIn: "USA", colorFamily: "black", colorway: "Black / Red",
    story: "DTLR's regional 990v4 project celebrates the Washington, D.C., Maryland and Virginia area. This black edition carries an EST callout; the retailer documents its SKU and details.",
    materialsText: null, rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.dtlr.com/products/new-balance-990-est-dmv-m990nbk4",
    sourceUrls: ["https://www.dtlr.com/products/new-balance-990-est-dmv-m990nbk4", "https://www.dtlr.com/blogs/the-lifestyle/dtlr-exclusive-new-balance-dc992-discover-celebrate"]
  },
  {
    name: "DTLR x New Balance 992 Discover and Celebrate", brand: "DTLR", model: "992", sku: "M992DT",
    releaseDate: "2021-05-28", madeIn: "USA", colorFamily: "grey", colorway: "Grey / Black / Red",
    story: "DTLR's DC992 pays tribute to Washington, D.C., with the district flag on the heel, reflective silver mesh and scarlet accents. The retailer published the design story and release date.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.dtlr.com/blogs/the-lifestyle/dtlr-exclusive-new-balance-dc992-discover-celebrate",
    sourceUrls: ["https://www.dtlr.com/blogs/the-lifestyle/dtlr-exclusive-new-balance-dc992-discover-celebrate", "https://www.dtlr.com/products/new-balance-m992dt"]
  },
  {
    name: "Kith x New Balance 990v4 Moonrock",
    brand: "Kith", model: "990v4", sku: "U990KT4",
    releaseDate: "2024-10-08", releaseYear: 2024, madeIn: "USA",
    colorFamily: "grey", colorway: "Moonrock",
    story: "Kith's 101 palette returns to the Made in USA 990v4 in Moonrock, pairing mesh and suede with subtle co-branding. Kith presented it alongside the Quarry 1000 in October 2024.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released",
    verificationStatus: "partially_verified",
    officialSourceUrl: "https://kith.com/blogs/discover/kith-101-new-balance",
    sourceUrls: ["https://kith.com/blogs/discover/kith-101-new-balance", "https://jp.kith.com/blogs/discover/kith-101-new-balance", "https://www.goat.com/sneakers/kith-x-990v4-made-in-usa-grey-cream-u990kt4"]
  },
  {
    name: "Kith x New Balance 1000 Quarry",
    brand: "Kith", model: "1000", sku: "M1000KQ",
    releaseDate: "2024-10-08", releaseYear: 2024, madeIn: null,
    colorFamily: "blue", colorway: "Quarry / Weathervane",
    story: "Kith introduced the 1000 to its 101 collaboration program in Quarry, using a suede-and-canvas upper with understated co-branding. It launched alongside the Moonrock 990v4.",
    materialsText: "Suede; canvas", rarityLevel: "unknown", status: "released",
    verificationStatus: "partially_verified",
    officialSourceUrl: "https://kith.com/blogs/discover/kith-101-new-balance",
    sourceUrls: ["https://kith.com/blogs/discover/kith-101-new-balance", "https://jp.kith.com/blogs/discover/kith-101-new-balance", "https://www.goat.com/sneakers/kith-x-1000-light-blue-kith1000-blu"]
  },
  {
    name: "The Whitaker Group x New Balance 990v4 Willful Bias",
    brand: "The Whitaker Group", model: "990v4", sku: "U990WK4",
    releaseDate: "2025-08-14", releaseYear: 2025, madeIn: "USA",
    colorFamily: "green", colorway: "Clay Ash / Salt Marsh",
    story: "The Whitaker Group's Willful Bias 990v4 pairs grey mesh with pale green hairy suede. Its partner-store product page documents the materials, SKU and campaign imagery.",
    materialsText: "Hairy suede; synthetic mesh; rubber outsole",
    rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.apbstore.com/products/jaide-x-made-in-usa-990-v4",
    sourceUrls: ["https://www.apbstore.com/products/jaide-x-made-in-usa-990-v4", "https://www.goat.com/sneakers/jaide-x-990v4-made-in-usa-willful-bias-u990wk4"]
  },
  {
    name: "WTAPS x New Balance 990v2 Quarry",
    brand: "WTAPS", model: "990v2", sku: "M990WT2",
    releaseDate: "2021-08-27", releaseYear: 2021, madeIn: "USA",
    colorFamily: "grey", colorway: "Quarry / Grey",
    story: "WTAPS' second New Balance collaboration followed its 992 with a grey 990v2. The brand's original feature explains the restrained color treatment and documents the August 2021 launch.",
    materialsText: "Nubuck; leather; mesh", rarityLevel: "unknown", status: "released",
    verificationStatus: "partially_verified",
    officialSourceUrl: "https://wtaps.com/en/blogs/feature/19",
    sourceUrls: ["https://wtaps.com/en/blogs/feature/19", "https://stockx.com/new-balance-990v2-wtaps"]
  },
  {
    name: "WTAPS x New Balance 990v6 Moon Mist",
    brand: "WTAPS", model: "990v6", sku: "M990WT6",
    releaseDate: "2023-09-01", releaseYear: 2023, madeIn: "USA",
    colorFamily: "grey", colorway: "Moon Mist / Mirage Gray",
    story: "The third WTAPS take on a 9XX model layers grey suede and ventilated mesh across the streamlined 990v6, with an enlarged USA mark at the heel.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released",
    verificationStatus: "unverified",
    sourceUrls: ["https://www.goat.com/sneakers/wtaps-x-990v6-made-in-usa-grey-m990wt6", "https://www.nicekicks.com/wtaps-x-new-balance-990v6-m990wt6/"]
  },
  {
    name: "Bodega x New Balance 998 Mass Transit",
    brand: "Bodega", model: "998", sku: null,
    releaseDate: "2018-04-27", releaseYear: 2018, madeIn: "USA",
    colorFamily: "multi", colorway: "Blue / Green / Red / Orange",
    story: "Bodega's NB1 998 Mass Transit references Boston's public transportation lines through multicolor suede and mesh. Its shared NB1 customization code is not treated as a unique SKU here.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released",
    verificationStatus: "unverified",
    sourceUrls: ["https://www.goat.com/en-gb/sneakers/bodega-x-998-mass-transit-us998mcp-mass", "https://www.complex.com/sneakers/a/riley-jones/bodega-new-balance-998-mass-transit-release-date"]
  },
  {
    name: "Auralee x New Balance 990v4 Dusty Blue",
    brand: "Auralee", model: "990v4", sku: "U990AL4",
    releaseDate: "2024-12-13", releaseYear: 2024, madeIn: "USA",
    colorFamily: "blue", colorway: "Dusty Blue",
    story: "Auralee's first Made in USA 990 collaboration used a quiet blue-grey palette and nuanced material changes. New Balance Japan documented the Dusty Blue SKU alongside the Taupe companion pair.",
    materialsText: "Nubuck; mesh; suede", rarityLevel: "unknown", status: "released",
    verificationStatus: "verified",
    officialSourceUrl: "https://company.newbalance.jp/shopmagazine/68540",
    sourceUrls: ["https://company.newbalance.jp/shopmagazine/68540", "https://auralee.jp/projects/17", "https://www.goat.com/sneakers/auralee-x-990v4-made-in-usa-indigo-u990al4"]
  },
  {
    name: "Auralee x New Balance 990v4 Taupe",
    brand: "Auralee", model: "990v4", sku: "U990AR4",
    releaseDate: "2024-12-13", madeIn: "USA", colorFamily: "grey", colorway: "Taupe",
    story: "The Taupe half of Auralee's 2024 Made in USA 990v4 pair uses closely related neutral tones across nubuck, mesh and suede. New Balance Japan lists the SKU beside Dusty Blue.",
    materialsText: "Nubuck; mesh; suede", rarityLevel: "unknown", status: "released", verificationStatus: "verified",
    officialSourceUrl: "https://company.newbalance.jp/shopmagazine/68540",
    sourceUrls: ["https://company.newbalance.jp/shopmagazine/68540", "https://auralee.jp/projects/17", "https://www.goat.com/sneakers/auralee-x-990v4-made-in-usa-grey-u990ar4"]
  },
  {
    name: "JJJJound x New Balance 992 Mossy Green",
    brand: "JJJJound", model: "992", sku: "M992JJ",
    releaseDate: null, releaseYear: 2020, madeIn: "USA",
    colorFamily: "green", colorway: "Mossy Green",
    story: "The forest-green counterpart to JJJJound's 2020 grey 992. JJJJound's original project page presents both colorways and documents suede overlays, mesh and Made in USA construction.",
    materialsText: "Suede overlays; mesh upper; rubber outsole",
    rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://www.jjjjound.com/blogs/projects/reebok-ii-1",
    sourceUrls: ["https://www.jjjjound.com/blogs/projects/reebok-ii-1", "https://www.goat.com/en-gb/sneakers/jjjjound-x-992-mossy-green-jjjjound992"]
  },
  ...([
    ["990v3", "Hallow", "U990KT3", "https://www.goat.com/en-gb/sneakers/kith-x-new-balance-990v3-made-in-usa-hallow-u990kt3"],
    ["990v4", "Dusty Mauve", "U990TK4", "https://www.goat.com/sneakers/kith-x-new-balance-990v4-made-in-usa-antler-u990tk4"],
    ["992", "Argon", "U992KI", "https://www.goat.com/sneakers/kith-x-new-balance-992-made-in-usa-argon-u992ki"],
    ["993", "Asteroid", "U993HK", "https://www.goat.com/en-gb/sneakers/kith-x-new-balance-993-made-in-usa-asteroid-u993hk"]
  ] as const).map(([model, color, sku, listing]) => ({
    name: `Kith x New Balance ${model} ${color}`,
    brand: "Kith",
    model,
    colorway: color,
    releaseDate: "2026-05-11",
    releaseYear: 2026,
    madeIn: "USA",
    colorFamily: null,
    story: `Part of Kith's four-model 99X collaboration capsule, introduced in May 2026. This ${model} release uses the ${color} colorway and pigskin suede with mesh.`,
    materialsText: "Pigskin suede; mesh",
    sku,
    rarityLevel: "unknown" as const,
    status: "released" as const,
    verificationStatus: "partially_verified" as const,
    officialSourceUrl: kith99x,
    sourceUrls: [kith99x, listing]
  })),
  {
    name: "Kith x New Balance 993 Spring 101",
    brand: "Kith", model: "993", sku: null, releaseDate: "2023-03-10", releaseYear: 2023,
    madeIn: "USA", colorFamily: null, colorway: "Spring 101",
    story: "Kith's Spring 101 palette is applied to a 993 with suede panels, mesh and synthetic nubuck overlays.",
    materialsText: "Suede; mesh; synthetic nubuck", rarityLevel: "unknown", status: "released",
    verificationStatus: "partially_verified",
    officialSourceUrl: "https://kith.com/blogs/discover/kith-for-new-balance-993-spring-102",
    sourceUrls: ["https://kith.com/blogs/discover/kith-for-new-balance-993-spring-102"]
  },
  {
    name: "Kith x New Balance 993 Pistachio",
    brand: "Kith", model: "993", sku: "MR993KH1", releaseDate: null, releaseYear: 2022,
    madeIn: "USA", colorFamily: "green", colorway: "Pistachio",
    story: "A 993 from Kith and New Balance's Pistachio collaboration. The matching 2002R belongs outside this archive's model scope.",
    rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://kith.com/blogs/discover/kith-for-new-balance-993-2002r-pistachio",
    sourceUrls: ["https://kith.com/blogs/discover/kith-for-new-balance-993-2002r-pistachio"]
  },
  {
    name: "Kith x United Arrows & Sons x New Balance 990v3 Black Oyster Mushroom",
    brand: "Kith", model: "990v3", sku: "U990TA3", releaseDate: "2026-10-02", releaseYear: 2026,
    madeIn: "USA", colorFamily: "black", colorway: "Black / Oyster Mushroom",
    story: "Kith's fifteenth-anniversary collaboration with United Arrows & Sons pairs black suede and grey mesh with neon green accents.",
    materialsText: "Pigskin suede; mesh", rarityLevel: "unknown", status: "released",
    verificationStatus: "partially_verified", officialSourceUrl: kith2026, sourceUrls: [kith2026]
  },
  {
    name: "Concepts x New Balance 997 Montage",
    brand: "Concepts", model: "997", sku: "U997CNP", releaseDate: "2025-12-11", releaseYear: 2025,
    madeIn: "USA", colorFamily: null, colorway: "Montage",
    story: "Concepts returned to the Made in USA 997 with a montage referencing earlier 997 collaborations.",
    rarityLevel: "unknown", status: "released", verificationStatus: "unverified",
    sourceUrls: ["https://www.sneakerfiles.com/cncpts-new-balance-997-montage/"]
  },
  {
    name: "Concepts x New Balance 998 C-Note 2013",
    brand: "Concepts", model: "998", sku: "M998TN2", releaseDate: "2013-09-14", releaseYear: 2013,
    madeIn: "USA", colorFamily: "cream", colorway: "Stone / Off White / Royal Green",
    story: "The original C-Note 998 translated the newly redesigned hundred-dollar bill into off-white suede, olive green and royal blue. The 2023 U998CN edition is a separate anniversary reissue.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "unverified",
    sourceUrls: ["https://www.goat.com/en-mx/sneakers/m998-concepts-c-note-m998tn2"]
  },
  {
    name: "Kith x Madison Square Garden x New Balance 993 Knicks Home",
    brand: "Kith", model: "993", sku: "U993MS", releaseDate: "2025-11-03", releaseYear: 2025,
    madeIn: "USA", colorFamily: "grey", colorway: "Ancient Scroll / Grey Matter",
    story: "Kith, New Balance and Madison Square Garden revisit the 993 in a home-court palette with orange N branding, blue mesh and pale suede.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://kith.com/blogs/discover/kith-new-balance-for-madison-square-garden-made-in-usa-993",
    sourceUrls: ["https://kith.com/blogs/discover/kith-new-balance-for-madison-square-garden-made-in-usa-993", "https://www.goat.com/sneakers/kith-x-madison-square-garden-x-new-balance-993-made-in-usa-new-york-knicks-home-u993ms"]
  },
  {
    name: "Kith x Madison Square Garden x New Balance 993 Knicks Away",
    brand: "Kith", model: "993", sku: "U993MG", releaseDate: "2025-11-03", releaseYear: 2025,
    madeIn: "USA", colorFamily: "blue", colorway: "Navy / Princess Blue",
    story: "The away-court companion to the 2025 Kith and Madison Square Garden 993, built around royal blue mesh, navy suede and orange branding.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released", verificationStatus: "partially_verified",
    officialSourceUrl: "https://kith.com/blogs/discover/kith-new-balance-for-madison-square-garden-made-in-usa-993",
    sourceUrls: ["https://kith.com/blogs/discover/kith-new-balance-for-madison-square-garden-made-in-usa-993", "https://www.goat.com/sneakers/kith-x-madison-square-garden-x-new-balance-993-made-in-usa-new-york-knicks-away-u993mg"]
  },
  listing("Aime Leon Dore x New Balance 993 Pine Grove", "Aime Leon Dore", "993", "U993ALD", null, "https://www.goat.com/en-gb/sneakers/new-balance-aime-leon-dore-x-993-made-in-usa-pine-grove-u993ald", "green", "USA"),
  listing("JJJJound x New Balance 993 Military Urban Grey Black", "JJJJound", "993", "U993JD", null, "https://www.goat.com/en-ca/sneakers/jjjjound-x-993-made-in-usa-military-urban-grey-black-u993jd", "grey", "USA"),
  listing("Kith x Madison Square Garden x New Balance 990v6 Knicks", "Kith", "990v6", "U990KN6", "2023-11-06", "https://www.goat.com/sneakers/ronnie-fieg-x-madison-square-garden-x-990v6-made-in-usa-new-york-knicks-m990kn6", "cream", "USA"),
  listing("Kith x Madison Square Garden x New Balance 991v2 Knicks", "Kith", "991v2", "U991KT2", "2024-11-04", "https://www.goat.com/en-ca/sneakers/kith-x-madison-square-garden-x-991v2-made-in-england-new-york-knicks-u991kt2", "cream", "UK"),
  listing("Aime Leon Dore x New Balance 993 Taupe", "Aime Leon Dore", "993", "MR993ALL", "2021-11-09", "https://www.goat.com/en-nl/sneakers/aime-leon-dore-x-993-made-in-usa-taupe-m993ald-taupe", "cream", "USA"),
  listing("Salehe Bembury x New Balance 1000 Fog Be The Cloud", "Salehe Bembury", "1000", "M1000BM", "2025-09-05", "https://www.goat.com/sneakers/salehe-bembury-x-1000-fog-be-the-cloud-m1000bm", "blue"),
  listing("Salehe Bembury x New Balance 1000 Fog Be The Cloud Berry", "Salehe Bembury", "1000", "M1000CL", null, "https://www.goat.com/en-au/sneakers/salehe-bembury-x-new-balance-1000-fog-be-the-cloud-berry-m1000cl"),
  listing("Concepts x New Balance 1000 Mile", "Concepts", "1000", "M1000CN", "2025-03-14", "https://www.goat.com/sneakers/concepts-x-1000-m-le-m1000cn", "green"),
  listing("Dover Street Market x New Balance 991v2 Triple Black", "Dover Street Market", "991v2", "U991DS2", "2025-02-21", "https://www.goat.com/sneakers/dover-street-market-x-991v2-made-in-england-triple-black-u991ds2", "black", "UK"),
  {
    ...listing("Ronnie Fieg x Frank Lloyd Wright Foundation x New Balance 998 Broadacre City Apricot", "Kith", "998", "U998KT1", "2023-04-15", "https://www.goat.com/sneakers/ronnie-fieg-x-frank-lloyd-wright-foundation-x-998-made-in-usa-broadacre-city-apricot-998-broadacre-org", "multi", "USA"),
    officialSourceUrl: "https://kith.com/blogs/discover/ronnie-fieg-frank-lloyd-wright-foundation-for-new-balance-998-broadacre-city",
    sourceUrls: ["https://kith.com/blogs/discover/ronnie-fieg-frank-lloyd-wright-foundation-for-new-balance-998-broadacre-city", "https://www.goat.com/sneakers/ronnie-fieg-x-frank-lloyd-wright-foundation-x-998-made-in-usa-broadacre-city-apricot-998-broadacre-org"]
  },
  {
    ...listing("Ronnie Fieg x Frank Lloyd Wright Foundation x New Balance 998 Broadacre City Chutney", "Kith", "998", "U998KH1", "2023-04-15", "https://www.goat.com/en-gb/sneakers/ronnie-fieg-x-frank-lloyd-wright-foundation-x-998-made-in-usa-broadacre-city-brick-red-998-broadacre-red", "multi", "USA"),
    officialSourceUrl: "https://www.newbalance.se/sv/pd/kith-x-new-balance-made-in-usa-998/U998V1-42583.html",
    sourceUrls: ["https://www.newbalance.se/sv/pd/kith-x-new-balance-made-in-usa-998/U998V1-42583.html", "https://kith.com/blogs/discover/ronnie-fieg-frank-lloyd-wright-foundation-for-new-balance-998-broadacre-city", "https://www.goat.com/en-gb/sneakers/ronnie-fieg-x-frank-lloyd-wright-foundation-x-998-made-in-usa-broadacre-city-brick-red-998-broadacre-red"]
  },
  listing("Kith x New Balance 991v2 Moonrock", "Kith", "991v2", "U991TK2", "2026-03-16", "https://www.goat.com/sneakers/kith-x-new-balance-991v2-made-in-uk-moonrock-u991tk2", "grey", "UK"),
  listing("Kith x Madison Square Garden x New Balance 990v6 New York Rangers", "Kith", "990v6", "U990KR6", "2023-11-06", "https://www.goat.com/sneakers/ronnie-fieg-x-madison-square-garden-x-990v6-made-in-usa-new-york-rangers-m990kr6", "blue", "USA"),
  {
    ...listing("thisisneverthat x New Balance 991v2 Rock Ridge", "thisisneverthat", "991v2", "U991TN2", "2025-05-09", "https://www.goat.com/sneakers/thisisneverthat-x-991v2-made-in-england-grey-u991tn2", "grey", "UK"),
    story: "thisisneverthat reworked the Made in UK 991v2 in layered greys, reflective accents and co-branded details. The label launched it ahead of the wider New Balance release.",
    materialsText: "Pigskin suede; synthetic nubuck; mesh",
    officialSourceUrl: "https://www.newbalance.co.za/gender-neutral/shoes/U991V2-49963.html",
    sourceUrls: ["https://www.newbalance.co.za/gender-neutral/shoes/U991V2-49963.html", "https://www.goat.com/sneakers/thisisneverthat-x-991v2-made-in-england-grey-u991tn2"]
  },
  listing("Stone Island x New Balance 991v2 Black", "Stone Island", "991v2", "U991SD2", "2023-10-18", "https://www.goat.com/sneakers/stone-island-x-991v2-made-in-england-black-u991sd2", "black", "UK"),
  listing("Stone Island x New Balance 991v2 Ghost Pack Black", "Stone Island", "991v2", "U991SK2", "2024-09-26", "https://www.goat.com/sneakers/stone-island-x-991v2-made-in-uk-ghost-pack-black-u991sk2", "black", "UK"),
  listing("Stone Island x New Balance 991v2 Ghost Pack Beige", "Stone Island", "991v2", "U991SE2", "2024-09-26", "https://www.goat.com/sneakers/stone-island-x-991v2-made-in-uk-ghost-pack-sand-u991se2", "cream", "UK"),
  {
    name: "Every Now and Then x New Balance 992 Westbound",
    brand: "Every Now and Then", model: "992", sku: "U992EN1",
    releaseDate: "2026-07-11", releaseYear: 2026, madeIn: "USA",
    colorFamily: "green", colorway: "Mint / Gum",
    story: "Joe Freshgoods' Chicago community space Every Now and Then introduced its first New Balance collaboration with a mint and cream 992 for the shop's West Town opening. The first in-store release was tied to a school-supply donation.",
    materialsText: "Suede; mesh", rarityLevel: "unknown", status: "released",
    verificationStatus: "partially_verified",
    officialSourceUrl: "https://everynow-andthen.com/products/new-balance-made-in-usa-990v4-pumpernickel-pink-chalk-copy",
    sourceUrls: ["https://everynow-andthen.com/products/new-balance-made-in-usa-990v4-pumpernickel-pink-chalk-copy", "https://www.nicekicks.com/every-now-and-then-new-balance-made-in-usa-992-westbound-u992en1/", "https://www.goat.com/sneakers/992-made-in-usa-mint-gum-u992en1"]
  },
  listing("J. Crew x New Balance 998 Independence Day", "J. Crew", "998", "M998JS4", null, "https://www.goat.com/sneakers/j-crew-x-998-independence-day-m998js4", "multi", "USA"),
  listing("Concepts x New Balance 998 Boston Marathon", "Concepts", "998", "US998MC1", null, "https://www.goat.com/sneakers/concepts-x-new-balance-998-boston-marathon-us998mc1", null, "USA")
  ,listing("Kith x New Balance 991 Vetiver", "Kith", "991", "M991KI1", "2026-03-16", "https://www.goat.com/sneakers/kith-x-new-balance-991v1-made-in-uk-vetiver-m991ki1", "grey", "UK")
  ,listing("Kith x New Balance 991 Vetiver Womens", "Kith", "991", "W991KI1", "2026-03-16", "https://www.goat.com/sneakers/kith-x-new-balance-wmns-991v1-made-in-uk-vetiver-w991ki1", "grey", "UK")
  ,listing("Stone Island x New Balance 991v2 Ghost Pack Military Green", "Stone Island", "991v2", "U991SC2", "2024-09-26", "https://www.goat.com/en-au/sneakers/stone-island-x-991v2-made-in-uk-ghost-pack-green-u991sc2", "green", "UK")
  ,listing("Kith x New Balance 990v4 Moonrock", "Kith", "990v4", "U990KT4", null, "https://www.goat.com/sneakers/kith-x-990v4-made-in-usa-grey-cream-u990kt4", "grey", "USA")
  ,listing("Concepts x New Balance 997 New York", "Concepts", "997", null, null, "https://cncpts.com/blogs/news/117877443-concepts-x-new-balance-997-new-york", "blue", "USA")
  ,listing("Bodega x New Balance 990v3 Here to Stay", "Bodega", "990v3", "M990BD3", "2021-06-16", "https://www.goat.com/en-de/sneakers/bodega-x-990v3-made-in-usa-15th-anniversary-bodega-990v3", "brown", "USA")
  ,listing("WTAPS x New Balance 992 Olive Drab", "WTAPS", "992", "M992WT", "2020-05-01", "https://www.goat.com/sneakers/wtaps-x-992-made-in-usa-olive-drab-m992wt", "green", "USA")
  ,listing("Sneaker Freaker x New Balance 997.5 Tassie Tiger", "Sneaker Freaker", "997.5", "ML997HSF", "2016-07-15", "https://www.goat.com/sneakers/sneaker-freaker-x-new-balance-997-5-tassie-tiger-ml997hf", "black")
  ,listing("Sneaker Freaker x New Balance 998 Tassie Devil", "Sneaker Freaker", "998", "CM998SNF", "2013-03-16", "https://www.goat.com/sneakers/cm998-tassie-devil-sneaker-freaker-cm998snf", "purple", "USA")
];

function listing(name: string, brand: string, model: string, sku: string | null, releaseDate: string | null, url: string, colorFamily: string | null = null, madeIn: string | null = null): CatalogSneaker {
  const official = sku === "M1000CN" ? "https://cncpts.com/blogs/news/cncpts-new-balance-1000-mile" : sku !== null && ["M991KI1", "W991KI1", "U991TK2"].includes(sku) ? "https://kith.com/blogs/discover/kith-101-new-balance-spring-2026" : null;
  return { name, brand, model, sku, releaseDate, releaseYear: releaseDate ? Number(releaseDate.slice(0, 4)) : null, colorway: null, colorFamily,
    madeIn, story: `${brand} x New Balance ${model}. Product identity and SKU are documented by the linked marketplace listing; design notes await an official or editorial source.`,
    rarityLevel: "unknown", status: "released", verificationStatus: official ? "partially_verified" : "unverified", officialSourceUrl: official, sourceUrls: [url, ...(official ? [official] : [])] };
}
