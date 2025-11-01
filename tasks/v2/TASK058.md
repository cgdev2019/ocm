# TASK058 — API V2 Products

## Contexte
Le domaine « Products » (tag OpenAPI `Products`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/ordering/products` | Return a list of products | getProducts |
| POST | `/ordering/products` | Returns the created product | createProduct |
| DELETE | `/ordering/products` | delete more than one product | deleteProducts |
| GET | `/ordering/products/{id}` | Return a product | getProduct |
| PUT | `/ordering/products/{id}` | update an existing product | updateProduct |
| PATCH | `/ordering/products/{id}` | partially update an existing product | patchProduct |
| DELETE | `/ordering/products/{id}` | delete an existing product | deleteProduct |
| GET | `/ordering/products/find/{code}` | Return a product | getProduct_1 |

#### GET /ordering/products

- Résumé: Return a list of products
- OperationId: getProducts
- Description: Returns a list of products with pagination feature or non integers will simulate API error conditions
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
  - 304: Not Modified, Returned to the client when the cached copy of a particular product is up to date with the server
  - 400: Invalid parameters supplied
    - application/json: ApiException (ApiException)
  - default: list of products
    - application/json: Products (Products)

#### POST /ordering/products

- Résumé: Returns the created product
- OperationId: createProduct
- Description: Returns the created product
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: Product (Product)
- Réponses:
  - 201: the created product
    - application/json: Product (Product)
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

#### DELETE /ordering/products

- Résumé: delete more than one product
- OperationId: deleteProducts
- Description: delete more than one product, and returns the deleted products
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (QUERY, obligatoire) — Array<integer (int64)> : ids of products to delete
- Réponses:
  - 200: the products deletion went ok
    - application/json: string
  - 404: product not found
    - application/json: ApiException (ApiException)

#### GET /ordering/products/{id}

- Résumé: Return a product
- OperationId: getProduct
- Description: Returns a single product
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the product
- Réponses:
  - 304: Not Modified, Returned to the client when the cached copy of a particular product is up to date with the server
  - 404: product not found
    - application/json: ApiException (ApiException)
  - default: the searched product
    - application/json: Product (Product)

#### PUT /ordering/products/{id}

- Résumé: update an existing product
- OperationId: updateProduct
- Description: update an existing product, and returns the updated product
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the product to update
- Corps de requête:
  - obligatoire
  - application/json: Product (Product)
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)
  - 404: product not found
    - application/json: ApiException (ApiException)
  - default: the updated product
    - application/json: Product (Product)

#### PATCH /ordering/products/{id}

- Résumé: partially update an existing product
- OperationId: patchProduct
- Description: update an existing product with a set of changes to apply to the product, and returns the updated product
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the product to update
- Corps de requête:
  - obligatoire
  - application/json: Product (Product)
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)
  - 404: product not found
    - application/json: ApiException (ApiException)
  - default: the updated product
    - application/json: Product (Product)

#### DELETE /ordering/products/{id}

- Résumé: delete an existing product
- OperationId: deleteProduct
- Description: delete an existing product, and returns the deleted product
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the product to delete
- Réponses:
  - 404: product not found
    - application/json: ApiException (ApiException)
  - default: the deleted product
    - application/json: Product (Product)

#### GET /ordering/products/find/{code}

- Résumé: Return a product
- OperationId: getProduct_1
- Description: Returns a single product
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the product
- Réponses:
  - 304: Not Modified, Returned to the client when the cached copy of a particular product is up to date with the server
  - 404: product not found
    - application/json: ApiException (ApiException)
  - default: the searched product
    - application/json: Product (Product)

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

### Products
Type: object
Propriétés:
- **links**: Array<object>
- **total**: integer (int64)
- **filters**: object
- **data**: Array<Product>
- **next**: string (uri)
- **limit**: integer (int64)
- **previous**: string (uri)
- **offset**: integer (int64)

### Product
Type: object
Propriétés:
- **imageUrl**: string
- **image64**: string
- **businessProductModel**: Resource
- **walletTemplates**: Array<Resource>
- **validFrom**: string
- **validTo**: string
- **lifeCycleStatus**: string
- **productChargeTemplates**: Array<Resource>
- **offerTemplateCategories**: Array<Resource>
- **channels**: Array<Resource>
- **longDescription**: string
- **sellers**: Array<Resource>
- **price**: number
- **invoicingCalendar**: Resource
- **code**: string
- **description**: string
- **name**: string
- **links**: Array<object>
- **id**: integer (int64)
- **disabled**: boolean

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
