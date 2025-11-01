# TASK066 — Service CustomTable

## Contexte
Le service « CustomTable » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%CustomTable
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/customTable` |  Append data to a custom table  |     POST_CustomTable_create |
| PUT | `/api/rest/customTable` |  Update existing data in a custom table   |     PUT_CustomTable_update |
| DELETE | `/api/rest/customTable` |  Remove an existing data from a custom table.   |     DELETE_CustomTable_delete |
| DELETE | `/api/rest/customTable/{customTableCode}` |  Remove existing data from a custom table given search parameters   |     DELETE_CustomTable_{customTableCode} |
| POST | `/api/rest/customTable/createOrUpdate` |  Append or update data in a custom table   |     POST_CustomTable_createOrUpdate |
| POST | `/api/rest/customTable/disable` |  Mark records as disabled in a custom table. Applies only to those custom tables that contain a field 'disabled'  |     POST_CustomTable_disable |
| POST | `/api/rest/customTable/enable` |  Mark records as enabled in a custom table. Applies only to those custom tables that contain a field 'disabled'   |     POST_CustomTable_enable |
| POST | `/api/rest/customTable/list/{customTableCode}` |  Search in custom tables   |     POST_CustomTable_list_{customTableCode} |
| POST | `/api/rest/customTable/listFromWrapper` |  Search in custom tables using CustomTableWrapper  |     POST_CustomTable_listFromWrapper |
| GET | `/api/rest/customTable/version` | Get version of application | index_111 |

#### POST /api/rest/customTable

- Résumé:  Append data to a custom table 
- OperationId:     POST_CustomTable_create
- Description: Append data to a custom table
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomTableDataDto
  - application/xml: CustomTableDataDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/customTable

- Résumé:  Update existing data in a custom table  
- OperationId:     PUT_CustomTable_update
- Description: Update existing data in a custom table
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomTableDataDto
  - application/xml: CustomTableDataDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/customTable

- Résumé:  Remove an existing data from a custom table.  
- OperationId:     DELETE_CustomTable_delete
- Description: Remove an existing data from a custom table.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomTableDataDto
  - application/xml: CustomTableDataDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/customTable/{customTableCode}

- Résumé:  Remove existing data from a custom table given search parameters  
- OperationId:     DELETE_CustomTable_{customTableCode}
- Description: Remove existing data from a custom table given search parameters
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customTableCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: Custom table data
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customTable/createOrUpdate

- Résumé:  Append or update data in a custom table  
- OperationId:     POST_CustomTable_createOrUpdate
- Description: Append or update data in a custom table
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomTableDataDto
  - application/xml: CustomTableDataDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customTable/disable

- Résumé:  Mark records as disabled in a custom table. Applies only to those custom tables that contain a field 'disabled' 
- OperationId:     POST_CustomTable_disable
- Description: Mark records as disabled in a custom table. Applies only to those custom tables that contain a field 'disabled'
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomTableDataDto
  - application/xml: CustomTableDataDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customTable/enable

- Résumé:  Mark records as enabled in a custom table. Applies only to those custom tables that contain a field 'disabled'  
- OperationId:     POST_CustomTable_enable
- Description: Mark records as enabled in a custom table. Applies only to those custom tables that contain a field 'disabled'
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomTableDataDto
  - application/xml: CustomTableDataDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/customTable/list/{customTableCode}

- Résumé:  Search in custom tables  
- OperationId:     POST_CustomTable_list_{customTableCode}
- Description: Search in custom tables
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customTableCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: Custom table data
    - application/json: CustomTableDataResponseDto
    - application/xml: CustomTableDataResponseDto

#### POST /api/rest/customTable/listFromWrapper

- Résumé:  Search in custom tables using CustomTableWrapper 
- OperationId:     POST_CustomTable_listFromWrapper
- Description: Search in custom tables using CustomTableWrapper
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CustomTableWrapperDto
  - application/xml: CustomTableWrapperDto
- Réponses:
  - default: Custom table data
    - application/json: CustomTableDataResponseDto
    - application/xml: CustomTableDataResponseDto

#### GET /api/rest/customTable/version

- Résumé: Get version of application
- OperationId: index_111
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### CustomTableDataDto
Type: object
Propriétés:
- **customTableCode**: string
- **overwrite**: boolean
- **values**: Array<CustomTableRecordDto>
- **valuesFromListofMap**: Array<object>

### CustomTableRecordDto
Type: object
Propriétés:
- **id**: integer (int64)
- **values**: object
- **tableName**: string

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

### CustomTableDataResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **customTableData**: CustomTableDataDto

### CustomTableWrapperDto
Type: object
Champs obligatoires: ctwCode
Propriétés:
- **ctwCode**: string
- **entityId**: string
- **entityClass**: string
- **pagingAndFiltering**: PagingAndFiltering

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
