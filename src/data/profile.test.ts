import { contactLinks } from './profile'

describe('profile data', () => {
  it('includes a LinkedIn contact link to the real profile', () => {
    expect(contactLinks).toContainEqual({
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lamar-redd-198373298/',
    })
  })
})
