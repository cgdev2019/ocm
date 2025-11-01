# TASK002 — API V2 AccountingCodeMapping

## Contexte
Le domaine « AccountingCodeMapping » (tag OpenAPI `AccountingCodeMapping`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| PUT | `/articles/{accountingArticleCode}/accountingCodeMapping` | This endpoint update accounting code mapping | updateAccountingCodeMapping |
| POST | `/articles/accountingCodeMapping` | This endpoint create accounting code mapping | createAccountingCodeMapping |

#### PUT /articles/{accountingArticleCode}/accountingCodeMapping

- Résumé: This endpoint update accounting code mapping
- OperationId: updateAccountingCodeMapping
- Description: Update accounting code mapping
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `accountingArticleCode` (PATH, obligatoire) — string : accounting article code
- Corps de requête:
  - optionnel
  - application/json: AccountingCodeMappingInput (AccountingCodeMappingInput)
- Réponses:
  - 200: Accounting code mapping successfully updated, and the id is returned in the response
  - 404: Entity not found

#### POST /articles/accountingCodeMapping

- Résumé: This endpoint create accounting code mapping
- OperationId: createAccountingCodeMapping
- Description: Create accounting code mapping
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: AccountingCodeMappingInput (AccountingCodeMappingInput)
- Réponses:
  - 200: Accounting code mapping successfully created, and the id is returned in the response
  - 404: Entity not found

## Schémas principaux

### AccountingCodeMappingInput
Type: object
Propriétés:
- **accountingArticleCode**: string — Accounting article code
- **accountingCodeMappings**: Array<AccountingCodeMapping> — Accounting code mapping list
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### AccountingCodeMapping
Accounting code mapping list
Type: object
Propriétés:
- **billingCountryCode**: string — Billing account trading country code
- **billingCurrencyCode**: string — Billing account trading currency
- **sellerCountryCode**: string — Seller trading country code
- **accountingArticleCode**: string — Accounting article code
- **criteriaElValue**: string — Criteria El Value
- **accountingCode**: string — Accounting code
- **sellerCode**: string — Seller code
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
