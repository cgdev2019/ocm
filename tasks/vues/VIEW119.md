# Motifs – List

- **Groupe fonctionnel** : B2B customer care
- **Module** : Motifs
- **Ressource** : motifs
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Icône** : FilterNone

## Contenu principal
### Colonnes et cellules
- Colonne 1 : configuration implicite

### Actions et interactions
- Actions de masse désactivées.
- Actions personnalisées présentes :
  - ra.action.create (action directe).
- Ouverture d'une ligne sur l'événement `modify`.

### Pagination et tri
- Pagination par 20 éléments.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'customTable/list/CE_LISTE_MOTIF_AVOIR',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'customTable/list/CE_LISTE_MOTIF_AVOIR',
  nestedEntities
}).
- GET_ONE : getListV2({
  url: 'customTable/list/CE_LISTE_MOTIF_AVOIR',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Motifs.
- Libellé EN : Motifs.