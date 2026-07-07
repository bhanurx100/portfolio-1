'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseOpacity: number
  hue: 'violet' | 'blue'
}

// Muted violet dominates; only a handful of dim cool-blue particles for depth.
const VIOLET = { r: 139, g: 92, b: 246 }
const BLUE = { r: 96, g: 165, b: 250 }

const CONNECT_DISTANCE = 130
const CONNECT_DISTANCE_SQ = CONNECT_DISTANCE * CONNECT_DISTANCE

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let rafId = 0
    let isVisible = true

    const isSmallScreen = () => window.innerWidth < 768

    function createParticles() {
      const area = width * height
      // Sparse density: roughly one particle per ~28,000px^2, capped for perf.
      const base = Math.round(area / 28000)
      const max = isSmallScreen() ? 26 : 60
      const count = Math.min(base, max)

      particles = Array.from({ length: count }, () => {
        // ~90% muted violet, ~10% dim cool-blue for sparse depth accents.
        const hue: Particle['hue'] = Math.random() < 0.1 ? 'blue' : 'violet'
        const speed = (0.02 + Math.random() * 0.05) * (0.6 + Math.random())
        const angle = Math.random() * Math.PI * 2
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: hue === 'blue' ? 1 + Math.random() * 0.6 : 1 + Math.random() * 1.4,
          baseOpacity: hue === 'blue' ? 0.16 + Math.random() * 0.12 : 0.22 + Math.random() * 0.18,
          hue,
        }
      })
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      createParticles()
    }

    function step() {
      ctx.clearRect(0, 0, width, height)

      const allowConnections = !isSmallScreen()

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }

      // Faint connections between nearby particles — computed sparingly.
      if (allowConnections) {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i]
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const distSq = dx * dx + dy * dy
            if (distSq < CONNECT_DISTANCE_SQ) {
              const t = 1 - distSq / CONNECT_DISTANCE_SQ
              const opacity = t * t * 0.08
              if (opacity > 0.004) {
                ctx.strokeStyle = `rgba(${VIOLET.r},${VIOLET.g},${VIOLET.b},${opacity})`
                ctx.lineWidth = 1
                ctx.beginPath()
                ctx.moveTo(a.x, a.y)
                ctx.lineTo(b.x, b.y)
                ctx.stroke()
              }
            }
          }
        }
      }

      for (const p of particles) {
        const c = p.hue === 'blue' ? BLUE : VIOLET
        ctx.beginPath()
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${p.baseOpacity})`
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = requestAnimationFrame(step)
    }

    function start() {
      if (rafId) return
      rafId = requestAnimationFrame(step)
    }

    function stop() {
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = 0
      }
    }

    function handleVisibility() {
      isVisible = document.visibilityState === 'visible'
      if (isVisible && !prefersReducedMotion) {
        start()
      } else {
        stop()
      }
    }

    resize()

    if (prefersReducedMotion) {
      // Draw a single static frame and never animate.
      step()
      stop()
    } else {
      start()
    }

    let resizeTimeout = 0
    const handleResize = () => {
      window.clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(resize, 150)
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      stop()
      window.clearTimeout(resizeTimeout)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Broad, mostly-empty depth gradients — the "world" the particles float in */}
      <div
        className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full animate-grid-drift"
        style={{
          background:
            'radial-gradient(circle, rgba(100,105,120,0.05) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full animate-grid-drift"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 -left-40 h-[30rem] w-[30rem] rounded-full animate-grid-drift"
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 70%)',
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  )
}