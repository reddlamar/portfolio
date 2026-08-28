const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-paper/80 backdrop-blur">
      <ul className="mx-auto flex max-w-5xl justify-center gap-6 px-6 py-4 text-sm font-medium">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-ink/70 hover:text-accent-dark">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
