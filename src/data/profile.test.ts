import { buildSummary, careerStart, contactLinks, profile } from './profile'
import { yearsSince } from '../utils/yearsSince'

describe('profile data', () => {
  it('includes a LinkedIn contact link to the real profile', () => {
    expect(contactLinks).toContainEqual({
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lamar-redd-198373298/',
    })
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
