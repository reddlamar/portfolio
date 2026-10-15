import type { ExperienceEntry } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { ExperienceItem } from './ExperienceItem'

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
            <ExperienceItem entry={job} />
          </Card>
        ))}
      </div>
    </section>
  )
}
