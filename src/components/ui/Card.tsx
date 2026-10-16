import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  tone?: 'light' | 'dark'
}

const toneClasses = {
  light: 'border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg',
  dark: 'border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 text-white',
}

export function Card({ children, tone = 'light' }: CardProps) {
  return <div className={`rounded-2xl border p-7 shadow-sm ${toneClasses[tone]}`}>{children}</div>
}
