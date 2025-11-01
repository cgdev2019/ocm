# TASK027 — Service BusinessAccountModel

## Contexte
Le service « BusinessAccountModel » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%BusinessAccountModel
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/account/businessAccountModel` |  Search for a business account model.   |     GET_BusinessAccountModel_  |
| POST | `/api/rest/account/businessAccountModel` |  Create a new business account model.   |     POST_BusinessAccountModel_  |
| PUT | `/api/rest/account/businessAccountModel` |  Update an existing business account model.   |     PUT_BusinessAccountModel_  |
| DELETE | `/api/rest/account/businessAccountModel/{businessAccountModelCode}` |  Remove business account model with a given business account model code.   |     DELETE_BusinessAccountModel_{businessAccountModelCode}  |
| POST | `/api/rest/account/businessAccountModel/findParents` |  Find parent entities based on account hierarchy code.  |     POST_BusinessAccountModel_findParents |
| PUT | `/api/rest/account/businessAccountModel/install` |  Install business account module.   |     PUT_BusinessAccountModel_install  |
| GET | `/api/rest/account/businessAccountModel/list` |  Return meveo's modules.   |     GET_BusinessAccountModel_list |
| GET | `/api/rest/account/businessAccountModel/listGetAll` |  List MeveoModuleDtos matching a given criteria  |     GET_BusinessAccountModel_listGetAll |
| GET | `/api/rest/account/businessAccountModel/version` | Get version of application | index_28 |

#### GET /api/rest/account/businessAccountModel

- Résumé:  Search for a business account model.  
- OperationId:     GET_BusinessAccountModel_ 
- Description: Search for a business account model.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `businessAccountModelCode` (QUERY, optionnel) — string
- Réponses:
  - default: business account model response.
    - application/json: BusinessAccountModelResponseDto
    - application/xml: BusinessAccountModelResponseDto

#### POST /api/rest/account/businessAccountModel

- Résumé:  Create a new business account model.  
- OperationId:     POST_BusinessAccountModel_ 
- Description: Create a new business account model.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessAccountModelDto
  - application/xml: BusinessAccountModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/account/businessAccountModel

- Résumé:  Update an existing business account model.  
- OperationId:     PUT_BusinessAccountModel_ 
- Description: Update an existing business account model.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessAccountModelDto
  - application/xml: BusinessAccountModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/account/businessAccountModel/{businessAccountModelCode}

- Résumé:  Remove business account model with a given business account model code.  
- OperationId:     DELETE_BusinessAccountModel_{businessAccountModelCode} 
- Description: Remove business account model with a given business account model code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `businessAccountModelCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/account/businessAccountModel/findParents

- Résumé:  Find parent entities based on account hierarchy code. 
- OperationId:     POST_BusinessAccountModel_findParents
- Description: Find parent entities based on account hierarchy code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CRMAccountTypeSearchDto
  - application/xml: CRMAccountTypeSearchDto
- Réponses:
  - default: parent list reponse
    - application/json: ParentListResponse
    - application/xml: ParentListResponse

#### PUT /api/rest/account/businessAccountModel/install

- Résumé:  Install business account module.  
- OperationId:     PUT_BusinessAccountModel_install 
- Description: Install business account module.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: BusinessAccountModelDto
  - application/xml: BusinessAccountModelDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/account/businessAccountModel/list

- Résumé:  Return meveo's modules.  
- OperationId:     GET_BusinessAccountModel_list
- Description: Return meveo's modules.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: meveo module response
    - application/json: MeveoModuleDtosResponse
    - application/xml: MeveoModuleDtosResponse

#### GET /api/rest/account/businessAccountModel/listGetAll

- Résumé:  List MeveoModuleDtos matching a given criteria 
- OperationId:     GET_BusinessAccountModel_listGetAll
- Description: List MeveoModuleDtos matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of MeveoModuleDtos
    - application/json: MeveoModuleDtosResponse
    - application/xml: MeveoModuleDtosResponse

#### GET /api/rest/account/businessAccountModel/version

- Résumé: Get version of application
- OperationId: index_28
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### BusinessAccountModelResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **businessAccountModel**: BusinessAccountModelDto

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

### BusinessAccountModelDto
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
- **hierarchyType**: string (Valeurs: S, S_C, C, S_CA, C_CA, CA, S_BA, C_BA, CA_BA, BA, S_UA, C_UA, CA_UA, BA_UA, UA)
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

### CRMAccountTypeSearchDto
Type: object
Propriétés:
- **searchTerm**: string
- **accountTypeCode**: string
- **limit**: integer (int32)
- **offset**: integer (int32)
- **order**: string (Valeurs: ASCENDING, DESCENDING)
- **sortField**: string

### ParentListResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **parents**: ParentEntitiesDto

### ParentEntitiesDto
Type: object
Propriétés:
- **parent**: Array<ParentEntityDto>

### ParentEntityDto
Type: object
Propriétés:
- **code**: string
- **description**: string

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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
