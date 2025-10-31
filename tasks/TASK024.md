# TASK024 — Service TerminationReason

## Contexte
Le service « TerminationReason » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%TerminationReason
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/terminationReason` |  Find a termination reason with a given code.   |     GET_TerminationReason_search |
| POST | `/api/rest/terminationReason` |  Create a new termination reason.   |     POST_TerminationReason_create |
| PUT | `/api/rest/terminationReason` |  Update an existing termination reason.   |     PUT_TerminationReason_update |
| DELETE | `/api/rest/terminationReason/{terminationReasonCode}` |  Remove an existing termination reason with a given code.   |     DELETE_TerminationReason_{terminationReasonCode} |
| POST | `/api/rest/terminationReason/createOrUpdate` |  Create new or update an existing termination reason with a given code.   |     POST_TerminationReason_createOrUpdate |
| GET | `/api/rest/terminationReason/list` |  List of termination reasons.   |     GET_TerminationReason_list |
| GET | `/api/rest/terminationReason/version` | Get version of application | index_22 |

#### GET /api/rest/terminationReason

- Résumé:  Find a termination reason with a given code.  
- OperationId:     GET_TerminationReason_search
- Description: Find a termination reason with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `terminationReasonCode` (QUERY, optionnel) — string
- Réponses:
  - default: found termination reason
    - application/json: GetTerminationReasonResponse
    - application/xml: GetTerminationReasonResponse

#### POST /api/rest/terminationReason

- Résumé:  Create a new termination reason.  
- OperationId:     POST_TerminationReason_create
- Description: Create a new termination reason.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TerminationReasonDto
  - application/xml: TerminationReasonDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/terminationReason

- Résumé:  Update an existing termination reason.  
- OperationId:     PUT_TerminationReason_update
- Description: Update an existing termination reason.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TerminationReasonDto
  - application/xml: TerminationReasonDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### DELETE /api/rest/terminationReason/{terminationReasonCode}

- Résumé:  Remove an existing termination reason with a given code.  
- OperationId:     DELETE_TerminationReason_{terminationReasonCode}
- Description: Remove an existing termination reason with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `terminationReasonCode` (PATH, obligatoire) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/terminationReason/createOrUpdate

- Résumé:  Create new or update an existing termination reason with a given code.  
- OperationId:     POST_TerminationReason_createOrUpdate
- Description: Create new or update an existing termination reason with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: TerminationReasonDto
  - application/xml: TerminationReasonDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/terminationReason/list

- Résumé:  List of termination reasons.  
- OperationId:     GET_TerminationReason_list
- Description: List of termination reasons.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of termination reasons
    - application/json: GetTerminationReasonResponse
    - application/xml: GetTerminationReasonResponse

#### GET /api/rest/terminationReason/version

- Résumé: Get version of application
- OperationId: index_22
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetTerminationReasonResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **terminationReason**: Array<TerminationReasonDto>

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

### TerminationReasonDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **applyAgreement**: boolean
- **invoiceAgreementImmediately**: boolean
- **applyReimbursment**: boolean
- **applyTerminationCharges**: boolean
- **overrideProrata**: string (Valeurs: NO_OVERRIDE, PRORATA, NO_PRORATA)
- **reimburseOneshots**: boolean
- **languageDescriptions**: Array<LanguageDescriptionDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
