# TASK008 — API V2 articleMappingLine

## Contexte
Le domaine « articleMappingLine » (tag OpenAPI `articleMappingLine`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/articleMappingLines` | This endpoint allows to create an article mapping line resource | createArticleMappingLine |
| GET | `/articleMappingLines/{id}` | This endpoint allows to find an existing article mapping line resource | findById |
| PUT | `/articleMappingLines/{id}` | This endpoint allows to updating an existing article mapping line resource | updateArticleMappingLine |
| DELETE | `/articleMappingLines/{id}` | This endpoint allows to delete an existing article mapping line resource | deleteById |
| GET | `/articleMappingLines/find/{code}` | This endpoint allows to find an existing article mapping line resource | find_1 |

#### POST /articleMappingLines

- Résumé: This endpoint allows to create an article mapping line resource
- OperationId: createArticleMappingLine
- Description: create new article mapping line resource
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: ArticleMappingLine (ArticleMappingLine)
- Réponses:
  - 200: the article mapping line resource successfully created, and the id is returned in the response
  - 400: bad request when article mapping line information contains an error

#### GET /articleMappingLines/{id}

- Résumé: This endpoint allows to find an existing article mapping line resource
- OperationId: findById
- Description: find an existing article mapping line resource
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the article mapping line
- Réponses:
  - 200: the article mapping line resource retrieved, and the object is returned in the response
  - 400: bad request when article mapping line information doesn't exist

#### PUT /articleMappingLines/{id}

- Résumé: This endpoint allows to updating an existing article mapping line resource
- OperationId: updateArticleMappingLine
- Description: update an existing article mapping line resource
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the article mapping line
- Corps de requête:
  - obligatoire
  - application/json: ArticleMappingLine (ArticleMappingLine)
- Réponses:
  - 200: the article mapping line resource successfully updated, and the object is returned in the response
  - 400: bad request when article mapping line information contains an error

#### DELETE /articleMappingLines/{id}

- Résumé: This endpoint allows to delete an existing article mapping line resource
- OperationId: deleteById
- Description: delete an existing article mapping line resource
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the article mapping line
- Réponses:
  - 200: the article mapping line resource deleted, and the object is returned in the response
  - 400: bad request when article mapping line information doesn't exist

#### GET /articleMappingLines/find/{code}

- Résumé: This endpoint allows to find an existing article mapping line resource
- OperationId: find_1
- Description: find an existing article mapping line resource
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the article mapping line
- Réponses:
  - 200: the article mapping line resource retrieved, and the object is returned in the response
  - 400: bad request when article mapping line information doesn't exist

## Schémas principaux

### ArticleMappingLine
Type: object
Champs obligatoires: accountingArticle
Propriétés:
- **charge**: Resource
- **articleMapping**: Resource
- **attributesMapping**: Array<AttributeMapping> — list of attribute mapping
- **attributeOperator**: string — Applied operator for AttributMapping (Valeurs: AND, OR)
- **mappingKeyEL**: string — mapping expression language of article mapping line
- **accountingArticle**: Resource
- **product**: Resource
- **offer**: Resource
- **parameter1**: string — first parameter of article mapping line
- **parameter2**: string — second parameter of article mapping line
- **parameter3**: string — third parameter of article mapping line
- **description**: string — article mapping line description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### AttributeMapping
list of attribute mapping
Type: object
Propriétés:
- **operator**: string — Rule operator (Valeurs: GREATER_THAN, LESS_THAN, EQUAL, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, NOT_EQUAL, EXISTS, CONTAINS, NOT_CONTAINS)
- **attributeValue**: string
- **attribute**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
