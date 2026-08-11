# Art Factory Prototype

A clickable Next.js/TypeScript/Tailwind prototype for a future large-scale Art Factory marketplace, Medusa v2 commerce foundation, custom framing configurator, staff admin modules, seller portal, mock APIs, pricing engine, search abstraction, and production-oriented domain model.

## Run

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Demo accounts / roles

- Admin roles: Owner, Manager, Content Manager, Sales, Workshop.
- Seller identities: seller-1 through seller-10 demonstrate data isolation.
- Customer checkout supports guest/account-creation concepts in the interactive flow.

## Mocked integration adapters

The prototype uses local mock data and service abstractions for Medusa, Typesense/search, pricing, payment, NOMATO CRM, R2 storage, AI analysis, moderation, ingestion workers, downloads, and seller APIs. No real production keys are included.
