# Paramètres de période comptable – Page par défaut

- **Groupe fonctionnel** : Administration
- **Module** : Paramètres de période comptable
- **Ressource** : settings-accounting-period
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : finance-settings (priorité 3)
- **Icône** : Timelapse

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Settings Accounting Period — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/accountingPeriod',
  nestedEntities
}).
- CREATE : getUpdateProvider({
  url: 'v2/accountingPeriodManagement/accountingPeriods',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/accountingPeriodManagement/accountingPeriods/${data.fiscalYear}`;
  },
  method: 'PUT'
}).
- GET_ONE : getListV2({
  url: 'v2/generic/accountingPeriod/',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Paramètres de période comptable.
- Libellé EN : Accounting period settings.