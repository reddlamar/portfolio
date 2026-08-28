import type { ContactLink } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

interface ContactProps {
  links: ContactLink[]
}

export function Contact({ links }: ContactProps) {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-20 text-center">
      <SectionHeading eyebrow="Let's talk" title="Contact" />
      <p className="text-sm text-muted">
        Open to new opportunities — reach out through any of the links below.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {links.map((link) => (
          <Button key={link.label} href={link.href} variant="secondary" external={link.href.startsWith('http')}>
            {link.label}
          </Button>
        ))}
      </div>
    </section>
  )
}
