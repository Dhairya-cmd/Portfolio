import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/profile'

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-20">
        <Reveal>
          <SectionHeading
            index="01"
            label="About"
            title="Technical reliability across IT ops and mobile."
          />
        </Reveal>
        <Reveal delayClassName="reveal-delay-1" className="space-y-8 lg:pt-10">
          <p className="text-[1.125rem] leading-[1.7] text-[var(--ink-soft)] sm:text-[1.2rem]">
            {profile.summary}
          </p>
          <div className="flex items-start gap-4 border-t border-[var(--line)] pt-6">
            <span className="mt-1 font-mono text-[0.65rem] tracking-[0.16em] text-[var(--accent)] uppercase">
              Focus
            </span>
            <p className="max-w-md text-sm leading-relaxed text-[var(--ink-muted)]">
              Currently focused on enterprise IT support · Previously shipping iOS with
              Swift &amp; UIKit
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
