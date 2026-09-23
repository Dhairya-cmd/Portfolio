import { Check, Copy, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { LinkedInIcon } from '@/components/icons'
import { Reveal } from '@/components/Reveal'
import { profile } from '@/data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section-shell !pt-0 sm:!pt-0">
      <div className="section-inner">
        <Reveal>
          <div className="relative overflow-hidden bg-[var(--paper-elevated)] px-6 py-16 text-[var(--ink)] sm:px-12 sm:py-20 lg:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(61,186,171,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(61,186,171,0.06) 1px, transparent 1px)',
                backgroundSize: '56px 56px',
                maskImage:
                  'radial-gradient(ellipse 70% 80% at 80% 20%, black, transparent)',
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(61,186,171,0.28),transparent_70%)]"
              aria-hidden
            />

            <p className="relative font-mono text-[0.6875rem] tracking-[0.18em] text-[var(--accent)] uppercase">
              <span className="text-[var(--ink-muted)]">06</span>
              <span className="mx-2 text-[var(--line-strong)]">/</span>
              Contact
            </p>
            <h2 className="relative mt-5 max-w-2xl font-display text-[clamp(1.85rem,4vw,3rem)] font-semibold tracking-[-0.035em] leading-[1.12]">
              Let&apos;s talk about IT support, iOS, or your next technical hire.
            </h2>
            <p className="relative mt-5 max-w-lg text-[0.975rem] leading-relaxed text-[var(--ink-muted)]">
              Open to remote, international, and hybrid technical opportunities.
            </p>

            <div className="relative mt-11 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg" variant="accent">
                <a href={`mailto:${profile.email}`}>
                  <Mail strokeWidth={1.75} />
                  {profile.email}
                </a>
              </Button>
              <Button type="button" size="lg" variant="outline" onClick={copyEmail}>
                {copied ? <Check strokeWidth={1.75} /> : <Copy strokeWidth={1.75} />}
                {copied ? 'Copied' : 'Copy email'}
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  <Phone strokeWidth={1.75} />
                  {profile.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-[-0.03em] text-[var(--ink)] transition-colors hover:text-[var(--accent-bright)]"
        >
          {profile.name}
        </a>
        <div className="flex flex-col gap-2 sm:items-end">
          <p className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.1em] text-[var(--ink-muted)] uppercase">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
            Available for opportunities
          </p>
          <p className="font-mono text-[0.65rem] tracking-[0.1em] text-[var(--ink-muted)] uppercase">
            Built for recruiters · Resume-sourced · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
