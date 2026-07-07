import Image from 'next/image'
import type { Metadata } from 'next'
import {
  Code2,
  CodeXml,
  Lightbulb,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Bhanuprasad L.',
  description:
    'About Bhanuprasad L., a Full Stack Developer who builds thoughtful, scalable and impactful digital products.',
}

const values = [
  { icon: Code2, title: 'Clean Code', description: 'Maintainable & Scalable' },
  { icon: Zap, title: 'Performance', description: 'Optimized for speed' },
  {
    icon: Users,
    title: 'User Focused',
    description: 'Products people love to use',
  },
]

const processItems = [
  {
    icon: Lightbulb,
    title: 'Think',
    description:
      'I start by understanding the problem, the users and the real goals.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description:
      'I craft simple, beautiful and intuitive experiences that solve the right problem.',
  },
  {
    icon: CodeXml,
    title: 'Build',
    description:
      'I build scalable, secure and performant applications using modern technologies.',
  },
  {
    icon: Rocket,
    title: 'Ship',
    description:
      'I test, iterate and ship products that create real impact.',
  },
]

const approachSteps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'I dive deep into the problem and validate the right solution.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description: 'I design clean, user-friendly interfaces and flows.',
  },
  {
    icon: CodeXml,
    number: '03',
    title: 'Develop',
    description: 'I write clean, efficient code and build robust systems.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Test',
    description: 'I test thoroughly to ensure quality and performance.',
  },
  {
    icon: Rocket,
    number: '05',
    title: 'Deploy & Iterate',
    description: 'I ship fast and keep improving based on real feedback.',
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-14 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-8">
        {/* Left */}
        <div className="flex w-full flex-col gap-6 lg:w-[36%]">
          <p className="eyebrow">About Me</p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            I build digital products that are{' '}
            <span className="text-primary">thoughtful</span>,{' '}
            <span className="text-primary">scalable</span> and{' '}
            <span className="text-primary">impactful</span>.
          </h1>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            I&apos;m a Full Stack Developer who loves turning complex problems
            into simple, intuitive experiences. From designing clean interfaces
            to building robust backend systems, I enjoy the entire process of
            creating products that people love to use.
          </p>
          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:flex-col">
            {values.map((v) => (
              <li key={v.title} className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary inline-flex size-9 shrink-0 items-center justify-center rounded-lg">
                  <v.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold">{v.title}</span>
                  <span className="text-muted-foreground text-xs leading-relaxed">
                    {v.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Center visual */}
        <div className="flex w-full justify-center lg:w-[36%]">
          <Image
            src="/images/about-layers.png"
            alt="Layered floating product stack visual representing think, design, build and ship"
            width={700}
            height={800}
            className="h-auto w-full max-w-md object-contain"
          />
        </div>

        {/* Right process */}
        <ul className="flex w-full flex-col gap-8 lg:w-[28%] lg:pt-8">
          {processItems.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <span className="border-primary/25 bg-card text-primary inline-flex size-12 shrink-0 items-center justify-center rounded-xl border">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-semibold">{item.title}</span>
                <span className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom approach panel */}
      <section className="surface-card p-6 sm:p-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="eyebrow">My Approach</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How I bring ideas to life
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            A simple process I follow to build products that are useful, usable
            and scalable.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {approachSteps.map((step) => (
            <li key={step.number} className="flex flex-col items-center gap-3 text-center">
              <span className="border-border bg-secondary text-primary inline-flex size-16 items-center justify-center rounded-full border">
                <step.icon className="size-6" aria-hidden="true" />
              </span>
              <span className="text-primary text-xs font-semibold tracking-widest">
                {step.number}
              </span>
              <span className="font-semibold">{step.title}</span>
              <span className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
