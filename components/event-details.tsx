import { Section } from "@/components/section"
import { Mic, Users, UtensilsCrossed } from "lucide-react"

const items = [
  {
    icon: Mic,
    title: "Keynote address",
    description: "An opening keynote to set the theme for the evening and the year ahead in medicine.",
  },
  {
    icon: Users,
    title: "Expert panel discussions",
    description: "Panels where specialists share insight and take questions from the audience.",
  },
  {
    icon: UtensilsCrossed,
    title: "Networking dinner",
    description: "A dinner for attendees to connect with peers and speakers after the sessions.",
  },
]

export function EventDetails() {
  return (
    <Section id="program" eyebrow="Event details" title="What happens on the night" muted>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
