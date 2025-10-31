# TASK051 — Service OfferTemplateCategory

## Contexte
Le service « OfferTemplateCategory » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%OfferTemplateCategory
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/offerTemplateCategory` |  Find a offer template category with a given code   |     GET_OfferTemplateCategory_search |
| POST | `/api/rest/catalog/offerTemplateCategory` |  Create a new offer template category   |     POST_OfferTemplateCategory_create |
| PUT | `/api/rest/catalog/offerTemplateCategory` |  Update an existing offer template category   |     PUT_OfferTemplateCategory_update |
| DELETE | `/api/rest/catalog/offerTemplateCategory` |  Remove an existing offer template category with a given code   |     DELETE_OfferTemplateCategory_delete |
| POST | `/api/rest/catalog/offerTemplateCategory/{code}/disable` |  Disable a Offer template category with a given code   |     POST_OfferTemplateCategory_{code}_disable |
| POST | `/api/rest/catalog/offerTemplateCategory/{code}/enable` |  Enable a Offer template category with a given code   |     POST_OfferTemplateCategory_{code}_enable |
| POST | `/api/rest/catalog/offerTemplateCategory/createOrUpdate` |  Create new or update an existing offer template category   |     POST_OfferTemplateCategory_createOrUpdate |
| GET | `/api/rest/catalog/offerTemplateCategory/listGetAll` |  List DiscountPlanItems matching a given criteria  |     GET_OfferTemplateCategory_listGetAll |
| GET | `/api/rest/catalog/offerTemplateCategory/version` | Get version of application | index_55 |

#### GET /api/rest/catalog/offerTemplateCategory

- Résumé:  Find a offer template category with a given code  
- OperationId:     GET_OfferTemplateCategory_search
- Description: Find a offer template category with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerTemplateCategoryCode` (QUERY, optionnel) — string
- Réponses:
  - default: Return offerTemplateCategoryCodeDto containing offerTemplateCategoryCode
    - application/json: GetOfferTemplateCategoryResponseDto
    - application/xml: GetOfferTemplateCategoryResponseDto

#### POST /api/rest/catalog/offerTemplateCategory

- Résumé:  Create a new offer template category  
- OperationId:     POST_OfferTemplateCategory_create
- Description: Create a new offer template category
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OfferTemplateCategoryDto
  - application/xml: OfferTemplateCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/offerTemplateCategory

- Résumé:  Update an existing offer template category  
- OperationId:     PUT_OfferTemplateCategory_update
- Description: Update an existing offer template category
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OfferTemplateCategoryDto
  - application/xml: OfferTemplateCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/offerTemplateCategory

- Résumé:  Remove an existing offer template category with a given code  
- OperationId:     DELETE_OfferTemplateCategory_delete
- Description: Remove an existing offer template category with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offerTemplateCategoryCode` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/offerTemplateCategory/{code}/disable

- Résumé:  Disable a Offer template category with a given code  
- OperationId:     POST_OfferTemplateCategory_{code}_disable
- Description: Disable a Offer template category with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/offerTemplateCategory/{code}/enable

- Résumé:  Enable a Offer template category with a given code  
- OperationId:     POST_OfferTemplateCategory_{code}_enable
- Description: Enable a Offer template category with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/offerTemplateCategory/createOrUpdate

- Résumé:  Create new or update an existing offer template category  
- OperationId:     POST_OfferTemplateCategory_createOrUpdate
- Description: Create new or update an existing offer template category
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OfferTemplateCategoryDto
  - application/xml: OfferTemplateCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/offerTemplateCategory/listGetAll

- Résumé:  List DiscountPlanItems matching a given criteria 
- OperationId:     GET_OfferTemplateCategory_listGetAll
- Description: List DiscountPlanItems matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of DiscountPlanItems
    - application/json: OfferTemplateCategoriesResponseDto
    - application/xml: OfferTemplateCategoriesResponseDto

#### GET /api/rest/catalog/offerTemplateCategory/version

- Résumé: Get version of application
- OperationId: index_55
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetOfferTemplateCategoryResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **offerTemplateCategory**: OfferTemplateCategoryDto

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

### OfferTemplateCategoryDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **name**: string
- **offerTemplateCategoryCode**: string
- **href**: string
- **version**: integer (int32)
- **lastModified**: string (date-time)
- **active**: boolean
- **parentId**: integer (int64)
- **imagePath**: string
- **imageBase64**: string
- **customFields**: CustomFieldsDto
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **languageLabels**: Array<LanguageDescriptionDto>

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

### OfferTemplateCategoriesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **offerTemplateCategories**: Array<OfferTemplateCategoryDto>

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
