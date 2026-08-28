import type { Profile } from '../../types'
import { Button } from '../ui/Button'

interface HeroProps {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-navy-800 to-navy-950 px-6 py-24 text-center text-white"
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-5xl">{profile.name}</h1>
        <p className="mt-3 text-lg font-medium text-accent">{profile.title}</p>
        <p className="mt-6 text-base text-white/70">{profile.summary}</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="#contact">Get in touch</Button>
          <Button href="#projects" variant="inverse">
            View projects
          </Button>
        </div>
      </div>
    </section>
  )
}
