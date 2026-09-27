import { projects } from './projects'

describe('projects data', () => {
  const appStoreLink = projects
    .find((project) => project.name === 'Sunlit Math')
    ?.links.find((link) => link.label === 'App Store')

  it('links Sunlit Math to its App Store page over https', () => {
    expect(appStoreLink?.href).toMatch(/^https:\/\/apps\.apple\.com\/.+\/id\d+$/)
  })

  it('shows the App Store link as the official App Store badge', () => {
    expect(appStoreLink?.store).toBe('app-store')
  })

  it('lists Android as coming soon, after the App Store badge', () => {
    const links = projects.find((project) => project.name === 'Sunlit Math')?.links ?? []
    expect(links.map((link) => link.label)).toEqual(['App Store', 'Android'])
    expect(links[1]).toEqual({ label: 'Android', comingSoon: true })
  })
})
