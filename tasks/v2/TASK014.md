# TASK014 — API V2 CollectionPlan

## Contexte
Le domaine « CollectionPlan » (tag OpenAPI `CollectionPlan`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/dunning/collectionPlan/availableDunningPolicies` | List of available dunning policies | availableDunningPolicies |
| POST | `/api/rest/v2/dunning/collectionPlan/checkMassSwitch` | Check eligible collection for switch | checkMassSwitch |
| POST | `/api/rest/v2/dunning/collectionPlan/massSwitch` | Mass switch collection plan | massSwitchCollectionPlan |
| POST | `/api/rest/v2/dunning/collectionPlan/switch/{collectionPlanId}` | Switch collection plan | switchCollectionPlan |

#### POST /api/rest/v2/dunning/collectionPlan/availableDunningPolicies

- Résumé: List of available dunning policies
- OperationId: availableDunningPolicies
- Description: List of available dunning policies
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: AvailablePoliciesInput (AvailablePoliciesInput)
- Réponses:
  - 200: List successfully returned
  - 404: Entity does not exits

#### POST /api/rest/v2/dunning/collectionPlan/checkMassSwitch

- Résumé: Check eligible collection for switch
- OperationId: checkMassSwitch
- Description: Check eligible collection for switch
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: DunningMassSwitchInput (DunningMassSwitchInput)
- Réponses:
  - 200: Check successfully passed
  - 404: Entity does not exits

#### POST /api/rest/v2/dunning/collectionPlan/massSwitch

- Résumé: Mass switch collection plan
- OperationId: massSwitchCollectionPlan
- Description: Mass switch collection plan
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: MassSwitchDunningCollectionPlan (MassSwitchDunningCollectionPlan)
- Réponses:
  - 200: Mass switch success
  - 404: Entity does not exist

#### POST /api/rest/v2/dunning/collectionPlan/switch/{collectionPlanId}

- Résumé: Switch collection plan
- OperationId: switchCollectionPlan
- Description: Switch collection plan
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `collectionPlanId` (PATH, obligatoire) — integer (int64) : Collection plan id
- Corps de requête:
  - obligatoire
  - application/json: SwitchDunningCollectionPlan (SwitchDunningCollectionPlan)
- Réponses:
  - 200: Collection plan successfully switched
  - 404: Entity does not exist

## Schémas principaux

### AvailablePoliciesInput
Type: object
Propriétés:
- **collectionPlan**: Resource
- **billingAccount**: Resource

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DunningMassSwitchInput
Type: object
Propriétés:
- **collectionPlans**: Array<Resource> — Collection plan list to check
- **policy**: Resource

### MassSwitchDunningCollectionPlan
Type: object
Propriétés:
- **collectionPlanList**: Array<Resource> — Indicate dunning collection plan
- **policyLevel**: Resource
- **dunningPolicy**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SwitchDunningCollectionPlan
Type: object
Propriétés:
- **policyLevel**: Resource
- **dunningPolicy**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
