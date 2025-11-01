# TASK023 — API V2 Discount Plan instances

## Contexte
Le domaine « Discount Plan instances » (tag OpenAPI `Discount Plan instances`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/billing/billingAccounts/{billingAccountId}/discountPlanInstances` | Return an discount plan instance | getDiscountPlanInstances |
| POST | `/billing/billingAccounts/{billingAccountId}/discountPlanInstances` | This endpoint allows to instantiate a discount plan instance resource | create_2 |
| GET | `/billing/billingAccounts/{billingAccountId}/discountPlanInstances/{id}` | Return an discount plan instance | getDiscountPlanInstance |
| PUT | `/billing/billingAccounts/{billingAccountId}/discountPlanInstances/{id}` | Update a resource by giving it's Id | update_1 |
| DELETE | `/billing/billingAccounts/{billingAccountId}/discountPlanInstances/{id}` | Delete a resource by giving it's Id | delete_1 |
| PUT | `/billing/billingAccounts/{billingAccountId}/discountPlanInstances/{id}/expiration` | Expire a discount plan Instance | expire |
| GET | `/billing/subscriptions/{subscriptionId}/discountPlanInstances` | Return discount plan instances by subscription | getDiscountPlanInstancesBySubscription |
| POST | `/billing/subscriptions/{subscriptionId}/discountPlanInstances` | This endpoint allows to instantiate a discount plan instance resource for a subscription | createBySubscription |
| GET | `/billing/subscriptions/{subscriptionId}/discountPlanInstances/{id}` | Return an discount plan instance by subscription | getDiscountPlanInstanceBySubscription |
| PUT | `/billing/subscriptions/{subscriptionId}/discountPlanInstances/{id}` | Update a resource by giving it's Id | updateBySubscription |
| DELETE | `/billing/subscriptions/{subscriptionId}/discountPlanInstances/{id}` | Delete a resource by giving it's Id | deleteBySubscription |
| PUT | `/billing/subscriptions/{subscriptionId}/discountPlanInstances/{id}/expiration` | Expire a discount plan Instance | expireBySubscription |

#### GET /billing/billingAccounts/{billingAccountId}/discountPlanInstances

- Résumé: Return an discount plan instance
- OperationId: getDiscountPlanInstances
- Description: Returns the discount plan instance data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `billingAccountId` (PATH, obligatoire) — integer (int64) : id of the billing Account
- Corps de requête:
  - obligatoire
  - application/json: GenericPagingAndFiltering (GenericPagingAndFiltering)
- Réponses:
  - 404: Discount plan instance not found
    - application/json: ApiException (ApiException)
  - default: the searched discount Plan

#### POST /billing/billingAccounts/{billingAccountId}/discountPlanInstances

- Résumé: This endpoint allows to instantiate a discount plan instance resource
- OperationId: create_2
- Description: Instantiate new discount plan Instance
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `billingAccountId` (PATH, obligatoire) — integer (int64) : id of the billing Account
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: the entity successfully created, and the id is returned in the response
  - 400: bad request when entity information contains an error

#### GET /billing/billingAccounts/{billingAccountId}/discountPlanInstances/{id}

- Résumé: Return an discount plan instance
- OperationId: getDiscountPlanInstance
- Description: Returns the discount plan instance data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `billingAccountId` (PATH, obligatoire) — integer (int64) : id of the billing Account
- `id` (PATH, obligatoire) — integer (int64) : id of the discount plan instance
- Réponses:
  - 404: Discount plan instance not found
    - application/json: ApiException (ApiException)
  - default: the searched discount Plan

#### PUT /billing/billingAccounts/{billingAccountId}/discountPlanInstances/{id}

- Résumé: Update a resource by giving it's Id
- OperationId: update_1
- Description: specify record id, and as body, the list of the fields to update
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `billingAccountId` (PATH, obligatoire) — integer (int64) : The billing account id
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to update
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### DELETE /billing/billingAccounts/{billingAccountId}/discountPlanInstances/{id}

- Résumé: Delete a resource by giving it's Id
- OperationId: delete_1
- Description: specify the entity name, the record id, and as body, the list of the fields to delete
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `billingAccountId` (PATH, obligatoire) — integer (int64) : The billing account id
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to delete
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### PUT /billing/billingAccounts/{billingAccountId}/discountPlanInstances/{id}/expiration

- Résumé: Expire a discount plan Instance
- OperationId: expire
- Description: specify record id, and as body, the list of the fields to update
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `billingAccountId` (PATH, obligatoire) — integer (int64) : The billing account id
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to update
- Réponses:
  - 200: resource successfully expired
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### GET /billing/subscriptions/{subscriptionId}/discountPlanInstances

- Résumé: Return discount plan instances by subscription
- OperationId: getDiscountPlanInstancesBySubscription
- Description: Returns the discount plan instances data by subscription
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionId` (PATH, obligatoire) — integer (int64) : id of the subscription
- Corps de requête:
  - obligatoire
  - application/json: GenericPagingAndFiltering (GenericPagingAndFiltering)
- Réponses:
  - 404: Discount plan instance not found
    - application/json: ApiException (ApiException)
  - default: the searched discount Plan

#### POST /billing/subscriptions/{subscriptionId}/discountPlanInstances

- Résumé: This endpoint allows to instantiate a discount plan instance resource for a subscription
- OperationId: createBySubscription
- Description: Instantiate new discount plan Instance for a subscription
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionId` (PATH, obligatoire) — integer (int64) : id of the subscription
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: the entity successfully created, and the id is returned in the response
  - 400: bad request when entity information contains an error

#### GET /billing/subscriptions/{subscriptionId}/discountPlanInstances/{id}

- Résumé: Return an discount plan instance by subscription
- OperationId: getDiscountPlanInstanceBySubscription
- Description: Returns the discount plan instance data by subscription
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionId` (PATH, obligatoire) — integer (int64) : id of the subscription
- `id` (PATH, obligatoire) — integer (int64) : id of the discount plan instance
- Réponses:
  - 404: Discount plan instance not found
    - application/json: ApiException (ApiException)
  - default: the searched discount Plan

#### PUT /billing/subscriptions/{subscriptionId}/discountPlanInstances/{id}

- Résumé: Update a resource by giving it's Id
- OperationId: updateBySubscription
- Description: specify record id, and as body, the list of the fields to update
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionId` (PATH, obligatoire) — integer (int64) : The subscription id
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to update
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### DELETE /billing/subscriptions/{subscriptionId}/discountPlanInstances/{id}

- Résumé: Delete a resource by giving it's Id
- OperationId: deleteBySubscription
- Description: specify the entity name, the record id, and as body, the list of the fields to delete
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionId` (PATH, obligatoire) — integer (int64) : The subscription id
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to delete
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### PUT /billing/subscriptions/{subscriptionId}/discountPlanInstances/{id}/expiration

- Résumé: Expire a discount plan Instance
- OperationId: expireBySubscription
- Description: specify record id, and as body, the list of the fields to update
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionId` (PATH, obligatoire) — integer (int64) : The subscription id
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to update
- Réponses:
  - 200: resource successfully expired
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

## Schémas principaux

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
