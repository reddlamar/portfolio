import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  external?: boolean
  variant?: 'primary' | 'secondary' | 'inverse'
}

const variantClasses = {
  primary:
    'bg-accent text-navy-950 shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:bg-white',
  secondary: 'border border-ink/20 text-ink hover:border-accent-dark hover:text-accent-dark',
  inverse: 'border border-white/30 text-white hover:border-white hover:bg-white/10',
}

export function Button({ href, children, external = false, variant = 'primary' }: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${variantClasses[variant]}`}
    >
      {children}
    </a>
  )
}
