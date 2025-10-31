# TASK074 — Service ReportExtract

## Contexte
Le service « ReportExtract » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%ReportExtract
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/finance/reportExtracts` |  Search for a report extract with a given code.  |     GET_ReportExtract_search |
| POST | `/api/rest/finance/reportExtracts` |  Updates a report extract with the given data.  |     POST_ReportExtract_create_1 |
| DELETE | `/api/rest/finance/reportExtracts` |  Delete a Report Extract with a given code.   |     DELETE_ReportExtract_delete |
| POST | `/api/rest/finance/reportExtracts/{code}/disable` |  Disable a Report extract with a given code   |     POST_ReportExtract_{code}_disable |
| POST | `/api/rest/finance/reportExtracts/{code}/enable` |  Enable a Report extract with a given code   |     POST_ReportExtract_{code}_enable |
| POST | `/api/rest/finance/reportExtracts/createOrUpdate` |  Create / update a report extract with the given data.  |     POST_ReportExtract_createOrUpdate |
| GET | `/api/rest/finance/reportExtracts/executionHistory` |  Finds and returns a list of ReportExtract history for a given code.   |     GET_ReportExtract_executionHistory_1 |
| GET | `/api/rest/finance/reportExtracts/executionHistory/list` |  Returns a list of filtered and paginated report extract execution history.   |     GET_ReportExtract_executionHistory_list |
| POST | `/api/rest/finance/reportExtracts/executionHistory/list` |  Returns a list of filtered and paginated report extract execution history.   |     POST_ReportExtract_executionHistory_list_1 |
| GET | `/api/rest/finance/reportExtracts/list` |  Returns a paginated list of ReportExtract.   | GET_ReportExtract_list |
| POST | `/api/rest/finance/reportExtracts/run` |  Runs a report extract with the given parameter.  |     POST_ReportExtract_run |
| GET | `/api/rest/finance/reportExtracts/version` | Get version of application | index_121 |

#### GET /api/rest/finance/reportExtracts

- Résumé:  Search for a report extract with a given code. 
- OperationId:     GET_ReportExtract_search
- Description: Search for a report extract with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `reportExtractCode` (QUERY, optionnel) — string
- Réponses:
  - default: matched report extract
    - application/json: ReportExtractResponseDto
    - application/xml: ReportExtractResponseDto

#### POST /api/rest/finance/reportExtracts

- Résumé:  Updates a report extract with the given data. 
- OperationId:     POST_ReportExtract_create_1
- Description: Updates a report extract with the given data.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ReportExtractDto
  - application/xml: ReportExtractDto
- Réponses:
  - default: status of the call
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/finance/reportExtracts

- Résumé:  Delete a Report Extract with a given code.  
- OperationId:     DELETE_ReportExtract_delete
- Description: Delete a Report Extract with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: string
  - application/xml: string
- Réponses:
  - default: status of the call
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/finance/reportExtracts/{code}/disable

- Résumé:  Disable a Report extract with a given code  
- OperationId:     POST_ReportExtract_{code}_disable
- Description: Disable a Report extract with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/finance/reportExtracts/{code}/enable

- Résumé:  Enable a Report extract with a given code  
- OperationId:     POST_ReportExtract_{code}_enable
- Description: Enable a Report extract with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/finance/reportExtracts/createOrUpdate

- Résumé:  Create / update a report extract with the given data. 
- OperationId:     POST_ReportExtract_createOrUpdate
- Description: Create / update a report extract with the given data.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ReportExtractDto
  - application/xml: ReportExtractDto
- Réponses:
  - default: status of the call
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/finance/reportExtracts/executionHistory

- Résumé:  Finds and returns a list of ReportExtract history for a given code.  
- OperationId:     GET_ReportExtract_executionHistory_1
- Description: Finds and returns a list of ReportExtract history for a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: list of report extract execution detail
    - application/json: ReportExtractExecutionResultsResponseDto
    - application/xml: ReportExtractExecutionResultsResponseDto

#### GET /api/rest/finance/reportExtracts/executionHistory/list

- Résumé:  Returns a list of filtered and paginated report extract execution history.  
- OperationId:     GET_ReportExtract_executionHistory_list
- Description: Returns a list of filtered and paginated report extract execution history.
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
  - Contraintes: défaut: "DESCENDING"
- Réponses:
  - default: list of ReportExtract run history
    - application/json: ReportExtractExecutionResultsResponseDto
    - application/xml: ReportExtractExecutionResultsResponseDto

#### POST /api/rest/finance/reportExtracts/executionHistory/list

- Résumé:  Returns a list of filtered and paginated report extract execution history.  
- OperationId:     POST_ReportExtract_executionHistory_list_1
- Description: Returns a list of filtered and paginated report extract execution history.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: list of ReportExtract run history
    - application/json: ReportExtractExecutionResultsResponseDto
    - application/xml: ReportExtractExecutionResultsResponseDto

#### GET /api/rest/finance/reportExtracts/list

- Résumé:  Returns a paginated list of ReportExtract.  
- OperationId: GET_ReportExtract_list
- Description: Returns a paginated list of ReportExtract.
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
  - Contraintes: défaut: "DESCENDING"
- Réponses:
  - default: list of ReportExtract
    - application/json: ReportExtractsResponseDto
    - application/xml: ReportExtractsResponseDto

#### POST /api/rest/finance/reportExtracts/run

- Résumé:  Runs a report extract with the given parameter. 
- OperationId:     POST_ReportExtract_run
- Description: Runs a report extract with the given parameter.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: RunReportExtractDto
  - application/xml: RunReportExtractDto
- Réponses:
  - default: status of the call
    - application/json: ReportExtractExecutionResultResponseDto
    - application/xml: ReportExtractExecutionResultResponseDto

#### GET /api/rest/finance/reportExtracts/version

- Résumé: Get version of application
- OperationId: index_121
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### ReportExtractResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **reportExtract**: ReportExtractDto

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

### ReportExtractDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **scriptType**: string (Valeurs: JAVA, SQL)
- **filenameFormat**: string
- **fileSeparator**: string
- **category**: string
- **outputDir**: string
- **scriptInstanceCode**: string
- **sqlQuery**: string
- **params**: object
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **reportExtractResultType**: string (Valeurs: CSV, HTML)
- **style**: string
- **imagePath**: string
- **customTableCode**: string
- **accumulate**: boolean
- **separator**: string
- **decimalSeparator**: string
- **generateEmptyReport**: boolean
- **maximumLine**: integer (int64)
- **includeHeaders**: boolean

### ReportExtractExecutionResultsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **reportExtractExecutionResults**: Array<ReportExtractExecutionResultDto>

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

### ReportExtractExecutionResultDto
Type: object
Propriétés:
- **reportExtractCode**: string
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **filePath**: string
- **lineCount**: integer (int32)
- **origin**: string (Valeurs: API, JOB, GUI)
- **errorMessage**: string
- **status**: boolean

### ReportExtractsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **reportExtracts**: Array<ReportExtractDto>

### RunReportExtractDto
Type: object
Champs obligatoires: code
Propriétés:
- **code**: string
- **params**: object

### ReportExtractExecutionResultResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **reportExtractExecutionResult**: ReportExtractExecutionResultDto

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
