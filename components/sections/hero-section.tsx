'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const HERO_FIELD_PARTICLES = [
  { x: 12, y: 18, size: 2, opacity: 0.3, color: '139,92,246', dur: 15, delay: -2, mobile: true },
  { x: 66, y: 78, size: 2, opacity: 0.24, color: '217,70,239', dur: 18, delay: -4, mobile: true },
  { x: 24, y: 68, size: 1, opacity: 0.2, color: '139,92,246', dur: 24, delay: -11, mobile: true },
  { x: 82, y: 12, size: 1, opacity: 0.18, color: '34,211,238', dur: 21, delay: -8, mobile: false },
  { x: 90, y: 55, size: 1, opacity: 0.16, color: '139,92,246', dur: 19, delay: -6, mobile: false },
]

const ENTER = (step: number) => ({
  animation: `hero-content-enter 0.6s ease-out ${step * 70}ms both`,
})

export function HeroSection() {
  const artRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [scrollShift, setScrollShift] = useState(0)
  const parallaxEnabledRef = useRef(false)
  const scrollEnabledRef = useRef(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const isSmallViewport = window.matchMedia('(max-width: 767px)').matches
    parallaxEnabledRef.current = !prefersReducedMotion && !isTouch
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

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="scroll-section scroll-mt-20 relative mx-auto flex max-w-[1600px] flex-col items-center gap-6 px-4 pb-10 pt-12 [overflow-x:clip] sm:px-6 lg:min-h-[calc(100svh-4rem)] lg:flex-row lg:gap-8 lg:px-8 lg:py-14"
    >
      {/* Left — content. Note: no min-height on this section below `lg`.
          That forced min-height was the cause of the large empty gap
          after the artwork on mobile — the section was reserving full
          viewport height even though content was shorter. Height is now
          auto below `lg` and only the desktop row gets the viewport-aware
          min-height. */}
      <div className="relative z-10 flex w-full flex-col gap-5 lg:w-[48%]">
        <span
          style={ENTER(0)}
          className="border-border bg-card inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium"
        >
          <span className="bg-success size-2 rounded-full" aria-hidden="true" />
          Available for opportunities
        </span>

        <p style={ENTER(1)} className="eyebrow">
          Software Engineer · Frontend-Focused Full Stack
        </p>

        <div style={ENTER(2)} className="flex flex-col gap-2">
          <p className="text-muted-foreground text-lg font-medium">Hi, I&apos;m</p>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
            Bhanuprasad <span className="text-primary">L.</span>
          </h1>
        </div>

        <h2
          style={ENTER(3)}
          className="text-2xl leading-tight font-bold text-balance sm:text-3xl lg:text-[2rem]"
        >
          I build interfaces that grow into{' '}
          <span className="text-primary">real products.</span>
        </h2>

        <p style={ENTER(4)} className="text-muted-foreground max-w-[36rem] leading-relaxed text-pretty">
          I turn product ideas into polished web experiences — connecting thoughtful UI with
          application logic, APIs and data to build products that are fast, maintainable and
          ready to evolve.
        </p>

        <div style={ENTER(5)} className="flex flex-col gap-2">
          <p className="text-primary/80 text-xs font-semibold tracking-[0.15em] uppercase">
            Engineering Focus
          </p>
          <p className="text-muted-foreground max-w-[36rem] leading-relaxed text-pretty">
            Building across the product surface — UI systems, application state, API integration
            and data-backed workflows.
          </p>
        </div>

        <div style={ENTER(6)} className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            onClick={scrollTo('projects')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/50 group inline-flex h-11 items-center gap-2 rounded-lg px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View Selected Work
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className="border-border hover:border-primary/40 hover:bg-card focus-visible:ring-primary/50 inline-flex h-11 items-center gap-2 rounded-lg border px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Mail className="size-4" aria-hidden="true" />
            Get In Touch
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            aria-label="Download resume"
            className="border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30 inline-flex h-11 items-center gap-2 rounded-lg border px-4 text-sm font-medium transition-colors"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div
          style={ENTER(8)}
          className="divide-border/60 flex flex-wrap items-center divide-x text-sm"
        >
          <span className="flex flex-col gap-0.5 pr-4">
            <span className="font-semibold">2+ Years</span>
            <span className="text-muted-foreground text-xs">Professional experience</span>
          </span>
          <span className="flex flex-col gap-0.5 px-4">
            <span className="font-semibold">Frontend First</span>
            <span className="text-muted-foreground text-xs">Full-stack execution</span>
          </span>
          <span className="flex flex-col gap-0.5 pl-4">
            <span className="font-semibold">Remote · India</span>
            <span className="text-muted-foreground text-xs">Open to opportunities</span>
          </span>
        </div>

        <Link
          href="/projects/splitfin"
          style={ENTER(9)}
          className="group border-border/60 flex items-center justify-between gap-4 border-t pt-4 transition-colors"
        >
          <span className="flex items-center gap-3">
            <span className="bg-success size-1.5 shrink-0 rounded-full" aria-hidden="true" />
            <span className="flex flex-col gap-0.5">
              <span className="text-muted-foreground text-xs font-semibold tracking-[0.1em] uppercase">
                Currently Building
              </span>
              <span className="text-sm">
                <span className="text-primary font-semibold">SplitFin</span>
                <span className="text-muted-foreground">
                  {' '}
                  — smart finance tracking, bill scanning &amp; shared expense splitting
                </span>
              </span>
            </span>
          </span>
          <ArrowRight
            className="text-muted-foreground group-hover:text-primary size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Right visual. Column widened to 54% and the artwork is allowed to
          overflow past its column toward the page edge on large screens
          (clipped safely by [overflow-x:clip] on the section) so it reads
          as substantially larger than before, without shrinking the text
          column. */}
      <div style={ENTER(3)} className="relative w-full lg:w-[52%]">
        <div className="relative mx-auto w-full max-w-[820px] lg:ml-auto lg:max-w-[950px]">
          <div
            style={{
              transform: `translate3d(0, ${scrollShift}px, 0)`,
              transition: 'transform 0.2s linear',
            }}
          >
            <div
              className="relative"
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              style={{
                transform: `translate(${parallax.x}px, ${parallax.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <div ref={artRef} className="relative animate-hero-float-mobile lg:animate-hero-float">
                <div className="hero-artwork-wrapper relative">
                  <div className="hero-artwork-top-scrim" />
                  <div className="hero-artwork-bottom-scrim" />
                  <Image
                    src="/images/hero-process.png"
                    alt="Layered 3D process visual with rings representing Interface, Systems, Product and Impact"
                    width={900}
                    height={900}
                    priority
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 90vw, 62vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>

              <div
                aria-hidden="true"
                className="animate-energy-transfer pointer-events-none absolute left-1/2 top-[30%] bottom-[30%] w-px -translate-x-1/2"
                style={{
                  zIndex: 2,
                  background:
                    'linear-gradient(to bottom, transparent, rgba(139,92,246,0.5) 40%, rgba(217,70,239,0.4) 60%, transparent)',
                }}
              />

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