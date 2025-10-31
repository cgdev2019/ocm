# OCM Frontend

Opencell CM2 is a production-ready Next.js application that provides a Keycloak-protected console for customer, account, invoice and tax management. The UI is generated from the `opencell.json` OpenAPI definition and follows the requirements from `DESC.txt`.

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- MUI 6 with a custom theme, dark mode toggle and responsive layout
- TanStack Query 5 for data fetching/caching
- `openapi-typescript` + `openapi-fetch` for strongly-typed API clients
- `react-hook-form` + Zod for schema-driven forms
- `next-intl` for i18n (English/French)
- MSW 2 for dev/test mocks, Playwright for e2e, Jest + Testing Library for unit tests
- ESLint (flat config) + Prettier

## Getting Started

### Prerequisites

- Node.js ≥ 20.9 (managed via `nvm use 22.20.0`)
- npm 10+

### Installation

```bash
npm install
npm run api:gen   # regenerate typed OpenAPI client (required after spec changes)
```

### Development

```bash
npm run dev        # start app against the live API
npm run mock       # start app with MSW interceptors enabled (default)
```

The console is served at [http://localhost:3000](http://localhost:3000). `npm run dev` enables MSW mocks and auto-logs with mock credentials; use `npm run dev:real` (without `MOCK`) to initiate the Keycloak SSO flow against the live backend.

### Variables d'environnement

Copiez `.env.example` vers `.env.local` puis ajustez si besoin :

| Variable | Description                                                                                   |
| --- |-----------------------------------------------------------------------------------------------|
| `API_BASE_URL` | URL de base du serveur REST (par défaut `https://siventeappvval2.mediapost.fr:6443/opencell`) |
| `KEYCLOAK_APP_AUTH_URL`, `KEYCLOAK_REALM`, `KEYCLOAK_CLIENT_ID` | Paramètres Keycloak (client par défaut : `opencell-portal`)                                   |
| `DEFAULT_LOCALE` | Locale initiale (`fr` ou `en`)                                                                |
| `MOCK` | Mettre `on` pour activer MSW & l'auth mock (laisser vide pour le serveur réel)                |

## npm Scripts

| Script | Description |
| --- | --- |
| `npm run mock` | Start Next.js in dev mode with MSW mocks (MOCK=on) |
| `npm run dev` | Start Next.js in dev mode against the real API |
| `npm run build` / `start` | Production build & serve |
| `npm run lint` | ESLint (flat config) + Prettier validation |
| `npm run typecheck` | TypeScript strict check |
| `npm run test` | Jest unit tests (React Testing Library) |
| `npm run e2e` | Playwright e2e tests (requires running server; defaults to `npm run mock`) |
| `npm run e2e:ui` | Launch Playwright UI mode |
| `npm run api:gen` | Regenerate OpenAPI types from `opencell.json` |

CI should execute `npm run api:gen` after spec changes to prevent stale types.

## Feature Overview

- **Dashboard**: KPIs and quick lists for customers and invoices, query caching with TanStack Query.
- **Customers**: List, detail, create/update, delete flows; schema-backed form validation; URL navigation synced with locale.
- **Customer Accounts**: List/detail CRUD with payment information.
- **Invoices**: List with filters, detail view and lightweight create form (mock only).
- **Taxes**: List/detail CRUD with optimistic cache invalidation.
- **Layout**: AppShell with responsive sidebar, global search field, theme switcher, locale switcher, user menu with Keycloak-driven logout.
- **Auth**: Client-side Keycloak integration, mock path auto-auths, token refresh & storage centralised in `AuthProvider`.

## Testing & QA

```bash
npm run lint
npm run typecheck
npm run test            # unit tests (Jest)
npm run mock            # in another terminal
npm run e2e             # Playwright e2e scenarios
```

- Jest tests mock the OpenAPI client rather than hitting the network.
- Playwright launches the app via `npm run mock`, exercising login, list/detail and CRUD happy paths.

## Mocking Strategy

- `mocks/handlers.ts` contains MSW REST handlers backed by fixture data in `mocks/data.ts`.
- In development, enabling `MOCK=on` spins up the worker automatically (`AppProviders`).
- For production, leave `MOCK` unset to target the real API + Keycloak.
- Les données MSW et Jest proviennent désormais de `tests/fixtures/opencellDataset.ts` afin de garantir un jeu d'essai unique et stable.

## Directory Layout

```
app/                    # Next.js app router (locale-aware)
  [locale]/(app)/       # Authenticated area with AppShell
components/             # Shared UI widgets (layout, providers)
features/               # Domain features (customers, accounts, invoices, taxes)
lib/                    # API client, config, i18n, testing utilities
mocks/                  # MSW fixtures and handlers
public/                 # Static assets (e.g. silent-check-sso.html)
```

## Assumptions & Notes

- The invoice creation endpoint requires detailed financial payloads; the UI provides a simplified form suitable for the MSW fixtures. Document fill-outs may need adjustment for real data.
- Tax/Customer Account endpoints in the legacy API are marked deprecated but still functional; production usage should confirm with backend team.
- Currency values default to `EUR` where the schema omits currency information.
- Keycloak SSO is implemented entirely client-side; secure storage (cookie/httpOnly) would require backend support.
- Additional OpenAPI domains can be scaffolded by following the existing feature module structure.

## Regenerating API Types

Whenever `opencell.json` changes, run:

```bash
npm run api:gen
npm run lint
npm run typecheck
```

This regenerates `lib/api/generated/schema.ts`. Commit the regenerated file to keep type safety aligned with the spec.

## Deployment

1. Configure environment variables (see `.env.example`).
2. Build the app: `npm run build`
3. Serve via `npm run start` (defaults to port 3000)

For containerisation, a minimal Dockerfile can run `npm run build` followed by `npm run start` behind a reverse proxy.

---
Made with ❤️ for the Opencell CM2 lab.
