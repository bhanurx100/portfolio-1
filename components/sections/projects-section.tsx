'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'
import { projects } from '@/lib/projects-data'
import { FeatureChip, StatusBadge, TechChip } from '@/components/shared/chips'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-section mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">Projects</p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Things I&apos;ve <span className="text-primary">built</span>
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
            Real-world products I&apos;ve designed and developed from idea to
            implementation.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {projects.slice(0, 2).map((project) => (
          <article key={project.slug} className="surface-card overflow-hidden">
            <div className="flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center">
              {/* Text */}
              <div className="flex flex-col gap-5 lg:w-[46%]">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.name}
                  </h3>
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

              {/* Visual */}
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

        {/* GitHub CTA */}
        <div className="flex justify-center">
          <a
            href="https://github.com/bhanurx100"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 group mx-auto flex max-w-[480px] items-center gap-4 rounded-xl border px-6 py-4 transition-all"
          >
            <Code2 className="text-primary size-5" aria-hidden="true" />
            <span className="font-medium">View more projects on GitHub</span>
            <ArrowRight className="text-primary size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
