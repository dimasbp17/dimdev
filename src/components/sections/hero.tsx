import { ArrowRight, MessageCircle } from 'lucide-react';

import { pricingPlans, siteConfig, whatsappLink } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export function Hero() {
  const firstName = siteConfig.owner.name.split(' ')[0];

  return (
    <section id="beranda" className="border-b">
      <div className="container grid items-center gap-14 pt-12 pb-16 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:pt-20 lg:pb-24">
        <div>
          <p className="text-sm text-muted-foreground">
            Jasa website UMKM oleh{' '}
            <span className="font-semibold text-foreground">{siteConfig.owner.name}</span>
          </p>

          <h1 className="mt-5 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-[3.6rem]">
            Buat website untuk usaha Anda, mulai{' '}
            <span className="text-primary">Rp500 ribu.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Halo, saya {firstName}. Saya bantu warung, toko kue, laundry, dan usaha kecil lainnya punya website
            sendiri. Tampil rapi di HP, muncul di Google, dan pembeli bisa langsung menghubungi Anda lewat WhatsApp.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: 'lg', className: 'h-12 px-6 text-base' })}
            >
              <MessageCircle /> Chat saya di WhatsApp
            </a>
            <a
              href="#harga"
              className="group inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline"
            >
              Lihat daftar harga
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Konsultasi gratis, tanpa kewajiban order. Setiap pesan saya balas maksimal 1×24 jam.
          </p>
        </div>

        <Receipt />
      </div>
    </section>
  );
}

/** Nota berisi isi paket termurah, datanya diambil dari pricingPlans supaya selalu sama dengan tabel harga. */
function Receipt() {
  const plan = pricingPlans[0];

  return (
    <div className="mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
      <div className="relative rotate-[1.5deg] drop-shadow-xl">
        <div className="receipt-edge bg-[#fffdf7] px-6 pt-7 pb-10 font-mono text-[13px] leading-relaxed text-neutral-800">
          <div className="text-center">
            <p className="text-base font-bold tracking-[0.2em]">{siteConfig.name.toUpperCase()}</p>
            <p className="text-neutral-500">Jasa Pembuatan Website</p>
          </div>

          <Divider />

          <p className="font-bold">PAKET {plan.name.toUpperCase()}</p>
          <ul className="mt-2 space-y-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-baseline gap-2">
                <span>{feature}</span>
                <span className="mb-1 flex-1 border-b border-dotted border-neutral-400" />
                <span>✓</span>
              </li>
            ))}
          </ul>

          <Divider />

          <div className="flex items-baseline justify-between text-base font-bold">
            <span>TOTAL</span>
            <span>{plan.price}</span>
          </div>
          <p className="mt-1 text-neutral-500">Sudah termasuk domain 1 tahun</p>

          <Divider />

          <p className="text-center text-neutral-500">Terima kasih sudah mampir :)</p>
        </div>

        {/* Stempel */}
        <div className="absolute -top-3 right-1 rotate-12 rounded-md sm:-right-3 border-2 border-primary/70 bg-[#fffdf7] px-2.5 py-1 font-mono text-xs font-bold tracking-widest text-primary/80 uppercase">
          Harga pas
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-4 border-t border-dashed border-neutral-400" />;
}
