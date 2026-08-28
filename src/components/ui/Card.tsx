import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  tone?: 'light' | 'dark'
}

const toneClasses = {
  light: 'border-slate-200 bg-white',
  dark: 'border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 text-white',
}

export function Card({ children, tone = 'light' }: CardProps) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${toneClasses[tone]}`}>{children}</div>
  )
}
