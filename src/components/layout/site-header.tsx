import { whatsappLink } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MobileNav } from "@/components/layout/mobile-nav"
import { DesktopNav } from "@/components/layout/desktop-nav"
import { Logo } from "@/components/layout/logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/75 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between lg:h-[4.5rem]">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg", className: "hidden h-10 px-4 shadow-md shadow-primary/25 md:inline-flex" })}
          >
            Konsultasi Gratis
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
