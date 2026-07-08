import { ArrowRight, Code2 } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function GitHubCta({
  title,
  description,
  href = siteConfig.github,
}: {
  title: string
  description?: string
  href?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:border-primary/30 flex items-center justify-between gap-4 p-6 transition-colors"
    >
      <span className="flex items-center gap-4">
        <span className="border-border bg-secondary inline-flex size-12 shrink-0 items-center justify-center rounded-full border">
          <Code2 className="size-5" aria-hidden="true" />
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="font-semibold">{title}</span>
          {description && (
            <span className="text-muted-foreground text-sm">{description}</span>
          )}
        </span>
      </span>
      <ArrowRight
        className="text-muted-foreground group-hover:text-primary size-5 shrink-0 transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  )
}

export const GithubCTA = GitHubCta