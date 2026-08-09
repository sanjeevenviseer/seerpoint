# GenAISeer — Marketing Website

Professional, modern marketing site for an AI-first software development boutique. Built with **Next.js 15**, **React 19**, and **Tailwind CSS**, ready for [Vercel](https://vercel.com) deployment.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Import the project in [Vercel Dashboard](https://vercel.com/new).
3. Use default settings—Vercel detects Next.js automatically.
4. Deploy.

Or use the CLI:

```bash
npm i -g vercel
vercel
```

## Content source

Copy and structure derived from `ai_boutique_website.html` in the repo root, extended with expertise sections (Agentic AI, Generative AI, ML, ADLC). Brand is configured in **`lib/brand.ts`** (`wordmarkParts`, `wordmarkAccentIndex`, `fullName`, `slug`).

## Next steps

- Connect the contact form to Formspree, Resend, or your CRM API.
- Add analytics (Vercel Analytics, Plausible, etc.).
- Replace placeholder favicon and add `app/icon.png` or `app/favicon.ico`.
