import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import {
  ArrowUpRight,
  Briefcase,
  Copy,
  GraduationCap,
  Mail,
  Search,
  Sparkles,
  User,
  Wrench,
} from 'lucide-react'

import { LinkedInIcon } from '@/components/icons'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'

type Action = {
  id: string
  label: string
  hint: string
  group: string
  keywords: string
  icon: ReactNode
  run: () => void
}

type CommandPaletteProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onToast: (message: string) => void
}

export function CommandPalette({ open, onOpenChange, onToast }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const actions = useMemo<Action[]>(
    () => [
      {
        id: 'about',
        label: 'Go to About',
        hint: 'Jump',
        group: 'Navigate',
        keywords: 'about summary bio',
        icon: <User className="size-4" strokeWidth={1.75} />,
        run: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'experience',
        label: 'Go to Experience',
        hint: 'Jump',
        group: 'Navigate',
        keywords: 'work jobs roles career',
        icon: <Briefcase className="size-4" strokeWidth={1.75} />,
        run: () =>
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'projects',
        label: 'Go to Projects',
        hint: 'Jump',
        group: 'Navigate',
        keywords: 'dchat ios apps',
        icon: <Sparkles className="size-4" strokeWidth={1.75} />,
        run: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'skills',
        label: 'Go to Skills',
        hint: 'Jump',
        group: 'Navigate',
        keywords: 'swift uikit firebase tools',
        icon: <Wrench className="size-4" strokeWidth={1.75} />,
        run: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'education',
        label: 'Go to Education',
        hint: 'Jump',
        group: 'Navigate',
        keywords: 'degree university certificate',
        icon: <GraduationCap className="size-4" strokeWidth={1.75} />,
        run: () =>
          document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'contact',
        label: 'Go to Contact',
        hint: 'Jump',
        group: 'Navigate',
        keywords: 'hire email phone',
        icon: <Mail className="size-4" strokeWidth={1.75} />,
        run: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'email',
        label: 'Copy email',
        hint: profile.email,
        group: 'Actions',
        keywords: 'mail copy contact',
        icon: <Copy className="size-4" strokeWidth={1.75} />,
        run: async () => {
          await navigator.clipboard.writeText(profile.email)
          onToast('Email copied')
        },
      },
      {
        id: 'mailto',
        label: 'Open mail draft',
        hint: 'mailto',
        group: 'Actions',
        keywords: 'compose message',
        icon: <Mail className="size-4" strokeWidth={1.75} />,
        run: () => {
          window.location.href = `mailto:${profile.email}`
        },
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        hint: 'External',
        group: 'Actions',
        keywords: 'social profile network',
        icon: <LinkedInIcon className="size-4" />,
        run: () => window.open(profile.linkedin, '_blank', 'noopener,noreferrer'),
      },
      {
        id: 'top',
        label: 'Back to top',
        hint: 'Jump',
        group: 'Navigate',
        keywords: 'home hero',
        icon: <ArrowUpRight className="size-4" strokeWidth={1.75} />,
        run: () => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' }),
      },
    ],
    [onToast],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return actions
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.keywords.includes(q) ||
        a.group.toLowerCase().includes(q) ||
        a.hint.toLowerCase().includes(q),
    )
  }, [actions, query])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setActive(0)
    const t = window.setTimeout(() => inputRef.current?.focus(), 30)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    setActive(0)
  }, [query])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onOpenChange(false)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActive((i) => Math.max(i - 1, 0))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const item = filtered[active]
        if (item) {
          item.run()
          onOpenChange(false)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, active, onOpenChange])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh] sm:pt-[16vh]">
      <button
        type="button"
        className="absolute inset-0 bg-black/65 backdrop-blur-sm"
        aria-label="Close command palette"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quick actions"
        className="relative w-full max-w-xl overflow-hidden rounded-[4px] border border-[var(--line-strong)] bg-[var(--paper-elevated)] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="flex items-center gap-3 border-b border-[var(--line)] px-4 py-3">
          <Search className="size-4 text-[var(--accent)]" strokeWidth={1.75} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, email, LinkedIn…"
            className="w-full bg-transparent font-display text-base text-[var(--ink)] outline-none placeholder:text-[var(--ink-muted)]"
            aria-autocomplete="list"
          />
          <button
            type="button"
            className="rounded-[2px] border border-[var(--line-strong)] px-2 py-1 font-mono text-[0.65rem] tracking-[0.08em] text-[var(--ink-muted)] uppercase transition-colors hover:text-[var(--ink)]"
            onClick={() => onOpenChange(false)}
          >
            Close
          </button>
        </div>

        <ul className="max-h-[50vh] overflow-auto py-2" role="listbox">
          {filtered.length === 0 ? (
            <li className="px-4 py-8 text-center font-mono text-xs tracking-[0.12em] text-[var(--ink-muted)] uppercase">
              No matches
            </li>
          ) : (
            filtered.map((item, index) => (
              <li key={item.id} role="option" aria-selected={index === active}>
                <button
                  type="button"
                  className={cn(
                    'flex w-full items-center gap-3 px-4 py-3 text-left transition-colors',
                    index === active
                      ? 'bg-[var(--accent-soft)] text-[var(--accent-bright)]'
                      : 'text-[var(--ink-soft)] hover:bg-white/4 hover:text-[var(--ink)]',
                  )}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => {
                    item.run()
                    onOpenChange(false)
                  }}
                >
                  <span className="text-[var(--accent)]">{item.icon}</span>
                  <span className="flex-1">
                    <span className="block font-display text-sm font-medium tracking-[-0.01em]">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block font-mono text-[0.65rem] tracking-[0.08em] text-[var(--ink-muted)] uppercase">
                      {item.group}
                    </span>
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.06em] text-[var(--ink-muted)]">
                    {item.hint}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>

        <div className="flex items-center justify-between border-t border-[var(--line)] px-4 py-2.5 font-mono text-[0.65rem] tracking-[0.1em] text-[var(--ink-muted)] uppercase">
          <span>Quick actions</span>
          <span>Tap or click to run</span>
        </div>
      </div>
    </div>
  )
}
