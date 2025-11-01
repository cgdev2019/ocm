# TASK055 — API V2 Price Plan

## Contexte
Le domaine « Price Plan » (tag OpenAPI `Price Plan`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

## Objectifs
- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).
- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.
- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.
- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).

## Notes
- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.
- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/v2/catalog/priceManagement/pricePlanMatrixLines/import` | Import grid data in price versions | importPricePlanMatrixLines |
| POST | `/api/rest/v2/catalog/priceManagement/pricePlanMatrixVersions/import` | Import price plan versions | importPricePlanMatrixVersions |
| GET | `/api/rest/v2/pricePlans/{pricePlanMatrixCode}/pricePlanVersions/{pricePlanMatrixVersion}/checkIfUsed` | Check if the current price plan version is used | getDiscountPlanItem_1 |

#### POST /api/rest/v2/catalog/priceManagement/pricePlanMatrixLines/import

- Résumé: Import grid data in price versions
- OperationId: importPricePlanMatrixLines
- Description: Import grid data in price versions
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: PricePlanMLinesDTO (PricePlanMLinesDTO)
- Réponses:
  - 200: The price plan line successfully loaded
  - 400: Internal error
  - 404: PricePlanMatrixColumn with code={columnCode} user1 does not exists.
  - 409: A line having similar values already exists!

#### POST /api/rest/v2/catalog/priceManagement/pricePlanMatrixVersions/import

- Résumé: Import price plan versions
- OperationId: importPricePlanMatrixVersions
- Description: This API will import the zip file containing the list of price plan versions
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: ImportPricePlanVersionsDto (ImportPricePlanVersionsDto)
- Réponses:
  - 200: The price plan versions successfully loaded
  - 400: The following parameters are required or contain invalid values: fileToImport
  - 500: Error occured while importing price plan versions

#### GET /api/rest/v2/pricePlans/{pricePlanMatrixCode}/pricePlanVersions/{pricePlanMatrixVersion}/checkIfUsed

- Résumé: Check if the current price plan version is used
- OperationId: getDiscountPlanItem_1
- Description: Check if the current price plan version is used in a draft quote, not completed/validated order, or in a subscription
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `pricePlanMatrixCode` (PATH, obligatoire) — string : code of the price plan 
- `pricePlanMatrixVersion` (PATH, obligatoire) — integer (int32) : version of the pricePlanVersion
- Réponses:
  - 200: The price plan version use successfully loaded
  - 400: Internal error
  - 404: Price plan version not found
    - application/json: ApiException (ApiException)

## Schémas principaux

### PricePlanMLinesDTO
Type: object
Propriétés:
- **pricePlanMatrixVersion**: integer (int32) — price plan matrix version
- **pricePlanMatrixCode**: string — price plan matrix code
- **data**: Array<string (byte)> — data
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### ImportPricePlanVersionsDto
Type: object
Propriétés:
- **fileToImport**: string
- **pricePlanVersions**: Array<ImportPricePlanVersionsItem>
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### ImportPricePlanVersionsItem
Type: object
Propriétés:
- **chargeCode**: string
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **status**: string (Valeurs: DRAFT, PUBLISHED, CLOSED)
- **fileName**: string

### ApiException
Type: object
Propriétés:
- **causes**: Array<Cause>
- **details**: string
- **code**: string
- **status**: string (Valeurs: OK, Created, Accepted, No Content, Reset Content, Partial Content, Moved Permanently, Found, See Other, Not Modified, Use Proxy, Temporary Redirect, Bad Request, Unauthorized, Payment Required, Forbidden, Not Found, Method Not Allowed, Not Acceptable, Proxy Authentication Required, Request Timeout, Conflict, Gone, Length Required, Precondition Failed, Request Entity Too Large, Request-URI Too Long, Unsupported Media Type, Requested Range Not Satisfiable, Expectation Failed, Precondition Required, Too Many Requests, Request Header Fields Too Large, Internal Server Error, Not Implemented, Bad Gateway, Service Unavailable, Gateway Timeout, HTTP Version Not Supported, Network Authentication Required)
- **id**: integer (int64)
- **links**: Array<object>

### Cause
Type: object
Propriétés:
- **causeMessage**: string

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
