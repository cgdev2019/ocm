# TASK034 — Service InvoicingPlanItem

## Contexte
Le service « InvoicingPlanItem » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%InvoicingPlanItem
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/billing/invoicingPlanItems` | 	  Search for a invoicingPlanItem with a given code	  	   | GET_InvoicingPlanItem_search |
| POST | `/api/rest/billing/invoicingPlanItems` | 	  Create a new invoicingPlanItem	  	   | POST_InvoicingPlanItem_create |
| PUT | `/api/rest/billing/invoicingPlanItems` | 	  Update an existing invoicingPlanItem	  	   | PUT_InvoicingPlanItem_update |
| DELETE | `/api/rest/billing/invoicingPlanItems/{invoicingPlanItemCode}` | 	  Remove an existing invoicingPlanItem with a given code	  	   | DELETE_InvoicingPlanItem_{invoicingPlanItemCode} |
| POST | `/api/rest/billing/invoicingPlanItems/createOrUpdate` | 	  Create new or update an existing invoicingPlanItem	  	   | POST_InvoicingPlanItem_createOrUpdate |
| POST | `/api/rest/billing/invoicingPlanItems/list` | 	  List invoicingPlanItems matching a given criteria	  	   | POST_InvoicingPlanItem_list |
| GET | `/api/rest/billing/invoicingPlanItems/version` | Get version of application | index_38 |

#### GET /api/rest/billing/invoicingPlanItems

- Résumé: 	  Search for a invoicingPlanItem with a given code	  	  
- OperationId: GET_InvoicingPlanItem_search
- Description: Search for a invoicingPlanItem with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoicingPlanItemCode` (QUERY, optionnel) — string
- Réponses:
  - default: A invoicingPlanItem's data
    - application/json: InvoicingPlanItemResponseDto
    - application/xml: InvoicingPlanItemResponseDto

#### POST /api/rest/billing/invoicingPlanItems

- Résumé: 	  Create a new invoicingPlanItem	  	  
- OperationId: POST_InvoicingPlanItem_create
- Description: Create a new invoicingPlanItem
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoicingPlanItemDto
  - application/xml: InvoicingPlanItemDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/invoicingPlanItems

- Résumé: 	  Update an existing invoicingPlanItem	  	  
- OperationId: PUT_InvoicingPlanItem_update
- Description: Update an existing invoicingPlanItem
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoicingPlanItemDto
  - application/xml: InvoicingPlanItemDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/billing/invoicingPlanItems/{invoicingPlanItemCode}

- Résumé: 	  Remove an existing invoicingPlanItem with a given code	  	  
- OperationId: DELETE_InvoicingPlanItem_{invoicingPlanItemCode}
- Description: Remove an existing invoicingPlanItem with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoicingPlanItemCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/invoicingPlanItems/createOrUpdate

- Résumé: 	  Create new or update an existing invoicingPlanItem	  	  
- OperationId: POST_InvoicingPlanItem_createOrUpdate
- Description: Create new or update an existing invoicingPlanItem
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoicingPlanItemDto
  - application/xml: InvoicingPlanItemDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/invoicingPlanItems/list

- Résumé: 	  List invoicingPlanItems matching a given criteria	  	  
- OperationId: POST_InvoicingPlanItem_list
- Description: List invoicingPlanItems matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: A list of invoicingPlanItems
    - application/json: InvoicingPlanItemsResponseDto
    - application/xml: InvoicingPlanItemsResponseDto

#### GET /api/rest/billing/invoicingPlanItems/version

- Résumé: Get version of application
- OperationId: index_38
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### InvoicingPlanItemResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoicingPlanItemDto**: InvoicingPlanItemDto

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

### InvoicingPlanItemDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **billingPlanCode**: string
- **advancement**: integer (int32)
- **rateToBill**: number
- **customFields**: CustomFieldsDto

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

### InvoicingPlanItemsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **invoicingPlanItems**: InvoicingPlanItemsDto

### InvoicingPlanItemsDto
Type: object
Propriétés:
- **invoicingPlanItem**: Array<InvoicingPlanItemDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
