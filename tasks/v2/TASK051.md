# TASK051 — API V2 Orders

## Contexte
Le domaine « Orders » (tag OpenAPI `Orders`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/api/rest/v2/ordering/orders` | Return a list of orders | getOrders |
| POST | `/api/rest/v2/ordering/orders` | Returns the created order | createOrder |
| DELETE | `/api/rest/v2/ordering/orders` | delete more than one order | deleteOrder_1 |
| GET | `/api/rest/v2/ordering/orders/{id}` | Return an order | getOrder |
| PUT | `/api/rest/v2/ordering/orders/{id}` | update an existing order | updateOrder |
| PATCH | `/api/rest/v2/ordering/orders/{id}` | partially update an existing order | patchOrder |
| DELETE | `/api/rest/v2/ordering/orders/{id}` | delete an existing order | deleteOrder |
| GET | `/api/rest/v2/ordering/orders/find/{id}` | Return an order | getOrder_1 |

#### GET /api/rest/v2/ordering/orders

- Résumé: Return a list of orders
- OperationId: getOrders
- Description: Returns a list of orders with pagination feature or non integers will simulate API error conditions
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int64)
  - Contraintes: défaut: 0
- `limit` (QUERY, optionnel) — integer (int64)
  - Contraintes: défaut: 50
- `sort` (QUERY, optionnel) — string
- `orderBy` (QUERY, optionnel) — string
- `filter` (QUERY, optionnel) — string
- Réponses:
  - 304: Not Modified, Returned to the client when the cached copy of a particular file is up to date with the server
  - 400: Invalid parameters supplied
    - application/json: ApiException (ApiException)
  - default: list of orders
    - application/json: Orders (Orders)

#### POST /api/rest/v2/ordering/orders

- Résumé: Returns the created order
- OperationId: createOrder
- Description: Returns the created order
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: Order (Order)
- Réponses:
  - 201: the created order
    - application/json: Order (Order)
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

#### DELETE /api/rest/v2/ordering/orders

- Résumé: delete more than one order
- OperationId: deleteOrder_1
- Description: delete more than one order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, obligatoire) — Array<integer (int64)> : ids of orders to delete
- Réponses:
  - 200: the order deletion went ok
    - application/json: string
  - 404: order not found
    - application/json: ApiException (ApiException)

#### GET /api/rest/v2/ordering/orders/{id}

- Résumé: Return an order
- OperationId: getOrder
- Description: Returns a single order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the order
- Réponses:
  - 304: Not Modified, Returned to the client when the cached copy of a particular resource is up to date with the server
  - 404: order not found
    - application/json: ApiException (ApiException)
  - default: the searched order
    - application/json: Order (Order)

#### PUT /api/rest/v2/ordering/orders/{id}

- Résumé: update an existing order
- OperationId: updateOrder
- Description: update an existing order, and returns the updated order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the order to update
- Corps de requête:
  - obligatoire
  - application/json: Order (Order)
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)
  - 404: order not found
    - application/json: ApiException (ApiException)
  - default: the updated order
    - application/json: Order (Order)

#### PATCH /api/rest/v2/ordering/orders/{id}

- Résumé: partially update an existing order
- OperationId: patchOrder
- Description: update an existing order with a set of changes to apply to the order, and returns the updated order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the order to update
- Corps de requête:
  - obligatoire
  - application/json: Order (Order)
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)
  - 404: order not found
    - application/json: ApiException (ApiException)
  - default: the updated order
    - application/json: Order (Order)

#### DELETE /api/rest/v2/ordering/orders/{id}

- Résumé: delete an existing order
- OperationId: deleteOrder
- Description: delete an existing order, and returns the deleted order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the order to delete
- Réponses:
  - 404: order not found
    - application/json: ApiException (ApiException)
  - default: the deleted order
    - application/json: Order (Order)

#### GET /api/rest/v2/ordering/orders/find/{id}

- Résumé: Return an order
- OperationId: getOrder_1
- Description: Returns a single order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the order
- Réponses:
  - 304: Not Modified, Returned to the client when the cached copy of a particular resource is up to date with the server
  - 404: order not found
    - application/json: ApiException (ApiException)
  - default: the searched order
    - application/json: Order (Order)

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

### Orders
Type: object
Propriétés:
- **links**: Array<object>
- **total**: integer (int64)
- **filters**: object
- **data**: Array<Order>
- **next**: string (uri)
- **limit**: integer (int64)
- **previous**: string (uri)
- **offset**: integer (int64)

### Order
Type: object
Propriétés:
- **requestedProcessingStartDate**: string
- **deliveryInstructions**: string
- **expectedCompletionDate**: string
- **requestedCompletionDate**: string
- **statusMessage**: string
- **orderItems**: Array<OrderItem>
- **billingCycle**: Resource
- **category**: string
- **paymentMethod**: PaymentMethod
- **orderDate**: string
- **code**: string
- **status**: string — Order status lifecycle (Valeurs: IN_CREATION, ACKNOWLEDGED, IN_PROGRESS, CANCELLED, COMPLETED, REJECTED, PENDING, HELD, FAILED, WAITING, DEFERRED, PARTIAL)
- **description**: string
- **priority**: integer (int64)
- **links**: Array<object>
- **id**: integer (int64)

### OrderItem
Type: object
Propriétés:
- **itemId**: string
- **productInstance**: Array<ProductInstance>
- **subscription**: Subscription
- **userAccount**: Resource
- **status**: string — Order status lifecycle (Valeurs: IN_CREATION, ACKNOWLEDGED, IN_PROGRESS, CANCELLED, COMPLETED, REJECTED, PENDING, HELD, FAILED, WAITING, DEFERRED, PARTIAL)
- **action**: string — Action requested on a product or product offer (Valeurs: ADD, MODIFY, DELETE)
- **order**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### ProductInstance
Type: object
Propriétés:
- **productPrice**: number (double)
- **product**: Resource
- **quantity**: integer (int64)
- **seller**: Resource
- **code**: string
- **links**: Array<object>
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Subscription
Type: object
Propriétés:
- **serviceInstances**: Array<ServiceInstance>
- **endAgreementDate**: string
- **offerTemplate**: Resource
- **subscriptionDate**: string
- **userAccount**: Resource
- **seller**: Resource
- **code**: string
- **links**: Array<object>
- **id**: integer (int64)

### ServiceInstance
Type: object
Propriétés:
- **serviceTemplate**: Resource
- **quantity**: integer (int64)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### PaymentMethod
Type: object
Propriétés:
- **type**: string — Payment Method types (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
