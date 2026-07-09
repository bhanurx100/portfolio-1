'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'
import { projects } from '@/lib/projects-data'
import { siteConfig } from '@/lib/site-config'
import { FeatureChip, StatusBadge, TechChip } from '@/components/shared/chips'
import { GitHubCta } from '@/components/shared/github-cta'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-section scroll-mt-20 mx-auto flex flex-col gap-5 pt-16 lg:pt-20"
      style={{
        maxWidth: 'clamp(1180px, 88vw, 1920px)',
        paddingLeft: 'clamp(16px, 2vw, 48px)',
        paddingRight: 'clamp(16px, 2vw, 48px)',
      }}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">Projects</p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Things I&apos;ve <span className="text-primary">built</span>
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
            Products I&apos;ve taken from rough ideas to working interfaces and
            application flows.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {projects.slice(0, 2).map((project, index) => (
          <article
            key={project.slug}
            className="grid grid-cols-1 gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-center"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-primary/60 font-mono text-xs tabular-nums">
                  0{index + 1}
                </span>
                <h3 className="text-[28px] font-bold tracking-tight sm:text-[30px] lg:text-[32px]">
                  {project.name}
                </h3>
                <StatusBadge label={project.status} />
              </div>
              <p className="text-[20px] leading-tight font-semibold sm:text-[22px] lg:text-[24px]">
                {project.tagline}
              </p>
              <p className="text-muted-foreground text-[17px] leading-[1.75] text-pretty lg:text-[18px]">
                {project.cardDescription}
              </p>

              {/* Build Focus Block */}
              <div className="flex flex-col gap-2">
                <p className="text-primary/80 text-[12px] font-semibold tracking-[0.15em] uppercase">
                  Build Focus
                </p>
                <p className="text-muted-foreground text-[15px] leading-[1.7] text-pretty lg:text-[16px]">
                  {project.buildFocus || 'Building responsive interfaces, application state, and data-backed workflows with focus on maintainability and user experience.'}
                </p>
              </div>

              {/* Curiosity Hook */}
              {project.curiosityHook && (
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-muted-foreground text-[15px] leading-relaxed text-pretty italic lg:text-[16px]">
                    {project.curiosityHook}
                  </p>
                </div>
              )}

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
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors lg:text-[16px]"
                >
                  Explore {project.name} Case Study
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border hover:border-primary/40 inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-[15px] font-semibold transition-colors lg:text-[16px]"
                >
                  View on GitHub
                  <Code2 className="size-4" aria-hidden="true" />
                </a>
              </div>

              {/* Subtle helper text */}
              <p className="text-muted-foreground/60 text-xs leading-relaxed">
                See the product thinking, interface decisions and engineering approach behind the build.
              </p>
            </div>

            {/* Visual - with edge blending */}
            <div className="relative">
              <div className="project-image-wrapper relative overflow-hidden rounded-2xl">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.imageAlt}
                  width={1200}
                  height={800}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </article>
        ))}

        {/* GitHub CTA — reuses the shared component + site config, no duplicate URL */}
        <div className="mx-auto w-full max-w-md">
          <GitHubCta
            title="View more projects on GitHub"
            href={siteConfig.github}
          />
        </div>
      </div>
    </section>
  )
}