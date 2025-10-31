# Contacts – PATH CONTACTS CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Contacts
- **Ressource** : contacts
- **Clé / route** : PATH_CONTACTS_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create Contacts — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/contact',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/contact',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/contact/',
  responseContainer: 'data',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'contact',
  method: 'POST',
  responseContainerId
}).
- UPDATE : getUpdateProvider({
  url: 'contact',
  method: 'PUT'
}).
- DELETE : url `contact/:code`.

## Localisation et libellés
- Libellé FR : Contacts.
- Libellé EN : Contacts.