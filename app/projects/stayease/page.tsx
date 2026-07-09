'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, Code2, ChevronDown } from 'lucide-react'
import { caseStudyData } from '@/lib/case-study-data'

export default function StayEasePage() {
  const data = caseStudyData.stayease

  return (
    <div className="min-h-screen bg-[#020203]">
      {/* Navigation */}
      <nav className="border-b border-white/[0.08] bg-[#030305]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors">
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
          <span className="text-primary/60 text-xs font-semibold tracking-[0.15em] uppercase">
            Case Study
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-[1480px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <span className="text-primary/80 text-xs font-semibold tracking-[0.2em] uppercase">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
              {data.hero.headline}
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                {data.hero.headlineHighlight}
              </span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed text-pretty lg:text-xl">
              {data.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={data.hero.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                View Product
              </a>
              <a
                href={data.hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border hover:border-primary/40 hover:bg-primary/5 inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-colors"
              >
                <Code2 className="size-4" aria-hidden="true" />
                View Source
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
              <span className="text-muted-foreground">{data.hero.metadata.role}</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-muted-foreground">{data.hero.metadata.status}</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-muted-foreground">{data.hero.metadata.stack}</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.01]">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent" />
              <Image
                src={data.hero.previewImage}
                alt={data.hero.previewAlt}
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Story */}
      <section className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <span className="text-primary/80 text-xs font-semibold tracking-[0.2em] uppercase">
              {data.productStory.eyebrow}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {data.productStory.headline}
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                {data.productStory.headlineHighlight}
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed text-pretty lg:text-lg">
              {data.productStory.description}
            </p>
            <div className="pt-2">
              <p className="text-muted-foreground/60 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                BUILT AROUND
              </p>
              <p className="text-foreground text-sm">{data.productStory.audience}</p>
            </div>
            <div className="pt-2">
              <p className="text-muted-foreground/60 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                MY CONTRIBUTION
              </p>
              <p className="text-foreground text-sm">{data.productStory.ownership}</p>
            </div>
          </div>

          {/* Right - Connected Role Flow */}
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <p className="text-primary/60 text-xs font-semibold tracking-[0.2em] uppercase">
                ONE CONNECTED STAY PLATFORM
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {data.productStory.roleCards.map((card, i) => (
                <div
                  key={i}
                  className={`border-white/[0.08] bg-white/[0.02] rounded-lg border p-5 h-auto self-start ${card.accent === 'violet'
                    ? 'border-violet-500/20'
                    : card.accent === 'green'
                      ? 'border-green-500/20'
                      : 'border-amber-500/20'
                    }`}
                >
                  <p className="text-primary/60 mb-2 font-mono text-xs">{card.number}</p>
                  <h3 className="mb-2 font-semibold">{card.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{card.description}</p>
                  <ul className="space-y-1.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs">
                        <span className="text-muted-foreground/40">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Experience */}
      <section className="border-y border-white/[0.08] bg-[#030305]/50">
        <div className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-primary/80 mb-4 block text-xs font-semibold tracking-[0.2em] uppercase">
              {data.productExperience.eyebrow}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {data.productExperience.headline}
            </h2>
          </div>

          {/* Featured Screen */}
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.4fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.01]">
              <Image
                src={data.productExperience.featuredScreen.image}
                alt={data.productExperience.featuredScreen.title}
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">{data.productExperience.featuredScreen.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {data.productExperience.featuredScreen.description}
              </p>
            </div>
          </div>

          {/* Supporting Screens */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {data.productExperience.screens.map((screen, i) => (
              <div key={i} className="group">
                <div className="border-white/[0.08] bg-white/[0.02] overflow-hidden rounded-lg border transition-all group-hover:border-white/[0.12]">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-foreground text-sm font-semibold">{screen.title}</p>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-primary/80 mb-4 block text-xs font-semibold tracking-[0.2em] uppercase">
            {data.architecture.eyebrow}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {data.architecture.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Stack */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary/80 text-xs font-semibold tracking-[0.15em] uppercase">
              Stack
            </h3>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-muted-foreground/60 text-xs mb-1">Frontend</p>
                <p className="text-foreground text-sm">{data.architecture.stack.frontend.join(' · ')}</p>
              </div>
              <div>
                <p className="text-muted-foreground/60 text-xs mb-1">Data & State</p>
                <p className="text-foreground text-sm">{data.architecture.stack.dataState.join(' · ')}</p>
              </div>
              <div>
                <p className="text-muted-foreground/60 text-xs mb-1">Backend</p>
                <p className="text-foreground text-sm">{data.architecture.stack.backend.join(' · ')}</p>
              </div>
              <div>
                <p className="text-muted-foreground/60 text-xs mb-1">Data</p>
                <p className="text-foreground text-sm">{data.architecture.stack.data.join(' · ')}</p>
              </div>
            </div>
          </div>

          {/* Flow */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary/80 text-xs font-semibold tracking-[0.15em] uppercase">
              Flow
            </h3>
            <div className="flex flex-col gap-2">
              {data.architecture.flow.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="border-primary/30 bg-primary/10 flex size-6 shrink-0 items-center justify-center rounded-full border">
                    <span className="text-primary font-mono text-xs">{i + 1}</span>
                  </div>
                  <p className="text-foreground text-sm">{item}</p>
                  {i < data.architecture.flow.length - 1 && <ChevronDown className="text-muted-foreground/20 size-4" />}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground/60 mt-2 text-xs italic">{data.architecture.flowNote}</p>
          </div>

          {/* Folder Structure */}
          <div className="flex flex-col gap-4">
            <h3 className="text-primary/80 text-xs font-semibold tracking-[0.15em] uppercase">
              Structure
            </h3>
            <div className="border-white/[0.08] bg-[#020203] overflow-x-auto rounded-lg border p-4">
              <pre className="text-muted-foreground font-mono text-xs leading-relaxed">
                <code>{data.architecture.folderStructure}</code>
              </pre>
            </div>
            <p className="text-muted-foreground/60 text-xs italic">{data.architecture.folderNote}</p>
            <div className="flex flex-col gap-2">
              {data.architecture.principles.map((principle, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-3">
                  <p className="text-primary/80 mb-0.5 text-xs font-semibold">{principle.title}</p>
                  <p className="text-muted-foreground text-xs">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="border-y border-white/[0.08] bg-[#030305]/50">
        <div className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-primary/80 mb-4 block text-xs font-semibold tracking-[0.2em] uppercase">
              Engineering Challenges
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Where the platform becomes more than a booking site.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.challenges.map((challenge, i) => (
              <div key={i} className="border-white/[0.08] bg-white/[0.02] rounded-lg border p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="font-semibold">{challenge.title}</h3>
                  <span
                    className={`text-xs font-semibold ${challenge.status === 'Built'
                      ? 'text-green-400'
                      : challenge.status === 'In Progress'
                        ? 'text-violet-400'
                        : 'text-amber-400'
                      }`}
                  >
                    {challenge.status}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{challenge.description}</p>
                <div>
                  <p className="text-primary/80 mb-1 text-xs font-semibold tracking-[0.15em] uppercase">
                    Approach
                  </p>
                  <p className="text-muted-foreground text-xs">{challenge.approach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-primary/80 mb-4 block text-xs font-semibold tracking-[0.2em] uppercase">
            What's Next
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            A phased path from booking site to complete platform.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.roadmap.map((phase, i) => (
            <div key={i} className="border-white/[0.08] bg-white/[0.02] rounded-lg border p-6">
              <div className="mb-4">
                <span
                  className={`text-xs font-semibold ${phase.status === 'Built'
                    ? 'text-green-400'
                    : phase.status === 'In Progress'
                      ? 'text-violet-400'
                      : phase.status === 'Planned'
                        ? 'text-amber-400'
                        : 'text-blue-400'
                    }`}
                >
                  {phase.status}
                </span>
              </div>
              <h3 className="mb-4 font-semibold">{phase.phase}</h3>
              <p className="text-primary/80 mb-3 text-sm font-semibold">{phase.name}</p>
              <ul className="space-y-2">
                {phase.scope.map((item, j) => (
                  <li key={j} className="text-muted-foreground text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-[1480px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="border-primary/30 bg-primary/5 rounded-2xl border p-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {data.cta.headline}
          </h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
            {data.cta.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={data.cta.primaryUrl}
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors"
            >
              {data.cta.primaryLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <Link
              href={data.cta.secondaryUrl}
              className="border-border hover:border-primary/40 hover:bg-primary/5 inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-colors"
            >
              {data.cta.secondaryLabel}
              <ChevronDown className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}