import { orderSteps } from "@/config/site"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/sections/section-heading"

export function HowItWorks() {
  return (
    <section className="container py-16 md:py-24">
      <SectionHeading
        eyebrow="Cara Order"
        title="Empat langkah, website jadi"
        description="Tidak perlu paham teknologi. Saya pandu dari awal sampai website Anda online."
      />
      <div className="relative">
        {/* Garis penghubung antar langkah */}
        <div className="absolute top-6 right-[12.5%] left-[12.5%] hidden border-t-2 border-dashed border-primary/25 md:block" />
        <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {orderSteps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 120} className="flex flex-col items-center text-center">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground ring-8 ring-background">
                  {i + 1}
                </span>
                <p className="mt-5 text-lg font-bold">{step.title}</p>
                <p className="mt-2 max-w-60 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
