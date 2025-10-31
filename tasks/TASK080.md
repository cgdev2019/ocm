# TASK080 — Service TimerEntity

## Contexte
Le service « TimerEntity » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%TimerEntity
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/timerEntity` |  Find a timer schedule with a given code   |     GET_TimerEntity_search |
| POST | `/api/rest/timerEntity/{code}/disable` |  Disable a Timer schedule with a given code   |     POST_TimerEntity_{code}_disable |
| POST | `/api/rest/timerEntity/{code}/enable` |  Enable a Timer schedule with a given code   |     POST_TimerEntity_{code}_enable |
| POST | `/api/rest/timerEntity/create` |  Create a new timer schedule   |     POST_TimerEntity_create |
| POST | `/api/rest/timerEntity/createOrUpdate` |  Create new or update an existing timer schedule with a given code   |     POST_TimerEntity_createOrUpdate |
| POST | `/api/rest/timerEntity/update` |  Update an existing timer schedule   |     POST_TimerEntity_update |
| GET | `/api/rest/timerEntity/version` | Get version of application | index_127 |

#### GET /api/rest/timerEntity

- Résumé:  Find a timer schedule with a given code  
- OperationId:     GET_TimerEntity_search
- Description: Find a timer schedule with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `timerEntityCode` (QUERY, optionnel) — string
- Réponses:
  - default: Return timerEntity
    - application/json: GetTimerEntityResponseDto
    - application/xml: GetTimerEntityResponseDto

#### POST /api/rest/timerEntity/{code}/disable

- Résumé:  Disable a Timer schedule with a given code  
- OperationId:     POST_TimerEntity_{code}_disable
- Description: Disable a Timer schedule with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/timerEntity/{code}/enable

- Résumé:  Enable a Timer schedule with a given code  
- OperationId:     POST_TimerEntity_{code}_enable
- Description: Enable a Timer schedule with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/timerEntity/create

- Résumé:  Create a new timer schedule  
- OperationId:     POST_TimerEntity_create
- Description: Create a new timer schedule
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TimerEntityDto
  - application/xml: TimerEntityDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/timerEntity/createOrUpdate

- Résumé:  Create new or update an existing timer schedule with a given code  
- OperationId:     POST_TimerEntity_createOrUpdate
- Description: Create new or update an existing timer schedule with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TimerEntityDto
  - application/xml: TimerEntityDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/timerEntity/update

- Résumé:  Update an existing timer schedule  
- OperationId:     POST_TimerEntity_update
- Description: Update an existing timer schedule
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TimerEntityDto
  - application/xml: TimerEntityDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/timerEntity/version

- Résumé: Get version of application
- OperationId: index_127
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetTimerEntityResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **timerEntity**: TimerEntityDto

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
