"use client"

import { useState } from "react"
import { Coffee, Cookie, Croissant, CupSoda, IceCreamCone, MessageCircle, Sandwich, Soup } from "lucide-react"

import { whatsappLink } from "@/config/site"

const icons = { Coffee, Cookie, Croissant, CupSoda, IceCreamCone, Sandwich, Soup }

type Item = { name: string; price: string; desc: string; icon: keyof typeof icons; best?: boolean }

const menu: { name: string; items: Item[] }[] = [
  {
    name: "Kopi",
    items: [
      { name: "Es Kopi Susu Teras", price: "Rp22.000", desc: "Espresso, susu segar, gula aren", icon: "Coffee", best: true },
      { name: "Americano", price: "Rp20.000", desc: "Panas atau dingin", icon: "Coffee" },
      { name: "Cappuccino", price: "Rp26.000", desc: "Foam lembut, latte art", icon: "Coffee" },
      { name: "Caffe Latte", price: "Rp26.000", desc: "Espresso dan susu creamy", icon: "Coffee" },
      { name: "Kopi Pandan", price: "Rp25.000", desc: "Latte dengan sirup pandan homemade", icon: "Coffee" },
      { name: "Kopi Tubruk", price: "Rp15.000", desc: "Robusta Temanggung, ampas di gelas", icon: "Coffee" },
      { name: "V60 Single Origin", price: "Rp30.000", desc: "Biji pilihan, ganti tiap minggu", icon: "Coffee" },
      { name: "Affogato", price: "Rp28.000", desc: "Espresso di atas es krim vanila", icon: "IceCreamCone" },
    ],
  },
  {
    name: "Non-Kopi",
    items: [
      { name: "Matcha Latte", price: "Rp27.000", desc: "Matcha Uji, susu segar", icon: "CupSoda", best: true },
      { name: "Cokelat Panas", price: "Rp24.000", desc: "Cokelat Belgia, kental", icon: "CupSoda" },
      { name: "Teh Tarik", price: "Rp18.000", desc: "Manis legit, ditarik sampai berbusa", icon: "CupSoda" },
      { name: "Lemon Tea", price: "Rp16.000", desc: "Teh melati dan lemon segar", icon: "CupSoda" },
      { name: "Red Velvet Latte", price: "Rp25.000", desc: "Manis lembut, cantik di foto", icon: "CupSoda" },
      { name: "Wedang Jahe", price: "Rp15.000", desc: "Jahe emprit, gula batu", icon: "CupSoda" },
      { name: "Es Jeruk Peras", price: "Rp14.000", desc: "Jeruk peras asli tanpa sirup", icon: "CupSoda" },
    ],
  },
  {
    name: "Makanan",
    items: [
      { name: "Nasi Goreng Teras", price: "Rp32.000", desc: "Telur ceplok, ayam suwir, kerupuk", icon: "Soup", best: true },
      { name: "Mie Goreng Jawa", price: "Rp30.000", desc: "Dimasak di atas arang", icon: "Soup" },
      { name: "Nasi Ayam Sambal Matah", price: "Rp35.000", desc: "Ayam crispy, sambal matah segar", icon: "Soup" },
      { name: "Rice Bowl Teriyaki", price: "Rp34.000", desc: "Ayam teriyaki, telur, nori", icon: "Soup" },
      { name: "Spaghetti Aglio Olio", price: "Rp33.000", desc: "Bawang putih, cabai, smoked beef", icon: "Soup" },
      { name: "Chicken Sandwich", price: "Rp30.000", desc: "Roti sourdough, ayam panggang", icon: "Sandwich" },
      { name: "Soto Ayam Lamongan", price: "Rp28.000", desc: "Kuah kuning, koya gurih", icon: "Soup" },
      { name: "Nasi Telur Kecap", price: "Rp20.000", desc: "Comfort food, harga bersahabat", icon: "Soup" },
    ],
  },
  {
    name: "Camilan",
    items: [
      { name: "Kentang Goreng", price: "Rp20.000", desc: "Bumbu garlic parmesan", icon: "Cookie" },
      { name: "Pisang Goreng Keju", price: "Rp18.000", desc: "Keju parut dan susu kental manis", icon: "Cookie" },
      { name: "Tahu Cabai Garam", price: "Rp18.000", desc: "Renyah, pedas gurih", icon: "Cookie" },
      { name: "Croissant Butter", price: "Rp22.000", desc: "Dipanggang tiap pagi", icon: "Croissant" },
      { name: "Roti Bakar Cokelat Keju", price: "Rp20.000", desc: "Roti tebal, topping melimpah", icon: "Sandwich" },
      { name: "Cireng Rujak", price: "Rp16.000", desc: "Dengan sambal rujak manis pedas", icon: "Cookie" },
      { name: "Es Krim Kelapa", price: "Rp18.000", desc: "Kelapa muda, topping kacang", icon: "IceCreamCone" },
    ],
  },
]

export function Menu() {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div role="tablist" aria-label="Kategori menu" className="flex flex-wrap justify-center gap-2">
        {menu.map((category, i) => (
          <button
            key={category.name}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-colors ${
              active === i ? "bg-[#c8553d] text-white" : "bg-white/10 text-[#f5efe3] hover:bg-white/20"
            }`}
          >
            {category.name} <span className="opacity-60">({category.items.length})</span>
          </button>
        ))}
      </div>

      <ul role="tabpanel" className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2">
        {menu[active].items.map((item) => {
          const Icon = icons[item.icon]
          return (
            <li key={item.name} className="flex min-w-0 items-center gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 sm:gap-4">
              {/* Di website klien, kotak ini diganti foto menu asli */}
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f5efe3]/10 text-[#e9b872] sm:size-16">
                <Icon className="size-7" strokeWidth={1.5} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-2 font-bold text-[#f5efe3]">
                  <span className="min-w-0 truncate">{item.name}</span>
                  {item.best && (
                    <span className="shrink-0 rounded-full bg-[#e9b872] px-2 py-0.5 text-[10px] font-extrabold text-[#1f3d2b] uppercase">
                      Best seller
                    </span>
                  )}
                </p>
                <p className="truncate text-sm text-[#f5efe3]/60">{item.desc}</p>
                <p className="mt-0.5 font-bold text-[#e9b872]">{item.price}</p>
              </div>
              {/* Tombol pesan per menu: fitur paket Lengkap */}
              <a
                href={whatsappLink(
                  `Halo, saya mencoba tombol pesan "${item.name}" di contoh desain Kopi Teras. Saya tertarik dibuatkan website seperti ini.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pesan ${item.name} via WhatsApp`}
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-2 text-sm font-bold text-white hover:bg-[#1fb857]"
              >
                <MessageCircle className="size-4" />
                <span className="hidden sm:inline">Pesan</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
