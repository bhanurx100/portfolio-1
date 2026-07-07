import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Code2, PenLine } from 'lucide-react'
import { projects } from '@/lib/projects-data'
import { siteConfig } from '@/lib/site-config'
import { FeatureChip, StatusBadge, TechChip } from '@/components/shared/chips'
import { GitHubCta } from '@/components/shared/github-cta'

export const metadata: Metadata = {
  title: 'Projects — Bhanuprasad L.',
  description:
    'Real-world products designed and developed from idea to implementation.',
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">Projects</p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Things I&apos;ve <span className="text-primary">built</span>
          </h1>
          <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
            Real-world products I&apos;ve designed and developed from idea to
            implementation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="border-border bg-card text-primary inline-flex size-11 shrink-0 items-center justify-center rounded-xl border">
            <PenLine className="size-5" aria-hidden="true" />
          </span>
          <p className="text-muted-foreground max-w-[16rem] text-sm leading-relaxed">
            Each project is built with a focus on performance, scalability and
            great UX.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <article key={project.slug} className="surface-card overflow-hidden">
            <div className="flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center">
              <div className="flex flex-col gap-5 lg:w-[46%]">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {project.name}
                  </h2>
                  <StatusBadge label={project.status} />
                </div>
                <p className="font-medium">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {project.cardDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.featureChips.map((chip) => (
                    <FeatureChip key={chip} label={chip} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techChips.map((chip) => (
                    <TechChip key={chip} label={chip} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 group inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
                  >
                    View Project
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border hover:border-primary/40 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors"
                  >
                    View on GitHub
                    <Code2 className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="lg:w-[54%]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.imageAlt}
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto w-full max-w-xl">
        <GitHubCta
          title="View more projects on GitHub"
          href={siteConfig.github}
        />
      </div>
    </div>
  )
}