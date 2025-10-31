# TASK023 — Service Tax

## Contexte
Le service « Tax » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Tax
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/tax` |  Search tax with a given code.   |     GET_Tax_search |
| POST | `/api/rest/tax` |  Create tax. Description per language can be defined   |     POST_Tax_create |
| PUT | `/api/rest/tax` |  Update tax. Description per language can be defined   |     PUT_Tax_update |
| DELETE | `/api/rest/tax/{taxCode}` |  Remove tax with a given code.   |     DELETE_Tax_{taxCode} |
| POST | `/api/rest/tax/createOrUpdate` |  Create or uptadate a tax.   |     POST _Tax_createOrUpdate |
| GET | `/api/rest/tax/list` |  Search for the list of taxes.  |     GET _Tax_list |
| GET | `/api/rest/tax/listGetAll` |  List taxes matching a given criteria  |     GET_Tax_listGetAll |
| GET | `/api/rest/tax/version` | Get version of application | index_21 |

#### GET /api/rest/tax

- Résumé:  Search tax with a given code.  
- OperationId:     GET_Tax_search
- Description: Search tax with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `taxCode` (QUERY, optionnel) — string
- Réponses:
  - default: tax if exists
    - application/json: GetTaxResponse
    - application/xml: GetTaxResponse

#### POST /api/rest/tax

- Résumé:  Create tax. Description per language can be defined  
- OperationId:     POST_Tax_create
- Description: Create tax. Description per language can be defined
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxDto
  - application/xml: TaxDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/tax

- Résumé:  Update tax. Description per language can be defined  
- OperationId:     PUT_Tax_update
- Description: Update tax. Description per language can be defined
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxDto
  - application/xml: TaxDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/tax/{taxCode}

- Résumé:  Remove tax with a given code.  
- OperationId:     DELETE_Tax_{taxCode}
- Description: Remove tax with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `taxCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/tax/createOrUpdate

- Résumé:  Create or uptadate a tax.  
- OperationId:     POST _Tax_createOrUpdate
- Description: Create or uptadate a tax.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxDto
  - application/xml: TaxDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/tax/list

- Résumé:  Search for the list of taxes. 
- OperationId:     GET _Tax_list
- Description: Search for the list of taxes.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of all taxes.
    - application/json: GetTaxesResponse
    - application/xml: GetTaxesResponse

#### GET /api/rest/tax/listGetAll

- Résumé:  List taxes matching a given criteria 
- OperationId:     GET_Tax_listGetAll
- Description: List taxes matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of taxes
    - application/json: GetTaxesResponse
    - application/xml: GetTaxesResponse

#### GET /api/rest/tax/version

- Résumé: Get version of application
- OperationId: index_21
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetTaxResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **tax**: TaxDto

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

### TaxDto
Tax applied
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **percent**: number
- **accountingCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **customFields**: CustomFieldsDto
- **composite**: boolean
- **subTaxes**: Array<TaxDto>

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

### GetTaxesResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **taxesDto**: TaxesDto

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

### TaxesDto
Type: object
Propriétés:
- **tax**: Array<TaxDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
