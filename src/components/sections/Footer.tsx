interface FooterProps {
  name: string
  year?: number
  credits?: string
}

export function Footer({ name, year = new Date().getFullYear(), credits }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-muted">
      <p>
        © {year} {name}. Built with React, TypeScript, and Tailwind CSS.
      </p>
      {credits && <p className="mx-auto mt-2 max-w-2xl text-xs">{credits}</p>}
    </footer>
  )
}
