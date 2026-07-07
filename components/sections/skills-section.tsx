'use client'

import {
  Database,
  Layers,
  MonitorSmartphone,
  Server,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    icon: MonitorSmartphone,
    group: 'Frontend Engineering',
    description: 'Core interface development',
    accent: 'violet',
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
    description: 'Application state management',
    accent: 'cyan',
    items: ['TanStack Query', 'Redux Toolkit', 'Zustand', 'Context API'],
  },
  {
    icon: Server,
    group: 'Backend Systems',
    description: 'Server-side logic & APIs',
    accent: 'blue-violet',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  },
  {
    icon: Database,
    group: 'Data Layer',
    description: 'Databases & ORMs',
    accent: 'teal',
    items: ['PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    icon: Wrench,
    group: 'Build & Delivery',
    description: 'Development & deployment',
    accent: 'amber',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Docker'],
  },
]

const accentStyles = {
  violet: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
    chipBg: 'bg-violet-500/5',
    chipText: 'text-violet-300',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    chipBg: 'bg-cyan-500/5',
    chipText: 'text-cyan-300',
  },
  'blue-violet': {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/20',
    chipBg: 'bg-indigo-500/5',
    chipText: 'text-indigo-300',
  },
  teal: {
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    border: 'border-teal-500/20',
    chipBg: 'bg-teal-500/5',
    chipText: 'text-teal-300',
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    chipBg: 'bg-amber-500/5',
    chipText: 'text-amber-300',
  },
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-section mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="flex flex-col gap-3">
        <p className="eyebrow">CAPABILITIES</p>
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Tools I use to <span className="text-primary">build real products</span>.
        </h2>
        <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
          A practical stack across interface, state, systems and delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
        {/* Frontend - spans 5 columns, dominant */}
        <section className="surface-card col-span-1 flex flex-col gap-4 p-6 md:col-span-2 lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className={`${accentStyles.violet.bg} ${accentStyles.violet.text} inline-flex size-10 items-center justify-center rounded-lg`}>
              <MonitorSmartphone className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <h3 className="font-semibold">Frontend Engineering</h3>
              <p className="text-muted-foreground text-xs">Core interface development</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroups[0].items.map((item) => (
              <span
                key={item}
                className={`${accentStyles.violet.chipBg} ${accentStyles.violet.chipText} ${accentStyles.violet.border} border px-2.5 py-1 text-xs font-medium rounded-md`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* State & Data - spans 4 columns */}
        <section className="surface-card col-span-1 flex flex-col gap-4 p-6 md:col-span-1 lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className={`${accentStyles.cyan.bg} ${accentStyles.cyan.text} inline-flex size-10 items-center justify-center rounded-lg`}>
              <Layers className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <h3 className="font-semibold">State & Data</h3>
              <p className="text-muted-foreground text-xs">Application state management</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroups[1].items.map((item) => (
              <span
                key={item}
                className={`${accentStyles.cyan.chipBg} ${accentStyles.cyan.chipText} ${accentStyles.cyan.border} border px-2.5 py-1 text-xs font-medium rounded-md`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Backend Systems - spans 3 columns */}
        <section className="surface-card col-span-1 flex flex-col gap-4 p-6 md:col-span-1 lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className={`${accentStyles['blue-violet'].bg} ${accentStyles['blue-violet'].text} inline-flex size-10 items-center justify-center rounded-lg`}>
              <Server className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <h3 className="font-semibold">Backend Systems</h3>
              <p className="text-muted-foreground text-xs">Server-side logic & APIs</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroups[2].items.map((item) => (
              <span
                key={item}
                className={`${accentStyles['blue-violet'].chipBg} ${accentStyles['blue-violet'].chipText} ${accentStyles['blue-violet'].border} border px-2.5 py-1 text-xs font-medium rounded-md`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Data Layer - spans 4 columns */}
        <section className="surface-card col-span-1 flex flex-col gap-4 p-6 md:col-span-1 lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className={`${accentStyles.teal.bg} ${accentStyles.teal.text} inline-flex size-10 items-center justify-center rounded-lg`}>
              <Database className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <h3 className="font-semibold">Data Layer</h3>
              <p className="text-muted-foreground text-xs">Databases & ORMs</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroups[3].items.map((item) => (
              <span
                key={item}
                className={`${accentStyles.teal.chipBg} ${accentStyles.teal.chipText} ${accentStyles.teal.border} border px-2.5 py-1 text-xs font-medium rounded-md`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Build & Delivery - spans 3 columns */}
        <section className="surface-card col-span-1 flex flex-col gap-4 p-6 md:col-span-1 lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className={`${accentStyles.amber.bg} ${accentStyles.amber.text} inline-flex size-10 items-center justify-center rounded-lg`}>
              <Wrench className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <h3 className="font-semibold">Build & Delivery</h3>
              <p className="text-muted-foreground text-xs">Development & deployment</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillGroups[4].items.map((item) => (
              <span
                key={item}
                className={`${accentStyles.amber.chipBg} ${accentStyles.amber.chipText} ${accentStyles.amber.border} border px-2.5 py-1 text-xs font-medium rounded-md`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
