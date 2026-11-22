"use client"

import { mainNav, sectionIds } from "@/config/site"
import { NavLink } from "@/components/layout/nav-link"
import { useActiveSection } from "@/components/layout/use-active-section"

export function DesktopNav() {
  const active = useActiveSection(sectionIds)

  return (
    <nav className="hidden items-center gap-7 lg:flex">
      {mainNav.map((item) => (
        <NavLink
          key={item.id}
          id={item.id}
          active={active === item.id}
          className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          activeClassName="font-medium text-primary after:absolute after:inset-x-0 after:bottom-[calc((100%-4.5rem)/2)] after:h-0.5 after:rounded-full after:bg-primary hover:text-primary"
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  )
}
