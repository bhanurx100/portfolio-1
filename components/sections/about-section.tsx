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

// Sparse, asymmetric particle placement, distinct from the Hero field and
// deliberately fewer (About is "quietly active," not "alive"). Only the
// first is shown below `sm`.
const ABOUT_FIELD_PARTICLES = [
  { x: 8, y: 22, size: 1, opacity: 0.2, color: '168,85,247', dur: 20, delay: -3, mobile: true },
  { x: 74, y: 10, size: 2, opacity: 0.22, color: '139,92,246', dur: 16, delay: -7, mobile: false },
  { x: 30, y: 84, size: 2, opacity: 0.2, color: '217,70,239', dur: 19, delay: -5, mobile: false },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-section mx-auto flex max-w-[1480px] flex-col gap-5 px-4 pb-8 pt-12 [overflow-x:clip] sm:px-6 lg:flex-row lg:gap-8 lg:px-8 lg:py-14"
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

      {/* Right visual — related but calmer atmosphere than Hero.
          Stage width uses available viewport width without artificial caps.
          The artwork preserves its full composition at all breakpoints. */}
      <div className="relative w-full lg:w-[60%]">
        <div className="relative mx-auto w-full max-w-[800px]">

          <div className="relative animate-about-float">
            {/* About artwork edge integration wrapper - dissolves empty peripheral background into black canvas */}
            <div className="about-artwork-wrapper relative">
              <div className="about-artwork-top-scrim" />
              <div className="about-artwork-bottom-scrim" />
              <Image
                src="/images/about-layers.png"
                alt="Product development visual showing blueprint, design system, architecture and preview"
                width={700}
                height={800}
                sizes="100vw"
                className="h-auto w-full object-contain"
              />
            </div>


            {/* Sparse ambient particles — About shows at most 1 on mobile, 3 on desktop */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ zIndex: 2 }}>
              {ABOUT_FIELD_PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className={p.mobile ? 'absolute rounded-full' : 'absolute hidden rounded-full sm:block'}
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