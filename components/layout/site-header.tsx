'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const isHome = pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Scroll-spy: track which section dominates the viewport on the home page
  useEffect(() => {
    if (!isHome) return
    const ids = navLinks.map((l) => l.id)
    const visibility = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio)
        }
        let best = 'home'
        let bestRatio = 0
        for (const id of ids) {
          const ratio = visibility.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        setActiveId(best)
      },
      { threshold: [0, 0.2, 0.4, 0.6, 0.8], rootMargin: '-64px 0px 0px 0px' },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [isHome])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    if (isHome) {
      e.preventDefault()
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    } else {
      setOpen(false)
    }
  }

  const isActive = (id: string) => isHome && activeId === id

  return (
    <header className="border-border/60 bg-background/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/#home"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Home"
          className="text-2xl font-bold tracking-tight transition-opacity hover:opacity-80 lg:text-[1.75rem]"
        >
          BL<span className="text-primary">.</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={cn(
                    'relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
                    isActive(link.id)
                      ? 'text-primary [text-shadow:0_0_12px_rgba(139,92,246,0.5)]'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {link.label}
                  {isActive(link.id) && (
                    <span
                      aria-hidden="true"
                      className="bg-primary absolute inset-x-3 -bottom-[13px] h-px shadow-[0_0_6px_rgba(139,92,246,0.8)]"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.resumeUrl}
            download
            className="border-primary/40 text-primary hover:bg-primary/10 hidden items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-foreground hover:bg-secondary inline-flex size-10 items-center justify-center rounded-lg transition-colors lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-border/60 bg-background border-t lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="px-4 py-4 sm:px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      isActive(link.id)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="text-primary flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}