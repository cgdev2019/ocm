# TASK008 — Service Filter

## Contexte
Le service « Filter » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Filter
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/filter` |  Find a filter with a given code  |     GET_Filter_search |
| POST | `/api/rest/filter` |  Creates filter based on filter code. If the filter code does not exists, a filter record is created  |     POST_Filter_create |
| PUT | `/api/rest/filter` |  update an existing filter |     PUT_Filter_update |
| POST | `/api/rest/filter/{code}/disable` |  Disable a Filter with a given code  |     POST_Filter_{code}_disable |
| POST | `/api/rest/filter/{code}/enable` |  Enable a Filter with a given code  |     POST_Filter_{code}_enable |
| POST | `/api/rest/filter/createOrUpdate` |  Create new or update an existing filter with a given code  |     POST_Filter_createOrUpdate |
| GET | `/api/rest/filter/version` | Get version of application | index_7 |

#### GET /api/rest/filter

- Résumé:  Find a filter with a given code 
- OperationId:     GET_Filter_search
- Description: Find a filter with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `filterCode` (QUERY, optionnel) — string
- Réponses:
  - default: Dto for FilteredList API
    - application/json: GetFilterResponseDto
    - application/xml: GetFilterResponseDto

#### POST /api/rest/filter

- Résumé:  Creates filter based on filter code. If the filter code does not exists, a filter record is created 
- OperationId:     POST_Filter_create
- Description: Creates filter based on filter code. If the filter code does not exists, a filter record is created
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: FilterDto
  - application/xml: FilterDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/filter

- Résumé:  update an existing filter
- OperationId:     PUT_Filter_update
- Description: update an existing filter.Same input parameter as create. If the filter code does not exists, a filter record is created. The operation fails if the filter is null
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: FilterDto
  - application/xml: FilterDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/filter/{code}/disable

- Résumé:  Disable a Filter with a given code 
- OperationId:     POST_Filter_{code}_disable
- Description: Disable a Filter with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/filter/{code}/enable

- Résumé:  Enable a Filter with a given code 
- OperationId:     POST_Filter_{code}_enable
- Description: Enable a Filter with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/filter/createOrUpdate

- Résumé:  Create new or update an existing filter with a given code 
- OperationId:     POST_Filter_createOrUpdate
- Description: Create new or update an existing filter with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: FilterDto
  - application/xml: FilterDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/filter/version

- Résumé: Get version of application
- OperationId: index_7
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetFilterResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **filter**: FilterDto

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

### FilterDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **shared**: boolean
- **inputXml**: string
- **pollingQuery**: string
- **entityClass**: string
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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
