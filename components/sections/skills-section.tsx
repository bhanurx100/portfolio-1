'use client'

import { Braces, Code, Database, Globe, Layers, Palette, Rocket, Server } from 'lucide-react'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-section mx-auto flex min-h-[60vh] max-w-[1480px] flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 xl:min-h-[70vh]"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-12">
        {/* Left Intro Column - 30% */}
        <div className="flex w-full flex-col gap-4 lg:w-[30%] lg:sticky lg:top-24 lg:self-start">
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
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary/70" />
            <span>Frontend-focused</span>
            <span className="text-muted-foreground/50">·</span>
            <span>Full-stack capable</span>
          </div>
        </div>

        {/* Right Visual Skill Field - 70% */}
        <div className="flex w-full flex-col gap-10 lg:w-[70%]">
          {/* Primary Technology Constellation */}
          <div className="relative">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-primary/60 font-mono text-xs tabular-nums">
                01
              </span>
              <h3 className="text-sm font-semibold tracking-wide uppercase">
                Primary Technologies
              </h3>
            </div>

            {/* Constellation Layout */}
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {/* React.js - Center/Primary */}
              <div className="group relative flex flex-col items-center gap-3 rounded-2xl border border-[#22D3EE]/20 bg-[#22D3EE]/5 p-6 transition-all hover:border-[#22D3EE]/40 hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#22D3EE]/20 blur-xl" />
                  <div className="relative flex size-14 items-center justify-center rounded-xl bg-[#22D3EE]/10 text-[#22D3EE]">
                    <Code className="size-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-[#22D3EE]">React.js</p>
                  <p className="text-muted-foreground text-xs">Product interfaces</p>
                </div>
                <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-[#22D3EE] opacity-60" />
              </div>

              {/* Next.js */}
              <div className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all hover:border-white/[0.15] hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
                  <div className="relative flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Globe className="size-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-primary">Next.js</p>
                  <p className="text-muted-foreground text-xs">Application architecture</p>
                </div>
              </div>

              {/* TypeScript */}
              <div className="group relative flex flex-col items-center gap-3 rounded-2xl border border-[#A855F7]/20 bg-[#A855F7]/5 p-6 transition-all hover:border-[#A855F7]/40 hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#A855F7]/20 blur-xl" />
                  <div className="relative flex size-14 items-center justify-center rounded-xl bg-[#A855F7]/10 text-[#A855F7]">
                    <Braces className="size-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-[#A855F7]">TypeScript</p>
                  <p className="text-muted-foreground text-xs">Typed development</p>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="group relative flex flex-col items-center gap-3 rounded-2xl border border-[#D946EF]/20 bg-[#D946EF]/5 p-6 transition-all hover:border-[#D946EF]/40 hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#D946EF]/20 blur-xl" />
                  <div className="relative flex size-14 items-center justify-center rounded-xl bg-[#D946EF]/10 text-[#D946EF]">
                    <Palette className="size-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-base font-semibold text-[#D946EF]">Tailwind CSS</p>
                  <p className="text-muted-foreground text-xs">Responsive systems</p>
                </div>
              </div>
            </div>

            {/* Subtle orbital arc decoration */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.03] lg:block" />
          </div>

          {/* Capability Rails */}
          <div className="flex flex-col gap-8">
            {/* State & Data */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-primary/60 font-mono text-xs tabular-nums">
                  02
                </span>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#22D3EE]">
                  State & Data
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Layers className="size-4 text-[#22D3EE]/70" />
                  TanStack Query
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Layers className="size-4 text-[#22D3EE]/70" />
                  Redux Toolkit
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Layers className="size-4 text-[#22D3EE]/70" />
                  Zustand
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-[#D8D4DE]">Context API</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-[#D8D4DE]">Zod</span>
              </div>
            </div>

            {/* Backend & APIs */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-primary/60 font-mono text-xs tabular-nums">
                  03
                </span>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#8B5CF6]">
                  Backend & APIs
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Server className="size-4 text-[#8B5CF6]/70" />
                  Node.js
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Server className="size-4 text-[#8B5CF6]/70" />
                  Express.js
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-[#D8D4DE]">REST APIs</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-[#D8D4DE]">JWT</span>
              </div>
            </div>

            {/* Database */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-primary/60 font-mono text-xs tabular-nums">
                  04
                </span>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#F472B6]">
                  Database
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Database className="size-4 text-[#F472B6]/70" />
                  PostgreSQL
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Database className="size-4 text-[#F472B6]/70" />
                  MongoDB
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-[#D8D4DE]">Prisma</span>
              </div>
            </div>

            {/* Ship */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-primary/60 font-mono text-xs tabular-nums">
                  05
                </span>
                <h3 className="text-sm font-semibold tracking-wide uppercase text-[#22C55E]">
                  Ship
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Code className="size-4 text-[#22C55E]/70" />
                  Git
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Code className="size-4 text-[#22C55E]/70" />
                  GitHub
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="flex items-center gap-2 text-[#D8D4DE]">
                  <Rocket className="size-4 text-[#22C55E]/70" />
                  Vercel
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-[#D8D4DE]">Docker</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-[#D8D4DE]">Postman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}