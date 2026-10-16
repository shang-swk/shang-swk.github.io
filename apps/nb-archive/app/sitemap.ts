export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getArchiveSneakers, getBrands, getModels } from "@/lib/sneakers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [sneakers, brands, models] = await Promise.all([getArchiveSneakers(), getBrands(), getModels()]);
  const pages = ["", "/start", "/archive", "/history", "/brands", "/models", "/timeline"];
  return [
    ...pages.map(path => ({ url: `${SITE_URL}${path}`, lastModified: new Date("2026-10-04") })),
    ...sneakers.map(item => ({ url: `${SITE_URL}/sneakers/${item.slug}`, lastModified: new Date(item.updatedAt) })),
    ...brands.map(item => ({ url: `${SITE_URL}/brands/${item.slug}`, lastModified: new Date("2026-10-04") })),
    ...models.map(item => ({ url: `${SITE_URL}/models/${item.slug}`, lastModified: new Date("2026-10-04") }))
  ];
}
