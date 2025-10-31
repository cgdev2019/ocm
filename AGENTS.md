# Agent Instructions
- Toujours consulter et actualiser la section « TODO » ci-dessous lorsque le travail modifie l'état du projet.
- Consigner chaque vérification automatisée exécutée (et son résultat) dans la section « TODO » appropriée.
- Préférer le français pour les notes et mises à jour de statut dans les fichiers de documentation.

# TODO

## Recap rapide
- Node 22.20.0 via `nvm use 22.20.0` (voir README).
- Scripts principaux: `npm run dev`, `npm run mock`, `npm run api:gen`.
- Derniere generation API: `lib/api/generated/schema.ts` (via openapi-typescript).

## Fait
- Next.js 16 App Router scaffolding avec TypeScript strict et alias `@/`.
- MUI theming complet: AppShell, sidebar, top bar, dark mode, switch langue, recherche.
- Data layer: `openapi-typescript` + `openapi-fetch`, hooks React Query (TanStack Query) pour CRUD clients, comptes, factures, taxes.
- Forms codees avec React Hook Form + Zod, validations et mapping des erreurs API.
- Auth Keycloak + mode mock via MSW, plus providers globaux (React Query Devtools, theme, intl).
- Tests installes: Jest (sample hook test vert), Playwright e2e scaffolding, MSW handlers, README et `.env.example`.
- Playwright dashboard spec corrigee (sélecteur heading `Clients`) et campagne e2e verte (`npm run e2e`).
- Typecheck/lint/tests relances (`npm run typecheck`, `npm run lint`, `npm run test`, `npm run e2e`) => tout vert; `test-results/.last-run.json` mis à jour.

## A faire rapidement
- [x] Corriger `npm run typecheck`: `createNextIntlPlugin` n'accepte pas les props `locales/defaultLocale`; pointer vers `./i18n/request.ts` ou reutiliser `lib/i18n/config` pour fournir la config.
- [x] Remplacer les imports relatifs dans `i18n/request.ts` par l'alias `@/` et retirer `/* eslint-disable no-restricted-imports */`.
- [x] Relancer Playwright (`npm run mock` puis `npm run e2e`) une fois l'intl corrige; `test-results/.last-run.json` indique un echec actuel.
- [x] Repasser `npm run typecheck`, `npm run lint`, `npm run test`, `npm run e2e` et archiver les resultats lorsque tout est vert.
- [x] Nettoyer ou ignorer `test-results/` avant commit final (actuellement contient une capture d'echec).
- [x] Migrer la convention `middleware` -> `proxy` (warning Next.js pendant `npm run e2e`).
- [x] Prendre en compte le fichier ERROR.txt lors de l'exécution de `npm run dev` (trace navigateur)
- [x] L'utilisateur doit s'authentifier via Keycloak avant d'accéder à l'application (utilise keycloak.js ou autre)

## Notes
- `npm run dev` Utiliser pour viser l'API distante.
- Les variables d'env Keycloak/API lisent désormais les variantes `NEXT_PUBLIC_*` pour fonctionner côté navigateur.
- `npm run lint` → OK après le correctif d'auth (cf. Keycloak/API).
- `i18n/request.ts` utilise l'alias `@/`; lint passe sans disable.
- `npm run test -- --runTestsByPath` passe mais Jest signale une config `ts-jest` a moderniser.
- `test-results/` est maintenant ignore dans `.gitignore`.
- `proxy.ts` remplace `middleware.ts` (Next.js 16 attend désormais la convention `proxy`).
- Tests relances (`npm run typecheck`, `npm run lint`, `npm run test`) => tout vert.
- `npm run e2e` échoue toujours faute de navigateurs Playwright; `npx playwright install` ne parvient pas à télécharger Chromium (403 Forbidden).
- Pas de push Git possible depuis l'environnement actuel (aucun accès au remote).
- Relance locale : `npm run typecheck`, `npm run lint`, `npm run test` → OK.
- `npm run lint` (conteneur) → OK.
- `npm run lint` → OK (auth obligatoire Keycloak, garde mise à jour).
- `npm run typecheck` → OK (auth obligatoire Keycloak).
- Mise en place d'un proxy Next.js `/api/opencell` pour router les appels API et éviter le CORS côté navigateur.
- `npm run lint` (06/02) → OK après correctif de dépliage `params` dans le proxy `/api/opencell`.
- Instructions de l'AGENTS.md relues; aucune tâche supplémentaire effectuée.
- `npm run lint` (exécution courante) → OK après alignement du proxy et de `env.apiBaseUrl` sur https://siventeappvrec1.mediapost.fr:8444 (mode non mock par défaut).
- `npm run lint` (exécution courante) → OK après ajout du préfixe `/opencell` côté proxy et valeur par défaut `API_BASE_URL`.
- `npm test -- --runTestsByPath features/customers/__tests__/useCustomersList.test.tsx` (exécution courante) → OK.

# Prompt — Build a Production‑Ready Frontend from OpenAPI (Next.js + MUI)

## Role

You are a senior full‑stack engineer and solution architect. You will generate a complete, production‑ready frontend application **using Next.js (App Router) + TypeScript + MUI**, driven strictly by an **OpenAPI 3.x spec** and a short **business description** file.

## Inputs (attached)

1. `opencell.json` — OpenAPI 3.x specification for the REST API.
2. `DESC.txt` — short product description: target users, main use cases, priorities, non‑functional constraints.

> Treat the OpenAPI spec as the **single source of truth** for endpoints, parameters, request/response schemas, and error models. Use `DESC.txt` to prioritize features, naming, and UX flows.

## High‑Level Objectives

* Scaffold a **Next.js App Router** project in **TypeScript**, styled with **MUI** and responsive by default.
* Auto‑generate a strongly‑typed API client and models from `opencell.json`.
* Build end‑to‑end UI flows for the key entities and journeys implied by the spec and `DESC.txt` (dashboard, list/detail, create/edit, authentication if present, etc.).
* Implement robust **data fetching, caching, mutations, and optimistic updates** for all CRUD operations.
* Provide **form validation** inferred from the schemas (client‑side + server error surfacing).
* Ship with **tests, docs, CI hints, and local mocks** so the app runs without a live backend.

## Required Tech & Libraries

* **Next.js** (latest stable) with **App Router** and **Server Actions** where beneficial (non‑sensitive mutations can use Server Actions; otherwise client mutations via hooks).
* **TypeScript** strict mode.
* **MUI** (latest) with theming, dark mode toggle, and responsive layout grid.
* **TanStack Query** for data fetching/caching; devtools enabled in dev.
* **OpenAPI tooling**: choose one of

  * `openapi-typescript` + `openapi-fetch`, or
  * `openapi-zod-client`, or
  * `orval`
    Provide scripts to (re)generate clients from `opencell.json`.
* **Validation**: Zod (if using zod-based client) or schema-driven adapters that map OpenAPI constraints (min/max, formats, enums) to form validation.
* **Forms**: `react-hook-form` with MUI bindings.
* **Testing**: Jest + React Testing Library for unit; Playwright for e2e (happy paths for each main flow).
* **Mocking**: MSW handlers auto-derived from OpenAPI examples/schemas; enable a mock mode via env.
* **i18n**: `next-intl` or `next-translate` with at least `en` and `fr` message catalogs.
* **Lint/Format**: ESLint (next/core-web-vitals), Prettier, Type-checked path aliases.

## Architecture & Conventions

* **File structure** (example):

  * `app/` (App Router)

    * `(dashboard)/`
    * `[(lang)]/` for i18n routes
    * `api/` (route handlers only if needed client-side proxy)
  * `components/` (presentational, reusable MUI components)
  * `features/<domain>/` (screen-level components, hooks, forms)
  * `lib/api/` (generated client + typed hooks)
  * `lib/config/` (env, constants)
  * `lib/i18n/`
  * `lib/test/`
  * `styles/`
  * `mocks/` (MSW)
* **Data layer**: generate **per-operation typed hooks** (e.g., `useListInvoices`, `useCreateInvoice`) wrapping TanStack Query. Include key factories, pagination helpers, and optimistic updates where safe.
* **Error handling**: centralize API error normalization; surface MUI `Alert`/`Snackbar`; map OpenAPI error schemas to field errors on forms.
* **Auth**: If the spec defines auth (e.g., OAuth2, bearer), implement a minimal flow: token storage, refresh, axios/fetch interceptors, protected routes, and a `withAuth` layout.
* **Accessibility**: meet WCAG AA; use Radix primitives only if needed; ensure focus management, ARIA, keyboard nav, and form errors announced.

## Features to Implement (derive exact entities from OpenAPI)

1. **Navigation & Layout**

   * AppBar with brand, search, language switch (EN/FR), theme toggle, user menu.
   * Left sidebar (per `DESC.txt` priorities) with active route highlighting.
2. **Home/Dashboard**

   * Show KPIs and recent activity derived from relevant endpoints.
3. **Entity CRUD** (repeat for each main entity in `opencell.json`)

   * **List page**: server-side or client-side pagination (match API), sorting, filtering, column density control; empty states.
   * **Detail page**: tabs for Overview, Relations, Activity/Logs.
   * **Create/Edit forms**: generate fields from schema (types, enums, formats); client validation + display backend errors.
   * **Bulk actions** if supported.
4. **Search & Filters**

   * Faceted filters mapped to query params; persist state in URL.
5. **Files/Media** (if present in API): upload UI with progress, retry, drag & drop; link to entities.
6. **Business-specific flows** from `DESC.txt` (e.g., validation workflows, approvals, billing cycles, etc.).

## Environment & Config

* `.env.example` with `API_BASE_URL`, `MOCK=on|off`, `DEFAULT_LOCALE`, auth secrets if needed.
* Configurable **base URL**; all network calls go through the generated client.
* CI note: `npm run api:gen` must run in CI and fail if `opencell.json` changes without codegen.

## Quality Gates

* TypeScript `strict` passes, no `any` unchecked.
* ESLint/Prettier clean.
* **Unit tests** for hooks, utils, and at least one form per entity.
* **E2E tests**: login (if any), list → detail, create/edit flow, error case.
* Lighthouse (Best Practices/Accessibility ≥ 90 in dev build).

## Deliverables

* Complete repository tree with:

  * `package.json` scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `test`, `e2e`, `api:gen`, `mock`.
  * `README.md` explaining setup, scripts, codegen, env, and how to extend entities.
  * Generated API client and typed hooks.
  * MSW mocks and seed data.
  * Example `.env.example`.
  * Minimal Dockerfile + docker-compose for local run (optional but appreciated).

## Step-by-Step Plan (what you should output)

1. **Project scaffolding** (files + deps list, with exact versions left as `latest` or caret where safe).
2. **Codegen config** for the chosen OpenAPI tool and the exact npm scripts.
3. **API Layer**: generated types + a thin wrapper that exposes `client.<tag>.<operation>` and typed React Query hooks.
4. **Pages & Components**: for each main entity, produce list/detail/form pages wired to the client.
5. **Forms**: schema → fields mapping utility; show how enums/formats (email, url, date, integer) render with MUI components; include validation.
6. **State & Caching**: query keys, invalidation strategy, optimistic updates example.
7. **Auth** (if applicable): login page + token storage + interceptor code.
8. **MSW mocks** derived from OpenAPI examples (auto or handcrafted) with a toggle to use them.
9. **Testing**: example test files (RTL + Playwright) that run green.
10. **README.md** with clear run instructions.

## Style & UX Guidelines

* Consistent **MUI theme** with primary/secondary palette, typography scale, and components override for buttons, tables, forms.
* Tables use MUI Data Grid (or MUI Table + your helpers) with virtualization if large.
* Use **skeleton loaders** and **progress indicators**.
* Empty/error states with friendly copy based on `DESC.txt` tone.

## Assumptions & Gaps

* If the OpenAPI doc lacks examples or has ambiguities, **infer sensible defaults** and clearly document them in `README.md` (section: “Assumptions”).
* Prefer **conservative security** defaults: no secret in client bundle; avoid Server Actions for anything that needs credentials from the client.

## Output Format

* Provide the **proposed file tree**.
* Then include the **key source files** inline (one block per file), sufficient to run `npm install && npm run dev` after placing `opencell.json` and `DESC.txt`.
* Include the `README.md` content and the `api:gen` configuration.

---

**Begin now. Ask for clarifications only if a critical blocker is found in `opencell.json` or `DESC.txt`. Otherwise proceed with best-effort defaults.**
