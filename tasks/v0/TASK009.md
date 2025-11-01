# TASK009 — Service GenericCode

## Contexte
Le service « GenericCode » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%GenericCode
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/genericCode` |  find   |     GET_GenericCode_search |
| POST | `/api/rest/genericCode` |   create   |     POST_GenericCode_create |
| PUT | `/api/rest/genericCode` |  update   |     PUT_GenericCode_update |
| POST | `/api/rest/genericCode/generateCode` |  getGenericCode   |     POST_GenericCode_generateCode |
| POST | `/api/rest/genericCode/sequence` |  createSequence   |     POST_GenericCode_sequence_ |
| GET | `/api/rest/genericCode/version` | Get version of application | index_8 |

#### GET /api/rest/genericCode

- Résumé:  find  
- OperationId:     GET_GenericCode_search
- Description: find
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `entityClass` (QUERY, optionnel) — string
- Réponses:
  - default: GetGenericCodeResponseDto response
    - application/json: GetGenericCodeResponseDto
    - application/xml: GetGenericCodeResponseDto

#### POST /api/rest/genericCode

- Résumé:   create  
- OperationId:     POST_GenericCode_create
- Description: create
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenericCodeDto
  - application/xml: GenericCodeDto
- Réponses:
  - default: ActionStatus response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/genericCode

- Résumé:  update  
- OperationId:     PUT_GenericCode_update
- Description: update
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenericCodeDto
  - application/xml: GenericCodeDto
- Réponses:
  - default: ActionStatus response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/genericCode/generateCode

- Résumé:  getGenericCode  
- OperationId:     POST_GenericCode_generateCode
- Description: getGenericCode
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: GenericCodeDto
  - application/xml: GenericCodeDto
- Réponses:
  - default: GenericCodeResponseDto response
    - application/json: GenericCodeResponseDto
    - application/xml: GenericCodeResponseDto

#### POST /api/rest/genericCode/sequence

- Résumé:  createSequence  
- OperationId:     POST_GenericCode_sequence_
- Description: createSequence
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: SequenceDto
  - application/xml: SequenceDto
- Réponses:
  - default: ActionStatus response
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/genericCode/version

- Résumé: Get version of application
- OperationId: index_8
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetGenericCodeResponseDto
Type: object
Propriétés:
- **genericCodeDto**: GenericCodeDto

### GenericCodeDto
Type: object
Propriétés:
- **formatEL**: string
- **entityClass**: string
- **prefixOverride**: string
- **sequence**: SequenceDto

### SequenceDto
Type: object
Propriétés:
- **prefixEL**: string
- **invoiceSequenceCode**: string
- **sequenceSize**: integer (int32)
- **currentInvoiceNb**: integer (int64)
- **sequencePattern**: string
- **sequenceType**: string (Valeurs: RUM, CUSTOMER_NO, SEQUENCE, NUMERIC, ALPHA_UP, UUID, REGEXP)

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

### GenericCodeResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **generatedCode**: string
- **sequenceType**: string
- **pattern**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
