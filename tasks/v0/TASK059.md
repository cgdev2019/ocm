# TASK059 — Service Communication

## Contexte
Le service « Communication » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Communication
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/Communication/inbound` |  Receives inbound communication from external source given the rest url above |     POST_Communication_inbound |
| GET | `/api/rest/Communication/version` | Get version of application | index_99 |

#### POST /api/rest/Communication/inbound

- Résumé:  Receives inbound communication from external source given the rest url above
- OperationId:     POST_Communication_inbound
- Description: Receives inbound communication from external source given the rest url above. MEVEO handles it by throwing an inbount communication event with the communicationRequestDto.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: CommunicationRequestDto
  - application/xml: CommunicationRequestDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/Communication/version

- Résumé: Get version of application
- OperationId: index_99
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### CommunicationRequestDto
Type: object
Champs obligatoires: macAddress, meveoInstanceCode, subject
Propriétés:
- **meveoInstanceCode**: string
- **macAddress**: string
- **subject**: string
- **body**: string
- **additionnalInfo1**: string
- **additionnalInfo2**: string
- **additionnalInfo3**: string
- **additionnalInfo4**: string
- **vaild**: boolean

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

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
