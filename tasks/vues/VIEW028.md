# Devises – Page par défaut

- **Groupe fonctionnel** : Administration
- **Module** : Devises
- **Ressource** : currencies
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Currencies — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/currency',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/currency',
  nestedEntities
}).
- GET_ONE : getListV2({
  url: 'v2/generic/currency/',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Devises.
- Libellé EN : Currencies.