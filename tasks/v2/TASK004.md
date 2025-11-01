# TASK004 — API V2 AccountOperation

## Contexte
Le domaine « AccountOperation » (tag OpenAPI `AccountOperation`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/accountReceivable/accountOperation/assignOperation/{id}` | Assign an account operation to a customer | assignAccountOperation |

#### POST /api/rest/v2/accountReceivable/accountOperation/assignOperation/{id}

- Résumé: Assign an account operation to a customer
- OperationId: assignAccountOperation
- Description: Assign an account operation to a customer
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Account operation id
- Corps de requête:
  - obligatoire
  - application/json: CustomerAccountInput (CustomerAccountInput)
- Réponses:
  - 200: Account operation is successfully assigned
  - 400: Action is failed
  - 404: Entity does not exist
  - 412: Missing parameters

## Schémas principaux

### CustomerAccountInput
Type: object
Propriétés:
- **customerAccount**: CustomerAccount

### CustomerAccount
Customer account
Type: object
Propriétés:
- **code**: string — Customer account code
- **id**: integer (int64) — Customer account id

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
