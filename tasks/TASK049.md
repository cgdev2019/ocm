# TASK049 — Service DiscountPlanItem

## Contexte
Le service « DiscountPlanItem » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%DiscountPlanItem
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/discountPlanItem` |  Find a discount plan item with a given code.  |     GET_DiscountPlanItem_search |
| POST | `/api/rest/catalog/discountPlanItem` |  Create a new discount plan item.  |     POST_DiscountPlanItem_create |
| PUT | `/api/rest/catalog/discountPlanItem` |  update an existed discount plan item.   |     PUT_DiscountPlanItem_update |
| POST | `/api/rest/catalog/discountPlanItem/{code}/disable` |  Disable a Discount plan item with a given code   |     POST_DiscountPlanItem_{code}_disable |
| POST | `/api/rest/catalog/discountPlanItem/{code}/enable` |  Enable a Discount plan item with a given code   |     POST_DiscountPlanItem_{code}_enable |
| DELETE | `/api/rest/catalog/discountPlanItem/{discountPlanItemCode}` |  remove a discount plan item by code.  |     DELETE_DiscountPlanItem_{discountPlanItemCode} |
| POST | `/api/rest/catalog/discountPlanItem/createOrUpdate` |  create/update a discount plan item.  |     POST_DiscountPlanItem_createOrUpdate |
| GET | `/api/rest/catalog/discountPlanItem/list` |  List all discount plan items by current user.  |     GET_DiscountPlanItem_list |
| GET | `/api/rest/catalog/discountPlanItem/listGetAll` |  List DiscountPlanItems matching a given criteria  |     GET_DiscountPlanItem_listGetAll |
| GET | `/api/rest/catalog/discountPlanItem/version` | Get version of application | index_53 |

#### GET /api/rest/catalog/discountPlanItem

- Résumé:  Find a discount plan item with a given code. 
- OperationId:     GET_DiscountPlanItem_search
- Description: Find a discount plan item with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `discountPlanItemCode` (QUERY, optionnel) — string
- Réponses:
  - default: A discount plan item
    - application/json: DiscountPlanItemResponseDto
    - application/xml: DiscountPlanItemResponseDto

#### POST /api/rest/catalog/discountPlanItem

- Résumé:  Create a new discount plan item. 
- OperationId:     POST_DiscountPlanItem_create
- Description: Create a new discount plan item.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DiscountPlanItemDto
  - application/xml: DiscountPlanItemDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/discountPlanItem

- Résumé:  update an existed discount plan item.  
- OperationId:     PUT_DiscountPlanItem_update
- Description: update an existed discount plan item.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DiscountPlanItemDto
  - application/xml: DiscountPlanItemDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/discountPlanItem/{code}/disable

- Résumé:  Disable a Discount plan item with a given code  
- OperationId:     POST_DiscountPlanItem_{code}_disable
- Description: Disable a Discount plan item with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/discountPlanItem/{code}/enable

- Résumé:  Enable a Discount plan item with a given code  
- OperationId:     POST_DiscountPlanItem_{code}_enable
- Description: Enable a Discount plan item with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/discountPlanItem/{discountPlanItemCode}

- Résumé:  remove a discount plan item by code. 
- OperationId:     DELETE_DiscountPlanItem_{discountPlanItemCode}
- Description: remove a discount plan item by code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `discountPlanItemCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/discountPlanItem/createOrUpdate

- Résumé:  create/update a discount plan item. 
- OperationId:     POST_DiscountPlanItem_createOrUpdate
- Description: create/update a discount plan item.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DiscountPlanItemDto
  - application/xml: DiscountPlanItemDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/discountPlanItem/list

- Résumé:  List all discount plan items by current user. 
- OperationId:     GET_DiscountPlanItem_list
- Description: List all discount plan items by current user.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of discount plan items
    - application/json: DiscountPlanItemsResponseDto
    - application/xml: DiscountPlanItemsResponseDto

#### GET /api/rest/catalog/discountPlanItem/listGetAll

- Résumé:  List DiscountPlanItems matching a given criteria 
- OperationId:     GET_DiscountPlanItem_listGetAll
- Description: List DiscountPlanItems matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of DiscountPlanItems
    - application/json: DiscountPlanItemsResponseDto
    - application/xml: DiscountPlanItemsResponseDto

#### GET /api/rest/catalog/discountPlanItem/version

- Résumé: Get version of application
- OperationId: index_53
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### DiscountPlanItemResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **discountPlanItem**: DiscountPlanItemDto

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

### DiscountPlanItemDto
list of discount plan item
Type: object
Champs obligatoires: code, discountPlanCode, discountValue, discountValueEL
Propriétés:
- **code**: string — The code
- **discountPlanCode**: string — Discount plan code
- **invoiceCategoryCode**: string — Invoice category code
- **invoiceSubCategoryCode**: string — Invoice sub category code
- **accountingCode**: string — Accounting code
- **expressionEl**: string — Expression to determine if discount applies
- **disabled**: boolean — Is entity disabled. Value is ignored in Update action - use enable/disable API instead
- **discountPlanItemType**: string — Type of discount, whether absolute or percentage (Valeurs: PERCENTAGE, FIXED) (Contraintes: défaut: "PERCENTAGE")
- **discountValue**: number — The absolute or percentage discount amount
- **discountValueEL**: string — The absolute or percentage discount amount EL
- **targetAccountingArticleCodes**: Array<string> — The target accounting article codes
- **pricePlanMatrixCode**: string — Price plan matrix code
- **customFields**: CustomFieldsDto
- **allowToNegate**: boolean — <ul><li>If true, then allows to negate the amount of affected invoice lines</li><li>If fase, then amount for the discount line produce by the discount plan item cannot exceed the amount of discounted lines</li></ul> (Contraintes: défaut: false)
- **description**: string — description of discount plan item
- **priority**: integer (int64) — The lower number, the higher the priority is
- **accountingArticleCode**: string — accounting article code
- **applyByArticle**: boolean — Apply by article
- **sequence**: integer (int32) — defines the order in which discount plans are applied
- **lastDiscount**: boolean — last discount

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

### DiscountPlanItemsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **discountPlanItems**: Array<DiscountPlanItemDto>

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
