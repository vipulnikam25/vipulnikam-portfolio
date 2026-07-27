# Vipul Nikam Portfolio

Modern interactive portfolio for Vipul Nikam, built from the July 2026 resume and enriched with verified public profile details.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style UI primitives

## Structure

```txt
src/
  components/
    common/      shared navigation, theme, reveal, and section utilities
    sections/    portfolio page sections
    ui/          reusable shadcn-style primitives
  data/          content source for profile, skills, projects, experience
  lib/           shared utilities
  pages/         route pages
public/
  vipul-nikam-resume-2026-july.pdf
```

## Run Locally

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run lint
npm run build
npm run preview
```

## Content Updates

Most portfolio content lives in `src/data/portfolio.ts`. Update that file to change profile details, skills, projects, experience, certifications, education, publication, and contact links.

The downloadable resume is served from `public/vipul-nikam-resume-2026-july.pdf`.

The footer visitor count is browser-local only. It increments once per browser session and does not represent global unique visitors because no backend or analytics service is configured.

## Deployment

This is a static Vite app. Deploy the generated `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.
