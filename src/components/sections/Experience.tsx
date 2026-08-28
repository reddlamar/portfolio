import type { ExperienceEntry } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

interface ExperienceProps {
  jobs: ExperienceEntry[]
}

export function Experience({ jobs }: ExperienceProps) {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <Card key={`${job.company}-${job.start}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-ink">{job.company}</h3>
              <span className="text-sm text-muted">
                {job.start} – {job.end}
              </span>
            </div>
            <p className="text-sm font-medium text-accent-dark">{job.role}</p>
            <p className="mt-2 text-sm text-muted">{job.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink/80">
              {job.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
