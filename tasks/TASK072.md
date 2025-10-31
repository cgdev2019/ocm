# TASK072 — Service MeasurableQuantity

## Contexte
Le service « MeasurableQuantity » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%MeasurableQuantity
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/measurableQuantity` |  Get Measurable quantity from a given code.   |     GET_MeasurableQuantity_search |
| POST | `/api/rest/measurableQuantity` |  Create a Measurable quantity.  |     POST_MeasurableQuantity_create |
| PUT | `/api/rest/measurableQuantity` |  Update Measurable quantity from mesearable quantities.   |     PUT_MeasurableQuantity_update |
| DELETE | `/api/rest/measurableQuantity/{code}` |  Remove Measurable quantity with a given code.   |     DELETE_MeasurableQuantity_{code} |
| POST | `/api/rest/measurableQuantity/{code}/disable` |  Disable a Measurable quantity with a given code   |     POST_MeasurableQuantity_{code}_disable |
| POST | `/api/rest/measurableQuantity/{code}/enable` |  Enable a Measurable quantity with a given code   |     POST_MeasurableQuantity_{code}_enable |
| GET | `/api/rest/measurableQuantity/findMVByDateAndPeriod` |  Find a Measurable value during a period of date and period  |     GET_MeasurableQuantity_findMVByDateAndPeriod |
| GET | `/api/rest/measurableQuantity/list` |  List Measurable quantity with a given code.   |     GET_MeasurableQuantity_list |
| GET | `/api/rest/measurableQuantity/version` | Get version of application | index_119 |

#### GET /api/rest/measurableQuantity

- Résumé:  Get Measurable quantity from a given code.  
- OperationId:     GET_MeasurableQuantity_search
- Description: Get Measurable quantity from a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Measurable Quantity Response data
    - application/json: GetMeasurableQuantityResponse
    - application/xml: GetMeasurableQuantityResponse

#### POST /api/rest/measurableQuantity

- Résumé:  Create a Measurable quantity. 
- OperationId:     POST_MeasurableQuantity_create
- Description: Create a Measurable quantity.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeasurableQuantityDto
  - application/xml: MeasurableQuantityDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/measurableQuantity

- Résumé:  Update Measurable quantity from mesearable quantities.  
- OperationId:     PUT_MeasurableQuantity_update
- Description: Update Measurable quantity from mesearable quantities.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeasurableQuantityDto
  - application/xml: MeasurableQuantityDto
- Réponses:
  - default: actions status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/measurableQuantity/{code}

- Résumé:  Remove Measurable quantity with a given code.  
- OperationId:     DELETE_MeasurableQuantity_{code}
- Description: Remove Measurable quantity with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/measurableQuantity/{code}/disable

- Résumé:  Disable a Measurable quantity with a given code  
- OperationId:     POST_MeasurableQuantity_{code}_disable
- Description: Disable a Measurable quantity with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/measurableQuantity/{code}/enable

- Résumé:  Enable a Measurable quantity with a given code  
- OperationId:     POST_MeasurableQuantity_{code}_enable
- Description: Enable a Measurable quantity with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/measurableQuantity/findMVByDateAndPeriod

- Résumé:  Find a Measurable value during a period of date and period 
- OperationId:     GET_MeasurableQuantity_findMVByDateAndPeriod
- Description: Find a Measurable value during a period of date and period
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- `fromDate` (QUERY, optionnel) — string (date-time)
- `toDate` (QUERY, optionnel) — string (date-time)
- `period` (QUERY, optionnel) — string
  - Valeurs autorisées: DAILY, WEEKLY, MONTHLY, YEARLY
- `mqCode` (QUERY, optionnel) — string
- Réponses:
  - default: mesurable value by date and period.
    - application/json: object
    - application/xml: object

#### GET /api/rest/measurableQuantity/list

- Résumé:  List Measurable quantity with a given code.  
- OperationId:     GET_MeasurableQuantity_list
- Description: List Measurable quantity with a given code.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of measurable quantities
    - application/json: GetListMeasurableQuantityResponse
    - application/xml: GetListMeasurableQuantityResponse

#### GET /api/rest/measurableQuantity/version

- Résumé: Get version of application
- OperationId: index_119
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetMeasurableQuantityResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **measurableQuantityDto**: MeasurableQuantityDto

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

### GetListMeasurableQuantityResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **listMeasurableQuantityDto**: Array<MeasurableQuantityDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
