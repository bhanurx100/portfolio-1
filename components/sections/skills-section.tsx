'use client'

import { Braces, Code, Globe, Layers, Palette } from 'lucide-react'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-section mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:pb-16"
    >
      <div className="flex flex-col gap-3">
        <p className="eyebrow">SKILLS</p>
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          The stack behind
          <br />
          what I ship.
        </h2>
        <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
          Frontend is where I&apos;m strongest. I work across the application stack
          when the product needs it.
        </p>
      </div>

      {/* Primary Focus - Signature Skill Badges (2x2 grid) */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-primary/60 font-mono text-xs tabular-nums">
            01
          </span>
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Primary Focus
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-2">
          <div className="group relative flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all hover:border-primary/30 hover:-translate-y-0.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code className="size-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-primary">React.js</p>
              <p className="text-muted-foreground text-sm">Product interfaces</p>
            </div>
          </div>
          <div className="group relative flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all hover:border-primary/30 hover:-translate-y-0.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Globe className="size-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-primary">Next.js</p>
              <p className="text-muted-foreground text-sm">Application architecture</p>
            </div>
          </div>
          <div className="group relative flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all hover:border-primary/30 hover:-translate-y-0.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Braces className="size-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-primary">TypeScript</p>
              <p className="text-muted-foreground text-sm">Typed development</p>
            </div>
          </div>
          <div className="group relative flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all hover:border-primary/30 hover:-translate-y-0.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Palette className="size-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-primary">Tailwind CSS</p>
              <p className="text-muted-foreground text-sm">Responsive UI systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* State & Application Data */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-primary/60 font-mono text-xs tabular-nums">
            02
          </span>
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            State & Application Data
          </h3>
        </div>
        <div className="h-px w-full bg-white/[0.05]" />
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            TanStack Query
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            Redux Toolkit
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            Zustand
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            Context API
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            Zod
          </span>
        </div>
      </div>

      {/* Backend & APIs */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-primary/60 font-mono text-xs tabular-nums">
            03
          </span>
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Backend & APIs
          </h3>
        </div>
        <div className="h-px w-full bg-white/[0.05]" />
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Globe className="size-3.5 text-primary/70" aria-hidden="true" />
            Node.js
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Globe className="size-3.5 text-primary/70" aria-hidden="true" />
            Express.js
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Globe className="size-3.5 text-primary/70" aria-hidden="true" />
            REST APIs
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Globe className="size-3.5 text-primary/70" aria-hidden="true" />
            JWT
          </span>
        </div>
      </div>

      {/* Data */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-primary/60 font-mono text-xs tabular-nums">
            04
          </span>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Data</h3>
        </div>
        <div className="h-px w-full bg-white/[0.05]" />
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            PostgreSQL
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            MongoDB
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            Prisma
          </span>
        </div>
      </div>

      {/* Delivery & Workflow */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-primary/60 font-mono text-xs tabular-nums">
            05
          </span>
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Delivery & Workflow
          </h3>
        </div>
        <div className="h-px w-full bg-white/[0.05]" />
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Code className="size-3.5 text-primary/70" aria-hidden="true" />
            Git
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Code className="size-3.5 text-primary/70" aria-hidden="true" />
            GitHub
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Globe className="size-3.5 text-primary/70" aria-hidden="true" />
            Vercel
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Layers className="size-3.5 text-primary/70" aria-hidden="true" />
            Docker
          </span>
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.055] bg-white/[0.018] px-3 py-2 text-sm font-medium text-[#D8D4DE] transition-colors hover:bg-primary/8 hover:border-primary/28">
            <Globe className="size-3.5 text-primary/70" aria-hidden="true" />
            Postman
          </span>
        </div>
      </div>
    </section>
  )
}