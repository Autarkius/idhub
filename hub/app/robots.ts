import type { MetadataRoute } from "next";

// كل المواقع مقفولة عن جوجل ومحركات البحث.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
