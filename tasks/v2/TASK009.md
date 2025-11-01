# TASK009 — API V2 AuxiliaryCode

## Contexte
Le domaine « AuxiliaryCode » (tag OpenAPI `AuxiliaryCode`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/api/rest/v2/accounting/auxiliaryAccounts/{customerAccountCode}` | Get the auxiliary account information corresponding to the giver customer account | getAuxiliaryAccount |

#### GET /api/rest/v2/accounting/auxiliaryAccounts/{customerAccountCode}

- Résumé: Get the auxiliary account information corresponding to the giver customer account
- OperationId: getAuxiliaryAccount
- Description: Returns auxiliary account information corresponding to the giver customer account
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `customerAccountCode` (PATH, obligatoire) — string
- Réponses:
  - 200: Auxiliary account information are successfully evaluated
  - 404: Customer account not fount
  - 500: Auxiliary account information not correctly evaluated

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
