import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"

import { siteConfig, whatsappLink } from "@/config/site"

/**
 * Banner di atas halaman contoh desain. Menjelaskan bahwa ini contoh (usaha fiktif)
 * dan mengarahkan pengunjung kembali ke DimDev atau langsung pesan.
 */
export function DemoBanner({ demoName, planName }: { demoName: string; planName: string }) {
  return (
    <div className="sticky top-0 z-50 bg-neutral-900 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 text-sm">
        <Link href="/#harga" className="flex min-w-0 items-center gap-2 text-white/80 hover:text-white">
          <ArrowLeft className="size-4 shrink-0" />
          <span className="truncate">
            <span className="hidden sm:inline">Contoh desain </span>
            <span className="font-semibold text-white">Paket {planName}</span>
            <span className="hidden md:inline"> dari {siteConfig.name} · usaha fiktif</span>
          </span>
        </Link>
        <a
          href={whatsappLink(
            `Halo, saya lihat contoh desain ${demoName} (paket ${planName}). Saya mau dibuatkan website seperti ini untuk usaha saya.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1 font-semibold text-neutral-900 hover:bg-white/90"
        >
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">Mau yang seperti ini</span>
          <span className="sm:hidden">Pesan</span>
        </a>
      </div>
    </div>
  )
}
