import type { Project } from '../types'
import sunlitMathIcon from '../assets/sunlit-math/icon.png'
import screenshotHome from '../assets/sunlit-math/screenshot-home.png'
import screenshotGame from '../assets/sunlit-math/screenshot-game.png'
import screenshotLeaderboard from '../assets/sunlit-math/screenshot-leaderboard.png'
import screenshotHomeDark from '../assets/sunlit-math/05-home-dark.png'
import screenshotSettingsDark from '../assets/sunlit-math/06-settings-dark.png'

export const projects: Project[] = [
  {
    name: 'Sunlit Math',
    description:
      'A math game built for children ages 5–10, designed to make early math practice playful and engaging on iOS and Android.',
    status: 'live',
    badge: 'Now on the App Store',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    icon: sunlitMathIcon,
    screenshots: [
      { src: screenshotHome, alt: 'Sunlit Math home screen with operation selection' },
      { src: screenshotGame, alt: 'Sunlit Math gameplay screen with a timed math question' },
      { src: screenshotLeaderboard, alt: 'Sunlit Math leaderboard screen' },
      { src: screenshotHomeDark, alt: 'Sunlit Math home screen in dark mode' },
      {
        src: screenshotSettingsDark,
        alt: 'Sunlit Math settings screen in dark mode with sound, theme, and difficulty options',
      },
    ],
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/sunlit-math/id6806609026',
        store: 'app-store',
      },
      { label: 'Android', comingSoon: true },
    ],
  },
]
