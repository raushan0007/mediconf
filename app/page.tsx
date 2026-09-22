import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { WhatItIs } from "@/components/what-it-is"
import { EventDetails } from "@/components/event-details"
import { WhyItMatters } from "@/components/why-it-matters"
import { Links } from "@/components/links"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <WhatItIs />
        <EventDetails />
        <WhyItMatters />
        <Links />
      </main>
      <SiteFooter />
    </div>
  )
}
