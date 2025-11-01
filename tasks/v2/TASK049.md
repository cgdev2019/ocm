# TASK049 — API V2 Open Orders Templates

## Contexte
Le domaine « Open Orders Templates » (tag OpenAPI `Open Orders Templates`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/ordering/openOrderTemplates` | create open order template | createOpenOrderTemplate |
| PUT | `/api/rest/v2/ordering/openOrderTemplates/{code}` | update  open order template | updateOpenOrderTemplate |
| PUT | `/api/rest/v2/ordering/openOrderTemplates/{code}/disable` | disable open order template | disableOpenOrderTemplate |
| PUT | `/api/rest/v2/ordering/openOrderTemplates/{code}/status/{status}` | change status open order template | changeStatusOpenOrderTemplate |

#### POST /api/rest/v2/ordering/openOrderTemplates

- Résumé: create open order template
- OperationId: createOpenOrderTemplate
- Description: create open order template
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: OpenOrderTemplateInput (OpenOrderTemplateInput)
- Réponses:
  - 200: the created open order template
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

#### PUT /api/rest/v2/ordering/openOrderTemplates/{code}

- Résumé: update  open order template
- OperationId: updateOpenOrderTemplate
- Description: Returns the updated open order template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the open order template 
- Corps de requête:
  - obligatoire
  - application/json: OpenOrderTemplateInput (OpenOrderTemplateInput)
- Réponses:
  - 200: the updated open order template
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

#### PUT /api/rest/v2/ordering/openOrderTemplates/{code}/disable

- Résumé: disable open order template
- OperationId: disableOpenOrderTemplate
- Description: disable the specified open order template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the open order template 
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

#### PUT /api/rest/v2/ordering/openOrderTemplates/{code}/status/{status}

- Résumé: change status open order template
- OperationId: changeStatusOpenOrderTemplate
- Description: change status the specified open order template
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the open order template 
- `status` (PATH, obligatoire) — string : status of the open order template 
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

## Schémas principaux

### OpenOrderTemplateInput
Type: object
Propriétés:
- **openOrderType**: string (Valeurs: ARTICLES, PRODUCTS)
- **thresholds**: Array<ThresholdInput>
- **articles**: Array<string>
- **templateName**: string — The Template Name
- **products**: Array<string>
- **tags**: Array<string>
- **status**: string (Valeurs: DRAFT, ARCHIVED, ACTIVE)
- **description**: string
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### ThresholdInput
Type: object
Champs obligatoires: percentage, sequence
Propriétés:
- **externalRecipient**: string
- **percentage**: integer (int32)
- **recipients**: Array<string>
- **sequence**: integer (int32)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

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
