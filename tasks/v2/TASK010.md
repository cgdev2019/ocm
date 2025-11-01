# TASK010 — API V2 BillingRule

## Contexte
Le domaine « BillingRule » (tag OpenAPI `BillingRule`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/cpq/contracts/{contractCode}/billingRule` | Create a billingRule linked to an existing contract | createBillingRule |
| PUT | `/cpq/contracts/{contractCode}/billingRule/{id}` | Update a billingRule linked to an existing contract | updateBillingRule |
| DELETE | `/cpq/contracts/{contractCode}/billingRule/{id}` | Delete a billingRule | deleteBillingRule |

#### POST /cpq/contracts/{contractCode}/billingRule

- Résumé: Create a billingRule linked to an existing contract
- OperationId: createBillingRule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `contractCode` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: BillingRuleDto (BillingRuleDto)
- Réponses:
  - 200: the billing rule is successfully added
  - 404: the contract code does not exist
  - 412: missing required paramter for billingRule.The required params are : contractCode, criteriaEl, InvoicedBACodeEL

#### PUT /cpq/contracts/{contractCode}/billingRule/{id}

- Résumé: Update a billingRule linked to an existing contract
- OperationId: updateBillingRule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `contractCode` (PATH, obligatoire) — string
- `id` (PATH, obligatoire) — integer (int64)
- Corps de requête:
  - optionnel
  - application/json: BillingRuleDto (BillingRuleDto)
- Réponses:
  - 200: the billing rule is successfully added
  - 404: the contract code does not exist
  - 412: missing required paramter for billingRule.The required params are : contractCode, criteriaEl, InvoicedBACodeEL

#### DELETE /cpq/contracts/{contractCode}/billingRule/{id}

- Résumé: Delete a billingRule
- OperationId: deleteBillingRule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `contractCode` (PATH, obligatoire) — string
- `id` (PATH, obligatoire) — integer (int64)
- Réponses:
  - 200: the billing rule is successfully added
  - 404: the contract code does not exist
  - 412: missing required paramter for billingRule.The required params are : contractCode, criteriaEl, InvoicedBACodeEL

## Schémas principaux

### BillingRuleDto
Type: object
Propriétés:
- **invoicedBACodeEL**: string — Expression to provide the code of a billing account that will be invoiced this rated transaction.
- **criteriaEL**: string — Expression to tell OC if this rule should apply to the tested rated transaction
- **priority**: integer (int32)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
