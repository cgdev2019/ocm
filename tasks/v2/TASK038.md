# TASK038 — API V2 InvoiceLines

## Contexte
Le domaine « InvoiceLines » (tag OpenAPI `InvoiceLines`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| GET | `/billing/invoiceLines/{id}/taxes` | Return invoice line tax details | getTaxDetails |

#### GET /billing/invoiceLines/{id}/taxes

- Résumé: Return invoice line tax details
- OperationId: getTaxDetails
- Description: Return invoice line tax details
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : Invoice line id
- Réponses:
  - 200: Tax details successfully returned
  - 404: Invoice line not found

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
