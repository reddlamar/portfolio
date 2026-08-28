import { Nav } from './components/sections/Nav'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { profile, contactLinks } from './data/profile'
import { skills } from './data/skills'
import { experience } from './data/experience'
import { projects } from './data/projects'
import { education } from './data/education'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero profile={profile} />
        <Skills groups={skills} />
        <Experience jobs={experience} />
        <Projects items={projects} />
        <Education items={education} />
        <Contact links={contactLinks} />
      </main>
      <Footer name={profile.name} />
    </>
  )
}

export default App
