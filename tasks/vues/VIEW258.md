# Grand livre – Page par défaut

- **Groupe fonctionnel** : Finance
- **Module** : Grand livre
- **Ressource** : general-ledger
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : reports (priorité 5)
- **Icône** : Dashboard

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : List With Total General Ledger — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/JournalEntry',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/JournalEntry',
  nestedEntities
}).

## Localisation et libellés
- Libellé FR : Grand livre.
- Libellé EN : General ledger.