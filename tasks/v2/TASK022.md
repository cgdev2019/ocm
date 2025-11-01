# TASK022 — API V2 Customer Account

## Contexte
Le domaine « Customer Account » (tag OpenAPI `Customer Account`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/accountsManagement/customerAccounts/{customerAccountCode}/moving` | The Customer Account will be moved immediately under the provided Customer.\n" +
                    "All open wallet operation will be rerated. | changeCustomerAccountParentAccount |

#### POST /api/rest/v2/accountsManagement/customerAccounts/{customerAccountCode}/moving

- Résumé: The Customer Account will be moved immediately under the provided Customer.\n" +
                    "All open wallet operation will be rerated.
- OperationId: changeCustomerAccountParentAccount
- Description: The Customer Account will be moved immediately under the provided Customer. All open wallet operation will be rerated. No consistency check is performed, no other data is modified. Especially: counters (accumulators) set on the origin or target Customer will not be updated to reflect the move custom fields referencing entities in the origin hierarchy will not be updated Unless specifically developed to use field history, reports will use the customer at the time of execution
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountCode` (PATH, obligatoire) — string
- Corps de requête:
  - obligatoire
  - application/json: ParentInput (ParentInput)
- Réponses:
  - 204: resource successfully updated but not content exposed except the hypermedia
  - 400: bad request when input not well formed
  - 404: entity not found

## Schémas principaux

### ParentInput
Type: object
Propriétés:
- **parentId**: integer (int64) — Parent id
- **parentCode**: string — Parent code

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
