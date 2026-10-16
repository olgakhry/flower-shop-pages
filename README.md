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

The site is live at **https://olgakhry.github.io/flower-shop-pages/** via branch-based Pages: any push to `main` is redeployed automatically (Settings → Pages → deploy from `main` /).

`.github/workflows/pages.yml` exists locally but is not committed — the repo owner's `gh` token currently lacks the `workflow` scope. To switch to the Actions-based deployment instead, refresh the token with `gh auth refresh -s workflow`, then commit and push that file and switch Pages to GitHub Actions.
