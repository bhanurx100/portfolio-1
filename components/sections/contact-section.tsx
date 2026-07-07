'use client'

import {
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  Send,
  Users,
} from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { ContactForm } from '@/components/contact/contact-form'

const methods = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: Users,
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhanurx100',
    href: siteConfig.linkedin,
    external: true,
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'github.com/bhanurx100',
    href: siteConfig.github,
    external: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
    href: null,
    external: false,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-section mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8 lg:py-14"
    >
      <div className="flex flex-col gap-8 lg:w-[42%]">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Let&apos;s build something amazing{' '}
            <span className="text-primary">together.</span>
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
            I&apos;m open to new opportunities, interesting projects and
            collaborations. Feel free to reach out!
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {methods.map((method) => {
            const inner = (
              <>
                <span className="border-primary/20 bg-primary/5 text-primary inline-flex size-10 shrink-0 items-center justify-center rounded-lg border transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                  <method.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="flex flex-1 flex-col gap-0.5">
                  <span className="text-sm font-semibold">{method.label}</span>
                  <span className="text-muted-foreground text-sm">
                    {method.value}
                  </span>
                </span>
                {method.href && (
                  <ExternalLink
                    className="text-primary size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                )}
              </>
            )
            return (
              <li key={method.label}>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-lg border border-transparent px-3 py-2.5 transition-all hover:border-primary/20 hover:bg-primary/[0.03]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-lg px-3 py-2.5">{inner}</div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="border-primary/20 bg-primary/5 flex items-center gap-4 rounded-xl border p-5">
          <span className="border-primary/30 bg-card text-primary inline-flex size-11 shrink-0 items-center justify-center rounded-full border">
            <Send className="size-4" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-sm">Available for opportunities</p>
            <p className="text-muted-foreground text-xs">
              Full-time roles · Product opportunities · Collaborations
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-[58%]">
        <ContactForm />
      </div>
    </section>
  )
}