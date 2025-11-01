# TASK079 — Service Job

## Contexte
Le service « Job » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Job
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/job` |  Find a job instance with a given code    |     GET_Job_search |
| POST | `/api/rest/job` |  Create a new job instance  |     POST_Job_create_1 |
| PUT | `/api/rest/job` |  Update an existing job instance   |     PUT_Job_update |
| GET | `/api/rest/job/{code}/jobExecution/{id}/jobReport` |  Find a job execution result.  |     GET_Job{code}_jobExecution_{id}_jobReport |
| GET | `/api/rest/job/{jobInstanceCode}` |  Find a job instance with a given code  |     GET_Job_{jobInstanceCode} |
| DELETE | `/api/rest/job/{jobInstanceCode}` |  Remove an existing job instance with a given code    |     DELETE_Job_{jobInstanceCode} |
| POST | `/api/rest/job/create` |  Create a new job instance   |     POST_Job_create |
| POST | `/api/rest/job/createOrUpdate` |  Create new or update an existing job instance with a given code   |     POST_Job_createOrUpdate |
| POST | `/api/rest/job/execute` |  Execute a given job instance info    |     POST_Job_execute |
| POST | `/api/rest/job/execution` |  Execute a given job instance info  |     POST_Job_execution |
| GET | `/api/rest/job/jobReport` |  Find a job execution result.   |     GET_Job_jobReport |
| GET | `/api/rest/job/jobReport/list` |  Job execution list matching a given criteria  |     GET_Job_jobReport_list |
| POST | `/api/rest/job/jobReport/list` |  Job execution list matching a given criteria  |     POST_Job_jobReport_list |
| GET | `/api/rest/job/jobReport/listGetAll` |  List jobExecutions matching a given criteria  |     GET_Job_jobReport_listGetAll |
| GET | `/api/rest/job/list` |  Deprecated in v.4.7.2 Use /list instead.   |     GET_Job_list |
| GET | `/api/rest/job/listCategories` |  List job categories   |     GET_Job_listCategories |
| POST | `/api/rest/job/stop/{jobInstanceCode}` |  Stop a given job instance info    |     POST_Job_stop_{jobInstanceCode} |
| PUT | `/api/rest/job/stop/{jobInstanceCode}` |  Stop a given job instance info for put endpoint  |     PUT_Job_stop_{jobInstanceCode} |
| GET | `/api/rest/job/timer` |  Find a timer with a given code    |     GET_Job_timer_ |
| POST | `/api/rest/job/timer` |  Create a new timer entity   |     POST_Job_timer_ |
| PUT | `/api/rest/job/timer` |  Update an existing timer entity   |     PUT_Job_timer_ |
| DELETE | `/api/rest/job/timer/{timerCode}` |  Remove an existing timer with a given code    |     DELETE_Job_timer_{timerCode} |
| POST | `/api/rest/job/timer/createOrUpdate` |  Create new or update an existing timer entity with a given code   |     POST_Job_timer_createOrUpdate_ |
| GET | `/api/rest/job/timers/{timerCode}` |  Find a timer with a given code  |     GET_Job_timers_{timerCode} |
| GET | `/api/rest/job/version` | Get version of application | index_126 |

#### GET /api/rest/job

- Résumé:  Find a job instance with a given code   
- OperationId:     GET_Job_search
- Description: Find a job instance with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `jobInstanceCode` (QUERY, optionnel) — string
- Réponses:
  - default: object containing the matched JobInstance
    - application/json: JobInstanceResponseDto
    - application/xml: JobInstanceResponseDto

#### POST /api/rest/job

- Résumé:  Create a new job instance 
- OperationId:     POST_Job_create_1
- Description: Create a new job instance
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobInstanceDto
  - application/xml: JobInstanceDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/job

- Résumé:  Update an existing job instance  
- OperationId:     PUT_Job_update
- Description: Update an existing job instance
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobInstanceDto
  - application/xml: JobInstanceDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/job/{code}/jobExecution/{id}/jobReport

- Résumé:  Find a job execution result. 
- OperationId:     GET_Job{code}_jobExecution_{id}_jobReport
- Description: Find a job execution result.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- `id` (PATH, obligatoire) — integer (int64)
- Réponses:
  - default: object containing the JobExecutionResultImpl
    - application/json: JobExecutionResultResponseDto
    - application/xml: JobExecutionResultResponseDto

#### GET /api/rest/job/{jobInstanceCode}

- Résumé:  Find a job instance with a given code 
- OperationId:     GET_Job_{jobInstanceCode}
- Description: Find a job instance with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `jobInstanceCode` (PATH, obligatoire) — string
- Réponses:
  - default: object containing the matched JobInstance
    - application/json: JobInstanceResponseDto
    - application/xml: JobInstanceResponseDto

#### DELETE /api/rest/job/{jobInstanceCode}

- Résumé:  Remove an existing job instance with a given code   
- OperationId:     DELETE_Job_{jobInstanceCode}
- Description: Remove an existing job instance with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `jobInstanceCode` (PATH, obligatoire) — string
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/job/create

- Résumé:  Create a new job instance  
- OperationId:     POST_Job_create
- Description: Create a new job instance
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobInstanceDto
  - application/xml: JobInstanceDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/job/createOrUpdate

- Résumé:  Create new or update an existing job instance with a given code  
- OperationId:     POST_Job_createOrUpdate
- Description: Create new or update an existing job instance with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobInstanceDto
  - application/xml: JobInstanceDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/job/execute

- Résumé:  Execute a given job instance info   
- OperationId:     POST_Job_execute
- Description: Execute a given job instance info
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobInstanceInfoDto
  - application/xml: JobInstanceInfoDto
- Réponses:
  - default: request processing status
    - application/json: JobExecutionResultResponseDto
    - application/xml: JobExecutionResultResponseDto

#### POST /api/rest/job/execution

- Résumé:  Execute a given job instance info 
- OperationId:     POST_Job_execution
- Description: Execute a given job instance info
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobInstanceInfoDto
  - application/xml: JobInstanceInfoDto
- Réponses:
  - default: request processing status
    - application/json: JobExecutionResultResponseDto
    - application/xml: JobExecutionResultResponseDto

#### GET /api/rest/job/jobReport

- Résumé:  Find a job execution result.  
- OperationId:     GET_Job_jobReport
- Description: Find a job execution result.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- `id` (QUERY, optionnel) — integer (int64)
- Réponses:
  - default: object containing the JobExecutionResultImpl
    - application/json: JobExecutionResultResponseDto
    - application/xml: JobExecutionResultResponseDto

#### GET /api/rest/job/jobReport/list

- Résumé:  Job execution list matching a given criteria 
- OperationId:     GET_Job_jobReport_list
- Description: Job execution list matching a given criteria
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
  - default: List of JobExecutions
    - application/json: JobExecutionResultsResponseDto
    - application/xml: JobExecutionResultsResponseDto

#### POST /api/rest/job/jobReport/list

- Résumé:  Job execution list matching a given criteria 
- OperationId:     POST_Job_jobReport_list
- Description: Job execution list matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of JobExecutions
    - application/json: JobExecutionResultsResponseDto
    - application/xml: JobExecutionResultsResponseDto

#### GET /api/rest/job/jobReport/listGetAll

- Résumé:  List jobExecutions matching a given criteria 
- OperationId:     GET_Job_jobReport_listGetAll
- Description: List jobExecutions matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of jobExecutions
    - application/json: JobExecutionResultsResponseDto
    - application/xml: JobExecutionResultsResponseDto

#### GET /api/rest/job/list

- Résumé:  Deprecated in v.4.7.2 Use /list instead.  
- OperationId:     GET_Job_list
- Description: Deprecated in v.4.7.2 Use /list instead.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `mergedCF` (QUERY, optionnel) — boolean
  - Contraintes: défaut: false
- `sortBy` (QUERY, optionnel) — string
  - Contraintes: défaut: "code"
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- Réponses:
  - default: list of all subscriptions.
    - application/json: JobInstanceListResponseDto
    - application/xml: JobInstanceListResponseDto

#### GET /api/rest/job/listCategories

- Résumé:  List job categories  
- OperationId:     GET_Job_listCategories
- Description: List job categories
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: object containing the list of job categories
    - application/json: JobCategoriesResponseDto
    - application/xml: JobCategoriesResponseDto

#### POST /api/rest/job/stop/{jobInstanceCode}

- Résumé:  Stop a given job instance info   
- OperationId:     POST_Job_stop_{jobInstanceCode}
- Description: Stop a given job instance info
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `jobInstanceCode` (PATH, obligatoire) — string
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/job/stop/{jobInstanceCode}

- Résumé:  Stop a given job instance info for put endpoint 
- OperationId:     PUT_Job_stop_{jobInstanceCode}
- Description: Stop a given job instance info for put endpoint
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `jobInstanceCode` (PATH, obligatoire) — string
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/job/timer

- Résumé:  Find a timer with a given code   
- OperationId:     GET_Job_timer_
- Description: Find a timer with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `timerCode` (QUERY, optionnel) — string
- Réponses:
  - default: request processing status
    - application/json: TimerEntityResponseDto
    - application/xml: TimerEntityResponseDto

#### POST /api/rest/job/timer

- Résumé:  Create a new timer entity  
- OperationId:     POST_Job_timer_
- Description: Create a new timer entity
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TimerEntityDto
  - application/xml: TimerEntityDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/job/timer

- Résumé:  Update an existing timer entity  
- OperationId:     PUT_Job_timer_
- Description: Update an existing timer entity
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TimerEntityDto
  - application/xml: TimerEntityDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/job/timer/{timerCode}

- Résumé:  Remove an existing timer with a given code   
- OperationId:     DELETE_Job_timer_{timerCode}
- Description: Remove an existing timer with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `timerCode` (PATH, obligatoire) — string
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/job/timer/createOrUpdate

- Résumé:  Create new or update an existing timer entity with a given code  
- OperationId:     POST_Job_timer_createOrUpdate_
- Description: Create new or update an existing timer entity with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TimerEntityDto
  - application/xml: TimerEntityDto
- Réponses:
  - default: request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/job/timers/{timerCode}

- Résumé:  Find a timer with a given code 
- OperationId:     GET_Job_timers_{timerCode}
- Description: Find a timer with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `timerCode` (PATH, obligatoire) — string
- Réponses:
  - default: request processing status
    - application/json: TimerEntityResponseDto
    - application/xml: TimerEntityResponseDto

#### GET /api/rest/job/version

- Résumé: Get version of application
- OperationId: index_126
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### JobInstanceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **jobInstanceDto**: JobInstanceDto

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

### JobInstanceDto
Type: object
Champs obligatoires: code, jobCategory, jobTemplate
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **jobCategory**: JobCategoryEnum
- **jobTemplate**: string — Job template
- **followingJob**: string — Following job to execute
- **parameter**: string — Parameter to job execution
- **active**: boolean — Is job active. A negative of Disabled. Deprecated in 5.0.1. Use Disabled field instead
- **customFields**: CustomFieldsDto
- **timerCode**: string — Job scheduling timer code
- **runOnNodes**: string — What cluster nodes job could/should run on. A comma separated list of custer nodes. A job can/will be run on any node if value is null
- **limitToSingleNode**: boolean — Can job be run in parallel on several cluster nodes. Value of True indicates that job can be run on a single node at a time
- **verboseReport**: boolean — Whether a verbose error log will be kept
- **jobSpeed**: string — Job execution speed. Defines how often job execution history gets updated (Valeurs: SLOW, NORMAL, FAST, VERY_FAST)

### JobCategoryEnum
Type: object
Propriétés:
- **label**: string
- **name**: string
- **id**: integer (int32)

### CustomFieldsDto
The custom fields
Type: object
Propriétés:
- **customField**: Array<CustomFieldDto>
- **inheritedCustomField**: Array<CustomFieldDto>
- **empty**: boolean

### CustomFieldDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **fieldType**: string (Valeurs: STRING, DATE, LONG, DOUBLE, LIST, CHECKBOX_LIST, ENTITY, TEXT_AREA, CHILD_ENTITY, MULTI_VALUE, BOOLEAN, CUSTOM_TABLE_WRAPPER, URL)
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **valueDate**: string (date-time)
- **valuePeriodStartDate**: string (date-time)
- **valuePeriodEndDate**: string (date-time)
- **valuePeriodPriority**: integer (int32)
- **stringValue**: string
- **dateValue**: string (date-time)
- **longValue**: integer (int64)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **mapValue**: object
- **entityReferenceValue**: EntityReferenceDto
- **valueConverted**: object
- **indexType**: string (Valeurs: STORE_ONLY, INDEX, INDEX_NOT_ANALYZE)
- **fileValue**: string
- **formattedValue**: CustomFieldFormattedValueDto
- **urlReferenceValue**: UrlReferenceDto
- **guiPosition**: string
- **customTableCode**: string
- **dataFilter**: string
- **fields**: string
- **empty**: boolean
- **value**: Array<CustomFieldValueDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CustomFieldValueDto
Type: object
Propriétés:
- **value**: object
- **empty**: boolean

### EntityReferenceDto
Type: object
Propriétés:
- **classname**: string
- **code**: string
- **id**: integer (int64)
- **empty**: boolean

### CustomFieldFormattedValueDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **singleValue**: string
- **listValue**: Array<string>
- **mapValue**: object

### UrlReferenceDto
Type: object
Propriétés:
- **url**: string
- **regexp**: string
- **label**: string
- **length**: integer (int32)
- **empty**: boolean

### JobExecutionResultResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **jobExecutionResultDto**: JobExecutionResultDto

### JobExecutionResultDto
Type: object
Champs obligatoires: nbItemsCorrectlyProcessed, nbItemsProcessedWithError, nbItemsProcessedWithWarning
Propriétés:
- **id**: integer (int64)
- **jobInstanceId**: integer (int64)
- **runningOnNodes**: string
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **nbItemsToProcess**: integer (int64)
- **nbItemsCorrectlyProcessed**: integer (int64)
- **nbItemsProcessedWithWarning**: integer (int64)
- **nbItemsProcessedWithError**: integer (int64)
- **done**: boolean
- **status**: string (Valeurs: RUNNING, COMPLETED, COMPLETED_MORE, CANCELLED, FAILED)
- **report**: string
- **jobInstanceCode**: string

### JobInstanceInfoDto
Type: object
Propriétés:
- **timerName**: string
- **code**: string
- **start**: boolean
- **lastTransactionDate**: string (date-time)
- **invoiceDate**: string (date-time)
- **billingCycle**: string
- **forceExecution**: boolean
- **runOnNodes**: string
- **parameters**: string
- **customFields**: CustomFieldsDto

### JobExecutionResultsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **jobExecutionResult**: JobExecutionResultsDto

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

### JobExecutionResultsDto
Type: object
Propriétés:
- **jobExecutionResults**: Array<JobExecutionResultDto>
- **totalNumberOfRecords**: integer (int64)

### JobInstanceListResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **jobInstances**: JobInstanceListDto

### JobInstanceListDto
Type: object
Propriétés:
- **listSize**: integer (int32)
- **jobInstances**: Array<JobInstanceDto>

### JobCategoriesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **jobCategories**: Array<JobCategoryEnum>

### TimerEntityResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **timerEntity**: TimerEntityDto

### TimerEntityDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **hour**: string
- **minute**: string
- **second**: string
- **year**: string
- **month**: string
- **dayOfMonth**: string
- **dayOfWeek**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
