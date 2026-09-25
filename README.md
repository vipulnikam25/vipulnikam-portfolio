# Vipul Nikam Portfolio

Modern interactive portfolio for Vipul Nikam, built from the July 2026 resume and enriched with verified public profile details.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis smooth scrolling
- Local variable fonts and technology icons
- shadcn-style UI primitives

## Structure

```txt
src/
  components/
    common/      shared navigation, theme, reveal, and section utilities
    sections/    portfolio page sections
    visuals/     interactive portrait and visual experiences
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

Copy `.env.example` to `.env.local` and set `PORT` to change the Vite development and preview port. The default is `8080`.

## Contact Delivery

The contact form posts to the Vercel serverless function at `/api/contact`. Add these values to `.env.local` for local full-stack testing and to the Vercel project's environment variables for production:

```dotenv
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=vipulnikam0925@gmail.com
CONTACT_FROM_NAME=Vipul Nikam Portfolio
CONTACT_ALLOWED_ORIGIN=https://your-production-domain.example
```

For Gmail, enable two-step verification and generate an App Password for `SMTP_PASS`; do not use the normal Google account password. Never expose SMTP values through `VITE_`-prefixed variables.

Run the Vite frontend by itself with:

```sh
npm run dev
```

Run the frontend and `/api/contact` together through Vercel's local runtime with:

```sh
npx vercel dev --listen 8080
```

Change the `--listen` value when testing the full Vercel runtime on another port. The first run may ask you to link or create a Vercel project.

## Production Build

```sh
npm run lint
npm run build
npm run preview
```

## Content Updates

Most portfolio content lives in `src/data/portfolio.ts`. Update that file to change profile details, skills, projects, experience, certifications, education, publication, and contact links.

Skills and projects are loaded as separate below-the-fold bundles. Project case-study content remains config-driven in `src/data/portfolio.ts`.

The downloadable resume is served from `public/vipul-nikam-resume-2026-july.pdf`.

The direct email and WhatsApp links remain available if server-side delivery is temporarily unavailable.

## Deployment

Deploy the repository to Vercel so both the Vite application and serverless contact endpoint are available. Configure every SMTP variable in Vercel before publishing; only non-secret placeholders belong in `.env.example`.
