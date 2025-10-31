# Pays – Page par défaut

- **Groupe fonctionnel** : Administration
- **Module** : Pays
- **Ressource** : countries
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : application-settings/international (priorité 2)
- **Icône** : Public

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Countries — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : url `country`.
- GET_MANY : url `filteredList/search`.
- GET_ONE : url `countryIso?countryCode=`.
- CREATE : url `countryIso/createOrUpdate`.
- UPDATE : url `countryIso/createOrUpdate`.
- DELETE : url `countryIso/`.

## Localisation et libellés
- Libellé FR : Pays.
- Libellé EN : Countries.