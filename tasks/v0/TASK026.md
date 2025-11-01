# TASK026 — Service Access

## Contexte
Le service « Access » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Access
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/account/access` |  Search for an access with a given access code and subscription code.   |     GET_Access_search |
| POST | `/api/rest/account/access` |  Create a new access   |     POST_Access_create |
| PUT | `/api/rest/account/access` |  Update an existing access  |     PUT_Access_update |
| DELETE | `/api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}` |  Remove an access with a given access code and subscription code.   |     DELETE_Access_{accessCode}_{subscriptionCode}_{startDate}_{endDate} |
| POST | `/api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}/disable` |  Disable an Access point with a given access code and subscription code.   |     POST_Access_{accessCode}_{subscriptionCode}_{startDate}_{endDate}_disable |
| POST | `/api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}/enable` |  Enable an Access point with a given access code and subscription code.   |     POST_Access_{accessCode}_{subscriptionCode}_{startDate}_{endDate}_enable |
| POST | `/api/rest/account/access/createOrUpdate` |  Create new or update an existing access   |     POST_Access_createOrUpdate |
| GET | `/api/rest/account/access/list` |  List Access filtered by subscriptionCode.   |     GET_Access_list |
| GET | `/api/rest/account/access/version` | Get version of application | index_25 |

#### GET /api/rest/account/access

- Résumé:  Search for an access with a given access code and subscription code.  
- OperationId:     GET_Access_search
- Description: Search for an access with a given access code and subscription code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accessCode` (QUERY, optionnel) — string
- `subscriptionCode` (QUERY, optionnel) — string
- `subscriptionValidityDate` (QUERY, optionnel) — string (date-time)
- `startDate` (QUERY, optionnel) — string (date-time)
- `endDate` (QUERY, optionnel) — string (date-time)
- `usageDate` (QUERY, optionnel) — string (date-time)
- Réponses:
  - default: Access
    - application/json: GetAccessResponseDto
    - application/xml: GetAccessResponseDto

#### POST /api/rest/account/access

- Résumé:  Create a new access  
- OperationId:     POST_Access_create
- Description: Create a new access
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: AccessDto
  - application/xml: AccessDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/account/access

- Résumé:  Update an existing access 
- OperationId:     PUT_Access_update
- Description: Update an existing access
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: AccessDto
  - application/xml: AccessDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}

- Résumé:  Remove an access with a given access code and subscription code.  
- OperationId:     DELETE_Access_{accessCode}_{subscriptionCode}_{startDate}_{endDate}
- Description: Remove an access with a given access code and subscription code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accessCode` (PATH, obligatoire) — string
- `subscriptionCode` (PATH, obligatoire) — string
- `startDate` (PATH, obligatoire) — string (date-time)
- `endDate` (PATH, obligatoire) — string (date-time)
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}/disable

- Résumé:  Disable an Access point with a given access code and subscription code.  
- OperationId:     POST_Access_{accessCode}_{subscriptionCode}_{startDate}_{endDate}_disable
- Description: Disable an Access point with a given access code and subscription code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accessCode` (PATH, obligatoire) — string
- `subscriptionCode` (PATH, obligatoire) — string
- `startDate` (PATH, obligatoire) — string (date-time)
- `endDate` (PATH, obligatoire) — string (date-time)
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/account/access/{accessCode}/{subscriptionCode}/{startDate}/{endDate}/enable

- Résumé:  Enable an Access point with a given access code and subscription code.  
- OperationId:     POST_Access_{accessCode}_{subscriptionCode}_{startDate}_{endDate}_enable
- Description: Enable an Access point with a given access code and subscription code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accessCode` (PATH, obligatoire) — string
- `subscriptionCode` (PATH, obligatoire) — string
- `startDate` (PATH, obligatoire) — string (date-time)
- `endDate` (PATH, obligatoire) — string (date-time)
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/account/access/createOrUpdate

- Résumé:  Create new or update an existing access  
- OperationId:     POST_Access_createOrUpdate
- Description: Create new or update an existing access
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: AccessDto
  - application/xml: AccessDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/account/access/list

- Résumé:  List Access filtered by subscriptionCode.  
- OperationId:     GET_Access_list
- Description: List Access filtered by subscriptionCode.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (QUERY, optionnel) — string
- Réponses:
  - default: A list of accesses
    - application/json: AccessesResponseDto
    - application/xml: AccessesResponseDto

#### GET /api/rest/account/access/version

- Résumé: Get version of application
- OperationId: index_25
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetAccessResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **access**: AccessDto

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

### AccessDto
Type: object
Champs obligatoires: subscription
Propriétés:
- **code**: string — code of the access
- **subscription**: string — code of the subscription
- **subscriptionValidityDate**: string (date-time) — code of existing
- **startDate**: string (date-time) — start date of the access
- **endDate**: string (date-time) — end date of the access
- **customFields**: CustomFieldsDto
- **disabled**: boolean
- **subscriptionValidity**: string (date-time)

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

### AccessesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **accesses**: AccessesDto

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

### AccessesDto
Type: object
Propriétés:
- **access**: Array<AccessDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
