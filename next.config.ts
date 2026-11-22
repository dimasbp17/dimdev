import type { NextConfig } from "next";

// Alamat utama situs, dikunci saat build supaya sitemap/robots/metadata tidak bergantung pada env saat runtime.
// Urutan: env manual → `URL` (diisi otomatis oleh Netlify saat build) → localhost untuk development.
// Pakai `||` supaya env yang diisi kosong juga dianggap tidak ada. Garis miring di akhir dibuang.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || process.env.URL || "http://localhost:3000").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  env: {
    SITE_URL: siteUrl,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
