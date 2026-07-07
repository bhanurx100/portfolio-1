'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

// Fixed, deterministic foreground particles that drift across the artwork
// region only — sparse, dim, and mostly violet with one cool-blue accent.
const HERO_FIELD_PARTICLES = [
  { x: 12, y: 18, size: 2, opacity: 0.3, color: '139,92,246', dur: 15, delay: -2 },
  { x: 82, y: 12, size: 1, opacity: 0.22, color: '96,165,250', dur: 21, delay: -8 },
  { x: 66, y: 78, size: 2, opacity: 0.26, color: '168,85,247', dur: 18, delay: -4 },
  { x: 24, y: 68, size: 1, opacity: 0.2, color: '139,92,246', dur: 24, delay: -11 },
  { x: 90, y: 55, size: 1, opacity: 0.18, color: '139,92,246', dur: 19, delay: -6 },
]

export function HeroSection() {
  const artRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const parallaxEnabledRef = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    parallaxEnabledRef.current = !prefersReducedMotion && !isTouch
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!parallaxEnabledRef.current) return
    const el = artRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10
    setParallax({ x: Math.max(-5, Math.min(5, x)), y: Math.max(-5, Math.min(5, y)) })
  }, [])

  const handlePointerLeave = useCallback(() => setParallax({ x: 0, y: 0 }), [])

  return (
    <section
      id="home"
      className="scroll-section relative mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-10 sm:px-6 lg:flex-row lg:gap-6 lg:px-8 lg:py-14"
    >
      {/* Left */}
      <div className="relative z-10 flex w-full flex-col gap-5 lg:w-[42%]">
        <span className="border-border bg-card inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium">
          <span className="bg-success size-2 rounded-full" aria-hidden="true" />
          Available for opportunities
        </span>

        <div className="flex flex-col gap-3">
          <p className="eyebrow">{"HEY, I'M"}</p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Bhanuprasad <span className="text-primary">L.</span>
          </h1>
          <p className="text-lg font-semibold sm:text-xl">
            Full Stack Developer · Product Builder
          </p>
        </div>

        <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
          I turn product ideas into polished interfaces, scalable systems and web
          experiences built to create real value.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('skills')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/50 group inline-flex h-11 items-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Skills
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border-border hover:border-primary/40 hover:bg-card focus-visible:ring-primary/50 inline-flex h-11 items-center gap-2 rounded-lg border px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Mail className="size-4" aria-hidden="true" />
            Get In Touch
          </a>
        </div>

        <p className="text-muted-foreground/70 text-xs leading-relaxed sm:text-sm">
          2+ years experience · Frontend-focused full stack · Remote, India
        </p>
      </div>

      {/* Right visual — atmospheric integration zone */}
      <div className="relative w-full lg:w-[58%]">
        <div
          className="relative mx-auto"
          style={{ width: 'clamp(580px, 52vw, 800px)' }}
        >
          {/* Layer B: broad low-opacity violet haze */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              inset: '-18% -14% -20% -14%',
              zIndex: -3,
              background:
                'radial-gradient(ellipse 60% 62% at 50% 46%, rgba(124,58,237,0.16) 0%, transparent 72%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Layer C: near-black / deep navy-black bridge tone matching the artwork's internal dark background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              inset: '-12% -10% -14% -10%',
              zIndex: -2,
              background:
                'radial-gradient(ellipse 58% 62% at 54% 48%, rgba(91,33,182,0.24) 0%, rgba(49,46,129,0.17) 34%, rgba(15,23,42,0.12) 58%, transparent 78%)',
              filter: 'blur(42px)',
            }}
          />

          {/* Layer D: sparse secondary cool-blue/cyan atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              inset: '4% 30% 46% -6%',
              zIndex: -1,
              background:
                'radial-gradient(ellipse 55% 55% at 30% 30%, rgba(56,142,230,0.10) 0%, transparent 70%)',
              filter: 'blur(36px)',
            }}
          />

          <div
            className="relative"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
            {/* Layer E: the image itself */}
            <div
              ref={artRef}
              className="animate-hero-float relative"
              style={{
                transform: `translate(${parallax.x}px, ${parallax.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <Image
                src="/images/hero-process.png"
                alt="Layered 3D process visual with rings representing Interface, Systems, Product and Impact"
                width={900}
                height={900}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Layer F: soft edge-feather overlays for a seamless perimeter */}
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

            {/* Layer G: a tiny number of foreground ambient particles crossing the image region */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ zIndex: 2 }}>
              {HERO_FIELD_PARTICLES.map((p, i) => (
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
                    '--dx': '14px',
                    '--dy': '-10px',
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