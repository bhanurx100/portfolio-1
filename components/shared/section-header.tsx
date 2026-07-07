import { cn } from '@/lib/utils'

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-xl leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}