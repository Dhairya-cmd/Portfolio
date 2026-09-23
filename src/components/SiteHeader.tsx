import { Menu, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { nav, profile } from '@/data/profile'
import { cn } from '@/lib/utils'

const sectionIds = nav.map((item) => item.href.replace('#', ''))

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n))

    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-b border-[var(--line)] bg-[var(--paper)]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-[var(--ink)] transition-colors hover:text-[var(--accent-bright)]"
        >
          {profile.name.split(' ')[0]}
          <span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'relative font-mono text-[0.6875rem] tracking-[0.12em] uppercase transition-colors',
                  isActive
                    ? 'text-[var(--accent-bright)]'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)]',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-[var(--accent)] transition-all duration-300',
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0',
                  )}
                  aria-hidden
                />
              </a>
            )
          })}
          <Button asChild size="sm" variant="outline">
            <a href={`mailto:${profile.email}`}>Email</a>
          </Button>
          <Button
            type="button"
            size="sm"
            variant="accent"
            className="hidden md:inline-flex"
            onClick={() =>
              window.dispatchEvent(new CustomEvent('open-command-palette'))
            }
          >
            <Search className="size-3.5" strokeWidth={1.75} />
            Actions
          </Button>
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X strokeWidth={1.75} /> : <Menu strokeWidth={1.75} />}
        </Button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--line)] bg-[var(--paper)] px-5 py-7 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-display text-2xl font-medium tracking-[-0.03em] transition-colors hover:text-[var(--accent-bright)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex flex-col gap-3">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => {
                  setOpen(false)
                  window.dispatchEvent(new CustomEvent('open-command-palette'))
                }}
              >
                <Search className="size-4" strokeWidth={1.75} />
                Quick actions
              </Button>
              <Button asChild variant="accent" className="w-full">
                <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
                  Email Dhairya
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
