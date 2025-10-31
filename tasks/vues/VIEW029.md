# Gestion des devises – Page par défaut

- **Groupe fonctionnel** : Administration
- **Module** : Gestion des devises
- **Ressource** : currency-settings
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : application-settings (priorité n/a)
- **Icône** : EuroSymbol

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Settings Currency Edit — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/provider',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/provider',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'currency/addFunctionalCurrency',
  method: 'POST'
}).
- UPDATE : getCreateProvider({
  url: 'currency/addFunctionalCurrency',
  method: 'POST'
}).
- GET_ONE : getListV2({
  url: 'v2/generic/provider/',
  nestedEntities
}).
- UPLOAD : url `currency/importExchangeRate`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Gestion des devises.
- Libellé EN : Currency settings.