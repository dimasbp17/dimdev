import Link from "next/link"

import { siteConfig } from "@/config/site"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} — Beranda`}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-lg font-extrabold text-primary-foreground shadow-md shadow-primary/30">
        {siteConfig.name.charAt(0)}
      </span>
      <span className="text-xl font-extrabold tracking-tight">{siteConfig.name}</span>
    </Link>
  )
}
