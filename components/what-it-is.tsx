import { Section } from "@/components/section"

export function WhatItIs() {
  return (
    <Section id="about" eyebrow="What it is" title="A one-page event website for doctors">
      <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
        <p>
          Doctor Conference 2026 is a single-page event website for a conference taking place on{" "}
          <strong className="font-semibold text-foreground">15 September 2026 at 6:00 PM</strong>, at{" "}
          <strong className="font-semibold text-foreground">Buddha Heritage, Patna</strong>.
        </p>
        <p>
          The page presents the full event program — a keynote address, expert panel discussions, and a networking
          dinner — and lets doctors RSVP by email, all in one place.
        </p>
        <p>
          It was built with <strong className="font-semibold text-foreground">v0</strong>, published on{" "}
          <strong className="font-semibold text-foreground">Vercel</strong>, and its code is open source on{" "}
          <strong className="font-semibold text-foreground">GitHub</strong>.
        </p>
      </div>
    </Section>
  )
}
