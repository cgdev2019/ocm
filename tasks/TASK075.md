# TASK075 — Service GenericWorkflow

## Contexte
Le service « GenericWorkflow » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%GenericWorkflow
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/admin/genericWorkflow` |  Find a workflow with a given code   |     GET_GenericWorkflow_search |
| POST | `/api/rest/admin/genericWorkflow` |  Create a new workflow   |     POST_GenericWorkflow_create |
| PUT | `/api/rest/admin/genericWorkflow` |  Update an existing workflow   |     PUT_GenericWorkflow_update |
| DELETE | `/api/rest/admin/genericWorkflow/{code}` |  Remove an existing workflow with a given code   |     DELETE_GenericWorkflow_{code} |
| POST | `/api/rest/admin/genericWorkflow/{code}/disable` |  Disable a Workflow with a given code   |     POST_GenericWorkflow_{code}_disable |
| POST | `/api/rest/admin/genericWorkflow/{code}/enable` |  Enable a Workflow with a given code   |     POST_GenericWorkflow_{code}_enable |
| POST | `/api/rest/admin/genericWorkflow/createOrUpdate` |  Create new or update an existing workflow with a given code   |     POST_GenericWorkflow_createOrUpdate |
| POST | `/api/rest/admin/genericWorkflow/execute` |  Execute a workflow   |     POST_GenericWorkflow_execute |
| POST | `/api/rest/admin/genericWorkflow/executeTransition` |  execute transition   |     POST_GenericWorkflow_executeTransition |
| GET | `/api/rest/admin/genericWorkflow/findByEntity` |  Find a workflow by entity   |     GET_GenericWorkflow_findByEntity |
| GET | `/api/rest/admin/genericWorkflow/history` |  Find workflow history   |     GET_GenericWorkflow_history |
| GET | `/api/rest/admin/genericWorkflow/list` |  List of workflows.   |     GET_GenericWorkflow_list |
| GET | `/api/rest/admin/genericWorkflow/version` | Get version of application | index_122 |

#### GET /api/rest/admin/genericWorkflow

- Résumé:  Find a workflow with a given code  
- OperationId:     GET_GenericWorkflow_search
- Description: Find a workflow with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Generic Work flow Response data
    - application/json: GenericWorkflowResponseDto
    - application/xml: GenericWorkflowResponseDto

#### POST /api/rest/admin/genericWorkflow

- Résumé:  Create a new workflow  
- OperationId:     POST_GenericWorkflow_create
- Description: Create a new workflow
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenericWorkflowDto
  - application/xml: GenericWorkflowDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/admin/genericWorkflow

- Résumé:  Update an existing workflow  
- OperationId:     PUT_GenericWorkflow_update
- Description: Update an existing workflow
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenericWorkflowDto
  - application/xml: GenericWorkflowDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/admin/genericWorkflow/{code}

- Résumé:  Remove an existing workflow with a given code  
- OperationId:     DELETE_GenericWorkflow_{code}
- Description: Remove an existing workflow with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/genericWorkflow/{code}/disable

- Résumé:  Disable a Workflow with a given code  
- OperationId:     POST_GenericWorkflow_{code}_disable
- Description: Disable a Workflow with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/genericWorkflow/{code}/enable

- Résumé:  Enable a Workflow with a given code  
- OperationId:     POST_GenericWorkflow_{code}_enable
- Description: Enable a Workflow with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/genericWorkflow/createOrUpdate

- Résumé:  Create new or update an existing workflow with a given code  
- OperationId:     POST_GenericWorkflow_createOrUpdate
- Description: Create new or update an existing workflow with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenericWorkflowDto
  - application/xml: GenericWorkflowDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/genericWorkflow/execute

- Résumé:  Execute a workflow  
- OperationId:     POST_GenericWorkflow_execute
- Description: Execute a workflow
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `baseEntityName` (QUERY, optionnel) — string
- `entityInstanceCode` (QUERY, optionnel) — string
- `workflowCode` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/admin/genericWorkflow/executeTransition

- Résumé:  execute transition  
- OperationId:     POST_GenericWorkflow_executeTransition
- Description: execute transition
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `baseEntityName` (QUERY, optionnel) — string
- `entityInstanceCode` (QUERY, optionnel) — string
- `workflowCode` (QUERY, optionnel) — string
- `transition` (QUERY, optionnel) — string
- `force` (QUERY, optionnel) — boolean
- Réponses:
  - default: ActionStatus response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/admin/genericWorkflow/findByEntity

- Résumé:  Find a workflow by entity  
- OperationId:     GET_GenericWorkflow_findByEntity
- Description: Find a workflow by entity
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `baseEntityName` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: GenericWorkflowsResponseDto
    - application/xml: GenericWorkflowsResponseDto

#### GET /api/rest/admin/genericWorkflow/history

- Résumé:  Find workflow history  
- OperationId:     GET_GenericWorkflow_history
- Description: Find workflow history
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `entityInstanceCode` (QUERY, optionnel) — string
- `workflowCode` (QUERY, optionnel) — string
- `fromStatus` (QUERY, optionnel) — string
- `toStatus` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: WorkflowInsHistoryResponseDto
    - application/xml: WorkflowInsHistoryResponseDto

#### GET /api/rest/admin/genericWorkflow/list

- Résumé:  List of workflows.  
- OperationId:     GET_GenericWorkflow_list
- Description: List of workflows.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of workflow
    - application/json: GenericWorkflowsResponseDto
    - application/xml: GenericWorkflowsResponseDto

#### GET /api/rest/admin/genericWorkflow/version

- Résumé: Get version of application
- OperationId: index_122
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GenericWorkflowResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **genericWorkflow**: GenericWorkflowDto

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

### GenericWorkflowDto
Type: object
Champs obligatoires: code, initStatus, targetEntityClass
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **targetEntityClass**: string
- **targetCetCode**: string
- **filter**: FilterDto
- **initStatus**: string
- **statuses**: Array<WFStatusDto>
- **transitions**: Array<GWFTransitionDto>
- **enableHistory**: boolean

### FilterDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **shared**: boolean
- **inputXml**: string
- **pollingQuery**: string
- **entityClass**: string
- **customFields**: CustomFieldsDto

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

### WFStatusDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **uuid**: string

### GWFTransitionDto
Type: object
Champs obligatoires: conditionEl, description, fromStatus, toStatus
Propriétés:
- **uuid**: string
- **fromStatus**: string
- **toStatus**: string
- **conditionEl**: string
- **priority**: integer (int32)
- **description**: string
- **actionScriptCode**: string
- **actions**: Array<GWFActionDto>

### GWFActionDto
Type: object
Propriétés:
- **description**: string
- **uuid**: string
- **priority**: integer (int32)
- **type**: string (Valeurs: UPDATE_FIELD, LOG, ACTION_SCRIPT, NOTIFICATION)
- **conditionEl**: string
- **asynchronous**: boolean
- **actionScriptCode**: string
- **notificationCode**: string
- **valueEl**: string
- **logLevel**: string (Valeurs: INFO, DEBUG, TRACE)
- **field**: string
- **parameters**: object

### GenericWorkflowsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **workflows**: Array<GenericWorkflowDto>

### WorkflowInsHistoryResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **workflowInsHistories**: Array<WorkflowInstanceHistoryDto>

### WorkflowInstanceHistoryDto
Type: object
Propriétés:
- **actionDate**: string (date-time)
- **workflowInstanceCode**: string
- **fromStatus**: string
- **toStatus**: string
- **transitionName**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
