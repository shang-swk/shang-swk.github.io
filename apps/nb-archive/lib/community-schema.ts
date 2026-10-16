import { z } from "zod";

export const postInputSchema = z.object({
  nickname: z.string().trim().min(2).max(32),
  kind: z.enum(["outfit", "collection"]),
  sneakerSlug: z.string().trim().min(1).max(160),
  caption: z.string().trim().min(3).max(500),
  rights: z.literal("yes")
});

export const commentInputSchema = z.object({
  nickname: z.string().trim().min(2).max(32),
  body: z.string().trim().min(1).max(280)
});

export type PostInput = z.infer<typeof postInputSchema>;
export type CommentInput = z.infer<typeof commentInputSchema>;

export type CommunityComment = CommentInput & {
  id: string;
  createdAt: string;
};

export type CommunityPost = Omit<PostInput, "rights"> & {
  id: string;
  imageUrl: string;
  createdAt: string;
  comments: CommunityComment[];
};

export function isLocalCommunityRequest(request: Request): boolean {
  const url = new URL(request.url);
  if (!["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)) return false;
  const origin = request.headers.get("origin");
  return !origin || origin === url.origin;
}
