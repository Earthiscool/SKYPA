# SKYPA Foundation Website

Production-oriented monorepo for SKYPA Foundation, an AI literacy nonprofit helping children, schools, families, and partners understand and use AI responsibly.

## What This Site Does

- Presents SKYPA Foundation as a credible nonprofit with strong storytelling and conversion paths.
- Supports school partnerships, volunteers, sponsors, corporate partners, textbook interest, and general contact through forms.
- Keeps Sanity Studio standalone in `studio/` so editors can manage pages, programs, updates, subscribers, stories, resources, partners, impact stats, SEO, navigation, form submissions, and chatbot knowledge.
- Includes a Vercel AI Gateway-powered chatbot at `/api/chat`, with `amazon/nova-micro` as the default low-cost model as of July 8, 2026.
- Includes a custom Upstash-backed admin dashboard for editor-friendly updates, pages, programs, gallery albums, submissions, settings, and subscribers.
- Includes update subscription and notification routes using Upstash subscribers plus Resend, with Sanity as a fallback.
- Generates SEO metadata, `robots.txt`, and `sitemap.xml` through Next.js App Router conventions.

## Commands

```bash
npm run dev:web
npm run dev:studio
npm run lint:web
npm run build:web
npm run build:studio
```

## Environment

Copy `web/.env.example` to `web/.env.local` for the website. Copy `studio/.env.example` to `studio/.env.local` for Sanity CLI tasks.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key
VERCEL_AI_GATEWAY_API_KEY=your_vercel_ai_gateway_key
AI_GATEWAY_MODEL=amazon/nova-micro
NEXT_PUBLIC_SANITY_PROJECT_ID=c243kj7a
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_WRITE_TOKEN=optional_sanity_write_token
RESEND_API_KEY=your_resend_key
UPDATES_WEBHOOK_SECRET=choose_a_long_random_secret
UPSTASH_REDIS_REST_URL=your_upstash_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_rest_token
```

Secrets must stay in `.env.local` or Vercel environment variables. Do not commit real API keys.

## Architecture

- `web/` is the Next.js website.
- `studio/` is the standalone Sanity Studio.
- `studio/schemaTypes` defines the CMS editing model.
- `web/src/content/site.ts` contains rich fallback content, public route inventory, and chatbot grounding facts.
- `web/src/lib/cms.ts` is the structured Upstash CMS layer used by the custom admin dashboard.
- `web/src/sanity/loaders.ts` lets pages read Sanity content when configured and fall back to local content otherwise.
- `web/src/app` contains public routes, API routes, sitemap, and robots.

## Important Next.js Note

The website uses Next.js 16. Read `web/node_modules/next/dist/docs/` before changing routing, metadata, route handlers, caching, or file conventions. In this version, route `params` and `searchParams` are promise-based in App Router pages and route handlers.
