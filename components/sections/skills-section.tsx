import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  Database,
  Layers,
  Lightbulb,
  MonitorSmartphone,
  Rocket,
  Server,
  Wrench,
  Zap,
} from 'lucide-react'

type Group = {
  key: string
  icon: LucideIcon
  title: string
  supporting: string
  accent: string
  items: string[]
  span?: boolean
}

const groups: Group[] = [
  {
    key: 'frontend',
    icon: MonitorSmartphone,
    title: 'Frontend Engineering',
    supporting: 'Interfaces, component architecture and responsive product experiences.',
    accent: '#8b5cf6',
    span: true,
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    key: 'state',
    icon: Layers,
    title: 'State & Application Data',
    supporting: 'Server state, client state and predictable application data flow.',
    accent: '#22d3ee',
    items: ['TanStack Query', 'Redux Toolkit', 'Zustand', 'Context API', 'Zod'],
  },
  {
    key: 'backend',
    icon: Server,
    title: 'Backend & APIs',
    supporting: 'Application logic, API design and authenticated workflows.',
    accent: '#4ade80',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  },
  {
    key: 'data',
    icon: Database,
    title: 'Data Layer',
    supporting: 'Persistent data, schema design and application data access.',
    accent: '#f59e0b',
    items: ['PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    key: 'delivery',
    icon: Wrench,
    title: 'Delivery & Tooling',
    supporting: 'Development workflow, testing, deployment and iteration.',
    accent: '#60a5fa',
    items: ['Git', 'GitHub', 'Postman', 'Vercel', 'Docker'],
  },
]

const principles: { icon: LucideIcon; title: string; description: string; accent: string }[] = [
  {
    icon: Lightbulb,
    title: 'Product Thinking',
    description: 'Understand the problem before shaping the solution.',
    accent: '#8b5cf6',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Keep interactions fast and rendering intentional.',
    accent: '#f59e0b',
  },
  {
    icon: Code2,
    title: 'Maintainability',
    description: 'Build structures that remain understandable as features grow.',
    accent: '#22d3ee',
  },
  {
    icon: Rocket,
    title: 'Ship & Improve',
    description: 'Release, observe real use and refine from evidence.',
    accent: '#ec4899',
  },
]

// One skill component for every category — a compact tinted chip. Frontend
// no longer gets a special larger card treatment; it only gets a wider
// module (spanning both grid columns) so its longer list has room.
function SkillChip({ name, accent }: { name: string; accent: string }) {
  return (
    <span
      className="flex min-h-11 items-center justify-center rounded-lg px-3 py-2 text-center text-xs font-medium text-[#d8d4de] transition-colors sm:justify-start sm:text-left"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
        border: `1px solid ${accent}28`,
      }}
    >
      {name}
    </span>
  )
}

function CapabilityCard({ group }: { group: Group }) {
  return (
    <div
      className={`animate-section-enter flex flex-col gap-4 rounded-[20px] p-5 sm:p-6 ${group.span ? 'sm:col-span-2' : ''
        }`}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012))',
        border: `1px solid ${group.accent}2e`,
      }}
    >
      <div className="flex items-start gap-3">
        <span
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${group.accent}18`, color: group.accent }}
        >
          <group.icon className="size-4.5" aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-sm font-semibold">{group.title}</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">{group.supporting}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
        {group.items.map((name) => (
          <SkillChip key={name} name={name} accent={group.accent} />
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-section scroll-mt-20 mx-auto flex max-w-[1500px] flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="animate-section-enter flex max-w-2xl flex-col gap-3">
        <p className="eyebrow">Skills &amp; Technologies</p>
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          The stack behind
          <br />
          what I ship.
        </h2>
        <p className="text-muted-foreground leading-relaxed text-pretty">
          Frontend is where I&apos;m strongest. I work across the application stack when the
          product needs it — from interface architecture and state management to APIs, data
          and delivery.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,66%)_minmax(0,34%)] lg:gap-8">
        {/* Capability matrix — one grammar for every card and every chip */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {groups.map((group) => (
            <CapabilityCard key={group.key} group={group} />
          ))}
        </div>

        {/* My Approach */}
        <div
          className="animate-section-enter flex flex-col gap-6 rounded-[20px] p-6"
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012))',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div className="flex flex-col gap-3">
            <span className="border-primary/30 bg-primary/10 text-primary inline-flex w-fit items-center rounded-full border px-3 py-1 text-[0.65rem] font-semibold tracking-[0.15em] uppercase">
              My Approach
            </span>
            <h3 className="text-xl font-bold leading-snug">
              Product-minded. Frontend-first.{' '}
              <span className="text-primary">Built for real use.</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I care about the decisions behind the interface — how data flows, how components
              scale, how users experience the product and how safely the team can keep shipping.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {principles.map((p) => (
              <div key={p.title} className="flex items-start gap-3">
                <span
                  className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${p.accent}18`, color: p.accent }}
                >
                  <p.icon className="size-4" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold">{p.title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1.5 border-t border-white/[0.07] pt-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase">
              <span
                className="size-1.5 rounded-full"
                style={{ backgroundColor: '#4ade80' }}
                aria-hidden="true"
              />
              Current Focus
            </span>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Building SplitFin while deepening backend architecture, data flows and
              production-ready full-stack patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}