# TASK035 — Service InvoicingPlan

## Contexte
Le service « InvoicingPlan » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%InvoicingPlan
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/billing/invoicingPlans` | 	  Search for a invoicingPlan with a given code	  	   | GET_InvoicingPlan_search |
| POST | `/api/rest/billing/invoicingPlans` | 	  Create a new invoicingPlan	  	   | POST_InvoicingPlan_create |
| PUT | `/api/rest/billing/invoicingPlans` | 	  Update an existing invoicingPlan	  	   | PUT_InvoicingPlan_update |
| DELETE | `/api/rest/billing/invoicingPlans/{invoicingPlanCode}` | 	  Remove an existing invoicingPlan with a given code	  	   | DELETE_InvoicingPlan_{invoicingPlanCode} |
| POST | `/api/rest/billing/invoicingPlans/list` | 	  List invoicingPlans matching a given criteria	  	   | POST_InvoicingPlan_list |
| GET | `/api/rest/billing/invoicingPlans/version` | Get version of application | index_39 |

#### GET /api/rest/billing/invoicingPlans

- Résumé: 	  Search for a invoicingPlan with a given code	  	  
- OperationId: GET_InvoicingPlan_search
- Description: Search for a invoicingPlan with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoicingPlanCode` (QUERY, optionnel) — string
- Réponses:
  - default: A invoicingPlan's data
    - application/json: InvoicingPlanResponseDto
    - application/xml: InvoicingPlanResponseDto

#### POST /api/rest/billing/invoicingPlans

- Résumé: 	  Create a new invoicingPlan	  	  
- OperationId: POST_InvoicingPlan_create
- Description: Create a new invoicingPlan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoicingPlanDto
  - application/xml: InvoicingPlanDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/billing/invoicingPlans

- Résumé: 	  Update an existing invoicingPlan	  	  
- OperationId: PUT_InvoicingPlan_update
- Description: Update an existing invoicingPlan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoicingPlanDto
  - application/xml: InvoicingPlanDto
- Réponses:
  - default: Request processing status
    - application/json: object
    - application/xml: object

#### DELETE /api/rest/billing/invoicingPlans/{invoicingPlanCode}

- Résumé: 	  Remove an existing invoicingPlan with a given code	  	  
- OperationId: DELETE_InvoicingPlan_{invoicingPlanCode}
- Description: Remove an existing invoicingPlan with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoicingPlanCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/billing/invoicingPlans/list

- Résumé: 	  List invoicingPlans matching a given criteria	  	  
- OperationId: POST_InvoicingPlan_list
- Description: List invoicingPlans matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: A list of invoicingPlans
    - application/json: InvoicingPlansResponseDto
    - application/xml: InvoicingPlansResponseDto

#### GET /api/rest/billing/invoicingPlans/version

- Résumé: Get version of application
- OperationId: index_39
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### InvoicingPlanResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoicingPlanDto**: InvoicingPlanDto

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

### InvoicingPlanDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
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

### InvoicingPlansResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **invoicingPlans**: InvoicingPlansDto

### InvoicingPlansDto
Type: object
Propriétés:
- **invoicingPlan**: Array<InvoicingPlanDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
