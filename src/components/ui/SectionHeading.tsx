interface SectionHeadingProps {
  title: string
  eyebrow?: string
}

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide text-accent-dark uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-ink">{title}</h2>
    </div>
  )
}
