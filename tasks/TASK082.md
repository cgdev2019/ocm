# TASK082 — Service Module

## Contexte
Le service « Module » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Module
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/module` |  Find a Meveo's module with a given code    |     GET_Module_search |
| POST | `/api/rest/module` |  Create a new meveo module   |     POST_Module_create |
| PUT | `/api/rest/module` |  Update an existing Meveo module   |     PUT_Module_update |
| DELETE | `/api/rest/module/{code}` |  Remove an existing module with a given code    |     DELETE_Module_{code} |
| POST | `/api/rest/module/{code}/disable` |  Disable a Opencell module with a given code   |     POST_Module_{code}_disable |
| POST | `/api/rest/module/{code}/enable` |  Enable a Opencell module with a given code   |     POST_Module_{code}_enable |
| POST | `/api/rest/module/createOrUpdate` |  Create new or update an existing Meveo module   |     POST_Module_createOrUpdate |
| GET | `/api/rest/module/disable` |  Disable a Meveo's module with a given code   |     GET_Module_disable |
| GET | `/api/rest/module/enable` |  Enable a Meveo's module with a given code   |     GET_Module_enable |
| PUT | `/api/rest/module/install` |  Install Meveo module   |     PUT_Module_install |
| GET | `/api/rest/module/list` |  List all Meveo's modules   |     GET_Module_list |
| GET | `/api/rest/module/uninstall` |  uninstall a Meveo's module with a given code   |     GET_Module_uninstall |
| GET | `/api/rest/module/version` | Get version of application | index_129 |

#### GET /api/rest/module

- Résumé:  Find a Meveo's module with a given code   
- OperationId:     GET_Module_search
- Description: Find a Meveo's module with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Meveo module DTO Response.
    - application/json: MeveoModuleDtoResponse
    - application/xml: MeveoModuleDtoResponse

#### POST /api/rest/module

- Résumé:  Create a new meveo module  
- OperationId:     POST_Module_create
- Description: Create a new meveo module
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeveoModuleDto
  - application/xml: MeveoModuleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/module

- Résumé:  Update an existing Meveo module  
- OperationId:     PUT_Module_update
- Description: Update an existing Meveo module
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeveoModuleDto
  - application/xml: MeveoModuleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/module/{code}

- Résumé:  Remove an existing module with a given code   
- OperationId:     DELETE_Module_{code}
- Description: Remove an existing module with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/module/{code}/disable

- Résumé:  Disable a Opencell module with a given code  
- OperationId:     POST_Module_{code}_disable
- Description: Disable a Opencell module with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/module/{code}/enable

- Résumé:  Enable a Opencell module with a given code  
- OperationId:     POST_Module_{code}_enable
- Description: Enable a Opencell module with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/module/createOrUpdate

- Résumé:  Create new or update an existing Meveo module  
- OperationId:     POST_Module_createOrUpdate
- Description: Create new or update an existing Meveo module
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeveoModuleDto
  - application/xml: MeveoModuleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/module/disable

- Résumé:  Disable a Meveo's module with a given code  
- OperationId:     GET_Module_disable
- Description: Disable a Meveo's module with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/module/enable

- Résumé:  Enable a Meveo's module with a given code  
- OperationId:     GET_Module_enable
- Description: Enable a Meveo's module with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/module/install

- Résumé:  Install Meveo module  
- OperationId:     PUT_Module_install
- Description: Install Meveo module
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MeveoModuleDto
  - application/xml: MeveoModuleDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/module/list

- Résumé:  List all Meveo's modules  
- OperationId:     GET_Module_list
- Description: List all Meveo's modules
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of Meveo's modules
    - application/json: MeveoModuleDtosResponse
    - application/xml: MeveoModuleDtosResponse

#### GET /api/rest/module/uninstall

- Résumé:  uninstall a Meveo's module with a given code  
- OperationId:     GET_Module_uninstall
- Description: uninstall a Meveo's module with a given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/module/version

- Résumé: Get version of application
- OperationId: index_129
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### MeveoModuleDtoResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **module**: MeveoModuleDto

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

### MeveoModuleDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **license**: string (Valeurs: APACHE, BSD3_N, BSD3_R, BSD2_S, FREE_BSD, GPL, AGPL, LGPL, MIT, MOZ, CDDL, EPL, OPEN, COM)
- **logoPicture**: string
- **logoPictureFile**: Array<string (byte)>
- **script**: ScriptInstanceDto
- **moduleItems**: Array<BaseEntityDto>
- **codeOnly**: boolean
- **transient**: boolean

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

### BaseEntityDto
Type: object

### MeveoModuleDtosResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **modules**: Array<MeveoModuleDto>

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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
