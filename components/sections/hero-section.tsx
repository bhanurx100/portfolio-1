'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

// Fixed, deterministic foreground particles that drift across the artwork
// region only — sparse, dim, and mostly violet with one magenta accent and
// one restrained cyan accent. The last two are hidden below `sm` so mobile
// only ever shows three, per the "2-4 particles on mobile" motion spec.
const HERO_FIELD_PARTICLES = [
  { x: 12, y: 18, size: 2, opacity: 0.3, color: '139,92,246', dur: 15, delay: -2, mobile: true },
  { x: 66, y: 78, size: 2, opacity: 0.24, color: '217,70,239', dur: 18, delay: -4, mobile: true },
  { x: 24, y: 68, size: 1, opacity: 0.2, color: '139,92,246', dur: 24, delay: -11, mobile: true },
  { x: 82, y: 12, size: 1, opacity: 0.18, color: '34,211,238', dur: 21, delay: -8, mobile: false },
  { x: 90, y: 55, size: 1, opacity: 0.16, color: '139,92,246', dur: 19, delay: -6, mobile: false },
]

export function HeroSection() {
  const artRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [scrollShift, setScrollShift] = useState(0)
  const parallaxEnabledRef = useRef(false)
  const scrollEnabledRef = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const isSmallViewport = window.matchMedia('(max-width: 767px)').matches

    // Pointer depth: desktop pointer devices only (Motion Layer F).
    parallaxEnabledRef.current = !prefersReducedMotion && !isTouch
    // Scroll depth: desktop/tablet only, skipped on small viewports and
    // reduced motion (Motion Layer G).
    scrollEnabledRef.current = !prefersReducedMotion && !isSmallViewport
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!parallaxEnabledRef.current) return
    const el = artRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6
    setParallax({ x: Math.max(-3, Math.min(3, x)), y: Math.max(-3, Math.min(3, y)) })
  }, [])

  const handlePointerLeave = useCallback(() => setParallax({ x: 0, y: 0 }), [])

  // Motion Layer G — scroll depth. Extremely small (max ~10px), rAF-throttled,
  // passive, and fully disabled on small viewports / reduced motion.
  useEffect(() => {
    const section = document.getElementById('home')
    if (!section) return
    let ticking = false

    const update = () => {
      ticking = false
      if (!scrollEnabledRef.current) return
      const rect = section.getBoundingClientRect()
      const viewportMid = window.innerHeight / 2
      const distance = rect.top + rect.height / 2 - viewportMid
      const shift = Math.max(-10, Math.min(10, distance * -0.015))
      setScrollShift(shift)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="home"
      className="scroll-section relative mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 pb-8 pt-12 [overflow-x:clip] sm:px-6 lg:flex-row lg:gap-6 lg:px-8 lg:py-14"
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

      {/* Right visual — atmospheric integration zone.
          Stage width uses available viewport width without artificial caps.
          The 16:9 artwork preserves its composition at all breakpoints. */}
      <div className="relative w-full lg:w-[58%]">
        <div className="relative mx-auto w-full max-w-[800px]">

          {/* Scroll depth wrapper */}
          <div
            style={{
              transform: `translate3d(0, ${scrollShift}px, 0)`,
              transition: 'transform 0.2s linear',
            }}
          >
            {/* Pointer depth wrapper */}
            <div
              className="relative"
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              style={{
                transform: `translate(${parallax.x}px, ${parallax.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Drift layer — CSS-animation-driven, kept on its own element
                  so it doesn't fight the inline transforms above */}
              <div ref={artRef} className="relative animate-hero-float-mobile lg:animate-hero-float">
                {/* Hero artwork edge integration wrapper - dissolves empty peripheral background into black canvas */}
                <div className="hero-artwork-wrapper relative">
                  <div className="hero-artwork-top-scrim" />
                  <div className="hero-artwork-bottom-scrim" />
                  <Image
                    src="/images/hero-process.png"
                    alt="Layered 3D process visual with rings representing Interface, Systems, Product and Impact"
                    width={900}
                    height={900}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>


              {/* Motion Layer C: vertical energy transfer — a thin, mostly
                  invisible beam that occasionally travels the central axis.
                  Confined to the middle third so it never crosses the
                  01/02/03/04 label zones near the edges. */}
              <div
                aria-hidden="true"
                className="animate-energy-transfer pointer-events-none absolute left-1/2 top-[30%] bottom-[30%] w-px -translate-x-1/2"
                style={{
                  zIndex: 2,
                  background:
                    'linear-gradient(to bottom, transparent, rgba(139,92,246,0.5) 40%, rgba(217,70,239,0.4) 60%, transparent)',
                }}
              />

              {/* Motion Layer E: light sweep — infrequent, low-opacity, and
                  clipped to the artwork stage only */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
                style={{ zIndex: 2 }}
              >
                <div
                  className="animate-light-sweep absolute top-0 h-full w-1/3"
                  style={{
                    background:
                      'linear-gradient(75deg, transparent, rgba(167,139,250,0.16) 45%, transparent)',
                  }}
                />
              </div>

              {/* Layer G: local ambient particles */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ zIndex: 2 }}>
                {HERO_FIELD_PARTICLES.map((p, i) => (
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
                      '--dx': '14px',
                      '--dy': '-10px',
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}