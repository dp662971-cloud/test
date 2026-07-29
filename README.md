# Lead Dashboard

Self-contained React dashboard (leads data is embedded in `src/LeadDashboard.jsx`).
Built with Vite. Protected by HTTP Basic Auth via Vercel Edge Middleware
(`middleware.js`) since the data contains real names, phone numbers, and emails.

## Deploy

1. Push this repo to GitHub (private repo recommended).
2. Import it into Vercel (vercel.com → Add New Project → your repo). Vite is
   auto-detected, no config needed.
3. Before or right after the first deploy, set these in
   Vercel → Project → Settings → Environment Variables:
   - `DASHBOARD_USER` — login username (defaults to `admin` if unset)
   - `DASHBOARD_PASS` — login password (**required** — without it the site
     is publicly accessible, no auth prompt)
4. Redeploy after adding env vars (env vars only apply to new deployments).
5. Project → Settings → Domains → add your domain, then add the DNS records
   Vercel shows you at your domain registrar.

## Local dev

```
npm install
npm run dev
```
