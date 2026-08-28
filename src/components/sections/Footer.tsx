interface FooterProps {
  name: string
  year?: number
}

export function Footer({ name, year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-muted">
      © {year} {name}. Built with React, TypeScript, and Tailwind CSS.
    </footer>
  )
}
