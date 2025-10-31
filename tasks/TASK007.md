# TASK007 — Service Currency

## Contexte
Le service « Currency » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Currency
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/currency` | Search currency with a given currency code. | GET_Currency_search |
| POST | `/api/rest/currency` | Creates tradingCurrency base on currency code. If the currency code does not exists, a currency record is created | POST_Currency_create |
| PUT | `/api/rest/currency` | Modify a tradingCurrency | PUT_Currency_update |
| POST | `/api/rest/currency/{code}/disable` | Disable a Trading currency with a given currency code | POST_Currency_{code}_disable |
| POST | `/api/rest/currency/{code}/enable` | Enable a Trading currency with a given currency code | POST_Currency_{code}_enable |
| DELETE | `/api/rest/currency/{currencyCode}` | Remove currency with a given currency code. | DELETE_Currency_{currencyCode} |
| POST | `/api/rest/currency/addExchangeRate` |  API to add Exchange Rate  | ADD_EXCHANGE_RATE |
| POST | `/api/rest/currency/addFunctionalCurrency` | API to add functional currency to the main provider | ADD_FUNCTIONAL_CURRENCY |
| POST | `/api/rest/currency/createOrUpdate` | Create or Update tradingCurrency base on currency code. If the currency code does not exists, a currency record is created | POST_Currency_createOrUpdate |
| DELETE | `/api/rest/currency/exchangeRate/{id}` | API to delete an exchange Rate | removeExchangeRateById |
| POST | `/api/rest/currency/importExchangeRate` | API to import an exchange Rate from a file | importExchangeRate |
| GET | `/api/rest/currency/list` | Search for list of trading currencies. | GET_Currency_list |
| PUT | `/api/rest/currency/updateExchangeRate/{id}` | API to update exchange rate | UPDATE_EXCHANGE_RATE |
| GET | `/api/rest/currency/version` | Get version of application | index_6 |

#### GET /api/rest/currency

- Résumé: Search currency with a given currency code.
- OperationId: GET_Currency_search
- Description: Search currency with a given currency code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `currencyCode` (QUERY, optionnel) — string
- Réponses:
  - default: currency if exists
    - application/json: GetTradingCurrencyResponse
    - application/xml: GetTradingCurrencyResponse

#### POST /api/rest/currency

- Résumé: Creates tradingCurrency base on currency code. If the currency code does not exists, a currency record is created
- OperationId: POST_Currency_create
- Description: Creates tradingCurrency base on currency code. If the currency code does not exists, a currency record is created
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CurrencyDto
  - application/xml: CurrencyDto
  - multipart/form-data: CurrencyDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/currency

- Résumé: Modify a tradingCurrency
- OperationId: PUT_Currency_update
- Description: Modify a tradingCurrency. Same input parameter as create. The currency and tradingCurrency are created if they don't exists. The operation fails if the tradingCurrency is null
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CurrencyDto
  - application/xml: CurrencyDto
  - multipart/form-data: CurrencyDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/currency/{code}/disable

- Résumé: Disable a Trading currency with a given currency code
- OperationId: POST_Currency_{code}_disable
- Description: Disable a Trading currency with a given currency code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/currency/{code}/enable

- Résumé: Enable a Trading currency with a given currency code
- OperationId: POST_Currency_{code}_enable
- Description: Enable a Trading currency with a given currency code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/currency/{currencyCode}

- Résumé: Remove currency with a given currency code.
- OperationId: DELETE_Currency_{currencyCode}
- Description: Remove currency with a given currency code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `currencyCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/currency/addExchangeRate

- Résumé:  API to add Exchange Rate 
- OperationId: ADD_EXCHANGE_RATE
- Description: API to add Exchange Rate
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ExchangeRateDto
  - application/xml: ExchangeRateDto
  - multipart/form-data: ExchangeRateDto
- Réponses:
  - 200: Success
  - 400: Failed action
  - 404: Entity does not exist
  - 412: Missing parameters

#### POST /api/rest/currency/addFunctionalCurrency

- Résumé: API to add functional currency to the main provider
- OperationId: ADD_FUNCTIONAL_CURRENCY
- Description: API to add functional currency to the main provider
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CurrencyDto
  - application/xml: CurrencyDto
  - multipart/form-data: CurrencyDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/currency/createOrUpdate

- Résumé: Create or Update tradingCurrency base on currency code. If the currency code does not exists, a currency record is created
- OperationId: POST_Currency_createOrUpdate
- Description: Create or Update tradingCurrency base on currency code. If the currency code does not exists, a currency record is created
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CurrencyDto
  - application/xml: CurrencyDto
  - multipart/form-data: CurrencyDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/currency/exchangeRate/{id}

- Résumé: API to delete an exchange Rate
- OperationId: removeExchangeRateById
- Description: delete an existing exchange rate
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the exchange rate
- Réponses:
  - 200: the exchange rate successfully deleted
  - 400: bad request when exchange rate is not found

#### POST /api/rest/currency/importExchangeRate

- Résumé: API to import an exchange Rate from a file
- OperationId: importExchangeRate
- Description: Import an exchange Rate from a file
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: FileUploadForm
- Réponses:
  - 200: Success
  - 400: Failed action
  - 404: Entity does not exist.
  - 412: Missing parameters

#### GET /api/rest/currency/list

- Résumé: Search for list of trading currencies.
- OperationId: GET_Currency_list
- Description: Search for list of trading currencies.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of trading currencies
    - application/json: TradingCurrenciesResponseDto
    - application/xml: TradingCurrenciesResponseDto

#### PUT /api/rest/currency/updateExchangeRate/{id}

- Résumé: API to update exchange rate
- OperationId: UPDATE_EXCHANGE_RATE
- Description: API to update exchange rate
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - optionnel
  - application/json: ExchangeRateDto
  - application/xml: ExchangeRateDto
  - multipart/form-data: ExchangeRateDto
- Réponses:
  - 200: Success
  - 400: failed action
  - 404: Entity does not exist
  - 412: Missing parameters

#### GET /api/rest/currency/version

- Résumé: Get version of application
- OperationId: index_6
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetTradingCurrencyResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **currency**: CurrencyDto

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

### CurrencyDto
Type: object
Propriétés:
- **id**: integer (int64)
- **code**: string
- **description**: string
- **disabled**: boolean
- **prCurrencyToThis**: number
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **symbol**: string
- **decimalPlaces**: integer (int32)

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### ExchangeRateDto
Type: object
Propriétés:
- **fromDate**: string (date-time)
- **exchangeRate**: number

### FileUploadForm
Type: object
Propriétés:
- **data**: Array<string (byte)>
- **filename**: string
- **fileFormat**: string

### TradingCurrenciesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **tradingCurrencies**: CurrenciesDto

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

### CurrenciesDto
Type: object
Propriétés:
- **currency**: Array<CurrencyDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
