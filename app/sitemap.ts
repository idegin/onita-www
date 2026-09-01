import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { products } from "@/lib/products";
import { useCases } from "@/lib/use-cases";
import { teamMembers } from "@/lib/team";
import { legalDocs } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/use-cases`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/integrations`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/book-demo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact-sales`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const useCaseRoutes: MetadataRoute.Sitemap = useCases.map((s) => ({
    url: `${base}/use-cases/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const teamRoutes: MetadataRoute.Sitemap = teamMembers.map((m) => ({
    url: `${base}/team/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalDocs.map((d) => ({
    url: `${base}/legal/${d.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...productRoutes, ...useCaseRoutes, ...teamRoutes, ...legalRoutes];
}
