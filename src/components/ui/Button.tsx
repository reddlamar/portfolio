import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  external?: boolean
  variant?: 'primary' | 'secondary'
}

const variantClasses = {
  primary: 'bg-accent text-white hover:bg-accent-dark',
  secondary: 'border border-ink/20 text-ink hover:border-accent-dark hover:text-accent-dark',
}

export function Button({ href, children, external = false, variant = 'primary' }: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${variantClasses[variant]}`}
    >
      {children}
    </a>
  )
}
