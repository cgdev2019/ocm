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
- [x] Prendre en compte le fichier ERROR.txt lors de l'exécution de `npm run dev` (nav locale & logo 404 corrigés)

## Notes
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
