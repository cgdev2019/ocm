# TASK040 — API V2 InvoiceValidationRules

## Contexte
Le domaine « InvoiceValidationRules » (tag OpenAPI `InvoiceValidationRules`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/billing/invoicevalidationrules` | Create invoice validation rule | create_4 |
| PUT | `/billing/invoicevalidationrules/{id}` | Update invoice validation rule | update_3 |
| DELETE | `/billing/invoicevalidationrules/{id}` | Delete invoice validation rule | delete_2 |

#### POST /billing/invoicevalidationrules

- Résumé: Create invoice validation rule
- OperationId: create_4
- Description: Create invoice validation rule
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: InvoiceValidationRuleDto (InvoiceValidationRuleDto)
- Réponses:
  - 201: invoice validation rule successfully created
  - 304: error when creating invoice validation rule

#### PUT /billing/invoicevalidationrules/{id}

- Résumé: Update invoice validation rule
- OperationId: update_3
- Description: Create invoice validation rule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the InvoiceValidation Rule
- Corps de requête:
  - obligatoire
  - application/json: InvoiceValidationRuleDto (InvoiceValidationRuleDto)
- Réponses:
  - 201: invoice validation rule successfully updated
  - 304: error when updating invoice validation rule

#### DELETE /billing/invoicevalidationrules/{id}

- Résumé: Delete invoice validation rule
- OperationId: delete_2
- Description: Delete invoice validation rule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of the InvoiceValidation Rule to delete
- Réponses:
  - 201: invoice validation rule successfully deleted
  - 304: error when deleting invoice validation rule

## Schémas principaux

### InvoiceValidationRuleDto
Type: object
Propriétés:
- **ruleValues**: object — Rule values
- **failStatus**: string — Fail Status (Valeurs: REJECTED, SUSPECT, VALID)
- **validationEL**: string — Validation EL
- **validationScript**: string — Validation Script
- **validFrom**: string (date-time) — Valid From
- **validTo**: string (date-time) — Valid To
- **invoiceType**: string — InvoiceType
- **code**: string — Code
- **description**: string — Description Of Invoice Validation Rule
- **priority**: integer (int32) — Priority
- **type**: string — Type
- **links**: Array<object>
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
