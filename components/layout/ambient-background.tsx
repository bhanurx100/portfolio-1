'use client'

import { useMemo } from 'react'

type Particle = {
  x: number
  y: number
  size: number
  opacity: number
  color: string
  duration: number
  delay: number
  dx: number
  dy: number
  glow: boolean
}

const particles: Particle[] = [
  { x: 8, y: 14, size: 2, opacity: 0.32, color: 'rgba(139,92,246,0.9)', duration: 18, delay: -4, dx: 28, dy: -22, glow: true },
  { x: 92, y: 18, size: 1, opacity: 0.28, color: 'rgba(168,85,247,0.9)', duration: 22, delay: -8, dx: -24, dy: 18, glow: false },
  { x: 15, y: 78, size: 2, opacity: 0.36, color: 'rgba(96,165,250,0.9)', duration: 16, delay: -2, dx: 32, dy: -16, glow: false },
  { x: 85, y: 72, size: 1, opacity: 0.24, color: 'rgba(139,92,246,0.9)', duration: 24, delay: -12, dx: -20, dy: 24, glow: true },
  { x: 45, y: 35, size: 2, opacity: 0.30, color: 'rgba(168,85,247,0.9)', duration: 20, delay: -6, dx: 18, dy: -28, glow: false },
  { x: 55, y: 65, size: 1, opacity: 0.26, color: 'rgba(96,165,250,0.9)', duration: 26, delay: -10, dx: -26, dy: 20, glow: false },
  { x: 28, y: 52, size: 2, opacity: 0.34, color: 'rgba(139,92,246,0.9)', duration: 19, delay: -5, dx: 24, dy: -20, glow: true },
  { x: 72, y: 42, size: 1, opacity: 0.22, color: 'rgba(168,85,247,0.9)', duration: 23, delay: -9, dx: -22, dy: 26, glow: false },
  { x: 12, y: 88, size: 2, opacity: 0.38, color: 'rgba(96,165,250,0.9)', duration: 17, delay: -3, dx: 30, dy: -18, glow: false },
  { x: 88, y: 8, size: 1, opacity: 0.20, color: 'rgba(139,92,246,0.9)', duration: 25, delay: -11, dx: -18, dy: 22, glow: true },
  { x: 38, y: 22, size: 2, opacity: 0.28, color: 'rgba(168,85,247,0.9)', duration: 21, delay: -7, dx: 20, dy: -24, glow: false },
  { x: 62, y: 58, size: 1, opacity: 0.24, color: 'rgba(96,165,250,0.9)', duration: 27, delay: -13, dx: -28, dy: 18, glow: false },
  { x: 22, y: 38, size: 2, opacity: 0.32, color: 'rgba(139,92,246,0.9)', duration: 18, delay: -4, dx: 26, dy: -22, glow: false },
  { x: 78, y: 82, size: 1, opacity: 0.26, color: 'rgba(168,85,247,0.9)', duration: 22, delay: -8, dx: -24, dy: 20, glow: true },
  { x: 52, y: 12, size: 2, opacity: 0.30, color: 'rgba(96,165,250,0.9)', duration: 20, delay: -6, dx: 22, dy: -26, glow: false },
  { x: 48, y: 92, size: 1, opacity: 0.22, color: 'rgba(139,92,246,0.9)', duration: 24, delay: -10, dx: -20, dy: 24, glow: false },
  { x: 18, y: 62, size: 2, opacity: 0.36, color: 'rgba(168,85,247,0.9)', duration: 16, delay: -2, dx: 28, dy: -18, glow: false },
  { x: 82, y: 28, size: 1, opacity: 0.24, color: 'rgba(96,165,250,0.9)', duration: 26, delay: -12, dx: -26, dy: 22, glow: true },
  { x: 32, y: 48, size: 2, opacity: 0.28, color: 'rgba(139,92,246,0.9)', duration: 19, delay: -5, dx: 24, dy: -20, glow: false },
  { x: 68, y: 78, size: 1, opacity: 0.20, color: 'rgba(168,85,247,0.9)', duration: 23, delay: -9, dx: -22, dy: 26, glow: false },
  { x: 8, y: 32, size: 2, opacity: 0.34, color: 'rgba(96,165,250,0.9)', duration: 17, delay: -3, dx: 30, dy: -16, glow: false },
  { x: 92, y: 68, size: 1, opacity: 0.26, color: 'rgba(139,92,246,0.9)', duration: 25, delay: -11, dx: -18, dy: 22, glow: true },
]

export function AmbientBackground() {

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Subtle grey depth gradients */}
      <div
        className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full animate-grid-drift"
        style={{
          background:
            'radial-gradient(circle, rgba(100,105,120,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full animate-grid-drift"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 -left-40 h-[30rem] w-[30rem] rounded-full animate-grid-drift"
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Deterministic drifting particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            backgroundColor: p.color,
            boxShadow: p.glow ? '0 0 8px currentColor' : 'none',
            animation: `ambientParticleDrift ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            '--dx': `${p.dx}px`,
            '--dy': `${p.dy}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
