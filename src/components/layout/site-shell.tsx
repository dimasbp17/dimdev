import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"

/** Kerangka halaman DimDev: header, isi, footer, dan tombol WhatsApp melayang. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}
