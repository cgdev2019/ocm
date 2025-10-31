# TASK017 — Service OccTemplate

## Contexte
Le service « OccTemplate » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%OccTemplate
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/occTemplate` |  Search OccTemplate with a given code.   |     GET_OccTemplate_search |
| POST | `/api/rest/occTemplate` |  Create OccTemplate.   |     POST_OccTemplate_create |
| PUT | `/api/rest/occTemplate` |  Update OccTemplate.   |     PUT_OccTemplate_update |
| DELETE | `/api/rest/occTemplate/{occTemplateCode}` |  Remove OccTemplate with a given code.   |     DELETE_OccTemplate_{occTemplateCode} |
| POST | `/api/rest/occTemplate/createOrUpdate` |  Create or update OccTemplate.   |     POST_OccTemplate_createOrUpdate |
| GET | `/api/rest/occTemplate/list` |  Get List of OccTemplates matching a given criteria   |     GET_OccTemplate_list |
| POST | `/api/rest/occTemplate/list` |  Get List of OccTemplates matching a given criteria   |     POST_OccTemplate_list |
| GET | `/api/rest/occTemplate/version` | Get version of application | index_15 |

#### GET /api/rest/occTemplate

- Résumé:  Search OccTemplate with a given code.  
- OperationId:     GET_OccTemplate_search
- Description: Search OccTemplate with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `occTemplateCode` (QUERY, optionnel) — string
- Réponses:
  - default: account operation template
    - application/json: GetOccTemplateResponseDto
    - application/xml: GetOccTemplateResponseDto

#### POST /api/rest/occTemplate

- Résumé:  Create OccTemplate.  
- OperationId:     POST_OccTemplate_create
- Description: Create OccTemplate.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OccTemplateDto
  - application/xml: OccTemplateDto
- Réponses:
  - default: account operation template
    - application/json: GetOccTemplateResponseDto
    - application/xml: GetOccTemplateResponseDto

#### PUT /api/rest/occTemplate

- Résumé:  Update OccTemplate.  
- OperationId:     PUT_OccTemplate_update
- Description: Update OccTemplate.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OccTemplateDto
  - application/xml: OccTemplateDto
- Réponses:
  - default: account operation template
    - application/json: GetOccTemplateResponseDto
    - application/xml: GetOccTemplateResponseDto

#### DELETE /api/rest/occTemplate/{occTemplateCode}

- Résumé:  Remove OccTemplate with a given code.  
- OperationId:     DELETE_OccTemplate_{occTemplateCode}
- Description: Remove OccTemplate with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `occTemplateCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/occTemplate/createOrUpdate

- Résumé:  Create or update OccTemplate.  
- OperationId:     POST_OccTemplate_createOrUpdate
- Description: Create or update OccTemplate.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: OccTemplateDto
  - application/xml: OccTemplateDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/occTemplate/list

- Résumé:  Get List of OccTemplates matching a given criteria  
- OperationId:     GET_OccTemplate_list
- Description: Get List of OccTemplates matching a given criteria
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `query` (QUERY, optionnel) — string
- `fields` (QUERY, optionnel) — string
- `offset` (QUERY, optionnel) — integer (int32)
- `limit` (QUERY, optionnel) — integer (int32)
- `sortBy` (QUERY, optionnel) — string
- `sortOrder` (QUERY, optionnel) — string
  - Valeurs autorisées: ASCENDING, DESCENDING
  - Contraintes: défaut: "ASCENDING"
- Réponses:
  - default: A list of account operations
    - application/json: GetOccTemplatesResponseDto
    - application/xml: GetOccTemplatesResponseDto

#### POST /api/rest/occTemplate/list

- Résumé:  Get List of OccTemplates matching a given criteria  
- OperationId:     POST_OccTemplate_list
- Description: Get List of OccTemplates matching a given criteria
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PagingAndFiltering
  - application/xml: PagingAndFiltering
- Réponses:
  - default: List of account operations
    - application/json: GetOccTemplatesResponseDto
    - application/xml: GetOccTemplatesResponseDto

#### GET /api/rest/occTemplate/version

- Résumé: Get version of application
- OperationId: index_15
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetOccTemplateResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **occTemplate**: OccTemplateDto

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

### OccTemplateDto
Type: object
Champs obligatoires: accountingCode, code, occCategory
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **accountingCode**: string
- **accountCode**: string
- **occCategory**: string (Valeurs: DEBIT, CREDIT)
- **accountCodeClientSide**: string
- **journalCode**: string — The journal code
- **accountingScheme**: AccountingSchemeDto
- **contractAccountingCode**: string — contract accounting code
- **contraAccountingCode2**: string — contra Accounting Code 2

### AccountingSchemeDto
Type: object
Champs obligatoires: code, scriptCode
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **longDescription**: string — a long description
- **longDescriptionsTranslated**: Array<LanguageDescriptionDto> — i18n a long description
- **scriptCode**: string — the script code

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### GetOccTemplatesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **occTemplates**: OccTemplatesDto

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

### OccTemplatesDto
Type: object
Propriétés:
- **occTemplate**: Array<OccTemplateDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
