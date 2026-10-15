import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    category: 'Front-End',
    items: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Angular',
      'AngularJS',
      'HTML5',
      'CSS3',
      'SCSS',
    ],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Ionic Framework', 'iOS App Store release'],
  },
  {
    category: 'UI Libraries',
    items: ['Tailwind CSS', 'Material UI', 'Native Base', 'Angular Material'],
  },
  {
    category: 'State & Data',
    items: ['React Query', 'Context API', 'useReducer', 'Axios', 'REST API integration'],
  },
  {
    category: 'Back-End & Databases',
    items: ['C#', 'Java', 'Python', 'REST API design', 'SQLite', 'SharePoint', 'Postgres'],
  },
  {
    category: 'Payments & Integrations',
    items: ['Card payment flows', 'PayPal API', 'DocuTech', 'third-party REST APIs'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git', 'GitHub', 'Agile/Scrum', 'unit testing'],
  },
]
