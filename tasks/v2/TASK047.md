# TASK047 — API V2 Open Orders

## Contexte
Le domaine « Open Orders » (tag OpenAPI `Open Orders`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| PUT | `/ordering/openOrder/{code}` | update  open order | updateOpenOrder |
| POST | `/ordering/openOrder/{code}/cancel` | cancel open order | cancelOpenOrder |

#### PUT /ordering/openOrder/{code}

- Résumé: update  open order
- OperationId: updateOpenOrder
- Description: Returns the updated open order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the open order 
- Corps de requête:
  - obligatoire
  - application/json: OpenOrderDto (OpenOrderDto)
- Réponses:
  - 200: the updated open order
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

#### POST /ordering/openOrder/{code}/cancel

- Résumé: cancel open order
- OperationId: cancelOpenOrder
- Description: cancel the specified open order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the open order 
- Corps de requête:
  - obligatoire
  - application/json: OpenOrderDto (OpenOrderDto)
- Réponses:
  - 400: Invalid inputs supplied
    - application/json: ApiException (ApiException)

## Schémas principaux

### OpenOrderDto
Type: object
Propriétés:
- **endOfValidityDate**: string (date-time)
- **thresholds**: Array<ThresholdInput>
- **cancelReason**: string
- **templateName**: string
- **externalReference**: string
- **tags**: Array<string>
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
