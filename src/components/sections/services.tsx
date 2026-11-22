import { MapPin, Scissors, Search, ShoppingBag, UtensilsCrossed, Wrench } from "lucide-react"

import { addons, websiteTypes } from "@/config/site"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/sections/section-heading"

const icons = { MapPin, Scissors, Search, ShoppingBag, UtensilsCrossed, Wrench }

export function Services() {
  return (
    <section id="layanan" className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Layanan"
        title="Landing page yang dibuat sesuai jenis usaha Anda"
        description="Satu halaman yang berisi semua yang perlu diketahui pembeli, dengan desain yang mengikuti warna dan logo usaha Anda."
      />

      {/* Jenis website */}
      <div className="grid gap-6 md:grid-cols-3">
        {websiteTypes.map((item, i) => {
          const Icon = icons[item.icon]
          return (
            <Reveal key={item.title} delay={i * 100} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 mb-5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <p className="mt-auto border-t pt-4 text-sm font-medium text-foreground/80">{item.example}</p>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* Layanan pelengkap */}
      <Reveal className="mt-12">
        <div className="rounded-2xl bg-muted/50 p-6 md:p-10">
          <h3 className="text-center text-lg font-bold md:text-xl">Sudah termasuk & bisa ditambahkan</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {addons.map((item) => {
              const Icon = icons[item.icon]
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-xs">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
