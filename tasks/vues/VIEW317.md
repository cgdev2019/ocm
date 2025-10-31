# Paramètres CDR – Page par défaut

- **Groupe fonctionnel** : Operation
- **Module** : Paramètres CDR
- **Ressource** : cdr-settings
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : mediation (priorité 2)
- **Icône** : QueryBuilder

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : CPQCDRSettings — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : url `provider`, méthode GET.
- CREATE : getUpdateProvider({
  url: 'provider/createOrUpdate',
  method: 'POST'
}).

## Localisation et libellés
- Libellé FR : Paramètres CDR.
- Libellé EN : CDR settings.