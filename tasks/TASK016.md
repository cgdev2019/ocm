# TASK016 — Service MassImport

## Contexte
Le service « MassImport » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%MassImport
- S’appuyer sur `DESC.txt` pour prioriser l’expérience utilisateur et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/massImport/uploadAndImport` |  Upload file and detect its type.   |     POST_UploadMass |

#### POST /api/rest/massImport/uploadAndImport

- Résumé:  Upload file and detect its type.  
- OperationId:     POST_UploadMass
- Description: Upload file and detect its type.
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - multipart/form-data: FileImportForm
- Réponses:
  - default: action status
    - application/json: ImportFileTypeDto
    - application/xml: ImportFileTypeDto

## Schémas principaux

### FileImportForm
Type: object
Propriétés:
- **data**: Array<string (byte)>
- **filename**: string
- **files**: string

### ImportFileTypeDto
Type: object
Champs obligatoires: fileName, fileType
Propriétés:
- **fileName**: string — Name of the uploaded file
- **fileType**: string — Type of the uploaded file (Valeurs: CUSTOMER, CUSTOMER_ACCOUNT, PAYMENT_METHOD, BILLING_ACCOUNT, USER_ACCOUNT, SUBSCRIPTION, SERVICE_INSTANCE, ATTRIBUTE_INSTANCE, ACCESS_POINT, COUNTER, UNKNOWN)

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
