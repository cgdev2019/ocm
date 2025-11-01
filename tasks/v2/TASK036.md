# TASK036 — API V2 Import

## Contexte
Le domaine « Import » (tag OpenAPI `Import`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

## Objectifs
- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).
- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.
- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.
- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).

## Notes
- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.
- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/catalog/priceManagement/pricePlanMatrixLines/import` | Import grid data in price versions | importPricePlanMatrixLines |
| POST | `/catalog/priceManagement/pricePlanMatrixVersions/import` | Import price plan versions | importPricePlanMatrixVersions |

#### POST /catalog/priceManagement/pricePlanMatrixLines/import

- Résumé: Import grid data in price versions
- OperationId: importPricePlanMatrixLines
- Description: Import grid data in price versions
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: PricePlanMLinesDTO (PricePlanMLinesDTO)
- Réponses:
  - 200: The price plan line successfully loaded
  - 400: Internal error
  - 404: PricePlanMatrixColumn with code={columnCode} user1 does not exists.
  - 409: A line having similar values already exists!

#### POST /catalog/priceManagement/pricePlanMatrixVersions/import

- Résumé: Import price plan versions
- OperationId: importPricePlanMatrixVersions
- Description: This API will import the zip file containing the list of price plan versions
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: ImportPricePlanVersionsDto (ImportPricePlanVersionsDto)
- Réponses:
  - 200: The price plan versions successfully loaded
  - 400: The following parameters are required or contain invalid values: fileToImport
  - 500: Error occured while importing price plan versions

## Schémas principaux

### PricePlanMLinesDTO
Type: object
Propriétés:
- **pricePlanMatrixVersion**: integer (int32) — price plan matrix version
- **pricePlanMatrixCode**: string — price plan matrix code
- **data**: Array<string (byte)> — data
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### ImportPricePlanVersionsDto
Type: object
Propriétés:
- **fileToImport**: string
- **pricePlanVersions**: Array<ImportPricePlanVersionsItem>
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### ImportPricePlanVersionsItem
Type: object
Propriétés:
- **chargeCode**: string
- **startDate**: string (date-time)
- **endDate**: string (date-time)
- **status**: string (Valeurs: DRAFT, PUBLISHED, CLOSED)
- **fileName**: string

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
