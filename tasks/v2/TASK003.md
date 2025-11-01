# TASK003 — API V2 AccountingPeriods

## Contexte
Le domaine « AccountingPeriods » (tag OpenAPI `AccountingPeriods`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/accountingPeriodManagement/accountingPeriods` | Create a new AccountingPeriod | create |
| PUT | `/accountingPeriodManagement/accountingPeriods/{fiscalYear}` | update an new AccountingPeriod | update |
| PUT | `/accountingPeriodManagement/accountingPeriods/{fiscalYear}/{status}` | update regularUsers status | updateStatus |
| PUT | `/accountingPeriodManagement/accountingPeriods/{fiscalYear}/subAccountingPeriods/{number}/allUsersStatus/{status}` | update allUsers status | updateAllUserStatus |
| PUT | `/accountingPeriodManagement/accountingPeriods/{fiscalYear}/subAccountingPeriods/{number}/regularUsersStatus/{status}` | update regularUsers status | updateRegularUserStatus |
| POST | `/accountingPeriodManagement/accountingPeriods/generateNextAP` | Generate next AccountingPeriod | generateNextAP |

#### POST /accountingPeriodManagement/accountingPeriods

- Résumé: Create a new AccountingPeriod
- OperationId: create
- Description: Create a new AccountingPeriod
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: AccountingPeriod (AccountingPeriod)
- Réponses:
  - 200: the AccountingPeriod is successfully created
  - 400: bad request when AccountingPeriod information contains an error

#### PUT /accountingPeriodManagement/accountingPeriods/{fiscalYear}

- Résumé: update an new AccountingPeriod
- OperationId: update
- Description: Update an AccountingPeriod
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `fiscalYear` (PATH, obligatoire) — string : fiscalYear of the Invoice
- Corps de requête:
  - obligatoire
  - application/json: AccountingPeriod (AccountingPeriod)
- Réponses:
  - 200: the AccountingPeriod is successfully updated
  - 400: bad request, AccountingPeriod informations contains an error
  - 404: the AccountingPeriod does not exist

#### PUT /accountingPeriodManagement/accountingPeriods/{fiscalYear}/{status}

- Résumé: update regularUsers status
- OperationId: updateStatus
- Description: Update a SubaccountingPeriod
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `fiscalYear` (PATH, obligatoire) — string : fiscalYear of the Invoice
- `status` (PATH, obligatoire) — string : status
- Réponses:
  - 200: regularUsers status is successfully updated
  - 404: target entity does not exist

#### PUT /accountingPeriodManagement/accountingPeriods/{fiscalYear}/subAccountingPeriods/{number}/allUsersStatus/{status}

- Résumé: update allUsers status
- OperationId: updateAllUserStatus
- Description: Update a SubaccountingPeriod
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `fiscalYear` (PATH, obligatoire) — string : fiscalYear of the Invoice
- `number` (PATH, obligatoire) — string : subaccounting period number
- `status` (PATH, obligatoire) — string : status
- `reason` (QUERY, optionnel) — string : reason of reopening sub-accounting period
- Réponses:
  - 200: allUsers status is successfully updated
  - 404: target entity does not exist

#### PUT /accountingPeriodManagement/accountingPeriods/{fiscalYear}/subAccountingPeriods/{number}/regularUsersStatus/{status}

- Résumé: update regularUsers status
- OperationId: updateRegularUserStatus
- Description: Update a SubaccountingPeriod
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `fiscalYear` (PATH, obligatoire) — string : fiscalYear of the Invoice
- `number` (PATH, obligatoire) — string : subaccounting period number
- `status` (PATH, obligatoire) — string : status
- `reason` (QUERY, optionnel) — string : reason of reopening sub-accounting period
- Réponses:
  - 200: regularUsers status is successfully updated
  - 404: target entity does not exist

#### POST /accountingPeriodManagement/accountingPeriods/generateNextAP

- Résumé: Generate next AccountingPeriod
- OperationId: generateNextAP
- Description: Generate next AccountingPeriod
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: the next AccountingPeriod is successfully generated
  - 400: bad request: AccountingPeriod information contains an error

## Schémas principaux

### AccountingPeriod
Type: object
Propriétés:
- **useSubAccountingPeriods**: boolean — Indicate if use SubAccountingPeriods
- **fiscalYear**: string — Indicate the fiscal year
- **subAccountingPeriodType**: string — Indicate the SubAccountingPeriod type
- **regularUserLockOption**: string — Indicate the RegularUserLockOption
- **customLockNumberDays**: integer (int32) — Indicate the CustomLockNumberDays
- **customLockOption**: string — Indicate the CustomLockOption
- **forceCustomDay**: integer (int32) — Indicate the ForceCustomDay
- **forceOption**: string — Indicate the ForceOption
- **accountingOperationAction**: string — Indicate the AccountingOperationAction
- **startDate**: string (date-time) — Indicate the start date
- **endDate**: string (date-time) — Indicate the end date
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
