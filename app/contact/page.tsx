import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Contact — Bhanuprasad L.',
  description:
    'Get in touch for new opportunities, interesting projects and collaborations.',
}

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

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-14 sm:px-6 lg:flex-row lg:px-8">
      <div className="flex flex-col gap-8 lg:w-[42%]">
        <div className="flex flex-col gap-3">
          <p className="eyebrow">Contact</p>
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Let&apos;s build something amazing{' '}
            <span className="text-primary">together.</span>
          </h1>
          <p className="text-muted-foreground max-w-md leading-relaxed text-pretty">
            I&apos;m open to new opportunities, interesting projects and
            collaborations. Feel free to reach out!
          </p>
        </div>

        <ul className="flex flex-col">
          {methods.map((method, i) => {
            const inner = (
              <>
                <span className="border-border bg-card text-primary inline-flex size-11 shrink-0 items-center justify-center rounded-xl border">
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
                    className="text-primary size-4 shrink-0"
                    aria-hidden="true"
                  />
                )}
              </>
            )
            return (
              <li
                key={method.label}
                className={
                  i < methods.length - 1
                    ? 'border-border/60 border-b py-4'
                    : 'py-4'
                }
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4">{inner}</div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="border-primary/25 bg-primary/5 flex items-center gap-4 rounded-2xl border p-6">
          <span className="border-primary/30 bg-card text-primary inline-flex size-13 shrink-0 items-center justify-center rounded-full border">
            <Send className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Available for opportunities</p>
            <p className="text-muted-foreground text-sm">
              Full-time roles
              <span className="text-primary mx-1.5" aria-hidden="true">
                •
              </span>
              Product opportunities
              <span className="text-primary mx-1.5" aria-hidden="true">
                •
              </span>
              Collaborations
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-[58%]">
        <ContactForm />
      </div>
    </div>
  )
}