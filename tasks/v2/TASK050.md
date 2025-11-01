# TASK050 — API V2 Order-items

## Contexte
Le domaine « Order-items » (tag OpenAPI `Order-items`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/ordering/order-items` | Return a list of order-items | getOrderItems |
| POST | `/ordering/order-items` | Returns the created order-item | createOrderItem |
| DELETE | `/ordering/order-items` | delete more than one order-item | deleteOrderItem_1 |
| GET | `/ordering/order-items/{id}` | Return an order-Item | getOrderItem |
| PUT | `/ordering/order-items/{id}` | update an existing order-item | updateOrderItem |
| PATCH | `/ordering/order-items/{id}` | partially update an existing order-item | patchOrderItem |
| DELETE | `/ordering/order-items/{id}` | delete an existing order-item | deleteOrderItem |
| GET | `/ordering/order-items/find/{code}` | Return an order-Item | getOrderItem_1 |

#### GET /ordering/order-items

- Résumé: Return a list of order-items
- OperationId: getOrderItems
- Description: Returns a list of order-items with pagination feature or non integers will simulate API error conditions
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
  - default: list of order-items
    - application/json: OrderItems (OrderItems)

#### POST /ordering/order-items

- Résumé: Returns the created order-item
- OperationId: createOrderItem
- Description: Returns the created order-item
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: OrderItem (OrderItem)
- Réponses:
  - 201: the created order-item
    - application/json: OrderItem (OrderItem)
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

#### DELETE /ordering/order-items

- Résumé: delete more than one order-item
- OperationId: deleteOrderItem_1
- Description: delete more than one order-item
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, obligatoire) — Array<integer (int64)> : ids of order-items to delete
- Réponses:
  - 200: the order-items deletion went ok
    - application/json: string
  - 404: order-item not found
    - application/json: ApiException (ApiException)

#### GET /ordering/order-items/{id}

- Résumé: Return an order-Item
- OperationId: getOrderItem
- Description: Returns a single order-Item
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the order-Item
- Réponses:
  - 304: Not Modified, Returned to the client when the cached copy of a particular resource is up to date with the server
  - 404: order-Item not found
    - application/json: ApiException (ApiException)
  - default: the searched order-Item
    - application/json: OrderItem (OrderItem)

#### PUT /ordering/order-items/{id}

- Résumé: update an existing order-item
- OperationId: updateOrderItem
- Description: update an existing order-item, and returns the updated order-item
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the order-item to update
- Corps de requête:
  - obligatoire
  - application/json: OrderItem (OrderItem)
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)
  - 404: order-item not found
    - application/json: ApiException (ApiException)
  - default: the updated order-item
    - application/json: OrderItem (OrderItem)

#### PATCH /ordering/order-items/{id}

- Résumé: partially update an existing order-item
- OperationId: patchOrderItem
- Description: update an existing order-item with a set of changes to apply to the order-item, and returns the updated order-item
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the order-item to update
- Corps de requête:
  - obligatoire
  - application/json: OrderItem (OrderItem)
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)
  - 404: order-item not found
    - application/json: ApiException (ApiException)
  - default: the updated order-item
    - application/json: OrderItem (OrderItem)

#### DELETE /ordering/order-items/{id}

- Résumé: delete an existing order-item
- OperationId: deleteOrderItem
- Description: delete an existing order-item, and returns the deleted order-item
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the order-item to delete
- Réponses:
  - 404: order-item not found
    - application/json: ApiException (ApiException)
  - default: the deleted order-item
    - application/json: OrderItem (OrderItem)

#### GET /ordering/order-items/find/{code}

- Résumé: Return an order-Item
- OperationId: getOrderItem_1
- Description: Returns a single order-Item
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the order-Item
- Réponses:
  - 304: Not Modified, Returned to the client when the cached copy of a particular resource is up to date with the server
  - 404: order-Item not found
    - application/json: ApiException (ApiException)
  - default: the searched order-Item
    - application/json: OrderItem (OrderItem)

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

### OrderItems
Type: object
Propriétés:
- **links**: Array<object>
- **total**: integer (int64)
- **filters**: object
- **data**: Array<OrderItem>
- **next**: string (uri)
- **limit**: integer (int64)
- **previous**: string (uri)
- **offset**: integer (int64)

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

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
