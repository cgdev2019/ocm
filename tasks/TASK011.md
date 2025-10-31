# TASK011 — Service InvoiceSequence

## Contexte
Le service « InvoiceSequence » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%InvoiceSequence
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/invoiceSequence` |  Search invoiceSequence with a given code.   |     GET_InvoiceSequence_search |
| POST | `/api/rest/invoiceSequence` |  Create invoiceSequence.   |     POST_InvoiceSequence_create |
| PUT | `/api/rest/invoiceSequence` |  Update invoiceSequence.   |     PUT_InvoiceSequence_update |
| POST | `/api/rest/invoiceSequence/createOrUpdate` |  Create new or update an existing invoiceSequence with a given code.   |     POST_InvoiceSequence_createOrUpdate |
| GET | `/api/rest/invoiceSequence/list` |  List of invoiceSequence.   |     GET_InvoiceSequence_list |
| GET | `/api/rest/invoiceSequence/version` | Get version of application | index_10 |

#### GET /api/rest/invoiceSequence

- Résumé:  Search invoiceSequence with a given code.  
- OperationId:     GET_InvoiceSequence_search
- Description: Search invoiceSequence with a given code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceSequenceCode` (QUERY, optionnel) — string
- Réponses:
  - default: invoice sequence
    - application/json: GetInvoiceSequenceResponse
    - application/xml: GetInvoiceSequenceResponse

#### POST /api/rest/invoiceSequence

- Résumé:  Create invoiceSequence.  
- OperationId:     POST_InvoiceSequence_create
- Description: Create invoiceSequence.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceSequenceDto
  - application/xml: InvoiceSequenceDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### PUT /api/rest/invoiceSequence

- Résumé:  Update invoiceSequence.  
- OperationId:     PUT_InvoiceSequence_update
- Description: Update invoiceSequence.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceSequenceDto
  - application/xml: InvoiceSequenceDto
- Réponses:
  - default: action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### POST /api/rest/invoiceSequence/createOrUpdate

- Résumé:  Create new or update an existing invoiceSequence with a given code.  
- OperationId:     POST_InvoiceSequence_createOrUpdate
- Description: Create new or update an existing invoiceSequence with a given code.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceSequenceDto
  - application/xml: InvoiceSequenceDto
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/invoiceSequence/list

- Résumé:  List of invoiceSequence.  
- OperationId:     GET_InvoiceSequence_list
- Description: List of invoiceSequence.
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of invoiceSequence
    - application/json: GetInvoiceSequencesResponse
    - application/xml: GetInvoiceSequencesResponse

#### GET /api/rest/invoiceSequence/version

- Résumé: Get version of application
- OperationId: index_10
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetInvoiceSequenceResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoiceSequenceDto**: InvoiceSequenceDto

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

### InvoiceSequenceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **sequenceSize**: integer (int32)
- **currentInvoiceNb**: integer (int64)
- **sequencePattern**: string
- **sequenceType**: string (Valeurs: RUM, CUSTOMER_NO, SEQUENCE, NUMERIC, ALPHA_UP, UUID, REGEXP)

### GetInvoiceSequencesResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **invoiceSequencesDto**: InvoiceSequencesDto

### InvoiceSequencesDto
Type: object
Propriétés:
- **invoiceSequences**: Array<InvoiceSequenceDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
