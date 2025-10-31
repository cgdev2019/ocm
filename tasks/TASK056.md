# TASK056 — Service TriggeredEdr

## Contexte
Le service « TriggeredEdr » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%TriggeredEdr
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/triggeredEdr` |  Find triggered edr with a given code.   |     GET_TriggeredEdr_search |
| POST | `/api/rest/catalog/triggeredEdr` |  Create a new triggered edr. template   |     POST_TriggeredEdr_create |
| PUT | `/api/rest/catalog/triggeredEdr` |  Update an existing triggered edr. template   |     PUT_TriggeredEdr_update |
| DELETE | `/api/rest/catalog/triggeredEdr/{triggeredEdrCode}` |  Remove an existing triggered edr template with a given code.   |     DELETE_TriggeredEdr_{triggeredEdrCode} |
| POST | `/api/rest/catalog/triggeredEdr/createOrUpdate` |  Create new or update an existing triggered edr template   |     POST_TriggeredEdr_createOrUpdate |
| GET | `/api/rest/catalog/triggeredEdr/listGetAll` |  Gets a triggeredEdrs list.  |     GET_TriggeredEdr_listGetAll |
| GET | `/api/rest/catalog/triggeredEdr/version` | Get version of application | index_62 |

#### GET /api/rest/catalog/triggeredEdr

- Résumé:  Find triggered edr with a given code.  
- OperationId:     GET_TriggeredEdr_search
- Description: Find triggered edr with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `triggeredEdrCode` (QUERY, optionnel) — string
- Réponses:
  - default: Returns triggeredEdrTemplate
    - application/json: GetTriggeredEdrResponseDto
    - application/xml: GetTriggeredEdrResponseDto

#### POST /api/rest/catalog/triggeredEdr

- Résumé:  Create a new triggered edr. template  
- OperationId:     POST_TriggeredEdr_create
- Description: Create a new triggered edr. template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TriggeredEdrTemplateDto
  - application/xml: TriggeredEdrTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/triggeredEdr

- Résumé:  Update an existing triggered edr. template  
- OperationId:     PUT_TriggeredEdr_update
- Description: Update an existing triggered edr. template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TriggeredEdrTemplateDto
  - application/xml: TriggeredEdrTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/triggeredEdr/{triggeredEdrCode}

- Résumé:  Remove an existing triggered edr template with a given code.  
- OperationId:     DELETE_TriggeredEdr_{triggeredEdrCode}
- Description: Remove an existing triggered edr template with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `triggeredEdrCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/triggeredEdr/createOrUpdate

- Résumé:  Create new or update an existing triggered edr template  
- OperationId:     POST_TriggeredEdr_createOrUpdate
- Description: Create new or update an existing triggered edr template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TriggeredEdrTemplateDto
  - application/xml: TriggeredEdrTemplateDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/triggeredEdr/listGetAll

- Résumé:  Gets a triggeredEdrs list. 
- OperationId:     GET_TriggeredEdr_listGetAll
- Description: Gets a triggeredEdrs list.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: Return triggeredEdrs list
    - application/json: TriggeredEdrsResponseDto
    - application/xml: TriggeredEdrsResponseDto

#### GET /api/rest/catalog/triggeredEdr/version

- Résumé: Get version of application
- OperationId: index_62
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetTriggeredEdrResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **triggeredEdrTemplate**: TriggeredEdrTemplateDto

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

### TriggeredEdrTemplateDto
list triggered EDR
Type: object
Champs obligatoires: code, quantityEl
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **subscriptionEl**: string
- **meveoInstanceCode**: string
- **conditionEl**: string
- **quantityEl**: string
- **param1El**: string
- **param2El**: string
- **param3El**: string
- **param4El**: string
- **opencellInstanceEL**: string
- **triggeredEdrScript**: string

### TriggeredEdrsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **triggeredEdrs**: Array<TriggeredEdrTemplateDto>

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
