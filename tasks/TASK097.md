# TASK097 — Service TaxMapping

## Contexte
Le service « TaxMapping » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%TaxMapping
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/taxMapping` |  Search for a Tax mapping with a given id   |     GET_TaxMapping_search |
| POST | `/api/rest/taxMapping` |  Create a new Tax mapping   |     POST_TaxMapping_create |
| PUT | `/api/rest/taxMapping` |  Update an existing Tax mapping   |     PUT_TaxMapping_update |
| DELETE | `/api/rest/taxMapping/{id}` |  Remove an existing Tax mapping with a given id   |     DELETE_TaxMapping_{id} |
| POST | `/api/rest/taxMapping/createOrUpdate` |  Create new or update an existing Tax mapping   |     POST_TaxMapping_createOrUpdate |
| GET | `/api/rest/taxMapping/list` |  Search Tax mapping by matching a given criteria   |     GET_TaxMapping_list |
| POST | `/api/rest/taxMapping/list` |  Search for Tax mapping by matching a given criteria   |     POST_TaxMapping_list |
| GET | `/api/rest/taxMapping/listGetAll` |  List taxMappings matching a given criteria  |     GET_TaxMapping_listGetAll |
| GET | `/api/rest/taxMapping/version` | Get version of application | index_145 |

#### GET /api/rest/taxMapping

- Résumé:  Search for a Tax mapping with a given id  
- OperationId:     GET_TaxMapping_search
- Description: Search for a Tax mapping with a given id
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, optionnel) — string
- Réponses:
  - default: A Tax mapping's data
    - application/json: TaxMappingResponseDto
    - application/xml: TaxMappingResponseDto

#### POST /api/rest/taxMapping

- Résumé:  Create a new Tax mapping  
- OperationId:     POST_TaxMapping_create
- Description: Create a new Tax mapping
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxMappingDto
  - application/xml: TaxMappingDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/taxMapping

- Résumé:  Update an existing Tax mapping  
- OperationId:     PUT_TaxMapping_update
- Description: Update an existing Tax mapping
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxMappingDto
  - application/xml: TaxMappingDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/taxMapping/{id}

- Résumé:  Remove an existing Tax mapping with a given id  
- OperationId:     DELETE_TaxMapping_{id}
- Description: Remove an existing Tax mapping with a given id
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/taxMapping/createOrUpdate

- Résumé:  Create new or update an existing Tax mapping  
- OperationId:     POST_TaxMapping_createOrUpdate
- Description: Create new or update an existing Tax mapping
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TaxMappingDto
  - application/xml: TaxMappingDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/taxMapping/list

- Résumé:  Search Tax mapping by matching a given criteria  
- OperationId:     GET_TaxMapping_list
- Description: Search Tax mapping by matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `query` (QUERY, optionnel) — string
- `fields` (QUERY, optionnel) — string
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "id"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- Réponses:
  - default: List of Tax mappings
    - application/json: TaxMappingListResponseDto
    - application/xml: TaxMappingListResponseDto

#### POST /api/rest/taxMapping/list

- Résumé:  Search for Tax mapping by matching a given criteria  
- OperationId:     POST_TaxMapping_list
- Description: Search for Tax mapping by matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of Tax mappings
    - application/json: TaxMappingListResponseDto
    - application/xml: TaxMappingListResponseDto

#### GET /api/rest/taxMapping/listGetAll

- Résumé:  List taxMappings matching a given criteria 
- OperationId:     GET_TaxMapping_listGetAll
- Description: List taxMappings matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of taxMappings
    - application/json: TaxMappingListResponseDto
    - application/xml: TaxMappingListResponseDto

#### GET /api/rest/taxMapping/version

- Résumé: Get version of application
- OperationId: index_145
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### TaxMappingResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **dto**: TaxMappingDto

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

### TaxMappingDto
Type: object
Propriétés:
- **id**: integer (int64)
- **accountTaxCategoryCode**: string
- **chargeTaxClassCode**: string
- **validFrom**: string (date-time)
- **validTo**: string (date-time)
- **sellerCountryCode**: string
- **buyerCountryCode**: string
- **filterEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxCode**: string
- **taxEL**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **taxScriptCode**: string
- **priority**: integer (int32)
- **source**: string (Contraintes: longueur min: 0 · longueur max: 2000)
- **originId**: integer (int64)

### TaxMappingListResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **dtos**: Array<TaxMappingDto>

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
