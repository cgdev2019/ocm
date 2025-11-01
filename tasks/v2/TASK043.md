# TASK043 — API V2 Mediation

## Contexte
Le domaine « Mediation » (tag OpenAPI `Mediation`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

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
| POST | `/api/rest/v2/mediation/cdrs/chargeCdrList` | Accepts a list of CDR lines, parses them, creates EDRs and rates them. . CDR is same format use in mediation job | chargeCdrList |
| POST | `/api/rest/v2/mediation/cdrs/registerCdrList` | Accepts a list of CDR lines, parses them and creates EDRs. CDR accepts the same format as in mediation job | registerCdrList |
| POST | `/api/rest/v2/mediation/cdrs/reserveCdrList` | Accepts a list of CDR lines, parses them, creates EDRs and reserves. CDR accepts the same format as in mediation job | reserveCdrList |

#### POST /api/rest/v2/mediation/cdrs/chargeCdrList

- Résumé: Accepts a list of CDR lines, parses them, creates EDRs and rates them. . CDR is same format use in mediation job
- OperationId: chargeCdrList
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: ChargeCdrListInput (ChargeCdrListInput)
- Réponses:
  - 200: A list of rated wallet operations, preserving the order of incomming CDRs
  - 400: bad request on register CDR list

#### POST /api/rest/v2/mediation/cdrs/registerCdrList

- Résumé: Accepts a list of CDR lines, parses them and creates EDRs. CDR accepts the same format as in mediation job
- OperationId: registerCdrList
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: CdrListInput (CdrListInput)
- Réponses:
  - 200: A list of EDRs, preserving the order of incomming CDRs
  - 400: bad request on register CDR list

#### POST /api/rest/v2/mediation/cdrs/reserveCdrList

- Résumé: Accepts a list of CDR lines, parses them, creates EDRs and reserves. CDR accepts the same format as in mediation job
- OperationId: reserveCdrList
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: CdrListInput (CdrListInput)
- Réponses:
  - 200: A list of EDRs and reservations, preserving the order of incomming CDRs
  - 400: bad request on reserve CDR list

## Schémas principaux

### ChargeCdrListInput
Type: object
Propriétés:
- **isRateTriggeredEdr**: boolean — Rate all TriggeredEDR created by the rating of the charge
- **maxDepth**: integer (int32) — The max deep used in triggered EDR
- **isReturnCounters**: boolean — If true, the API will return the list of counter updates produced, even if they are virtual
- **isGenerateRTs**: boolean — If true, the API will automatically generate RTs
- **isReturnWalletOperations**: boolean — If true, the API will return the list of IDs of all wallet operations produced. Applies to non-virtual mode only.
- **isReturnWalletOperationDetails**: boolean — If true, the API will return the list of details of all wallet operations produced, even if they are virtual
- **isVirtual**: boolean — Rating must happen in a transaction no change performed during rating is persisted if isVirtual=true
- **cdrs**: Array<string> — List of CDRs to process
- **isReturnEDRs**: boolean — If true, the API will return the list of IDs of all EDRs produced. Applies to non-virtual mode only.
- **mode**: string — How the CDR list is processed : STOP_ON_FIRST_FAIL, PROCESS_ALL, ROLLBACK_ON_ERROR (Valeurs: STOP_ON_FIRST_FAIL, PROCESS_ALL, ROLLBACK_ON_ERROR)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### CdrListInput
Type: object
Propriétés:
- **cdrs**: Array<string> — List of CDRs to process
- **isReturnEDRs**: boolean — If true, the API will return the list of IDs of all EDRs produced. Applies to non-virtual mode only.
- **mode**: string — How the CDR list is processed : STOP_ON_FIRST_FAIL, PROCESS_ALL, ROLLBACK_ON_ERROR (Valeurs: STOP_ON_FIRST_FAIL, PROCESS_ALL, ROLLBACK_ON_ERROR)
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
