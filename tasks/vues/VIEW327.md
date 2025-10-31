# Avoirs en masse – Page par défaut

- **Groupe fonctionnel** : Operation
- **Module** : Avoirs en masse
- **Ressource** : mass-adjustments
- **Clé / route** : racine du module
- **Type d'écran** : Vue composite
- **Icône** : QueryBuilder

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Mass Adjustments — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/invoiceLine',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/invoiceLine',
  responseContainer: 'data',
  nestedEntities
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/invoiceLine',
  responseContainer: 'data',
  nestedEntities
}).
- MARK_FOR_ADJUSTMENT : url `v2/billing/invoiceLines/markForAdjustment`, options {"method":"POST"}.
- UNMARK_FOR_ADJUSTMENT : url `v2/billing/invoiceLines/unmarkForAdjustment`, options {"method":"POST"}.
- EXECUTE_MASS_ADJUSTMENT_JOB : url `job/execute`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Avoirs en masse.
- Libellé EN : Mass adjustments.