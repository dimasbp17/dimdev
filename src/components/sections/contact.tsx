import { Mail, MessageCircle } from "lucide-react"

import { siteConfig, whatsappLink } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

/** Format 6282146202762 -> 0821-4620-2762 supaya mudah dibaca */
function formatPhone(international: string) {
  const local = international.replace(/^62/, "0")
  return local.replace(/^(\d{4})(\d{4})(\d+)$/, "$1-$2-$3")
}

export function Contact() {
  return (
    <section id="kontak" className="container pb-16 md:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-blue-800 px-6 py-14 text-primary-foreground md:px-12 md:py-20">
          <div className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-sky-300/20 blur-2xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
                Siap membawa usaha Anda online?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80 md:text-lg lg:mx-0">
                Ceritakan usaha Anda, saya bantu hitung estimasi biaya dan waktunya. Gratis, tanpa kewajiban order.
                Setiap pesan saya balas maksimal 1×24 jam.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white p-4 text-foreground shadow-xl transition-transform hover:-translate-y-0.5"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-muted-foreground">WhatsApp (paling cepat)</span>
                  <span className="block text-lg font-bold">{formatPhone(siteConfig.whatsapp.number)}</span>
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 transition-colors hover:bg-white/15"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Mail className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-primary-foreground/75">Email</span>
                  <span className="block truncate font-semibold">{siteConfig.email}</span>
                </span>
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "h-12 w-full text-base lg:hidden",
                })}
              >
                <MessageCircle /> Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
