import type { Profile } from '../../types'
import { Button } from '../ui/Button'

interface HeroProps {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="home" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-ink sm:text-5xl">{profile.name}</h1>
      <p className="mt-3 text-lg font-medium text-accent-dark">{profile.title}</p>
      <p className="mt-6 text-base text-muted">{profile.summary}</p>
      <div className="mt-8 flex justify-center gap-4">
        <Button href="#contact">Get in touch</Button>
        <Button href="#projects" variant="secondary">
          View projects
        </Button>
      </div>
    </section>
  )
}
