import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { SiteShell } from "@/components/layout/site-shell"

export default function NotFound() {
  return (
    <SiteShell>
      <section className="container py-32 text-center">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Halaman tidak ditemukan</h1>
        <Link href="/" className={buttonVariants({ className: "mt-8" })}>
          Kembali ke Beranda
        </Link>
      </section>
    </SiteShell>
  )
}
