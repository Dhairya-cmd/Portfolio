import { useMemo, useState } from 'react'

import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups } from '@/data/profile'
import { cn } from '@/lib/utils'

export function Skills() {
  const [filter, setFilter] = useState<string>('All')
  const [active, setActive] = useState<string | null>(null)

  const filters = useMemo(() => ['All', ...skillGroups.map((g) => g.label)], [])
  const visible = useMemo(
    () =>
      filter === 'All' ? skillGroups : skillGroups.filter((g) => g.label === filter),
    [filter],
  )

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            index="04"
            label="Skills"
            title="Languages, mobile stack, IT support, and tooling."
            className="max-w-xl"
          />
        </Reveal>

        <Reveal delayClassName="reveal-delay-1" className="mt-8 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                'rounded-[2px] border px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.1em] uppercase transition-all',
                filter === item
                  ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-bright)]'
                  : 'border-[var(--line-strong)] text-[var(--ink-muted)] hover:border-[var(--accent)]/40 hover:text-[var(--ink)]',
              )}
            >
              {item}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((group, index) => (
            <Reveal
              key={group.label}
              delayClassName={`reveal-delay-${Math.min(index % 3, 3)}`}
              className="border-t border-[var(--line)] pt-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-base font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  {group.label}
                </h3>
                <span className="font-mono text-[0.65rem] tracking-[0.12em] text-[var(--ink-muted)]">
                  {String(group.items.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const key = `${group.label}:${item}`
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        className={cn('skill-chip', active === key && 'is-active')}
                        onMouseEnter={() => setActive(key)}
                        onFocus={() => setActive(key)}
                        onClick={() => setActive((prev) => (prev === key ? null : key))}
                      >
                        {item}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
