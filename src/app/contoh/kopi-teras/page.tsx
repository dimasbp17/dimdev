import type { Metadata } from "next"
import { Bricolage_Grotesque, Manrope } from "next/font/google"
import {
  Bike,
  CalendarDays,
  Clock,
  Coffee,
  Leaf,
  MapPin,
  MessageCircle,
  Plug,
  Quote,
  ShoppingBag,
  Star,
  Users,
  Wifi,
} from "lucide-react"

import { whatsappLink } from "@/config/site"
import { DemoBanner } from "@/components/demo/demo-banner"
import { Menu } from "./menu"

/*
 * CONTOH DESAIN — PAKET LENGKAP
 * Usaha fiktif "Kopi Teras". Isi mengikuti batas paket Lengkap:
 * 12 bagian, 30 menu dengan tombol pesan WhatsApp di tiap menu, link GoFood/GrabFood/ShopeeFood
 * & marketplace, galeri foto, testimoni, plus semua isi paket Standar (promo, FAQ, peta lokasi).
 */

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"] })
const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contoh Desain: Kopi Teras (Paket Lengkap)",
  description: "Contoh landing page paket Lengkap untuk kedai kopi. Usaha fiktif, dibuat sebagai contoh desain.",
  robots: { index: false, follow: false },
}

// Semua tombol di contoh ini diarahkan ke WhatsApp DimDev (bukan ke usaha fiktif)
const wa = (what: string) =>
  whatsappLink(`Halo, saya mencoba tombol ${what} di contoh desain Kopi Teras. Saya tertarik dibuatkan website seperti ini.`)

const favorites = [
  { name: "Es Kopi Susu Teras", price: "Rp22.000", text: "Espresso, susu segar, dan gula aren dari Kulon Progo.", tone: "from-[#8b5e3c] to-[#c8a27a]" },
  { name: "Nasi Goreng Teras", price: "Rp32.000", text: "Resep andalan sejak buka, porsi kenyang untuk makan siang.", tone: "from-[#c8553d] to-[#e9b872]" },
  { name: "Matcha Latte", price: "Rp27.000", text: "Matcha Uji asli, tidak terlalu manis, creamy.", tone: "from-[#4f7a4a] to-[#a9c79a]" },
]

const platforms = [
  { name: "GoFood", color: "bg-[#00aa13]", icon: Bike, text: "Pesan antar cepat" },
  { name: "GrabFood", color: "bg-[#00b14f]", icon: Bike, text: "Promo ongkir tiap hari" },
  { name: "ShopeeFood", color: "bg-[#ee4d2d]", icon: Bike, text: "Diskon pakai ShopeePay" },
  { name: "Tokopedia", color: "bg-[#42b549]", icon: ShoppingBag, text: "Beli biji kopi & drip bag" },
]

const perks = [
  { icon: Coffee, title: "Biji kopi lokal", text: "Disangrai sendiri dari petani Temanggung dan Gayo." },
  { icon: Wifi, title: "WiFi kencang", text: "100 Mbps, cocok untuk kerja dan kuliah." },
  { icon: Plug, title: "Colokan di tiap meja", text: "Betah berjam-jam tanpa takut baterai habis." },
  { icon: Leaf, title: "Teras adem", text: "Area outdoor dengan pohon rindang dan smoking area." },
]

const gallery = [
  { label: "Teras depan", tone: "from-[#1f3d2b] to-[#4f7a4a]", span: "md:col-span-2 md:row-span-2" },
  { label: "Bar kopi", tone: "from-[#8b5e3c] to-[#c8a27a]", span: "" },
  { label: "Latte art", tone: "from-[#c8a27a] to-[#f5efe3]", span: "" },
  { label: "Ruang dalam", tone: "from-[#c8553d] to-[#e9b872]", span: "" },
  { label: "Live music Sabtu", tone: "from-[#2d2a26] to-[#6b5b4b]", span: "" },
]

const testimonials = [
  { name: "Rara", role: "Mahasiswa", text: "Tempat nugas favorit. WiFi kencang, colokan banyak, dan es kopi susunya pas manisnya." },
  { name: "Pak Bambang", role: "Pelanggan tetap", text: "Nasi gorengnya juara. Tiap makan siang hampir selalu ke sini sama teman kantor." },
  { name: "Dina & Yoga", role: "Acara lamaran", text: "Sewa teras buat acara lamaran kecil, pelayanannya ramah dan semua beres." },
]

const faqs = [
  { q: "Apakah bisa reservasi meja?", a: "Bisa untuk 6 orang ke atas. Chat WhatsApp minimal H-1, khusus Sabtu malam minimal H-3." },
  { q: "Apakah ada menu tanpa kopi?", a: "Ada 7 pilihan non-kopi, dari matcha sampai wedang jahe. Semua menu juga bisa less sugar." },
  { q: "Bisa bayar pakai QRIS?", a: "Bisa. Kami terima QRIS, kartu debit, dan tunai." },
  { q: "Ada area bebas asap rokok?", a: "Ada. Ruang dalam ber-AC sepenuhnya bebas asap rokok, smoking area hanya di teras." },
]

const hours = [
  { day: "Senin – Kamis", time: "08.00 – 22.00" },
  { day: "Jumat – Sabtu", time: "08.00 – 24.00" },
  { day: "Minggu", time: "09.00 – 22.00" },
]

function SectionTitle({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mb-10 text-center">
      <p className="text-sm font-bold tracking-[0.2em] text-[#c8553d] uppercase">{eyebrow}</p>
      <h2
        className={`${bricolage.className} mt-2 text-3xl font-extrabold md:text-5xl ${light ? "text-[#f5efe3]" : "text-[#1f3d2b]"}`}
      >
        {title}
      </h2>
    </div>
  )
}

export default function KopiTerasPage() {
  return (
    <div className={`${manrope.className} min-h-full bg-[#f5efe3] text-[#2d2a26]`}>
      <DemoBanner demoName="Kopi Teras" planName="Lengkap" />

      {/* 1. Pembuka */}
      <section className="overflow-hidden bg-[#1f3d2b] text-[#f5efe3]">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className={`${bricolage.className} flex items-center gap-2 text-2xl font-extrabold`}>
            <Coffee className="size-7 text-[#e9b872]" /> kopi teras
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#f5efe3]/80 lg:flex">
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#pesan-online" className="hover:text-white">Pesan Online</a>
            <a href="#galeri" className="hover:text-white">Galeri</a>
            <a href="#acara" className="hover:text-white">Acara</a>
            <a href="#lokasi" className="hover:text-white">Lokasi</a>
          </nav>
          <a
            href={wa("reservasi")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#e9b872] px-5 py-2.5 text-sm font-extrabold text-[#1f3d2b] hover:bg-[#f0c88a]"
          >
            Reservasi
          </a>
        </header>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-10 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16 lg:pb-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold">
              <Star className="size-4 fill-[#e9b872] text-[#e9b872]" /> 4,8 di Google Maps · 1.200+ ulasan
            </p>
            <h1 className={`${bricolage.className} mt-6 text-5xl leading-[1.02] font-extrabold md:text-7xl`}>
              Ngopi santai,
              <br />
              <span className="text-[#e9b872]">kerja jalan terus.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[#f5efe3]/75">
              Kedai kopi dengan teras adem, 30 pilihan menu, dan WiFi kencang. Datang langsung atau pesan antar lewat
              aplikasi favoritmu.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-[#c8553d] px-7 py-3.5 font-bold text-white hover:bg-[#b34a34]"
              >
                Lihat menu
              </a>
              <a
                href="#pesan-online"
                className="rounded-full px-7 py-3.5 font-bold ring-2 ring-[#f5efe3]/30 hover:bg-white/5"
              >
                Pesan antar
              </a>
            </div>
          </div>

          {/* Komposisi visual. Di website klien diganti foto suasana kedai */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[17rem] sm:max-w-sm" aria-hidden>
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#8b5e3c] to-[#c8a27a]" />
            <div className="absolute inset-x-8 top-10 bottom-24 rounded-[2rem] bg-[#f5efe3]/15 backdrop-blur-sm" />
            <Coffee className="absolute top-1/3 left-1/2 size-28 -translate-x-1/2 text-[#f5efe3]/90" strokeWidth={1.25} />
            <div className="absolute -bottom-5 -left-3 rounded-2xl sm:-left-6 bg-[#f5efe3] px-5 py-4 text-[#1f3d2b] shadow-2xl">
              <p className="text-xs font-semibold opacity-60">Paling laris</p>
              <p className={`${bricolage.className} text-xl font-extrabold`}>Es Kopi Susu Teras</p>
            </div>
            <div className="absolute top-6 -right-3 rounded-2xl sm:-right-5 bg-[#c8553d] px-4 py-3 text-white shadow-2xl">
              <p className={`${bricolage.className} text-2xl font-extrabold`}>Rp22rb</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Cerita */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <SectionTitle eyebrow="Cerita kami" title="Dari gerobak ke teras rumah" />
        <p className="text-lg leading-relaxed text-[#2d2a26]/75">
          Kopi Teras berawal dari gerobak kopi di depan kampus tahun 2018. Pelanggan makin banyak, gerobak pun pindah ke
          teras rumah keluarga kami. Sekarang terasnya jadi tempat ngumpul, kerja, dan merayakan banyak momen, tapi
          kopinya tetap diseduh dengan cara yang sama.
        </p>
      </section>

      {/* 3. Menu Favorit */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionTitle eyebrow="Favorit pelanggan" title="Wajib coba" />
        <div className="grid gap-6 md:grid-cols-3">
          {favorites.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className={`flex aspect-[16/9] items-end bg-gradient-to-br p-5 md:aspect-[4/3] ${item.tone}`}>
                <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-extrabold text-[#1f3d2b]">
                  {item.price}
                </span>
              </div>
              <div className="p-6">
                <p className={`${bricolage.className} text-xl font-extrabold text-[#1f3d2b]`}>{item.name}</p>
                <p className="mt-2 text-sm text-[#2d2a26]/70">{item.text}</p>
                <a
                  href={wa(`pesan "${item.name}"`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-bold text-[#c8553d] hover:underline"
                >
                  <MessageCircle className="size-4" /> Pesan sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Menu Lengkap (30 item, tombol pesan per menu) */}
      <section id="menu" className="scroll-mt-16 bg-[#1f3d2b] px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Menu lengkap" title="30 pilihan, semua bisa dipesan" light />
          <Menu />
        </div>
      </section>

      {/* 5. Pesan Online */}
      <section id="pesan-online" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
        <SectionTitle eyebrow="Pesan online" title="Mager keluar? Kami antar." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map(({ name, color, icon: Icon, text }) => (
            <a
              key={name}
              href={wa(name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
            >
              <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl text-white ${color}`}>
                <Icon className="size-6" />
              </span>
              <span>
                <span className="block font-extrabold text-[#1f3d2b]">{name}</span>
                <span className="block text-sm text-[#2d2a26]/60">{text}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* 6. Promo */}
      <section className="px-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#c8553d] px-8 py-10 text-white md:flex-row md:px-12">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-white/75 uppercase">Happy hour · Senin–Jumat 14.00–17.00</p>
            <h2 className={`${bricolage.className} mt-2 text-3xl font-extrabold md:text-4xl`}>Beli 2 kopi, gratis 1 camilan</h2>
          </div>
          <a
            href={wa("promo happy hour")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-6 py-3 font-bold text-[#c8553d] hover:bg-[#f5efe3]"
          >
            Klaim promo
          </a>
        </div>
      </section>

      {/* 7. Keunggulan */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionTitle eyebrow="Kenapa Kopi Teras" title="Betah dari pagi sampai malam" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border-2 border-[#1f3d2b]/10 p-6">
              <Icon className="size-8 text-[#c8553d]" />
              <p className={`${bricolage.className} mt-4 text-xl font-extrabold text-[#1f3d2b]`}>{title}</p>
              <p className="mt-1 text-sm text-[#2d2a26]/70">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Galeri */}
      <section id="galeri" className="mx-auto max-w-6xl scroll-mt-16 px-5 pb-20">
        <SectionTitle eyebrow="Galeri" title="Intip suasananya" />
        {/* Di website klien, kotak-kotak ini diganti foto asli */}
        <div className="grid auto-rows-[10rem] gap-4 sm:grid-cols-2 md:grid-cols-4">
          {gallery.map((item) => (
            <div key={item.label} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.tone} ${item.span}`}>
              <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Testimoni */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="Kata mereka" title="Ulasan pelanggan" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-3xl bg-[#f5efe3] p-7">
                <Quote className="size-8 text-[#c8553d]" />
                <blockquote className="mt-4 leading-relaxed">{t.text}</blockquote>
                <figcaption className="mt-5">
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-[#e9b872] text-[#e9b872]" />
                    ))}
                  </span>
                  <span className="mt-2 block font-extrabold text-[#1f3d2b]">{t.name}</span>
                  <span className="block text-sm text-[#2d2a26]/60">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Acara & Reservasi */}
      <section id="acara" className="mx-auto grid max-w-6xl scroll-mt-16 items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-[#c8553d] uppercase">Acara & reservasi</p>
          <h2 className={`${bricolage.className} mt-2 text-3xl font-extrabold text-[#1f3d2b] md:text-5xl`}>
            Rayakan momenmu di teras kami
          </h2>
          <p className="mt-4 text-lg text-[#2d2a26]/75">
            Ulang tahun, arisan, lamaran, sampai rapat kantor. Teras bisa disewa untuk 15–40 orang, lengkap dengan paket
            makanan dan minuman.
          </p>
          <a
            href={wa("sewa tempat")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1f3d2b] px-7 py-3.5 font-bold text-[#f5efe3] hover:bg-[#2a5139]"
          >
            <CalendarDays className="size-5" /> Tanya jadwal kosong
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Users, big: "15–40", small: "orang" },
            { icon: CalendarDays, big: "Setiap", small: "hari, booking H-3" },
            { icon: Coffee, big: "Paket", small: "mulai Rp45rb/orang" },
            { icon: Wifi, big: "Gratis", small: "proyektor & sound" },
          ].map(({ icon: Icon, big, small }) => (
            <div key={small} className="rounded-3xl bg-white p-6 shadow-sm">
              <Icon className="size-6 text-[#c8553d]" />
              <p className={`${bricolage.className} mt-3 text-2xl font-extrabold text-[#1f3d2b]`}>{big}</p>
              <p className="text-sm text-[#2d2a26]/60">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <SectionTitle eyebrow="FAQ" title="Sering ditanyakan" />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#1f3d2b]">
                {faq.q}
                <span className="text-2xl text-[#c8553d] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[#2d2a26]/75">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 12. Lokasi & Kontak */}
      <section id="lokasi" className="scroll-mt-16 bg-[#1f3d2b] px-5 py-20 text-[#f5efe3]">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Ilustrasi peta. Di website klien diganti embed Google Maps lokasi asli */}
          <div className="relative min-h-72 overflow-hidden rounded-3xl bg-[#2a5139]" aria-hidden>
            <svg viewBox="0 0 400 300" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
              <path d="M-10 120 H 410" stroke="#3c6b4f" strokeWidth="18" />
              <path d="M240 -10 V 310" stroke="#3c6b4f" strokeWidth="14" />
              <path d="M-10 230 C 120 200, 260 260, 410 220" stroke="#3c6b4f" strokeWidth="10" fill="none" />
              <rect x="40" y="150" width="70" height="50" rx="6" fill="#335c43" />
              <rect x="270" y="30" width="90" height="60" rx="6" fill="#335c43" />
              <rect x="120" y="20" width="80" height="70" rx="6" fill="#335c43" />
            </svg>
            <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-full text-center">
              <span className="rounded-xl bg-[#e9b872] px-3 py-1.5 text-xs font-extrabold whitespace-nowrap text-[#1f3d2b] shadow-lg">
                Kopi Teras
              </span>
              <MapPin className="mx-auto mt-1 size-9 fill-[#c8553d] text-[#1f3d2b]" />
            </div>
          </div>

          <div>
            <h2 className={`${bricolage.className} text-3xl font-extrabold md:text-4xl`}>Mampir ke teras</h2>
            <p className="mt-4 flex gap-3 text-[#f5efe3]/80">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[#e9b872]" />
              Jl. Flamboyan No. 17, Sukamaju (150 m dari gerbang kampus)
            </p>
            <div className="mt-6 flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-[#e9b872]" />
              <ul className="flex-1 space-y-2">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex justify-between border-b border-white/10 pb-2 text-[#f5efe3]/80">
                    <span>{day}</span>
                    <span className="font-bold text-[#f5efe3]">{time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={wa("WhatsApp")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white hover:bg-[#1fb857]"
              >
                <MessageCircle className="size-5" /> Chat WhatsApp
              </a>
              <a
                href={wa("reservasi")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[#e9b872] px-6 py-3 font-bold text-[#1f3d2b] hover:bg-[#f0c88a]"
              >
                Reservasi meja
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#173022] py-8 text-center text-sm text-[#f5efe3]/50">
        © Kopi Teras · Sukamaju · @kopiteras
      </footer>
    </div>
  )
}
