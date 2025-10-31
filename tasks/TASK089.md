# TASK089 — Service DDRequestLotOp

## Contexte
Le service « DDRequestLotOp » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%DDRequestLotOp
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/payment/ddrequestLotOp` | 	  Create a ddrequestLotOp by dto	   |     POST_DDRequestLotOp_create |
| GET | `/api/rest/payment/ddrequestLotOp/list` |  List ddrequestLotOps by fromDueDate,toDueDate,status  |     GET_DDRequestLotOp_list |
| GET | `/api/rest/payment/ddrequestLotOp/version` | Get version of application | index_137 |

#### POST /api/rest/payment/ddrequestLotOp

- Résumé: 	  Create a ddrequestLotOp by dto	  
- OperationId:     POST_DDRequestLotOp_create
- Description: Create a ddrequestLotOp by dto
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: DDRequestLotOpDto
  - application/xml: DDRequestLotOpDto
- Réponses:
  - default: Action status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/payment/ddrequestLotOp/list

- Résumé:  List ddrequestLotOps by fromDueDate,toDueDate,status 
- OperationId:     GET_DDRequestLotOp_list
- Description: List ddrequestLotOps by fromDueDate,toDueDate,status
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `fromDueDate` (QUERY, optionnel) — string (date-time)
- `toDueDate` (QUERY, optionnel) — string (date-time)
- `status` (QUERY, optionnel) — string
  - Valeurs autorisées: WAIT, PROCESSED, ERROR
- Réponses:
  - default: DDRequestLotOps response
    - application/json: DDRequestLotOpsResponseDto
    - application/xml: DDRequestLotOpsResponseDto

#### GET /api/rest/payment/ddrequestLotOp/version

- Résumé: Get version of application
- OperationId: index_137
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### DDRequestLotOpDto
Type: object
Champs obligatoires: fromDueDate, toDueDate
Propriétés:
- **fromDueDate**: string (date-time)
- **toDueDate**: string (date-time)
- **filterCode**: string
- **ddrequestOp**: string (Valeurs: CREATE, PAYMENT, FILE)
- **status**: string (Valeurs: WAIT, PROCESSED, ERROR)
- **errorCause**: string
- **ddRequestBuilderCode**: string
- **dueDateRageScriptCode**: string
- **recurrent**: boolean
- **paymentOrRefundEnum**: string (Valeurs: PAYMENT, REFUND)
- **sellerCode**: string
- **generatePaymentLines**: boolean
- **paymentStatus**: string (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)

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

### DDRequestLotOpsResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **ddrequestLotOps**: Array<DDRequestLotOpDto>

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
