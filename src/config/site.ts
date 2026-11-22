// Data kontak dan konten utama situs. Ubah di sini supaya semua bagian ikut berubah.

export const siteConfig = {
  name: "DimDev",
  tagline: "Jasa Landing Page UMKM",
  description:
    "Jasa pembuatan landing page untuk UMKM mulai Rp500 ribu, sudah termasuk domain. Desain sesuai brand usaha Anda, rapi di HP, dan terhubung langsung ke WhatsApp. Dikerjakan langsung oleh saya, tanpa perantara.",
  // Diisi saat build di next.config.ts (env manual → `URL` dari Netlify → localhost)
  url: process.env.SITE_URL ?? "http://localhost:3000",
  email: "dimasbp.tech@gmail.com",
  whatsapp: {
    number: "6282146202762", // format internasional tanpa "+"
    message: "Halo, saya punya usaha dan tertarik bikin website. Boleh konsultasi?",
  },
  owner: {
    name: "Dimas Bagus Prasetyo",
    role: "Frontend Web Developer",
  },
  social: {
    portfolio: "https://dimasbp.my.id",
    github: "https://github.com/dimasbp17",
    linkedin: "https://www.linkedin.com/in/dimas-bagus-prasetyo-528a7b2a0/",
  },
}

export function whatsappLink(message = siteConfig.whatsapp.message) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`
}

// Semua menu mengarah ke bagian di halaman utama (situs satu halaman).
// `id` harus sama dengan atribut id pada <section> yang dituju.
export const mainNav = [
  { title: "Beranda", id: "beranda" },
  { title: "Layanan", id: "layanan" },
  { title: "Harga", id: "harga" },
  { title: "Tentang Saya", id: "tentang" },
  { title: "Kontak", id: "kontak" },
] as const

// Jenis landing page berdasarkan tipe usaha
export const websiteTypes = [
  {
    icon: "UtensilsCrossed",
    title: "Kuliner & Warung",
    description: "Tampilkan menu dan harga, jam buka, lokasi, serta tombol pesan antar via WhatsApp atau GoFood.",
    example: "Cocok untuk: warung makan, kedai kopi, katering, jajanan",
  },
  {
    icon: "ShoppingBag",
    title: "Toko & Produk",
    description: "Etalase produk lengkap dengan foto dan harga. Pembeli klik “Pesan” dan langsung terhubung ke WhatsApp-mu.",
    example: "Cocok untuk: toko kue, fashion, frozen food, kerajinan",
  },
  {
    icon: "Scissors",
    title: "Jasa & Layanan",
    description: "Jelaskan layanan dan daftar harga, tampilkan hasil kerja, dan terima booking langsung lewat WhatsApp.",
    example: "Cocok untuk: laundry, salon, bengkel, servis elektronik",
  },
] as const

// Layanan pelengkap yang sudah termasuk di paket atau bisa ditambahkan
export const addons = [
  {
    icon: "MapPin",
    title: "Daftar di Google Maps",
    description: "Usaha Anda muncul di Google Maps lengkap dengan alamat, jam buka, dan foto, sehingga mudah ditemukan pelanggan sekitar.",
  },
  {
    icon: "Search",
    title: "SEO Dasar",
    description: "Pengaturan supaya website lebih mudah ditemukan saat orang mencari di Google, misalnya “katering dekat sini”.",
  },
  {
    icon: "Wrench",
    title: "Update & Perawatan",
    description: "Mau ganti harga atau tambah produk? Cukup chat saya. Gratis selama masa update di paket, setelahnya bisa langganan bulanan.",
  },
] as const

export type PricingPlan = {
  name: string
  price: string
  /** Isi untuk menampilkan harga coret saat promo, mis. "Rp1.500.000" */
  originalPrice?: string
  /** Label promo, mis. "Harga promo untuk 5 klien pertama" */
  promo?: string
  priceNote: string
  duration: string
  /** Link ke halaman contoh desain paket ini (opsional) */
  exampleUrl?: string
  description: string
  features: string[]
  highlighted: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Hemat",
    price: "Rp500.000",
    exampleUrl: "/contoh/laundry-wangi",
    priceNote: "Sudah termasuk domain .com / .id tahun pertama",
    duration: "Selesai 1–2 hari kerja",
    description: "Pas untuk usaha yang baru mulai online.",
    features: [
      "Desain sesuai brand usaha Anda",
      "Hingga 5 bagian halaman",
      "Menu/produk hingga 6 item",
      "Tombol pesan via WhatsApp",
      "Domain .com / .id 1 tahun",
      "Gratis hosting + SSL (https)",
      "Revisi 2x",
    ],
    highlighted: false,
  },
  {
    name: "Standar",
    price: "Rp1.000.000",
    exampleUrl: "/contoh/kue-bu-ani",
    priceNote: "Sudah termasuk domain .com / .id tahun pertama",
    duration: "Selesai 2–3 hari kerja",
    description: "Pilihan pas untuk kebanyakan UMKM.",
    features: [
      "Desain sesuai brand usaha Anda",
      "Hingga 8 bagian halaman",
      "Menu/produk hingga 15 item",
      "Tombol WhatsApp & peta lokasi",
      "Dibantu daftar di Google Maps",
      "Domain .com / .id 1 tahun",
      "Gratis hosting + SSL (https)",
      "SEO dasar",
      "Revisi 3x",
      "Gratis update konten 1 bulan",
    ],
    highlighted: true,
  },
  {
    name: "Lengkap",
    price: "Rp1.500.000",
    exampleUrl: "/contoh/kopi-teras",
    priceNote: "Sudah termasuk domain .com / .id tahun pertama",
    duration: "Selesai 3–5 hari kerja",
    description: "Untuk usaha dengan banyak produk dan saluran penjualan.",
    features: [
      "Semua isi paket Standar",
      "Hingga 12 bagian halaman",
      "Menu/produk hingga 30 item",
      "Tombol pesan WhatsApp di tiap produk",
      "Link GoFood, GrabFood, ShopeeFood & marketplace",
      "Galeri foto & testimoni pelanggan",
      "SEO dasar + Google Search Console",
      "Revisi 4x",
      "Gratis update konten 3 bulan",
    ],
    highlighted: false,
  },
]

export const orderSteps = [
  { title: "Konsultasi", description: "Diskusi via WhatsApp tentang usaha Anda dan website yang dibutuhkan. Gratis." },
  { title: "Kirim Bahan", description: "Kirim logo, foto produk, harga, dan info usaha." },
  { title: "Pengerjaan", description: "Saya buatkan websitenya dan kirim preview untuk Anda cek dan revisi." },
  { title: "Online!", description: "Website tayang dan siap dibagikan ke pelanggan. Saya tetap bantu kalau ada perubahan." },
]

export const faqs = [
  {
    question: "Apa itu landing page?",
    answer:
      "Landing page adalah website satu halaman yang di-scroll ke bawah. Isinya semua yang perlu diketahui pembeli: siapa Anda, apa yang dijual, harganya, lokasinya, dan cara pesan. Untuk kebanyakan UMKM, satu halaman yang rapi sudah lebih dari cukup.",
  },
  {
    question: "Saya tidak paham teknologi, apakah bisa?",
    answer:
      "Bisa sekali. Anda cukup mengirim info usaha, foto produk, dan nomor WhatsApp. Sisanya saya yang urus, dari domain sampai website online.",
  },
  {
    question: "Berapa lama website selesai?",
    answer:
      "Paket Hemat 1–2 hari kerja, Standar 2–3 hari kerja, dan Lengkap 3–5 hari kerja. Waktunya dihitung sejak semua bahan (foto, logo, daftar harga) sudah saya terima. Setiap revisi saya selesaikan maksimal 1×24 jam.",
  },
  {
    question: "Apakah sudah termasuk domain dan hosting?",
    answer:
      "Sudah. Semua paket termasuk domain .com atau .id untuk tahun pertama, serta hosting dan SSL (gembok https) gratis.",
  },
  {
    question: "Domain itu apa?",
    answer:
      "Domain adalah alamat website, misalnya warungbusri.com. Domain disewa per tahun dari pengelola domain resmi dan didaftarkan atas nama usaha Anda sendiri, jadi benar-benar milik Anda, bukan milik saya.",
  },
  {
    question: "Apakah ada biaya setiap tahun?",
    answer:
      "Mulai tahun kedua, hanya perpanjangan domain sesuai harga dari pengelola domain (untuk .com sekitar Rp250 ribu per tahun, sudah termasuk PPN). Hosting tetap gratis.",
  },
  {
    question: "Bagaimana cara pembayarannya?",
    answer: "DP 50% di awal, pelunasan 50% setelah website selesai dan Anda setujui. Bisa transfer bank atau e-wallet.",
  },
  {
    question: "Kalau nanti mau ganti harga atau tambah produk?",
    answer: "Tinggal chat saya lewat WhatsApp. Selama masa gratis update, perubahan konten tidak dikenakan biaya.",
  },
]

export const sectionIds = mainNav.map((item) => item.id)
