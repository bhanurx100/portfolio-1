'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function HeroSection() {
  const artRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const el = artRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    setParallax({ x: Math.max(-6, Math.min(6, x)), y: Math.max(-6, Math.min(6, y)) })
  }, [])

  const handlePointerLeave = useCallback(() => setParallax({ x: 0, y: 0 }), [])

  return (
    <section
      id="home"
      className="scroll-section relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:gap-6 lg:px-8 lg:py-16"
      style={{
        background:
          'radial-gradient(circle at 65% 50%, rgba(124, 58, 237, 0.06), rgba(76, 29, 149, 0.02) 40%, transparent 70%), #070812',
      }}
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
          2+ years experience · Frontend-focused full stack · Hyderabad, India
        </p>
      </div>

      {/* Right visual */}
      <div className="relative w-full lg:w-[58%]">
        <div
          className="relative mx-auto"
          style={{ width: 'clamp(580px, 52vw, 800px)' }}
        >
          {/* Oversized background bridge behind artwork */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              inset: '-12% -10% -14% -10%',
              zIndex: -1,
              background:
                'radial-gradient(ellipse 58% 62% at 54% 48%, rgba(91, 33, 182, 0.24) 0%, rgba(49, 46, 129, 0.16) 34%, rgba(15, 23, 42, 0.10) 58%, transparent 78%)',
              filter: 'blur(42px)',
            }}
          />

          <div
            className="relative"
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
          >
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
      </div>
    </section>
  )
}
