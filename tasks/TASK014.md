# TASK014 — Service LanguageIso

## Contexte
Le service « LanguageIso » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%LanguageIso
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/languageIso` |  Search language given a code.   |     GET_LanguageIso_search |
| POST | `/api/rest/languageIso` |  Creates tradingLanguage base on language code. If the language code does not exists, a language record is created.   |     POST_LanguageIso_create |
| PUT | `/api/rest/languageIso` |  modify a language |     PUT_LanguageIso_update |
| DELETE | `/api/rest/languageIso/{languageCode}` |  Does not delete a language but the tradingLanguage associated to it.   |     DELETE_LanguageIso_{languageCode} |
| POST | `/api/rest/languageIso/createOrUpdate` |  Create or update a language if it doesn't exists.   |     POST_LanguageIso_createOrUpdate |
| GET | `/api/rest/languageIso/list` |  List all languages.   |     GET_LanguageIso_list |
| GET | `/api/rest/languageIso/listGetAll` |  List languages ISO matching a given criteria  |     GET_LanguageIso_listGetAll |
| GET | `/api/rest/languageIso/version` | Get version of application | index_13 |

#### GET /api/rest/languageIso

- Résumé:  Search language given a code.  
- OperationId:     GET_LanguageIso_search
- Description: Search language given a code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `languageCode` (QUERY, optionnel) — string
- Réponses:
  - default: language iso for given code
    - application/json: GetLanguageIsoResponse
    - application/xml: GetLanguageIsoResponse

#### POST /api/rest/languageIso

- Résumé:  Creates tradingLanguage base on language code. If the language code does not exists, a language record is created.  
- OperationId:     POST_LanguageIso_create
- Description: Creates tradingLanguage base on language code. If the language code does not exists, a language record is created.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: LanguageIsoDto
  - application/xml: LanguageIsoDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/languageIso

- Résumé:  modify a language
- OperationId:     PUT_LanguageIso_update
- Description: modify a language. Same input parameter as create. The language and trading Language are created if they don't exists. The operation fails if the tradingLanguage is null.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: LanguageIsoDto
  - application/xml: LanguageIsoDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/languageIso/{languageCode}

- Résumé:  Does not delete a language but the tradingLanguage associated to it.  
- OperationId:     DELETE_LanguageIso_{languageCode}
- Description: Does not delete a language but the tradingLanguage associated to it.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `languageCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/languageIso/createOrUpdate

- Résumé:  Create or update a language if it doesn't exists.  
- OperationId:     POST_LanguageIso_createOrUpdate
- Description: Create or update a language if it doesn't exists.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: LanguageIsoDto
  - application/xml: LanguageIsoDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/languageIso/list

- Résumé:  List all languages.  
- OperationId:     GET_LanguageIso_list
- Description: List all languages.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: all languages
    - application/json: GetLanguagesIsoResponse
    - application/xml: GetLanguagesIsoResponse

#### GET /api/rest/languageIso/listGetAll

- Résumé:  List languages ISO matching a given criteria 
- OperationId:     GET_LanguageIso_listGetAll
- Description: List languages ISO matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of languages ISO
    - application/json: GetLanguagesIsoResponse
    - application/xml: GetLanguagesIsoResponse

#### GET /api/rest/languageIso/version

- Résumé: Get version of application
- OperationId: index_13
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetLanguageIsoResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **language**: LanguageIsoDto

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

### LanguageIsoDto
Type: object
Propriétés:
- **code**: string
- **description**: string

### GetLanguagesIsoResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **languages**: Array<LanguageIsoDto>

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
