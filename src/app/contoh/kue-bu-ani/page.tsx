import type { Metadata } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import { Clock, Heart, Leaf, MapPin, MessageCircle, PenLine, Truck, Wheat } from "lucide-react"

import { whatsappLink } from "@/config/site"
import { DemoBanner } from "@/components/demo/demo-banner"
import { Catalog } from "./catalog"

/*
 * CONTOH DESAIN — PAKET STANDAR
 * Usaha fiktif "Kue Bu Ani". Isi mengikuti batas paket Standar:
 * 8 bagian (Pembuka, Cerita, Katalog, Promo, Keunggulan, Cara Pesan, FAQ, Lokasi & Kontak),
 * 15 produk, tombol WhatsApp & peta lokasi. Tombol pesan per produk sengaja tidak ada
 * karena itu fitur paket Lengkap.
 */

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "700", "800"], style: ["normal", "italic"] })
const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contoh Desain: Kue Bu Ani (Paket Standar)",
  description: "Contoh landing page paket Standar untuk toko kue. Usaha fiktif, dibuat sebagai contoh desain.",
  robots: { index: false, follow: false },
}

// Tombol WhatsApp di contoh ini diarahkan ke DimDev (bukan ke usaha fiktif)
const waDemo = whatsappLink(
  "Halo, saya mencoba tombol WhatsApp di contoh desain Kue Bu Ani. Saya tertarik dibuatkan website seperti ini."
)

const perks = [
  { icon: Leaf, title: "Tanpa pengawet", text: "Dibuat fresh setiap pesanan, bukan stok lama." },
  { icon: Wheat, title: "Bahan premium", text: "Mentega Wijsman, cokelat Belgia, dan keju edam asli." },
  { icon: PenLine, title: "Bisa custom", text: "Tulisan, warna, dan tema kue bisa disesuaikan." },
  { icon: Truck, title: "Antar sekota", text: "Dikirim pakai kurir sendiri supaya kue tetap cantik." },
]

const steps = [
  { title: "Pilih kue", text: "Lihat katalog dan pilih kue yang kamu mau." },
  { title: "Chat WhatsApp", text: "Kirim pesanan, tanggal, dan tulisan untuk kue." },
  { title: "Bayar DP 50%", text: "Pesanan dikunci, kue mulai kami siapkan." },
  { title: "Kue diantar", text: "Kue sampai di tanggal yang kamu pilih." },
]

const faqs = [
  { q: "Berapa hari sebelumnya harus pesan?", a: "Kue ulang tahun minimal H-2, kue karakter custom minimal H-5, dan hampers minimal H-3." },
  { q: "Apakah bisa kirim ke luar kota?", a: "Kue kering dan hampers bisa dikirim lewat ekspedisi. Kue ulang tahun hanya untuk area dalam kota." },
  { q: "Kue tahan berapa lama?", a: "Kue ulang tahun 3 hari di kulkas. Kue kering sampai 2 bulan dalam toples tertutup." },
  { q: "Bisa ambil sendiri di toko?", a: "Bisa. Silakan datang di jam buka, pesanan sudah kami siapkan sesuai jadwal." },
]

/** Ilustrasi peta. Di website klien, bagian ini diganti embed Google Maps lokasi asli. */
function MapIllustration() {
  return (
    <div className="relative h-full min-h-64 overflow-hidden rounded-3xl bg-[#f3e6d8]" aria-hidden>
      <svg viewBox="0 0 400 300" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
        <path d="M-10 210 C 80 190, 150 240, 410 170" stroke="#bfd8e6" strokeWidth="22" fill="none" />
        <path d="M-10 90 H 410" stroke="#fff" strokeWidth="16" />
        <path d="M130 -10 V 310" stroke="#fff" strokeWidth="14" />
        <path d="M290 -10 V 310" stroke="#fff" strokeWidth="10" />
        <path d="M-10 150 H 410" stroke="#fff" strokeWidth="8" />
        <rect x="160" y="105" width="40" height="30" rx="4" fill="#e8d3bf" />
        <rect x="215" y="102" width="55" height="36" rx="4" fill="#e8d3bf" />
        <rect x="20" y="105" width="90" height="30" rx="4" fill="#d9e8c7" />
        <rect x="305" y="20" width="80" height="55" rx="4" fill="#d9e8c7" />
      </svg>
      <div className="absolute top-[38%] left-[52%] -translate-x-1/2 -translate-y-full">
        <div className="rounded-xl bg-white px-3 py-1.5 text-xs font-bold whitespace-nowrap text-[#4a2c2a] shadow-lg">
          Kue Bu Ani
        </div>
        <MapPin className="mx-auto mt-1 size-9 fill-[#b5475f] text-white" />
      </div>
    </div>
  )
}

export default function KueBuAniPage() {
  return (
    <div className={`${dmSans.className} min-h-full bg-[#fdf6ee] text-[#4a2c2a]`}>
      <DemoBanner demoName="Kue Bu Ani" planName="Standar" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className={`${fraunces.className} text-2xl font-extrabold`}>
          Kue <span className="text-[#b5475f] italic">Bu Ani</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <a href="#katalog" className="hover:text-[#b5475f]">Katalog</a>
          <a href="#cara-pesan" className="hover:text-[#b5475f]">Cara Pesan</a>
          <a href="#lokasi" className="hover:text-[#b5475f]">Lokasi</a>
          <a
            href={waDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#b5475f] px-5 py-2.5 font-semibold text-white hover:bg-[#9c3a50]"
          >
            Pesan Sekarang
          </a>
        </nav>
      </header>

      {/* 1. Pembuka */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-8 pb-20 lg:grid-cols-2 lg:pt-14">
        <div>
          <p className="font-semibold tracking-wide text-[#b5475f]">Toko kue rumahan sejak 2012</p>
          <h1 className={`${fraunces.className} mt-4 text-5xl leading-[1.05] font-extrabold md:text-6xl`}>
            Kue enak untuk
            <br />
            <span className="text-[#b5475f] italic">momen spesial</span>
            <br />
            keluargamu.
          </h1>
          <p className="mt-6 max-w-md text-lg text-[#7a5c4b]">
            Kue ulang tahun, kue kering, dan hampers buatan tangan dari dapur Bu Ani. Tanpa pengawet, dibuat fresh
            setiap pesanan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#b5475f] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#b5475f]/25 hover:bg-[#9c3a50]"
            >
              <MessageCircle className="size-5" /> Pesan via WhatsApp
            </a>
            <a
              href="#katalog"
              className="inline-flex items-center rounded-full px-6 py-3.5 font-semibold ring-2 ring-[#4a2c2a]/15 hover:bg-white"
            >
              Lihat katalog
            </a>
          </div>
        </div>

        {/* Komposisi "foto" kue. Di website klien diganti foto produk asli */}
        <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
          <div className="absolute inset-6 rounded-full bg-[#f6d6dc]" />
          <div className="absolute top-[18%] left-[14%] flex size-[44%] items-center justify-center rounded-[2rem] bg-[#c2414b] shadow-xl">
            <span className={`${fraunces.className} text-center text-lg leading-tight font-bold text-white italic`}>
              Red
              <br />
              Velvet
            </span>
          </div>
          <div className="absolute top-[8%] right-[10%] flex size-[34%] items-center justify-center rounded-full bg-[#d99a3e] shadow-xl">
            <span className={`${fraunces.className} text-lg font-bold text-white italic`}>Nastar</span>
          </div>
          <div className="absolute right-[12%] bottom-[12%] flex size-[40%] items-center justify-center rounded-[2rem] bg-[#4a2c2a] shadow-xl">
            <span className={`${fraunces.className} text-lg font-bold text-[#fdf6ee] italic`}>Brownies</span>
          </div>
          <div className="absolute bottom-[10%] left-[8%] rounded-2xl bg-white px-4 py-3 shadow-xl">
            <p className="text-xs text-[#8a6d5c]">Pesanan bulan ini</p>
            <p className={`${fraunces.className} text-2xl font-extrabold`}>320+ kue</p>
          </div>
        </div>
      </section>

      {/* 2. Cerita */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <div className="mx-auto flex size-40 items-center justify-center rounded-full bg-[#f6d6dc] md:size-48">
            <Heart className="size-16 fill-[#b5475f] text-[#b5475f]" />
          </div>
          <div>
            <h2 className={`${fraunces.className} text-3xl font-extrabold md:text-4xl`}>Berawal dari dapur rumah</h2>
            <p className="mt-4 leading-relaxed text-[#7a5c4b]">
              Tahun 2012, Bu Ani mulai membuat kue untuk tetangga dan teman arisan. Resepnya diwariskan dari ibunya,
              dan sampai sekarang setiap kue masih dibuat dengan cara yang sama: bahan terbaik, tanpa pengawet, dan
              dikerjakan dengan sepenuh hati.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Katalog */}
      <section id="katalog" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
        <div className="mb-10 text-center">
          <h2 className={`${fraunces.className} text-3xl font-extrabold md:text-4xl`}>Katalog Kue</h2>
          <p className="mt-3 text-[#7a5c4b]">Harga sudah termasuk kotak dan kartu ucapan.</p>
        </div>
        <Catalog />
        <div className="mt-10 text-center">
          <a
            href={waDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#4a2c2a] px-6 py-3.5 font-semibold text-[#fdf6ee] hover:bg-[#3a221f]"
          >
            <MessageCircle className="size-5" /> Tanya stok & pesan
          </a>
        </div>
      </section>

      {/* 4. Promo */}
      <section className="px-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl bg-[#b5475f] px-8 py-10 text-white md:flex-row md:px-12">
          <div>
            <p className="text-sm font-semibold tracking-wider text-white/80 uppercase">Pre-order dibuka</p>
            <h2 className={`${fraunces.className} mt-1 text-3xl font-extrabold`}>Hampers Natal & Tahun Baru</h2>
            <p className="mt-2 text-white/85">Diskon 10% untuk pemesanan sampai 15 Desember.</p>
          </div>
          <a
            href={waDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-6 py-3 font-semibold text-[#b5475f] hover:bg-[#fdf6ee]"
          >
            Pesan hampers
          </a>
        </div>
      </section>

      {/* 5. Keunggulan */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className={`${fraunces.className} text-center text-3xl font-extrabold md:text-4xl`}>
          Kenapa kue Bu Ani <span className="text-[#b5475f] italic">beda</span>?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-white p-6 ring-1 ring-[#ecd9c6]">
              <Icon className="size-8 text-[#b5475f]" />
              <p className="mt-4 text-lg font-bold">{title}</p>
              <p className="mt-1 text-sm text-[#7a5c4b]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Cara Pesan */}
      <section id="cara-pesan" className="scroll-mt-16 bg-[#4a2c2a] px-5 py-20 text-[#fdf6ee]">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${fraunces.className} text-center text-3xl font-extrabold md:text-4xl`}>Cara Pesan</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className={`${fraunces.className} text-5xl font-extrabold text-[#e9a3b1] italic`}>{i + 1}</span>
                <p className="mt-2 text-lg font-bold">{step.title}</p>
                <p className="mt-1 text-sm text-[#fdf6ee]/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <h2 className={`${fraunces.className} text-center text-3xl font-extrabold md:text-4xl`}>Sering Ditanyakan</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl bg-white p-5 ring-1 ring-[#ecd9c6]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {faq.q}
                <span className="text-xl text-[#b5475f] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[#7a5c4b]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 8. Lokasi & Kontak */}
      <section id="lokasi" className="mx-auto grid max-w-6xl scroll-mt-16 gap-6 px-5 pb-20 lg:grid-cols-2">
        <MapIllustration />
        <div className="rounded-3xl bg-white p-8 ring-1 ring-[#ecd9c6]">
          <h2 className={`${fraunces.className} text-3xl font-extrabold`}>Mampir ke toko</h2>
          <p className="mt-4 flex gap-3 text-[#7a5c4b]">
            <MapPin className="mt-0.5 size-5 shrink-0 text-[#b5475f]" />
            Jl. Kenanga No. 8, Perumahan Taman Sari, Sukamaju
          </p>
          <p className="mt-3 flex gap-3 text-[#7a5c4b]">
            <Clock className="mt-0.5 size-5 shrink-0 text-[#b5475f]" />
            Setiap hari, 08.00 – 19.00 (Jumat tutup 11.00 – 13.00)
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1fb857]"
            >
              <MessageCircle className="size-5" /> Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ecd9c6] py-8 text-center text-sm text-[#8a6d5c]">
        © Kue Bu Ani · Dibuat dengan cinta di Sukamaju
      </footer>
    </div>
  )
}
