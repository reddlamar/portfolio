# Portfolio

Lamar Redd's personal portfolio website — built with React, TypeScript, and Tailwind CSS, and published to GitHub Pages.

Live site: https://reddlamar.github.io/portfolio/

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react) for TDD
- GitHub Actions for CI/CD, deploying to GitHub Pages on every push to `main`

## Development

```bash
npm install
npm run dev      # start the dev server
npm run test     # run the test suite
npm run lint     # lint the codebase
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
```

## Architecture

- `src/data/` — typed content (profile, skills, experience, projects, education) sourced from the resume. Adding a new job or project means editing data here, not the components.
- `src/types/` — shared TypeScript interfaces for the content model.
- `src/components/ui/` — small, single-purpose presentational primitives (Button, Badge, Card, SectionHeading).
- `src/components/sections/` — one component per page section, each rendering a slice of the data model.

Every component was built test-first (`*.test.tsx` alongside its implementation) with Vitest and React Testing Library.
