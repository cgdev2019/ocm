# instance de produit – PATH EDIT

- **Groupe fonctionnel** : Finance
- **Module** : instance de produit
- **Ressource** : product-instance
- **Entité métier** : org.meveo.model.billing.ServiceInstance
- **Clé / route** : PATH_EDIT
- **Type d'écran** : Formulaire d'édition

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Edit Product Instance — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/serviceInstance',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/serviceInstance',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/serviceInstance/',
  nestedEntities
}).
- UPDATE : getUpdateProvider({
  url: 'billing/subscription/updateServices',
  method: 'PUT'
}).
- SUSPEND_SERVICE : url `billing/subscription/suspendServices`, options {"method":"PUT"}.
- RESUME_SERVICE : url `billing/subscription/resumeServices`, options {"method":"PUT"}.
- ACTIVATE_SERVICE : url `billing/subscription/activateServices`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : instance de produit.
- Libellé EN : Product instance.