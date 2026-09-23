import { Search } from 'lucide-react'

type StatusDockProps = {
  onOpenPalette: () => void
}

export function StatusDock({ onOpenPalette }: StatusDockProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-[4px] border border-[var(--line-strong)] bg-[var(--paper-elevated)]/90 px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-4">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
          <p className="truncate font-mono text-[0.65rem] tracking-[0.12em] text-[var(--ink-muted)] uppercase">
            <span className="text-[var(--accent-bright)]">Signal</span>
            <span className="mx-2 text-[var(--line-strong)]">·</span>
            Open to remote · hybrid · international
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenPalette}
          className="inline-flex shrink-0 items-center gap-2 rounded-[2px] border border-[var(--line-strong)] bg-white/3 px-2.5 py-1.5 font-mono text-[0.65rem] tracking-[0.1em] text-[var(--ink-soft)] uppercase transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent-bright)]"
        >
          <Search className="size-3.5" strokeWidth={1.75} />
          Quick actions
        </button>
      </div>
    </div>
  )
}

export function Toast({ message }: { message: string | null }) {
  if (!message) return null
  return (
    <div
      role="status"
      className="fixed top-20 right-4 z-[90] rounded-[2px] border border-[var(--accent)]/40 bg-[var(--paper-elevated)] px-4 py-2.5 font-mono text-xs tracking-[0.08em] text-[var(--accent-bright)] shadow-[0_12px_40px_rgba(0,0,0,0.4)] uppercase sm:right-8"
    >
      {message}
    </div>
  )
}
