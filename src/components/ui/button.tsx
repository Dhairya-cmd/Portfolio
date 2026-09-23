import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]',
  {
    variants: {
      variant: {
        // Solid light CTA — dark text always (readable on dark page)
        default:
          'rounded-[var(--radius-control)] bg-[#eef2f6] text-[#0b0f14] hover:bg-white hover:text-[#0b0f14] hover:shadow-[0_0_0_1px_rgba(61,186,171,0.45),0_12px_36px_rgba(0,0,0,0.35)]',
        // Teal fill — near-black text always
        accent:
          'rounded-[var(--radius-control)] bg-[var(--accent)] text-[#061210] hover:bg-[var(--accent-bright)] hover:text-[#061210] hover:shadow-[0_10px_30px_rgba(61,186,171,0.28)]',
        // Ghost outline — light text, teal on hover
        outline:
          'rounded-[var(--radius-control)] border border-white/20 bg-transparent text-[#e8edf2] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-bright)]',
        ghost:
          'rounded-[var(--radius-control)] text-[#b7c0cc] hover:bg-white/8 hover:text-[#e8edf2]',
        link: 'text-[var(--accent-bright)] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 px-3.5 text-[0.8125rem]',
        lg: 'h-12 px-7 text-[0.9375rem]',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
