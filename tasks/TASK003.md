# TASK003 — Service Configuration

## Contexte
Le service « Configuration » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Configuration
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/configurations` |  set configuration property  |     POST_Configuration_create |
| GET | `/api/rest/configurations/properties` |  Converts system properties into json string.   |     GET_Configuration_properties |
| POST | `/api/rest/configurations/properties` |  set configuration property   |     POST_Configuration_properties |
| GET | `/api/rest/configurations/version` | Get version of application | index_2 |

#### POST /api/rest/configurations

- Résumé:  set configuration property 
- OperationId:     POST_Configuration_create
- Description: set configuration property
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ConfigurationDto
  - application/xml: ConfigurationDto
- Réponses:
  - default: ActionStatus response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/configurations/properties

- Résumé:  Converts system properties into json string.  
- OperationId:     GET_Configuration_properties
- Description: Converts system properties into json string.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: system properties
    - application/json: GetConfigurationResponse
    - application/xml: GetConfigurationResponse

#### POST /api/rest/configurations/properties

- Résumé:  set configuration property  
- OperationId:     POST_Configuration_properties
- Description: set configuration property
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: PropertiesDto
  - application/xml: PropertiesDto
- Réponses:
  - default: ActionStatus response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/configurations/version

- Résumé: Get version of application
- OperationId: index_2
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### ConfigurationDto
Type: object
Propriétés:
- **property**: string
- **value**: string

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

### GetConfigurationResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **properties**: Array<PropertyDto>

### PropertyDto
Type: object
Propriétés:
- **key**: string
- **value**: string

### PropertiesDto
Type: object
Propriétés:
- **properties**: Array<PropertyDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
