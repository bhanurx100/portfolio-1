'use client'

import { Code2, Database, Layers, Rocket, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Stage = {
  id: string
  title: string
  tagline: string
  tech: string[]
  icon: LucideIcon
}

// This is a real, ordered pipeline — interface work feeds state/data
// handling, which talks to the API layer, which persists to a database,
// which ships and iterates. The numbering encodes that order, it isn't
// decorative (see frontend-design guidance on numbered markers).
const stages: Stage[] = [
  {
    id: 'craft',
    title: 'CRAFT',
    tagline: 'Interfaces & interaction',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: Code2,
  },
  {
    id: 'orchestrate',
    title: 'ORCHESTRATE',
    tagline: 'Client state & server data',
    tech: ['TanStack Query', 'Redux Toolkit', 'Zustand'],
    icon: Layers,
  },
  {
    id: 'engineer',
    title: 'ENGINEER',
    tagline: 'APIs & application logic',
    tech: ['Node.js', 'Express.js', 'REST APIs'],
    icon: Server,
  },
  {
    id: 'model',
    title: 'MODEL',
    tagline: 'Persistent data systems',
    tech: ['PostgreSQL', 'MongoDB', 'Prisma'],
    icon: Database,
  },
  {
    id: 'ship',
    title: 'SHIP',
    tagline: 'Delivery & iteration',
    tech: ['Git', 'GitHub', 'Vercel', 'Docker'],
    icon: Rocket,
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-section mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="flex flex-col gap-3">
        <p className="eyebrow">HOW I BUILD</p>
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          From interface to <span className="text-primary">production</span>.
        </h2>
        <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
          A practical stack, in the order it&apos;s actually used.
        </p>
      </div>

      {/* Desktop / tablet: compact horizontal stepped bar. A single hairline
          top/bottom border (subtle-separation role) — no giant bordered box,
          no fixed empty-feeling height. */}
      <ol className="edge-subtle hidden divide-x divide-white/[0.06] border-y md:flex">
        {stages.map((stage, i) => (
          <li key={stage.id} className="group relative flex flex-1 flex-col gap-2.5 px-5 py-6 lg:px-6">
            <div className="flex items-center gap-2.5">
              <span className="text-primary/60 font-mono text-xs tabular-nums">
                0{i + 1}
              </span>
              <stage.icon className="text-primary/70 size-4" aria-hidden="true" />
            </div>
            <h3 className="text-sm font-semibold tracking-wide">{stage.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {stage.tagline}
            </p>
            <p className="text-muted-foreground/85 font-mono text-[0.7rem] leading-relaxed">
              {stage.tech.join(' · ')}
            </p>
          </li>
        ))}
      </ol>

      {/* Mobile: compact connected vertical flow — numbered stages joined by
          a thin connector, not five oversized cards. */}
      <ol className="flex flex-col md:hidden">
        {stages.map((stage, i) => (
          <li key={stage.id} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <span className="border-primary/40 bg-card text-primary inline-flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-[0.7rem]">
                0{i + 1}
              </span>
              {i < stages.length - 1 && (
                <span aria-hidden="true" className="bg-primary/25 my-1 w-px flex-1" />
              )}
            </div>
            <div className={i < stages.length - 1 ? 'flex flex-1 flex-col gap-1 pb-6' : 'flex flex-1 flex-col gap-1'}>
              <div className="flex items-center gap-2">
                <stage.icon className="text-primary/70 size-3.5" aria-hidden="true" />
                <h3 className="text-sm font-semibold tracking-wide">{stage.title}</h3>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {stage.tagline}
              </p>
              <p className="text-muted-foreground/85 font-mono text-[0.7rem] leading-relaxed">
                {stage.tech.join(' · ')}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}