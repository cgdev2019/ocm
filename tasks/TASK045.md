# TASK045 — Service Channel

## Contexte
Le service « Channel » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Channel
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/catalog/channel` |  Search for a channel with a given code   |     GET_Channel_search |
| POST | `/api/rest/catalog/channel` |  Create a new channel   |     POST_Channel_create |
| PUT | `/api/rest/catalog/channel` |  Update an existing channel   |     PUT_Channel_update |
| DELETE | `/api/rest/catalog/channel` |  Remove an existing channel with a given code   |     DELETE_Channel_delete |
| POST | `/api/rest/catalog/channel/{code}/disable` |  Disable a Channel with a given code   |     POST_Channel_{code}_disable |
| POST | `/api/rest/catalog/channel/{code}/enable` |  Enable a Channel with a given code   |     POST_Channel_{code}_enable |
| POST | `/api/rest/catalog/channel/createOrUpdate` |  Create new or update an existing channel   |     POST_Channel_createOrUpdate |
| GET | `/api/rest/catalog/channel/version` | Get version of application | index_49 |

#### GET /api/rest/catalog/channel

- Résumé:  Search for a channel with a given code  
- OperationId:     GET_Channel_search
- Description: Search for a channel with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `channelCode` (QUERY, optionnel) — string
- Réponses:
  - default: A channel
    - application/json: GetChannelResponseDto
    - application/xml: GetChannelResponseDto

#### POST /api/rest/catalog/channel

- Résumé:  Create a new channel  
- OperationId:     POST_Channel_create
- Description: Create a new channel
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ChannelDto
  - application/xml: ChannelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/catalog/channel

- Résumé:  Update an existing channel  
- OperationId:     PUT_Channel_update
- Description: Update an existing channel
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ChannelDto
  - application/xml: ChannelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/catalog/channel

- Résumé:  Remove an existing channel with a given code  
- OperationId:     DELETE_Channel_delete
- Description: Remove an existing channel with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `channelCode` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/channel/{code}/disable

- Résumé:  Disable a Channel with a given code  
- OperationId:     POST_Channel_{code}_disable
- Description: Disable a Channel with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/channel/{code}/enable

- Résumé:  Enable a Channel with a given code  
- OperationId:     POST_Channel_{code}_enable
- Description: Enable a Channel with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/catalog/channel/createOrUpdate

- Résumé:  Create new or update an existing channel  
- OperationId:     POST_Channel_createOrUpdate
- Description: Create new or update an existing channel
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ChannelDto
  - application/xml: ChannelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/catalog/channel/version

- Résumé: Get version of application
- OperationId: index_49
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetChannelResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **channel**: ChannelDto

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

### ChannelDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
