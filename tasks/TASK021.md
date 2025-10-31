# TASK021 — Service ScriptInstance

## Contexte
Le service « ScriptInstance » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%ScriptInstance
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/scriptInstance` |  Find a script instance with a given code.  |     GET_ScriptInstance_search |
| POST | `/api/rest/scriptInstance` |  Create a new script instance.   |     POST_ScriptInstance_create |
| PUT | `/api/rest/scriptInstance` |  Update an existing script instance.   |     PUT_ScriptInstance_update |
| POST | `/api/rest/scriptInstance/{code}/disable` |  Disable a Script instance with a given code   |     POST_ScriptInstance_{code}_disable |
| POST | `/api/rest/scriptInstance/{code}/enable` |  Enable a Script instance with a given code   |     POST_ScriptInstance_{code}_enable |
| DELETE | `/api/rest/scriptInstance/{scriptInstanceCode}` |  Remove an existing script instance with a given code .   |     DELETE_ScriptInstance_{scriptInstanceCode} |
| POST | `/api/rest/scriptInstance/createOrUpdate` |  Create new or update an existing script instance with a given code.   |     POST_ScriptInstance_createOrUpdate |
| GET | `/api/rest/scriptInstance/execute` |  Execute a script instance with a given code and list of parameters for the context of the script  |     GET_ScriptInstance_execute |
| GET | `/api/rest/scriptInstance/version` | Get version of application | index_19 |

#### GET /api/rest/scriptInstance

- Résumé:  Find a script instance with a given code. 
- OperationId:     GET_ScriptInstance_search
- Description: Find a script instance with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `scriptInstanceCode` (QUERY, optionnel) — string
- Réponses:
  - default: script instance
    - application/json: GetScriptInstanceResponseDto
    - application/xml: GetScriptInstanceResponseDto

#### POST /api/rest/scriptInstance

- Résumé:  Create a new script instance.  
- OperationId:     POST_ScriptInstance_create
- Description: Create a new script instance.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ScriptInstanceDto
  - application/xml: ScriptInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ScriptInstanceReponseDto
    - application/xml: ScriptInstanceReponseDto

#### PUT /api/rest/scriptInstance

- Résumé:  Update an existing script instance.  
- OperationId:     PUT_ScriptInstance_update
- Description: Update an existing script instance.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ScriptInstanceDto
  - application/xml: ScriptInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ScriptInstanceReponseDto
    - application/xml: ScriptInstanceReponseDto

#### POST /api/rest/scriptInstance/{code}/disable

- Résumé:  Disable a Script instance with a given code  
- OperationId:     POST_ScriptInstance_{code}_disable
- Description: Disable a Script instance with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/scriptInstance/{code}/enable

- Résumé:  Enable a Script instance with a given code  
- OperationId:     POST_ScriptInstance_{code}_enable
- Description: Enable a Script instance with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/scriptInstance/{scriptInstanceCode}

- Résumé:  Remove an existing script instance with a given code .  
- OperationId:     DELETE_ScriptInstance_{scriptInstanceCode}
- Description: Remove an existing script instance with a given code .
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `scriptInstanceCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/scriptInstance/createOrUpdate

- Résumé:  Create new or update an existing script instance with a given code.  
- OperationId:     POST_ScriptInstance_createOrUpdate
- Description: Create new or update an existing script instance with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ScriptInstanceDto
  - application/xml: ScriptInstanceDto
- Réponses:
  - default: Request processing status
    - application/json: ScriptInstanceReponseDto
    - application/xml: ScriptInstanceReponseDto

#### GET /api/rest/scriptInstance/execute

- Résumé:  Execute a script instance with a given code and list of parameters for the context of the script 
- OperationId:     GET_ScriptInstance_execute
- Description: Execute a script instance with a given code and list of parameters for the context of the script
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `scriptInstanceCode` (QUERY, optionnel) — string
- Réponses:
  - default: response of the script
    - application/json: object
    - application/xml: object

#### GET /api/rest/scriptInstance/version

- Résumé: Get version of application
- OperationId: index_19
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetScriptInstanceResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **scriptInstance**: ScriptInstanceDto

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

### ScriptInstanceReponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **compilationErrors**: Array<ScriptInstanceErrorDto>

### ScriptInstanceErrorDto
Type: object
Champs obligatoires: message
Propriétés:
- **lineNumber**: integer (int64)
- **columnNumber**: integer (int64)
- **message**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
