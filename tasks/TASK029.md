# TASK029 — Service Title

## Contexte
Le service « Title » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Title
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/account/title` |  Search for a title with a given code    |     GET_Title_search |
| POST | `/api/rest/account/title` |  Create a new title   |     POST_Title_create |
| PUT | `/api/rest/account/title` |  Update an existing title   |     PUT_Title_update |
| DELETE | `/api/rest/account/title/{titleCode}` |  Remove an existing title with a given code    |     DELETE_Title_{titleCode} |
| POST | `/api/rest/account/title/createOrUpdate` |  Create new or update an existing title   |     POST_Title_createOrUpdate |
| GET | `/api/rest/account/title/list` |  List titles    |     GET_Title_list |
| GET | `/api/rest/account/title/listGetAll` |  List titles matching a given criteria  |     GET_Title_listGetAll |
| GET | `/api/rest/account/title/version` | Get version of application | index_32 |

#### GET /api/rest/account/title

- Résumé:  Search for a title with a given code   
- OperationId:     GET_Title_search
- Description: Search for a title with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `titleCode` (QUERY, optionnel) — string
- Réponses:
  - default: A title's data
    - application/json: TitleResponseDto
    - application/xml: TitleResponseDto

#### POST /api/rest/account/title

- Résumé:  Create a new title  
- OperationId:     POST_Title_create
- Description: Create a new title
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TitleDto
  - application/xml: TitleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/account/title

- Résumé:  Update an existing title  
- OperationId:     PUT_Title_update
- Description: Update an existing title
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TitleDto
  - application/xml: TitleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/account/title/{titleCode}

- Résumé:  Remove an existing title with a given code   
- OperationId:     DELETE_Title_{titleCode}
- Description: Remove an existing title with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `titleCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/account/title/createOrUpdate

- Résumé:  Create new or update an existing title  
- OperationId:     POST_Title_createOrUpdate
- Description: Create new or update an existing title
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TitleDto
  - application/xml: TitleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/account/title/list

- Résumé:  List titles   
- OperationId:     GET_Title_list
- Description: List titles
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of titles
    - application/json: TitlesResponseDto
    - application/xml: TitlesResponseDto

#### GET /api/rest/account/title/listGetAll

- Résumé:  List titles matching a given criteria 
- OperationId:     GET_Title_listGetAll
- Description: List titles matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of titles
    - application/json: TitlesResponseDto
    - application/xml: TitlesResponseDto

#### GET /api/rest/account/title/version

- Résumé: Get version of application
- OperationId: index_32
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### TitleResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **titleDto**: TitleDto

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

### TitleDto
The legal entity type
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **isCompany**: boolean — indicate if the title is a company (Contraintes: défaut: false)
- **languageDescriptions**: Array<LanguageDescriptionDto> — list of the language description

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### TitlesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **titles**: TitlesDto

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

### TitlesDto
Type: object
Propriétés:
- **title**: Array<TitleDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
