import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const chipDotColors: Record<string, string> = {
  React: '#22d3ee',
  'Next.js': '#e5e6ee',
  TypeScript: '#3b82f6',
  JavaScript: '#eab308',
  'Tailwind CSS': '#22d3ee',
  'TanStack Query': '#f87171',
  'Redux Toolkit': '#8b5cf6',
  Zustand: '#f59e0b',
  'Node.js': '#22c55e',
  PostgreSQL: '#3b82f6',
  MongoDB: '#22c55e',
  Prisma: '#8b5cf6',
  Git: '#f97316',
  GitHub: '#e5e6ee',
  Postman: '#f97316',
  Vercel: '#e5e6ee',
  Docker: '#3b82f6',
  'Express.js': '#a3a3a3',
  HTML: '#f97316',
  CSS: '#3b82f6',
}

export function TechChip({ label }: { label: string }) {
  const dot = chipDotColors[label]
  return (
    <span className="border-border bg-secondary/60 text-secondary-foreground inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium">
      {dot && (
        <span
          aria-hidden="true"
          className="size-1.5 shrink-0 rounded-full"
          style={{ backgroundColor: dot, opacity: 0.85 }}
        />
      )}
      {label}
    </span>
  )
}

export function FeatureChip({
  label,
  icon: Icon,
}: {
  label: string
  icon?: LucideIcon
}) {
  return (
    <span className="border-border bg-card text-muted-foreground inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium">
      {Icon && <Icon className="size-3.5" aria-hidden="true" />}
      {label}
    </span>
  )
}

export function StatusBadge({
  label,
  tone = 'purple',
}: {
  label: string
  tone?: 'purple' | 'green'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        tone === 'green'
          ? 'border-success/30 bg-success/10 text-success'
          : 'border-primary/30 bg-primary/10 text-primary',
      )}
    >
      {label}
    </span>
  )
}

export function Chips({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="border-border bg-secondary/60 text-secondary-foreground inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}