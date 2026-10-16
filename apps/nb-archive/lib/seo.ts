import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export function pageMetadata({
  title,
  description,
  path,
  image
}: {
  title: string;
  description: string;
  path: string;
  image?: string | null;
}): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      images: image ? [image] : []
    }
  };
}
