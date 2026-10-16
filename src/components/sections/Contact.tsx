import type { ContactLink } from '../../types'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { GitHubIcon, GmailIcon, LinkedInIcon, PinIcon } from '../ui/icons'

// Contact link label -> its icon.
const contactIcons = { Email: GmailIcon, GitHub: GitHubIcon, LinkedIn: LinkedInIcon }

interface ContactProps {
  links: ContactLink[]
  location?: string
}

export function Contact({ links, location }: ContactProps) {
  return (
    <section
      id="contact"
      className="hero-glow relative overflow-hidden bg-navy-950 px-6 py-24 text-center text-white"
    >
      <div className="relative mx-auto max-w-2xl">
        <SectionHeading eyebrow="Have a project in mind?" title="Contact" tone="dark" />
        <p className="text-base text-white/75">
          I'm taking on new client work — web apps, mobile apps, and front-end performance. Tell me
          what you're building and I'll get back to you.
        </p>
        {location && (
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/60">
            <PinIcon className="h-4 w-4 shrink-0" />
            Based in {location}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {links.map((link) => {
            const LinkIcon = contactIcons[link.label as keyof typeof contactIcons]

            return (
              <Button
                key={link.label}
                href={link.href}
                variant="inverse"
                external={link.href.startsWith('http')}
              >
                {LinkIcon && <LinkIcon className="h-5 w-5 shrink-0" />}
                {link.label}
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
