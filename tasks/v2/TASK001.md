# TASK001 — API V2 AccountingArticle

## Contexte
Le domaine « AccountingArticle » (tag OpenAPI `AccountingArticle`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/articleMapping` | This endpoint allows to create an article mapping resource | createArticleMappingLine_1 |
| GET | `/articles` | This endpoint allows to find list of accounting article resource | list |
| POST | `/articles` | This endpoint allows to create an accounting article resource | createAccountingArticle |
| GET | `/articles/{accountingArticleCode}` | This endpoint allows to find an existing accounting article resource | find |
| DELETE | `/articles/{accountingArticleCode}` | This endpoint allows to delete an existing accounting article resource | delete |
| PUT | `/articles/{id}` | This endpoint allows to update an existing accounting article resource | updateAccountingArticle |
| GET | `/articles/products/{productCode}` | This endpoint allows to find accounting article resource with product and list of attributes | getAccountingArticles |

#### POST /articleMapping

- Résumé: This endpoint allows to create an article mapping resource
- OperationId: createArticleMappingLine_1
- Description: create new article mapping resource
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: ArticleMapping (ArticleMapping)
- Réponses:
  - 200: the article mapping resource successfully created, and the id is returned in the response
  - 400: bad request when article mapping information contains an error

#### GET /articles

- Résumé: This endpoint allows to find list of accounting article resource
- OperationId: list
- Description: find list of an existing accounting article
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `offset` (QUERY, optionnel) — integer (int64) : The offset of the list
  - Contraintes: défaut: 0
- `limit` (QUERY, optionnel) — integer (int64) : The limit element per page
  - Contraintes: défaut: 50
- `sort` (QUERY, optionnel) — string : The sort by field
- `orderBy` (QUERY, optionnel) — string : The ordering by field
- Corps de requête:
  - optionnel
  - application/json: object
- Réponses:
  - 200: return list of accounting article
  - 400: bad request when article information contains an error

#### POST /articles

- Résumé: This endpoint allows to create an accounting article resource
- OperationId: createAccountingArticle
- Description: create new accounting article
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: AccountingArticle (AccountingArticle)
- Réponses:
  - 200: the article successfully created, and the id is returned in the response
  - 400: bad request when article information contains an error

#### GET /articles/{accountingArticleCode}

- Résumé: This endpoint allows to find an existing accounting article resource
- OperationId: find
- Description: fine an existing accounting article
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accountingArticleCode` (PATH, obligatoire) — string : accounting article code
- Réponses:
  - 200: the article successfully retrieved
  - 400: bad request when article information contains an error

#### DELETE /articles/{accountingArticleCode}

- Résumé: This endpoint allows to delete an existing accounting article resource
- OperationId: delete
- Description: delete an existing accounting article
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accountingArticleCode` (PATH, obligatoire) — string : accounting article code
- Réponses:
  - 200: the article successfully deleted
  - 400: bad request when article is not found

#### PUT /articles/{id}

- Résumé: This endpoint allows to update an existing accounting article resource
- OperationId: updateAccountingArticle
- Description: update an existing accounting article
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of Accounting article
- Corps de requête:
  - obligatoire
  - application/json: AccountingArticle (AccountingArticle)
- Réponses:
  - 200: the article successfully updated, and the id is returned in the response
  - 400: bad request when article information contains an error

#### GET /articles/products/{productCode}

- Résumé: This endpoint allows to find accounting article resource with product and list of attributes
- OperationId: getAccountingArticles
- Description: find an existing accounting article
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `productCode` (PATH, obligatoire) — string : product code
- Corps de requête:
  - optionnel
  - application/json: object
- Réponses:
  - 200: return accounting article
  - 400: bad request when article information contains an error

## Schémas principaux

### ArticleMapping
Type: object
Propriétés:
- **mappingScript**: Resource
- **code**: string — code of article mapping
- **description**: string — description of article mapping
- **links**: Array<object>
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### AccountingArticle
Type: object
Champs obligatoires: code, description, invoiceSubCategory, taxClass
Propriétés:
- **columCriteriaEL**: string — Column criteria EL
- **ignoreAggregation**: boolean — Ignore aggregation
- **invoiceTypeEl**: string — invoice type el associated to accounting article
- **accountingCode**: Resource
- **taxClass**: Resource
- **accountingCodeEl**: string — Accounting code El
- **articleFamily**: Resource
- **analyticCode1**: string — first analytic code
- **analyticCode2**: string — second analytic code
- **analyticCode3**: string — third analytic code
- **unitPrice**: number — Unit Price
- **invoiceSubCategory**: Resource
- **invoiceType**: Resource
- **languageDescriptions**: Array<LanguageDescriptionDto> — list of language description
- **code**: string — code of accounting article
- **customFields**: CustomFieldsDto
- **description**: string — description of accounting article
- **links**: Array<object>
- **id**: integer (int64)

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CustomFieldsDto
custom field associated the contact category
Type: object
Propriétés:
- **customField**: Array<CustomFieldDto>
- **inheritedCustomField**: Array<CustomFieldDto>
- **empty**: boolean

### CustomFieldDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **fieldType**: string (Valeurs: STRING, DATE, LONG, DOUBLE, LIST, CHECKBOX_LIST, ENTITY, TEXT_AREA, CHILD_ENTITY, MULTI_VALUE, BOOLEAN, CUSTOM_TABLE_WRAPPER, URL)
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **valueDate**: string (date-time)
- **valuePeriodStartDate**: string (date-time)
- **valuePeriodEndDate**: string (date-time)
- **valuePeriodPriority**: integer (int32)
- **stringValue**: string
- **dateValue**: string (date-time)
- **longValue**: integer (int64)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **mapValue**: object
- **entityReferenceValue**: EntityReferenceDto
- **valueConverted**: object
- **indexType**: string (Valeurs: STORE_ONLY, INDEX, INDEX_NOT_ANALYZE)
- **fileValue**: string
- **formattedValue**: CustomFieldFormattedValueDto
- **urlReferenceValue**: UrlReferenceDto
- **guiPosition**: string
- **customTableCode**: string
- **dataFilter**: string
- **fields**: string
- **empty**: boolean
- **value**: Array<CustomFieldValueDto>

### CustomFieldValueDto
Type: object
Propriétés:
- **value**: object
- **empty**: boolean

### EntityReferenceDto
Type: object
Propriétés:
- **classname**: string
- **code**: string
- **id**: integer (int64)
- **empty**: boolean

### CustomFieldFormattedValueDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **singleValue**: string
- **listValue**: Array<string>
- **mapValue**: object

### UrlReferenceDto
Type: object
Propriétés:
- **url**: string
- **regexp**: string
- **label**: string
- **length**: integer (int32)
- **empty**: boolean

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
