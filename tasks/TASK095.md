# TASK095 — Service TaxCategory

## Contexte
Le service « TaxCategory » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%TaxCategory
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/taxCategory` |  Search for a Tax category with a given code   |     GET_TaxCategory_search |
| POST | `/api/rest/taxCategory` |  Create a new Tax category   |     POST_TaxCategory_create |
| PUT | `/api/rest/taxCategory` |  Update an existing Tax category   |     PUT_TaxCategory_update |
| DELETE | `/api/rest/taxCategory/{code}` |  Remove an existing Tax category with a given code   |     DELETE_TaxCategory_{code} |
| POST | `/api/rest/taxCategory/createOrUpdate` |  Create new or update an existing Tax category   |     POST_TaxCategory_createOrUpdate |
| GET | `/api/rest/taxCategory/list` |  Search Tax category by matching a given criteria   |     GET_TaxCategory_list |
| POST | `/api/rest/taxCategory/list` |  Search for Tax category by matching a given criteria   |     POST_TaxCategory_list |
| GET | `/api/rest/taxCategory/listGetAll` |  List taxCategories matching a given criteria  |     GET_TaxCategory_listGetAll |
| GET | `/api/rest/taxCategory/version` | Get version of application | index_143 |

#### GET /api/rest/taxCategory

- Résumé:  Search for a Tax category with a given code  
- OperationId:     GET_TaxCategory_search
- Description: Search for a Tax category with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: A Tax category's data
    - application/json: TaxCategoryResponseDto
    - application/xml: TaxCategoryResponseDto

#### POST /api/rest/taxCategory

- Résumé:  Create a new Tax category  
- OperationId:     POST_TaxCategory_create
- Description: Create a new Tax category
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxCategoryDto
  - application/xml: TaxCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/taxCategory

- Résumé:  Update an existing Tax category  
- OperationId:     PUT_TaxCategory_update
- Description: Update an existing Tax category
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxCategoryDto
  - application/xml: TaxCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/taxCategory/{code}

- Résumé:  Remove an existing Tax category with a given code  
- OperationId:     DELETE_TaxCategory_{code}
- Description: Remove an existing Tax category with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/taxCategory/createOrUpdate

- Résumé:  Create new or update an existing Tax category  
- OperationId:     POST_TaxCategory_createOrUpdate
- Description: Create new or update an existing Tax category
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxCategoryDto
  - application/xml: TaxCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/taxCategory/list

- Résumé:  Search Tax category by matching a given criteria  
- OperationId:     GET_TaxCategory_list
- Description: Search Tax category by matching a given criteria
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
- Réponses:
  - default: List of Tax categorys
    - application/json: TaxCategoryListResponseDto
    - application/xml: TaxCategoryListResponseDto

#### POST /api/rest/taxCategory/list

- Résumé:  Search for Tax category by matching a given criteria  
- OperationId:     POST_TaxCategory_list
- Description: Search for Tax category by matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of Tax categorys
    - application/json: TaxCategoryListResponseDto
    - application/xml: TaxCategoryListResponseDto

#### GET /api/rest/taxCategory/listGetAll

- Résumé:  List taxCategories matching a given criteria 
- OperationId:     GET_TaxCategory_listGetAll
- Description: List taxCategories matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of taxCategories
    - application/json: TaxCategoryListResponseDto
    - application/xml: TaxCategoryListResponseDto

#### GET /api/rest/taxCategory/version

- Résumé: Get version of application
- OperationId: index_143
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### TaxCategoryResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **dto**: TaxCategoryDto

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

### TaxCategoryDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **descriptionI18n**: Array<LanguageDescriptionDto>
- **customFields**: CustomFieldsDto

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

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

### TaxCategoryListResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **dtos**: Array<TaxCategoryDto>

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
