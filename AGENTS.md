# Agent Instructions
- Toujours consulter et actualiser la section « TODO » ci-dessous lorsque le travail modifie l'état du projet.
- Consigner chaque vérification automatisée exécutée (et son résultat) dans la section « TODO » appropriée.
- Préférer le français pour les notes et mises à jour de statut dans les fichiers de documentation.

# TODO

## Recap rapide
- Node 22.20.0 via `nvm use 22.20.0` (voir README).
- Scripts principaux: `npm run dev`, `npm run mock`, `npm run api:gen`.
- Derniere generation API: `lib/api/generated/schema.ts` (via openapi-typescript).
- Pagination des tableaux harmonisée avec la vue Clients (customer accounts, invoices, taxes) et rappel ajouté dans `tasks/*.md`.
- Client Keycloak par défaut: `opencell-portal` (aligné sur l'API protégée).

## Fait
- Fil d'Ariane: désactivation des liens sur segments dynamiques pour Next.js 16 (corrige l'erreur runtime).
- Next.js 16 App Router scaffolding avec TypeScript strict et alias `@/`.
- MUI theming complet: AppShell, sidebar, top bar, dark mode, switch langue, recherche.
- Data layer: `openapi-typescript` + `openapi-fetch`, hooks React Query (TanStack Query) pour CRUD clients, comptes, factures, taxes.
- Forms codees avec React Hook Form + Zod, validations et mapping des erreurs API.
- Auth Keycloak + mode mock via MSW, plus providers globaux (React Query Devtools, theme, intl).
- Tests installes: Jest (sample hook test vert), Playwright e2e scaffolding, MSW handlers, README et `.env.example`.
- Playwright dashboard spec corrigee (sélecteur heading `Clients`) et campagne e2e verte (`npm run e2e`).
- Typecheck/lint/tests relances (`npm run typecheck`, `npm run lint`, `npm run test`, `npm run e2e`) => tout vert; `test-results/.last-run.json` mis à jour.
- Services BillingCycle → Country : hooks TanStack Query, formulaires React Hook Form + Zod, pages App Router et navigation intégrées.
- 2025-11-17 : Navigation édition vendeur — utilisation d'URL concrètes (`/sellers/${code}`) au lieu des segments dynamiques non résolus.
- Vérifications automatiques relancées (`npm run lint`, `npm run typecheck`, `npm run test`) — tout vert (31/10/2025).
- Synthèse OpenAPI automatique générée pour `tasks/*.md` via `scripts/generateTasks.mjs`.
- 2025-11-20 : Espace de travail Rated Transactions ajouté (hooks TanStack Query, liste paginée, tiroir de détail et flux d'annulation) + fixtures, handlers MSW et tests ciblés.
- 2025-11-21 : `npm run build` repasse au vert (suppression de `next/font` externe et matcher proxy statique pour Next 16).
- 2025-11-01 : Tests ciblés Invoicing (`npm run test -- --runTestsByPath features/invoicing/__tests__/useInvoicingOperations.test.tsx features/invoicing/__tests__/useInvoicingVersion.test.tsx`) — OK.
- 2025-11-21 : Pagination Invoicing* alignée sur `PagingAndFiltering` + fixtures mises à jour ; `npm run typecheck` ✅.
- 2025-11-22 : Tests ciblés AccountingCode & Mediation — `npm run test -- --runTestsByPath features/accounting-codes/__tests__/useAccountingCodes.test.tsx features/mediation/__tests__/useMediationOperations.test.tsx` ✅.
- 2025-11-22 : Services Wallet / Bundle Template / Business Offer Model finalisés (UI, traductions, tests unitaires ciblés `npm run test -- --runTestsByPath features/wallet/__tests__/useWalletApi.test.tsx features/bundle-templates/__tests__/useBundleTemplateMutations.test.tsx features/business-offer-models/__tests__/useBusinessOfferModelApi.test.tsx` ✅).
- 2025-11-23 : Tests ciblés BusinessProductModel / BusinessServiceModel / Channel — `npm run test -- --runTestsByPath features/business-product-models/__tests__/useBusinessProductModelApi.test.tsx features/business-service-models/__tests__/useBusinessServiceModelApi.test.tsx features/channels/__tests__/useChannelApi.test.tsx` ✅.
- 2025-11-23 : Services ChannelsAndSegments / ChargeTemplate / CounterTemplate finalisés (UI + hooks + tests ciblés `npm run test -- --runTestsByPath features/channels-and-segments/__tests__/useChannelsAndSegmentsApi.test.tsx features/charge-templates/__tests__/useChargeTemplateApi.test.tsx features/counter-templates/__tests__/useCounterTemplateApi.test.tsx` ) ✅.
- 2025-11-23 : Service OfferTemplateCategory livré (UI + hooks + tests ciblés `npm run test -- --runTestsByPath features/offer-template-categories/__tests__/useOfferTemplateCategoryApi.test.tsx` ) ✅.

- 2025-11-23 : API V2 AccountingCodeMapping (hooks TanStack Query, MSW, tests ciblés `npm run test -- --runTestsByPath features/accounting-code-mappings/__tests__/useAccountingCodeMappingMutations.test.tsx` ) ✅.

- 2025-11-23 : Tests ciblés DiscountPlanItem / DiscountPlan — `npm run test -- --runTestsByPath features/discount-plan-items/__tests__/useDiscountPlanItemApi.test.tsx features/discount-plans/__tests__/useDiscountPlanApi.test.tsx` ✅.
- 2025-11-23 : AccountingPeriods V2 — `npm run lint`, `npm run typecheck`, `npm run test` ❌ (échecs existants : lint sur `scripts/generateTasks.mjs`, typecheck/tests sur modules invoicing historiques).
- 2025-11-23 : Vérifs `npm run lint` ❌ (scripts generateTasks/generateViewTasks), `npm run typecheck` ❌ (erreurs OpenAPI historiques), test ciblé AccountOperation `npm run test -- --runTestsByPath features/account-operations/__tests__/useAccountOperations.test.tsx` ✅.
- 2025-11-23 : Vérifs ciblées AgedReceivables — `npm run lint` ❌ (avis existants), `npm run typecheck` ❌ (erreurs historiques), `npm run test -- --runTestsByPath features/aged-receivables/__tests__/useAgedReceivables.test.tsx` ✅, `npm run e2e -- tests/e2e/aged-receivables.spec.ts --project=chromium` ⚠️ (navigateur Playwright non installé).
- 2025-11-23 : Re-run ciblé AgedReceivables — `npm run test -- --runTestsByPath features/aged-receivables/__tests__/useAgedReceivables.test.tsx` ✅.
- 2025-11-23 : Tests ciblés AllowedParents — `npm run test -- --runTestsByPath features/allowed-parents/__tests__/useAllowedParents.test.tsx` ✅.
- 2025-11-23 : Tests ciblés articleMapping — `npm run test -- --runTestsByPath features/article-mappings/__tests__/useArticleMapping.test.tsx` ✅.
- 2025-11-23 : API V2 articleMappingLine — hooks TanStack Query, mutations et fixtures ; test ciblé `npm run test -- --runTestsByPath features/article-mapping-lines/__tests__/useArticleMappingLineApi.test.tsx` ✅.
- 2025-11-24 : API V2 AuxiliaryCode — hook TanStack Query, fixtures MSW et test ciblé `npm run test -- --runTestsByPath features/auxiliary-codes/__tests__/useAuxiliaryAccount.test.tsx` ✅.
- 2025-11-24 : API V2 Collection Plan — hooks TanStack Query, mutations et test ciblé `npm run test -- --runTestsByPath features/collection-plans/__tests__/collectionPlanMutations.test.tsx` ✅.
- 2025-11-24 : Tests ciblés Collection Plan Status — `npm run test -- --runTestsByPath features/collection-plan-statuses/__tests__/useCollectionPlanStatusMutations.test.tsx` ✅.
- 2025-11-24 : Hooks CollectionPlan V2 (politiques disponibles, mass switch) + test ciblé `npm run test -- --runTestsByPath features/collection-plans/__tests__/collectionPlanMutations.test.tsx` ✅.

## A faire rapidement
- [ ] Résoudre `npm run lint`: erreurs `no-irregular-whitespace` et `no-useless-escape` dans `scripts/generateTasks.mjs` (retesté le 23/11/2025, toujours présent).
- [x] Corriger `npm run typecheck`: `createNextIntlPlugin` n'accepte pas les props `locales/defaultLocale`; pointer vers `./i18n/request.ts` ou reutiliser `lib/i18n/config` pour fournir la config.
- [x] Remplacer les imports relatifs dans `i18n/request.ts` par l'alias `@/` et retirer `/* eslint-disable no-restricted-imports */`.
- [x] Relancer Playwright (`npm run mock` puis `npm run e2e`) une fois l'intl corrige; `test-results/.last-run.json` indique un echec actuel.
- [x] Repasser `npm run typecheck`, `npm run lint`, `npm run test`, `npm run e2e` et archiver les resultats lorsque tout est vert.
- [x] Nettoyer ou ignorer `test-results/` avant commit final (actuellement contient une capture d'echec).
- [x] Migrer la convention `middleware` -> `proxy` (warning Next.js pendant `npm run e2e`).
- [x] Prendre en compte le fichier ERROR.txt lors de l'exécution de `npm run dev` (trace navigateur)
- [x] L'utilisateur doit s'authentifier via Keycloak avant d'accéder à l'application (utilise keycloak.js ou autre)
- [x] Vérifications automatiques du 2025-10-31 : `npm run lint`, `npm run typecheck`, `npm run test` tous passés.
- [ ] `npm run build` échoue (TypeScript) : `AccountingArticleDto['languageDescriptions']` manquant dans `features/accounting-articles/api.ts`.

## Tâches services à implémenter
- [x] API V2 AccountingArticle — cf. `tasks/v2/TASK001.md` (tests: `npm run lint` ⚠️, `npm run test -- --runTestsByPath features/accounting-articles/__tests__/useAccountingArticles.test.tsx` ✅)
- [x] API V2 AccountingCodeMapping — cf. `tasks/v2/TASK002.md`
- [x] API V2 AccountingPeriods — cf. `tasks/v2/TASK003.md`
- [x] API V2 AccountOperation — cf. `tasks/v2/TASK004.md`
- [x] API V2 AgedReceivables — cf. `tasks/v2/TASK005.md`
- [x] API V2 AllowedParents — cf. `tasks/v2/TASK006.md`
- [x] API V2 articleMapping — cf. `tasks/v2/TASK007.md`
- [ ] API V2 articleMappingLine — cf. `tasks/v2/TASK008.md`
- [x] API V2 AuxiliaryCode — cf. `tasks/v2/TASK009.md`
- [ ] API V2 BillingRule — cf. `tasks/v2/TASK010.md`
- [ ] API V2 CDR — cf. `tasks/v2/TASK011.md`
- [ ] API V2 Collection Plan — cf. `tasks/v2/TASK012.md`
- [ ] API V2 Collection Plan Status — cf. `tasks/v2/TASK013.md`
- [x] API V2 CollectionPlan — cf. `tasks/v2/TASK014.md`
- [ ] API V2 communication — cf. `tasks/v2/TASK015.md`
- [ ] API V2 contact — cf. `tasks/v2/TASK016.md`
- [ ] API V2 contact_category — cf. `tasks/v2/TASK017.md`
- [ ] API V2 CounterInstance — cf. `tasks/v2/TASK018.md`
- [ ] API V2 Create — cf. `tasks/v2/TASK019.md`
- [ ] API V2 Credit — cf. `tasks/v2/TASK020.md`
- [ ] API V2 crm — cf. `tasks/v2/TASK021.md`
- [ ] API V2 Customer Account — cf. `tasks/v2/TASK022.md`
- [ ] API V2 Discount Plan instances — cf. `tasks/v2/TASK023.md`
- [ ] API V2 Discount Plans — cf. `tasks/v2/TASK024.md`
- [ ] API V2 Document — cf. `tasks/v2/TASK025.md`
- [ ] API V2 Dunning — cf. `tasks/v2/TASK026.md`
- [ ] API V2 Dunning Agent — cf. `tasks/v2/TASK027.md`
- [ ] API V2 DunningAction — cf. `tasks/v2/TASK028.md`
- [ ] API V2 DunningTemplate — cf. `tasks/v2/TASK029.md`
- [ ] API V2 EDR — cf. `tasks/v2/TASK030.md`
- [ ] API V2 email — cf. `tasks/v2/TASK031.md`
- [ ] API V2 email_template — cf. `tasks/v2/TASK032.md`
- [ ] API V2 export data — cf. `tasks/v2/TASK033.md`
- [ ] API V2 Generic — cf. `tasks/v2/TASK034.md`
- [ ] API V2 Global settings — cf. `tasks/v2/TASK035.md`
- [ ] API V2 Import — cf. `tasks/v2/TASK036.md`
- [ ] API V2 Instantiate — cf. `tasks/v2/TASK037.md`
- [ ] API V2 InvoiceLines — cf. `tasks/v2/TASK038.md`
- [ ] API V2 Invoices — cf. `tasks/v2/TASK039.md`
- [ ] API V2 InvoiceValidationRules — cf. `tasks/v2/TASK040.md`
- [ ] API V2 Invoicing — cf. `tasks/v2/TASK041.md`
- [ ] API V2 Media — cf. `tasks/v2/TASK042.md`
- [ ] API V2 Mediation — cf. `tasks/v2/TASK043.md`
- [ ] API V2 Mediation Settings — cf. `tasks/v2/TASK044.md`
- [ ] API V2 Move — cf. `tasks/v2/TASK045.md`
- [ ] API V2 NotImplementedResource — cf. `tasks/v2/TASK046.md`
- [ ] API V2 Open Orders — cf. `tasks/v2/TASK047.md`
- [ ] API V2 Open Orders Quote — cf. `tasks/v2/TASK048.md`
- [ ] API V2 Open Orders Templates — cf. `tasks/v2/TASK049.md`
- [ ] API V2 Order-items — cf. `tasks/v2/TASK050.md`
- [ ] API V2 Orders — cf. `tasks/v2/TASK051.md`
- [ ] API V2 PaymentPlan — cf. `tasks/v2/TASK052.md`
- [ ] API V2 PolicyRule — cf. `tasks/v2/TASK053.md`
- [ ] API V2 Post — cf. `tasks/v2/TASK054.md`
- [ ] API V2 Price Plan — cf. `tasks/v2/TASK055.md`
- [ ] API V2 Price Plan Matrix — cf. `tasks/v2/TASK056.md`
- [ ] API V2 PricePlanMatrixLine — cf. `tasks/v2/TASK057.md`
- [ ] API V2 Products — cf. `tasks/v2/TASK058.md`
- [ ] API V2 Put — cf. `tasks/v2/TASK059.md`
- [ ] API V2 QueryScheduler — cf. `tasks/v2/TASK060.md`
- [ ] API V2 Quote management — cf. `tasks/v2/TASK061.md`
- [ ] API V2 RatedTransaction — cf. `tasks/v2/TASK062.md`
- [ ] API V2 Refund — cf. `tasks/v2/TASK063.md`
- [ ] API V2 ReportQuery — cf. `tasks/v2/TASK064.md`
- [ ] API V2 Sans tag — cf. `tasks/v2/TASK065.md`
- [ ] API V2 SecurityDeposit — cf. `tasks/v2/TASK066.md`
- [ ] API V2 sms — cf. `tasks/v2/TASK067.md`
- [ ] API V2 sms_template — cf. `tasks/v2/TASK068.md`
- [ ] API V2 Subscription — cf. `tasks/v2/TASK069.md`
- [ ] API V2 Transfer — cf. `tasks/v2/TASK070.md`
- [ ] API V2 TrialBalance — cf. `tasks/v2/TASK071.md`

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
- `npm run lint` (exécution courante) → OK après alignement du proxy et de `env.apiBaseUrl` sur https://siventeappvval2.mediapost.fr:6443 (mode non mock par défaut).
- `npm run lint` (exécution courante) → OK après ajout du préfixe `/opencell` côté proxy et valeur par défaut `API_BASE_URL`.
- `npm test -- --runTestsByPath features/customers/__tests__/useCustomersList.test.tsx` (exécution courante) → OK.

# Prompt — Build a Production‑Ready Frontend from OpenAPI (Next.js + MUI)

## Role

You are a senior full‑stack engineer and solution architect. You will generate a complete, production‑ready frontend application **using Next.js (App Router) + TypeScript + MUI**, driven strictly by an **OpenAPI 3.x spec** and a short **business description** file.

## Inputs (attached)

1. `opencell.json` — OpenAPI 3.x specification for the REST API.
2. `DESC.txt` — short product description: target users, main use cases, priorities, non‑functional constraints.

> Treat the OpenAPI spec as the **single source of truth** for endpoints, parameters, request/response schemas, and error models.

## High‑Level Objectives

* Scaffold a **Next.js App Router** project in **TypeScript**, styled with **MUI** and responsive by default.
* Auto‑generate a strongly‑typed API client and models from `opencell.json`.
* Build end‑to‑end UI flows for the key entities and journeys implied by the spec (dashboard, list/detail, create/edit, authentication if present, etc.).
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
* **Fil d'Ariane** : le composant `components/layout/AppBreadcrumbs` construit les segments à partir du `pathname` courant.
  * Déclarez chaque entrée navigable dans `NAV_SECTIONS` (`lib/config/constants.ts`) avec sa clé de traduction (`label`).
  * Ajoutez les messages correspondants dans `lib/i18n/messages/{locale}.json` (clés `navigation.*` ou dédiées).
  * Les segments "new" utilisent automatiquement `breadcrumbs.new`; créez d'autres clés spécifiques si nécessaire.
  * Pour des segments dynamiques (ID, slug), préférez exposer un titre traduit via la page/detail et remonter l'information au layout si le fil d'Ariane doit être enrichi.
* **Data layer**: generate **per-operation typed hooks** (e.g., `useListInvoices`, `useCreateInvoice`) wrapping TanStack Query. Include key factories, pagination helpers, and optimistic updates where safe.
* **Error handling**: centralize API error normalization; surface MUI `Alert`/`Snackbar`; map OpenAPI error schemas to field errors on forms.
* **Auth**: If the spec defines auth (e.g., OAuth2, bearer), implement a minimal flow: token storage, refresh, axios/fetch interceptors, protected routes, and a `withAuth` layout.
* **Accessibility**: meet WCAG AA; use Radix primitives only if needed; ensure focus management, ARIA, keyboard nav, and form errors announced.

## Features to Implement (derive exact entities from OpenAPI)

1. **Navigation & Layout**

   * AppBar with brand, search, language switch (EN/FR), theme toggle, user menu.
   * Left sidebar with active route highlighting.
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
6. **Business-specific flows** (e.g., validation workflows, approvals, billing cycles, etc.).

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
* Empty/error states with friendly copy.

## Assumptions & Gaps

* If the OpenAPI doc lacks examples or has ambiguities, **infer sensible defaults** and clearly document them in `README.md` (section: “Assumptions”).
* Prefer **conservative security** defaults: no secret in client bundle; avoid Server Actions for anything that needs credentials from the client.

## Output Format

* Provide the **proposed file tree**.
* Then include the **key source files** inline (one block per file), sufficient to run `npm install && npm run dev` after placing `opencell.json`.
* Include the `README.md` content and the `api:gen` configuration.

---

**Begin now. Ask for clarifications only if a critical blocker is found in `opencell.json`. Otherwise proceed with best-effort defaults.**
