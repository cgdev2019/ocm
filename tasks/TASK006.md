# TASK006 — Service CurrencyIso

## Contexte
Le service « CurrencyIso » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%CurrencyIso
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/currencyIso` |  Search currency with a given currency code.   |     GET_CurrencyIso_  |
| POST | `/api/rest/currencyIso` |  Creates tradingCurrency base on currency code. If the currency code does not exists, a currency record is created   |     POST_CurrencyIso_  |
| PUT | `/api/rest/currencyIso` |  Modify a tradingCurrency |     PUT_CurrencyIso_update |
| DELETE | `/api/rest/currencyIso/{currencyCode}` |  Remove currency with a given currency code.   |     DELETE_CurrencyIso_{currencyCode}  |
| POST | `/api/rest/currencyIso/createOrUpdate` |  Creates or modify a tradingCurrency base on currency code.   |     POST_CurrencyIso_createOrUpdate  |
| GET | `/api/rest/currencyIso/list` |  List all currencies.  |     GET_CurrencyIso_list |
| GET | `/api/rest/currencyIso/listGetAll` |  List currencies ISO matching a given criteria  |     GET_CurrencyIso_listGetAll |
| GET | `/api/rest/currencyIso/version` | Get version of application | index_5 |

#### GET /api/rest/currencyIso

- Résumé:  Search currency with a given currency code.  
- OperationId:     GET_CurrencyIso_ 
- Description: Search currency with a given currency code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `currencyCode` (QUERY, optionnel) — string
- Réponses:
  - default: currency iso if found.
    - application/json: GetCurrencyIsoResponse
    - application/xml: GetCurrencyIsoResponse

#### POST /api/rest/currencyIso

- Résumé:  Creates tradingCurrency base on currency code. If the currency code does not exists, a currency record is created  
- OperationId:     POST_CurrencyIso_ 
- Description: Creates tradingCurrency base on currency code. If the currency code does not exists, a currency record is created
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CurrencyIsoDto
  - application/xml: CurrencyIsoDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/currencyIso

- Résumé:  Modify a tradingCurrency
- OperationId:     PUT_CurrencyIso_update
- Description: Modify a tradingCurrency. Same input parameter as create. The currency and tradingCurrency are created if they don't exists. The operation fails if the tradingCurrency is null
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CurrencyIsoDto
  - application/xml: CurrencyIsoDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/currencyIso/{currencyCode}

- Résumé:  Remove currency with a given currency code.  
- OperationId:     DELETE_CurrencyIso_{currencyCode} 
- Description: Remove currency with a given currency code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `currencyCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/currencyIso/createOrUpdate

- Résumé:  Creates or modify a tradingCurrency base on currency code.  
- OperationId:     POST_CurrencyIso_createOrUpdate 
- Description: Creates or modify a tradingCurrency base on currency code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CurrencyIsoDto
  - application/xml: CurrencyIsoDto
- Réponses:
  - default: action status.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/currencyIso/list

- Résumé:  List all currencies. 
- OperationId:     GET_CurrencyIso_list
- Description: List all currencies.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of all currency iso/
    - application/json: GetCurrenciesIsoResponse
    - application/xml: GetCurrenciesIsoResponse

#### GET /api/rest/currencyIso/listGetAll

- Résumé:  List currencies ISO matching a given criteria 
- OperationId:     GET_CurrencyIso_listGetAll
- Description: List currencies ISO matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of currencies ISO
    - application/json: GetCurrenciesIsoResponse
    - application/xml: GetCurrenciesIsoResponse

#### GET /api/rest/currencyIso/version

- Résumé: Get version of application
- OperationId: index_5
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetCurrencyIsoResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **currency**: CurrencyIsoDto

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

### CurrencyIsoDto
Type: object
Propriétés:
- **code**: string
- **description**: string

### GetCurrenciesIsoResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **currencies**: Array<CurrencyIsoDto>

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
