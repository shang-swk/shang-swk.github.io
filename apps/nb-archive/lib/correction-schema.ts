import { z } from "zod";

export const correctionSchema = z.object({
  sneakerSlug: z.string().trim().min(1).max(160),
  field: z.enum(["releaseDate", "sku", "story", "materials", "image", "other"]),
  proposal: z.string().trim().min(3).max(1000),
  sourceUrl: z.string().trim().url().refine(url => /^https?:\/\//.test(url), "Use an HTTP or HTTPS source."),
  note: z.string().trim().max(500).optional().default("")
});

export type CorrectionInput = z.infer<typeof correctionSchema>;
export type PendingCorrection = CorrectionInput & { id: string; status: "pending"; createdAt: string };
