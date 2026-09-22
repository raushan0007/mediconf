import { Section } from "@/components/section"
import { ExternalLink } from "lucide-react"
import { GithubIcon } from "@/components/github-icon"

export function Links() {
  return (
    <Section id="links" eyebrow="See it or read more" title="Live site and source code" muted>
      <div className="grid gap-6 sm:grid-cols-2">
        <a
          href="https://medicon-navy.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-semibold">Live website</h3>
          <p className="mt-1 text-sm text-muted-foreground">Deployed on Vercel — see the event page and RSVP.</p>
          <span className="mt-3 break-all text-sm font-medium text-primary group-hover:underline">
            medicon-navy.vercel.app
          </span>
        </a>

        <a
          href="https://github.com/raushan0007/my-first-site-83"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <GithubIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-semibold">Source code</h3>
          <p className="mt-1 text-sm text-muted-foreground">Open source on GitHub — read or fork the code.</p>
          <span className="mt-3 break-all text-sm font-medium text-primary group-hover:underline">
            github.com/raushan0007/my-first-site-83
          </span>
        </a>
      </div>
    </Section>
  )
}
