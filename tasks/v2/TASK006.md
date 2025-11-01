# TASK006 — API V2 AllowedParents

## Contexte
Le domaine « AllowedParents » (tag OpenAPI `AllowedParents`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/api/rest/v2/accounts/userAccounts/{userAccountCode}/allowedParents` | List user accounts allowed to be parent of the giving user account | allowedUserAccountParents |

#### GET /api/rest/v2/accounts/userAccounts/{userAccountCode}/allowedParents

- Résumé: List user accounts allowed to be parent of the giving user account
- OperationId: allowedUserAccountParents
- Description: fine allowed parents for a giving user account
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `userAccountCode` (PATH, obligatoire) — string : user Account code
- Réponses:
  - 200: the UserAccounts allowed to be parent for userAccountCode successfully retrieved
  - 404: the full list of entities not found
    - application/json: ApiException (ApiException)

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

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
