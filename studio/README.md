# SKYPA Standalone Sanity Studio

This is the standalone Sanity Studio for SKYPA Foundation.

- Project ID: `c243kj7a`
- Dataset: `production`
- Local Studio URL: `http://localhost:3333`
- Website app: `../web`

Run:

```bash
npm install
npm run dev
```

The Studio stays separate from the website. Do not add an embedded `/studio` route to the Next.js app.

Deploy schema:

```bash
npm run schema:deploy
```
