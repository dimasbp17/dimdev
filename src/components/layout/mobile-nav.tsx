"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { NavLink } from "@/components/layout/nav-link"
import { mainNav, sectionIds, siteConfig, whatsappLink } from "@/config/site"
import { useActiveSection } from "@/components/layout/use-active-section"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={buttonVariants({ variant: "ghost", size: "icon", className: "lg:hidden" })}
        aria-label="Buka menu"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{siteConfig.name}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {mainNav.map((item) => (
            <NavLink
              key={item.id}
              id={item.id}
              active={active === item.id}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm hover:bg-muted"
              activeClassName="bg-primary/10 font-medium text-primary hover:bg-primary/10"
            >
              {item.title}
            </NavLink>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ className: "mt-4" })}
          >
            Konsultasi Gratis
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
