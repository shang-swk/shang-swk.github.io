import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import type { CorrectionInput, PendingCorrection } from "./correction-schema";

const directory = path.join(process.cwd(), "data", "corrections");
const file = path.join(directory, "pending.json");
let writeQueue: Promise<unknown> = Promise.resolve();

export async function listCorrections(): Promise<PendingCorrection[]> {
  try {
    return JSON.parse(await readFile(file, "utf8")) as PendingCorrection[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}

export async function submitCorrection(input: CorrectionInput): Promise<PendingCorrection> {
  const correction: PendingCorrection = { ...input, id: randomUUID(), status: "pending", createdAt: new Date().toISOString() };
  const operation = writeQueue.then(async () => {
    await mkdir(directory, { recursive: true });
    const current = await listCorrections();
    const temporary = `${file}.${randomUUID()}.tmp`;
    await writeFile(temporary, JSON.stringify([correction, ...current], null, 2) + "\n");
    await rename(temporary, file);
  });
  writeQueue = operation.catch(() => {});
  await operation;
  return correction;
}
