import { faqs, whatsappLink } from "@/config/site"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/sections/section-heading"

export function Faq() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            className="mb-6 lg:mx-0 lg:text-left"
          />
          <Reveal className="text-center text-muted-foreground lg:text-left">
            Pertanyaan Anda belum terjawab?{" "}
            <a
              href={whatsappLink("Halo, saya mau tanya-tanya dulu soal pembuatan website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Tanya langsung via WhatsApp
            </a>
            .
          </Reveal>
        </div>
        <Reveal>
          <Accordion className="rounded-2xl border bg-card px-5 md:px-7">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-base font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
