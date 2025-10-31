# TASK012 — Service InvoiceSubCategory

## Contexte
Le service « InvoiceSubCategory » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%InvoiceSubCategory
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/invoiceSubCategory` |  Search for invoice sub category with a given code.   |     GET_InvoiceSubCategory_search |
| POST | `/api/rest/invoiceSubCategory` |  Create invoice sub category.   |     POST_InvoiceSubCategory_create |
| PUT | `/api/rest/invoiceSubCategory` |  Update invoice sub category.   |     PUT_InvoiceSubCategory_update |
| DELETE | `/api/rest/invoiceSubCategory/{invoiceSubCategoryCode}` |  Remove invoice sub category with a given code.   |     DELETE_InvoiceSubCategory_{invoiceSubCategoryCode} |
| POST | `/api/rest/invoiceSubCategory/createOrUpdate` |  Create or update invoice sub category.   |     POST_InvoiceSubCategory_createOrUpdate |
| GET | `/api/rest/invoiceSubCategory/list` |  Search for list of invoiceSubCategories.  |     GET_InvoiceSubCategory_list |
| POST | `/api/rest/invoiceSubCategory/list` |  List InvoiceSubCategory matching a given criteria  |     POST_InvoiceSubCategory_list |
| GET | `/api/rest/invoiceSubCategory/version` | Get version of application | index_11 |

#### GET /api/rest/invoiceSubCategory

- Résumé:  Search for invoice sub category with a given code.  
- OperationId:     GET_InvoiceSubCategory_search
- Description: Search for invoice sub category with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceSubCategoryCode` (QUERY, optionnel) — string
- Réponses:
  - default: invoice sub category
    - application/json: GetInvoiceSubCategoryResponse
    - application/xml: GetInvoiceSubCategoryResponse

#### POST /api/rest/invoiceSubCategory

- Résumé:  Create invoice sub category.  
- OperationId:     POST_InvoiceSubCategory_create
- Description: Create invoice sub category.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceSubCategoryDto
  - application/xml: InvoiceSubCategoryDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/invoiceSubCategory

- Résumé:  Update invoice sub category.  
- OperationId:     PUT_InvoiceSubCategory_update
- Description: Update invoice sub category.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceSubCategoryDto
  - application/xml: InvoiceSubCategoryDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/invoiceSubCategory/{invoiceSubCategoryCode}

- Résumé:  Remove invoice sub category with a given code.  
- OperationId:     DELETE_InvoiceSubCategory_{invoiceSubCategoryCode}
- Description: Remove invoice sub category with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceSubCategoryCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/invoiceSubCategory/createOrUpdate

- Résumé:  Create or update invoice sub category.  
- OperationId:     POST_InvoiceSubCategory_createOrUpdate
- Description: Create or update invoice sub category.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceSubCategoryDto
  - application/xml: InvoiceSubCategoryDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/invoiceSubCategory/list

- Résumé:  Search for list of invoiceSubCategories. 
- OperationId:     GET_InvoiceSubCategory_list
- Description: Search for list of invoiceSubCategories.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of invoiceSubCategories
    - application/json: InvoiceSubCategoryResponseDto
    - application/xml: InvoiceSubCategoryResponseDto

#### POST /api/rest/invoiceSubCategory/list

- Résumé:  List InvoiceSubCategory matching a given criteria 
- OperationId:     POST_InvoiceSubCategory_list
- Description: List InvoiceSubCategory matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of InvoiceSubCategory
    - application/json: InvoiceSubCategoryResponseDto
    - application/xml: InvoiceSubCategoryResponseDto

#### GET /api/rest/invoiceSubCategory/version

- Résumé: Get version of application
- OperationId: index_11
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetInvoiceSubCategoryResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoiceSubCategory**: InvoiceSubCategoryDto

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

### InvoiceSubCategoryDto
Type: object
Champs obligatoires: accountingCode, code, invoiceCategory, occTemplateCode
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **invoiceCategory**: string
- **accountingCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **customFields**: CustomFieldsDto
- **occTemplateCode**: string
- **occTemplateNegativeCode**: string
- **sortIndex**: integer (int32)

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

### InvoiceSubCategoryResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **invoiceSubCategories**: InvoiceSubCategoriesDto

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

### InvoiceSubCategoriesDto
Type: object
Propriétés:
- **invoiceSubCategory**: Array<InvoiceSubCategoryDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
