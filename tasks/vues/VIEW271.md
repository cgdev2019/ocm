# Autres – Page par défaut

- **Groupe fonctionnel** : Finance
- **Module** : Autres
- **Ressource** : other-settings
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Icône** : AccountTree

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Other Settings — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/FinanceSettings',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/FinanceSettings',
  nestedEntities
}).
- CREATE : getUpdateProvider({
  url: 'v2/accountReceivable/financeSettings',
  method: 'POST'
}).
- UPDATE : getUpdateProvider({
  url: ({
    params
  }) => {
    const {
      data
    } = params;
    return `v2/accountReceivable/financeSettings/${data.id}`;
  },
  method: 'PUT'
}).
- GET_ONE : getListV2({
  url: 'v2/generic/FinanceSettings/',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Autres.
- Libellé EN : Others.