# Devis – PATH QUOTE OFFERS CREATE

- **Groupe fonctionnel** : B2B customer care
- **Module** : Devis
- **Ressource** : quote-offers
- **Clé / route** : PATH_QUOTE_OFFERS_CREATE
- **Type d'écran** : Formulaire de création

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create CPQQuote Offer — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/quoteOffer',
  nestedEntities
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/quoteOffer',
  nestedEntities
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/quoteOffer/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'cpq/quotes/quoteItems/',
  method: 'POST',
  responseContainer: 'quoteOfferDto',
  responseContainerId: 'quoteOfferId'
}).
- UPDATE : getUpdateProvider({
  url: 'cpq/quotes/quoteItems',
  method: 'PUT',
  responseContainer: 'quoteOfferDto'
}).
- DELETE : getDeleteProvider({
  url: 'cpq/quotes/quoteItems/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/quotes/quoteItems/',
  method: 'DELETE'
}).
- DELETE_QUOTE_OFFER : getDeleteProvider({
  url: 'cpq/quotes/quoteItems/:id',
  method: 'DELETE'
}).
- DUPLICATE_QUOTE : url `[object Object]`.

## Localisation et libellés
- Libellé FR : Devis.
- Libellé EN : Product or Service.