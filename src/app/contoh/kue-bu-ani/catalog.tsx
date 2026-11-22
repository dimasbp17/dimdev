"use client"

import { useState } from "react"
import { Cake, CakeSlice, Cookie, Gift, Sandwich, Star } from "lucide-react"

type Product = { name: string; price: string; note: string; tone: string; icon: keyof typeof icons }

const icons = { Cake, CakeSlice, Cookie, Gift, Sandwich, Star }

const categories: { name: string; products: Product[] }[] = [
  {
    name: "Kue Ulang Tahun",
    products: [
      { name: "Black Forest", price: "Rp185.000", note: "Diameter 20 cm", tone: "bg-[#5b3a29]", icon: "Cake" },
      { name: "Red Velvet", price: "Rp210.000", note: "Diameter 20 cm", tone: "bg-[#c2414b]", icon: "Cake" },
      { name: "Tiramisu", price: "Rp220.000", note: "Diameter 20 cm", tone: "bg-[#a47551]", icon: "CakeSlice" },
      { name: "Rainbow Cake", price: "Rp235.000", note: "Diameter 20 cm", tone: "bg-[#e07a9a]", icon: "CakeSlice" },
      { name: "Kue Karakter Custom", price: "mulai Rp300.000", note: "Bisa request tema", tone: "bg-[#8e6bbf]", icon: "Star" },
    ],
  },
  {
    name: "Kue Kering",
    products: [
      { name: "Nastar Keju", price: "Rp95.000", note: "Toples 500 gr", tone: "bg-[#d99a3e]", icon: "Cookie" },
      { name: "Kastengel", price: "Rp105.000", note: "Toples 500 gr", tone: "bg-[#c9a227]", icon: "Cookie" },
      { name: "Putri Salju", price: "Rp85.000", note: "Toples 500 gr", tone: "bg-[#b8a89a]", icon: "Cookie" },
      { name: "Lidah Kucing", price: "Rp80.000", note: "Toples 500 gr", tone: "bg-[#d4a373]", icon: "Cookie" },
      { name: "Choco Chips", price: "Rp85.000", note: "Toples 500 gr", tone: "bg-[#6f4e37]", icon: "Cookie" },
    ],
  },
  {
    name: "Hampers & Snack",
    products: [
      { name: "Hampers Mini", price: "Rp260.000", note: "3 toples + kartu ucapan", tone: "bg-[#e9a3b1]", icon: "Gift" },
      { name: "Hampers Premium", price: "Rp450.000", note: "5 toples + keranjang rotan", tone: "bg-[#b5475f]", icon: "Gift" },
      { name: "Brownies Panggang", price: "Rp75.000", note: "Loyang 20 × 20 cm", tone: "bg-[#4a2c2a]", icon: "CakeSlice" },
      { name: "Bolu Pandan", price: "Rp65.000", note: "Loyang bulat 22 cm", tone: "bg-[#7fa65a]", icon: "Cake" },
      { name: "Snack Box Arisan", price: "Rp15.000", note: "Isi 4 kue, min. 20 box", tone: "bg-[#e0b15c]", icon: "Sandwich" },
    ],
  },
]

export function Catalog() {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div role="tablist" aria-label="Kategori produk" className="flex flex-wrap justify-center gap-2">
        {categories.map((category, i) => (
          <button
            key={category.name}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              active === i ? "bg-[#4a2c2a] text-[#fdf6ee]" : "bg-white text-[#4a2c2a] ring-1 ring-[#ecd9c6] hover:bg-[#fbeee3]"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {categories[active].products.map((product) => {
          const Icon = icons[product.icon]
          return (
            <div key={product.name} className="overflow-hidden rounded-2xl bg-white ring-1 ring-[#ecd9c6]">
              {/* Di website klien, kotak ini diganti foto produk asli */}
              <div className={`flex aspect-[4/3] items-center justify-center ${product.tone}`}>
                <Icon className="size-12 text-white/85" strokeWidth={1.5} />
              </div>
              <div className="p-4">
                <p className="font-semibold text-[#4a2c2a]">{product.name}</p>
                <p className="text-xs text-[#8a6d5c]">{product.note}</p>
                <p className="mt-2 font-bold text-[#b5475f]">{product.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
