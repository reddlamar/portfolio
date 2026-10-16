import { brand } from '../../data/brand'
import { Logo } from '../ui/Logo'

const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-6">
        <a href="#home" aria-label={brand.name} className="shrink-0">
          <Logo className="[&>span]:hidden sm:[&>span]:inline" />
        </a>
        <ul className="flex min-w-0 gap-2.5 overflow-x-auto text-xs font-medium sm:gap-6 sm:text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-ink/70 transition-colors hover:text-accent-dark">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
