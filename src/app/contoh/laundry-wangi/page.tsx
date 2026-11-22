import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import {
  BedDouble,
  Check,
  Clock,
  Footprints,
  MapPin,
  MessageCircle,
  PackageCheck,
  Shirt,
  Sparkles,
  Truck,
  WashingMachine,
  Wind,
  Zap,
} from "lucide-react"

import { whatsappLink } from "@/config/site"
import { DemoBanner } from "@/components/demo/demo-banner"

/*
 * CONTOH DESAIN — PAKET HEMAT
 * Usaha fiktif "Laundry Wangi". Isi mengikuti batas paket Hemat:
 * 5 bagian (Pembuka, Layanan & Harga, Keunggulan, Lokasi & Jam Buka, Kontak) dan 6 item harga.
 * Warna, font, dan motif sengaja dibuat berbeda dari situs DimDev untuk menunjukkan
 * bahwa setiap website dibuat sesuai brand usaha masing-masing.
 */

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Contoh Desain: Laundry Wangi (Paket Hemat)",
  description: "Contoh landing page paket Hemat untuk usaha laundry. Usaha fiktif, dibuat sebagai contoh desain.",
  robots: { index: false, follow: false },
}

// Tombol WhatsApp di contoh ini diarahkan ke DimDev (bukan ke usaha fiktif)
const waDemo = whatsappLink(
  "Halo, saya mencoba tombol WhatsApp di contoh desain Laundry Wangi. Saya tertarik dibuatkan website seperti ini."
)

const services = [
  { icon: WashingMachine, name: "Cuci Kering Lipat", price: "Rp7.000", unit: "/kg", note: "Selesai 2 hari" },
  { icon: Shirt, name: "Cuci Setrika", price: "Rp9.000", unit: "/kg", note: "Paling laris", popular: true },
  { icon: Wind, name: "Setrika Saja", price: "Rp6.000", unit: "/kg", note: "Selesai 1 hari" },
  { icon: Zap, name: "Kilat 6 Jam", price: "Rp15.000", unit: "/kg", note: "Cuci setrika express" },
  { icon: BedDouble, name: "Bed Cover", price: "Rp25.000", unit: "/pcs", note: "Semua ukuran" },
  { icon: Footprints, name: "Cuci Sepatu", price: "Rp30.000", unit: "/pasang", note: "Deep clean" },
]

const perks = [
  { icon: Truck, title: "Antar-jemput gratis", text: "Minimal 5 kg untuk area Sukamaju dan sekitarnya." },
  { icon: Sparkles, title: "Wangi tahan lama", text: "Pakai deterjen dan pewangi premium, bukan yang kiloan." },
  { icon: PackageCheck, title: "Dilipat rapi", text: "Dikemas per pelanggan, dijamin tidak tertukar." },
]

const hours = [
  { day: "Senin – Jumat", time: "07.00 – 20.00" },
  { day: "Sabtu", time: "07.00 – 18.00" },
  { day: "Minggu", time: "08.00 – 14.00" },
]

function Bubbles({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <span className="absolute size-24 rounded-full border-2 border-white/40 bg-white/10" />
      <span className="absolute top-20 left-24 size-10 rounded-full border-2 border-white/40 bg-white/10" />
      <span className="absolute top-4 left-32 size-6 rounded-full border-2 border-white/40 bg-white/10" />
    </div>
  )
}

/** Kartu ilustrasi status cucian di hero (hanya tampil di layar lebar) */
function OrderStatus() {
  const steps = [
    { label: "Dijemput kurir", time: "08.15", done: true },
    { label: "Dicuci & dikeringkan", time: "10.40", done: true },
    { label: "Disetrika & dilipat", time: "14.20", done: true },
    { label: "Diantar ke rumah", time: "Sore ini", done: false },
  ]
  return (
    <div aria-hidden className="hidden w-72 rotate-2 rounded-3xl bg-white p-6 text-slate-800 shadow-2xl lg:block">
      <p className="text-sm font-bold text-slate-400">Cucian Bu Rina · 4 kg</p>
      <p className="mt-1 text-lg font-black text-teal-900">Hampir selesai! 🎉</p>
      <ol className="mt-5 space-y-4">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-3">
            <span
              className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                step.done ? "bg-teal-600 text-white" : "border-2 border-dashed border-amber-400 bg-amber-50"
              }`}
            >
              {step.done && <Check className="size-4" strokeWidth={3} />}
            </span>
            <span className="flex-1 text-sm font-bold">{step.label}</span>
            <span className={`text-xs font-bold ${step.done ? "text-slate-400" : "text-amber-500"}`}>{step.time}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default function LaundryWangiPage() {
  return (
    <div className={`${nunito.className} min-h-full bg-[#f3fbfa] text-slate-800`}>
      <DemoBanner demoName="Laundry Wangi" planName="Hemat" />

      {/* Navigasi usaha */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-teal-600 text-white">
            <WashingMachine className="size-6" />
          </span>
          <span className="text-xl font-black tracking-tight text-teal-900">
            Laundry<span className="text-amber-500">Wangi</span>
          </span>
        </a>
        <a
          href={waDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-teal-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-teal-700 sm:inline-flex"
        >
          Pesan Antar-Jemput
        </a>
      </header>

      {/* 1. Pembuka */}
      <section className="px-5">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-teal-600 px-6 py-14 text-white md:px-14 md:py-20">
          <Bubbles className="top-8 right-40 hidden lg:block" />
          <Bubbles className="top-6 right-28 lg:hidden" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-sm font-extrabold text-amber-950">
              <Truck className="size-4" /> Antar-jemput gratis
            </span>
            <h1 className="mt-5 text-4xl leading-tight font-black md:text-6xl">
              Cucian beres,
              <br />
              kamu tinggal santai.
            </h1>
            <p className="mt-5 text-lg text-teal-50/90">
              Laundry kiloan dan satuan di Sukamaju. Bersih, wangi, dilipat rapi, dan bisa dijemput langsung ke rumah.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-extrabold text-teal-700 shadow-lg hover:bg-teal-50"
              >
                <MessageCircle className="size-5" /> Chat via WhatsApp
              </a>
              <a
                href="#harga"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 font-bold ring-2 ring-white/50 hover:bg-white/10"
              >
                Lihat daftar harga
              </a>
            </div>
          </div>
          <OrderStatus />
          </div>
        </div>
      </section>

      {/* 2. Layanan & Harga */}
      <section id="harga" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-20">
        <div className="text-center">
          <p className="font-extrabold text-amber-500">Daftar Harga</p>
          <h2 className="mt-1 text-3xl font-black text-teal-900 md:text-4xl">Harga jelas, tanpa biaya tambahan</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, name, price, unit, note, popular }) => (
            <div
              key={name}
              className={`relative flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ${
                popular ? "ring-2 ring-amber-400" : "ring-teal-100"
              }`}
            >
              {popular && (
                <span className="absolute -top-3 right-5 rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-extrabold text-amber-950">
                  Favorit
                </span>
              )}
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <Icon className="size-7" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-extrabold text-teal-950">{name}</p>
                <p className="text-sm text-slate-500">{note}</p>
              </div>
              <p className="text-right font-black text-teal-700">
                {price}
                <span className="block text-xs font-semibold text-slate-400">{unit}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Keunggulan */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black text-teal-900 md:text-4xl">
            Kenapa pelanggan balik lagi ke <span className="text-amber-500">Laundry Wangi</span>?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {perks.map(({ icon: Icon, title, text }) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Icon className="size-8" />
                </span>
                <p className="mt-4 text-xl font-extrabold text-teal-950">{title}</p>
                <p className="mt-2 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lokasi & Jam Buka */}
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-teal-100">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <MapPin className="size-6" />
          </span>
          <h2 className="mt-5 text-2xl font-black text-teal-900">Lokasi</h2>
          <p className="mt-2 text-slate-600">
            Jl. Melati Raya No. 21, Sukamaju
            <br />
            (sebelah Apotek Sehat, depan masjid Al-Ikhlas)
          </p>
          <p className="mt-6 text-sm font-extrabold text-teal-900">Area antar-jemput gratis:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Sukamaju", "Sukasari", "Cempaka", "Griya Asri", "Perum Melati"].map((area) => (
              <span key={area} className="rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-teal-100">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
            <Clock className="size-6" />
          </span>
          <h2 className="mt-5 text-2xl font-black text-teal-900">Jam Buka</h2>
          <ul className="mt-3 space-y-2">
            {hours.map(({ day, time }) => (
              <li key={day} className="flex justify-between border-b border-dashed border-teal-100 pb-2 text-slate-600">
                <span>{day}</span>
                <span className="font-bold text-teal-800">{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Kontak */}
      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-amber-400 px-6 py-14 text-center md:py-16">
          <Bubbles className="top-6 left-10 opacity-70" />
          <h2 className="relative text-3xl font-black text-amber-950 md:text-4xl">Tumpukan cucian? Serahkan ke kami.</h2>
          <p className="relative mx-auto mt-3 max-w-lg text-amber-950/80">
            Chat sekarang, kurir kami jemput cucianmu hari ini juga.
          </p>
          <a
            href={waDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-4 text-lg font-extrabold text-white shadow-lg hover:bg-teal-800"
          >
            <MessageCircle className="size-5" /> Pesan via WhatsApp
          </a>
        </div>
      </section>

      <footer className="pb-10 text-center text-sm text-slate-400">© Laundry Wangi · Sukamaju</footer>
    </div>
  )
}
