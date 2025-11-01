# TASK053 — API V2 PolicyRule

## Contexte
Le domaine « PolicyRule » (tag OpenAPI `PolicyRule`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/dunning/dunningPolicy/addRules/{dunningPolicyId}` | Add policy rule | addPolicyRule |
| DELETE | `/api/rest/v2/dunning/dunningPolicy/policyRule/{policyRuleID}` | Remove policy rule | removePolicyRule |

#### POST /api/rest/v2/dunning/dunningPolicy/addRules/{dunningPolicyId}

- Résumé: Add policy rule
- OperationId: addPolicyRule
- Description: Add policy rule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `dunningPolicyId` (PATH, obligatoire) — integer (int64) : Dunning policy id
- Corps de requête:
  - obligatoire
  - application/json: DunningPolicyRules (DunningPolicyRules)
- Réponses:
  - 200: Policy rule successfully added
  - 400: Either first policy rule ruleJoint is not null or first policy rule line ruleJoint is not null

#### DELETE /api/rest/v2/dunning/dunningPolicy/policyRule/{policyRuleID}

- Résumé: Remove policy rule
- OperationId: removePolicyRule
- Description: Remove policy rule
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `policyRuleID` (PATH, obligatoire) — integer (int64) : Policy rule id
- Réponses:
  - 200: Policy rule successfully removed
  - 404: Policy rule does not exits

## Schémas principaux

### DunningPolicyRules
Type: object
Propriétés:
- **policyRules**: Array<PolicyRule> — List of policy rules
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### PolicyRule
List of policy rules
Type: object
Propriétés:
- **ruleLines**: Array<DunningPolicyRuleLine> — List of policy rule lines
- **ruleJoint**: string — Policy rule's rule join (Valeurs: AND, OR)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DunningPolicyRuleLine
List of policy rule lines
Type: object
Propriétés:
- **ruleLineJoint**: string — Rule line joint (Valeurs: AND, OR)
- **policyConditionTarget**: string — Policy condition target (Valeurs: creditCategory, customerCategory, isCompany, paymentMethod)
- **policyConditionOperator**: string — Policy condition operation (Valeurs: EQUALS, NOT_EQUALS, HIGHER_THAN, HIGHER_THAN_OR_EQUAL, LOWER_THAN, LOWER_THAN_OR_EQUAL)
- **policyConditionTargetValue**: string — Policy condition target value
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
