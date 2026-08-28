import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-dark">
      {children}
    </span>
  )
}
