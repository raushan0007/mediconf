import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  eyebrow: string
  title: string
  children: ReactNode
  muted?: boolean
}

export function Section({ id, eyebrow, title, children, muted }: SectionProps) {
  return (
    <section id={id} className={cn("border-b border-border/60", muted && "bg-muted/40")}>
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
