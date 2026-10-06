# sanatk254-portfolio
Next.js (App Router) + TypeScript + Tailwind v4.

## Run
    npm install
    cp .env.example .env.local   # fill in values
    npm run dev                  # http://localhost:3000
    npm run build && npm start

## Before launch
- Put the resume PDF at `public/resume/Sanat_Kumar_Resume.pdf`.
- Set `NEXT_PUBLIC_SITE_URL` to your real https domain (used for canonical, sitemap, robots).
- Contact form: set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a verified sender), `CONTACT_TO_EMAIL`. Without a key the API returns 503 and the form falls back to `mailto:`.
- Edit resume content in `src/data/content.ts`.

## Deploy (Vercel)
1. Push to GitHub, import the repo in Vercel, add the env vars, deploy.
2. Project > Settings > Domains: add your domain and its www variant; pick one as primary so the other redirects (308). Vercel issues HTTPS certificates and redirects HTTP to HTTPS automatically.
3. At your registrar, add the DNS records Vercel shows (typically A 76.76.21.21 for the apex, CNAME for www; use the values in your dashboard).
4. Verify: `curl -I http://your-domain` redirects to https, and `/robots.txt` and `/sitemap.xml` load.

## Google Search Console
1. Add a Domain property and verify with the DNS TXT record it gives you.
2. Sitemaps > submit `sitemap.xml`.
3. URL Inspection > inspect the homepage > Request indexing. Indexing and ranking are decided by Google; check Pages > Indexing for status.
