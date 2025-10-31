# TASK088 — Service CreditCategory

## Contexte
Le service « CreditCategory » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%CreditCategory
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/payment/creditCategory` |  Get a credit category payment with a credit category code  | GET_CreditCategory_search |
| POST | `/api/rest/payment/creditCategory` |  Create a new credit category   | POST_CreditCategory_create |
| PUT | `/api/rest/payment/creditCategory` |  Update a credit category payment   | PUT_CreditCategory_update |
| DELETE | `/api/rest/payment/creditCategory/{creditCategoryCode}` |  Delete a credit category with his given code   | DELETE_CreditCategory_{creditCategoryCode} |
| POST | `/api/rest/payment/creditCategory/createOrUpdate` |  Create or update a credit category payment   | POST_CreditCategory_createOrUpdate |
| GET | `/api/rest/payment/creditCategory/list` |  Retrieve the list of credit category paiement   | GET_CreditCategory_list |
| GET | `/api/rest/payment/creditCategory/listGetAll` | 	  List creditCategories matching a given criteria	 	   | GET_CreditCategory_listGetAll |
| GET | `/api/rest/payment/creditCategory/version` | Get version of application | index_136 |

#### GET /api/rest/payment/creditCategory

- Résumé:  Get a credit category payment with a credit category code 
- OperationId: GET_CreditCategory_search
- Description: Get a credit category payment with a credit category code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `creditCategoryCode` (QUERY, optionnel) — string
- Réponses:
  - default: Credit Category Response data
    - application/json: CreditCategoryResponseDto
    - application/xml: CreditCategoryResponseDto

#### POST /api/rest/payment/creditCategory

- Résumé:  Create a new credit category  
- OperationId: POST_CreditCategory_create
- Description: Create a new credit category
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CreditCategoryDto
  - application/xml: CreditCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/payment/creditCategory

- Résumé:  Update a credit category payment  
- OperationId: PUT_CreditCategory_update
- Description: Update a credit category payment
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CreditCategoryDto
  - application/xml: CreditCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/payment/creditCategory/{creditCategoryCode}

- Résumé:  Delete a credit category with his given code  
- OperationId: DELETE_CreditCategory_{creditCategoryCode}
- Description: Delete a credit category with his given code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `creditCategoryCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/creditCategory/createOrUpdate

- Résumé:  Create or update a credit category payment  
- OperationId: POST_CreditCategory_createOrUpdate
- Description: Create or update a credit category payment
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CreditCategoryDto
  - application/xml: CreditCategoryDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/creditCategory/list

- Résumé:  Retrieve the list of credit category paiement  
- OperationId: GET_CreditCategory_list
- Description: Retrieve the list of credit category paiement
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of Credit Categories
    - application/json: CreditCategoriesResponseDto
    - application/xml: CreditCategoriesResponseDto

#### GET /api/rest/payment/creditCategory/listGetAll

- Résumé: 	  List creditCategories matching a given criteria	 	  
- OperationId: GET_CreditCategory_listGetAll
- Description: List creditCategories matching a given criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: List of creditCategories
    - application/json: CreditCategoriesResponseDto
    - application/xml: CreditCategoriesResponseDto

#### GET /api/rest/payment/creditCategory/version

- Résumé: Get version of application
- OperationId: index_136
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### CreditCategoryResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **creditCategory**: CreditCategoryDto

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

### CreditCategoryDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **languageDescriptions**: Array<LanguageDescriptionDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CreditCategoriesResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **creditCategories**: Array<CreditCategoryDto>

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
