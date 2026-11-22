import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Pricing } from "@/components/sections/pricing"
import { About } from "@/components/sections/about"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <About />
      <Faq />
      <Contact />
    </>
  )
}
