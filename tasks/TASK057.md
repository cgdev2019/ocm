# TASK057 — Service UnitOfMeasure

## Contexte
Le service « UnitOfMeasure » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%UnitOfMeasure
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/unitOfMeasure` |  Search for a unitOfMeasure with a given code   |     GET_UnitOfMeasure_search |
| POST | `/api/rest/catalog/unitOfMeasure` |  Create a new unitOfMeasure   | create_9 |
| PUT | `/api/rest/catalog/unitOfMeasure` |  Update an existing unitOfMeasure   | update_9 |
| DELETE | `/api/rest/catalog/unitOfMeasure/{code}` |  Remove an existing unitOfMeasure with a given code   | delete |
| POST | `/api/rest/catalog/unitOfMeasure/createOrUpdate` |  Create new or update an existing unitOfMeasure   | createOrUpdate_8 |
| GET | `/api/rest/catalog/unitOfMeasure/list` |  List all currencies.  |     GET_UnitOfMeasure_list |
| GET | `/api/rest/catalog/unitOfMeasure/listGetAll` |  List UnitOfMeasures matching a given criteria  |     GET_UnitOfMeasure_listGetAll |
| GET | `/api/rest/catalog/unitOfMeasure/version` | Get version of application | index_63 |

#### GET /api/rest/catalog/unitOfMeasure

- Résumé:  Search for a unitOfMeasure with a given code  
- OperationId:     GET_UnitOfMeasure_search
- Description: Search for a unitOfMeasure with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `unitOfMeasureCode` (QUERY, optionnel) — string
- Réponses:
  - default: A unitOfMeasure
    - application/json: GetUnitOfMeasureResponseDto
    - application/xml: GetUnitOfMeasureResponseDto

#### POST /api/rest/catalog/unitOfMeasure

- Résumé:  Create a new unitOfMeasure  
- OperationId: create_9
- Description: Create a new unitOfMeasure
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UnitOfMeasureDto
  - application/xml: UnitOfMeasureDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/unitOfMeasure

- Résumé:  Update an existing unitOfMeasure  
- OperationId: update_9
- Description: Update an existing unitOfMeasure
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UnitOfMeasureDto
  - application/xml: UnitOfMeasureDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/unitOfMeasure/{code}

- Résumé:  Remove an existing unitOfMeasure with a given code  
- OperationId: delete
- Description: Remove an existing unitOfMeasure with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/unitOfMeasure/createOrUpdate

- Résumé:  Create new or update an existing unitOfMeasure  
- OperationId: createOrUpdate_8
- Description: Create new or update an existing unitOfMeasure
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UnitOfMeasureDto
  - application/xml: UnitOfMeasureDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/unitOfMeasure/list

- Résumé:  List all currencies. 
- OperationId:     GET_UnitOfMeasure_list
- Description: List all currencies.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of all unitOfMeasure/
    - application/json: GetListUnitOfMeasureResponseDto
    - application/xml: GetListUnitOfMeasureResponseDto

#### GET /api/rest/catalog/unitOfMeasure/listGetAll

- Résumé:  List UnitOfMeasures matching a given criteria 
- OperationId:     GET_UnitOfMeasure_listGetAll
- Description: List UnitOfMeasures matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of UnitOfMeasures
    - application/json: GetListUnitOfMeasureResponseDto
    - application/xml: GetListUnitOfMeasureResponseDto

#### GET /api/rest/catalog/unitOfMeasure/version

- Résumé: Get version of application
- OperationId: index_63
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetUnitOfMeasureResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **unitOfMeasure**: UnitOfMeasureDto

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

### UnitOfMeasureDto
Type: object
Champs obligatoires: code, symbol
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **symbol**: string
- **multiplicator**: integer (int64)
- **parentUOMCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### GetListUnitOfMeasureResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **listUnitOfMeasure**: Array<UnitOfMeasureDto>

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
