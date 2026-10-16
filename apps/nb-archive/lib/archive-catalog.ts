import officialProducts from "../data/catalog/official-products.json";
import officialProjects from "../data/catalog/official-projects.json";
import researchLeads from "../data/research/9xx-1000-collab-photo-leads.json";
import { curatedCatalog } from "./curated-catalog";
import { slugify } from "./utils";

export type CatalogSneaker = {
  name: string;
  brand: string;
  model: string;
  releaseDate: string | null;
  madeIn: string | null;
  colorFamily: string | null;
  story: string;
  designInspiration?: string | null;
  culturalContext?: string | null;
  sku?: string | null;
  colorway?: string | null;
  rarityLevel?: "general" | "limited" | "very_limited" | "friends_and_family" | "sample" | "unknown";
  status?: "released" | "rumored" | "upcoming" | "cancelled" | "archived";
  verificationStatus?:
    | "draft"
    | "imported"
    | "unverified"
    | "needs_source"
    | "partially_verified"
    | "verified"
    | "published"
    | "deprecated"
    | "duplicate";
  imageUrl?: string | null;
  imageSourceUrl?: string | null;
  sourceUrls?: string[];
  slug?: string;
  releaseYear?: number | null;
  materialsText?: string | null;
  officialSourceUrl?: string | null;
  galleryImages?: string[];
  checkedAt?: string;
};

export const brandProfiles: Record<string, { country: string | null; description: string; website: string }> = {
  "The Whitaker Group": {
    country: "USA",
    description: "Retail and cultural group behind APB and other community-led footwear projects.",
    website: "https://www.apbstore.com/"
  },
  "Every Now and Then": {
    country: "USA",
    description: "Chicago retail and community space founded by Joe Freshgoods, with its own New Balance collaboration program.",
    website: "https://everynow-andthen.com/"
  },
  "Aime Leon Dore": {
    country: "USA",
    description: "New York label known for refined sportswear and recurring New Balance collaborations.",
    website: "https://www.aimeleondore.com/"
  },
  Kith: {
    country: "USA",
    description: "New York retailer and lifestyle brand founded by Ronnie Fieg.",
    website: "https://kith.com/"
  },
  "Daniëlle Cathari": {
    country: "Netherlands",
    description: "Amsterdam designer whose pastry-inspired 991v2 releases were presented through Kith Women.",
    website: "https://daniellecathari.com/"
  },
  "Joe Freshgoods": {
    country: "USA",
    description: "Chicago designer whose New Balance work often centers memory, community and Black culture.",
    website: "https://joefreshgoods.com/"
  },
  Bodega: {
    country: "USA",
    description: "Boston-born retailer with narrative-driven sneaker collaborations.",
    website: "https://bdgastore.com/"
  },
  Concepts: {
    country: "USA",
    description: "Boston-rooted boutique known for story-rich New Balance projects.",
    website: "https://cncpts.com/"
  },
  JJJJound: {
    country: "Canada",
    description: "Montreal design studio known for quiet material restraint.",
    website: "https://www.jjjjound.com/"
  },
  WTAPS: {
    country: "Japan",
    description: "Japanese streetwear label founded by Tetsu Nishiyama.",
    website: "https://www.wtaps.com/"
  },
  "Stray Rats": {
    country: "USA",
    description: "Label with punk, rave and subcultural references.",
    website: "https://strayrats.com/"
  },
  "Sneaker Freaker": {
    country: "Australia",
    description: "Sneaker publication and collaborator founded in Melbourne.",
    website: "https://www.sneakerfreaker.com/"
  },
  Auralee: {
    country: "Japan",
    description: "Japanese label known for refined fabrics and muted color.",
    website: "https://auralee.jp/"
  },
  Beams: {
    country: "Japan",
    description: "Japanese retailer and cultural tastemaker.",
    website: "https://www.beams.co.jp/"
  },
  Palace: {
    country: "United Kingdom",
    description: "London skate label with select New Balance projects.",
    website: "https://www.palaceskateboards.com/"
  },
  "Size?": {
    country: "United Kingdom",
    description: "UK retailer with a long history of footwear exclusives.",
    website: "https://www.size.co.uk/"
  },
  Sneakersnstuff: {
    country: "Sweden",
    description: "Stockholm-born sneaker retailer with long-running collaboration programs.",
    website: "https://www.sneakersnstuff.com/"
  },
  Patta: {
    country: "Netherlands",
    description: "Amsterdam boutique and streetwear label with influential New Balance projects.",
    website: "https://www.patta.nl/"
  },
  "Norse Projects": {
    country: "Denmark",
    description: "Copenhagen label known for restrained Scandinavian menswear.",
    website: "https://www.norseprojects.com/"
  },
  "Dover Street Market": {
    country: "United Kingdom",
    description: "Comme des Garcons retail concept and global fashion platform.",
    website: "https://shop.doverstreetmarket.com/"
  },
  "A Ma Maniere": {
    country: "USA",
    description: "The Whitaker Group boutique with elevated storytelling around footwear collaborations.",
    website: "https://www.a-ma-maniere.com/"
  },
  "Action Bronson": {
    country: "USA",
    description: "Artist and longtime New Balance personality behind the Baklava 990v6 series.",
    website: "https://baklavafleamarket.com/"
  },
  "Carhartt WIP": {
    country: "USA",
    description: "Workwear-rooted fashion label with select New Balance collaborations.",
    website: "https://www.carhartt-wip.com/"
  },
  "Junya Watanabe MAN": {
    country: "Japan",
    description: "Comme des Garcons menswear line with utilitarian fashion collaborations.",
    website: "https://www.comme-des-garcons.com/"
  },
  "Engineered Garments": {
    country: "USA",
    description: "Nepenthes label known for asymmetric, utilitarian menswear and New Balance projects.",
    website: "https://nepenthesny.com/"
  },
  "J. Crew": {
    country: "USA",
    description: "American retailer whose New Balance 998 exclusives became important mid-2010s collector records.",
    website: "https://www.jcrew.com/"
  },
  Packer: {
    country: "USA",
    description: "New Jersey sneaker boutique with long-running footwear collaboration history.",
    website: "https://packershoes.com/"
  },
  Paperboy: {
    country: "France",
    description: "Paris cafe and creative studio with food-culture-led sneaker collaborations.",
    website: "https://www.instagram.com/paperboyparis/"
  },
  "Levi's": {
    country: "USA",
    description: "Denim company with select New Balance Made collaborations.",
    website: "https://www.levi.com/"
  },
  Stussy: {
    country: "USA",
    description: "California streetwear label whose 990v4 collaboration is documented in a New Balance Japan release.",
    website: "https://www.stussy.com/"
  },
  DTLR: {
    country: "USA",
    description: "US sneaker retailer with New Balance projects rooted in Washington, D.C. and the DMV area.",
    website: "https://www.dtlr.com/"
  }
};

export const modelReleaseYears: Record<string, number | null> = {
  "990v1": 1982,
  "990v2": 1998,
  "990v3": 2012,
  "990v4": 2016,
  "990v5": 2019,
  "990v6": 2022,
  "990v7": null,
  "991": 2001,
  "991v2": 2023,
  "992": 2006,
  "993": 2008,
  "995": null,
  "996": 1988,
  "997": 1990,
  "997.5": 2016,
  "998": 1993,
  "999": 1996,
  "1000": 1999
};

export const legacyCatalog: CatalogSneaker[] = [
  catalog("Aime Leon Dore x New Balance 991 Made in UK", "Aime Leon Dore", "991", "2022-06-03", "UK", "grey", "A refined ALD Made in UK 991 capsule entry. Source and image rights need curator review."),
  catalog("Aime Leon Dore x New Balance 993", "Aime Leon Dore", "993", "2021-11-01", "USA", "brown", "A Made in USA 993 collaboration remembered for neutral tones and everyday wearability.", {
    sku: "MR993ALD",
    colorway: "Brown / Taupe / Cream",
    imageUrl: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/063/600/009/original/847992_01.jpg.jpeg?action=crop&width=750",
    imageSourceUrl: "https://www.goat.com/sneakers/aime-leon-dore-x-993-made-in-usa-brown-m993ald-brn",
    sourceUrls: ["https://www.goat.com/sneakers/aime-leon-dore-x-993-made-in-usa-brown-m993ald-brn", "https://stockx.com/en-gb/new-balance-993-aime-leon-dore-brown"]
  }),
  catalog("Aime Leon Dore x New Balance 990v2 Life in the Balance", "Aime Leon Dore", "990v2", null, "USA", "grey", "Archive lead for ALD's 990v2 language. Exact release details need curator verification."),
  catalog("Aime Leon Dore x New Balance 997", "Aime Leon Dore", "997", "2019-04-12", "USA", "yellow", "Early ALD x New Balance archive lead from the 997 era. Needs source-backed expansion."),

  catalog("Kith x New Balance 990v1 Dusty Rose", "Kith", "990v1", null, "USA", "pink", "Kith 990v1 archive lead. Date and SKU require manual source review."),
  catalog("Kith x New Balance 990v2 Cyclades", "Kith", "990v2", "2020-06-01", "USA", "blue", "A Ronnie Fieg 990v2 archive lead with Mediterranean color language."),
  catalog("Kith x New Balance 990v3 Genesis", "Kith", "990v3", "2022-06-01", "USA", "blue", "A Made in USA 990v3 connected to Kith's anniversary-era New Balance storytelling.", { sku: "M990KI3", sourceUrls: ["https://www.goat.com/sneakers/kith-x-990v3-made-in-usa-genesis-m990ki3"] }),
  catalog("Kith x New Balance 990v3 Tornado", "Kith", "990v3", "2022-06-01", "USA", "grey", "A storm-toned Kith 990v3 archive lead. Needs manual source verification.", { sku: "M990KT3" }),
  catalog("Kith x United Arrows & Sons x New Balance 990v4", "Kith", "990v4", "2022-07-15", "USA", "grey", "A three-way Made in USA 990v4 story involving Kith and United Arrows & Sons.", { sku: "M990KT4", sourceUrls: ["https://www.nicekicks.com/kith-x-new-balance-990v4-united-arrows-sons/"] }),
  catalog("Kith x New Balance 993 Pistachio", "Kith", "993", "2022-11-23", "USA", "green", "A Pistachio-toned 993 from Kith's broader New Balance program.", { sku: "MR993KH1", sourceUrls: ["https://kith.com/blogs/kith/kith-for-new-balance-993-2002r-pistachio"] }),

  catalog("Joe Freshgoods x New Balance 1000 Pink Mink", "Joe Freshgoods", "1000", "2024-04-08", null, "pink", "A high-visibility return of the New Balance 1000 through Joe Freshgoods.", {
    sku: "M1000JG1",
    colorway: "Pink / Black",
    imageUrl: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/100/501/660/original/1402471_01.jpg.jpeg?action=crop&width=750",
    imageSourceUrl: "https://www.goat.com/sneakers/joe-freshgoods-x-1000-pink-mink-m1000jg1",
    sourceUrls: ["https://www.goat.com/sneakers/joe-freshgoods-x-1000-pink-mink-m1000jg1", "https://sneakernews.com/2024/03/04/joe-freshgoods-new-balance-1000-release-date/"]
  }),
  catalog("Joe Freshgoods x New Balance 1000 Black Ice", "Joe Freshgoods", "1000", "2024-04-08", null, "black", "A darker counterpart in the Joe Freshgoods 1000 rollout.", { sku: "M1000JG2" }),
  catalog("Joe Freshgoods x New Balance 992 No Emotions Are Emotions", "Joe Freshgoods", "992", "2020-02-14", "USA", "red", "Joe Freshgoods' first New Balance collaboration and a major 992 collector moment.", {
    sku: "M992JFG1",
    colorway: "Red / Pink",
    sourceUrls: ["https://newbalance.newsmarket.com/product-news/joe-freshgoods-writes-a-love-letter-to-new-balance/s/3a7be801-31e3-4cf1-bab9-8cc2ce263c81", "https://stockx.com/news/en-gb/new-balance-992-joe-freshgoods-details/"]
  }),
  catalog("Joe Freshgoods x New Balance 992 Aged Well", "Joe Freshgoods", "992", "2025-02-17", "USA", "pink", "A sun-faded follow-up to the original JFG 992 story, framed around aging, memory and long-term partnership.", {
    sourceUrls: ["https://joefreshgoods.com/pages/aged-well"]
  }),
  catalog("Joe Freshgoods x New Balance 990v3 Outside Clothes", "Joe Freshgoods", "990v3", "2021-09-10", "USA", "brown", "A community-centered 990v3 release and one of Joe Freshgoods' most discussed NB projects.", {
    sku: "M990JG3",
    colorway: "Desert Rose / Blue",
    imageUrl: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/096/703/original/782872_01.jpg.jpeg?action=crop&width=750",
    imageSourceUrl: "https://www.goat.com/sneakers/joe-freshgoods-x-990v3-outside-clothes-joe-990v3",
    sourceUrls: ["https://www.goat.com/sneakers/joe-freshgoods-x-990v3-outside-clothes-joe-990v3", "https://joefreshgoods.com/products/990v3"]
  }),
  catalog("Joe Freshgoods x New Balance 990v4 Intro", "Joe Freshgoods", "990v4", "2023-12-15", "USA", "white", "Part of Joe Freshgoods' 1998 990v4 storytelling. Needs source and image review."),
  catalog("Joe Freshgoods x New Balance 990v4 Keisha Blue", "Joe Freshgoods", "990v4", "2023-12-15", "USA", "blue", "A blue 990v4 entry in Joe Freshgoods' 1998 project.", { sku: "U990JO4" }),
  catalog("Joe Freshgoods x New Balance 990v4 Outro", "Joe Freshgoods", "990v4", "2023-12-15", "USA", "black", "A darker 990v4 companion from Joe Freshgoods' 1998 project."),
  catalog("Joe Freshgoods x New Balance 993 Performance Art Arctic Blue", "Joe Freshgoods", "993", "2022-10-21", "USA", "blue", "A Performance Art 993 colorway; SKU and release details need final curator review.", { sku: "MR993JF1", sourceUrls: ["https://www.goat.com/sneakers/joe-freshgoods-x-993-made-in-usa-performance-art-arctic-blue-jfg-993-blue"] }),
  catalog("Joe Freshgoods x New Balance 993 Performance Art Powder Pink", "Joe Freshgoods", "993", "2022-10-17", "USA", "pink", "A pink Performance Art 993 archive lead with marketplace/source references pending.", { sku: "MR993JH1" }),
  catalog("Joe Freshgoods x New Balance 993 Performance Art Sage", "Joe Freshgoods", "993", "2022-10-21", "USA", "green", "The green Performance Art 993 colorway. Needs exact product-page verification.", { sku: "MR993JG1" }),

  catalog("Bodega x New Balance 990v3 Here to Stay", "Bodega", "990v3", "2021-06-01", "USA", "brown", "A layered 990v3 collaboration from Bodega with earthy colors and contrasting details."),
  catalog("Bodega x New Balance 997S No Bad Days", "Bodega", "997", "2019-04-01", null, "multi", "A colorful 997S-adjacent Bodega project kept as a 997-family curator lead."),
  catalog("Bodega x New Balance 997S No Days Off", "Bodega", "997", "2019-09-01", null, "multi", "A second 997S-adjacent Bodega archive lead. Kept for curator review under the 997 family."),
  catalog("Bodega x New Balance 998 Mass Transit", "Bodega", "998", "2019-01-01", "USA", "grey", "A Bodega 998 archive lead. Exact date and source trail need manual verification."),

  catalog("Concepts x New Balance 997 Luxury Goods", "Concepts", "997", "2014-01-01", "USA", "orange", "A landmark Concepts 997 remembered for vivid orange suede and premium presentation.", { rarityLevel: "very_limited" }),
  catalog("Concepts x New Balance 998 C-Note", "Concepts", "998", "2013-09-01", "USA", "green", "One of Concepts' most recognizable 998 releases, built around currency-inspired color references.", { rarityLevel: "very_limited" }),
  catalog("Concepts x New Balance 998 C-Note 10th Anniversary", "Concepts", "998", "2023-11-01", "USA", "green", "The 10th anniversary return of the Concepts C-Note story. Needs exact source verification.", { sku: "U998CN" }),
  catalog("Concepts x New Balance 998 Mint", "Concepts", "998", "2013-01-01", "USA", "green", "A Concepts 998 archive lead with mint-toned material language.", { sku: "M998TNY" }),
  catalog("Concepts x New Balance 998 Grand Tourer", "Concepts", "998", "2015-01-01", "USA", "red", "A Concepts 998 archive lead inspired by automotive grand touring language."),
  catalog("Concepts x New Balance 999 Kennedy", "Concepts", "999", "2011-01-01", null, "blue", "A frequently cited Concepts x New Balance story. Some release details need manual verification.", { rarityLevel: "very_limited" }),
  catalog("Concepts x New Balance 990v2 Tyrian", "Concepts", "990v2", "2022-08-01", "USA", "purple", "A purple-toned 990v2 archive lead from Concepts' Made in USA collaboration language."),
  catalog("J.Crew x New Balance 998 Concrete Jungle", "J.Crew", "998", "2014-01-01", "USA", "grey", "One of J.Crew's most referenced New Balance 998 exclusives from the mid-2010s collector era.", {
    sourceUrls: ["https://www.sneakerfreaker.com/releases/j-crew-x-new-balance-998-concrete-jungle"]
  }),
  catalog("J.Crew x New Balance 998 Midnight Moon", "J.Crew", "998", null, "USA", "blue", "A J.Crew 998 archive lead. Exact release details need source review.", { sku: "M998JC6", verificationStatus: "needs_source" }),
  catalog("J.Crew x New Balance 998 Pebble Blue", "J.Crew", "998", null, "USA", "blue", "A J.Crew 998 archive lead frequently cited by collectors. Needs source-backed verification.", { verificationStatus: "needs_source" }),

  catalog("WTAPS x New Balance 992", "WTAPS", "992", "2020-05-01", "USA", "grey", "A highly regarded 992 joining WTAPS' military-informed restraint with New Balance grey.", {
    sku: "M992WT",
    rarityLevel: "very_limited",
    imageUrl: "https://images.stockx.com/360/New-Balance-992-Wtaps/Images/New-Balance-992-Wtaps/Lv2/img01.jpg?auto=compress&w=576&q=90&dpr=2&updated_at=1609438984&h=384&fm=webp",
    imageSourceUrl: "https://stockx.com/new-balance-992-wtaps",
    sourceUrls: ["https://stockx.com/new-balance-992-wtaps"]
  }),
  catalog("WTAPS x New Balance 990v2", "WTAPS", "990v2", "2021-08-27", "USA", "grey", "A WTAPS 990v2 archive lead with muted military-adjacent language.", { sku: "M990WT2" }),
  catalog("Engineered Garments x New Balance 990v5 Grey", "Engineered Garments", "990v5", "2019-07-23", "USA", "grey", "An asymmetric tonal 990v5 by Engineered Garments, released through Nepenthes New York.", {
    sku: "M990EGG5",
    sourceUrls: ["https://www.sneakerfreaker.com/releases/engineered-garments-mismatch-the-new-balance-990v5", "https://hypebeast.com/2019/7/engineered-garments-new-balance-990v5-release"]
  }),
  catalog("Engineered Garments x New Balance 990v5 Navy", "Engineered Garments", "990v5", "2019-07-23", "USA", "blue", "A navy asymmetric 990v5 from Engineered Garments' three-color collaboration run.", {
    sourceUrls: ["https://www.sneakerfreaker.com/releases/engineered-garments-mismatch-the-new-balance-990v5"]
  }),
  catalog("Engineered Garments x New Balance 990v5 Black", "Engineered Garments", "990v5", "2019-07-23", "USA", "black", "A black asymmetric 990v5 from Engineered Garments' three-color collaboration run.", {
    sourceUrls: ["https://www.sneakerfreaker.com/releases/engineered-garments-mismatch-the-new-balance-990v5"]
  }),

  catalog("JJJJound x New Balance 990v3 Brown Black", "JJJJound", "990v3", "2018-01-01", "USA", "brown", "A quiet 990v3 release that helped define JJJJound's understated New Balance language.", { rarityLevel: "very_limited" }),
  catalog("JJJJound x New Balance 990v3 Olive", "JJJJound", "990v3", null, "USA", "green", "Archive lead for JJJJound 990v3 colorway documentation. Needs manual verification."),
  catalog("JJJJound x New Balance 990v4 Navy", "JJJJound", "990v4", "2021-10-01", "USA", "blue", "A dark, restrained 990v4 collaboration focused on material and proportion."),
  catalog("JJJJound x New Balance 990v4 Grey", "JJJJound", "990v4", "2022-01-01", "USA", "grey", "A grey JJJJound 990v4 archive lead. Exact release details need review."),
  catalog("JJJJound x New Balance 991 Made in UK Grey", "JJJJound", "991", "2023-02-17", "UK", "grey", "A Made in UK 991 extension of JJJJound's minimal New Balance vocabulary."),
  catalog("JJJJound x New Balance 992 Made in USA Grey", "JJJJound", "992", "2020-07-31", "USA", "grey", "A restrained Made in USA 992 archive lead with marketplace image/source verification pending.", {
    sku: "M992J2",
    imageUrl: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/391/749/original/641295_01.jpg.jpeg?action=crop&width=750",
    imageSourceUrl: "https://www.goat.com/sneakers/jjjjound-x-992-m992jjjjound",
    sourceUrls: ["https://www.goat.com/sneakers/jjjjound-x-992-m992jjjjound", "https://stockx.com/en-gb/new-balance-992-jjjjound"]
  }),
  catalog("JJJJound x New Balance 992 Made in USA Green", "JJJJound", "992", "2020-07-31", "USA", "green", "The green companion to JJJJound's 992 project. Needs source/photo review.", { sku: "M992JJ" }),

  catalog("Stray Rats x New Balance 990v3", "Stray Rats", "990v3", "2019-05-17", "USA", "green", "A vivid 990v3 collaboration bringing Stray Rats' graphic attitude into the Made in USA line.", { rarityLevel: "very_limited" }),
  catalog("Stray Rats x New Balance 991 Black Purple", "Stray Rats", "991", "2021-12-17", "UK", "black", "A Made in UK 991 with Stray Rats' subcultural color instincts and unexpected contrast.", { sku: "M991SRP" }),
  catalog("Stray Rats x New Balance 991 Purple Green", "Stray Rats", "991", "2021-12-17", "UK", "purple", "A second Stray Rats 991 colorway lead. Needs source/photo review.", { sku: "W991SRG" }),

  catalog("Sneaker Freaker x New Balance 997.5 Tassie Devil", "Sneaker Freaker", "997.5", "2017-01-01", null, "purple", "A loud 997.5 collaboration inspired by the Tasmanian devil."),
  catalog("Sneaker Freaker x New Balance 998 Tassie Tiger", "Sneaker Freaker", "998", "2012-01-01", "USA", "green", "A 998 archive lead associated with animal-themed New Balance storytelling."),
  catalog("Salehe Bembury x New Balance 990v2 Sand Be The Time", "Salehe Bembury", "990v2", "2022-12-08", "USA", "pink", "A pastel, texture-led 990v2 collaboration from Salehe Bembury. Marketplace image/source verification pending.", {
    sku: "M990SB2",
    imageUrl: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/082/302/353/original/994811_01.jpg.jpeg?action=crop&width=750",
    imageSourceUrl: "https://www.goat.com/en-gb/sneakers/salehe-bembury-x-990v2-made-in-usa-salehe-990v2",
    sourceUrls: ["https://www.goat.com/en-gb/sneakers/salehe-bembury-x-990v2-made-in-usa-salehe-990v2"]
  }),

  catalog("Action Bronson x New Balance 990v6 Baklava", "Action Bronson", "990v6", "2023-03-17", "USA", "multi", "The first high-energy Action Bronson 990v6 colorway and a major 990v6 collaboration moment.", {
    sku: "M990AB6",
    colorway: "Pixel Green / Dazzling Blue",
    imageUrl: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/086/559/642/original/1163349_01.jpg.jpeg?action=crop&width=750",
    imageSourceUrl: "https://www.goat.com/sneakers/action-bronson-x-990v6-made-in-usa-baklava-m990ab6",
    sourceUrls: ["https://www.goat.com/sneakers/action-bronson-x-990v6-made-in-usa-baklava-m990ab6", "https://www.nicekicks.com/action-bronson-x-new-balance-990v6-baklava-m990ab6/"]
  }),
  catalog("Action Bronson x New Balance 990v6 Lapis Lazuli", "Action Bronson", "990v6", "2023-06-30", "USA", "blue", "A blue-forward 990v6 entry in Action Bronson's Baklava universe.", { sku: "M990AC6" }),
  catalog("Action Bronson x New Balance 990v6 Rosewater", "Action Bronson", "990v6", "2024-05-31", "USA", "pink", "A pastel Action Bronson 990v6 archive lead. Source and image review pending."),
  catalog("Action Bronson x New Balance 990v6 Medusa Azul", "Action Bronson", "990v6", "2024-05-31", "USA", "blue", "A bold blue Action Bronson 990v6 archive lead. Source and image review pending."),
  catalog("Carhartt WIP x New Balance 990v6 Sculpture Center", "Carhartt WIP", "990v6", "2023-10-20", "USA", "brown", "A workwear-informed Made in USA 990v6 collaboration from Carhartt WIP."),
  catalog("Auralee x New Balance 990v4", "Auralee", "990v4", "2024-10-01", "USA", "cream", "Auralee archive lead for muted fabric-led New Balance work."),
  catalog("Auralee x New Balance 1000", "Auralee", "1000", "2024-04-01", null, "white", "Archive lead for Auralee's 1000-related collaboration context."),
  catalog("Levi's x New Balance 992", "Levi's", "992", "2020-08-06", "USA", "grey", "A denim-informed 992 archive lead from Levi's and New Balance. Exact source trail needs review."),
  catalog("Packer x New Balance 992", "Packer", "992", null, "USA", "green", "Packer 992 archive lead frequently cited in 992 collector discussions. Needs source-backed verification.", { sku: "M992PK1", verificationStatus: "needs_source" }),
  catalog("Paperboy x New Balance 992", "Paperboy", "992", null, "USA", "grey", "Paperboy Paris 992 archive lead. Needs official release and SKU verification.", { verificationStatus: "needs_source" }),
  catalog("Beams x New Balance 996", "Beams", "996", null, null, "grey", "Beams 996 archive lead. Needs manual verification before publication.", { verificationStatus: "needs_source" }),
  catalog("Palace x New Balance 991 Made in UK", "Palace", "991", "2023-05-12", "UK", "purple", "A Palace Made in UK 991 archive lead. Exact colorway naming needs source review.", {
    sku: "M991PAL",
    colorway: "Taos Taupe / Black / Grape Juice",
    imageUrl: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/088/597/317/original/1204771_01.jpg.jpeg?action=crop&width=750",
    imageSourceUrl: "https://www.goat.com/sneakers/palace-x-991-made-in-england-teal-m991pal",
    sourceUrls: ["https://www.goat.com/sneakers/palace-x-991-made-in-england-teal-m991pal"]
  }),
  catalog("Patta x New Balance 991 Made in UK", "Patta", "991", "2021-01-29", "UK", "brown", "A Patta Made in UK 991 collaboration lead with muted suede and mesh language."),
  catalog("Norse Projects x New Balance 991 Made in UK", "Norse Projects", "991", null, "UK", "grey", "Norse Projects 991 archive lead. Needs source-backed release details."),
  catalog("Sneakersnstuff x New Balance 991 Made in UK", "Sneakersnstuff", "991", null, "UK", "grey", "SNS 991 archive lead. Needs exact SKU and release date."),
  catalog("Size? x New Balance 990v3", "Size?", "990v3", null, "USA", "orange", "Size? 990v3 archive lead. Needs manual verification before publication.", { verificationStatus: "needs_source" }),
  catalog("Dover Street Market x New Balance 991 Made in UK", "Dover Street Market", "991", null, "UK", "black", "Dover Street Market 991 archive lead. Needs exact release/source verification."),
  catalog("A Ma Maniere x New Balance 990v3", "A Ma Maniere", "990v3", "2022-06-01", "USA", "cream", "A Whitaker Group 990v3 archive lead with elevated neutral storytelling."),
  catalog("Junya Watanabe MAN x New Balance 990v5", "Junya Watanabe MAN", "990v5", null, "USA", "black", "Fashion-week adjacent 990v5 archive lead. Needs source review."),
  catalog("Levi's x New Balance 990v3", "Levi's", "990v3", "2021-09-01", "USA", "grey", "A denim-informed 990v3 connecting Levi's material history with Made in USA New Balance.")
];

function catalog(
  name: string,
  brand: string,
  model: string,
  releaseDate: string | null,
  madeIn: string | null,
  colorFamily: string | null,
  story: string,
  extra: Partial<CatalogSneaker> = {}
): CatalogSneaker {
  return {
    name,
    brand,
    model,
    releaseDate,
    madeIn,
    colorFamily,
    story,
    rarityLevel: "limited",
    status: "released",
    verificationStatus: extra.sourceUrls?.some((url) => url.includes("newbalance.com")) ? "partially_verified" : "unverified",
    sourceUrls: [],
    ...extra
  };
}

const knownUnsupported = /Rosewater|Medusa Azul|Sneaker Freaker x New Balance 998 Tassie Tiger|Auralee x New Balance 1000|A Ma Maniere x New Balance 990v3|Bodega x New Balance 998 Mass Transit/i;
const specificSource = (url: string) => {
  const parsed = new URL(url);
  return parsed.pathname.split("/").filter(Boolean).length >= 2 && !/\/brands\/|\/collections\//.test(parsed.pathname);
};
const verifiedUrl = (url: string) => {
  try { return specificSource(url); } catch { return false; }
};

const researchCatalog: CatalogSneaker[] = researchLeads
  .filter((lead) => !lead.modelSeries.includes("/") && !knownUnsupported.test(lead.name))
  .map((lead) => ({
    name: lead.name,
    brand: lead.brand === "AURALEE" ? "Auralee" : lead.brand,
    model: lead.modelSeries,
    sku: lead.sku,
    colorway: null,
    releaseDate: /^\d{4}-\d{2}-\d{2}$/.test(lead.releaseDate ?? "") ? lead.releaseDate : null,
    releaseYear: /^\d{4}/.test(lead.releaseDate ?? "") ? Number(lead.releaseDate!.slice(0, 4)) : null,
    madeIn: lead.madeIn,
    colorFamily: null,
    story: `A ${lead.brand} collaboration on the New Balance ${lead.modelSeries}. Further design details need source review.`,
    rarityLevel: "unknown" as const,
    status: "released" as const,
    verificationStatus: "unverified" as const,
    sourceUrls: lead.sourceUrls.filter(verifiedUrl),
    imageSourceUrl: lead.photoSourcePageUrl,
    imageUrl: null
  }))
  .filter((item) => item.sourceUrls?.length);

const oldSourcedCatalog = legacyCatalog
  .filter((item) => !knownUnsupported.test(item.name) && item.sourceUrls?.some(verifiedUrl))
  .map((item) => ({
    ...item,
    name: item.name.replace(/^J\.Crew/, "J. Crew"),
    brand: item.brand === "J.Crew" ? "J. Crew" : item.brand,
    releaseDate: null,
    releaseYear: item.releaseDate ? Number(item.releaseDate.slice(0, 4)) : null,
    rarityLevel: "unknown" as const,
    verificationStatus: "unverified" as const,
    sourceUrls: item.sourceUrls?.filter(verifiedUrl)
  }));

const officialCatalog = [...officialProducts, ...officialProjects] as CatalogSneaker[];
const all = [...officialCatalog, ...curatedCatalog, ...researchCatalog, ...oldSourcedCatalog];
const records: CatalogSneaker[] = [];
const byIdentity = new Map<string, number>();
const bySku = new Map<string, number>();
const byConfirmedProduct = new Map<string, number>();
const confirmedSameProductPages = new Set([
  "https://cncpts.com/products/new-balance-concepts-x-made-in-usa-990v4-pumpernickel-dark-olivine"
]);
for (const item of all) {
  const identity = slugify(item.name);
  const productPage = [item.officialSourceUrl, ...(item.sourceUrls ?? [])].find(url => url && confirmedSameProductPages.has(url));
  const existing = (productPage ? byConfirmedProduct.get(productPage) : undefined) ?? (item.sku ? bySku.get(item.sku.toUpperCase()) ?? byIdentity.get(identity) : byIdentity.get(identity));
  if (existing !== undefined) {
    const prior = records[existing];
    const editorialEnrichment = Boolean(item.officialSourceUrl && item.story);
    records[existing] = {
      ...prior,
      name: editorialEnrichment ? item.name : prior.name,
      sku: prior.sku ?? item.sku,
      story: editorialEnrichment ? item.story : prior.story,
      designInspiration: item.designInspiration ?? prior.designInspiration,
      culturalContext: item.culturalContext ?? prior.culturalContext,
      releaseDate: item.releaseDate ?? prior.releaseDate,
      releaseYear: item.releaseYear ?? prior.releaseYear,
      colorway: item.colorway ?? prior.colorway,
      materialsText: item.materialsText ?? prior.materialsText,
      madeIn: item.madeIn ?? prior.madeIn,
      colorFamily: item.colorFamily ?? prior.colorFamily,
      verificationStatus: item.verificationStatus === "verified" ? "verified" : prior.verificationStatus,
      officialSourceUrl: editorialEnrichment ? item.officialSourceUrl : prior.officialSourceUrl,
      imageSourceUrl: prior.imageSourceUrl ?? item.imageSourceUrl,
      imageUrl: prior.imageUrl ?? item.imageUrl,
      galleryImages: [...new Set([...(prior.galleryImages ?? []), ...(item.galleryImages ?? [])])],
      sourceUrls: [...new Set([...(prior.sourceUrls ?? []), ...(item.sourceUrls ?? [])])]
    };
    byIdentity.set(slugify(records[existing].name), existing);
    if (item.sku) bySku.set(item.sku.toUpperCase(), existing);
    if (productPage) byConfirmedProduct.set(productPage, existing);
    continue;
  }
  const index = records.push(item) - 1;
  if (item.sku) bySku.set(item.sku.toUpperCase(), index);
  byIdentity.set(identity, index);
  if (productPage) byConfirmedProduct.set(productPage, index);
}

export const archiveCatalog = records;
