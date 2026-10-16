import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import type { CommentInput, CommunityPost, PostInput } from "./community-schema";

const root = path.join(process.cwd(), "data", "community");
const postsFile = path.join(root, "posts.json");
const imageDir = path.join(root, "images");
let writeQueue: Promise<unknown> = Promise.resolve();

export async function listCommunityPosts(): Promise<CommunityPost[]> {
  try {
    const posts = JSON.parse(await readFile(postsFile, "utf8")) as CommunityPost[];
    return posts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

export async function publishCommunityPost(input: PostInput, photo: File): Promise<CommunityPost> {
  if (photo.size === 0 || photo.size > 5 * 1024 * 1024) throw new Error("Choose an image under 5 MB.");
  if (!["image/jpeg", "image/png", "image/webp"].includes(photo.type)) throw new Error("Only JPEG, PNG and WebP images are supported.");
  let image: Buffer;
  try {
    image = await sharp(Buffer.from(await photo.arrayBuffer()), { limitInputPixels: 36_000_000 })
      .rotate().resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 }).toBuffer();
  } catch {
    throw new Error("This image could not be read.");
  }
  const id = randomUUID();
  const post: CommunityPost = {
    id, nickname: input.nickname, kind: input.kind, sneakerSlug: input.sneakerSlug,
    caption: input.caption, imageUrl: `/api/community/images/${id}`, createdAt: new Date().toISOString(), comments: []
  };
  await mkdir(imageDir, { recursive: true });
  await writeFile(path.join(imageDir, `${id}.webp`), image, { flag: "wx" });
  try {
    await updatePosts(posts => [post, ...posts]);
  } catch (error) {
    await unlink(path.join(imageDir, `${id}.webp`)).catch(() => {});
    throw error;
  }
  return post;
}

export async function addCommunityComment(postId: string, input: CommentInput): Promise<CommunityPost | null> {
  let updated: CommunityPost | null = null;
  await updatePosts(posts => posts.map(post => {
    if (post.id !== postId) return post;
    updated = { ...post, comments: [...post.comments, { id: randomUUID(), ...input, createdAt: new Date().toISOString() }] };
    return updated;
  }));
  return updated;
}

export async function readCommunityImage(id: string): Promise<Buffer | null> {
  if (!/^[0-9a-f-]{36}$/.test(id)) return null;
  try {
    return await readFile(path.join(imageDir, `${id}.webp`));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

async function updatePosts(change: (posts: CommunityPost[]) => CommunityPost[]): Promise<void> {
  const operation = writeQueue.then(async () => {
    await mkdir(root, { recursive: true });
    const next = change(await listCommunityPosts());
    const temp = `${postsFile}.${randomUUID()}.tmp`;
    await writeFile(temp, JSON.stringify(next, null, 2) + "\n");
    await rename(temp, postsFile);
  });
  writeQueue = operation.catch(() => {});
  await operation;
}
