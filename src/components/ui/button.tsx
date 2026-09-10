import * as React from 'react'
import { cn } from '@/lib/utils'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  className,
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#67b7ff] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variant === 'default' && 'bg-[#1f6fe5] text-white shadow-[0_12px_24px_rgba(31,111,229,0.22)] hover:bg-[#1758c4]',
        variant === 'outline' && 'border border-[#bfd8ff] bg-white text-[#123d74] hover:bg-[#edf4ff]',
        variant === 'secondary' && 'bg-[#ffe3c6] text-[#123d74] hover:bg-[#ffd5a2]',
        variant === 'ghost' && 'bg-transparent text-[#123d74] hover:bg-[#edf4ff]',
        size === 'sm' && 'h-9 px-3 text-sm',
        size === 'md' && 'h-11 px-4 text-sm',
        size === 'lg' && 'h-12 px-5 text-base',
        className,
      )}
      {...props}
    />
  )
}
