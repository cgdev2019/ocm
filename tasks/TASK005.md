# TASK005 — Service Country

## Contexte
Le service « Country » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Country
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/country` |  Search Trading country with a given country code.   |     GET_Country_search |
| POST | `/api/rest/country` |  Creates a Trading Country base from the supplied country code |     POST_Country_create |
| PUT | `/api/rest/country` |  Modify a country |     PUT_Country_update |
| POST | `/api/rest/country/{code}/disable` |  Disable a Trading country with a given country code   |     POST_Country_{code}_disable |
| POST | `/api/rest/country/{code}/enable` |  Enable a Trading country with a given country code   |     POST_Country_{code}_enable |
| DELETE | `/api/rest/country/{countryCode}` |  Does not delete a country but the tradingCountry associated to it.  |     DELETE_Country_{countryCode} |
| DELETE | `/api/rest/country/{countryCode}/{currencyCode}` |  Does not delete a country but the tradingCountry associated to it.   |     DELETE_Country_{countryCode}_{currencyCode} |
| POST | `/api/rest/country/createOrUpdate` |  Create or update a Trading Country base from the supplied country code |     POST_Country_createOrUpdate |
| GET | `/api/rest/country/list` |  Search for list of trading countries.  |     GET_Country_list |
| GET | `/api/rest/country/version` | Get version of application | index_4 |

#### GET /api/rest/country

- Résumé:  Search Trading country with a given country code.  
- OperationId:     GET_Country_search
- Description: Search Trading country with a given country code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `countryCode` (QUERY, optionnel) — string
- Réponses:
  - default: link org.meveo.api.dto.response.GetCountryResponse}.
    - application/json: GetTradingCountryResponse
    - application/xml: GetTradingCountryResponse

#### POST /api/rest/country

- Résumé:  Creates a Trading Country base from the supplied country code
- OperationId:     POST_Country_create
- Description: Creates a Trading Country base from the supplied country code. If the country code does not exists, a country and tradingCountry records are created
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CountryDto
  - application/xml: CountryDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/country

- Résumé:  Modify a country
- OperationId:     PUT_Country_update
- Description: Modify a country. Same input parameter as create. The country and tradingCountry are created if they don't exists. The operation fails if the tradingCountry is null.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CountryDto
  - application/xml: CountryDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/country/{code}/disable

- Résumé:  Disable a Trading country with a given country code  
- OperationId:     POST_Country_{code}_disable
- Description: Disable a Trading country with a given country code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/country/{code}/enable

- Résumé:  Enable a Trading country with a given country code  
- OperationId:     POST_Country_{code}_enable
- Description: Enable a Trading country with a given country code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/country/{countryCode}

- Résumé:  Does not delete a country but the tradingCountry associated to it. 
- OperationId:     DELETE_Country_{countryCode}
- Description: Does not delete a country but the tradingCountry associated to it.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `countryCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/country/{countryCode}/{currencyCode}

- Résumé:  Does not delete a country but the tradingCountry associated to it.  
- OperationId:     DELETE_Country_{countryCode}_{currencyCode}
- Description: Does not delete a country but the tradingCountry associated to it.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `countryCode` (PATH, obligatoire) — string
- `currencyCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/country/createOrUpdate

- Résumé:  Create or update a Trading Country base from the supplied country code
- OperationId:     POST_Country_createOrUpdate
- Description: Create or update a Trading Country base from the supplied country code. If the country code does not exists, a country and tradingCountry records are created
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CountryDto
  - application/xml: CountryDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/country/list

- Résumé:  Search for list of trading countries. 
- OperationId:     GET_Country_list
- Description: Search for list of trading countries.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of trading countries
    - application/json: TradingCountriesResponseDto
    - application/xml: TradingCountriesResponseDto

#### GET /api/rest/country/version

- Résumé: Get version of application
- OperationId: index_4
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetTradingCountryResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **country**: CountryDto

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

### CountryDto
Type: object
Champs obligatoires: currencyCode
Propriétés:
- **countryCode**: string
- **name**: string
- **currencyCode**: string
- **languageCode**: string
- **disabled**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### TradingCountriesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **tradingCountries**: TradingCountriesDto

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

### TradingCountriesDto
Type: object
Propriétés:
- **country**: Array<TradingCountryDto>

### TradingCountryDto
Type: object
Champs obligatoires: currencyCode, languageCode
Propriétés:
- **countryCode**: string
- **description**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **currencyCode**: string
- **languageCode**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
