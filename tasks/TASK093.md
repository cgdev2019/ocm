# TASK093 — Service RevenueRecognitionRules

## Contexte
Le service « RevenueRecognitionRules » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%RevenueRecognitionRules
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/revenueRecognitionRule` |  Find a revenue recognition rule with a given code   |     GET_RevenueRecognitionRules_search |
| POST | `/api/rest/revenueRecognitionRule` |  Create a new revenue recognition rule   |     POST_RevenueRecognitionRules_create |
| PUT | `/api/rest/revenueRecognitionRule` |  Update an existing revenue recognition rule   |     PUT_RevenueRecognitionRules_update |
| POST | `/api/rest/revenueRecognitionRule/{code}/disable` |  Disable a Revenue recognition rule with a given code   |     POST_RevenueRecognitionRules_{code}_disable |
| POST | `/api/rest/revenueRecognitionRule/{code}/enable` |  Enable a Revenue recognition rule with a given code   |     POST_RevenueRecognitionRules_{code}_enable |
| DELETE | `/api/rest/revenueRecognitionRule/{revenueRecognitionRuleCode}` |  Remove an existing revenue recognition rule with a given code   |     DELETE_RevenueRecognitionRules_{revenueRecognitionRuleCode} |
| POST | `/api/rest/revenueRecognitionRule/createOrUpdate` |  Create new or update an existing revenue recognition rule with a given code   |     POST_RevenueRecognitionRules_createOrUpdate |
| POST | `/api/rest/revenueRecognitionRule/list` |  List of revenue recognition rules.   |     POST_RevenueRecognitionRules_list |
| GET | `/api/rest/revenueRecognitionRule/version` | Get version of application | index_90 |

#### GET /api/rest/revenueRecognitionRule

- Résumé:  Find a revenue recognition rule with a given code  
- OperationId:     GET_RevenueRecognitionRules_search
- Description: Find a revenue recognition rule with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `revenueRecognitionRuleCode` (QUERY, optionnel) — string
- Réponses:
  - default: Revenue recognition rules results
    - application/json: RevenueRecognitionRuleDtoResponse
    - application/xml: RevenueRecognitionRuleDtoResponse

#### POST /api/rest/revenueRecognitionRule

- Résumé:  Create a new revenue recognition rule  
- OperationId:     POST_RevenueRecognitionRules_create
- Description: Create a new revenue recognition rule
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: RevenueRecognitionRuleDto
  - application/xml: RevenueRecognitionRuleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/revenueRecognitionRule

- Résumé:  Update an existing revenue recognition rule  
- OperationId:     PUT_RevenueRecognitionRules_update
- Description: Update an existing revenue recognition rule
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: RevenueRecognitionRuleDto
  - application/xml: RevenueRecognitionRuleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/revenueRecognitionRule/{code}/disable

- Résumé:  Disable a Revenue recognition rule with a given code  
- OperationId:     POST_RevenueRecognitionRules_{code}_disable
- Description: Disable a Revenue recognition rule with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/revenueRecognitionRule/{code}/enable

- Résumé:  Enable a Revenue recognition rule with a given code  
- OperationId:     POST_RevenueRecognitionRules_{code}_enable
- Description: Enable a Revenue recognition rule with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/revenueRecognitionRule/{revenueRecognitionRuleCode}

- Résumé:  Remove an existing revenue recognition rule with a given code  
- OperationId:     DELETE_RevenueRecognitionRules_{revenueRecognitionRuleCode}
- Description: Remove an existing revenue recognition rule with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `revenueRecognitionRuleCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/revenueRecognitionRule/createOrUpdate

- Résumé:  Create new or update an existing revenue recognition rule with a given code  
- OperationId:     POST_RevenueRecognitionRules_createOrUpdate
- Description: Create new or update an existing revenue recognition rule with a given code
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: RevenueRecognitionRuleDto
  - application/xml: RevenueRecognitionRuleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/revenueRecognitionRule/list

- Résumé:  List of revenue recognition rules.  
- OperationId:     POST_RevenueRecognitionRules_list
- Description: List of revenue recognition rules.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of revenue recognition rules
    - application/json: RevenueRecognitionRuleDtosResponse
    - application/xml: RevenueRecognitionRuleDtosResponse

#### GET /api/rest/revenueRecognitionRule/version

- Résumé: Get version of application
- OperationId: index_90
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### RevenueRecognitionRuleDtoResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **revenueRecognitionRuleDto**: RevenueRecognitionRuleDto

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

### RevenueRecognitionRuleDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **startDelay**: integer (int32)
- **startUnit**: string (Valeurs: revenueRecognitionDelayUnitEnum.MONTH, revenueRecognitionDelayUnitEnum.DAY)
- **startEvent**: string (Valeurs: revenueRecognitionEvent.SUBSCRIPTION_START, revenueRecognitionEvent.SUBSCRIPTION_STOP, revenueRecognitionEvent.INVOICE_DATE, revenueRecognitionEvent.INVOICE_DUE_DATE, revenueRecognitionEvent.SERVICE_PERIOD_START, revenueRecognitionEvent.SERVICE_PERIOD_STOP)
- **stopDelay**: integer (int32)
- **stopUnit**: string (Valeurs: revenueRecognitionDelayUnitEnum.MONTH, revenueRecognitionDelayUnitEnum.DAY)
- **stopEvent**: string (Valeurs: revenueRecognitionEvent.SUBSCRIPTION_START, revenueRecognitionEvent.SUBSCRIPTION_STOP, revenueRecognitionEvent.INVOICE_DATE, revenueRecognitionEvent.INVOICE_DUE_DATE, revenueRecognitionEvent.SERVICE_PERIOD_START, revenueRecognitionEvent.SERVICE_PERIOD_STOP)
- **script**: ScriptInstanceDto

### ScriptInstanceDto
Type: object
Champs obligatoires: code, script
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **type**: string (Valeurs: JAVA, JAVA_CLASS)
- **reuse**: boolean
- **script**: string
- **executionRoles**: Array<string>
- **sourcingRoles**: Array<string>
- **scriptInstanceCategoryCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto> — list of the language description
- **scriptParameters**: Array<ScriptParameterDto> — list of the script parameters
- **codeOnly**: boolean

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### ScriptParameterDto
list of the script parameters
Type: object
Propriétés:
- **className**: string — The class name
- **defaultValue**: string — The default value
- **mandatory**: boolean — Field mandatory
- **allowedValues**: string — The allowed values
- **valuesSeparator**: string — The values separator
- **collection**: boolean — Field collection
- **languageDescriptions**: Array<LanguageDescriptionDto>

### RevenueRecognitionRuleDtosResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **revenueRecognitionRules**: Array<RevenueRecognitionRuleDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
