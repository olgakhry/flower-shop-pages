# Bloom & Stem — GitHub Pages demo

A fictional flower shop storefront built for testing AI support tooling (Forethought / Zendesk AI agent). All shop details, orders and payments are fictional placeholders.

## Pages

- **index.html** — home page with hours, address and contact
- **shop.html** — bouquet catalog with a demo cart and checkout (generates an order number, saves nothing sensitive; orders live in the browser's localStorage)
- **track.html** — fake order tracking. Works against `demo-data.js` (try `BS-10234`, `BS-10198`, `BS-10245`) plus any order placed through the demo checkout on that browser
- **help.html** — knowledge base: opening hours, delivery, order changes/cancellation, refunds, payment, flower care, weddings/subscriptions, contact. Searchable.

## Widget integration

Every page has a clearly marked `AI SUPPORT WIDGET` comment in `<head>` and before `</body>`. Paste the Forethought / Zendesk widget snippet at the marked spot in each page (or hoist it into a shared script when you're ready).

## Demo data for the AI agent

`demo-data.js` holds the catalog, shop facts (hours, delivery fee, contact) and three seeded orders with statuses `processing`, `in-transit` and `delivered` — useful fixtures when testing order questions against the agent.

## Publishing

GitHub Actions deploys the site on every push to `main` (see `.github/workflows/pages.yml`). The URL is shown in **Settings → Pages** after the first run.
