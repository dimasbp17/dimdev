"use client"

import { cn } from "@/lib/utils"

/**
 * Link ke bagian halaman utama. Pakai href "/#id" supaya tetap berfungsi
 * dari halaman lain (mis. 404); di beranda browser cukup scroll ke bagiannya.
 */
export function NavLink({
  id,
  active,
  className,
  activeClassName,
  onClick,
  children,
}: {
  id: string
  active: boolean
  className?: string
  activeClassName?: string
  onClick?: () => void
  children: React.ReactNode
}) {
  return (
    <a
      href={`/#${id}`}
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={cn(className, active && activeClassName)}
    >
      {children}
    </a>
  )
}
