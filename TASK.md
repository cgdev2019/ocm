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
* **Validation**: Zod (if using zod‑based client) or schema‑driven adapters that map OpenAPI constraints (min/max, formats, enums) to form validation.
* **Forms**: `react-hook-form` with MUI bindings.
* **Testing**: Jest + React Testing Library for unit; Playwright for e2e (happy paths for each main flow).
* **Mocking**: MSW handlers auto‑derived from OpenAPI examples/schemas; enable a mock mode via env.
* **i18n**: `next-intl` or `next-translate` with at least `en` and `fr` message catalogs.
* **Lint/Format**: ESLint (next/core-web-vitals), Prettier, Type‑checked path aliases.

## Architecture & Conventions

* **File structure** (example):

  * `app/` (App Router)

    * `(dashboard)/`
    * `[(lang)]/` for i18n routes
    * `api/` (route handlers only if needed client‑side proxy)
  * `components/` (presentational, reusable MUI components)
  * `features/<domain>/` (screen‑level components, hooks, forms)
  * `lib/api/` (generated client + typed hooks)
  * `lib/config/` (env, constants)
  * `lib/i18n/`
  * `lib/test/`
  * `styles/`
  * `mocks/` (MSW)
* **Data layer**: generate **per‑operation typed hooks** (e.g., `useListInvoices`, `useCreateInvoice`) wrapping TanStack Query. Include key factories, pagination helpers, and optimistic updates where safe.
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

   * **List page**: server‑side or client‑side pagination (match API), sorting, filtering, column density control; empty states.
   * **Detail page**: tabs for Overview, Relations, Activity/Logs.
   * **Create/Edit forms**: generate fields from schema (types, enums, formats); client validation + display backend errors.
   * **Bulk actions** if supported.
4. **Search & Filters**

   * Faceted filters mapped to query params; persist state in URL.
5. **Files/Media** (if present in API): upload UI with progress, retry, drag & drop; link to entities.
6. **Business‑specific flows** from `DESC.txt` (e.g., validation workflows, approvals, billing cycles, etc.).

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

## Step‑by‑Step Plan (what you should output)

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

**Begin now. Ask for clarifications only if a critical blocker is found in `opencell.json` or `DESC.txt`. Otherwise proceed with best‑effort defaults.**
