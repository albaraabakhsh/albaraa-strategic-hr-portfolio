import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/ar/"].map(path => ({ url: `https://theprosteps.com${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path ? 0.9 : 1 })); }
