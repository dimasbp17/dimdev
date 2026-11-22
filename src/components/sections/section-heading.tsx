import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <Reveal className={cn("mx-auto mb-12 max-w-2xl text-center md:mb-14", className)}>
      {eyebrow && (
        <p className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-muted-foreground md:text-lg">{description}</p>}
    </Reveal>
  )
}
