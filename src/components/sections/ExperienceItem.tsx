import type { ExperienceEntry } from '../../types'

interface ExperienceItemProps {
  entry: ExperienceEntry
  nested?: boolean
}

export function ExperienceItem({ entry, nested = false }: ExperienceItemProps) {
  const Heading = nested ? 'h4' : 'h3'

  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <Heading className={`font-semibold text-ink ${nested ? 'text-base' : 'text-lg'}`}>
          {entry.company}
        </Heading>
        <span className="text-sm text-muted">
          {entry.start} – {entry.end}
        </span>
      </div>
      <p className="text-sm font-medium text-accent-dark">{entry.role}</p>
      {entry.description && <p className="mt-2 text-sm text-muted">{entry.description}</p>}
      {entry.achievements.length > 0 && (
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink/80">
          {entry.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      )}
      {entry.engagements?.map((engagement) => (
        <div
          key={`${engagement.company}-${engagement.start}`}
          className="mt-6 border-l-2 border-accent/40 pl-4"
        >
          <ExperienceItem entry={engagement} nested />
        </div>
      ))}
    </>
  )
}
