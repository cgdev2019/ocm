# Tax category – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Tax category
- **Ressource** : tax-categories
- **Entité métier** : org.meveo.model.tax.TaxCategory
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : KeyboardArrowRight

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `code`
- Colonne 2 : source `description`
- Colonne 3 : source `vatAuthNrRequired` ; type boolean

### Recherche et filtres
- Recherche plein texte standard sur la liste.

### Actions et interactions
- Bouton de création disponible.
- Ouverture d'une ligne sur l'événement `edit`.

## Formulaires associés
- create :
  - Champs principaux :
    - Ligne 1, colonne 1 : champ texte — source `code`; required, désactivé lors de l'édition
    - Ligne 2, colonne 1 : champ texte — source `description`; required
    - Ligne 3, colonne 1 : boolean — source `vatAuthNrRequired`
- edit :
  - Champs principaux :
    - Ligne 1, colonne 1 : champ texte — source `code`; required, désactivé lors de l'édition
    - Ligne 2, colonne 1 : champ texte — source `description`; required
    - Ligne 3, colonne 1 : boolean — source `vatAuthNrRequired`

## Fournisseur de données
- GET_LIST : url `v2/generic/all/taxCategory`.
- GET_ONE : url `v2/generic/taxCategory/`.
- GET_MANY : url `v2/generic/all/taxCategory`.
- CREATE : url `v2/generic/taxCategory/`.
- UPDATE : url `v2/generic/taxCategory/:id`, options {"method":"PUT"}.
- DELETE : url `v2/generic/taxCategory/:id`.
- DELETE_MANY : url `v2/generic/taxCategory`.

## Localisation et libellés
- Libellé EN : Tax Category.