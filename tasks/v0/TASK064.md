# TASK064 — Service CustomEntityInstance

## Contexte
Le service « CustomEntityInstance » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%CustomEntityInstance
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/customEntityInstance/{customEntityTemplateCode}` |  Create a new custom entity instance using a custom entity template.  |     POST_CustomEntityInstance_{customEntityTemplateCode} |
| PUT | `/api/rest/customEntityInstance/{customEntityTemplateCode}` |  Update an existing custom entity instance using a custom entity template   |     PUT_CustomEntityInstance_{customEntityTemplateCode} |
| GET | `/api/rest/customEntityInstance/{customEntityTemplateCode}/{code}` |  Find a #### with a given (exemple) code .   |     GET_CustomEntityInstance_{customEntityTemplateCode}_{code} |
| DELETE | `/api/rest/customEntityInstance/{customEntityTemplateCode}/{code}` |  Remove an existing custom entity instance with a given code from a custom entity template given by code   |     DELETE_CustomEntityInstance_{customEntityTemplateCode}_{code} |
| POST | `/api/rest/customEntityInstance/{customEntityTemplateCode}/{code}/disable` |  Disable a Custom entity instance with a given code   |     POST_CustomEntityInstance_{customEntityTemplateCode}_{code}_disable |
| POST | `/api/rest/customEntityInstance/{customEntityTemplateCode}/{code}/enable` |  Enable a Custom entity instance with a given code   |     POST_CustomEntityInstance_{customEntityTemplateCode}_{code}_enable |
| POST | `/api/rest/customEntityInstance/{customEntityTemplateCode}/createOrUpdate` |  Create new or update an existing custom entity instance with a given code.   |     POST_CustomEntityInstance_{customEntityTemplateCode}_createOrUpdate |
| GET | `/api/rest/customEntityInstance/list/{customEntityTemplateCode}` |  List custom entity instances.   |     GET_CustomEntityInstance_list_{customEntityTemplateCode} |
| POST | `/api/rest/customEntityInstance/list/{customEntityTemplateCode}` |  Search in custom entity instances.   |     POST_CustomEntityInstance_list_{customEntityTemplateCode} |
| GET | `/api/rest/customEntityInstance/version` | Get version of application | index_109 |

#### POST /api/rest/customEntityInstance/{customEntityTemplateCode}

- Résumé:  Create a new custom entity instance using a custom entity template. 
- OperationId:     POST_CustomEntityInstance_{customEntityTemplateCode}
- Description: Create a new custom entity instance using a custom entity template.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: CustomEntityInstanceDto
  - application/xml: CustomEntityInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/customEntityInstance/{customEntityTemplateCode}

- Résumé:  Update an existing custom entity instance using a custom entity template  
- OperationId:     PUT_CustomEntityInstance_{customEntityTemplateCode}
- Description: Update an existing custom entity instance using a custom entity template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: CustomEntityInstanceDto
  - application/xml: CustomEntityInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/customEntityInstance/{customEntityTemplateCode}/{code}

- Résumé:  Find a #### with a given (exemple) code .  
- OperationId:     GET_CustomEntityInstance_{customEntityTemplateCode}_{code}
- Description: Find a #### with a given (exemple) code .
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Return a customEntityInstance
    - application/json: CustomEntityInstanceResponseDto
    - application/xml: CustomEntityInstanceResponseDto

#### DELETE /api/rest/customEntityInstance/{customEntityTemplateCode}/{code}

- Résumé:  Remove an existing custom entity instance with a given code from a custom entity template given by code  
- OperationId:     DELETE_CustomEntityInstance_{customEntityTemplateCode}_{code}
- Description: Remove an existing custom entity instance with a given code from a custom entity template given by code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customEntityInstance/{customEntityTemplateCode}/{code}/disable

- Résumé:  Disable a Custom entity instance with a given code  
- OperationId:     POST_CustomEntityInstance_{customEntityTemplateCode}_{code}_disable
- Description: Disable a Custom entity instance with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customEntityInstance/{customEntityTemplateCode}/{code}/enable

- Résumé:  Enable a Custom entity instance with a given code  
- OperationId:     POST_CustomEntityInstance_{customEntityTemplateCode}_{code}_enable
- Description: Enable a Custom entity instance with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customEntityInstance/{customEntityTemplateCode}/createOrUpdate

- Résumé:  Create new or update an existing custom entity instance with a given code.  
- OperationId:     POST_CustomEntityInstance_{customEntityTemplateCode}_createOrUpdate
- Description: Create new or update an existing custom entity instance with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: CustomEntityInstanceDto
  - application/xml: CustomEntityInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/customEntityInstance/list/{customEntityTemplateCode}

- Résumé:  List custom entity instances.  
- OperationId:     GET_CustomEntityInstance_list_{customEntityTemplateCode}
- Description: List custom entity instances.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - default: A list of custom entity instances
    - application/json: CustomEntityInstancesResponseDto
    - application/xml: CustomEntityInstancesResponseDto

#### POST /api/rest/customEntityInstance/list/{customEntityTemplateCode}

- Résumé:  Search in custom entity instances.  
- OperationId:     POST_CustomEntityInstance_list_{customEntityTemplateCode}
- Description: Search in custom entity instances.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customEntityTemplateCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: Custom table data
    - application/json: CustomEntityInstancesResponseDto
    - application/xml: CustomEntityInstancesResponseDto

#### GET /api/rest/customEntityInstance/version

- Résumé: Get version of application
- OperationId: index_109
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### CustomEntityInstanceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **cetCode**: string
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

### CustomEntityInstanceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **customEntityInstance**: CustomEntityInstanceDto

### CustomEntityInstancesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **customEntityInstances**: Array<CustomEntityInstanceDto>

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
