# TASK071 — Service Chart

## Contexte
Le service « Chart » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Chart
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/chart` |  Find a chart with a given code   |     GET_Chart_search |
| POST | `/api/rest/chart` |  Create a new chart   |     POST_Chart_create |
| PUT | `/api/rest/chart` |  Update an existing chart   |     PUT_Chart_update |
| DELETE | `/api/rest/chart` |  Remove an existing chart with a given code   |     DELETE_Chart_delete |
| POST | `/api/rest/chart/{code}/disable` |  Disable a Chart with a given code   |     POST_Chart_{code}_disable |
| POST | `/api/rest/chart/{code}/enable` |  Enable a Chart with a given code   |     POST_Chart_{code}_enable |
| POST | `/api/rest/chart/bar` |  Create a new bar chart   |     POST_Chart_bar |
| PUT | `/api/rest/chart/bar` |  Update an existing bar chart   |     PUT_Chart_bar |
| POST | `/api/rest/chart/createOrUpdate` |  Create new or update an existing chart with a given code   |     POST_Chart_createOrUpdate |
| POST | `/api/rest/chart/line` |  Create a new line chart   |     POST_Chart_line |
| PUT | `/api/rest/chart/line` |  Update an existing line chart   |     PUT_Chart_line |
| GET | `/api/rest/chart/listGetAll` |  List Calendars matching a given criteria  |     GET_Chart_listGetAll |
| POST | `/api/rest/chart/pie` |  Create a new pie chart   |     POST_Chart_pie |
| PUT | `/api/rest/chart/pie` |  Update an existing pie chart   |     PUT_Chart_pie |
| GET | `/api/rest/chart/version` | Get version of application | index_118 |

#### GET /api/rest/chart

- Résumé:  Find a chart with a given code  
- OperationId:     GET_Chart_search
- Description: Find a chart with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `chartCode` (QUERY, optionnel) — string
- Réponses:
  - default: Get Chart Response
    - application/json: GetChartResponse
    - application/xml: GetChartResponse

#### POST /api/rest/chart

- Résumé:  Create a new chart  
- OperationId:     POST_Chart_create
- Description: Create a new chart
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ChartDto
  - application/xml: ChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/chart

- Résumé:  Update an existing chart  
- OperationId:     PUT_Chart_update
- Description: Update an existing chart
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ChartDto
  - application/xml: ChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/chart

- Résumé:  Remove an existing chart with a given code  
- OperationId:     DELETE_Chart_delete
- Description: Remove an existing chart with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `chartCode` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/chart/{code}/disable

- Résumé:  Disable a Chart with a given code  
- OperationId:     POST_Chart_{code}_disable
- Description: Disable a Chart with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/chart/{code}/enable

- Résumé:  Enable a Chart with a given code  
- OperationId:     POST_Chart_{code}_enable
- Description: Enable a Chart with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/chart/bar

- Résumé:  Create a new bar chart  
- OperationId:     POST_Chart_bar
- Description: Create a new bar chart
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BarChartDto
  - application/xml: BarChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/chart/bar

- Résumé:  Update an existing bar chart  
- OperationId:     PUT_Chart_bar
- Description: Update an existing bar chart
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BarChartDto
  - application/xml: BarChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/chart/createOrUpdate

- Résumé:  Create new or update an existing chart with a given code  
- OperationId:     POST_Chart_createOrUpdate
- Description: Create new or update an existing chart with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ChartDto
  - application/xml: ChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/chart/line

- Résumé:  Create a new line chart  
- OperationId:     POST_Chart_line
- Description: Create a new line chart
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: LineChartDto
  - application/xml: LineChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/chart/line

- Résumé:  Update an existing line chart  
- OperationId:     PUT_Chart_line
- Description: Update an existing line chart
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: LineChartDto
  - application/xml: LineChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/chart/listGetAll

- Résumé:  List Calendars matching a given criteria 
- OperationId:     GET_Chart_listGetAll
- Description: List Calendars matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of Calendars
    - application/json: ChartsResponseDto
    - application/xml: ChartsResponseDto

#### POST /api/rest/chart/pie

- Résumé:  Create a new pie chart  
- OperationId:     POST_Chart_pie
- Description: Create a new pie chart
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PieChartDto
  - application/xml: PieChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/chart/pie

- Résumé:  Update an existing pie chart  
- OperationId:     PUT_Chart_pie
- Description: Update an existing pie chart
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PieChartDto
  - application/xml: PieChartDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/chart/version

- Résumé: Get version of application
- OperationId: index_118
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetChartResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **chartDto**: ChartDto

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

### ChartDto
Type: object
Champs obligatoires: chartType, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **measurableQuantity**: MeasurableQuantityDto
- **width**: string
- **height**: string
- **style**: string
- **styleClass**: string
- **extender**: string
- **visible**: boolean
- **chartType**: string

### MeasurableQuantityDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **theme**: string
- **dimension1**: string
- **dimension2**: string
- **dimension3**: string
- **dimension4**: string
- **editable**: boolean
- **additive**: boolean
- **sqlQuery**: string
- **measurementPeriod**: string (Valeurs: DAILY, WEEKLY, MONTHLY, YEARLY)
- **lastMeasureDate**: string (date-time)
- **codeOnly**: boolean

### BarChartDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **measurableQuantity**: MeasurableQuantityDto
- **width**: string
- **height**: string
- **style**: string
- **styleClass**: string
- **extender**: string
- **visible**: boolean
- **legendPosition**: string (Valeurs: n, s, e, w)
- **barPadding**: integer (int32)
- **barMargin**: integer (int32)
- **orientation**: string (Valeurs: vertical, horizontal)
- **stacked**: boolean
- **min**: number (double)
- **max**: number (double)
- **breakOnNull**: boolean
- **xaxisLabel**: string
- **yaxisLabel**: string
- **xaxisAngle**: integer (int32)
- **yaxisAngle**: integer (int32)
- **legendCols**: integer (int32)
- **legendRows**: integer (int32)
- **zoom**: boolean
- **animate**: boolean
- **showDataTip**: boolean
- **datatipFormat**: string

### LineChartDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **measurableQuantity**: MeasurableQuantityDto
- **width**: string
- **height**: string
- **style**: string
- **styleClass**: string
- **extender**: string
- **visible**: boolean
- **filled**: boolean
- **legendPosition**: string (Valeurs: n, s, e, w)
- **seriesColors**: string
- **shadow**: boolean
- **minX**: integer (int32)
- **maxX**: integer (int32)
- **minY**: integer (int32)
- **maxY**: integer (int32)
- **breakOnNull**: boolean
- **xaxisLabel**: string
- **yaxisLabel**: string
- **xaxisAngle**: integer (int32)
- **yaxisAngle**: integer (int32)
- **stacked**: boolean
- **zoom**: boolean
- **animate**: boolean
- **showDataTip**: boolean
- **datatipFormat**: string
- **legendCols**: integer (int32)
- **legendRows**: integer (int32)

### ChartsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **charts**: Array<ChartDto>

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

### PieChartDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **measurableQuantity**: MeasurableQuantityDto
- **width**: string
- **height**: string
- **style**: string
- **styleClass**: string
- **extender**: string
- **visible**: boolean
- **filled**: boolean
- **legendPosition**: string (Valeurs: n, s, e, w)
- **seriesColors**: string
- **diameter**: integer (int32)
- **sliceMargin**: integer (int32)
- **shadow**: boolean
- **showDataLabels**: boolean
- **legendCols**: integer (int32)
- **legendRows**: integer (int32)

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
