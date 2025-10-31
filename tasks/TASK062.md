# TASK062 — Service AddressBook

## Contexte
Le service « AddressBook » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%AddressBook
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/addressbook` |  Find a AddressBook with a given code and from  |     GET_AddressBook_search |
| GET | `/api/rest/addressbook/addContact` |  Create a new contact address for a contact code  |     GET_AddressBook_addContact |
| GET | `/api/rest/addressbook/createAll` |  Create All addressbook  | GET_AddressBook_createAll |
| GET | `/api/rest/addressbook/list` |  List of address  |     GET_AddressBook_list |
| GET | `/api/rest/addressbook/version` | Get version of application | index_107 |

#### GET /api/rest/addressbook

- Résumé:  Find a AddressBook with a given code and from 
- OperationId:     GET_AddressBook_search
- Description: Find a AddressBook with a given code and from
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `code` (QUERY, optionnel) — string
- `from` (QUERY, optionnel) — string
- Réponses:
  - default: GetAddressBookResponse data
    - application/json: GetAddressBookResponseDto
    - application/xml: GetAddressBookResponseDto

#### GET /api/rest/addressbook/addContact

- Résumé:  Create a new contact address for a contact code 
- OperationId:     GET_AddressBook_addContact
- Description: Create a new contact address for a contact code
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `addressbookCode` (QUERY, optionnel) — string
- `contactCode` (QUERY, optionnel) — string
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/addressbook/createAll

- Résumé:  Create All addressbook 
- OperationId: GET_AddressBook_createAll
- Description: Create All addressbook
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/addressbook/list

- Résumé:  List of address 
- OperationId:     GET_AddressBook_list
- Description: List of address
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: Request processing status
    - application/json: ActionStatus
    - application/xml: ActionStatus

#### GET /api/rest/addressbook/version

- Résumé: Get version of application
- OperationId: index_107
- Sécurité: Aucune exigence déclarée
- Réponses:
  - 200: Return action status with version number as a message
    - application/json: ActionStatus
    - application/xml: ActionStatus

## Schémas principaux

### GetAddressBookResponseDto
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **addressBook**: AddressBookDto

### ActionStatus
Type: object
Champs obligatoires: message, status
Propriétés:
- **status**: string — Tells whether the instance of this status object is ok or not (Valeurs: SUCCESS, FAIL, WARNING)
- **errorCode**: ApiErrorCodeEnum
- **message**: string — A detailed error message if applicable, can contain the entity id that was created
- **entityId**: integer (int64) — The entity identifier after creation of an entity
- **entityCode**: string — The entity code after creation of an entity
- **nrAffected**: integer (int32) — Number of items/records affected by the action

### ApiErrorCodeEnum
error code
Type: object

### AddressBookDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **contact**: Array<ContactDto>

### ContactDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **externalRef1**: string — The external ref 1
- **externalRef2**: string — The external ref 2
- **name**: NameDto
- **address**: AddressDto
- **jobTitle**: string — The job title
- **customFields**: CustomFieldsDto
- **loaded**: boolean
- **vatNo**: string — The vat no
- **registrationNo**: string — The registration no
- **contactInformation**: ContactInformationDto
- **isCompany**: boolean — indicate if this is a company
- **legalEntityType**: TitleDto
- **assistantName**: string
- **assistantPhone**: string
- **position**: string
- **company**: string
- **websiteUrl**: string
- **importedFrom**: string
- **importedBy**: string
- **socialIdentifier**: string
- **reference**: string
- **comment**: string
- **agreedToUA**: boolean
- **contactPolicy**: CommunicationPolicy
- **tags**: Array<string>
- **contactCategoryCodes**: Array<string>
- **addressBookContacts**: Array<AddressBookContactDto>
- **prospect**: boolean
- **vip**: boolean
- **isVip**: boolean
- **isProspect**: boolean

### NameDto
The name
Type: object
Champs obligatoires: lastName
Propriétés:
- **title**: string — The title
- **firstName**: string — The first name
- **lastName**: string — The last name

### AddressDto
Type: object
Propriétés:
- **address1**: string — First address
- **address2**: string — Second address
- **address3**: string — Third address
- **address4**: string — forth address
- **address5**: string — fifth address
- **zipCode**: string — The zip code
- **city**: string — The city
- **country**: string — The country
- **state**: string — The state

### CustomFieldsDto
The custom fields
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

### ContactInformationDto
The contact information
Type: object
Propriétés:
- **email**: string — The email
- **phone**: string — The phone
- **mobile**: string — The mobile
- **fax**: string — The fax
- **address**: AddressDto

### TitleDto
The legal entity type
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **isCompany**: boolean — indicate if the title is a company (Contraintes: défaut: false)
- **languageDescriptions**: Array<LanguageDescriptionDto> — list of the language description

### CommunicationPolicy
Type: object
Propriétés:
- **delayMinBetween2messages**: integer (int64)
- **nbMaxMessagePerDay**: integer (int64)
- **nbMaxMessagePerWeek**: integer (int64)
- **nbMaxMessagePerMonth**: integer (int64)

### AddressBookContactDto
Type: object
Propriétés:
- **id**: integer (int64)
- **addressBook**: object
- **position**: string
- **mainContact**: boolean
- **customer**: CustomerDto

### CustomerDto
Type: object
Champs obligatoires: code, customerCategory
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **externalRef1**: string — The external ref 1
- **externalRef2**: string — The external ref 2
- **name**: NameDto
- **address**: AddressDto
- **jobTitle**: string — The job title
- **businessAccountModel**: BusinessEntityDto
- **customFields**: CustomFieldsDto
- **loaded**: boolean
- **vatNo**: string — The vat no
- **registrationNo**: string — The registration no
- **contactInformation**: ContactInformationDto
- **minimumAmountEl**: string — Expression to determine minimum amount value
- **minimumLabelEl**: string — Expression to determine rated transaction description to reach minimum amount value
- **minimumTargetAccount**: string — The billing account code to be used when calculating the min amount billable for Customer and CA
- **minimumAmountElSpark**: string — Expression to determine minimum amount value - for Spark
- **minimumLabelElSpark**: string — Expression to determine rated transaction description to reach minimum amount value - for Spark
- **minimumChargeTemplate**: string — Corresponding to minimum one shot charge template code
- **isCompany**: boolean — indicate if this is a company
- **legalEntityType**: TitleDto
- **customerCategory**: string — The customer category
- **customerBrand**: string — The customer brand
- **seller**: string — the code of seller
- **mandateIdentification**: string — The mandate identification
- **mandateDate**: string (date-time) — The mandate date
- **customerAccounts**: CustomerAccountsDto
- **additionalDetails**: AdditionalDetailsDto
- **invoicingThreshold**: number — Invoicing threshold - do not invoice for a lesser amount
- **checkThreshold**: string — The option on how to check the threshold (Valeurs: BEFORE_DISCOUNT, AFTER_DISCOUNT, POSITIVE_RT, POSITIVE_IL)
- **thresholdPerEntity**: boolean — check the threshold per entity/invoice
- **anonymizationDate**: string (date-time)
- **infoGdpr**: Array<GDPRInfoDto> — information GDPR
- **parentCustomerCode**: string — the code of customer parent
- **childrenCustomersCodes**: Array<string> — children Customers

### BusinessEntityDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code

### CustomerAccountsDto
Use for GET / LIST only
Type: object
Propriétés:
- **customerAccount**: Array<CustomerAccountDto>

### CustomerAccountDto
Type: object
Champs obligatoires: code, currency, customer, language
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **externalRef1**: string — The external ref 1
- **externalRef2**: string — The external ref 2
- **name**: NameDto
- **address**: AddressDto
- **jobTitle**: string — The job title
- **businessAccountModel**: BusinessEntityDto
- **customFields**: CustomFieldsDto
- **loaded**: boolean
- **vatNo**: string — The vat no
- **registrationNo**: string — The registration no
- **contactInformation**: ContactInformationDto
- **minimumAmountEl**: string — Expression to determine minimum amount value
- **minimumLabelEl**: string — Expression to determine rated transaction description to reach minimum amount value
- **minimumTargetAccount**: string — The billing account code to be used when calculating the min amount billable for Customer and CA
- **minimumAmountElSpark**: string — Expression to determine minimum amount value - for Spark
- **minimumLabelElSpark**: string — Expression to determine rated transaction description to reach minimum amount value - for Spark
- **minimumChargeTemplate**: string — Corresponding to minimum one shot charge template code
- **isCompany**: boolean — indicate if this is a company
- **legalEntityType**: TitleDto
- **customer**: string
- **currency**: string
- **language**: string
- **status**: string (Valeurs: ACTIVE, CLOSE)
- **creditCategory**: string
- **dateStatus**: string (date-time)
- **dateDunningLevel**: string (date-time)
- **dunningLevel**: string (Valeurs: R0, R1, R2, R3, R4, R5, R6)
- **mandateIdentification**: string
- **mandateDate**: string (date-time)
- **balance**: number
- **totalBalance**: number
- **totalBalanceExigible**: number
- **totalInvoiceBalance**: number
- **accountBalance**: number
- **creditBalance**: number
- **terminationDate**: string (date-time)
- **dueDateDelayEL**: string
- **paymentMethods**: Array<PaymentMethodDto>
- **excludedFromPayment**: boolean
- **paymentMethod**: string (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **billingAccounts**: BillingAccountsDto
- **accountOperations**: Array<AccountOperationDto>
- **invoicingThreshold**: number
- **checkThreshold**: string (Valeurs: BEFORE_DISCOUNT, AFTER_DISCOUNT, POSITIVE_RT, POSITIVE_IL)
- **thresholdPerEntity**: boolean
- **infoGdpr**: Array<GDPRInfoDto>
- **generalClientAccountCode**: string

### PaymentMethodDto
Type: object
Champs obligatoires: paymentMethodType
Propriétés:
- **paymentMethodType**: string — type of the payment method (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **id**: integer (int64) — id of the entity
- **disabled**: boolean — Indicate if the payment method is disabled
- **alias**: string — Alias
- **preferred**: boolean — Is it a preferred payment method (Contraintes: défaut: false)
- **customerAccountCode**: string — Customer account code
- **info1**: string — first Additional info
- **info2**: string — second Additional info
- **info3**: string — third Additional info
- **info4**: string — fourth Additional info
- **info5**: string — fifth Additional info
- **bankCoordinates**: BankCoordinatesDto
- **mandateIdentification**: string — Mandate identification for SEPA
- **mandateDate**: string (date-time) — Mandate date for SEPA
- **cardType**: string — Card type (Valeurs: VISA, MASTERCARD, AMERICAN_EXPRESS, CB)
- **owner**: string — Cardholder: first and last name
- **monthExpiration**: integer (int32) — Card expiration: month
- **yearExpiration**: integer (int32) — Card expiration: year
- **tokenId**: string — Token ID in a payment gateway
- **cardNumber**: string — Card number: full number , with first 12 digits hiding in read operation
- **issueNumber**: string — Issue number
- **userId**: string — Id of the user
- **email**: string — Email
- **referenceDocumentCode**: string — The code of reference document
- **customerCode**: string
- **customFields**: CustomFieldsDto

### BankCoordinatesDto
Bank account information
Type: object
Champs obligatoires: accountNumber, accountOwner, bankCode, bankName, bic, branchCode, iban, key
Propriétés:
- **bankCode**: string — The bank code (Contraintes: longueur min: 0 · longueur max: 5)
- **branchCode**: string — The branch code (Contraintes: longueur min: 0 · longueur max: 5)
- **accountNumber**: string — The account number (Contraintes: longueur min: 0 · longueur max: 11)
- **key**: string — The key (Contraintes: longueur min: 0 · longueur max: 2)
- **iban**: string — The iban (Contraintes: longueur min: 0 · longueur max: 34)
- **bic**: string — The bic (Contraintes: longueur min: 0 · longueur max: 11)
- **accountOwner**: string — The account owner (Contraintes: longueur min: 0 · longueur max: 50)
- **bankName**: string — The bank name (Contraintes: longueur min: 0 · longueur max: 50)
- **bankId**: string — The bank id (Contraintes: longueur min: 0 · longueur max: 50)
- **issuerNumber**: string — The issuer number (Contraintes: longueur min: 0 · longueur max: 50)
- **issuerName**: string — The issuer name (Contraintes: longueur min: 0 · longueur max: 50)
- **ics**: string — The ics (Contraintes: longueur min: 0 · longueur max: 35)
- **empty**: boolean

### BillingAccountsDto
Type: object
Propriétés:
- **billingAccount**: Array<BillingAccountDto>

### BillingAccountDto
Type: object
Champs obligatoires: billingCycle, code, country, customerAccount, language
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **externalRef1**: string — The external ref 1
- **externalRef2**: string — The external ref 2
- **name**: NameDto
- **address**: AddressDto
- **jobTitle**: string — The job title
- **businessAccountModel**: BusinessEntityDto
- **customFields**: CustomFieldsDto
- **loaded**: boolean
- **vatNo**: string — The vat no
- **registrationNo**: string — The registration no
- **contactInformation**: ContactInformationDto
- **minimumAmountEl**: string — Expression to determine minimum amount value
- **minimumLabelEl**: string — Expression to determine rated transaction description to reach minimum amount value
- **minimumTargetAccount**: string — The billing account code to be used when calculating the min amount billable for Customer and CA
- **minimumAmountElSpark**: string — Expression to determine minimum amount value - for Spark
- **minimumLabelElSpark**: string — Expression to determine rated transaction description to reach minimum amount value - for Spark
- **minimumChargeTemplate**: string — Corresponding to minimum one shot charge template code
- **isCompany**: boolean — indicate if this is a company
- **legalEntityType**: TitleDto
- **customerAccount**: string — The customer account
- **billingCycle**: string — The billing cycle
- **country**: string — The country
- **tradingCurrency**: string — The trading currency
- **language**: string — The language
- **nextInvoiceDate**: string (date-time) — The next invoice date
- **subscriptionDate**: string (date-time) — The subscription date
- **terminationDate**: string (date-time) — The termination date
- **electronicBilling**: boolean — The electronic billing
- **status**: string — The status of billing account (Valeurs: ACTIVE, CANCELED, TERMINATED, CLOSED)
- **statusDate**: string (date-time) — The status date, it set automatically when the status was changed
- **terminationReason**: string — The termination reason
- **email**: string — The email
- **invoices**: Array<InvoiceDto> — list of the invoice
- **invoicingThreshold**: number — The invoicing threshold
- **phone**: string — The phone
- **minimumInvoiceSubCategory**: string — Minimum Invoice SubCategory
- **paymentMethodType**: string — Field was deprecated in 4.6 version. Use 'paymentMethods' field on CustomerAccount entity instead (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **bankCoordinates**: BankCoordinatesDto
- **paymentTerms**: string — Field was deprecated in 4.6 version. Use custom fields instead
- **userAccounts**: UserAccountsDto
- **discountPlansForInstantiation**: Array<DiscountPlanDto> — List of discount plans. Use in instantiating a discount plan instance
- **discountPlansForTermination**: Array<string> — List of discount plans to be disassociated in a BillingAccount
- **discountPlanInstances**: Array<DiscountPlanInstanceDto> — Use to return the active discount plans for this entity
- **mailingType**: string — Mailing type
- **emailTemplate**: string — Email Template code
- **ccedEmails**: string — list of emails separated by comma
- **taxCategoryCode**: string — Account tax category code - overrides the value from a customer category
- **checkThreshold**: string — The option on how to check the threshold (Valeurs: BEFORE_DISCOUNT, AFTER_DISCOUNT, POSITIVE_RT, POSITIVE_IL)
- **infoGdpr**: Array<GDPRInfoDto> — List of GDPR related to billing account
- **paymentMethod**: PaymentMethodDto
- **thresholdPerEntity**: boolean — check the threshold per entity/invoice for BA
- **primaryContact**: string — The primary contact
- **tagCodes**: Array<string> — list of the code of tags

### InvoiceDto
Type: object
Champs obligatoires: billingAccountCode, discountAmount, dueDate, invoiceDate, invoiceMode, invoiceType, rawAmount, taxAggregates
Propriétés:
- **invoiceId**: integer (int64) — The invoice id
- **invoiceType**: string — The invoice type
- **billingAccountCode**: string — The billing account code
- **sellerCode**: string — Code of the Seller
- **subscriptionCode**: string — Code of the subscription
- **subscriptionId**: integer (int64) — Id of the subscription
- **orderNumber**: string — Order number of the invoice
- **status**: string — The invoice status (Valeurs: NEW, SUSPECT, REJECTED, DRAFT, CANCELED, VALIDATED)
- **dueDate**: string (date-time) — The due date
- **invoiceDate**: string (date-time) — The invoice date
- **categoryInvoiceAgregates**: Array<CategoryInvoiceAgregateDto> — The category invoice aggregates
- **taxAggregates**: Array<TaxInvoiceAggregateDto> — The tax aggregates
- **listInvoiceIdToLink**: Array<integer (int64)> — The list invoice id to link
- **invoiceNumber**: string — The invoice number
- **discount**: number — discount applied to this invoice
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **paymentMethod**: string — The payment method (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **xmlFilename**: string — The xml filename
- **xml**: string — The xml
- **pdfFilename**: string — he pdf filename
- **pdf**: Array<string (byte)> — content of the pdf
- **autoValidation**: boolean — A request-only parameter. True if invoice should be assigned a number (Contraintes: défaut: true)
- **returnXml**: boolean — A request-only parameter. True if XML invoice should be generated and returned
- **returnPdf**: boolean — A request-only parameter. True if PDF invoice should be generated and returned
- **sendByEmail**: boolean — A request-only parameter. True if PDF should be delivered by email. Defaults to True
- **includeBalance**: boolean — A request-only parameter. True if currently due balance should be returned
- **recordedInvoiceDto**: RecordedInvoiceDto
- **netToPay**: number — The net to pay
- **invoiceMode**: string — The invoice mode (Valeurs: AGGREGATED, DETAILLED)
- **customFields**: CustomFieldsDto
- **dueBalance**: number — The total due is a snapshot at invoice generation time of the due balance (not exigible) before invoice calculation+invoice amount. Due balance is a 'future' dueBalance (the due balance at the invoice due date)
- **isDraft**: boolean — A flag to generate a draft invoice
- **checkAlreadySent**: boolean — Before sending the invoice, check if not already sent
- **overrideEmail**: string — Override Email defined in the billing entity
- **sentByEmail**: boolean — True if the invoice was sent by email or delibered by some other electronic means, false otherwise (Contraintes: défaut: false)
- **paymentScheduleInstancesDto**: PaymentScheduleInstancesDto
- **dunningEntryDate**: string (date-time) — associated dunning creation date
- **dunningLastModification**: string (date-time) — associated dunning last update date
- **dunningStatus**: string — associated dunning current status
- **realTimeStatus**: string — The invoice real time status (Valeurs: NONE, PENDING, PENDING_PLAN, PAID, PPAID, UNPAID, ABANDONED, REFUNDED, DISPUTED)
- **ratedTransactionsToLink**: Array<integer (int64)> — List of existing RTs to include, identified by id This option is allowed only if invoiceMode=='DETAILLED'
- **paymentIncidents**: Array<string> — List of payment incidents
- **sendPaymentDate**: string (date-time) — Date of send payment
- **initialCollectionDate**: string (date-time) — Invoice payment collection date
- **writeOffAmount**: number — Sum off writeOff accountOperations amounts
- **paymentDate**: string (date-time) — last payment Date
- **statusDate**: string (date-time) — Invoice status change date
- **xmlDate**: string (date-time) — Date when the XML has been produced on a validated invoice
- **pdfDate**: string (date-time) — Date when the PDf has been produced on a validated invoice
- **emailSentDate**: string (date-time) — Date when the invoice has been sent for a validated invoice
- **paymentStatus**: string — payment status (Valeurs: NONE, PENDING, PENDING_PLAN, PAID, PPAID, UNPAID, ABANDONED, REFUNDED, DISPUTED)
- **paymentStatusDate**: string (date-time) — Payment status change date
- **startDate**: string (date-time) — Beginning of the billed period (based on billing cycle period whenever possible or min(invoiceLine.valueDate))
- **endDate**: string (date-time) — End of the billed period (based on billing cycle period whenever possible or applied lastTransactionDate or max(invoiceLine.valueDate))
- **rawAmount**: number — Total raw amount from invoice lines. <ul><li>Does not include discount</li><li>With or without tax depending on provider setting (isEnterprise)</li></ul>
- **discountRate**: number — Discount rate to apply (in %).<p>Initialize with discount rate from linked invoice discount plan</p>
- **discountAmount**: number — Total discount amount with or without tax depending on provider settings.<p>Can be inconsistent with discountRate.</p><p>discountAmount has precedence over discountRate</p>
- **discountPlanCode**: string — Discount plan code
- **lastAppliedRate**: number — The exchange rate that converted amounts of the invoice.
- **lastAppliedRateDate**: string (date-time) — The date of exchange rate applied to amounts of the invoice.
- **ratedTransactionsTolink**: Array<integer (int64)>
- **alreadyAppliedMinimum**: boolean
- **draft**: boolean
- **alreadyAddedDiscount**: boolean

### CategoryInvoiceAgregateDto
The category invoice aggregates
Type: object
Champs obligatoires: categoryInvoiceCode, listSubCategoryInvoiceAgregateDto
Propriétés:
- **categoryInvoiceCode**: string — The category invoice code
- **description**: string — The description
- **userAccountCode**: string — The user account code
- **itemNumber**: integer (int32) — The item number
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **listSubCategoryInvoiceAgregateDto**: Array<SubCategoryInvoiceAgregateDto> — List of Sub category invoice aggregates
- **discountAggregates**: Array<DiscountInvoiceAggregateDto> — List of Discount aggregates

### SubCategoryInvoiceAgregateDto
List of Sub category invoice aggregates
Type: object
Champs obligatoires: amountsByTax, invoiceSubCategoryCode
Propriétés:
- **itemNumber**: integer (int32) — The item number
- **accountingCode**: string — The accounting code
- **description**: string — The description
- **quantity**: number — The quantity. Deprecated in v5.2
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **invoiceSubCategoryCode**: string — The invoice sub category code
- **userAccountCode**: string — The user account code
- **amountsByTax**: Array<SubcategoryInvoiceAgregateAmountDto> — List of amounts broken down by tax
- **ratedTransactions**: Array<RatedTransactionDto> — List the rated transactions

### SubcategoryInvoiceAgregateAmountDto
List of amounts broken down by tax
Type: object
Propriétés:
- **amountWithoutTax**: number — Amount without tax
- **amountWithTax**: number — Amount with tax
- **amountTax**: number — Tax amount
- **tax**: TaxDto

### TaxDto
Tax applied
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **percent**: number
- **accountingCode**: string
- **languageDescriptions**: Array<LanguageDescriptionDto>
- **customFields**: CustomFieldsDto
- **composite**: boolean
- **subTaxes**: Array<TaxDto>

### RatedTransactionDto
List the rated transactions
Type: object
Champs obligatoires: amountTax, amountWithTax, amountWithoutTax, code, usageDate
Propriétés:
- **usageDate**: string (date-time) — The usage date
- **unitAmountWithoutTax**: number — The unit amount without tax
- **unitAmountWithTax**: number — The unit amount with tax
- **unitAmountTax**: number — The unit amount tax
- **quantity**: number — The quantity
- **inputQuantity**: number — The quantity
- **rawAmountWithoutTax**: number — The raw amount without tax
- **rawAmountWithTax**: number — The raw amount with tax
- **amountWithoutTax**: number — The amount without tax
- **amountWithTax**: number — The amount with tax
- **amountTax**: number — The amount tax
- **code**: string — The code
- **status**: string — The status (Valeurs: OPEN, BILLED, REJECTED, RERATED, CANCELED, PROCESSED)
- **description**: string — The description
- **unityDescription**: string — The unity description
- **priceplanCode**: string — The price plan code
- **doNotTriggerInvoicing**: boolean — indicate if we don't want to trigger invoicing (Contraintes: défaut: false)
- **startDate**: string (date-time) — The start date
- **endDate**: string (date-time) — The end date
- **parameter1**: string — used to set more onformations in case of "DETAILLED" invoice
- **parameter2**: string — used to set more onformations in case of "DETAILLED" invoice
- **parameter3**: string — used to set more onformations in case of "DETAILLED" invoice
- **userAccountCode**: string — The user account code
- **taxCode**: string — Tax applied - code
- **taxPercent**: number — Tax percent
- **invoiceSubCategoryCode**: string — Invoice sub category code
- **sellerCode**: string — Seller code
- **billingAccountCode**: string — BillingAccount code
- **taxClassCode**: string — Charge tax class code
- **inputUnitOfMeasure**: string — The input unit of measure
- **ratingUnitOfMeasure**: string — The rating unit of measure
- **sortIndex**: integer (int32) — Sorting index

### DiscountInvoiceAggregateDto
List of Discount aggregates
Type: object
Champs obligatoires: amountsByTax, invoiceSubCategoryCode
Propriétés:
- **itemNumber**: integer (int32) — The item number
- **accountingCode**: string — The accounting code
- **description**: string — The description
- **quantity**: number — The quantity. Deprecated in v5.2
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **invoiceSubCategoryCode**: string — The invoice sub category code
- **userAccountCode**: string — The user account code
- **amountsByTax**: Array<SubcategoryInvoiceAgregateAmountDto> — List of amounts broken down by tax
- **ratedTransactions**: Array<RatedTransactionDto> — List the rated transactions
- **discountPlanItemCode**: string — The discount plan item code
- **discountPercent**: number — The discount percent

### TaxInvoiceAggregateDto
The tax aggregates
Type: object
Propriétés:
- **description**: string — The description
- **itemNumber**: integer (int32) — The item number
- **amountWithoutTax**: number — The amount without tax
- **amountTax**: number — The amount tax
- **amountWithTax**: number — The amount with tax
- **taxCode**: string — The taxes code
- **taxPercent**: number — The tax percent applied
- **accountingCode**: string — The accounting code

### RecordedInvoiceDto
The recorded invoice dto
Type: object
Propriétés:
- **id**: integer (int64) — The id of account operation
- **dueDate**: string (date-time) — The due date
- **type**: string — The type
- **transactionDate**: string (date-time) — he transaction date
- **transactionCategory**: string — The transaction category (Valeurs: DEBIT, CREDIT)
- **reference**: string — The reference
- **accountCode**: string — The account code
- **accountingCode**: string — The accounting code
- **accountCodeClientSide**: string — The account code client side
- **amount**: number — The amount
- **amountWithoutTax**: number — The amount without tax
- **taxAmount**: number — The tax amount
- **matchingAmount**: number — The matching amount
- **unMatchingAmount**: number — The un matching amount
- **matchingStatus**: string — The matching status (Valeurs: O, L, P, C, I, R)
- **code**: string — The occ code
- **description**: string — The occ description
- **customerAccount**: string — The customer account
- **excludedFromDunning**: boolean — The excluded from dunning
- **orderNumber**: string — The order number
- **matchingAmounts**: MatchingAmountsDto
- **otherCreditAndCharge**: OtherCreditAndChargeDto
- **recordedInvoice**: RecordedInvoiceDto
- **rejectedPayment**: RejectedPaymentDto
- **bankLot**: string — The bank lot
- **bankReference**: string — The bank reference
- **bankCollectionDate**: string (date-time) — The bank collection date
- **depositDate**: string (date-time) — The deposit date
- **paymentMethod**: string — The payment method
- **customFields**: CustomFieldsDto
- **paymentInfo**: string — The payment info
- **paymentInfo1**: string — bank code
- **paymentInfo2**: string — code guichet
- **paymentInfo3**: string — Num compte
- **paymentInfo4**: string — RIB
- **paymentInfo5**: string — bankName
- **paymentInfo6**: string — bic
- **billingAccountName**: string — The billing account name
- **paymentHistories**: Array<PaymentHistoryDto> — list of the payment history
- **collectionDate**: string (date-time) — A collection date
- **journalCode**: string — The journal code
- **status**: string — Account operation status (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED) (Contraintes: défaut: "POSTED")
- **reason**: string — Account operation rejection reason (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **accountingExportFile**: string — Accounting export file
- **accountingDate**: string (date-time) — Accounting date
- **productionDate**: string (date-time) — The production date
- **invoiceDate**: string (date-time) — The invoice date
- **netToPay**: number — The net to pay

### MatchingAmountsDto
The matching amounts
Type: object
Propriétés:
- **matchingAmount**: Array<MatchingAmountDto> — List of the matching amount

### MatchingAmountDto
List of the matching amount
Type: object
Propriétés:
- **matchingCode**: string — The matching code
- **matchingAmount**: number — The matching amount
- **matchingCodes**: MatchingCodesDto

### MatchingCodesDto
The matching codes
Type: object
Propriétés:
- **matchingCode**: Array<MatchingCodeDto> — List of the matching code

### MatchingCodeDto
List of the matching code
Type: object
Propriétés:
- **code**: string — The code of matching code
- **matchingType**: string — The matching type (Valeurs: A, M, A_TIP, A_DERICT_DEBIT)
- **matchingDate**: string (date-time) — The matching date
- **matchingAmountCredit**: number — The matching amount credit
- **matchingAmountDebit**: number — The matching amount debit

### OtherCreditAndChargeDto
The other credit and charge
Type: object
Propriétés:
- **id**: integer (int64) — The id of account operation
- **dueDate**: string (date-time) — The due date
- **type**: string — The type
- **transactionDate**: string (date-time) — he transaction date
- **transactionCategory**: string — The transaction category (Valeurs: DEBIT, CREDIT)
- **reference**: string — The reference
- **accountCode**: string — The account code
- **accountingCode**: string — The accounting code
- **accountCodeClientSide**: string — The account code client side
- **amount**: number — The amount
- **amountWithoutTax**: number — The amount without tax
- **taxAmount**: number — The tax amount
- **matchingAmount**: number — The matching amount
- **unMatchingAmount**: number — The un matching amount
- **matchingStatus**: string — The matching status (Valeurs: O, L, P, C, I, R)
- **code**: string — The occ code
- **description**: string — The occ description
- **customerAccount**: string — The customer account
- **excludedFromDunning**: boolean — The excluded from dunning
- **orderNumber**: string — The order number
- **matchingAmounts**: MatchingAmountsDto
- **otherCreditAndCharge**: OtherCreditAndChargeDto
- **recordedInvoice**: RecordedInvoiceDto
- **rejectedPayment**: RejectedPaymentDto
- **bankLot**: string — The bank lot
- **bankReference**: string — The bank reference
- **bankCollectionDate**: string (date-time) — The bank collection date
- **depositDate**: string (date-time) — The deposit date
- **paymentMethod**: string — The payment method
- **customFields**: CustomFieldsDto
- **paymentInfo**: string — The payment info
- **paymentInfo1**: string — bank code
- **paymentInfo2**: string — code guichet
- **paymentInfo3**: string — Num compte
- **paymentInfo4**: string — RIB
- **paymentInfo5**: string — bankName
- **paymentInfo6**: string — bic
- **billingAccountName**: string — The billing account name
- **paymentHistories**: Array<PaymentHistoryDto> — list of the payment history
- **collectionDate**: string (date-time) — A collection date
- **journalCode**: string — The journal code
- **status**: string — Account operation status (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED) (Contraintes: défaut: "POSTED")
- **reason**: string — Account operation rejection reason (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **accountingExportFile**: string — Accounting export file
- **accountingDate**: string (date-time) — Accounting date
- **operationDate**: string (date-time)

### RejectedPaymentDto
The rejected paymen
Type: object
Propriétés:
- **id**: integer (int64) — The id of account operation
- **dueDate**: string (date-time) — The due date
- **type**: string — The type
- **transactionDate**: string (date-time) — he transaction date
- **transactionCategory**: string — The transaction category (Valeurs: DEBIT, CREDIT)
- **reference**: string — The reference
- **accountCode**: string — The account code
- **accountingCode**: string — The accounting code
- **accountCodeClientSide**: string — The account code client side
- **amount**: number — The amount
- **amountWithoutTax**: number — The amount without tax
- **taxAmount**: number — The tax amount
- **matchingAmount**: number — The matching amount
- **unMatchingAmount**: number — The un matching amount
- **matchingStatus**: string — The matching status (Valeurs: O, L, P, C, I, R)
- **code**: string — The occ code
- **description**: string — The occ description
- **customerAccount**: string — The customer account
- **excludedFromDunning**: boolean — The excluded from dunning
- **orderNumber**: string — The order number
- **matchingAmounts**: MatchingAmountsDto
- **otherCreditAndCharge**: OtherCreditAndChargeDto
- **recordedInvoice**: RecordedInvoiceDto
- **rejectedPayment**: RejectedPaymentDto
- **bankLot**: string — The bank lot
- **bankReference**: string — The bank reference
- **bankCollectionDate**: string (date-time) — The bank collection date
- **depositDate**: string (date-time) — The deposit date
- **paymentMethod**: string — The payment method
- **customFields**: CustomFieldsDto
- **paymentInfo**: string — The payment info
- **paymentInfo1**: string — bank code
- **paymentInfo2**: string — code guichet
- **paymentInfo3**: string — Num compte
- **paymentInfo4**: string — RIB
- **paymentInfo5**: string — bankName
- **paymentInfo6**: string — bic
- **billingAccountName**: string — The billing account name
- **paymentHistories**: Array<PaymentHistoryDto> — list of the payment history
- **collectionDate**: string (date-time) — A collection date
- **journalCode**: string — The journal code
- **status**: string — Account operation status (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED) (Contraintes: défaut: "POSTED")
- **reason**: string — Account operation rejection reason (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **accountingExportFile**: string — Accounting export file
- **accountingDate**: string (date-time) — Accounting date
- **rejectedType**: string — The rejected type (Valeurs: A, M)
- **rejectedDate**: string (date-time) — The rejected date
- **rejectedDescription**: string — The rejected description
- **rejectedCode**: string

### PaymentHistoryDto
list of the payment history
Type: object
Propriétés:
- **customerAccountCode**: string — The customer Account Code
- **sellerCode**: string — The seller Code
- **customerCode**: string — The customer Code
- **customerAccountName**: string — The customer Account Name
- **operationDate**: string (date-time) — The operation date
- **updatedStatusDate**: string (date-time) — The updated status date
- **lastUpdateDate**: string (date-time) — The last Update Date
- **amountCts**: integer (int64) — The amount in cts
- **syncStatus**: string — The synchrone status (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **asyncStatus**: string — The asynchrone status (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **status**: string — The status (Valeurs: ACCEPTED, PENDING, REJECTED, ERROR, NOT_PROCESSED)
- **externalPaymentId**: string — he external payment id
- **errorCode**: string — The error code
- **errorMessage**: string — The error message
- **errorType**: string — The error type, rejected or error (Valeurs: ERROR, REJECT)
- **paymentGatewayCode**: string — The payment gateway
- **paymentMethodType**: string — The payment method (Valeurs: CHECK, DIRECTDEBIT, WIRETRANSFER, CARD, PAYPAL, STRIPE, CASH)
- **paymentMethodName**: string — The payment method name: card number or mandat
- **operationCategory**: string — The operation category, credit for payment or debit for refund (Valeurs: DEBIT, CREDIT)
- **payment**: AccountOperationDto
- **refund**: AccountOperationDto
- **listAoPaid**: AccountOperationsDto

### AccountOperationDto
Type: object
Propriétés:
- **id**: integer (int64) — The id of account operation
- **dueDate**: string (date-time) — The due date
- **type**: string — The type
- **transactionDate**: string (date-time) — he transaction date
- **transactionCategory**: string — The transaction category (Valeurs: DEBIT, CREDIT)
- **reference**: string — The reference
- **accountCode**: string — The account code
- **accountingCode**: string — The accounting code
- **accountCodeClientSide**: string — The account code client side
- **amount**: number — The amount
- **amountWithoutTax**: number — The amount without tax
- **taxAmount**: number — The tax amount
- **matchingAmount**: number — The matching amount
- **unMatchingAmount**: number — The un matching amount
- **matchingStatus**: string — The matching status (Valeurs: O, L, P, C, I, R)
- **code**: string — The occ code
- **description**: string — The occ description
- **customerAccount**: string — The customer account
- **excludedFromDunning**: boolean — The excluded from dunning
- **orderNumber**: string — The order number
- **matchingAmounts**: MatchingAmountsDto
- **otherCreditAndCharge**: OtherCreditAndChargeDto
- **recordedInvoice**: RecordedInvoiceDto
- **rejectedPayment**: RejectedPaymentDto
- **bankLot**: string — The bank lot
- **bankReference**: string — The bank reference
- **bankCollectionDate**: string (date-time) — The bank collection date
- **depositDate**: string (date-time) — The deposit date
- **paymentMethod**: string — The payment method
- **customFields**: CustomFieldsDto
- **paymentInfo**: string — The payment info
- **paymentInfo1**: string — bank code
- **paymentInfo2**: string — code guichet
- **paymentInfo3**: string — Num compte
- **paymentInfo4**: string — RIB
- **paymentInfo5**: string — bankName
- **paymentInfo6**: string — bic
- **billingAccountName**: string — The billing account name
- **collectionDate**: string (date-time) — A collection date
- **journalCode**: string — The journal code
- **status**: string — Account operation status (Valeurs: POSTED, REJECTED, EXPORTED, EXPORT_FAILED) (Contraintes: défaut: "POSTED")
- **reason**: string — Account operation rejection reason (Valeurs: REJECTED, FORCED, CLOSED_PERIOD)
- **accountingExportFile**: string — Accounting export file
- **accountingDate**: string (date-time) — Accounting date

### AccountOperationsDto
The list ao paid
Type: object
Propriétés:
- **accountOperation**: Array<AccountOperationDto>

### PaymentScheduleInstancesDto
list of related payment schedule instances
Type: object
Propriétés:
- **actionStatus**: ActionStatus
- **paging**: PagingAndFiltering
- **instances**: Array<PaymentScheduleInstanceDto> — list of payment schedule instance

### PagingAndFiltering
Type: object
Propriétés:
- **fullTextFilter**: string — Full text search filter. Mutually exclusive with filters attribute. fullTextFilter has priority
- **filters**: object — Search filters (key = Filter key, value = search pattern or value).
- **fields**: string — Data retrieval options/fieldnames separated by a comma
- **offset**: integer (int32) — Pagination - from record number
- **limit**: integer (int32) — Pagination - number of items to retrieve
- **sortBy**: string — Sorting - field to sort by - a field from a main entity being searched. See Data model for a list of fields
- **sortOrder**: string — Sorting - sort ordee (Valeurs: ASCENDING, DESCENDING)
- **multiSortOrder**: string
- **totalNumberOfRecords**: integer (int32)
- **loadReferenceDepth**: integer (int32)

### PaymentScheduleInstanceDto
list of payment schedule instance
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **endDate**: string (date-time) — The end date
- **startDate**: string (date-time) — The start date
- **amount**: number — The amount
- **calendarCode**: string — The calendar code
- **status**: string — The status of the payment schedule instance (Valeurs: IN_PROGRESS, OBSOLETE, DONE, CANCELLED, TERMINATED)
- **statusDate**: string (date-time) — The status date
- **paymentScheduleTemplateCode**: string — The payment schedule template code
- **paymentDayInMonth**: integer (int32) — The payment day in month
- **serviceInstanceTemplateCode**: string — The service instance template code
- **serviceInstanceId**: integer (int64) — The service instance id
- **subscriptionCode**: string — The subscription code
- **paymentScheduleInstanceBalanceDto**: PaymentScheduleInstanceBalanceDto
- **items**: Array<PaymentScheduleInstanceItemDto> — List of the payment schedule instance item
- **customFields**: CustomFieldsDto

### PaymentScheduleInstanceBalanceDto
The payment schedule instance balance
Type: object
Propriétés:
- **nbSchedulePaid**: integer (int32) — The number schedule paid
- **nbScheduleIncoming**: integer (int32) — The number schedule incoming
- **sumAmountPaid**: number — The sum amount paid
- **sumAmountIncoming**: number — The sum amount incoming

### PaymentScheduleInstanceItemDto
List of the payment schedule instance item
Type: object
Champs obligatoires: amount, requestPaymentDate
Propriétés:
- **id**: integer (int64) — The id of the payment schedule instance item
- **dueDate**: string (date-time) — The due date
- **requestPaymentDate**: string (date-time) — The request payment date
- **recordedInvoice**: RecordedInvoiceDto
- **last**: boolean
- **paid**: boolean
- **amount**: number

### UserAccountsDto
Use for GET / LIST only
Type: object
Propriétés:
- **userAccount**: Array<UserAccountDto>

### UserAccountDto
Type: object
Champs obligatoires: billingAccount, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **externalRef1**: string — The external ref 1
- **externalRef2**: string — The external ref 2
- **name**: NameDto
- **address**: AddressDto
- **jobTitle**: string — The job title
- **businessAccountModel**: BusinessEntityDto
- **customFields**: CustomFieldsDto
- **loaded**: boolean
- **vatNo**: string — The vat no
- **registrationNo**: string — The registration no
- **contactInformation**: ContactInformationDto
- **minimumAmountEl**: string — Expression to determine minimum amount value
- **minimumLabelEl**: string — Expression to determine rated transaction description to reach minimum amount value
- **minimumTargetAccount**: string — The billing account code to be used when calculating the min amount billable for Customer and CA
- **minimumAmountElSpark**: string — Expression to determine minimum amount value - for Spark
- **minimumLabelElSpark**: string — Expression to determine rated transaction description to reach minimum amount value - for Spark
- **minimumChargeTemplate**: string — Corresponding to minimum one shot charge template code
- **isCompany**: boolean — indicate if this is a company
- **legalEntityType**: TitleDto
- **parentUserAccountCode**: string
- **userAccountCodes**: Array<string>
- **billingAccount**: string
- **billingAccountDescription**: string
- **customerAccount**: string
- **customerAccountDescription**: string
- **customer**: string
- **customerDescription**: string
- **subscriptionDate**: string (date-time)
- **terminationDate**: string (date-time)
- **status**: string (Valeurs: ACTIVE, CANCELED, TERMINATED, CLOSED)
- **statusDate**: string (date-time)
- **terminationReason**: string
- **isConsumer**: boolean
- **infoGdpr**: Array<GDPRInfoDto>
- **subscriptions**: SubscriptionsDto
- **parentUserAccount**: UserAccountDto

### GDPRInfoDto
information GDPR
Type: object
Propriétés:
- **key**: string
- **value**: object

### SubscriptionsDto
Type: object
Propriétés:
- **subscription**: Array<SubscriptionDto>

### SubscriptionDto
Type: object
Champs obligatoires: billingCycle, code, offerTemplate, seller, subscriptionDate, userAccount, versionNumber
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **versionNumber**: integer (int32)
- **nextVersion**: integer (int64)
- **previousVersion**: integer (int64)
- **userAccount**: string
- **offerTemplate**: string
- **subscriptionDate**: string (date-time)
- **terminationDate**: string (date-time)
- **endAgreementDate**: string (date-time)
- **status**: string (Valeurs: CREATED, ACTIVE, CANCELED, RESILIATED, CLOSED, SUSPENDED, PENDING)
- **statusDate**: string (date-time)
- **validityDate**: string (date-time)
- **customFields**: CustomFieldsDto
- **accesses**: AccessesDto
- **services**: ServiceInstancesDto
- **products**: ProductsDto
- **productInstances**: Array<ProductInstanceDto>
- **productsToInstantiate**: Array<ProductToInstantiateDto>
- **terminationReason**: string
- **orderNumber**: string
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **minimumInvoiceSubCategory**: string
- **minimumChargeTemplate**: string
- **subscribedTillDate**: string (date-time)
- **renewed**: boolean
- **renewalNotifiedDate**: string (date-time)
- **renewalRule**: SubscriptionRenewalDto
- **billingCycle**: string
- **seller**: string — Seller code
- **autoEndOfEngagement**: boolean
- **ratingGroup**: string
- **electronicBilling**: boolean
- **email**: string
- **mailingType**: string
- **emailTemplate**: string
- **ccedEmails**: string
- **discountPlansForInstantiation**: Array<DiscountPlanDto>
- **discountPlansForTermination**: Array<string>
- **discountPlanInstances**: Array<DiscountPlanInstanceDto>
- **paymentMethod**: PaymentMethodDto
- **customerService**: string
- **salesPersonName**: string — The sales person name
- **discountPlanInstancesToRemove**: Array<string>
- **contractCode**: string — code of existing contract

### AccessesDto
Type: object
Propriétés:
- **access**: Array<AccessDto>

### AccessDto
Type: object
Champs obligatoires: subscription
Propriétés:
- **code**: string — code of the access
- **subscription**: string — code of the subscription
- **subscriptionValidityDate**: string (date-time) — code of existing
- **startDate**: string (date-time) — start date of the access
- **endDate**: string (date-time) — end date of the access
- **customFields**: CustomFieldsDto
- **disabled**: boolean
- **subscriptionValidity**: string (date-time)

### ServiceInstancesDto
Type: object
Propriétés:
- **serviceInstance**: Array<ServiceInstanceDto>

### ServiceInstanceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **status**: string (Valeurs: ACTIVE, INACTIVE, CANCELED, TERMINATED, SUSPENDED, CLOSED, PENDING)
- **statusDate**: string (date-time)
- **subscriptionDate**: string (date-time)
- **reactivationDate**: string (date-time)
- **terminationDate**: string (date-time)
- **priceVersionDateSetting**: string (Valeurs: QUOTE, DELIVERY, RENEWAL, EVENT)
- **priceVersionDate**: string (date-time)
- **quantity**: number
- **terminationReason**: string
- **endAgreementDate**: string (date-time)
- **customFields**: CustomFieldsDto
- **attributeInstances**: Array<AttributeInstanceDto>
- **orderNumber**: string
- **rateUntilDate**: string (date-time)
- **amountPS**: number
- **calendarPSCode**: string
- **paymentDayInMonthPS**: integer (int32)
- **minimumAmountEl**: string
- **minimumLabelEl**: string
- **autoEndOfEngagement**: boolean
- **minimumChargeTemplate**: string
- **subscribedTillDate**: string (date-time)
- **serviceRenewal**: SubscriptionRenewalDto
- **deliveryDate**: string (date-time)

### AttributeInstanceDto
Type: object
Propriétés:
- **attributeCode**: string
- **parentAttributeValueId**: integer (int64)
- **assignedAttributeValueIds**: Array<integer (int64)>
- **stringValue**: string
- **dateValue**: string (date-time)
- **doubleValue**: number (double)
- **customFieldDto**: CustomFieldsDto
- **booleanValue**: boolean

### SubscriptionRenewalDto
Type: object
Propriétés:
- **initialTermType**: string — intial term type (Valeurs: RECURRING, CALENDAR, FIXED)
- **renewalTermType**: string — renewal term type (Valeurs: RECURRING, CALENDAR)
- **initialyActiveFor**: integer (int32) — The initial period for which the subscription will be active
- **initialyActiveForUnit**: string — The initial period for which the subscription will be active (Valeurs: MONTH, DAY)
- **calendarInitialyActiveFor**: CalendarDto
- **autoRenew**: boolean — Should subscription be renewed automatically
- **daysNotifyRenewal**: integer (int32) — Number of days before the end of term to trigger notification event
- **endOfTermAction**: string — Whether the Subscription should be suspended or terminated if not renewed (Valeurs: SUSPEND, TERMINATE)
- **terminationReasonCode**: string — terminating subscription if endOfTermAction is to terminate
- **renewFor**: integer (int32) — The period to renew subscription for
- **calendarRenewFor**: CalendarDto
- **renewForUnit**: string — he period to renew subscription for (Valeurs: MONTH, DAY)
- **extendAgreementPeriodToSubscribedTillDate**: boolean — Whether end of agreement date should be matched to the active till date

### CalendarDto
calendar associated to subscription renewal
Type: object
Champs obligatoires: calendarType, code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **calendarType**: string — calendar type (Valeurs: YEARLY, DAILY, PERIOD, INTERVAL, INTERSECT, UNION, APPEND, BANKING, FIXED)
- **fixedDates**: Array<string> — list of fixed date
- **days**: Array<DayInYearDto> — list of the day
- **hours**: Array<HourInDayDto> — list of the hour
- **periodLength**: integer (int32) — Period length
- **periodUnit**: string — Period measurement unit (Valeurs: MONTH, DAY_OF_MONTH, HOUR_OF_DAY, MINUTE, SECOND)
- **nbPeriods**: integer (int32) — Number of periods
- **joinCalendar1Code**: string — Code of the first calendar to intersect/union
- **joinCalendar2Code**: string — Code of the second calendar to intersect/union
- **intervalType**: string — Interval type (Valeurs: DAY, HOUR, WDAY)
- **intervals**: Array<CalendarDateIntervalDto> — List of intervals
- **weekendBegin**: integer (int32) — The weekend begin
- **weekendEnd**: integer (int32)
- **endDate**: string (date-time) — The end dat
- **startDate**: string (date-time) — The start date
- **initDateEL**: string — Calendar initialization date - expression to determine a value for calendar initialization date (Contraintes: longueur min: 0 · longueur max: 2000)
- **holidays**: Array<CalendarHolidayDto> — list of the days of holiday
- **languageDescriptions**: Array<LanguageDescriptionDto> — lsit of language description

### DayInYearDto
list of the day
Type: object
Propriétés:
- **day**: integer (int32) — day in the year
- **month**: string — month of the year (Valeurs: JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER)

### HourInDayDto
list of the hour
Type: object
Propriétés:
- **hour**: integer (int32) — hour
- **min**: integer (int32) — minute of the hours

### CalendarDateIntervalDto
List of intervals
Type: object
Propriétés:
- **intervalBegin**: integer (int32) — The interval begin
- **intervalEnd**: integer (int32) — The interval end

### CalendarHolidayDto
list of the days of holiday
Type: object
Propriétés:
- **holidayBegin**: integer (int32) — The holiday begin
- **holidayEnd**: integer (int32) — The holiday end

### ProductsDto
Type: object
Propriétés:
- **products**: Array<ProductDto>

### ProductDto
Type: object
Propriétés:
- **code**: string
- **description**: string
- **chargeDate**: string (date-time)
- **quantity**: number
- **amountWithoutTax**: number
- **amountWithTax**: number
- **criteria1**: string
- **criteria2**: string
- **criteria3**: string
- **customFields**: CustomFieldsDto

### ProductInstanceDto
Type: object
Champs obligatoires: code
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **applicationDate**: string (date-time)
- **quantity**: number
- **orderNumber**: string
- **customFields**: CustomFieldsDto

### ProductToInstantiateDto
Type: object
Champs obligatoires: quantity
Propriétés:
- **productCode**: string
- **quantity**: number
- **deliveryDate**: string (date-time)
- **attributeInstances**: Array<OrderAttributeDto>
- **customFields**: CustomFieldsDto

### OrderAttributeDto
Type: object
Propriétés:
- **attributeCode**: string
- **parentAttributeValueId**: integer (int64)
- **assignedAttributeValueIds**: Array<integer (int64)>
- **stringValue**: string — The string value
- **dateValue**: string (date-time) — The date value
- **doubleValue**: number (double) — The double value
- **customFieldDto**: CustomFieldsDto
- **booleanValue**: boolean — The boolean value
- **commercialOrderId**: integer (int64) — The commercial order id
- **orderAttributeCode**: string — The order attribute code
- **attributeType**: string — The order attribute type (Valeurs: INFO, LIST_TEXT, LIST_MULTIPLE_TEXT, LIST_NUMERIC, LIST_MULTIPLE_NUMERIC, TEXT, NUMERIC, INTEGER, DATE, CALENDAR, EMAIL, PHONE, TOTAL, COUNT, EXPRESSION_LANGUAGE, BOOLEAN)
- **orderAttributeId**: integer (int64) — The order attribute id
- **orderLotCode**: string — The order lot code
- **orderProductId**: integer (int64) — The order product id
- **orderOfferId**: integer (int64) — The order offer id
- **accessPoint**: string — The access point

### DiscountPlanDto
List of discount plans. Use in instantiating a discount plan instance
Type: object
Champs obligatoires: code, discountPlanType
Propriétés:
- **id**: integer (int64)
- **code**: string — The code of the entity
- **description**: string — The description of the entity
- **updatedCode**: string — The changed code
- **disabled**: boolean
- **startDate**: string (date-time) — Effective start date
- **endDate**: string (date-time) — Effective end date
- **defaultDuration**: integer (int32) — Length of effectivity.<br/> If start date is not null and end date is null, we use the defaultDuration from the discount plan.<br />If start date is null, and defaultDuration is not null, defaultDuration is ignored.
- **durationUnit**: string — Unit of duration (Valeurs: MONTH, DAY)
- **customFields**: CustomFieldsDto
- **discountPlanItems**: Array<DiscountPlanItemDto> — list of discount plan item
- **expressionEl**: string — expression language
- **discountPlanType**: string — Type of the discount plan. Defines on which entity the discount plan can be applied (Valeurs: QUOTE, OFFER, PRODUCT, INVOICE, INVOICE_LINE, PROMO_CODE)
- **status**: string — Status of the discount plan. The default value is DRAFT (Valeurs: ACTIVE, INACTIVE, DRAFT, IN_USE, EXPIRED)
- **statusDate**: string (date-time) — Datetime of last status update, Automatically filed at creation and status update
- **initialQuantity**: integer (int64) — The initial available quantity for the discount plan, For types QUOTE, INVOICE, INVOICE_LINE, the value is forced to 0
- **usedQuantity**: integer (int64) — How many times the discount plan has been used.<br/> If intialQuantity is not 0, then reaching the initialQuantity expires the discount plan.<br />The value is incremented every time the discountPlan is instantiated on any Billing Account, Subscription, or ProductInstance
- **applicationLimit**: integer (int64) — How many times the discount can be applied on a given entity (BillingAccount, Subscription, Product Instance).<br />Default value is 0 = infinite.<br/>Useful for one-time discounts.
- **applicationFilterEL**: string — A boolean EL that must evaluate to true to allow the discount plan to be applied<br/>It will have access to the variables.<br />entity: the entity on which we want to apply the discount
- **incompatibleDiscountPlans**: Array<DiscountPlanDto> — A list of discounts plans that cannot be active at the same time on an entity instance.
- **applicableEntities**: Array<ApplicableEntityDto> — A list of entities (CustomerCategory, Offer, Product, Article).
- **applicableOnOverriddenPrice**: boolean
- **sequence**: integer (int32) — defines the order in which discount plans are applied
- **applicableOnDiscountedPrice**: boolean — determines whether the discount plan is applicable on the gross or discounted amount
- **applicableOnContractPrice**: boolean — If false then discount plan will be ignored if event price comes from a contract

### DiscountPlanItemDto
list of discount plan item
Type: object
Champs obligatoires: code, discountPlanCode, discountValue, discountValueEL
Propriétés:
- **code**: string — The code
- **discountPlanCode**: string — Discount plan code
- **invoiceCategoryCode**: string — Invoice category code
- **invoiceSubCategoryCode**: string — Invoice sub category code
- **accountingCode**: string — Accounting code
- **expressionEl**: string — Expression to determine if discount applies
- **disabled**: boolean — Is entity disabled. Value is ignored in Update action - use enable/disable API instead
- **discountPlanItemType**: string — Type of discount, whether absolute or percentage (Valeurs: PERCENTAGE, FIXED) (Contraintes: défaut: "PERCENTAGE")
- **discountValue**: number — The absolute or percentage discount amount
- **discountValueEL**: string — The absolute or percentage discount amount EL
- **targetAccountingArticleCodes**: Array<string> — The target accounting article codes
- **pricePlanMatrixCode**: string — Price plan matrix code
- **customFields**: CustomFieldsDto
- **allowToNegate**: boolean — <ul><li>If true, then allows to negate the amount of affected invoice lines</li><li>If fase, then amount for the discount line produce by the discount plan item cannot exceed the amount of discounted lines</li></ul> (Contraintes: défaut: false)
- **description**: string — description of discount plan item
- **priority**: integer (int64) — The lower number, the higher the priority is
- **accountingArticleCode**: string — accounting article code
- **applyByArticle**: boolean — Apply by article
- **sequence**: integer (int32) — defines the order in which discount plans are applied
- **lastDiscount**: boolean — last discount

### ApplicableEntityDto
A list of entities (CustomerCategory, Offer, Product, Article).
Type: object
Propriétés:
- **code**: string — code of the entity applicable
- **entityClass**: string — name of the class applicable

### DiscountPlanInstanceDto
Use to return the active discount plans for this entity
Type: object
Propriétés:
- **discountPlan**: string — The discount plan code
- **billingAccount**: string — The billingAccount code
- **subscription**: string — The subscription code
- **startDate**: string (date-time) — Effectivity start date
- **endDate**: string (date-time) — Effectivity end date
- **customFields**: CustomFieldsDto
- **status**: string — Status of this specific discount plan instance (Valeurs: ACTIVE, APPLIED, IN_USE, EXPIRED)
- **statusDate**: string (date-time) — Datetime of last status change
- **applicationCount**: integer (int64) — How many times the discount has been used

### AdditionalDetailsDto
additional detail
Type: object
Propriétés:
- **companyName**: string — name of the company
- **position**: string — position
- **instantMessengers**: string — instant messenger

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
