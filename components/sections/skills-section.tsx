'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type CapabilityId = 'craft' | 'orchestrate' | 'engineer' | 'model' | 'ship'

type Capability = {
  id: CapabilityId
  title: string
  tagline: string
  tech: string[]
  x: number // percentage position, desktop constellation only
  y: number
  dominant?: boolean
}

const capabilities: Capability[] = [
  {
    id: 'craft',
    title: 'CRAFT',
    tagline: 'Interfaces & interaction',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    x: 50,
    y: 12,
    dominant: true,
  },
  {
    id: 'orchestrate',
    title: 'ORCHESTRATE',
    tagline: 'State & server data',
    tech: ['TanStack Query', 'Redux Toolkit', 'Zustand'],
    x: 28,
    y: 38,
  },
  {
    id: 'engineer',
    title: 'ENGINEER',
    tagline: 'APIs & application logic',
    tech: ['Node.js', 'Express.js', 'REST APIs'],
    x: 72,
    y: 38,
  },
  {
    id: 'model',
    title: 'MODEL',
    tagline: 'Persistent data systems',
    tech: ['PostgreSQL', 'MongoDB', 'Prisma'],
    x: 50,
    y: 64,
  },
  {
    id: 'ship',
    title: 'SHIP',
    tagline: 'Delivery & iteration',
    tech: ['Git', 'GitHub', 'Vercel', 'Docker'],
    x: 50,
    y: 88,
  },
]

const edges: [CapabilityId, CapabilityId][] = [
  ['craft', 'orchestrate'],
  ['craft', 'engineer'],
  ['orchestrate', 'model'],
  ['engineer', 'model'],
  ['model', 'ship'],
]

const byId = Object.fromEntries(capabilities.map((c) => [c.id, c])) as Record<
  CapabilityId,
  Capability
>

export function SkillsSection() {
  const [activeId, setActiveId] = useState<CapabilityId | null>(null)

  const isEdgeActive = (a: CapabilityId, b: CapabilityId) =>
    activeId !== null && (activeId === a || activeId === b)

  const isNodeQuiet = (id: CapabilityId) => activeId !== null && activeId !== id

  return (
    <section
      id="skills"
      className="scroll-section mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
    >
      <div className="flex flex-col gap-3">
        <p className="eyebrow">CAPABILITIES</p>
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          What I do <span className="text-primary">→</span> how I build it.
        </h2>
        <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
          From interface decisions to production systems.
        </p>
      </div>

      {/* Desktop: capability constellation */}
      <div
        className="surface-card relative hidden overflow-hidden lg:block"
        style={{ height: '28rem' }}
        onMouseLeave={() => setActiveId(null)}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {edges.map(([a, b]) => {
            const from = byId[a]
            const to = byId[b]
            const active = isEdgeActive(a, b)
            return (
              <line
                key={`${a}-${b}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={
                  active ? 'rgba(168,85,247,0.85)' : 'rgba(139,92,246,0.22)'
                }
                strokeWidth={active ? 0.35 : 0.18}
                style={{ transition: 'stroke 0.25s ease, stroke-width 0.25s ease' }}
              />
            )
          })}
        </svg>

        {capabilities.map((cap) => (
          <button
            key={cap.id}
            type="button"
            onMouseEnter={() => setActiveId(cap.id)}
            onFocus={() => setActiveId(cap.id)}
            onBlur={() => setActiveId(null)}
            className={cn(
              'absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-xl px-4 py-3 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
              isNodeQuiet(cap.id) ? 'opacity-50' : 'opacity-100',
            )}
            style={{ left: `${cap.x}%`, top: `${cap.y}%` }}
          >
            <span
              className={cn(
                'inline-flex items-center justify-center rounded-full border font-semibold transition-colors',
                cap.dominant
                  ? 'size-4 border-primary bg-primary shadow-[0_0_16px_rgba(139,92,246,0.7)]'
                  : 'size-3 border-primary/50 bg-primary/40',
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                'font-semibold tracking-tight',
                cap.dominant ? 'text-base' : 'text-sm',
              )}
            >
              {cap.title}
            </span>
            <span className="text-muted-foreground text-xs">{cap.tagline}</span>
            <span
              className={cn(
                'text-muted-foreground/90 max-w-[16rem] text-[0.75rem] leading-relaxed transition-opacity font-medium',
                activeId === cap.id ? 'opacity-100' : 'opacity-80',
              )}
            >
              {cap.tech.join(' · ')}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile / tablet: vertical capability flow */}
      <div className="flex flex-col lg:hidden">
        {capabilities.map((cap, i) => (
          <div key={cap.id} className="relative flex flex-col items-center">
            <div className="surface-card flex w-full flex-col gap-1.5 p-5 text-center">
              <span className="font-semibold tracking-tight">{cap.title}</span>
              <span className="text-muted-foreground text-xs">{cap.tagline}</span>
              <span className="text-muted-foreground/80 mt-1 text-xs leading-relaxed">
                {cap.tech.join(' · ')}
              </span>
            </div>
            {i < capabilities.length - 1 && (
              <span
                aria-hidden="true"
                className="bg-primary/30 my-1.5 h-5 w-px"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}