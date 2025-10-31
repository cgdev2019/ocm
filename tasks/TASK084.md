# TASK084 — Service JobTrigger

## Contexte
Le service « JobTrigger » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%JobTrigger
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/notification/jobTrigger` |  Find a job trigger with a given code   |     GET_JobTrigger_search |
| POST | `/api/rest/notification/jobTrigger` |  Create a new job trigger   |     POST_JobTrigger_create |
| PUT | `/api/rest/notification/jobTrigger` |  Update an existing job trigger   |     PUT_JobTrigger_update |
| POST | `/api/rest/notification/jobTrigger/{code}/disable` |  Disable a Job execution trigger notification with a given code   |     POST_JobTrigger_{code}_disable |
| POST | `/api/rest/notification/jobTrigger/{code}/enable` |  Enable a Job execution trigger notification with a given code   |     POST_JobTrigger_{code}_enable |
| DELETE | `/api/rest/notification/jobTrigger/{notificationCode}` |  Remove an existing job trigger with a given code   |     DELETE_JobTrigger_{notificationCode} |
| POST | `/api/rest/notification/jobTrigger/createOrUpdate` |  Create new or update an existing job trigger with a given code   |     POST_JobTrigger_createOrUpdate |
| GET | `/api/rest/notification/jobTrigger/version` | Get version of application | index_131 |

#### GET /api/rest/notification/jobTrigger

- Résumé:  Find a job trigger with a given code  
- OperationId:     GET_JobTrigger_search
- Description: Find a job trigger with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `notificationCode` (QUERY, optionnel) — string
- Réponses:
  - default: Job Trigger Response data
    - application/json: GetJobTriggerResponseDto
    - application/xml: GetJobTriggerResponseDto

#### POST /api/rest/notification/jobTrigger

- Résumé:  Create a new job trigger  
- OperationId:     POST_JobTrigger_create
- Description: Create a new job trigger
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobTriggerDto
  - application/xml: JobTriggerDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/notification/jobTrigger

- Résumé:  Update an existing job trigger  
- OperationId:     PUT_JobTrigger_update
- Description: Update an existing job trigger
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobTriggerDto
  - application/xml: JobTriggerDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/jobTrigger/{code}/disable

- Résumé:  Disable a Job execution trigger notification with a given code  
- OperationId:     POST_JobTrigger_{code}_disable
- Description: Disable a Job execution trigger notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/jobTrigger/{code}/enable

- Résumé:  Enable a Job execution trigger notification with a given code  
- OperationId:     POST_JobTrigger_{code}_enable
- Description: Enable a Job execution trigger notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/notification/jobTrigger/{notificationCode}

- Résumé:  Remove an existing job trigger with a given code  
- OperationId:     DELETE_JobTrigger_{notificationCode}
- Description: Remove an existing job trigger with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `notificationCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/jobTrigger/createOrUpdate

- Résumé:  Create new or update an existing job trigger with a given code  
- OperationId:     POST_JobTrigger_createOrUpdate
- Description: Create new or update an existing job trigger with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: JobTriggerDto
  - application/xml: JobTriggerDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/notification/jobTrigger/version

- Résumé: Get version of application
- OperationId: index_131
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetJobTriggerResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **jobTriggerDto**: JobTriggerDto

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

### JobTriggerDto
Type: object
Champs obligatoires: classNameFilter, code, eventTypeFilter, jobInstance
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **classNameFilter**: string
- **eventTypeFilter**: string (Valeurs: CREATED, UPDATED, REMOVED, TERMINATED, ENABLED, DISABLED, STARTED, PROCESSED, REJECTED, REJECTED_CDR, LOGGED_IN, INBOUND_REQ, LOW_BALANCE, COUNTER_DEDUCED, END_OF_TERM, STATUS_UPDATED, PAYMENT_STATUS_UPDATED, RENEWAL_UPDATED, XML_GENERATED, PDF_GENERATED, INVOICE_NUMBER_ASSIGNED, TO_R0, TO_R1, TO_R2, VERSION_CREATED, VERSION_REMOVED, ADVT_RATE_INCREASED)
- **elFilter**: string
- **scriptInstanceCode**: string
- **scriptParams**: object
- **counterTemplate**: string
- **priority**: integer (int32)
- **active**: boolean
- **runAsync**: boolean
- **saveSuccessfulNotifications**: boolean
- **jobParams**: object
- **jobInstance**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
