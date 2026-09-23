import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { projects } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Projects() {
  const [open, setOpen] = useState(true)

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            index="03"
            label="Projects"
            title="Selected mobile work from the resume."
            className="max-w-xl"
          />
        </Reveal>

        <div className="mt-16 space-y-0">
          {projects.map((project) => (
            <Reveal key={project.name} as="article">
              <div
                className={cn(
                  'project-panel border-y border-[var(--line)] py-10 sm:py-12',
                  open && 'is-open',
                )}
              >
                <button
                  type="button"
                  className="flex w-full flex-col gap-6 text-left sm:flex-row sm:items-end sm:justify-between"
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                >
                  <div>
                    <h3 className="font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold tracking-[-0.035em] text-[var(--ink)] transition-colors hover:text-[var(--accent-bright)]">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[0.95rem] text-[var(--accent)]">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <ul className="flex flex-wrap gap-x-1 gap-y-2">
                      {project.tags.map((tag, i) => (
                        <li
                          key={tag}
                          className="font-mono text-[0.6875rem] tracking-[0.1em] text-[var(--ink-muted)] uppercase"
                        >
                          {tag}
                          {i < project.tags.length - 1 ? (
                            <span className="mx-2 text-[var(--line-strong)]" aria-hidden>
                              ·
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                    <ChevronDown
                      className={cn(
                        'size-5 shrink-0 text-[var(--accent)] transition-transform duration-300',
                        open && 'rotate-180',
                      )}
                      strokeWidth={1.75}
                    />
                  </div>
                </button>

                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    open
                      ? 'mt-10 grid-rows-[1fr] opacity-100'
                      : 'mt-0 grid-rows-[0fr] opacity-0',
                  )}
                >
                  <ul className="overflow-hidden grid gap-x-10 gap-y-4 sm:grid-cols-2">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="border-l border-[var(--line-strong)] pl-4 text-[0.975rem] leading-relaxed text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--ink)]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
