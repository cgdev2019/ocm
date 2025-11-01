# TASK005 — API V2 AgedReceivables

## Contexte
Le domaine « AgedReceivables » (tag OpenAPI `AgedReceivables`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/api/rest/v2/standardReports/AgedReceivables` | Return aged balance | getAgedReceivables |

#### GET /api/rest/v2/standardReports/AgedReceivables

- Résumé: Return aged balance
- OperationId: getAgedReceivables
- Description: Returns aged balance
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int64)
  - Contraintes: défaut: 0
- `limit` (QUERY, optionnel) — integer (int64)
  - Contraintes: défaut: 50
- `sortOrder` (QUERY, optionnel) — string
- `sortBy` (QUERY, optionnel) — string
- `customerAccountCode` (QUERY, optionnel) — string
- `startDate` (QUERY, optionnel) — string (date-time)
- `startDueDate` (QUERY, optionnel) — string (date-time)
- `endDueDate` (QUERY, optionnel) — string (date-time)
- `customerAccountDescription` (QUERY, optionnel) — string
- `sellerDescription` (QUERY, optionnel) — string
- `sellerCode` (QUERY, optionnel) — string
- `invoiceNumber` (QUERY, optionnel) — string
- `stepInDays` (QUERY, optionnel) — integer (int32)
- `numberOfPeriods` (QUERY, optionnel) — integer (int32)
- `tradingCurrency` (QUERY, optionnel) — string
- `funcCurrency` (QUERY, optionnel) — string
- Réponses:
  - 200: aged balance list
  - 404: No data found
    - application/json: ApiException (ApiException)
  - default: list of orders
    - application/json: Orders (Orders)

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
