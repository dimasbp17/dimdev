"use client"

import { useEffect, useState } from "react"

/** Mengembalikan id bagian halaman yang sedang terlihat di layar (scroll spy). */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const visible = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting)
        // Ambil bagian pertama (urutan di halaman) yang sedang melewati garis tengah layar
        const current = ids.find((id) => visible.get(id))
        if (current) setActive(current)
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
