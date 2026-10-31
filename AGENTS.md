# Salon Website

## Stack
- React 19 + TypeScript
- Vite (bundler)
- TailwindCSS v4
- Singlefile build via vite-plugin-singlefile
- Deployed on Vercel

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Safe deployment workflow
- Never work directly on production unless the user explicitly requests it.
- Use feature branches for development, for example `dev/seo-accessibility` or `feature/booking-validation`.
- Push feature branches to trigger Vercel Preview Deployments.
- Review the Vercel preview before merging to the production branch.
- Production changes happen only after merge to the Vercel production branch, usually `main`.
- Never commit, push, merge, or deploy without explicit user approval.

## Agent workflow
- Start non-trivial work with a short todo list.
- Inspect existing files before editing.
- Prefer small, reversible changes over broad rewrites.
- Reuse existing dependencies and browser-native features before adding code or packages.
- Keep business constants such as WhatsApp number, Instagram URL, address, and operating hours centralized.
- Preserve accessibility: labels, keyboard navigation, focus states, alt text, semantic HTML.
- Preserve SEO: Indonesian language metadata, title, description, Open Graph, structured business data where useful.
- Preserve performance: optimized images, lazy loading for non-hero images, minimal JavaScript.
- Run `npm run build` before reporting completion.
- If a lint or typecheck script is added later, run it before `npm run build`.

## Structure
```
/
├── index.html
├── src/
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── AGENTS.md
```
