# Cycles de facturation – List

- **Groupe fonctionnel** : Operation
- **Module** : Cycles de facturation
- **Ressource** : billing-cycles
- **Clé / route** : list
- **Type d'écran** : Liste simple
- **Menu** : billing-rules (priorité 3)
- **Icône** : InsertDriveFile

## Contenu principal
### Colonnes et cellules
- Colonne 1 : source `id`
- Colonne 2 : source `code`
- Colonne 3 : source `description`
- Colonne 4 : source `calendar`
- Colonne 5 : source `type` ; type status
- Colonne 6 : source `filters` ; type boolean
- Colonne 7 : source `invoiceType`

### Recherche et filtres
- champ sans source explicite
- champ `type` (filtre {"order":1})
- champ `invoiceType->code` (référence {{modulePath}}/{{OPERATION_INVOICE_TYPES}}, filtre {"order":2})
- champ sans source explicite

### Pagination et tri
- Pagination par 20 éléments.
- Choix de pagination : [20,50,100].
- Tri par défaut avancé : {"field":"id","order":"ASC"}.

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/BillingCycle',
  nestedEntities,
  genericFields
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/BillingCycle',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Cycles de facturation.
- Libellé EN : Billing cycles.