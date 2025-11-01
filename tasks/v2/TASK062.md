# TASK062 — API V2 RatedTransaction

## Contexte
Le domaine « RatedTransaction » (tag OpenAPI `RatedTransaction`) est défini dans `tasks/openceapi.json` (API V2). Cette fiche remplace la spécification V1 correspondante.

## Objectifs
- Connecter toutes les opérations listées via le client généré et les hooks TanStack Query (API V2).
- Mettre à jour les écrans existants (liste, détail, formulaires) pour refléter la structure V2.
- Garantir une pagination homogène avec la vue Clients actuelle pour toutes les listes.
- Couvrir les cas critiques par des tests unitaires (Jest/RTL) et end-to-end (Playwright).

## Notes
- Se référer à `AGENTS.md` et consigner toute hypothèse complémentaire dans le README.
- Chaque schéma référencé doit disposer d’un typage TypeScript, de mappings et des formulaires adaptés.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| POST | `/api/rest/v2/billing/ratedTransaction` | This endpoint allows to create a ratedTransaction resource | createRatedTransaction |
| GET | `/api/rest/v2/billing/ratedTransaction/{code}` | Return a rated transaction | find_4 |
| PUT | `/api/rest/v2/billing/ratedTransaction/{id}` | This endpoint allows to update an existing ratedTransaction resource | updateRatedTransaction |
| PUT | `/api/rest/v2/billing/ratedTransaction/{id}/cancellation` | This endpoint allows to cancel an existing ratedTransaction resource | cancel |

#### POST /api/rest/v2/billing/ratedTransaction

- Résumé: This endpoint allows to create a ratedTransaction resource
- OperationId: createRatedTransaction
- Description: create new ratedTransaction
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - obligatoire
  - application/json: RatedTransactionInput (RatedTransactionInput)
- Réponses:
  - 200: the ratedTransaction successfully created, and the id is returned in the response
  - 400: bad request on ratedTransaction creation

#### GET /api/rest/v2/billing/ratedTransaction/{code}

- Résumé: Return a rated transaction
- OperationId: find_4
- Description: Returns rated transaction data
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (PATH, obligatoire) — string : code of the Rated transaction
- Réponses:
  - 404: RatedTransaction not found
    - application/json: ApiException (ApiException)
  - default: the searched RatedTransaction
    - application/json: Invoice (Invoice)

#### PUT /api/rest/v2/billing/ratedTransaction/{id}

- Résumé: This endpoint allows to update an existing ratedTransaction resource
- OperationId: updateRatedTransaction
- Description: update an existing ratedTransaction
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) : id of ratedTransaction
- Corps de requête:
  - obligatoire
  - application/json: RatedTransactionInput (RatedTransactionInput)
- Réponses:
  - 200: the ratedTransaction successfully updated, and the id is returned in the response
  - 400: bad request, ratedTransaction is not eligible for update
  - 404: bad request, ratedTransaction is not found

#### PUT /api/rest/v2/billing/ratedTransaction/{id}/cancellation

- Résumé: This endpoint allows to cancel an existing ratedTransaction resource
- OperationId: cancel
- Description: cancel an existing ratedTransaction
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — integer (int64) :  ratedTransaction id
- Réponses:
  - 200: the ratedTransaction successfully canceled
  - 400: bad request, ratedTransaction is not eligible for update
  - 404: bad request, ratedTransaction is not found

## Schémas principaux

### RatedTransactionInput
Type: object
Propriétés:
- **serviceInstanceCode**: string
- **usageDate**: string (date-time)
- **chargeInstanceCode**: string
- **userAccountCode**: string
- **billingAccountCode**: string
- **unitAmountWithoutTax**: number
- **subscriptionCode**: string
- **quantity**: number
- **parameter1**: string
- **parameter2**: string
- **parameter3**: string
- **parameterExtra**: string
- **description**: string — Rated transaction description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### ApiException
Type: object
Propriétés:
- **causes**: Array<Cause>
- **details**: string
- **code**: string
- **status**: string (Valeurs: OK, Created, Accepted, No Content, Reset Content, Partial Content, Moved Permanently, Found, See Other, Not Modified, Use Proxy, Temporary Redirect, Bad Request, Unauthorized, Payment Required, Forbidden, Not Found, Method Not Allowed, Not Acceptable, Proxy Authentication Required, Request Timeout, Conflict, Gone, Length Required, Precondition Failed, Request Entity Too Large, Request-URI Too Long, Unsupported Media Type, Requested Range Not Satisfiable, Expectation Failed, Precondition Required, Too Many Requests, Request Header Fields Too Large, Internal Server Error, Not Implemented, Bad Gateway, Service Unavailable, Gateway Timeout, HTTP Version Not Supported, Network Authentication Required)
- **id**: integer (int64)
- **links**: Array<object>

### Cause
Type: object
Propriétés:
- **causeMessage**: string

### Invoice
Type: object
Propriétés:
- **invoiceAdjustmentCurrentSellerNb**: integer (int64) — The invoice adjustment current seller
- **invoiceAdjustmentCurrentProviderNb**: integer (int64) — The invoice adjustment current provider
- **previousInvoiceNumber**: string — The previous invoice number
- **productDate**: string (date-time) — The product date
- **adjustedInvoice**: Resource
- **temporaryInvoiceNumber**: string — The temporary invoice number
- **externalRef**: string — The external ref
- **xmlDate**: string (date-time) — The xml date
- **pdfDate**: string (date-time) — The pdf date
- **emailSentDate**: string (date-time) — The date of email sent
- **rawAmount**: number — The raw amount
- **invoiceLines**: Array<InvoiceLine> — The list of the invoice lines
- **commercialOrder**: Resource
- **cpqQuote**: Resource
- **paymentStatusDate**: string (date-time) — The date of the payment status
- **amountWithoutTaxBeforeDiscount**: number — Amount without tax before discount
- **xmlFilename**: string — The xml file name for generated invoice xml
- **pdfFilename**: string — The pdf file name for generated invoice PDF
- **invoiceTypeCode**: string — The invoice type code
- **categoryInvoiceAgregates**: Array<CategoryInvoiceAgregate> — The list of the caregory invoice agregates
- **listLinkedInvoices**: Array<integer (int64)> — The list of linked invoices
- **invoiceLinesTolink**: Array<integer (int64)> — The list of the invoice lines to link
- **discountPlan**: Resource
- **discountAmount**: number — The discount amount
- **discount**: number — The discount if any
- **rejectReason**: string — The rejected reason
- **dueBalance**: number — The due balance
- **recordedInvoice**: Resource
- **netToPay**: number — The net to pay
- **invoiceNumber**: string — The invoice number
- **initialCollectionDate**: string (date-time) — The initial collection date
- **discountRate**: number — The discount rate
- **tradingLanguage**: Resource
- **discountAmountWithoutTax**: number — discount amount without tax
- **quote**: Resource
- **billingRun**: Resource
- **paymentMethodType**: string — The payment method type (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **tradingCountry**: Resource
- **statusDate**: string (date-time) — The date of the status
- **cfValues**: Resource
- **subscription**: Resource
- **alias**: string — The alias
- **dueDate**: string (date-time) — The Due date
- **paymentMethod**: Resource
- **paymentStatus**: string — The payement status (Valeurs: NONE, PENDING, PENDING_PLAN, PAID, PPAID, UNPAID, ABANDONED, REFUNDED, DISPUTED)
- **iban**: string — The iban
- **amount**: number — The amount of the invoice
- **sellerCode**: string — The seller code
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **billingAccountCode**: string — The billing account code
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **tradingCurrency**: Resource
- **invoiceDate**: string (date-time) — The invoice date
- **status**: string — The status of the invoice. (Valeurs: NEW, SUSPECT, REJECTED, DRAFT, CANCELED, VALIDATED)
- **cfAccumulatedValues**: Resource
- **customFields**: CustomFieldsDto
- **description**: string — The description of the invoice
- **comment**: string — The comment for the invoice
- **order**: Resource
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)
- **detailedInvoice**: boolean — Indicate if the invoice is detailed
- **alreadyAppliedMinimum**: boolean — Indicate if the invoice is already applied minumun
- **alreadyAddedDiscount**: boolean — Indicate if the invoice is discount already added
- **alreadySent**: boolean — Indicate if the invoice is already sent
- **dontSend**: boolean — Indicate if the invoice doesnt send
- **draft**: boolean — Indicate if the invoice is draft
- **prepaid**: boolean — Indicate if the invoice is a prepaid

### Resource
Type: object
Propriétés:
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### InvoiceLine
The list of invoice lines
Type: object
Champs obligatoires: accountingArticleCode
Propriétés:
- **invoiceId**: integer (int64) — The id of the invoice
- **accountingArticleCode**: string — The code of accounting article
- **serviceInstanceCode**: string — The code of service instance
- **serviceTemplateCode**: string — The code of service template
- **productVersionId**: integer (int64) — The id of product version
- **offerServiceTemplateId**: integer (int64) — The id of offer service template
- **taxAccountingCode**: string — The Tax Accounting Code
- **billingRunId**: integer (int64) — The id of billing run
- **taxRate**: number — The tax rate
- **orderLotCode**: string — The orderLot code
- **commercialOrderId**: integer (int64) — The id of the commercial order
- **accessPoint**: string — The access point
- **rawAmount**: number — The raw amount
- **taxMode**: string — The Tax Mode
- **discountAmount**: number — The discount amount
- **taxRecalculated**: boolean — the tax recalculated
- **discountPlanCode**: string — The code of discount plan
- **prestation**: string — The prestation
- **discountRate**: number — The discount rate
- **productCode**: string — The code of product
- **valueDate**: string (date-time) — The date value
- **unitPrice**: number — The unit price
- **orderRef**: string — The order reference
- **taxCode**: string — The code of tax
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **billingAccountCode**: string — The code of billing account
- **amountWithoutTax**: number — The amount without tax
- **offerTemplateCode**: string — The code of offer template
- **subscriptionCode**: string — The code of subscription
- **quantity**: number — The quantity
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **orderNumber**: string — The order number
- **status**: string — the status (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED)
- **customFields**: CustomFieldsDto
- **label**: string — The label for invoice line
- **description**: string — The description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### CustomFieldsDto
custom field associated the contact category
Type: object
Propriétés:
- **customField**: Array<CustomFieldDto>
- **inheritedCustomField**: Array<CustomFieldDto>
- **empty**: boolean

### CustomFieldDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **fieldType**: string (Valeurs: STRING, DATE, LONG, DOUBLE, LIST, CHECKBOX_LIST, ENTITY, TEXT_AREA, CHILD_ENTITY, MULTI_VALUE, BOOLEAN, CUSTOM_TABLE_WRAPPER, URL)
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **valueDate**: string (date-time)
- **valuePeriodStartDate**: string (date-time)
- **valuePeriodEndDate**: string (date-time)
- **valuePeriodPriority**: integer (int32)
- **stringValue**: string
- **dateValue**: string (date-time)
- **longValue**: integer (int64)
- **doubleValue**: number (double)
- **booleanValue**: boolean
- **mapValue**: object
- **entityReferenceValue**: EntityReferenceDto
- **valueConverted**: object
- **indexType**: string (Valeurs: STORE_ONLY, INDEX, INDEX_NOT_ANALYZE)
- **fileValue**: string
- **formattedValue**: CustomFieldFormattedValueDto
- **urlReferenceValue**: UrlReferenceDto
- **guiPosition**: string
- **customTableCode**: string
- **dataFilter**: string
- **fields**: string
- **empty**: boolean
- **value**: Array<CustomFieldValueDto>

### LanguageDescriptionDto
Type: object
Propriétés:
- **languageCode**: string — The language code
- **description**: string — The description

### CustomFieldValueDto
Type: object
Propriétés:
- **value**: object
- **empty**: boolean

### EntityReferenceDto
Type: object
Propriétés:
- **classname**: string
- **code**: string
- **id**: integer (int64)
- **empty**: boolean

### CustomFieldFormattedValueDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **singleValue**: string
- **listValue**: Array<string>
- **mapValue**: object

### UrlReferenceDto
Type: object
Propriétés:
- **url**: string
- **regexp**: string
- **label**: string
- **length**: integer (int32)
- **empty**: boolean

### CategoryInvoiceAgregate
The list of the caregory invoice agregates
Type: object
Propriétés:
- **discountAggregates**: Array<DiscountInvoiceAggregate>
- **categoryInvoiceCode**: string
- **listSubCategoryInvoiceAgregate**: Array<SubCategoryInvoiceAgregate>
- **itemNumber**: integer (int32)
- **userAccountCode**: string
- **amountWithoutTax**: number
- **amountTax**: number
- **amountWithTax**: number
- **description**: string
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### DiscountInvoiceAggregate
Type: object
Propriétés:
- **discountPlanItemCode**: string — The code of discount plan item
- **discountPercent**: number — The discount percent
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SubCategoryInvoiceAgregate
Type: object
Propriétés:
- **invoiceLines**: Array<InvoiceLine> — The list of invoice lines
- **invoiceSubCategoryCode**: string — The code of invoice sub category
- **amountsByTax**: Array<SubcategoryInvoiceAgregateAmount> — List of amounts by tax
- **itemNumber**: integer (int32) — The item number
- **accountingCode**: string — The code of accounting
- **userAccountCode**: string — The code of user account
- **amountWithoutTax**: number — The amount without tax
- **quantity**: number — The quantity
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **description**: string — The description
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### SubcategoryInvoiceAgregateAmount
List of amounts by tax
Type: object
Propriétés:
- **tax**: Tax
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

### Tax
The tax attachaed to sub category invoice agregate amount
Type: object
Propriétés:
- **composite**: boolean
- **accountingCode**: string
- **percent**: number
- **links**: Array<object>
- **code**: string
- **id**: integer (int64)

---

_Dernière mise à jour générée automatiquement à partir de `tasks/openceapi.json`. Régénérez après toute évolution du schéma OpenAPI._
