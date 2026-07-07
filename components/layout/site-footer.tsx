import { Code2, Mail, Users } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border/60 border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
          <p className="text-muted-foreground text-sm">
            {'© '}
            {year} <span className="text-primary">bhanurx100.dev</span>
            {' — All rights reserved.'}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground border-border hover:border-primary/40 inline-flex size-10 items-center justify-center rounded-full border transition-colors"
            >
              <Code2 className="size-4" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground border-border hover:border-primary/40 inline-flex size-10 items-center justify-center rounded-full border transition-colors"
            >
              <Users className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground border-border hover:border-primary/40 inline-flex size-10 items-center justify-center rounded-full border transition-colors"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-muted-foreground text-sm">
            <span className="text-primary font-semibold">{'\u201C'}</span> Code.
            Build. Solve. Repeat.
          </p>
          <div className="text-muted-foreground/70 text-xs font-mono">
            bhanurx100{' '}
            <span className="text-primary/80">rx</span>: reactive systems ·{' '}
            <span className="text-primary/80">100</span>: full commitment
          </div>
        </div>
      </div>
    </footer>
  )
}