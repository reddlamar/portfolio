import type { ExperienceEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    company: 'Sunlit Studio',
    role: 'Founder & Software Engineer',
    location: 'Remote',
    start: 'September 2026',
    end: 'Present',
    description:
      'Independent software studio building web and mobile applications for small businesses.',
    achievements: [
      'Founded and run a solo software studio, owning client scoping, architecture, development, and delivery end to end.',
      'Designed, built, and shipped Sunlit Math, a 60-second beat-the-clock math game for kids ages 5–10, to the Apple App Store, owning product design, development, and release.',
      'Built the app privacy-first, with no ads, no accounts, and no data collection, using an on-device leaderboard.',
      'Launched and managed paid user-acquisition campaigns on TikTok, Instagram, and Facebook.',
    ],
  },
  {
    company: 'Tech Consulting',
    role: 'Software Engineer Consultant',
    location: 'Remote',
    start: 'January 2024',
    end: 'August 2026',
    description:
      'Consulting firm placing engineers on client projects. Delivered React and React Native client work alongside a senior JavaScript engineer, then contracted to Freedom Mortgage.',
    achievements: [],
    engagements: [
      {
        company: 'Freedom Mortgage',
        role: 'Front-End Software Engineer (Contract)',
        location: 'Remote',
        start: 'July 2024',
        end: 'August 2026',
        description:
          'Mortgage lender and servicer. Built web and mobile features for the mortgage refinancing platform.',
        achievements: [
          'Overhauled the web and mobile mortgage refinance UI with React, React Native, Material UI, and Native Base, simplifying financial calculations and increasing completed applications.',
          'Built a pre-qualification tool that lets users adjust loan amounts instantly and download tailored DocuTech verification letters.',
          'Created a document-signing scheduler that lets users book times to review and sign documents, reducing manual agent assistance.',
          'Implemented secure profile data integrations with React Query and Axios, including caching and cache invalidation for user profile updates.',
          'Built a contact-preferences feature in React Native that lets users save and update how they are contacted.',
          'Reduced rendering lag by restructuring state with React hooks, Context API, and useReducer, and improved component reuse across the app.',
          'Wrote back-end functionality and API integrations in Java, delivering features end to end across the front end and services.',
        ],
      },
    ],
  },
  {
    company: 'Robot Cache',
    role: 'Front-End Software Engineer',
    location: 'San Diego, CA',
    start: 'July 2021',
    end: 'October 2023',
    description: 'Digital PC game marketplace that lets users resell digital game licenses.',
    achievements: [
      'Led a full front-end architecture rewrite in React and Tailwind CSS, cutting page load time and reducing bugs while making the codebase easier to maintain.',
      'Built the checkout page and front-end payment architecture for credit and debit cards, including secure saved-card preferences.',
      'Designed the transaction logic for the in-platform digital currency, including converting digital balances to US dollars.',
      'Integrated the PayPal API to add a second native payment method.',
      'Rebuilt the "Stash" inventory page around a local data context, eliminating redundant API calls and speeding up navigation.',
      'Partnered directly with the CTO and senior JavaScript engineer to modernize marketplace features and improve sprint delivery.',
    ],
  },
  {
    company: 'Cofebe',
    role: 'Front-End Software Engineer',
    location: 'Remote',
    start: 'December 2020',
    end: 'June 2021',
    description: 'Built front-end applications for mortgage purchase and refinance customers.',
    achievements: [
      'Built production web and hybrid mobile front ends with AngularJS, Ionic Framework, HTML, and SCSS.',
      'Designed user flows for mortgage loan applications and refinancing options.',
      'Contributed to a hybrid mobile app for a monthly vehicle-subscription business.',
    ],
  },
  {
    company: 'LinQuest',
    role: 'Full-Stack Software Engineer',
    location: 'El Segundo, CA',
    start: 'July 2016',
    end: 'October 2019',
    description: 'Built front-end and back-end web applications for engineering teams.',
    achievements: [
      'Built web applications with Angular for the frontend and backed by Python computational tools.',
      'Designed custom REST APIs and integrated them with Angular and Angular Material interfaces.',
      'Wrote JScript automation against the Sparx EA API to manipulate complex diagram data.',
      'Built responsive internal websites in SharePoint Designer with XSLT, HTML, CSS, and jQuery.',
    ],
  },
  {
    company: '6th Street Consulting',
    role: 'Web Developer',
    location: 'Redondo Beach, CA',
    start: 'June 2013',
    end: 'July 2016',
    achievements: [
      'Built custom enterprise web applications on SharePoint with C#, JavaScript, HTML, and jQuery.',
    ],
  },
]
