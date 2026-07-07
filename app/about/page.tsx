import Image from 'next/image'
import type { Metadata } from 'next'
import { Code2, Compass, Sparkles, Users, Zap } from 'lucide-react'

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

// A single, concise narrative — replaces the previous two overlapping
// process systems (Think/Design/Build/Ship + Discover/Design/Develop/Test/
// Deploy & Iterate) with one clear answer per question.
const narrative = [
  {
    icon: Compass,
    question: 'How do I think?',
    answer:
      'I start from the problem, not the solution — understanding the user and the real goal before touching a design or a line of code.',
  },
  {
    icon: Sparkles,
    question: 'What do I build?',
    answer:
      'Scalable, secure, full-stack products — from the interface down to the database — built with modern, maintainable tools.',
  },
  {
    icon: Zap,
    question: 'What makes it useful?',
    answer:
      'I stay close to the whole loop: build, test, ship, and iterate on real feedback rather than assumptions.',
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-14 sm:px-6 lg:px-8">
      <section className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-8">
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
        <div className="flex w-full justify-center lg:w-[32%]">
          <Image
            src="/images/about-layers.png"
            alt="Layered floating product stack visual representing think, design, build and ship"
            width={700}
            height={800}
            className="h-auto w-full max-w-md object-contain"
          />
        </div>

        {/* Right: single concise narrative */}
        <ul className="flex w-full flex-col gap-7 lg:w-[32%] lg:pt-8">
          {narrative.map((item) => (
            <li key={item.question} className="flex items-start gap-4">
              <span className="border-primary/25 bg-card text-primary inline-flex size-11 shrink-0 items-center justify-center rounded-xl border">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-semibold">{item.question}</span>
                <span className="text-muted-foreground text-sm leading-relaxed">
                  {item.answer}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}