# TASK085 — Service Notification

## Contexte
Le service « Notification » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Notification
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/notification` |  Find a notification with a given code   |     GET_Notification_search |
| POST | `/api/rest/notification` |  Create a new notification   |     POST_Notification_create |
| PUT | `/api/rest/notification` |  Update an existing notification   |     PUT_Notification_update |
| POST | `/api/rest/notification/{code}/disable` |  Disable a Script type notification with a given code   |     POST_Notification_{code}_disable |
| POST | `/api/rest/notification/{code}/enable` |  Enable a Script type notification with a given code   |     POST_Notification_{code}_enable |
| DELETE | `/api/rest/notification/{notificationCode}` |  Remove an existing notification with a given code   |     DELETE_Notification_{notificationCode} |
| POST | `/api/rest/notification/createOrUpdate` |  Create new or update an existing notification with a given code   |     POST_Notification_createOrUpdate |
| GET | `/api/rest/notification/listInboundRequest` |  List inbound requests   |     GET_Notification_listInboundRequest |
| GET | `/api/rest/notification/listNotificationHistory` |  List the notification history   |     GET_Notification_listNotificationHistory |
| GET | `/api/rest/notification/version` | Get version of application | index_132 |

#### GET /api/rest/notification

- Résumé:  Find a notification with a given code  
- OperationId:     GET_Notification_search
- Description: Find a notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `notificationCode` (QUERY, optionnel) — string
- Réponses:
  - default: Script notification information
    - application/json: GetScriptNotificationResponseDto
    - application/xml: GetScriptNotificationResponseDto

#### POST /api/rest/notification

- Résumé:  Create a new notification  
- OperationId:     POST_Notification_create
- Description: Create a new notification
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ScriptNotificationDto
  - application/xml: ScriptNotificationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/notification

- Résumé:  Update an existing notification  
- OperationId:     PUT_Notification_update
- Description: Update an existing notification
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ScriptNotificationDto
  - application/xml: ScriptNotificationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/{code}/disable

- Résumé:  Disable a Script type notification with a given code  
- OperationId:     POST_Notification_{code}_disable
- Description: Disable a Script type notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/{code}/enable

- Résumé:  Enable a Script type notification with a given code  
- OperationId:     POST_Notification_{code}_enable
- Description: Enable a Script type notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/notification/{notificationCode}

- Résumé:  Remove an existing notification with a given code  
- OperationId:     DELETE_Notification_{notificationCode}
- Description: Remove an existing notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `notificationCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/createOrUpdate

- Résumé:  Create new or update an existing notification with a given code  
- OperationId:     POST_Notification_createOrUpdate
- Description: Create new or update an existing notification with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ScriptNotificationDto
  - application/xml: ScriptNotificationDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/notification/listInboundRequest

- Résumé:  List inbound requests  
- OperationId:     GET_Notification_listInboundRequest
- Description: List inbound requests
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of inbound requests
    - application/json: InboundRequestsResponseDto
    - application/xml: InboundRequestsResponseDto

#### GET /api/rest/notification/listNotificationHistory

- Résumé:  List the notification history  
- OperationId:     GET_Notification_listNotificationHistory
- Description: List the notification history
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: Notification history list
    - application/json: NotificationHistoriesResponseDto
    - application/xml: NotificationHistoriesResponseDto

#### GET /api/rest/notification/version

- Résumé: Get version of application
- OperationId: index_132
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetScriptNotificationResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **notificationDto**: ScriptNotificationDto

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

### ScriptNotificationDto
Type: object
Champs obligatoires: classNameFilter, code, eventTypeFilter
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

### InboundRequestsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **inboundRequests**: InboundRequestsDto

### InboundRequestsDto
Type: object
Propriétés:
- **inboundRequest**: Array<InboundRequestDto>

### InboundRequestDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **contentLength**: integer (int32)
- **contentType**: string
- **protocol**: string
- **scheme**: string
- **remoteAddr**: string
- **remotePort**: integer (int32)
- **method**: string
- **authType**: string
- **pathInfo**: string
- **requestURI**: string
- **responseContentType**: string
- **responseEncoding**: string

### NotificationHistoriesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **notificationHistories**: NotificationHistoriesDto

### NotificationHistoriesDto
Type: object
Propriétés:
- **notificationHistory**: Array<NotificationHistoryDto>

### NotificationHistoryDto
Type: object
Propriétés:
- **notification**: string
- **entityClassName**: string
- **entityCode**: string
- **serializedEntity**: string
- **nbRetry**: integer (int32)
- **result**: string
- **date**: string (date-time)
- **status**: string (Valeurs: SENT, TO_RETRY, FAILED, CANCELED)

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
