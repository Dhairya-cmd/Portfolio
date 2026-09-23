import { ArrowDownRight, Mail, Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { LinkedInIcon } from '@/components/icons'
import { profile } from '@/data/profile'

const focusLines = [
  'IT Support Specialist',
  'iOS Developer · Swift & UIKit',
  'Enterprise laptop & OS support',
  'Firebase · REST API integration',
] as const

export function Hero({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [firstName, ...rest] = profile.name.split(' ')
  const lastName = rest.join(' ')
  const orbRef = useRef<HTMLDivElement>(null)
  const [focusIndex, setFocusIndex] = useState(0)

  useEffect(() => {
    const orb = orbRef.current
    if (!orb) return
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      orb.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const id = window.setInterval(() => {
      setFocusIndex((i) => (i + 1) % focusLines.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-24 pt-28 sm:px-8 sm:pb-28 lg:pb-32"
    >
      <div
        ref={orbRef}
        className="hero-orb pointer-events-none absolute -right-20 top-16 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle_at_center,var(--glow),transparent_70%)] transition-transform duration-300 ease-out sm:-right-8 sm:top-10 sm:h-[34rem] sm:w-[34rem]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="animate-fade flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="live-dot inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
          <p className="meta-label">{profile.citizenship}</p>
          <span className="hidden h-3 w-px bg-[var(--line-strong)] sm:block" aria-hidden />
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-[var(--ink-muted)] uppercase">
            Open to remote · international · hybrid
          </p>
        </div>

        <h1 className="animate-rise mt-6 font-display text-[clamp(2.6rem,10vw,6.25rem)] leading-[0.92] font-semibold tracking-[-0.04em] text-[var(--ink)]">
          <span className="block">{firstName}</span>
          <span className="block">{lastName}</span>
        </h1>

        <div
          className="hero-underline mt-5 h-px w-28 bg-[var(--accent)] sm:w-40"
          aria-hidden
        />

        <div className="animate-rise-delay-1 mt-6 flex min-h-[1.75rem] items-center gap-3">
          <span className="font-mono text-[0.65rem] tracking-[0.16em] text-[var(--accent)] uppercase">
            Focus
          </span>
          <p
            key={focusLines[focusIndex]}
            className="font-display text-sm font-medium tracking-[-0.01em] text-[var(--ink-soft)] sm:text-base"
            style={{ animation: 'fade-in 0.45s ease both' }}
          >
            {focusLines[focusIndex]}
          </p>
        </div>

        <p className="animate-rise-delay-1 mt-5 max-w-2xl font-display text-[1.15rem] leading-snug font-medium tracking-[-0.02em] text-[var(--ink-soft)] sm:text-[1.45rem] md:text-[1.65rem]">
          {profile.heroLine}
        </p>

        <p className="animate-rise-delay-2 mt-4 max-w-lg text-[0.975rem] leading-relaxed text-[var(--ink-muted)] sm:text-base">
          {profile.heroSupport}
        </p>

        <div className="animate-rise-delay-3 mt-9 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" variant="accent">
            <a href="#experience">
              View experience
              <ArrowDownRight strokeWidth={1.75} />
            </a>
          </Button>
          <Button asChild size="lg" variant="default">
            <a href={`mailto:${profile.email}`}>
              <Mail strokeWidth={1.75} />
              Contact
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </Button>
          <Button type="button" size="lg" variant="ghost" onClick={onOpenPalette}>
            <Search strokeWidth={1.75} />
            Quick actions
          </Button>
        </div>
      </div>
    </section>
  )
}
