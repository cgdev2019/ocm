# TASK086 — Service WebHookNotification

## Contexte
Le service « WebHookNotification » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%WebHookNotification
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/notification/webhook` |  Find a web hook notification with a given code   |     GET_WebHookNotification_search |
| POST | `/api/rest/notification/webhook` |  Create a new web hook notification   |     POST_WebHookNotification_create |
| PUT | `/api/rest/notification/webhook` |  Update an existing web hook notification   |     PUT_WebHookNotification_update |
| POST | `/api/rest/notification/webhook/{code}/disable` |  Disable a Webhook notification with a given code   |     POST_WebHookNotification_{code}_disable |
| POST | `/api/rest/notification/webhook/{code}/enable` |  Enable a Webhook notification with a given code   |     POST_WebHookNotification_{code}_enable |
| DELETE | `/api/rest/notification/webhook/{notificationCode}` |  Remove an existing web hook notification with a given code   |     DELETE_WebHookNotification_{notificationCode} |
| POST | `/api/rest/notification/webhook/createOrUpdate` |  Create new or update an existing web hook notification with a given code   |     POST_WebHookNotification_createOrUpdate |
| GET | `/api/rest/notification/webhook/version` | Get version of application | index_134 |

#### GET /api/rest/notification/webhook

- Résumé:  Find a web hook notification with a given code  
- OperationId:     GET_WebHookNotification_search
- Description: Find a web hook notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `notificationCode` (QUERY, optionnel) — string
- Réponses:
  - default: WebHook Notification Response data
    - application/json: GetWebHookNotificationResponseDto
    - application/xml: GetWebHookNotificationResponseDto

#### POST /api/rest/notification/webhook

- Résumé:  Create a new web hook notification  
- OperationId:     POST_WebHookNotification_create
- Description: Create a new web hook notification
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WebHookDto
  - application/xml: WebHookDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/notification/webhook

- Résumé:  Update an existing web hook notification  
- OperationId:     PUT_WebHookNotification_update
- Description: Update an existing web hook notification
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WebHookDto
  - application/xml: WebHookDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/webhook/{code}/disable

- Résumé:  Disable a Webhook notification with a given code  
- OperationId:     POST_WebHookNotification_{code}_disable
- Description: Disable a Webhook notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/webhook/{code}/enable

- Résumé:  Enable a Webhook notification with a given code  
- OperationId:     POST_WebHookNotification_{code}_enable
- Description: Enable a Webhook notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/notification/webhook/{notificationCode}

- Résumé:  Remove an existing web hook notification with a given code  
- OperationId:     DELETE_WebHookNotification_{notificationCode}
- Description: Remove an existing web hook notification with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `notificationCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/notification/webhook/createOrUpdate

- Résumé:  Create new or update an existing web hook notification with a given code  
- OperationId:     POST_WebHookNotification_createOrUpdate
- Description: Create new or update an existing web hook notification with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: WebHookDto
  - application/xml: WebHookDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/notification/webhook/version

- Résumé: Get version of application
- OperationId: index_134
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetWebHookNotificationResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **webhookDto**: WebHookDto

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

### WebHookDto
Type: object
Champs obligatoires: classNameFilter, code, eventTypeFilter, host, httpMethod, page, port
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
- **httpProtocol**: string (Valeurs: HTTPS, HTTP)
- **host**: string
- **port**: integer (int32)
- **page**: string
- **httpMethod**: string (Valeurs: HTTP_GET, HTTP_POST, HTTP_PUT, HTTP_DELETE)
- **username**: string
- **password**: string
- **headers**: object
- **params**: object
- **bodyEl**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
