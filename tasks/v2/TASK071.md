# TASK071 — API V2 TrialBalance

## Contexte
Le domaine « TrialBalance » (tag OpenAPI `TrialBalance`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

## Objectifs
- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).
- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.
- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.
- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).

## Notes
- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.
- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/standardReports/trialBalances` | This endpoint allows to get trial balance according to the given filters | getTrialBalances |

#### GET /standardReports/trialBalances

- Résumé: This endpoint allows to get trial balance according to the given filters
- OperationId: getTrialBalances
- Description: Get trial balance report
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `period` (QUERY, optionnel) — string : The trial balance report period
  - Valeurs autorisées: CURRENT_MONTH, LAST_MONTH, CURRENT_QUARTER, LAST_QUARTER, CURRENT_YEAR
  - Contraintes: défaut: "CURRENT_QUARTER"
- `codeOrLabel` (QUERY, optionnel) — string : code or label
- `startDate` (QUERY, optionnel) — string (date-time) : The trial balance report start date
- `endDate` (QUERY, optionnel) — string (date-time) : The trial balance report end date
- `sortBy` (QUERY, optionnel) — string : The sorting by field
- `sortOrder` (QUERY, optionnel) — string : The sort order
  - Valeurs autorisées: DESCENDING, ASCENDING
- `offset` (QUERY, optionnel) — integer (int64) : The list offset
  - Contraintes: défaut: 0
- `limit` (QUERY, optionnel) — integer (int64) : The record list size
  - Contraintes: défaut: 100
- Réponses:
  - 200: return trial balance report
  - 204: Empty trial balance report

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
