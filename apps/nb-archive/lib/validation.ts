import { z } from "zod";

const emptyToNull = (value: unknown) => (typeof value === "string" && value.trim() === "" ? null : value);

export const sneakerImportSchema = z.object({
  name: z.string().trim().min(2),
  brand: z.string().trim().min(1),
  modelSeries: z.string().trim().min(1),
  sku: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  nickname: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  colorway: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  releaseDate: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  releaseYear: z.preprocess(
    emptyToNull,
    z
      .union([z.string(), z.number()])
      .nullable()
      .optional()
      .transform((value) => (value == null ? null : Number(value)))
      .pipe(z.number().int().min(1980).max(2100).nullable())
  ),
  retailPrice: z.preprocess(
    emptyToNull,
    z
      .union([z.string(), z.number()])
      .nullable()
      .optional()
      .transform((value) => (value == null ? null : Number(value)))
      .pipe(z.number().nonnegative().nullable())
  ),
  currency: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  region: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  madeIn: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  materials: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  story: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  designInspiration: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  culturalContext: z.preprocess(emptyToNull, z.string().trim().nullable().optional()),
  rarityLevel: z
    .enum(["general", "limited", "very_limited", "friends_and_family", "sample", "unknown"])
    .default("unknown"),
  status: z.enum(["released", "rumored", "upcoming", "cancelled", "archived"]).default("released"),
  heroImageUrl: z.preprocess(emptyToNull, z.string().url().nullable().optional()),
  officialSourceUrl: z.preprocess(emptyToNull, z.string().url().nullable().optional()),
  referenceUrls: z
    .preprocess(emptyToNull, z.string().nullable().optional())
    .transform((value) =>
      value
        ? value
            .split(/[|,]/)
            .map((url) => url.trim())
            .filter(Boolean)
        : []
    )
});

export type SneakerImportInput = z.infer<typeof sneakerImportSchema>;
