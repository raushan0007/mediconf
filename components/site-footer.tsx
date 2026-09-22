export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Made by <span className="font-medium text-foreground">Raushan Kumar Gupta</span>
        </p>
        <p className="text-sm text-muted-foreground">Doctor Conference 2026 · Built with v0, deployed on Vercel</p>
      </div>
    </footer>
  )
}
