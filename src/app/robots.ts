import type { MetadataRoute } from "next"

import { siteConfig } from "@/config/site"

export default function robots(): MetadataRoute.Robots {
  return {
    // Halaman contoh desain berisi usaha fiktif, jadi tidak perlu muncul di Google
    rules: { userAgent: "*", allow: "/", disallow: "/contoh/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
