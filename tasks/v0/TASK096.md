# TASK096 — Service TaxClass

## Contexte
Le service « TaxClass » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%TaxClass
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/taxClass` |  Search for a Tax class with a given code   |     GET_TaxClass_search |
| POST | `/api/rest/taxClass` |  Create a new Tax class   |     POST_TaxClass_create |
| PUT | `/api/rest/taxClass` |  Update an existing Tax class   |     PUT_TaxClass_update |
| DELETE | `/api/rest/taxClass/{code}` |  Remove an existing Tax class with a given code   |     DELETE_TaxClass_{code} |
| POST | `/api/rest/taxClass/createOrUpdate` |  Create new or update an existing Tax class   |     POST_TaxClass_createOrUpdate |
| GET | `/api/rest/taxClass/list` |  Search Tax class by matching a given criteria   |     GET_TaxClass_list |
| POST | `/api/rest/taxClass/list` |  Search for Tax class by matching a given criteria   |     POST_TaxClass_list |
| GET | `/api/rest/taxClass/listGetAll` |  List taxClasses matching a given criteria  |     GET_TaxClass_listGetAll |
| GET | `/api/rest/taxClass/version` | Get version of application | index_144 |

#### GET /api/rest/taxClass

- Résumé:  Search for a Tax class with a given code  
- OperationId:     GET_TaxClass_search
- Description: Search for a Tax class with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: A Tax class's data
    - application/json: TaxClassResponseDto
    - application/xml: TaxClassResponseDto

#### POST /api/rest/taxClass

- Résumé:  Create a new Tax class  
- OperationId:     POST_TaxClass_create
- Description: Create a new Tax class
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxClassDto
  - application/xml: TaxClassDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/taxClass

- Résumé:  Update an existing Tax class  
- OperationId:     PUT_TaxClass_update
- Description: Update an existing Tax class
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxClassDto
  - application/xml: TaxClassDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/taxClass/{code}

- Résumé:  Remove an existing Tax class with a given code  
- OperationId:     DELETE_TaxClass_{code}
- Description: Remove an existing Tax class with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/taxClass/createOrUpdate

- Résumé:  Create new or update an existing Tax class  
- OperationId:     POST_TaxClass_createOrUpdate
- Description: Create new or update an existing Tax class
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxClassDto
  - application/xml: TaxClassDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/taxClass/list

- Résumé:  Search Tax class by matching a given criteria  
- OperationId:     GET_TaxClass_list
- Description: Search Tax class by matching a given criteria
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
  - default: List of Tax classs
    - application/json: TaxClassListResponseDto
    - application/xml: TaxClassListResponseDto

#### POST /api/rest/taxClass/list

- Résumé:  Search for Tax class by matching a given criteria  
- OperationId:     POST_TaxClass_list
- Description: Search for Tax class by matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of Tax classs
    - application/json: TaxClassListResponseDto
    - application/xml: TaxClassListResponseDto

#### GET /api/rest/taxClass/listGetAll

- Résumé:  List taxClasses matching a given criteria 
- OperationId:     GET_TaxClass_listGetAll
- Description: List taxClasses matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of taxClasses
    - application/json: TaxClassListResponseDto
    - application/xml: TaxClassListResponseDto

#### GET /api/rest/taxClass/version

- Résumé: Get version of application
- OperationId: index_144
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### TaxClassResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **dto**: TaxClassDto

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

### TaxClassDto
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

### TaxClassListResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **dtos**: Array<TaxClassDto>

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
