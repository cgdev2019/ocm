# Clients – New/:client Code

- **Groupe fonctionnel** : B2B customer care
- **Module** : Clients
- **Ressource** : CPQquotes
- **Clé / route** : new/:clientCode
- **Type d'écran** : Vue composite
- **Icône** : Style

## Contenu principal
### Grille de champs
- Ligne 1, colonne 1 : Create New Quote V2 — aucun paramètre spécifique confirmé dans la configuration

## Fournisseur de données
- GET_LIST : getListV2({
  url: 'v2/generic/all/cpqQuote',
  nestedEntities,
  keyColumn: 'id'
}).
- GET_MANY : getListV2({
  url: 'v2/generic/all/cpqQuote',
  nestedEntities,
  keyColumn: 'id'
}).
- GET_ONE : getOneV2({
  url: 'v2/generic/cpqQuote/',
  nestedEntities
}).
- GET_QUOTE_VERSION : url `cpq/quotes/:code`, options {"method":"GET"}, post-traitement de la réponse.
- GET_CLIENT_INVOICE : url `account/billingAccount/list?customerAccountCode=TEST_C_UA`, options {"method":"GET"}.
- GET_CLIENT_CONTRACT : getOneV2({
  url: 'v2/generic/all/user/',
  nestedEntities
}).
- CREATE : getCreateProvider({
  url: 'cpq/quotes',
  method: 'POST',
  responseContainer: 'quoteDto',
  responseContainerId: 'id'
}).
- UPDATE : implémentation spécifique.
- UPDATE_QUOTE : implémentation spécifique.
- UPDATE_STATUS_QUOTE : url `cpq/quotes/overlay/:code/status/IN_PROGRESS_2_APPR`, options {"method":"PUT"}.
- UPLOAD_SIGNED_QUOTE : implémentation spécifique.
- UPLOAD_MEDIA : implémentation spécifique.
- UPDATE_ACCEPTE : implémentation spécifique.
- UPDATE_REFUSE : implémentation spécifique.
- UPDATE_QUOTE_DATA : implémentation spécifique.
- MISE_EN_PROD : implémentation spécifique.
- RESTART_VALIDATION : implémentation spécifique.
- UPDATE_AND_ABANDON : implémentation spécifique.
- UPDATE_AND_CANCEL : implémentation spécifique.
- DELETE : getDeleteProvider({
  url: 'cpq/quotes/',
  method: 'DELETE'
}).
- DELETE_MANY : getDeleteProvider({
  url: 'cpq/quotes/',
  method: 'DELETE'
}).
- GET_USER : getListV2({
  url: 'v2/generic/all/user'
}).
- GET_DEVICE_DETAILS : url `[object Object]`, options {"method":"POST"}.
- GET_OFFER_DETAILS : url `catalog/offerTemplate?`, options {"method":"GET"}.
- GET_OFFER_TEMPLATES : url `catalog/chargeTemplates/`, options {"method":"GET"}.
- UPDATE_STATUS : url `cpq/quotes/:code/status/:toStatus`, options {"method":"PUT"}.
- DUPLICATE_VERSION : url `cpq/quotes/:quoteCode/:version/duplication`.
- VALIDATE_QUOTE : implémentation spécifique.
- CREATE_VERSION : url `cpq/quotes/quoteVersions`.
- CREATE_VERSION_API : url `duplication/duplicateVersion/:quoteCode/:version`, options {"method":"POST"}.
- QUOTATION : url `cpq/quotes/quoteVersions/:code/:version/v2/quotation`, options {"method":"POST"}.
- GENERATE_PDF : url `cpq/quotes/quoteVersions/:code/:version/xmlGeneration?generatePdf=:generateState`, options {"method":"POST"}.
- DOWNLOAD_PDF : url `admin/files/downloadFile?file=quotes/pdf/:fileName`, options {"method":"GET"}.
- DOWNLOAD_XSL : url `admin/files/downloadFile?file=quotes/pdf/xlsx/:fileName`, options {"method":"GET","responseType":"blob"}.
- CE_PROPERTIES : url `customTable/list/CE_PROPERTIES`, options {"method":"POST"}.
- GET_CE_ANNEXE : url `annexe/list/:quoteVersionId`, options {"method":"GET"}.
- CONDITIONS_PAYMENT : url `managePayment/:clientDonneurId/:clientFactureId/:montantHT/:totalChargesOther?`, options {"method":"GET"}.
- SEND_PAYMENT_LINK : url `sendLink/:idDevis/:idBillingAccount`, options {"method":"GET"}.
- SEND_LINK_CB : url `[object Object]`, options {"method":"POST"}.
- ENVOI_FACTURE_DUPLICATA : url `[object Object]`, options {"method":"POST"}.
- ENVOI_DEVIS : url `SendEmailDevis/:idDevis/:idInterlocuteur`, options {"method":"POST"}.
- DATE_LIMITE_SIGN_DEVIS : url `dateLimiteSignatureDevis/:codeQuote`, options {"method":"GET"}.
- INIT_CPQ_QUOTE_DATA : url `initCPQquoteData`, options {"method":"POST"}.
- DUPLICATE_QUOTE_API : url `duplication/duplicateQuote/:quoteCode/:version/:avenant`.
- DUPLICATE_QUOTE_APIS : url `duplication/duplicateQuote/:quoteCode/:version/:avenant`, options {"method":"POST"}.
- DUPLICATE_PRESTATION_APIS : url `duplication/duplicateQuote/:quoteCode/:version/:avenant/:quoteItemId`, options {"method":"POST"}.
- UPDATE_BON_COMMANDE_API : url `updateBonDeCommande/:quoteId`, options {"method":"POST"}.
- GET_SELLER : url `seller?`, options {"method":"GET"}.
- UPDATE_QUOTE_STATUS : url `cpq/quotes/:code/status/:newStatus`, options {"method":"PUT"}.
- UPDATE_QUOTE_STATUS_OVERLAY : url `cpq/quotes/overlay/:code/status/:newStatus`, options {"method":"PUT"}.
- UPDATE_QUOTE_PRICE : url `cpq/quotes`, options {"method":"PUT"}.
- UPDATE_PRICE : url `cpq/quotes/quotePrices/override`, options {"method":"PUT"}.
- GET_CE_PLAN_VALIDATION : url `customTable/list/CE_PLAN_DE_VALIDATION`, options {"method":"POST"}.
- PUT_CE_PLAN_VALIDATION : url `customTable`, options {"method":"PUT"}.
- RELANCE_VALIDATION : url `reminderValidation/:quoteId`, options {"method":"PUT"}.
- GED_DISCOUNTS : url `v2/generic/all/discountPlan`, options {"method":"POST"}.
- UPDATE_QUOTES_CONTRACT : url `v2/generic/all/discountPlan`, options {"method":"PUT"}.
- GET_CONTRACT_LIST : url `[object Object]`, options {"method":"GET"}.
- UPDATE_QUOTE_CONTENT : implémentation spécifique.
- AUTO_CREATION : url `cpq/quotes`, options {"method":"POST"}.
- INIT_CPQ_QUOTE_DATA_V2 : url `initCPQquoteData/V2?create=true`, options {"method":"POST"}.
- GET_BILLING_INVOICE : url `billingInvoice/:idDevis`, options {"method":"GET"}.
- DOWNLOAD_INVOICE_PDF : url `invoice/fetchPdfInvoice`, options {"method":"POST"}.
- GET_USER_LIST : url `user/list`, options {"method":"POST"}.
- PUT_CUSTOMER_DATA : url `account/customer`, options {"method":"PUT"}.
- RESEND_E_SIGNATURE_LINK : url `[object Object]`, options {"method":"POST"}.
- GET_SELLER_INFO : url `[object Object]`, options {"method":"POST"}.
- GET_CAUTION_CHARGE_TEMPLATES : url `v2/generic/all/chargeTemplate`, options {"method":"POST"}.
- LIST_REMPLACANT : url `absences/substitute_by_plan_id/:planId`, options {"method":"GET"}.
- APPLY_ONESHOT : url `mdpSubscription/applyExtraCharge`, options {"method":"POST"}.

## Localisation et libellés
- Libellé FR : Clients.
- Libellé EN : Clients.