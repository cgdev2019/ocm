# TASK024 — API V2 Discount Plans

## Contexte
Le domaine « Discount Plans » (tag OpenAPI `Discount Plans`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/catalog/discountPlans` | This endpoint allows to create a discount plan resource | create_5 |
| GET | `/api/rest/v2/catalog/discountPlans/{id}` | Return an discount plan | get |
| PUT | `/api/rest/v2/catalog/discountPlans/{id}` | Update a resource by giving it's Id | update_4 |
| DELETE | `/api/rest/v2/catalog/discountPlans/{id}` | Delete a resource by giving it's Id | delete_3 |
| GET | `/api/rest/v2/catalog/discountPlans/{id}/discountPlanItems` | Return an discount plan items | getDiscountPlanItems |
| POST | `/api/rest/v2/catalog/discountPlans/{id}/discountPlanItems` | This endpoint allows to create a discount plan item resource | createItem |
| GET | `/api/rest/v2/catalog/discountPlans/{id}/discountPlanItems/{idItem}` | Return an discount plan | getDiscountPlanItem |
| PUT | `/api/rest/v2/catalog/discountPlans/{id}/discountPlanItems/{idItem}` | Update a discount plan item resource by giving it's Id | updateItem |
| DELETE | `/api/rest/v2/catalog/discountPlans/{id}/discountPlanItems/{idItem}` | Delete a resource by giving it's Id | deleteItem |
| PUT | `/api/rest/v2/catalog/discountPlans/{id}/expiration` | Force Expiration the discount plan by giving it's Id | expire_1 |

#### POST /api/rest/v2/catalog/discountPlans

- Résumé: This endpoint allows to create a discount plan resource
- OperationId: create_5
- Description: create new discount plan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: the entity successfully created, and the id is returned in the response
  - 400: bad request when entity information contains an error

#### GET /api/rest/v2/catalog/discountPlans/{id}

- Résumé: Return an discount plan
- OperationId: get
- Description: Returns the discount plan data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the discount plan
- Réponses:
  - 404: Discount plan not found
    - application/json: ApiException (ApiException)
  - default: the searched discount Plan

#### PUT /api/rest/v2/catalog/discountPlans/{id}

- Résumé: Update a resource by giving it's Id
- OperationId: update_4
- Description: specify record id, and as body, the list of the fields to update
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to update
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### DELETE /api/rest/v2/catalog/discountPlans/{id}

- Résumé: Delete a resource by giving it's Id
- OperationId: delete_3
- Description: specify the entity name, the record id, and as body, the list of the fields to delete
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to delete
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### GET /api/rest/v2/catalog/discountPlans/{id}/discountPlanItems

- Résumé: Return an discount plan items
- OperationId: getDiscountPlanItems
- Description: Returns the discount plan items data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the discount plan 
- Corps de requête:
  - obligatoire
  - application/json: GenericPagingAndFiltering (GenericPagingAndFiltering)
- Réponses:
  - 200: paginated results successfully retrieved with hypermedia links
  - 400: bad request when entityName not well formed or entity unrecognized

#### POST /api/rest/v2/catalog/discountPlans/{id}/discountPlanItems

- Résumé: This endpoint allows to create a discount plan item resource
- OperationId: createItem
- Description: create new discount plan
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the discount plan 
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: the entity successfully created, and the id is returned in the response
  - 400: bad request when entity information contains an error

#### GET /api/rest/v2/catalog/discountPlans/{id}/discountPlanItems/{idItem}

- Résumé: Return an discount plan
- OperationId: getDiscountPlanItem
- Description: Returns the discount plan data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the discount plan 
- `idItem` (PATH, obligatoire) — integer (int64) : id of the discount plan item
- Réponses:
  - 404: Discount plan item not found
    - application/json: ApiException (ApiException)
  - default: the searched discount plan item

#### PUT /api/rest/v2/catalog/discountPlans/{id}/discountPlanItems/{idItem}

- Résumé: Update a discount plan item resource by giving it's Id
- OperationId: updateItem
- Description: specify record id, and as body, the list of the fields to update
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `idItem` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to update
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### DELETE /api/rest/v2/catalog/discountPlans/{id}/discountPlanItems/{idItem}

- Résumé: Delete a resource by giving it's Id
- OperationId: deleteItem
- Description: specify the entity name, the record id, and as body, the list of the fields to delete
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `idItem` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to delete
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### PUT /api/rest/v2/catalog/discountPlans/{id}/expiration

- Résumé: Force Expiration the discount plan by giving it's Id
- OperationId: expire_1
- Description: specify record id, and as body, the list of the fields to update
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to update
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

## Schémas principaux

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

### GenericPagingAndFiltering
Type: object
Propriétés:
- **disableAutoFetchListOfNestedEntities**: boolean
- **excluding**: Array<string>
- **nestedDepth**: integer (int64)
- **genericFields**: Array<string>
- **nestedEntities**: Array<string>
- **genericFieldDetails**: Array<GenericFieldDetails>
- **translations**: object
- **total**: integer (int64)
- **joinType**: string (Valeurs: INNER, LEFT, RIGHT)
- **fullTextFilter**: string
- **sortBy**: string
- **sortOrder**: string
- **filters**: object
- **groupBy**: Array<string>
- **having**: Array<string>
- **limit**: integer (int64)
- **offset**: integer (int64)

### GenericFieldDetails
Type: object
Propriétés:
- **transformation**: string
- **formula**: string
- **formulaInputs**: string
- **mappings**: object
- **header**: string
- **name**: string — name generic field

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
