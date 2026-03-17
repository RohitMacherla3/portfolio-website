# portfolio-website

Personal portfolio for Rohit Macherla, built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production build outputs to `dist/`.

## Deployment

This repository is configured for GitHub Pages through [.github/workflows/static.yml](.github/workflows/static.yml).

Deployment will happen automatically when all of the following are true:

- The repository is pushed to GitHub.
- The default deployment branch is `main`.
- GitHub Pages is configured to use GitHub Actions as the source.
- The repository name is `portfolio-website`, which matches the Vite base path in [vite.config.ts](vite.config.ts).

If the repository name changes, update the `base` value in [vite.config.ts](vite.config.ts) before deploying.
