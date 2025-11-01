# TASK044 — API V2 Mediation Settings

## Contexte
Le domaine « Mediation Settings » (tag OpenAPI `Mediation Settings`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/mediationSetting` | Create new Mediation Setting | create_18 |
| PUT | `/mediationSetting/{mediationRuleId}` | Update new Mediation Setting | update_17 |
| POST | `/mediationSetting/edrVersioningRule` | Create new Edr Version rule | createEdrVersionRule |
| PUT | `/mediationSetting/edrVersioningRule/{edrVersionRuleId}` | Update new Edr Version rule | updateEdrVersionRule |
| DELETE | `/mediationSetting/edrVersioningRule/{edrVersionRuleId}` | Remove new Edr Version rule | deleteEdrVersioningRule |
| POST | `/mediationSetting/edrVersioningRule/swapPriority` | Update new Edr Version rule | swapPriority |

#### POST /mediationSetting

- Résumé: Create new Mediation Setting
- OperationId: create_18
- Description: create new mediation setting to enabling or disabling edr versioning
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MediationSetting (MediationSetting)
- Réponses:
  - 200: new mediation setting is created
  - 400: the setting of mediation already exist
  - 404: missing paramters
    - application/json: ApiException (ApiException)

#### PUT /mediationSetting/{mediationRuleId}

- Résumé: Update new Mediation Setting
- OperationId: update_17
- Description: update an existing mediation setting to enabling or disabling edr versioning
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `mediationRuleId` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - optionnel
  - application/json: MediationSetting (MediationSetting)
- Réponses:
  - 200: An existing mediation setting is updated
  - 404: missing paramters
    - application/json: ApiException (ApiException)

#### POST /mediationSetting/edrVersioningRule

- Résumé: Create new Edr Version rule
- OperationId: createEdrVersionRule
- Description: create new Edr Version rule
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: EdrVersioningRule (EdrVersioningRule)
- Réponses:
  - 200: new Edr Version rule is created
  - 404: missing paramters
    - application/json: ApiException (ApiException)

#### PUT /mediationSetting/edrVersioningRule/{edrVersionRuleId}

- Résumé: Update new Edr Version rule
- OperationId: updateEdrVersionRule
- Description: upate an existing Edr Version rule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `edrVersionRuleId` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - optionnel
  - application/json: EdrVersioningRule (EdrVersioningRule)
- Réponses:
  - 200: Edr Version rule is updated
  - 404: missing paramters
    - application/json: ApiException (ApiException)

#### DELETE /mediationSetting/edrVersioningRule/{edrVersionRuleId}

- Résumé: Remove new Edr Version rule
- OperationId: deleteEdrVersioningRule
- Description: remove an existing Edr Version rule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `edrVersionRuleId` (PATH, obligatoire) — integer (int64)
- Réponses:
  - 200: Edr Version rule is removed
  - 400: Edr Version doesn't exist
    - application/json: object

#### POST /mediationSetting/edrVersioningRule/swapPriority

- Résumé: Update new Edr Version rule
- OperationId: swapPriority
- Description: upate an existing Edr Version rule
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: EdrVersioningRuleSwapping (EdrVersioningRuleSwapping)
- Réponses:
  - 200: Edr Version rule is updated
  - 404: missing paramters
    - application/json: ApiException (ApiException)

## Schémas principaux

### MediationSetting
Type: object
Propriétés:
- **enableEdrVersioning**: boolean — enable edr versioning
- **rules**: Array<EdrVersioningRule> — list of rules for edr versioning
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### EdrVersioningRule
Type: object
Propriétés:
- **keyEL**: string — This expression will return string that will be stored as the EDR eventKey
- **isNewVersionEL**: string — This expression will tell us if EDR is a new version of the EDR.
- **criteriaEL**: string — Defines if this rule is valid to for this EDR.
- **mediationSetting**: Resource
- **priority**: integer (int32) — Defines versioning rules evaluation order
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Resource
Type: object
Propriétés:
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

### EdrVersioningRuleSwapping
Type: object
Champs obligatoires: rule1, rule2
Propriétés:
- **rule1**: Resource
- **rule2**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
