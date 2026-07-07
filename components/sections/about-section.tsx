'use client'

import Image from 'next/image'
import { Lightbulb, Layers, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

const principles = [
  {
    icon: Lightbulb,
    title: 'Product Thinking',
    description: 'Understand the problem before shaping the solution.',
  },
  {
    icon: Layers,
    title: 'End-to-End Ownership',
    description: 'Connect interface decisions with real application systems.',
  },
  {
    icon: Rocket,
    title: 'Ship & Improve',
    description: 'Build, test, learn and refine from real use.',
  },
]

export function AboutSection() {

  return (
    <section
      id="about"
      className="scroll-section mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:gap-8 lg:px-8 lg:py-16"
      style={{
        background:
          'radial-gradient(circle at 60% 45%, rgba(124, 58, 237, 0.05), rgba(76, 29, 149, 0.02) 45%, transparent 70%), #070812',
      }}
    >
      {/* Left */}
      <div className="flex w-full flex-col gap-6 lg:w-[40%]">
        <p className="eyebrow">ABOUT ME</p>
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
          I build products from{' '}
          <span className="text-primary">idea to impact</span>.
        </h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          I&apos;m a frontend-focused Full Stack Developer who enjoys turning
          complex product ideas into clear, intuitive experiences.
        </p>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          I work across interfaces, application logic, APIs and data flows —
          with a strong focus on usability, performance and maintainable systems.
        </p>

        {/* Compact principles */}
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:gap-6 lg:flex-col">
          {principles.map((p) => (
            <div key={p.title} className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary inline-flex size-8 shrink-0 items-center justify-center rounded-lg">
                <p.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold">{p.title}</span>
                <span className="text-muted-foreground text-xs leading-relaxed">
                  {p.description}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right visual */}
      <div className="relative w-full lg:w-[60%]">
        <div
          className="relative mx-auto"
          style={{ width: 'clamp(580px, 52vw, 800px)' }}
        >
          {/* Oversized background bridge behind artwork */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              inset: '-12%',
              zIndex: -1,
              background:
                'radial-gradient(ellipse 62% 68% at 50% 52%, rgba(126, 34, 206, 0.22) 0%, rgba(76, 29, 149, 0.16) 34%, rgba(30, 27, 75, 0.11) 58%, transparent 80%)',
              filter: 'blur(46px)',
            }}
          />

          <Image
            src="/images/about-layers.png"
            alt="Product development visual showing blueprint, design system, architecture and preview"
            width={700}
            height={800}
            className="h-auto w-full object-contain"
          />

          {/* Directional edge overlays for seamless integration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              zIndex: 1,
              background: 'linear-gradient(to right, #070812 0%, rgba(7,8,18,0.7) 10%, transparent 100%)',
              width: '9%',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              zIndex: 1,
              background: 'linear-gradient(to left, #070812 0%, rgba(7,8,18,0.7) 10%, transparent 100%)',
              right: 0,
              width: '9%',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              zIndex: 1,
              background: 'linear-gradient(to bottom, #070812 0%, rgba(7,8,18,0.7) 10%, transparent 100%)',
              height: '10%',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              zIndex: 1,
              background: 'linear-gradient(to top, #070812 0%, rgba(7,8,18,0.7) 12%, transparent 100%)',
              bottom: 0,
              height: '14%',
            }}
          />
        </div>
      </div>
    </section>
  )
}
