import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'light' | 'dark'
}

const toneClasses = {
  light: 'bg-accent/10 text-accent-dark',
  dark: 'bg-white/10 text-accent',
}

export function Badge({ children, tone = 'light' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  )
}
