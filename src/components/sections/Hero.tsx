import type { Profile } from '../../types'
import { Button } from '../ui/Button'

interface HeroProps {
  profile: Profile
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="home"
      className="hero-glow relative overflow-hidden bg-navy-950 px-6 py-28 text-center text-white sm:py-36"
    >
      <div className="relative mx-auto max-w-3xl">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          Available for new projects
        </p>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">{profile.name}</h1>
        <p className="mt-4 text-xl font-semibold text-accent sm:text-2xl">{profile.title}</p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          {profile.summary}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="#contact">Get in touch</Button>
          <Button href="#projects" variant="inverse">
            View projects
          </Button>
        </div>
      </div>
    </section>
  )
}
