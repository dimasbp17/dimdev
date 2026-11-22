import { ArrowUpRight, Check, Sparkles } from "lucide-react"

import { pricingPlans, whatsappLink } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/sections/section-heading"

export function Pricing() {
  return (
    <section id="harga" className="relative overflow-hidden bg-muted/40 py-16 md:py-24">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Harga"
          title="Harga jelas, mulai Rp500 ribu"
          description="Semua paket sudah termasuk desain sesuai brand usaha Anda, domain tahun pertama, serta hosting & SSL gratis. Tanpa biaya tersembunyi."
        />
        <div className="mx-auto grid max-w-md items-stretch gap-6 lg:max-w-none lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7 md:p-8",
                  plan.highlighted
                    ? "border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/30"
                    : "bg-card"
                )}
              >
                {plan.highlighted && (
                  <>
                    <div className="bg-grid-light pointer-events-none absolute inset-0 rounded-3xl [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
                    <span className="absolute -top-3.5 left-7 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-amber-950 shadow-md">
                      <Sparkles className="size-3.5" /> Rekomendasi
                    </span>
                  </>
                )}

                <div className="relative">
                  <p className="text-lg font-bold">{plan.name}</p>
                  <p className={cn("mt-1 text-sm lg:min-h-10", plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground")}>
                    {plan.description}
                  </p>
                  {plan.promo && (
                    <span className="mt-5 inline-flex rounded-full bg-amber-400/90 px-2.5 py-0.5 text-xs font-bold text-amber-950">
                      {plan.promo}
                    </span>
                  )}
                  <div className={cn("flex flex-wrap items-baseline gap-x-3", plan.promo ? "mt-3" : "mt-6")}>
                    <p className="text-4xl font-extrabold tracking-tight">{plan.price}</p>
                    {plan.originalPrice && (
                      <p
                        className={cn(
                          "text-lg font-semibold line-through",
                          plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"
                        )}
                      >
                        <span className="sr-only">Harga normal </span>
                        {plan.originalPrice}
                      </p>
                    )}
                  </div>
                  <p className={cn("mt-2 text-xs lg:min-h-12", plan.highlighted ? "text-primary-foreground/75" : "text-muted-foreground")}>
                    {plan.priceNote}
                  </p>
                  <p
                    className={cn(
                      "mt-4 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
                      plan.highlighted ? "bg-primary-foreground/15" : "bg-muted text-foreground/80"
                    )}
                  >
                    {plan.duration}
                  </p>
                  {plan.exampleUrl && (
                    <a
                      href={plan.exampleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "mt-3 flex w-fit items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline",
                        plan.highlighted ? "text-primary-foreground" : "text-primary"
                      )}
                    >
                      Lihat contoh desain <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                </div>

                <ul className="relative mt-7 flex-1 space-y-3 border-t border-current/15 pt-7 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full",
                          plan.highlighted ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"
                        )}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Halo, saya tertarik dengan paket ${plan.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    size: "lg",
                    variant: plan.highlighted ? "secondary" : "default",
                    className: "relative mt-8 h-11 w-full text-base",
                  })}
                >
                  Pilih Paket {plan.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Butuh halaman atau fitur tambahan?{" "}
          <a
            href={whatsappLink("Halo, saya mau tanya soal kebutuhan website di luar paket.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Ceritakan kebutuhan Anda
          </a>
          , nanti saya bantu hitungkan.
        </p>
      </div>
    </section>
  )
}
