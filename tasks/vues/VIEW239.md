# Gestionnaire de périodes comptables – List

- **Groupe fonctionnel** : Finance
- **Module** : Gestionnaire de périodes comptables
- **Ressource** : accounting-period-manager
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : accounting-period (priorité 1/1)
- **Icône** : Today

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `accountingPeriodYear`
- Colonne 2 : source `accountingPeriodStatus` ; type status
- Colonne 3 : source `subAccountingPeriodType`
- Colonne 4 : source `subAccountingPeriodProgress`
- Colonne 5 : source `ongoingSubAccountingPeriods`
- Colonne 6 : type actions

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - resources.{{FINANCE_PATH_ACCOUNTING_PERIOD_MANAGER}}.messages.generateAccountingPeriod (action directe).

### Pagination et tri
- Pagination par 200 éléments.
- Choix de pagination : [200].

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/accountingPeriod',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/accountingPeriod',
  nestedEntities
}).
- GENERATE_NEXT_ACCOUNTING_PERIOD : url `v2/accountingPeriodManagement/accountingPeriods/generateNextAP`, options {"method":"POST"}.
- HISTORY : getListV2({
  url: 'v2/generic/all/AuditLog',
  nestedEntities,
  genericFields
}).
- CLOSE : implémentation spécifique.
- REOPEN : implémentation spécifique.
- OPENORCLOSE_ACCOUNTING_PERIOD : getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/accountingPeriodManagement/accountingPeriods/${data.year}/${data.status}`;
  },
  method: 'PUT'
}).

## Localisation et libellés
- Libellé FR : Gestionnaire de périodes comptables.
- Libellé EN : Accounting period manager.