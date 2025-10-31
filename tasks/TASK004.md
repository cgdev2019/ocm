# TASK004 — Service CountryIso

## Contexte
Le service « CountryIso » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%CountryIso
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/countryIso` |  Search country with a given country code.   |     GET_CountryIso_  |
| POST | `/api/rest/countryIso` |  Creates a tradingCountry base from the supplied country code |     POST_CountryIso_create |
| PUT | `/api/rest/countryIso` |  Modify a country |     PUT_CountryIso_update |
| DELETE | `/api/rest/countryIso/{countryCode}` |  Does not delete a country but the tradingCountry associated to it.   |     DELETE_CountryIso_{countryCode} |
| POST | `/api/rest/countryIso/createOrUpdate` |  Creates or modify a tradingCountry base from the supplied country code.  |     POST_CountryIso_createOrUpdate |
| GET | `/api/rest/countryIso/list` |  List all countries.  |     GET_CountryIso_list |
| GET | `/api/rest/countryIso/listGetAll` |  List countries ISO matching a given criteria  |     GET_CountryIso_listGetAll |
| GET | `/api/rest/countryIso/version` | Get version of application | index_3 |

#### GET /api/rest/countryIso

- Résumé:  Search country with a given country code.  
- OperationId:     GET_CountryIso_ 
- Description: Search country with a given country code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `countryCode` (QUERY, optionnel) — string
- Réponses:
  - default: link org.meveo.api.dto.response.GetCountryIsoResponse}.
    - application/json: GetCountryIsoResponse
    - application/xml: GetCountryIsoResponse

#### POST /api/rest/countryIso

- Résumé:  Creates a tradingCountry base from the supplied country code
- OperationId:     POST_CountryIso_create
- Description: Creates a tradingCountry base from the supplied country code. If the country code does not exists, a country and tradingCountry records are created
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CountryIsoDto
  - application/xml: CountryIsoDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/countryIso

- Résumé:  Modify a country
- OperationId:     PUT_CountryIso_update
- Description: Modify a country. Same input parameter as create. The country and tradingCountry are created if they don't exists. The operation fails if the tradingCountry is null.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CountryIsoDto
  - application/xml: CountryIsoDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/countryIso/{countryCode}

- Résumé:  Does not delete a country but the tradingCountry associated to it.  
- OperationId:     DELETE_CountryIso_{countryCode}
- Description: Does not delete a country but the tradingCountry associated to it.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `countryCode` (PATH, obligatoire) — string
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/countryIso/createOrUpdate

- Résumé:  Creates or modify a tradingCountry base from the supplied country code. 
- OperationId:     POST_CountryIso_createOrUpdate
- Description: Creates or modify a tradingCountry base from the supplied country code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CountryIsoDto
  - application/xml: CountryIsoDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/countryIso/list

- Résumé:  List all countries. 
- OperationId:     GET_CountryIso_list
- Description: List all countries.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: list of countries
    - application/json: GetCountriesIsoResponse
    - application/xml: GetCountriesIsoResponse

#### GET /api/rest/countryIso/listGetAll

- Résumé:  List countries ISO matching a given criteria 
- OperationId:     GET_CountryIso_listGetAll
- Description: List countries ISO matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of countries ISO
    - application/json: GetCountriesIsoResponse
    - application/xml: GetCountriesIsoResponse

#### GET /api/rest/countryIso/version

- Résumé: Get version of application
- OperationId: index_3
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetCountryIsoResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **country**: CountryIsoDto

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

### CountryIsoDto
Type: object
Champs obligatoires: currencyCode, languageCode
Propriétés:
- **countryCode**: string
- **description**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **currencyCode**: string
- **languageCode**: string

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### GetCountriesIsoResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **countries**: Array<CountryIsoDto>

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
