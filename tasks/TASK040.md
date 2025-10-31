# TASK040 — Service Wallet

## Contexte
Le service « Wallet » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Wallet
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/billing/wallet/balance/current` |  Gets the current (open or reserved) wallet balance amount at a given level and date period. In wallet operation, status='OPEN OR RESERVED'.   |     POST_Wallet_balance_current |
| POST | `/api/rest/billing/wallet/balance/open` |  Gets the open wallet balance amount at a given level and date period. In wallet operation, status='OPEN'.   |     POST_Wallet_balance_open |
| POST | `/api/rest/billing/wallet/balance/reserved` |  Gets the reserved wallet balance amount at a given level and date period. In wallet operation, status='RESERVED'.   |     POST_Wallet_balance_reserved |
| POST | `/api/rest/billing/wallet/operation` |  Create a new operation   |     POST_Wallet_operation |
| POST | `/api/rest/billing/wallet/operation/find` |  Search for an operation with a given (example) code. Deprecated in v.4.7.2   |     POST_Wallet_operation_find |
| GET | `/api/rest/billing/wallet/operation/list` |  List wallet operations matching a given criteria   |     GET_Wallet_operation_list |
| POST | `/api/rest/billing/wallet/operation/list` |  List wallet operations matching a given criteria   |     POST_Wallet_operation_list |
| GET | `/api/rest/billing/wallet/operation/listGetAll` |  List wallet operations matching a given criteria  |     GET_Wallet_operation_listGetAll |
| POST | `/api/rest/billing/wallet/reservation` |  Create reservation for a given offer, user account, seller, provider and date.   |     POST_Wallet_reservation |
| PUT | `/api/rest/billing/wallet/reservation` |  Updates a reservation. Same as create we just need to pass the id of the reservation.   |     PUT_Wallet_reservation |
| DELETE | `/api/rest/billing/wallet/reservation/{reservationId}` |  Cancel a reservation given an id.   |     DELETE_Wallet_reservation_{reservationId:[0-9]+} |
| POST | `/api/rest/billing/wallet/reservation/confirm` |  Confirm a reservation given an id.   |     POST_Wallet_reservation_confirm |
| GET | `/api/rest/billing/wallet/template` |  Search for a wallet template with a given code   |     GET_Wallet_template |
| POST | `/api/rest/billing/wallet/template` |  Create a new wallet template   |     POST_Wallet_template |
| PUT | `/api/rest/billing/wallet/template` |  Update an existing wallet template   |     PUT_Wallet_template |
| DELETE | `/api/rest/billing/wallet/template/{walletTemplateCode}` |  Remove an existing wallet template with a given code   |     DELETE_Wallet_template_{walletTemplateCode} |
| POST | `/api/rest/billing/wallet/template/createOrUpdate` |  Create new or update an existing wallet template   |     POST_Wallet_template_createOrUpdate |
| GET | `/api/rest/billing/wallet/version` | Get version of application | index_44 |

#### POST /api/rest/billing/wallet/balance/current

- Résumé:  Gets the current (open or reserved) wallet balance amount at a given level and date period. In wallet operation, status='OPEN OR RESERVED'.  
- OperationId:     POST_Wallet_balance_current
- Description: Gets the current (open or reserved) wallet balance amount at a given level and date period. In wallet operation, status='OPEN OR RESERVED'.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletBalanceDto
  - application/xml: WalletBalanceDto
- Réponses:
  - default: Request processing status and balance amounts
    - application/json: WalletBalanceResponseDto
    - application/xml: WalletBalanceResponseDto

#### POST /api/rest/billing/wallet/balance/open

- Résumé:  Gets the open wallet balance amount at a given level and date period. In wallet operation, status='OPEN'.  
- OperationId:     POST_Wallet_balance_open
- Description: Gets the open wallet balance amount at a given level and date period. In wallet operation, status='OPEN'.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletBalanceDto
  - application/xml: WalletBalanceDto
- Réponses:
  - default: Request processing status and balance amounts status
    - application/json: WalletBalanceResponseDto
    - application/xml: WalletBalanceResponseDto

#### POST /api/rest/billing/wallet/balance/reserved

- Résumé:  Gets the reserved wallet balance amount at a given level and date period. In wallet operation, status='RESERVED'.  
- OperationId:     POST_Wallet_balance_reserved
- Description: Gets the reserved wallet balance amount at a given level and date period. In wallet operation, status='RESERVED'.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletBalanceDto
  - application/xml: WalletBalanceDto
- Réponses:
  - default: Request processing status and balance amounts
    - application/json: WalletBalanceResponseDto
    - application/xml: WalletBalanceResponseDto

#### POST /api/rest/billing/wallet/operation

- Résumé:  Create a new operation  
- OperationId:     POST_Wallet_operation
- Description: Create a new operation
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletOperationDto
  - application/xml: WalletOperationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/wallet/operation/find

- Résumé:  Search for an operation with a given (example) code. Deprecated in v.4.7.2  
- OperationId:     POST_Wallet_operation_find
- Description: Search for an operation with a given (example) code. Deprecated in v.4.7.2
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "id"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- Corps de requête:
  - optionnel
  - application/json: FindWalletOperationsDto
  - application/xml: FindWalletOperationsDto
- Réponses:
  - default: List of wallet operations
    - application/json: FindWalletOperationsResponseDto
    - application/xml: FindWalletOperationsResponseDto

#### GET /api/rest/billing/wallet/operation/list

- Résumé:  List wallet operations matching a given criteria  
- OperationId:     GET_Wallet_operation_list
- Description: List wallet operations matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `query` (QUERY, optionnel) — string
- `fields` (QUERY, optionnel) — string
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "id"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- `withRTs` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- Réponses:
  - default: List of wallet operations
    - application/json: FindWalletOperationsResponseDto
    - application/xml: FindWalletOperationsResponseDto

#### POST /api/rest/billing/wallet/operation/list

- Résumé:  List wallet operations matching a given criteria  
- OperationId:     POST_Wallet_operation_list
- Description: List wallet operations matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `withRTs` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of wallet operations
    - application/json: FindWalletOperationsResponseDto
    - application/xml: FindWalletOperationsResponseDto

#### GET /api/rest/billing/wallet/operation/listGetAll

- Résumé:  List wallet operations matching a given criteria 
- OperationId:     GET_Wallet_operation_listGetAll
- Description: List wallet operations matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `withRTs` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- Réponses:
  - default: List of wallet operations
    - application/json: FindWalletOperationsResponseDto
    - application/xml: FindWalletOperationsResponseDto

#### POST /api/rest/billing/wallet/reservation

- Résumé:  Create reservation for a given offer, user account, seller, provider and date.  
- OperationId:     POST_Wallet_reservation
- Description: Create reservation for a given offer, user account, seller, provider and date.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletReservationDto
  - application/xml: WalletReservationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/wallet/reservation

- Résumé:  Updates a reservation. Same as create we just need to pass the id of the reservation.  
- OperationId:     PUT_Wallet_reservation
- Description: Updates a reservation. Same as create we just need to pass the id of the reservation.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletReservationDto
  - application/xml: WalletReservationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/billing/wallet/reservation/{reservationId}

- Résumé:  Cancel a reservation given an id.  
- OperationId:     DELETE_Wallet_reservation_{reservationId:[0-9]+}
- Description: Cancel a reservation given an id.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `reservationId` (PATH, obligatoire) — integer (int64)
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/wallet/reservation/confirm

- Résumé:  Confirm a reservation given an id.  
- OperationId:     POST_Wallet_reservation_confirm
- Description: Confirm a reservation given an id.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletReservationDto
  - application/xml: WalletReservationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/billing/wallet/template

- Résumé:  Search for a wallet template with a given code  
- OperationId:     GET_Wallet_template
- Description: Search for a wallet template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `walletTemplateCode` (QUERY, optionnel) — string
- Réponses:
  - default: A wallet template
    - application/json: GetWalletTemplateResponseDto
    - application/xml: GetWalletTemplateResponseDto

#### POST /api/rest/billing/wallet/template

- Résumé:  Create a new wallet template  
- OperationId:     POST_Wallet_template
- Description: Create a new wallet template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletTemplateDto
  - application/xml: WalletTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/wallet/template

- Résumé:  Update an existing wallet template  
- OperationId:     PUT_Wallet_template
- Description: Update an existing wallet template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletTemplateDto
  - application/xml: WalletTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/billing/wallet/template/{walletTemplateCode}

- Résumé:  Remove an existing wallet template with a given code  
- OperationId:     DELETE_Wallet_template_{walletTemplateCode}
- Description: Remove an existing wallet template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `walletTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/wallet/template/createOrUpdate

- Résumé:  Create new or update an existing wallet template  
- OperationId:     POST_Wallet_template_createOrUpdate
- Description: Create new or update an existing wallet template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WalletTemplateDto
  - application/xml: WalletTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/billing/wallet/version

- Résumé: Get version of application
- OperationId: index_44
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### WalletBalanceDto
Type: object
Propriétés:
- **sellerCode**: string
- **customerCode**: string
- **customerAccountCode**: string
- **billingAccountCode**: string
- **userAccountCode**: string
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **walletCode**: string
- **amountWithTax**: boolean

### WalletBalanceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **amounts**: AmountsDto

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

### AmountsDto
Type: object
Propriétés:
- **amountWithTax**: number
- **amountWithoutTax**: number

### WalletOperationDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **description**: string
- **userAccount**: string
- **subscription**: string
- **walletTemplate**: string
- **seller**: string
- **chargeInstance**: string
- **chargeInstanceId**: integer (int64)
- **currency**: string
- **type**: string (Valeurs: CREDIT, DEBIT)
- **status**: string (Valeurs: OPEN, TREATED, CANCELED, RESERVED, F_TO_RERATE, TO_RERATE, RERATED, SCHEDULED, REJECTED)
- **ratingUnitDescription**: string
- **pricePlanCode**: string
- **taxCode**: string
- **taxPercent**: number
- **unitAmountWithoutTax**: number
- **unitAmountWithTax**: number
- **unitAmountTax**: number
- **quantity**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **amountTax**: number
- **parameter1**: string
- **parameter2**: string
- **parameter3**: string
- **parameterExtra**: string
- **orderNumber**: string
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **operationDate**: string (date-time)
- **subscriptionDate**: string (date-time)
- **offerCode**: string
- **rawAmountWithoutTax**: number
- **rawAmountWithTax**: number
- **ratedTransaction**: WoRatedTransactionDto
- **walletId**: integer (int64)
- **customFields**: CustomFieldsDto
- **taxClassCode**: string
- **sortIndex**: integer (int32)

### WoRatedTransactionDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **status**: string (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED, PROCESSED)

### CustomFieldsDto
The custom fields
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

### FindWalletOperationsDto
Type: object
Champs obligatoires: userAccount
Propriétés:
- **status**: string (Valeurs: OPEN, TREATED, CANCELED, RESERVED, F_TO_RERATE, TO_RERATE, RERATED, SCHEDULED, REJECTED)
- **walletTemplate**: string
- **userAccount**: string
- **fromDate**: string (date-time)
- **toDate**: string (date-time)
- **chargeTemplateCode**: string
- **parameter1**: string
- **parameter2**: string
- **parameter3**: string
- **offerTemplateCode**: string
- **subscriptionCode**: string
- **orderNumber**: string

### FindWalletOperationsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **walletOperations**: Array<WalletOperationDto>

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

### WalletReservationDto
Type: object
Propriétés:
- **reservationId**: integer (int64)
- **providerCode**: string
- **sellerCode**: string
- **offerCode**: string
- **userAccountCode**: string
- **subscriptionDate**: string (date-time)
- **expirationDate**: string (date-time)
- **terminationDate**: string (date-time)
- **creditLimit**: number
- **param1**: string
- **param2**: string
- **param3**: string
- **amountWithTax**: boolean

### GetWalletTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **walletTemplate**: WalletTemplateDto

### WalletTemplateDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **walletType**: string (Valeurs: POSTPAID, PREPAID)
- **consumptionAlertSet**: boolean
- **fastRatingLevel**: integer (int32)
- **lowBalanceLevel**: number
- **rejectLevel**: number
- **rejectLevelEl**: string
- **lowBalanceLevelEl**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
