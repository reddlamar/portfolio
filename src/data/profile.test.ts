import { buildSummary, careerStart, contactLinks, marketplaceLinks, profile } from './profile'
import { yearsSince } from '../utils/yearsSince'

describe('profile data', () => {
  it('includes a LinkedIn contact link to the real profile', () => {
    expect(contactLinks).toContainEqual({
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lamar-redd-198373298/',
    })
  })
})

describe('marketplace links', () => {
  it('links to the public Upwork and Fiverr profiles', () => {
    expect(marketplaceLinks).toEqual([
      { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01687120acd3b610aa' },
      { label: 'Fiverr', href: 'https://www.fiverr.com/lamar788' },
    ])
  })

  it('never links to a logged-in dashboard page', () => {
    marketplaceLinks.forEach((link) => expect(link.href).not.toMatch(/\/edit|\/dashboard/))
  })
})

describe('profile summary', () => {
  it('puts the given number of years in the summary', () => {
    expect(buildSummary(14)).toContain('with 14 years of experience')
  })

  it('keeps the rest of the summary the same for any number of years', () => {
    expect(buildSummary(13).replace('13', 'N')).toBe(buildSummary(14).replace('14', 'N'))
  })

  it('uses the years since the career started, so it never goes stale', () => {
    expect(profile.summary).toContain(`with ${yearsSince(careerStart)} years of experience`)
  })
})
