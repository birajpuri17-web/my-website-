# Your Studio website

A Next.js App Router project for a web-development business website. This repository is an in-progress scaffold, not a production business system.

## Run locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`. Use Node.js 20.9 or newer.

## Implemented

- Public pages for home, services, work, about, process, contact, and privacy.
- Responsive navigation and layouts, reduced-motion support, and baseline keyboard focus styling.
- Server-side enquiry input validation.
- Baseline security response headers.
- Page metadata, robots rules, and sitemap route.

## Not configured

- Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin before deployment. Without it, sitemap URLs are intentionally omitted and no example production domain is emitted.
- The enquiry endpoint returns HTTP 503 because PostgreSQL persistence and notification delivery are not configured. It does not save or deliver submissions.
- `/dashboard` and its child routes return 404 until real administrator authentication and authorization are implemented. Do not remove this access block before verifying server-side protection.
- Database schema/migrations, administrator provisioning, CRUD workflows, reporting, file storage, and email integrations remain unimplemented.
- Portfolio content is empty until verified projects are supplied.
- Privacy and legal copy requires review and completion before launch; it is not legal advice.

## Checks

```bash
npm run lint
npm run build
npm audit
```

There is no automated unit or end-to-end test suite configured yet. A build is not a substitute for testing database, authentication, or business workflows.
