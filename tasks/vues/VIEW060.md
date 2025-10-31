# Audit Log – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Audit Log
- **Ressource** : audit-log
- **Clé / route** : list
- **Type d'écran** : Liste groupée
- **Icône** : Dashboard

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `id` ; utilisable en filtre
- Colonne 2 : source `label`
- Colonne 3 : source `createdAt` ; type date
- Colonne 4 : source `author.name`
- Colonne 5 : source `amountWithoutTax` ; type number
- Colonne 6 : source `author.email`

### Actions et interactions
- Export des données autorisé.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/AuditLog',
  nestedEntities,
  genericFields
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/AuditLog',
  nestedEntities,
  genericFields
}).

## Localisation et libellés
- Libellé FR : Audit Log.
- Libellé EN : Audit Log.