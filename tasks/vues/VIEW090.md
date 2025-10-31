# Agents de relance – Page par défaut

- **Groupe fonctionnel** : B2B customer care
- **Module** : Agents de relance
- **Ressource** : dunning-agents
- **Clé / route** : racine du module
- **Type d'écran** : Fiche de consultation
- **Menu** : dunning (priorité n/a)

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Show Dunning Agents — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/DunningAgent',
  responseContainer: 'data',
  nestedEntities,
  keyColumn
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/DunningAgent',
  responseContainer: 'data',
  nestedEntities,
  keyColumn
}).
- GET_MANY_REFERENCE : getListV2({
  url: 'v2/generic/all/DunningAgent',
  responseContainer: 'data',
  nestedEntities,
  keyColumn
}).

## Localisation et libellés
- Libellé FR : Agents de relance.
- Libellé EN : Dunning Agents.