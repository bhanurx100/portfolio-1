import type { Metadata } from 'next'
import {
  Database,
  Layers,
  MonitorSmartphone,
  Server,
  Wrench,
} from 'lucide-react'
import { TechChip } from '@/components/shared/chips'
import { SectionHeader } from '@/components/shared/section-header'

export const metadata: Metadata = {
  title: 'Skills — Bhanuprasad L.',
  description:
    'A practical stack across frontend, backend, data and product delivery.',
}

const skillGroups = [
  {
    icon: MonitorSmartphone,
    group: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    icon: Layers,
    group: 'State & Data',
    items: ['TanStack Query', 'Redux Toolkit', 'Zustand', 'Context API'],
  },
  {
    icon: Server,
    group: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  },
  {
    icon: Database,
    group: 'Database & ORM',
    items: ['PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    icon: Wrench,
    group: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Docker'],
  },
]

export default function SkillsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Skills"
        title={
          <>
            Tools I use to <span className="text-primary">build products</span>
          </>
        }
        description="A practical stack across frontend, backend, data and product delivery."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section key={group.group} className="surface-card flex flex-col gap-4 p-6">
            <div className="flex items-center gap-3">
              <span className="bg-primary/10 text-primary inline-flex size-10 items-center justify-center rounded-lg">
                <group.icon className="size-5" aria-hidden="true" />
              </span>
              <h2 className="font-semibold">{group.group}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechChip key={item} label={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
