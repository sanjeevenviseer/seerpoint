# RTSPoint AI — Marketing Website

Marketing site for RTSPoint, a boutique AI engineering firm. Built with **Next.js 15**, **React 19**, and **Tailwind CSS**, ready for [Vercel](https://vercel.com) deployment.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Import the project in [Vercel Dashboard](https://vercel.com/new).
3. **Framework Preset:** Next.js (repo includes `vercel.json` to hint this).
4. **Do not** set **Output Directory** to `public` — leave it **empty** so Vercel uses the Next.js build. The `public/` folder is for static assets only, not build output.
5. Deploy.

If you see *“No Output Directory named public found”*: open **Project → Settings → Build & Deployment**, set **Framework Preset** to **Next.js**, clear **Output Directory**, save, and redeploy.

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## Content source

Page copy and layout follow `northlane-ai.html` in the repo root. Brand is configured in **`lib/brand.ts`** (`wordmarkParts`, `wordmarkAccentIndex`, `fullName`, `slug`).

## Next steps

- Connect the contact form to Formspree, Resend, or your CRM API.
- Add analytics (Vercel Analytics, Plausible, etc.).
- Replace placeholder favicon and add `app/icon.png` or `app/favicon.ico`.
