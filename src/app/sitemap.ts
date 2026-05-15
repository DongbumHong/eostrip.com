import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";
import { golf } from "@/data/golf";
import { gallery } from "@/data/gallery";

const SITE = "https://eostrip.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/private`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/golf`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/info`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  for (const t of tours) {
    routes.push({
      url: `${SITE}/private/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const g of golf) {
    routes.push({
      url: `${SITE}/golf/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  for (const g of gallery) {
    routes.push({
      url: `${SITE}/gallery/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }
  return routes;
}
