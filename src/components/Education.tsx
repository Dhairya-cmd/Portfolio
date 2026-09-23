import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { achievements, education } from '@/data/profile'

export function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            index="05"
            label="Education & recognition"
            title="Formal training and standout credentials."
            className="max-w-2xl"
          />
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h3 className="meta-label !text-[var(--ink-muted)]">Education</h3>
            <ul className="mt-8 space-y-10">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="group relative pl-5 transition-transform duration-300 hover:translate-x-1"
                >
                  <span
                    className="absolute top-1 left-0 h-full w-px bg-[var(--line-strong)] transition-colors group-hover:bg-[var(--accent)]"
                    aria-hidden
                  />
                  <span
                    className="absolute top-2 left-[-2.5px] h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-transform group-hover:scale-125"
                    aria-hidden
                  />
                  <p className="font-display text-lg font-semibold tracking-[-0.025em] text-[var(--ink)] sm:text-xl">
                    {item.degree}
                  </p>
                  <p className="mt-1.5 text-[0.95rem] text-[var(--accent)]">{item.school}</p>
                  <p className="mt-2 font-mono text-[0.7rem] tracking-[0.04em] text-[var(--ink-muted)]">
                    {item.period}
                    <span className="mx-2 text-[var(--line-strong)]">·</span>
                    {item.location}
                    <span className="mx-2 text-[var(--line-strong)]">·</span>
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayClassName="reveal-delay-1">
            <h3 className="meta-label !text-[var(--ink-muted)]">
              Achievements & certifications
            </h3>
            <ul className="mt-8 space-y-10">
              {achievements.map((item) => (
                <li
                  key={item.title}
                  className="border-t border-[var(--line)] pt-6 transition-colors hover:border-[var(--accent)]/40"
                >
                  <p className="font-display text-lg font-semibold tracking-[-0.025em] text-[var(--ink)] sm:text-xl">
                    {item.title}
                  </p>
                  <p className="mt-2 font-mono text-[0.7rem] tracking-[0.08em] text-[var(--accent)] uppercase">
                    {'org' in item && item.org ? `${item.org} · ` : ''}
                    {item.period}
                  </p>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-[var(--ink-soft)]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
