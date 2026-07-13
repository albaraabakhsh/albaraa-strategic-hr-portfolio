# Albaraa Bakhsh — Strategic HR Portfolio

Production portfolio for [theprosteps.com](https://theprosteps.com), built with Next.js, TypeScript, Tailwind CSS, and a standalone Docker runtime.

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm run build
docker build -t albaraa-portfolio .
```

English is served at `/` and Arabic at `/ar/`. Health checks use `/api/health`. Copy `.env.example` to the deployment environment and supply SMTP values to enable contact delivery; secrets must never be committed.
