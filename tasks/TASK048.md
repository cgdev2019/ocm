# TASK048 — Service CounterTemplate

## Contexte
Le service « CounterTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%CounterTemplate
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/counterTemplate` |  Search counter template with a given code.   |     GET_CounterTemplate_search |
| POST | `/api/rest/catalog/counterTemplate` |  Create counter template.   |     POST_CounterTemplate_create |
| PUT | `/api/rest/catalog/counterTemplate` |  Update counter template.   |     PUT_CounterTemplate_update |
| POST | `/api/rest/catalog/counterTemplate/{code}/disable` |  Disable a Counter template with a given code   |     POST_CounterTemplate_{code}_disable |
| POST | `/api/rest/catalog/counterTemplate/{code}/enable` |  Enable a Counter template with a given code   |     POST_CounterTemplate_{code}_enable |
| DELETE | `/api/rest/catalog/counterTemplate/{counterTemplateCode}` |  Remove counter template with a given code.   |     DELETE_CounterTemplate_{counterTemplateCode} |
| POST | `/api/rest/catalog/counterTemplate/createOrUpdate` |  Create or update a counter Template.  |     POST_CounterTemplate_createOrUpdate |
| GET | `/api/rest/catalog/counterTemplate/listGetAll` |  List CounterTemplates matching a given criteria  |     GET_CounterTemplate_listGetAll |
| GET | `/api/rest/catalog/counterTemplate/version` | Get version of application | index_51 |

#### GET /api/rest/catalog/counterTemplate

- Résumé:  Search counter template with a given code.  
- OperationId:     GET_CounterTemplate_search
- Description: Search counter template with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `counterTemplateCode` (QUERY, optionnel) — string
- Réponses:
  - default: counter template
    - application/json: GetCounterTemplateResponseDto
    - application/xml: GetCounterTemplateResponseDto

#### POST /api/rest/catalog/counterTemplate

- Résumé:  Create counter template.  
- OperationId:     POST_CounterTemplate_create
- Description: Create counter template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CounterTemplateDto
  - application/xml: CounterTemplateDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/counterTemplate

- Résumé:  Update counter template.  
- OperationId:     PUT_CounterTemplate_update
- Description: Update counter template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CounterTemplateDto
  - application/xml: CounterTemplateDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/counterTemplate/{code}/disable

- Résumé:  Disable a Counter template with a given code  
- OperationId:     POST_CounterTemplate_{code}_disable
- Description: Disable a Counter template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/counterTemplate/{code}/enable

- Résumé:  Enable a Counter template with a given code  
- OperationId:     POST_CounterTemplate_{code}_enable
- Description: Enable a Counter template with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/counterTemplate/{counterTemplateCode}

- Résumé:  Remove counter template with a given code.  
- OperationId:     DELETE_CounterTemplate_{counterTemplateCode}
- Description: Remove counter template with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `counterTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/counterTemplate/createOrUpdate

- Résumé:  Create or update a counter Template. 
- OperationId:     POST_CounterTemplate_createOrUpdate
- Description: Create or update a counter Template.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CounterTemplateDto
  - application/xml: CounterTemplateDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/counterTemplate/listGetAll

- Résumé:  List CounterTemplates matching a given criteria 
- OperationId:     GET_CounterTemplate_listGetAll
- Description: List CounterTemplates matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of CounterTemplates
    - application/json: CounterTemplatesResponseDto
    - application/xml: CounterTemplatesResponseDto

#### GET /api/rest/catalog/counterTemplate/version

- Résumé: Get version of application
- OperationId: index_51
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetCounterTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **counterTemplate**: CounterTemplateDto

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

### CounterTemplateDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **calendar**: string
- **calendarCodeEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **unity**: string
- **type**: string (Valeurs: USAGE, NOTIFICATION, USAGE_AMOUNT)
- **ceiling**: number
- **counterLevel**: string (Valeurs: SI, SU, UA, BA, CA, CUST)
- **ceilingExpressionEl**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **notificationLevels**: string
- **accumulator**: boolean
- **accumulatorType**: string (Valeurs: MULTI_VALUE, SINGLE_VALUE)
- **filterEl**: string
- **keyEl**: string
- **valueEl**: string

### CounterTemplatesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **counterTemplates**: Array<CounterTemplateDto>

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
