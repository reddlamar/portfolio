import type { Project } from '../types'
import sunlitMathIcon from '../assets/sunlit-math/icon.png'
import screenshotHome from '../assets/sunlit-math/screenshot-home.png'
import screenshotGame from '../assets/sunlit-math/screenshot-game.png'
import screenshotLeaderboard from '../assets/sunlit-math/screenshot-leaderboard.png'

export const projects: Project[] = [
  {
    name: 'Sunlit Math',
    description:
      'A math game built for children ages 5–10, designed to make early math practice playful and engaging on iOS and Android.',
    status: 'in-review',
    badge: 'Coming Soon on the App Store',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    icon: sunlitMathIcon,
    screenshots: [
      { src: screenshotHome, alt: 'Sunlit Math home screen with operation selection' },
      { src: screenshotGame, alt: 'Sunlit Math gameplay screen with a timed math question' },
      { src: screenshotLeaderboard, alt: 'Sunlit Math leaderboard screen' },
    ],
    links: [{ label: 'App Store (coming soon)', href: '#' }],
  },
]
