# TASK018 — Service PdfInvoice

## Contexte
Le service « PdfInvoice » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%PdfInvoice
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/PdfInvoice` |  Find a PDF invoice with a given invoice number and a customer account code.   |     GET_PdfInvoice_search |
| GET | `/api/rest/PdfInvoice/version` | Get version of application | index_16 |

#### GET /api/rest/PdfInvoice

- Résumé:  Find a PDF invoice with a given invoice number and a customer account code.  
- OperationId:     GET_PdfInvoice_search
- Description: Find a PDF invoice with a given invoice number and a customer account code.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `invoiceNumber` (QUERY, optionnel) — string
- `customerAccountCode` (QUERY, optionnel) — string
- Réponses:
  - default: invoice's pdf
    - application/json: PdfInvoiceResponse
    - application/xml: PdfInvoiceResponse

#### GET /api/rest/PdfInvoice/version

- Résumé: Get version of application
- OperationId: index_16
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### PdfInvoiceResponse
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **pdfInvoice**: Array<string (byte)>

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
