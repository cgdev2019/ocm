# TASK064 — API V2 ReportQuery

## Contexte
Le domaine « ReportQuery » (tag OpenAPI `ReportQuery`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

## Objectifs
- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).
- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.
- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.
- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).

## Notes
- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.
- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/v2/queryManagement/reportQueries` | Return a list of report queries | getReportQueries |
| POST | `/api/rest/v2/queryManagement/reportQueries` | Create a new report query | createReportQuery |
| PUT | `/api/rest/v2/queryManagement/reportQueries/{id}` | This endpoint allows to update an report query | update_18 |
| GET | `/api/rest/v2/queryManagement/reportQueries/{queryId}` | This endpoint allows to load a report query resource | find_5 |
| DELETE | `/api/rest/v2/queryManagement/reportQueries/{queryId}` | This endpoint allows to delete a report query resource | delete_15 |
| GET | `/api/rest/v2/queryManagement/reportQueries/{queryId}/download` | This API will download result query as csv or excel format. | downloadQueryExecutionResult |
| POST | `/api/rest/v2/queryManagement/reportQueries/{queryId}/execute` | execute report query | execute |
| GET | `/api/rest/v2/queryManagement/reportQueries/queryExecutionResult/{queryexecutionResultId}/results` | This API will convert the generate report file to json. | findQueryResult |
| POST | `/api/rest/v2/queryManagement/reportQueries/verify` | Verify report query | verifyReportQuery |

#### GET /api/rest/v2/queryManagement/reportQueries

- Résumé: Return a list of report queries
- OperationId: getReportQueries
- Description: Returns a list of report queries
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int64)
  - Contraintes: défaut: 0
- `limit` (QUERY, optionnel) — integer (int64)
  - Contraintes: défaut: 50
- `sortOrder` (QUERY, optionnel) — string
- `sortBy` (QUERY, optionnel) — string
- `filter` (QUERY, optionnel) — string
- `query` (QUERY, optionnel) — string
- `fields` (QUERY, optionnel) — string
- Réponses:
  - 200: report queries list
  - 404: No data found
    - application/json: ApiException (ApiException)
  - default: list of report queries
    - application/json: ReportQuery (ReportQuery)

#### POST /api/rest/v2/queryManagement/reportQueries

- Résumé: Create a new report query
- OperationId: createReportQuery
- Description: Create a new report query
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: ReportQueryInput (ReportQueryInput)
- Réponses:
  - 200: Report query successfully created, and the id is returned in the response
  - 204: Report query successfully created
  - 404: Target entity does not exist

#### PUT /api/rest/v2/queryManagement/reportQueries/{id}

- Résumé: This endpoint allows to update an report query
- OperationId: update_18
- Description: update an existing report query
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Report query id
- Corps de requête:
  - obligatoire
  - application/json: ReportQueryInput (ReportQueryInput)
- Réponses:
  - 200: the report query successfully updated, and the id is returned in the response
  - 404: bad request, report query is not found

#### GET /api/rest/v2/queryManagement/reportQueries/{queryId}

- Résumé: This endpoint allows to load a report query resource
- OperationId: find_5
- Description: Return a report query
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `queryId` (PATH, obligatoire) — integer (int64) : Report query id
- Réponses:
  - 200: Query successfully loaded
  - 404: Query does not exist

#### DELETE /api/rest/v2/queryManagement/reportQueries/{queryId}

- Résumé: This endpoint allows to delete a report query resource
- OperationId: delete_15
- Description: delete report query
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `queryId` (PATH, obligatoire) — integer (int64) : report query id
- Réponses:
  - 204: Query successfully deleted
  - 404: Query does not exist

#### GET /api/rest/v2/queryManagement/reportQueries/{queryId}/download

- Résumé: This API will download result query as csv or excel format.
- OperationId: downloadQueryExecutionResult
- Description: download result query execution as scv or excel format
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `queryId` (PATH, obligatoire) — integer (int64)
- `format` (QUERY, optionnel) — string : format of the file to be downloaded, by default it CSV format
  - Valeurs autorisées: CSV, EXCEL
  - Contraintes: défaut: "CSV"
- Réponses:
  - 200: query execution result is downloaded
  - 404: the Report query execution does not exist

#### POST /api/rest/v2/queryManagement/reportQueries/{queryId}/execute

- Résumé: execute report query
- OperationId: execute
- Description: Execute report query
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `queryId` (PATH, obligatoire) — integer (int64) : Query id
- `async` (QUERY, optionnel) — boolean : Execution type Synchronously or asynchronously
- `sendNotification` (QUERY, optionnel) — boolean
  - Contraintes: défaut: true
- Corps de requête:
  - obligatoire
  - application/json: ReportQueryInput (ReportQueryInput)
- Réponses:
  - 200: Query successfully executed
  - 404: Query does not exists

#### GET /api/rest/v2/queryManagement/reportQueries/queryExecutionResult/{queryexecutionResultId}/results

- Résumé: This API will convert the generate report file to json.
- OperationId: findQueryResult
- Description: look for the query result by its id get its path location, and transform csv file to json
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `queryexecutionResultId` (PATH, obligatoire) — integer (int64)
- Réponses:
  - 200: query execution result successfully generated
  - 404: the Report query execution does not exist / the file path is missing / file path doesn't exist / file extension is not CSV format

#### POST /api/rest/v2/queryManagement/reportQueries/verify

- Résumé: Verify report query
- OperationId: verifyReportQuery
- Description: Verify the existing of the report query according to its visibility and creator
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: VerifyQueryInput (VerifyQueryInput)
- Réponses:
  - 200: The query not exists with the visibility
  - 409: The query already exists and belong you
  - 422: The query already exists and belong to another user

## Schémas principaux

### ApiException
Type: object
Propriétés:
- **causes**: Array<Cause>
- **details**: string
- **code**: string
- **status**: string (Valeurs: OK, Created, Accepted, No Content, Reset Content, Partial Content, Moved Permanently, Found, See Other, Not Modified, Use Proxy, Temporary Redirect, Bad Request, Unauthorized, Payment Required, Forbidden, Not Found, Method Not Allowed, Not Acceptable, Proxy Authentication Required, Request Timeout, Conflict, Gone, Length Required, Precondition Failed, Request Entity Too Large, Request-URI Too Long, Unsupported Media Type, Requested Range Not Satisfiable, Expectation Failed, Precondition Required, Too Many Requests, Request Header Fields Too Large, Internal Server Error, Not Implemented, Bad Gateway, Service Unavailable, Gateway Timeout, HTTP Version Not Supported, Network Authentication Required)
- **id**: integer (int64)
- **links**: Array<object>

### Cause
Type: object
Propriétés:
- **causeMessage**: string

### ReportQuery
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **targetEntity**: string
- **visibility**: string (Valeurs: PUBLIC, PRIVATE, PROTECTED)
- **fields**: Array<string>
- **filters**: object
- **generatedQuery**: string
- **sortBy**: string
- **sortOrder**: string (Valeurs: DESCENDING, ASCENDING)
- **queryParameters**: object
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **parentEntity**: BusinessEntity
- **transient**: boolean

### Auditable
Type: object
Propriétés:
- **created**: string (date-time)
- **updated**: string (date-time)
- **creator**: string
- **updater**: string
- **lastUser**: string
- **lastModified**: string (date-time)

### AuditableFieldHistory
Type: object
Propriétés:
- **fieldName**: string
- **previousState**: object
- **currentState**: object
- **auditType**: string (Valeurs: STATUS, RENEWAL, OTHER)
- **historable**: boolean
- **notfiable**: boolean
- **historized**: boolean
- **notified**: boolean

### BusinessEntity
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **version**: integer (int32)
- **auditable**: Auditable
- **historized**: boolean
- **notified**: boolean
- **auditableFields**: Array<AuditableFieldHistory>
- **code**: string (Contraintes: longueur min: 1 · longueur max: 255)
- **description**: string (Contraintes: longueur min: 0 · longueur max: 255)
- **appendGeneratedCode**: boolean
- **codeChanged**: boolean
- **descriptionOrCode**: string
- **descriptionAndCode**: string
- **referenceDescription**: string
- **referenceCode**: string
- **parentEntity**: BusinessEntity
- **transient**: boolean

### ReportQueryInput
Type: object
Propriétés:
- **queryDescription**: string — Report query description
- **queryName**: string — Report query code
- **emails**: Array<string> — Report query emails
- **targetEntity**: string — Report query description
- **sortBy**: string — Sort by
- **sortOrder**: string — Sort order (Valeurs: DESCENDING, ASCENDING)
- **filters**: object — Report query description
- **visibility**: string — Report query description (Valeurs: PUBLIC, PRIVATE, PROTECTED)
- **fields**: Array<string> — Report query description

### VerifyQueryInput
Type: object
Propriétés:
- **queryName**: string — Report query code
- **visibility**: string — Report query description (Valeurs: PUBLIC, PRIVATE, PROTECTED)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
