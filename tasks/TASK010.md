# TASK010 — Service InvoiceCategory

## Contexte
Le service « InvoiceCategory » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%InvoiceCategory
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/invoiceCategory` |  Search invoice with a given code.   |     GET_InvoiceCategory_search |
| POST | `/api/rest/invoiceCategory` |  Create invoice category. Description per language can be defined   |     POST_InvoiceCategory_create |
| PUT | `/api/rest/invoiceCategory` |  Update invoice category.   |     PUT_InvoiceCategory_update |
| DELETE | `/api/rest/invoiceCategory/{invoiceCategoryCode}` |  Remove invoice with a given code.   |     DELETE_InvoiceCategory_{invoiceCategoryCode} |
| POST | `/api/rest/invoiceCategory/createOrUpdate` |  Create or update invoice with a given code.   |     POST_InvoiceCategory_createOrUpdate |
| GET | `/api/rest/invoiceCategory/list` |  Search for list of invoice categories.  |     GET_InvoiceCategory_list |
| POST | `/api/rest/invoiceCategory/list` |  List InvoiceCategory matching a given criteria  |     POST_InvoiceCategory_list |
| GET | `/api/rest/invoiceCategory/version` | Get version of application | index_9 |

#### GET /api/rest/invoiceCategory

- Résumé:  Search invoice with a given code.  
- OperationId:     GET_InvoiceCategory_search
- Description: Search invoice with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceCategoryCode` (QUERY, optionnel) — string
- Réponses:
  - default: invoice category
    - application/json: GetInvoiceCategoryResponse
    - application/xml: GetInvoiceCategoryResponse

#### POST /api/rest/invoiceCategory

- Résumé:  Create invoice category. Description per language can be defined  
- OperationId:     POST_InvoiceCategory_create
- Description: Create invoice category. Description per language can be defined
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceCategoryDto
  - application/xml: InvoiceCategoryDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/invoiceCategory

- Résumé:  Update invoice category.  
- OperationId:     PUT_InvoiceCategory_update
- Description: Update invoice category.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceCategoryDto
  - application/xml: InvoiceCategoryDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/invoiceCategory/{invoiceCategoryCode}

- Résumé:  Remove invoice with a given code.  
- OperationId:     DELETE_InvoiceCategory_{invoiceCategoryCode}
- Description: Remove invoice with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceCategoryCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/invoiceCategory/createOrUpdate

- Résumé:  Create or update invoice with a given code.  
- OperationId:     POST_InvoiceCategory_createOrUpdate
- Description: Create or update invoice with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceCategoryDto
  - application/xml: InvoiceCategoryDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/invoiceCategory/list

- Résumé:  Search for list of invoice categories. 
- OperationId:     GET_InvoiceCategory_list
- Description: Search for list of invoice categories.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of invoice categories
    - application/json: InvoiceCategoryResponseDto
    - application/xml: InvoiceCategoryResponseDto

#### POST /api/rest/invoiceCategory/list

- Résumé:  List InvoiceCategory matching a given criteria 
- OperationId:     POST_InvoiceCategory_list
- Description: List InvoiceCategory matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of InvoiceCategory
    - application/json: InvoiceCategoryResponseDto
    - application/xml: InvoiceCategoryResponseDto

#### GET /api/rest/invoiceCategory/version

- Résumé: Get version of application
- OperationId: index_9
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetInvoiceCategoryResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoiceCategory**: InvoiceCategoryDto

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

### InvoiceCategoryDto
Type: object
Champs obligatoires: code, occTemplateCode
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **occTemplateCode**: string
- **occTemplateNegativeCode**: string
- **customFields**: CustomFieldsDto
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

### InvoiceCategoryResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **invoiceCategories**: InvoiceCategoriesDto

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

### InvoiceCategoriesDto
Type: object
Propriétés:
- **invoiceCategory**: Array<InvoiceCategoryDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
