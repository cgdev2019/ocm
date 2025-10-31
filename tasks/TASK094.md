# TASK094 — Service RumSequence

## Contexte
Le service « RumSequence » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%RumSequence
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| PUT | `/api/rest/payment/rumSequences` | 	  Update the Provider's RUM sequence configuration.	  	   | PUT_RumSequence_update |
| POST | `/api/rest/payment/rumSequences/nextMandateNumber` | 	  Calculates and returns the next value of the mandate number.	  	   | POST_RumSequencenextMandateNumber |
| GET | `/api/rest/payment/rumSequences/version` | Get version of application | index_141 |

#### PUT /api/rest/payment/rumSequences

- Résumé: 	  Update the Provider's RUM sequence configuration.	  	  
- OperationId: PUT_RumSequence_update
- Description: Update the Provider's RUM sequence configuration.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenericSequenceDto
  - application/xml: GenericSequenceDto
- Réponses:
  - default: status of the operation
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/payment/rumSequences/nextMandateNumber

- Résumé: 	  Calculates and returns the next value of the mandate number.	  	  
- OperationId: POST_RumSequencenextMandateNumber
- Description: Calculates and returns the next value of the mandate number.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: next mandate value
    - application/json: GenericSequenceValueResponseDto
    - application/xml: GenericSequenceValueResponseDto

#### GET /api/rest/payment/rumSequences/version

- Résumé: Get version of application
- OperationId: index_141
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GenericSequenceDto
Type: object
Propriétés:
- **prefix**: string — Prefix of sequence (Contraintes: pattern: ^[\p{Upper}-]{1,16}$)
- **sequenceSize**: integer (int64) — Size of the sequence. Maximum allowable for RUM is 35
- **currentSequenceNb**: integer (int64) — Current value of the sequence

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

### GenericSequenceValueResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **sequence**: GenericSequenceDto
- **value**: string
- **seller**: string
- **paymentGateway**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
