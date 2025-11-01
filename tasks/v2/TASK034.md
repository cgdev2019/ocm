# TASK034 — API V2 Generic

## Contexte
Le domaine « Generic » (tag OpenAPI `Generic`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/accountsManagement/customerAccounts/{customerAccountCode}/moving` | The Customer Account will be moved immediately under the provided Customer.\n" +
                    "All open wallet operation will be rerated. | changeCustomerAccountParentAccount |
| POST | `/accountsManagement/subscriptions/{subscriptionCode}/transfer` | This endpoint allows to transfer a subscription to another account | transferSubscription |
| GET | `/generic/{entityName}` | Generic single endpoint to retrieve paginated records of an entity | getAllEntities |
| POST | `/generic/{entityName}` | Create a resource by giving it's name and Id | create_17 |
| GET | `/generic/{entityName}/{id}` | Generic single endpoint to retrieve resources by ID | getEntity |
| POST | `/generic/{entityName}/{id}` | Generic single endpoint to retrieve resources by ID | get_2 |
| PUT | `/generic/{entityName}/{id}` | Update a resource by giving it's name and Id | update_16 |
| DELETE | `/generic/{entityName}/{id}` | Delete a resource by giving it's name and Id | delete_14 |
| POST | `/generic/all/{entityName}` | Generic single endpoint to retrieve paginated records of an entity | getAll |
| GET | `/generic/entities` | This endpoint is used to retrieve the full list of queryable entities | getFullListEntities |
| GET | `/generic/entities/{entityName}` | This endpoint is used to retrieve the fields and corresponding types of an entity | getRelatedFieldsAndTypesOfEntity |
| POST | `/generic/export/{entityName}/{fileFormat}` | Generic single endpoint to export paginated records of an entity | export_1 |
| GET | `/generic/version` | Get versions information about OpenCell components | getVersions |
| GET | `/version` | Get versions information about OpenCell components | getVersions_1 |

#### POST /accountsManagement/customerAccounts/{customerAccountCode}/moving

- Résumé: The Customer Account will be moved immediately under the provided Customer.\n" +
                    "All open wallet operation will be rerated.
- OperationId: changeCustomerAccountParentAccount
- Description: The Customer Account will be moved immediately under the provided Customer. All open wallet operation will be rerated. No consistency check is performed, no other data is modified. Especially: counters (accumulators) set on the origin or target Customer will not be updated to reflect the move custom fields referencing entities in the origin hierarchy will not be updated Unless specifically developed to use field history, reports will use the customer at the time of execution
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountCode` (PATH, obligatoire) — string
- Corps de requête:
  - obligatoire
  - application/json: ParentInput (ParentInput)
- Réponses:
  - 204: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: entity not found

#### POST /accountsManagement/subscriptions/{subscriptionCode}/transfer

- Résumé: This endpoint allows to transfer a subscription to another account
- OperationId: transferSubscription
- Description: API to transfer the subscription from a consumer to an other consumer (UA)
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `subscriptionCode` (PATH, obligatoire) — string : The subscription code
- `openTransactionsAction` (QUERY, optionnel) — string : Open transactions action 
  - Valeurs autorisées: NONE, FAIL, MOVE, MOVE_AND_RERATE
  - Contraintes: défaut: "NONE"
- Corps de requête:
  - obligatoire
  - application/json: ConsumerInput (ConsumerInput)
- Réponses:
  - 200: Success (in case of moved WO/RT) Returns the ids of moved WO/RT
  - 204: Success, no return data
  - 404: Either Customer Account or Customer not found
  - 409: Cannot move subscription

#### GET /generic/{entityName}

- Résumé: Generic single endpoint to retrieve paginated records of an entity
- OperationId: getAllEntities
- Description: Use this method to get the list of entities. You need to specify the entity name, and as body, the configuration of the research." + " also you can define the offset and the limit, you can order by a field and define the sort type" + " see PagingAndFiltering doc for more details.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `extractList` (QUERY, optionnel) — boolean : extractList flag to return or not nested List
- `entityName` (PATH, obligatoire) — string : The entity name
- Corps de requête:
  - obligatoire
  - application/json: GenericPagingAndFiltering (GenericPagingAndFiltering)
- Réponses:
  - 200: paginated results successfully retrieved with hypermedia links
  - 400: bad request when entityName not well formed or entity unrecognized
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### POST /generic/{entityName}

- Résumé: Create a resource by giving it's name and Id
- OperationId: create_17
- Description: specify the entity name, the record id, and as body, the list of the fields to create
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `entityName` (PATH, obligatoire) — string : the entity name
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed

#### GET /generic/{entityName}/{id}

- Résumé: Generic single endpoint to retrieve resources by ID
- OperationId: getEntity
- Description: Use this method to get an entity. You need to specify the entity name, the record id, and as body, the list of the wanted fields
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `extractList` (QUERY, optionnel) — boolean : extractList flag to return or not nested List
- `entityName` (PATH, obligatoire) — string : the entity name
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the wanted record
- Corps de requête:
  - obligatoire
  - application/json: GenericPagingAndFiltering (GenericPagingAndFiltering)
- Réponses:
  - 200: paginated results successfully retrieved with hypermedia links
  - 400: bad request when entityName not well formed or entity unrecognized
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### POST /generic/{entityName}/{id}

- Résumé: Generic single endpoint to retrieve resources by ID
- OperationId: get_2
- Description: specify the entity name, the record id, and as body, the list of the wanted fields
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `extractList` (QUERY, optionnel) — boolean : extractList flag to return or not nested List
- `entityName` (PATH, obligatoire) — string : the entity name
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the wanted record
- Corps de requête:
  - obligatoire
  - application/json: GenericPagingAndFiltering (GenericPagingAndFiltering)
- Réponses:
  - 200: paginated results successfully retrieved with hypermedia links
  - 400: bad request when entityName not well formed or entity unrecognized
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### PUT /generic/{entityName}/{id}

- Résumé: Update a resource by giving it's name and Id
- OperationId: update_16
- Description: specify the entity name, the record id, and as body, the list of the fields to update
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `entityName` (PATH, obligatoire) — string : the entity name
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to update
- Corps de requête:
  - obligatoire
  - application/json: string
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### DELETE /generic/{entityName}/{id}

- Résumé: Delete a resource by giving it's name and Id
- OperationId: delete_14
- Description: specify the entity name, the record id, and as body, the list of the fields to delete
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `entityName` (PATH, obligatoire) — string : the entity name
- `id` (PATH, obligatoire) — integer (int64) : The id here is the database primary key of the record to delete
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: baseEntityObject not found
    - application/json: ApiException (ApiException)

#### POST /generic/all/{entityName}

- Résumé: Generic single endpoint to retrieve paginated records of an entity
- OperationId: getAll
- Description: specify the entity name, and as body, the configuration of the research. also you can define the offset and the limit, you can order by a field and define the sort type see PagingAndFiltering doc for more details.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `extractList` (QUERY, optionnel) — boolean : extractList flag to return or not nested List
- `entityName` (PATH, obligatoire) — string : the entity name
- Corps de requête:
  - obligatoire
  - application/json: GenericPagingAndFiltering (GenericPagingAndFiltering)
- Réponses:
  - 200: paginated results successfully retrieved with hypermedia links
  - 400: bad request when entityName not well formed or entity unrecognized

#### GET /generic/entities

- Résumé: This endpoint is used to retrieve the full list of queryable entities
- OperationId: getFullListEntities
- Description: This endpoint retrieves all possible queryable entities in the database.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: paginated results successfully retrieved with hypermedia links
  - 404: the full list of entities not found
    - application/json: ApiException (ApiException)

#### GET /generic/entities/{entityName}

- Résumé: This endpoint is used to retrieve the fields and corresponding types of an entity
- OperationId: getRelatedFieldsAndTypesOfEntity
- Description: You need to specify an entity name. Given the entity name, this endpoint returns the list of its fields and corresponding types. The entity name should not be written in the plural form. For example, *customer*.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `entityName` (PATH, obligatoire) — string : The entity name
- Réponses:
  - 200: paginated results successfully retrieved with hypermedia links
  - 404: the full list of entities not found
    - application/json: ApiException (ApiException)

#### POST /generic/export/{entityName}/{fileFormat}

- Résumé: Generic single endpoint to export paginated records of an entity
- OperationId: export_1
- Description: specify the entity name, and as body, the configuration of the research. also you can define the offset and the limit, you can order by a field and define the sort type see PagingAndFiltering doc for more details.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `entityName` (PATH, obligatoire) — string : the entity name
- `fileFormat` (PATH, obligatoire) — string : file format
- `locale` (QUERY, optionnel) — string : Locale
- Corps de requête:
  - obligatoire
  - application/json: GenericPagingAndFiltering (GenericPagingAndFiltering)
- Réponses:
  - 200: paginated results successfully exported
  - 400: bad request when entityName not well formed or entity unrecognized

#### GET /generic/version

- Résumé: Get versions information about OpenCell components
- OperationId: getVersions
- Description: return a list of OpenCell's components version information
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia

#### GET /version

- Résumé: Get versions information about OpenCell components
- OperationId: getVersions_1
- Description: return a list of OpenCell's components version information
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: resource successfully updated but not content exposed except the hypermedia

## Schémas principaux

### ParentInput
Type: object
Propriétés:
- **parentId**: integer (int64) — Parent id
- **parentCode**: string — Parent code

### ConsumerInput
Type: object
Propriétés:
- **consumerCode**: string — Consumer code
- **consumerId**: integer (int64) — Consumer id

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
