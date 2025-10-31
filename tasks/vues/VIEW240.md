# Gestionnaire de périodes comptables – Show

- **Groupe fonctionnel** : Finance
- **Module** : Gestionnaire de périodes comptables
- **Ressource** : accounting-period-manager
- **Clé / route** : show
- **Type d'écran** : Fiche de consultation
- **Menu** : accounting-period (priorité 1/1)
- **Icône** : Today

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Settings Calendars — aucun paramètre spécifique confirmé dans la configuration

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