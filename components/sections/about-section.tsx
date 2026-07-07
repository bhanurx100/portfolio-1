'use client'

import Image from 'next/image'
import { Lightbulb, Layers, Rocket } from 'lucide-react'

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

// Sparse, asymmetric particle placement distinct from the Hero field.
const ABOUT_FIELD_PARTICLES = [
  { x: 8, y: 22, size: 1, opacity: 0.22, color: '168,85,247', dur: 20, delay: -3 },
  { x: 74, y: 10, size: 2, opacity: 0.26, color: '139,92,246', dur: 16, delay: -7 },
  { x: 88, y: 62, size: 1, opacity: 0.18, color: '96,165,250', dur: 23, delay: -9 },
  { x: 30, y: 84, size: 2, opacity: 0.24, color: '168,85,247', dur: 19, delay: -5 },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-section mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 lg:flex-row lg:gap-8 lg:px-8 lg:py-14"
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

      {/* Right visual — related but distinct atmosphere from Hero */}
      <div className="relative w-full lg:w-[60%]">
        <div
          className="relative mx-auto"
          style={{ width: 'clamp(580px, 52vw, 800px)' }}
        >
          {/* Asymmetric violet aura, offset toward the upper-left unlike Hero's centered haze */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              inset: '-16% -16% -12% -8%',
              zIndex: -3,
              background:
                'radial-gradient(ellipse 56% 60% at 34% 38%, rgba(126,34,206,0.20) 0%, transparent 74%)',
              filter: 'blur(52px)',
            }}
          />

          {/* Deep navy-black bridge tone */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              inset: '-12% -10% -14% -10%',
              zIndex: -2,
              background:
                'radial-gradient(ellipse 62% 68% at 50% 52%, rgba(126,34,206,0.22) 0%, rgba(76,29,149,0.16) 34%, rgba(30,27,75,0.11) 58%, transparent 80%)',
              filter: 'blur(46px)',
            }}
          />

          {/* Tiny cool-blue edge influence, opposite corner from Hero's placement */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              inset: '38% -8% -6% 46%',
              zIndex: -1,
              background:
                'radial-gradient(ellipse 50% 50% at 70% 70%, rgba(56,142,230,0.09) 0%, transparent 72%)',
              filter: 'blur(32px)',
            }}
          />

          {/* Faint vertical signal trace behind the artwork */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[6%] bottom-[10%] w-px -translate-x-1/2"
            style={{
              zIndex: -1,
              background:
                'linear-gradient(to bottom, transparent, rgba(139,92,246,0.14) 30%, rgba(139,92,246,0.14) 70%, transparent)',
            }}
          />

          <div className="relative">
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
                background: 'linear-gradient(to right, #05060d 0%, rgba(5,6,13,0.7) 10%, transparent 100%)',
                width: '9%',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                zIndex: 1,
                background: 'linear-gradient(to left, #05060d 0%, rgba(5,6,13,0.7) 10%, transparent 100%)',
                right: 0,
                width: '9%',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                zIndex: 1,
                background: 'linear-gradient(to bottom, #05060d 0%, rgba(5,6,13,0.7) 10%, transparent 100%)',
                height: '10%',
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                zIndex: 1,
                background: 'linear-gradient(to top, #05060d 0%, rgba(5,6,13,0.7) 12%, transparent 100%)',
                bottom: 0,
                height: '14%',
              }}
            />

            {/* Sparse ambient particles around the image zone — different distribution than Hero */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ zIndex: 2 }}>
              {ABOUT_FIELD_PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    opacity: p.opacity,
                    backgroundColor: `rgba(${p.color},1)`,
                    animation: `ambientParticleDrift ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
                    '--dx': '-12px',
                    '--dy': '12px',
                  } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}