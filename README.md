<div align="center">

# Cloudflare Hono Waitlist Template

Modern full-stack starter for fast product pages, waitlists, and portfolio demos.

<p>
  <img src="https://img.shields.io/badge/Astro-7%2B-FF5D01?logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Hono-Edge%20API-E36002?logo=hono&logoColor=white" alt="Hono" />
  <img src="https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white" alt="Cloudflare Workers" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-38BDF8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p>
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Bun-Tooling-F472B6?logo=bun&logoColor=white" alt="Bun" />
  <img src="https://img.shields.io/badge/Wrangler-Deploy-8A2BE2?logo=cloudflareworkers&logoColor=white" alt="Wrangler" />
  <img src="https://img.shields.io/badge/License-Portfolio-lightgrey" alt="License" />
</p>

</div>

---

## Overview

This project pairs a polished Astro frontend with a small Hono backend, giving you a clean portfolio-ready template that feels modern, fast, and easy to explain.

It is designed for:

- product landing pages
- waitlist or signup experiences
- full-stack portfolio showcases
- edge-deployed demo apps

## Tech Stack

| Layer | Tools |
| :-- | :-- |
| Frontend | Astro, React, Tailwind CSS, DaisyUI |
| Backend | Hono, Cloudflare Workers |
| Runtime | Bun, Node.js 22+ |
| UI Utilities | Lucide React |
| Auth / Security | Jose |
| Quality | ESLint, Prettier |
| Deployment | Wrangler |

## Highlights

- Astro client architecture with React islands for selective hydration
- Hono API mounted behind `/api`
- Cloudflare Worker-ready deployment flow
- Tailwind CSS v4 styling with DaisyUI components
- TypeScript-first codebase with a clean file split between client and server
- Lightweight structure that reads well in a GitHub portfolio

## Live Stack

```text
Astro + React + Hono + Cloudflare Workers + Tailwind CSS + TypeScript
```

## Project Structure

```text
src/
├── client/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── server/
    ├── index.ts
    └── middleware/
```

## Getting Started

```bash
bun install
bun run dev
```

## Scripts

| Command | Description |
| :-- | :-- |
| `bun run dev` | Starts Astro and Wrangler together for local development |
| `bun run client` | Runs the Astro client dev server |
| `bun run worker` | Runs the Cloudflare Worker locally |
| `bun run build:client` | Builds the Astro frontend |
| `bun run preview` | Previews the production build locally |
| `bun run lint` | Runs ESLint |
| `bun run format` | Formats the codebase |
| `bun run deploy:staging` | Builds and deploys to Cloudflare staging |
| `bun run deploy:production` | Builds and deploys to Cloudflare production |

## API

The backend currently exposes a health endpoint:

```http
GET /api/health
```

Example response:

```json
"healthy"
```

## Why It Works for a Portfolio

- The stack is recognizable and current.
- The app architecture is easy to explain in interviews.
- The frontend and backend boundaries are clean.
- The deployment story is modern and production-oriented.
- The repository is small enough to scan quickly, but still feels complete.

## Development Notes

- Astro uses `src/client` as the source directory.
- Vite proxies `/api` requests to the local worker during development.
- React is enabled through the Astro React integration.

## Deployment

This project is ready for Cloudflare Workers with Wrangler.

```bash
bun run build:client
bun run deploy:production
```

### GitHub Actions

Pushes to `main` deploy the production Worker automatically. Before the first
push, add a repository Actions secret named `CLOUDFLARE_API_TOKEN` with a
Cloudflare API token that has **Workers Scripts: Edit** permission for the
target account. Create the token in Cloudflare under **My Profile → API Tokens**.

The workflow is defined in `.github/workflows/deploy.yml`.

## License

Add your preferred license before publishing this as a public portfolio project.
