import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  label: string
  title: string
  className?: string
  titleClassName?: string
}

export function SectionHeading({
  index,
  label,
  title,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      <p className="meta-label">
        <span className="text-[var(--ink-muted)]">{index}</span>
        <span className="mx-2 text-[var(--line-strong)]" aria-hidden>
          /
        </span>
        {label}
      </p>
      <h2 className={cn('section-title', titleClassName)}>{title}</h2>
    </div>
  )
}
