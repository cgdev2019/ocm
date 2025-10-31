# TASK031 — Service FileFormat

## Contexte
Le service « FileFormat » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%FileFormat
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/admin/fileFormat` |  Search for a File format with a given code   |     GET_FileFormat_search |
| POST | `/api/rest/admin/fileFormat` |  Create a new File format  |     POST_FileFormat_create |
| PUT | `/api/rest/admin/fileFormat` |  Update an existing File format   |     PUT_FileFormat_update |
| DELETE | `/api/rest/admin/fileFormat/{code}` |  Remove an existing File format with a given code  |     DELETE_FileFormat_{code} |
| POST | `/api/rest/admin/fileFormat/createOrUpdate` |  Create new or update an existing File formats   |     POST_FileFormat_createOrUpdate |
| GET | `/api/rest/admin/fileFormat/list` |  Search File formats by matching a given criteria   |     GET_FileFormat_list |
| POST | `/api/rest/admin/fileFormat/list` |  Search for File formats by matching a given criteria   |     POST_FileFormat_list |
| GET | `/api/rest/admin/fileFormat/listGetAll` |  List fileFormats matching a given criteria  |     GET_FileFormat_listGetAll |
| GET | `/api/rest/admin/fileFormat/version` | Get version of application | index_35 |

#### GET /api/rest/admin/fileFormat

- Résumé:  Search for a File format with a given code  
- OperationId:     GET_FileFormat_search
- Description: Search for a File format with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: A File format's data
    - application/json: FileFormatResponseDto
    - application/xml: FileFormatResponseDto

#### POST /api/rest/admin/fileFormat

- Résumé:  Create a new File format 
- OperationId:     POST_FileFormat_create
- Description: Create a new File format
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: FileFormatDto
  - application/xml: FileFormatDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/admin/fileFormat

- Résumé:  Update an existing File format  
- OperationId:     PUT_FileFormat_update
- Description: Update an existing File format
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: FileFormatDto
  - application/xml: FileFormatDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/admin/fileFormat/{code}

- Résumé:  Remove an existing File format with a given code 
- OperationId:     DELETE_FileFormat_{code}
- Description: Remove an existing File format with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/fileFormat/createOrUpdate

- Résumé:  Create new or update an existing File formats  
- OperationId:     POST_FileFormat_createOrUpdate
- Description: Create new or update an existing File formats
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: FileFormatDto
  - application/xml: FileFormatDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/admin/fileFormat/list

- Résumé:  Search File formats by matching a given criteria  
- OperationId:     GET_FileFormat_list
- Description: Search File formats by matching a given criteria
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
  - default: List of File formats
    - application/json: FileFormatListResponseDto
    - application/xml: FileFormatListResponseDto

#### POST /api/rest/admin/fileFormat/list

- Résumé:  Search for File formats by matching a given criteria  
- OperationId:     POST_FileFormat_list
- Description: Search for File formats by matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of File formats
    - application/json: FileFormatListResponseDto
    - application/xml: FileFormatListResponseDto

#### GET /api/rest/admin/fileFormat/listGetAll

- Résumé:  List fileFormats matching a given criteria 
- OperationId:     GET_FileFormat_listGetAll
- Description: List fileFormats matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of fileFormats
    - application/json: FileFormatListResponseDto
    - application/xml: FileFormatListResponseDto

#### GET /api/rest/admin/fileFormat/version

- Résumé: Get version of application
- OperationId: index_35
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### FileFormatResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **dto**: FileFormatDto

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

### FileFormatDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **fileNamePattern**: string
- **fileNameUniqueness**: boolean
- **fileTypes**: Array<string>
- **configurationTemplate**: string
- **recordName**: string
- **inputDirectory**: string
- **outputDirectory**: string
- **rejectDirectory**: string
- **archiveDirectory**: string
- **jobCode**: string

### FileFormatListResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **dtos**: Array<FileFormatDto>

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
