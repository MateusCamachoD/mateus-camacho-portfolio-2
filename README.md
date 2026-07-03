# Mateus Camacho — Portfolio

A production-ready personal portfolio built with Next.js, React, TypeScript,
Tailwind CSS, Framer Motion, shadcn-style UI primitives, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content management

All frequently updated portfolio content lives in one file:

- `data/portfolio.ts` — profile links, projects, experience, skills, and strengths.

Adding an item to the `projects` array automatically creates:

- A large card on the homepage.
- A statically generated route at `/projects/[slug]`.
- An entry in the sitemap.

Project URLs, results, and technologies should be replaced with verified
production details before publishing. Certifications can be added as a new
array in the same data file and mapped into `components/certifications.tsx`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy

The application is ready for Vercel or any Node.js host that supports Next.js.
Update the production domain in:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
