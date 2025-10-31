# TASK076 — Service UserHierarchyLevel

## Contexte
Le service « UserHierarchyLevel » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%UserHierarchyLevel
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/hierarchy/userGroupLevel` |  Search for a user group level with a given code.   |     GET_UserHierarchyLevel_search |
| POST | `/api/rest/hierarchy/userGroupLevel` |  Create a new user hierarchy level   |     POST_UserHierarchyLevel_create |
| PUT | `/api/rest/hierarchy/userGroupLevel` |  Update an existing user hierarchy level   |     PUT_UserHierarchyLevel_update |
| DELETE | `/api/rest/hierarchy/userGroupLevel/{hierarchyLevelCode}` |  Remove an existing hierarchy level with a given code   |     DELETE_UserHierarchyLevel_{hierarchyLevelCode} |
| POST | `/api/rest/hierarchy/userGroupLevel/createOrUpdate` |  Create new or update an existing user hierarchy level with a given code   |     POST_UserHierarchyLevel_createOrUpdate |
| GET | `/api/rest/hierarchy/userGroupLevel/list` |  List user hierarchy levels matching a given criteria   |     GET_UserHierarchyLevel_list |
| POST | `/api/rest/hierarchy/userGroupLevel/list` |  List user hierarchy levels matching a given criteria   |     POST_UserHierarchyLevel_list |
| GET | `/api/rest/hierarchy/userGroupLevel/version` | Get version of application | index_123 |

#### GET /api/rest/hierarchy/userGroupLevel

- Résumé:  Search for a user group level with a given code.  
- OperationId:     GET_UserHierarchyLevel_search
- Description: Search for a user group level with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `hierarchyLevelCode` (QUERY, optionnel) — string
- Réponses:
  - default: the UserHierarchyLevel given the hierarchyCode
    - application/json: UserHierarchyLevelResponseDto
    - application/xml: UserHierarchyLevelResponseDto

#### POST /api/rest/hierarchy/userGroupLevel

- Résumé:  Create a new user hierarchy level  
- OperationId:     POST_UserHierarchyLevel_create
- Description: Create a new user hierarchy level
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UserHierarchyLevelDto
  - application/xml: UserHierarchyLevelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/hierarchy/userGroupLevel

- Résumé:  Update an existing user hierarchy level  
- OperationId:     PUT_UserHierarchyLevel_update
- Description: Update an existing user hierarchy level
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UserHierarchyLevelDto
  - application/xml: UserHierarchyLevelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/hierarchy/userGroupLevel/{hierarchyLevelCode}

- Résumé:  Remove an existing hierarchy level with a given code  
- OperationId:     DELETE_UserHierarchyLevel_{hierarchyLevelCode}
- Description: Remove an existing hierarchy level with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `hierarchyLevelCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/hierarchy/userGroupLevel/createOrUpdate

- Résumé:  Create new or update an existing user hierarchy level with a given code  
- OperationId:     POST_UserHierarchyLevel_createOrUpdate
- Description: Create new or update an existing user hierarchy level with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: UserHierarchyLevelDto
  - application/xml: UserHierarchyLevelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/hierarchy/userGroupLevel/list

- Résumé:  List user hierarchy levels matching a given criteria  
- OperationId:     GET_UserHierarchyLevel_list
- Description: List user hierarchy levels matching a given criteria
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
  - default: A list of user hierarchy levels
    - application/json: UserHierarchyLevelsDto
    - application/xml: UserHierarchyLevelsDto

#### POST /api/rest/hierarchy/userGroupLevel/list

- Résumé:  List user hierarchy levels matching a given criteria  
- OperationId:     POST_UserHierarchyLevel_list
- Description: List user hierarchy levels matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: A list of user hierarchy levels
    - application/json: UserHierarchyLevelsDto
    - application/xml: UserHierarchyLevelsDto

#### GET /api/rest/hierarchy/userGroupLevel/version

- Résumé: Get version of application
- OperationId: index_123
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### UserHierarchyLevelResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **userHierarchyLevel**: UserHierarchyLevelDto

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

### UserHierarchyLevelDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **parentLevel**: string
- **childLevels**: Array<UserHierarchyLevelDto>

### UserHierarchyLevelsDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **userHierarchyLevels**: Array<UserHierarchyLevelDto>

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
