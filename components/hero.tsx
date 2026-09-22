import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/60 to-background"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
          A one-page event website · Built with v0
        </p>
        <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Doctor Conference 2026
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          One simple place for doctors to see the event details and RSVP by email. This page explains what the project
          is, why it matters, and where to see it live.
        </p>

        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <dt className="sr-only">Date and time</dt>
              <dd className="text-sm font-medium">15 September 2026 · 6:00 PM</dd>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
            <div>
              <dt className="sr-only">Location</dt>
              <dd className="text-sm font-medium">Buddha Heritage, Patna</dd>
            </div>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://medicon-navy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View the live site
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/raushan0007/my-first-site-83"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            View the code
          </a>
        </div>
      </div>
    </section>
  )
}
