import { ModelFamily, PrismaClient, RarityLevel, SneakerStatus, SourceType, VerificationStatus } from "@prisma/client";
import { fallbackSneakers } from "../lib/fallback-data";
import { brandProfiles, modelReleaseYears } from "../lib/archive-catalog";
import { slugify } from "../lib/utils";
import { modelGuides } from "../lib/model-guides";

const db = new PrismaClient();

async function main() {
  let inserted = 0;
  let refreshed = 0;
  for (const [name, guide] of Object.entries(modelGuides)) {
    await db.modelSeries.upsert({
      where: { name },
      create: {
        name, slug: slugify(name), family: name === "1000" ? ModelFamily.ONE_THOUSAND : ModelFamily.NINETY_NINE_X,
        releaseYear: modelReleaseYears[name] ?? null, description: guide.history, features: guide.features, madeInNotes: guide.madeInNotes
      },
      update: { releaseYear: modelReleaseYears[name] ?? null, description: guide.history, features: guide.features, madeInNotes: guide.madeInNotes }
    });
  }
  for (const item of fallbackSneakers) {
    const profile = brandProfiles[item.brand.name];
    const brand = await db.brand.upsert({
      where: { slug: item.brand.slug },
      create: { name: item.brand.name, slug: item.brand.slug, country: profile?.country, description: profile?.description, officialWebsite: profile?.website },
      update: { description: profile?.description, officialWebsite: profile?.website }
    });
    const model = await db.modelSeries.upsert({
      where: { slug: item.modelSeries.slug },
      create: { name: item.modelSeries.name, slug: item.modelSeries.slug, family: item.modelSeries.family as ModelFamily, releaseYear: modelReleaseYears[item.modelSeries.name] ?? null },
      update: {}
    });
    const collabSlug = slugify(`${brand.name} x New Balance`);
    const collaboration = await db.collaboration.upsert({
      where: { slug: collabSlug },
      create: { name: `${brand.name} x New Balance`, slug: collabSlug, brandId: brand.id },
      update: {}
    });
    const current = await db.sneaker.findUnique({ where: { slug: item.slug } });
    const protectedRecord = current?.verificationStatus === "verified" || current?.verificationStatus === "published";
    const values = {
      name: item.name,
      brandId: brand.id,
      modelSeriesId: model.id,
      collaborationId: collaboration.id,
      sku: item.sku,
      nickname: item.nickname,
      colorway: item.colorway,
      colorFamily: item.colorFamily,
      releaseDate: item.releaseDate ? new Date(item.releaseDate) : null,
      releaseYear: item.releaseYear,
      madeIn: item.madeIn,
      materialsText: item.materialsText,
      story: item.story,
      designInspiration: item.designInspiration,
      culturalContext: item.culturalContext,
      rarityLevel: item.rarityLevel as RarityLevel,
      status: item.status as SneakerStatus,
      verificationStatus: item.verificationStatus as VerificationStatus,
      heroImageUrl: item.heroImageUrl,
      officialSourceUrl: item.officialSourceUrl,
      referenceUrls: item.sources?.map(source => source.url) ?? []
    };
    const sneaker = await db.sneaker.upsert({
      where: { slug: item.slug },
      create: { slug: item.slug, ...values },
      update: protectedRecord ? {} : values
    });
    if (current) refreshed++; else inserted++;
    for (const source of item.sources ?? []) {
      const existing = await db.source.findFirst({ where: { sneakerId: sneaker.id, url: source.url } });
      if (!existing) await db.source.create({ data: { sneakerId: sneaker.id, title: source.title, url: source.url, sourceType: source.sourceType as SourceType, reliabilityScore: source.reliabilityScore } });
    }
    for (const image of item.images ?? []) {
      if (!image.imageUrl) continue;
      const existing = await db.sneakerImage.findFirst({ where: { sneakerId: sneaker.id, imageUrl: image.imageUrl } });
      if (!existing) await db.sneakerImage.create({ data: { sneakerId: sneaker.id, imageUrl: image.imageUrl, alt: image.alt, source: image.source, sourceUrl: image.sourceUrl, copyrightNote: image.copyrightNote, sortOrder: image.sortOrder } });
    }
  }
  console.log(`Archive sync: ${inserted} inserted, ${refreshed} existing, ${fallbackSneakers.length} catalog records.`);
}

main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => db.$disconnect());
