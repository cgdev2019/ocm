# TASK038 — Service RatedTransaction

## Contexte
Le service « RatedTransaction » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%RatedTransaction
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/billing/ratedTransaction/cancelRatedTransactions` |  Call service to cancel one or many opened Rated Transactions according to the passed query, cancel an opened Rated Transaction is to set status to CANCELED |     POST_RatedTransaction_cancelRatedTransactions |
| GET | `/api/rest/billing/ratedTransaction/list` |  Get a list of rated transactions  |     GET_RatedTransaction_list |
| POST | `/api/rest/billing/ratedTransaction/list` |  Get a list of rated transactions  |     POST_RatedTransaction_list |
| GET | `/api/rest/billing/ratedTransaction/listGetAll` |  List ratedTransactions matching a given criteria  |     GET_RatedTransaction_listGetAll |
| GET | `/api/rest/billing/ratedTransaction/version` | Get version of application | index_42 |

#### POST /api/rest/billing/ratedTransaction/cancelRatedTransactions

- Résumé:  Call service to cancel one or many opened Rated Transactions according to the passed query, cancel an opened Rated Transaction is to set status to CANCELED
- OperationId:     POST_RatedTransaction_cancelRatedTransactions
- Description: Call service to cancel one or many opened Rated Transactions according to the passed query, cancel an opened Rated Transaction is to set status to CANCELED.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - 403: Only rated transactions in statuses OPEN, REJECTED, CANCELED can be cancelled
  - default: ActionStatus with SUCESS or FAIL status inside
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/billing/ratedTransaction/list

- Résumé:  Get a list of rated transactions 
- OperationId:     GET_RatedTransaction_list
- Description: Get a list of rated transactions
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `query` (QUERY, optionnel) — string
- `fields` (QUERY, optionnel) — string
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "code"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- `returnUserAccountCode` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- Réponses:
  - default: A list of Rated transactions
    - application/json: RatedTransactionListResponseDto
    - application/xml: RatedTransactionListResponseDto

#### POST /api/rest/billing/ratedTransaction/list

- Résumé:  Get a list of rated transactions 
- OperationId:     POST_RatedTransaction_list
- Description: Get a list of rated transactions
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: A list of Rated transactions
    - application/json: RatedTransactionListResponseDto
    - application/xml: RatedTransactionListResponseDto

#### GET /api/rest/billing/ratedTransaction/listGetAll

- Résumé:  List ratedTransactions matching a given criteria 
- OperationId:     GET_RatedTransaction_listGetAll
- Description: List ratedTransactions matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of ratedTransactions
    - application/json: RatedTransactionListResponseDto
    - application/xml: RatedTransactionListResponseDto

#### GET /api/rest/billing/ratedTransaction/version

- Résumé: Get version of application
- OperationId: index_42
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### PagingAndFiltering
Type: object
Propriétés:
- **fullTextFilter**: string — Full text search filter. Mutually exclusive with filters attribute. fullTextFilter has priority
- **filters**: object — Search filters (key = Filter key, value = search pattern or value).
- **fields**: string — Data retrieval options/fieldnames separated by a comma
- **offset**: integer (int32) — Pagination - from record number
- **limit**: integer (int32) — Pagination - number of items to retrieve
- **sortBy**: string — Sorting - field to sort by - a field from a main entity being searched. See Data model for a list of fields
- **sortOrder**: string — Sorting - sort ordee (Valeurs: ASCENDING, DESCENDING)
- **multiSortOrder**: string
- **totalNumberOfRecords**: integer (int32)
- **loadReferenceDepth**: integer (int32)

### ActionStatus
Type: object
Champs obligatoires: message, status
Propriétés:
- **status**: string — Tells whether the instance of this status object is ok or not (Valeurs: SUCCESS, FAIL, WARNING)
- **errorCode**: ApiErrorCodeEnum
- **message**: string — A detailed error message if applicable, can contain the entity id that was created
- **entityId**: integer (int64) — The entity identifier after creation of an entity
- **entityCode**: string — The entity code after creation of an entity
- **nrAffected**: integer (int32) — Number of items/records affected by the action

### ApiErrorCodeEnum
error code
Type: object

### RatedTransactionListResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **ratedTransactions**: Array<RatedTransactionDto>

### RatedTransactionDto
List the rated transactions
Type: object
Champs obligatoires: amountTax, amountWithTax, amountWithoutTax, code, usageDate
Propriétés:
- **usageDate**: string (date-time) — The usage date
- **unitAmountWithoutTax**: number — The unit amount without tax
- **unitAmountWithTax**: number — The unit amount with tax
- **unitAmountTax**: number — The unit amount tax
- **quantity**: number — The quantity
- **inputQuantity**: number — The quantity
- **rawAmountWithoutTax**: number — The raw amount without tax
- **rawAmountWithTax**: number — The raw amount with tax
- **amountWithoutTax**: number — The amount without tax
- **amountWithTax**: number — The amount with tax
- **amountTax**: number — The amount tax
- **code**: string — The code
- **status**: string — The status (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED, PROCESSED)
- **description**: string — The description
- **unityDescription**: string — The unity description
- **priceplanCode**: string — The price plan code
- **doNotTriggerInvoicing**: boolean — indicate if we don't want to trigger invoicing (Contraintes: défaut: false)
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **parameter1**: string — used to set more onformations in case of "DETAILLED" invoice
- **parameter2**: string — used to set more onformations in case of "DETAILLED" invoice
- **parameter3**: string — used to set more onformations in case of "DETAILLED" invoice
- **userAccountCode**: string — The user account code
- **taxCode**: string — Tax applied - code
- **taxPercent**: number — Tax percent
- **invoiceSubCategoryCode**: string — Invoice sub category code
- **sellerCode**: string — Seller code
- **billingAccountCode**: string — BillingAccount code
- **taxClassCode**: string — Charge tax class code
- **inputUnitOfMeasure**: string — The input unit of measure
- **ratingUnitOfMeasure**: string — The rating unit of measure
- **sortIndex**: integer (int32) — Sorting index

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
