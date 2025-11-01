# TASK015 — Service Language

## Contexte
Le service « Language » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Language
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/language` |  Search language given a code.   |     GET_Language_search |
| POST | `/api/rest/language` |  Creates tradingLanguage base on language code. If the language code does not exists, a language record is created.   |     POST_Language_create |
| PUT | `/api/rest/language` |  modify a language |     PUT_Language_update |
| POST | `/api/rest/language/{code}/disable` |  Disable a Trading language with a given language code   |     POST_Language_{code}_disable |
| POST | `/api/rest/language/{code}/enable` |  Enable a Trading language with a given language code   |     POST_Language_{code}_enable |
| DELETE | `/api/rest/language/{languageCode}` |  Does not delete a language but the tradingLanguage associated to it.   |     DELETE_Language_{languageCode} |
| POST | `/api/rest/language/createOrUpdate` |  Create or update a language if it doesn't exists.   |     POST_Language_createOrUpdate |
| GET | `/api/rest/language/list` |  Search for list of trading languages.  |     GET_Language_list |
| GET | `/api/rest/language/version` | Get version of application | index_14 |

#### GET /api/rest/language

- Résumé:  Search language given a code.  
- OperationId:     GET_Language_search
- Description: Search language given a code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `languageCode` (QUERY, optionnel) — string
- Réponses:
  - default: language
    - application/json: GetTradingLanguageResponse
    - application/xml: GetTradingLanguageResponse

#### POST /api/rest/language

- Résumé:  Creates tradingLanguage base on language code. If the language code does not exists, a language record is created.  
- OperationId:     POST_Language_create
- Description: Creates tradingLanguage base on language code. If the language code does not exists, a language record is created.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: LanguageDto
  - application/xml: LanguageDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/language

- Résumé:  modify a language
- OperationId:     PUT_Language_update
- Description: modify a language. Same input parameter as create. The language and trading Language are created if they don't exists. The operation fails if the tradingLanguage is null.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: LanguageDto
  - application/xml: LanguageDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/language/{code}/disable

- Résumé:  Disable a Trading language with a given language code  
- OperationId:     POST_Language_{code}_disable
- Description: Disable a Trading language with a given language code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/language/{code}/enable

- Résumé:  Enable a Trading language with a given language code  
- OperationId:     POST_Language_{code}_enable
- Description: Enable a Trading language with a given language code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/language/{languageCode}

- Résumé:  Does not delete a language but the tradingLanguage associated to it.  
- OperationId:     DELETE_Language_{languageCode}
- Description: Does not delete a language but the tradingLanguage associated to it.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `languageCode` (PATH, obligatoire) — string
- Réponses:
  - default: action satus
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/language/createOrUpdate

- Résumé:  Create or update a language if it doesn't exists.  
- OperationId:     POST_Language_createOrUpdate
- Description: Create or update a language if it doesn't exists.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: LanguageDto
  - application/xml: LanguageDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/language/list

- Résumé:  Search for list of trading languages. 
- OperationId:     GET_Language_list
- Description: Search for list of trading languages.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of trading languages
    - application/json: TradingLanguagesResponseDto
    - application/xml: TradingLanguagesResponseDto

#### GET /api/rest/language/version

- Résumé: Get version of application
- OperationId: index_14
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetTradingLanguageResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **language**: LanguageDto

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

### LanguageDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **disabled**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### TradingLanguagesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **tradingLanguages**: LanguagesDto

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

### LanguagesDto
Type: object
Propriétés:
- **language**: Array<LanguageDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
