import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowRight,
  Briefcase,
  Building2,
  Heart,
  Rocket,
} from 'lucide-react'
import { StatusBadge, TechChip } from '@/components/shared/chips'

export const metadata: Metadata = {
  title: 'Experience — Bhanuprasad L.',
  description:
    'A timeline of work experience, roles taken on, and the impact created.',
}

const roles = [
  {
    icon: Briefcase,
    title: 'Software Engineer',
    company: 'Cynosure Software Solutions',
    date: 'Dec 2023 — Present',
    duration: '1+ year',
    current: true,
    description:
      'Working as a Software Engineer, focused on developing scalable web applications and building great user experiences.',
    points: [
      'Develop and maintain modern web applications using React, Next.js and TypeScript.',
      'Build reusable components and implement responsive, accessible UIs.',
      'Integrate RESTful APIs and third-party services.',
      'Collaborate with cross-functional teams to deliver high-quality products.',
      'Optimize application performance and ensure code quality.',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  },
  {
    icon: Building2,
    title: 'Frontend Developer (Intern)',
    company: 'Webbers Labs Technologies LLP, Mysuru',
    date: 'Mar 2023 — Jun 2023',
    duration: '4 months',
    current: false,
    description:
      'Worked as a Frontend Developer Intern, contributing to real-world projects and learning industry best practices.',
    points: [
      'Built responsive UI components and implemented user interfaces.',
      'Worked with HTML, CSS, JavaScript and React.',
      'Collaborated with the team to deliver features on time.',
      'Gained experience in clean code practices and version control.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'],
  },
]

export default function ExperiencePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Left intro */}
        <div className="flex flex-col gap-6 lg:w-[32%]">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">Experience</p>
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              My professional <span className="text-primary">journey.</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              A timeline of my work experience, the roles I&apos;ve taken on,
              and the impact I&apos;ve created.
            </p>
          </div>

          <div className="surface-card flex gap-8 p-6">
            <div className="flex flex-col gap-1">
              <Briefcase className="text-primary size-5" aria-hidden="true" />
              <p className="text-3xl font-bold">2+</p>
              <p className="text-muted-foreground text-sm">
                Years of Experience
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <Building2 className="text-primary size-5" aria-hidden="true" />
              <p className="text-3xl font-bold">2</p>
              <p className="text-muted-foreground text-sm">Organizations</p>
            </div>
          </div>

          <div className="surface-card flex flex-col gap-3 p-6">
            <div className="flex items-center gap-2">
              <Heart className="text-primary size-4" aria-hidden="true" />
              <h2 className="font-semibold">What drives me</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              I&apos;m passionate about building products that solve real
              problems. I enjoy turning ideas into clean, scalable and
              user-friendly solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <StatusBadge label="Problem Solver" />
              <StatusBadge label="Product Focused" />
              <StatusBadge label="Always Learning" />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-10 lg:w-[68%]">
          <div
            aria-hidden="true"
            className="bg-primary/30 absolute top-2 bottom-2 left-5 hidden w-px sm:block"
          />
          {roles.map((role) => (
            <article key={role.title} className="relative flex gap-6">
              <div className="hidden shrink-0 sm:block">
                <span className="border-primary/40 bg-card text-primary relative z-10 inline-flex size-10 items-center justify-center rounded-full border">
                  <role.icon className="size-4" aria-hidden="true" />
                </span>
              </div>
              <div className="surface-card flex flex-1 flex-col gap-4 p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-bold">{role.title}</h2>
                    <p className="text-primary font-medium">{role.company}</p>
                    <p className="text-muted-foreground text-sm">
                      {role.date}
                      <span className="mx-2" aria-hidden="true">
                        •
                      </span>
                      {role.duration}
                    </p>
                  </div>
                  {role.current && <StatusBadge label="Current" tone="green" />}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {role.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="surface-card flex flex-col items-start justify-between gap-6 p-6 sm:p-8 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <span className="bg-primary/10 text-primary inline-flex size-12 shrink-0 items-center justify-center rounded-xl">
            <Rocket className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Always growing, always building.</p>
            <p className="text-muted-foreground text-sm">
              Excited about what&apos;s next and the problems I&apos;ll solve
              along the way.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="border-border hover:border-primary/40 group inline-flex items-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors"
        >
          Let&apos;s Connect
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  )
}
