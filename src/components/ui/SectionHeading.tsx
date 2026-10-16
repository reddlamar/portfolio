interface SectionHeadingProps {
  title: string
  eyebrow?: string
  tone?: 'light' | 'dark'
}

export function SectionHeading({ title, eyebrow, tone = 'light' }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p
          className={`text-sm font-semibold tracking-wide uppercase ${tone === 'dark' ? 'text-accent' : 'text-accent-dark'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl ${tone === 'dark' ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </h2>
    </div>
  )
}
