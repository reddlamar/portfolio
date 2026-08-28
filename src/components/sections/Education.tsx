import type { EducationEntry } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'

interface EducationProps {
  items: EducationEntry[]
}

export function Education({ items }: EducationProps) {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading eyebrow="Background" title="Education & Certificates" />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.institution}>
            <h3 className="font-semibold text-ink">{item.institution}</h3>
            <p className="mt-1 text-sm text-muted">{item.credential}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
