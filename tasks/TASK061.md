# TASK061 — Service MeveoInstance

## Contexte
Le service « MeveoInstance » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%MeveoInstance
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/communication/meveoInstance` |  Find a meveoInstance by code  |     GET_MeveoInstance_search |
| POST | `/api/rest/communication/meveoInstance` | 	  Create a meveoInstance by dto.	   | POST_MeveoInstance_create |
| PUT | `/api/rest/communication/meveoInstance` | 	  Update a meveoInstance by dto	   |     PUT_MeveoInstance_update |
| DELETE | `/api/rest/communication/meveoInstance/{code}` |  Remove a meveoInstance by code  |     DELETE_MeveoInstance_{code} |
| POST | `/api/rest/communication/meveoInstance/createOrUpdate` |  CreateOrUpdate a meveoInstance by dto  |     POST_MeveoInstance_createOrUpdate |
| GET | `/api/rest/communication/meveoInstance/list` |  List meveoInstances  |     GET_MeveoInstance_list |
| GET | `/api/rest/communication/meveoInstance/version` | Get version of application | index_101 |

#### GET /api/rest/communication/meveoInstance

- Résumé:  Find a meveoInstance by code 
- OperationId:     GET_MeveoInstance_search
- Description: Find a meveoInstance by code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: MeveoInstanceResponseDto
    - application/xml: MeveoInstanceResponseDto

#### POST /api/rest/communication/meveoInstance

- Résumé: 	  Create a meveoInstance by dto.	  
- OperationId: POST_MeveoInstance_create
- Description: Create a meveoInstance by dto.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeveoInstanceDto
  - application/xml: MeveoInstanceDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/communication/meveoInstance

- Résumé: 	  Update a meveoInstance by dto	  
- OperationId:     PUT_MeveoInstance_update
- Description: Update a meveoInstance by dto
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeveoInstanceDto
  - application/xml: MeveoInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/communication/meveoInstance/{code}

- Résumé:  Remove a meveoInstance by code 
- OperationId:     DELETE_MeveoInstance_{code}
- Description: Remove a meveoInstance by code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/communication/meveoInstance/createOrUpdate

- Résumé:  CreateOrUpdate a meveoInstance by dto 
- OperationId:     POST_MeveoInstance_createOrUpdate
- Description: CreateOrUpdate a meveoInstance by dto
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeveoInstanceDto
  - application/xml: MeveoInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/communication/meveoInstance/list

- Résumé:  List meveoInstances 
- OperationId:     GET_MeveoInstance_list
- Description: List meveoInstances
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of Meveo Instances
    - application/json: MeveoInstancesResponseDto
    - application/xml: MeveoInstancesResponseDto

#### GET /api/rest/communication/meveoInstance/version

- Résumé: Get version of application
- OperationId: index_101
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### MeveoInstanceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **meveoInstance**: MeveoInstanceDto

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

### MeveoInstanceDto
Type: object
Champs obligatoires: code, url
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **productName**: string
- **productVersion**: string
- **owner**: string
- **md5**: string
- **status**: string (Valeurs: UNKNOWN, PARENT, CHILD, PARTNER)
- **creationDate**: string (date-time)
- **updateDate**: string (date-time)
- **keyEntreprise**: string
- **macAddress**: string
- **machineVendor**: string
- **installationMode**: string
- **nbCores**: string
- **memory**: string
- **hdSize**: string
- **osName**: string
- **osVersion**: string
- **osArch**: string
- **javaVmVersion**: string
- **javaVmName**: string
- **javaVendor**: string
- **javaVersion**: string
- **asVendor**: string
- **asVersion**: string
- **url**: string
- **authUsername**: string
- **authPassword**: string
- **user**: string
- **customer**: string

### MeveoInstancesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **meveoInstances**: Array<MeveoInstanceDto>

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
