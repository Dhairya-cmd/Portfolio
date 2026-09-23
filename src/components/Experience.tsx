import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { experience } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Experience() {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true })

  const toggle = (index: number) => {
    setActive(index)
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            index="02"
            label="Experience"
            title="Roles spanning service desk, iOS shipping, and internship builds."
            className="max-w-2xl"
          />
          <p className="mt-4 font-mono text-[0.7rem] tracking-[0.1em] text-[var(--ink-muted)] uppercase">
            Click a role to expand details · Hover to highlight
          </p>
        </Reveal>

        <ol className="relative mt-12">
          <div
            className="absolute top-0 bottom-0 left-0 hidden w-px bg-[var(--line)] md:left-[11.5rem] md:block lg:left-[13rem]"
            aria-hidden
          />

          {experience.map((job, index) => {
            const isActive = active === index
            const isOpen = Boolean(expanded[index])
            return (
              <Reveal
                key={`${job.company}-${job.period}`}
                as="li"
                delayClassName={`reveal-delay-${Math.min(index, 3)}`}
              >
                <div
                  className={cn(
                    'interactive-row relative grid gap-5 border-t border-[var(--line)] py-8 outline-none md:grid-cols-[11.5rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[13rem_minmax(0,1fr)]',
                    isActive && 'border-[var(--accent)]/25 bg-[var(--accent-soft)]/30',
                  )}
                  onMouseEnter={() => setActive(index)}
                >
                  <button
                    type="button"
                    className="text-left md:pr-4"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <p
                      className={cn(
                        'font-mono text-[0.6875rem] tracking-[0.14em] transition-colors',
                        isActive ? 'text-[var(--accent-bright)]' : 'text-[var(--ink-muted)]',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-3 font-mono text-[0.7rem] leading-relaxed tracking-[0.04em] text-[var(--ink-muted)]">
                      {job.period}
                    </p>
                    <p className="mt-1 font-mono text-[0.7rem] tracking-[0.04em] text-[var(--ink-muted)]">
                      {job.location}
                    </p>
                  </button>

                  <div className="relative md:pl-8">
                    <span
                      className={cn(
                        'absolute top-2 -left-[2.15rem] hidden h-2 w-2 rounded-full border bg-[var(--paper)] transition-all duration-300 md:block lg:-left-[2.4rem]',
                        isActive
                          ? 'scale-125 border-[var(--accent-bright)] bg-[var(--accent)] shadow-[0_0_16px_rgba(61,186,171,0.55)]'
                          : 'border-[var(--accent)]',
                      )}
                      aria-hidden
                    />
                    <button
                      type="button"
                      className="flex w-full items-start justify-between gap-4 text-left"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                    >
                      <div>
                        <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-[1.5rem]">
                          {job.role}
                        </h3>
                        <p className="mt-1.5 text-[0.95rem] font-medium text-[var(--accent)]">
                          {job.company}
                        </p>
                      </div>
                      <ChevronDown
                        className={cn(
                          'mt-1 size-5 shrink-0 text-[var(--accent)] transition-transform duration-300',
                          isOpen && 'rotate-180',
                        )}
                        strokeWidth={1.75}
                      />
                    </button>

                    <div
                      className={cn(
                        'grid transition-all duration-300 ease-out',
                        isOpen
                          ? 'mt-6 grid-rows-[1fr] opacity-100'
                          : 'mt-0 grid-rows-[0fr] opacity-0',
                      )}
                    >
                      <ul className="space-y-3.5 overflow-hidden">
                        {job.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="grid grid-cols-[auto_1fr] gap-3 text-[0.975rem] leading-relaxed text-[var(--ink-soft)]"
                          >
                            <span
                              className="mt-[0.55rem] h-px w-3 bg-[var(--accent)]/70"
                              aria-hidden
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
