# TASK041 — API V2 Invoicing

## Contexte
Le domaine « Invoicing » (tag OpenAPI `Invoicing`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| PUT | `/billing/invoicing/{billingRunId}/advanceStatus` | Advance the billing run status | advanceStatus |
| POST | `/billing/invoicing/{billingRunId}/cancelBillingRun` | cancel the billing run | cancelBillingRun |
| POST | `/billing/invoicing/exceptionalBillingRun` | Create exceptional billing run | createExceptionalBillingRuns |

#### PUT /billing/invoicing/{billingRunId}/advanceStatus

- Résumé: Advance the billing run status
- OperationId: advanceStatus
- Description: Advance the billing run status
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `billingRunId` (PATH, obligatoire) — integer (int64)
- `executeInvoicingJob` (QUERY, optionnel) — boolean
- Réponses:
  - 200: Status changed successfully
  - 409: The status should be either NEW, INVOICE_LINES_CREATED , DRAFT_INVOICES , or REJECTED

#### POST /billing/invoicing/{billingRunId}/cancelBillingRun

- Résumé: cancel the billing run
- OperationId: cancelBillingRun
- Description: Cancel the billing run
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `billingRunId` (PATH, obligatoire) — integer (int64)
- Réponses:
  - 200: The billing canceled successfully
  - 404: The billing run does not exists
  - 409: The billing run cannot be cancelled

#### POST /billing/invoicing/exceptionalBillingRun

- Résumé: Create exceptional billing run
- OperationId: createExceptionalBillingRuns
- Description: Create exceptional billing run
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: ExceptionalBillingRun (ExceptionalBillingRun)
- Réponses:
  - 201: exceptional billing run successfully created
  - 304: error when creating exceptional billing run

## Schémas principaux

### ExceptionalBillingRun
Type: object
Propriétés:
- **billingRunTypeEnum**: string — Billing run process type (Valeurs: AUTOMATIC, MANUAL, FULL_AUTOMATIC)
- **rejectAutoAction**: string — reject auto action (Valeurs: CANCEL, MOVE, MANUAL_ACTION, AUTOMATIC_VALIDATION)
- **suspectAutoAction**: string — Suspect auto action (Valeurs: CANCEL, MOVE, MANUAL_ACTION, AUTOMATIC_VALIDATION)
- **filters**: object — Filters on RT
- **collectionDate**: string (date-time) — Billing run collection date
- **invoiceDate**: string (date-time) — Invoice date
- **invoiceType**: string
- **customFields**: CustomFieldsDto
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **computeDatesAtValidation**: boolean — Decide whether or not dates should be recomputed at invoice validation
- **skipValidationScript**: boolean — Skip validation script

### CustomFieldsDto
custom field associated the contact category
Type: object
Propriétés:
- **customField**: Array<CustomFieldDto>
- **inheritedCustomField**: Array<CustomFieldDto>
- **empty**: boolean

### CustomFieldDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **fieldType**: string (Valeurs: STRING, DATE, LONG, DOUBLE, LIST, CHECKBOX_LIST, ENTITY, TEXT_AREA, CHILD_ENTITY, MULTI_VALUE, BOOLEAN, CUSTOM_TABLE_WRAPPER, URL)
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **valueDate**: string (date-time)
- **valuePeriodStartDate**: string (date-time)
- **valuePeriodEndDate**: string (date-time)
- **valuePeriodPriority**: integer (int32)
- **stringValue**: string
- **dateValue**: string (date-time)
- **longValue**: integer (int64)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **mapValue**: object
- **entityReferenceValue**: EntityReferenceDto
- **valueConverted**: object
- **indexType**: string (Valeurs: STORE_ONLY, INDEX, INDEX_NOT_ANALYZE)
- **fileValue**: string
- **formattedValue**: CustomFieldFormattedValueDto
- **urlReferenceValue**: UrlReferenceDto
- **guiPosition**: string
- **customTableCode**: string
- **dataFilter**: string
- **fields**: string
- **empty**: boolean
- **value**: Array<CustomFieldValueDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CustomFieldValueDto
Type: object
Propriétés:
- **value**: object
- **empty**: boolean

### EntityReferenceDto
Type: object
Propriétés:
- **classname**: string
- **code**: string
- **id**: integer (int64)
- **empty**: boolean

### CustomFieldFormattedValueDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **singleValue**: string
- **listValue**: Array<string>
- **mapValue**: object

### UrlReferenceDto
Type: object
Propriétés:
- **url**: string
- **regexp**: string
- **label**: string
- **length**: integer (int32)
- **empty**: boolean

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
