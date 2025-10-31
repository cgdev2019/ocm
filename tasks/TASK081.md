# TASK081 — Service MetricsConfiguration

## Contexte
Le service « MetricsConfiguration » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%MetricsConfiguration
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/metrics/config` |  Search metrics configuration with a given code.  |     GET_MetricsConfiguration_search |
| POST | `/api/rest/metrics/config` |  Creates a MetricConfiguration. If the MetricConfiguration code does not exists, a metrics configuration record is created  |     POST_MetricsConfiguration_create |
| PUT | `/api/rest/metrics/config` |  Update an existing MetricConfiguration. If the MetricsConfiguration code exists, a metrics configuration record is updated  |     PUT_MetricsConfiguration_update |
| DELETE | `/api/rest/metrics/config` |  Delete metrics configuration with a given code.  |     DELETE_MetricsConfiguration_delete |
| GET | `/api/rest/metrics/config/version` | Get version of application | index_128 |

#### GET /api/rest/metrics/config

- Résumé:  Search metrics configuration with a given code. 
- OperationId:     GET_MetricsConfiguration_search
- Description: Search metrics configuration with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: link GetMetricsConfigurationResponse}.
    - application/json: GetMetricsConfigurationResponse
    - application/xml: GetMetricsConfigurationResponse

#### POST /api/rest/metrics/config

- Résumé:  Creates a MetricConfiguration. If the MetricConfiguration code does not exists, a metrics configuration record is created 
- OperationId:     POST_MetricsConfiguration_create
- Description: Creates a MetricConfiguration. If the MetricConfiguration code does not exists, a metrics configuration record is created
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MetricsConfigurationDto
  - application/xml: MetricsConfigurationDto
- Réponses:
  - default: link org.meveo.api.dto.ActionStatus}.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/metrics/config

- Résumé:  Update an existing MetricConfiguration. If the MetricsConfiguration code exists, a metrics configuration record is updated 
- OperationId:     PUT_MetricsConfiguration_update
- Description: Update an existing MetricConfiguration. If the MetricsConfiguration code exists, a metrics configuration record is updated
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: MetricsConfigurationDto
  - application/xml: MetricsConfigurationDto
- Réponses:
  - default: link org.meveo.api.dto.ActionStatus}.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/metrics/config

- Résumé:  Delete metrics configuration with a given code. 
- OperationId:     DELETE_MetricsConfiguration_delete
- Description: Delete metrics configuration with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- Réponses:
  - default: link org.meveo.api.dto.ActionStatus}.
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/metrics/config/version

- Résumé: Get version of application
- OperationId: index_128
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetMetricsConfigurationResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **metricsConfigurationDto**: MetricsConfigurationDto

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

### MetricsConfigurationDto
Type: object
Champs obligatoires: code, fullPath, method, metricsType, metricsUnit
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **fullPath**: string
- **method**: string
- **metricsType**: string
- **metricsUnit**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
