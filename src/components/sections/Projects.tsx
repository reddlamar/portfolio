import type { Project } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

interface ProjectsProps {
  items: Project[]
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Featured work" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((project, index) => {
          const tone: 'light' | 'dark' = index === 0 ? 'dark' : 'light'
          const mutedText = tone === 'dark' ? 'text-white/70' : 'text-muted'
          const tagText = tone === 'dark' ? 'text-accent' : 'text-accent-dark'

          return (
            <Card key={project.name} tone={tone}>
              <div className="flex items-start justify-between gap-2">
                <h3 className={`text-lg font-semibold ${tone === 'dark' ? '' : 'text-ink'}`}>
                  {project.name}
                </h3>
                {project.badge && <Badge tone={tone}>{project.badge}</Badge>}
              </div>
              <p className={`mt-2 text-sm ${mutedText}`}>{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-medium ${tagText}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-semibold hover:underline ${tagText}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
