# TASK033 — Service AccountingCode

## Contexte
Le service « AccountingCode » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%AccountingCode
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/billing/accountingCode` |  Finds an AccountingCode.   |     GET_AccountingCode_search |
| POST | `/api/rest/billing/accountingCode` |  Creates a new AccountingCode.   |     POST_AccountingCode_create |
| PUT | `/api/rest/billing/accountingCode` |  Updates AccountingCode. An existing AccountingCode is search using the code field.   |     PUT_AccountingCode_update |
| DELETE | `/api/rest/billing/accountingCode/{accountingCode}` |  Removes an AccountingCode entity.   |     DELETE_AccountingCode_{accountingCode} |
| POST | `/api/rest/billing/accountingCode/{code}/disable` |  Disable a Accounting code with a given code   |     POST_AccountingCode_{code}_disable |
| POST | `/api/rest/billing/accountingCode/{code}/enable` |  Enable a Accounting code with a given code   |     POST_AccountingCode_{code}_enable |
| POST | `/api/rest/billing/accountingCode/createOrUpdate` |  Create or update an AccountingCode. Checks if the code already exists.   |     POST_AccountingCode_createOrUpdate |
| GET | `/api/rest/billing/accountingCode/list` |  List AccountingCode matching the given criteria.   |     GET_AccountingCode_list |
| POST | `/api/rest/billing/accountingCode/list` |  List AccountingCode matching the given criteria.   |     POST_AccountingCode_list |
| GET | `/api/rest/billing/accountingCode/listGetAll` |  List AccountingCodes matching a given criteria  |     GET_AccountingCode_listGetAll |
| GET | `/api/rest/billing/accountingCode/version` | Get version of application | index_37 |

#### GET /api/rest/billing/accountingCode

- Résumé:  Finds an AccountingCode.  
- OperationId:     GET_AccountingCode_search
- Description: Finds an AccountingCode.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accountingCode` (QUERY, optionnel) — string
- Réponses:
  - default: request processing status
    - application/json: AccountingCodeGetResponseDto
    - application/xml: AccountingCodeGetResponseDto

#### POST /api/rest/billing/accountingCode

- Résumé:  Creates a new AccountingCode.  
- OperationId:     POST_AccountingCode_create
- Description: Creates a new AccountingCode.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: AccountingCodeDto
  - application/xml: AccountingCodeDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/accountingCode

- Résumé:  Updates AccountingCode. An existing AccountingCode is search using the code field.  
- OperationId:     PUT_AccountingCode_update
- Description: Updates AccountingCode. An existing AccountingCode is search using the code field.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: AccountingCodeDto
  - application/xml: AccountingCodeDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/billing/accountingCode/{accountingCode}

- Résumé:  Removes an AccountingCode entity.  
- OperationId:     DELETE_AccountingCode_{accountingCode}
- Description: Removes an AccountingCode entity.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accountingCode` (PATH, obligatoire) — string
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/accountingCode/{code}/disable

- Résumé:  Disable a Accounting code with a given code  
- OperationId:     POST_AccountingCode_{code}_disable
- Description: Disable a Accounting code with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/accountingCode/{code}/enable

- Résumé:  Enable a Accounting code with a given code  
- OperationId:     POST_AccountingCode_{code}_enable
- Description: Enable a Accounting code with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/accountingCode/createOrUpdate

- Résumé:  Create or update an AccountingCode. Checks if the code already exists.  
- OperationId:     POST_AccountingCode_createOrUpdate
- Description: Create or update an AccountingCode. Checks if the code already exists.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: AccountingCodeDto
  - application/xml: AccountingCodeDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/billing/accountingCode/list

- Résumé:  List AccountingCode matching the given criteria.  
- OperationId:     GET_AccountingCode_list
- Description: List AccountingCode matching the given criteria.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "code"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- Réponses:
  - default: list of AccountingCode
    - application/json: AccountingCodeListResponseDto
    - application/xml: AccountingCodeListResponseDto

#### POST /api/rest/billing/accountingCode/list

- Résumé:  List AccountingCode matching the given criteria.  
- OperationId:     POST_AccountingCode_list
- Description: List AccountingCode matching the given criteria.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: list of AccountingCode
    - application/json: AccountingCodeListResponseDto
    - application/xml: AccountingCodeListResponseDto

#### GET /api/rest/billing/accountingCode/listGetAll

- Résumé:  List AccountingCodes matching a given criteria 
- OperationId:     GET_AccountingCode_listGetAll
- Description: List AccountingCodes matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of AccountingCodes
    - application/json: AccountingCodeListResponseDto
    - application/xml: AccountingCodeListResponseDto

#### GET /api/rest/billing/accountingCode/version

- Résumé: Get version of application
- OperationId: index_37
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### AccountingCodeGetResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **accountingCode**: AccountingCodeDto

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

### AccountingCodeDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **parentAccountingCode**: string
- **chartOfAccountTypeEnum**: string (Valeurs: ASSETS, LIABILITIES, EQUITY, REVENUE, EXPENSE)
- **chartOfAccountViewTypeEnum**: string (Valeurs: VIEW, REGULAR)
- **reportingAccount**: string
- **notes**: string
- **migrated**: boolean

### AccountingCodeListResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **accountingCodes**: Array<AccountingCodeDto>

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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
