import { ArrowUpRight, HandCoins, MessageCircle, UserRound } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

const reasons = [
  {
    icon: UserRound,
    title: "Langsung dengan pembuatnya",
    description: "Tidak ada perantara atau admin. Anda berbicara langsung dengan saya yang mengerjakan websitenya.",
  },
  {
    icon: HandCoins,
    title: "Harga ramah UMKM",
    description: "Tanpa biaya kantor dan tim, jadi harganya bisa jauh lebih terjangkau.",
  },
  {
    icon: MessageCircle,
    title: "Bahasa yang mudah dipahami",
    description: "Tidak pakai istilah teknis yang membingungkan. Semua dijelaskan dengan sederhana.",
  },
]

export function About() {
  const portfolioHost = new URL(siteConfig.social.portfolio).host
  const initials = siteConfig.owner.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")

  return (
    <section id="tentang" className="container py-16 md:py-24">
      <Reveal>
        <div className="grid gap-10 rounded-3xl border bg-card p-6 md:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
          {/* TODO: ganti inisial dengan foto diri (next/image) supaya lebih dipercaya */}
          <div className="relative mx-auto h-fit lg:mx-0">
            <div className="flex size-36 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-blue-800 text-5xl font-extrabold text-primary-foreground shadow-xl shadow-primary/25 md:size-44">
              {initials}
            </div>
            <span className="absolute -right-3 -bottom-3 rounded-full border bg-background px-3 py-1 text-xs font-semibold shadow-md">
              👋 Halo!
            </span>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">Tentang Saya</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
              Saya {siteConfig.owner.name}, yang akan mengerjakan website Anda
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Saya {siteConfig.owner.role.toLowerCase()} yang sehari-hari mengerjakan sistem untuk instansi
                pemerintah. Pengalaman itu saya bawa ke website UMKM, supaya hasilnya rapi, cepat, dan bisa diandalkan.
              </p>
              <p>
                Banyak pemilik usaha merasa website itu mahal dan rumit. Karena itu saya urus semuanya, dari domain,
                desain, sampai website online. Anda cukup fokus mengurus usaha.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", className: "h-11 px-5" })}
              >
                {portfolioHost} <ArrowUpRight />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", variant: "outline", className: "h-11 px-5" })}
              >
                LinkedIn <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Kenapa pilih saya */}
      <Reveal className="mt-10">
        <div className="rounded-3xl bg-muted/50 p-6 md:p-10">
          <h3 className="text-lg font-bold">Kenapa pilih saya?</h3>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-xs">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
