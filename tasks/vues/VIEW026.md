# Credit categories – List

- **Groupe fonctionnel** : Administration
- **Module** : Credit categories
- **Ressource** : credit-categories
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : CardMembership

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code`
- Colonne 2 : source `description`

### Recherche et filtres
- Recherche plein texte standard sur la liste.

### Actions et interactions
- Bouton de création disponible.
- Export des données autorisé.
- Ouverture d'une ligne sur l'événement `show`.

## Fournisseur de données
- GET_LIST : url `v2/generic/all/creditCategory`.
- GET_MANY : url `v2/generic/all/creditCategory`.
- GET_ONE : url `v2/generic/creditCategory/`.
- CREATE : url `payment/creditCategory/createOrUpdate`.
- UPDATE : url `payment/creditCategory/createOrUpdate`.
- DELETE : url `payment/creditCategory/`.

## Localisation et libellés
- Libellé EN : Credit Categories.