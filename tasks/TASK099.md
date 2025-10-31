# TASK099 — Service Order

## Contexte
Le service « Order » est défini par le tag OpenAPI du même nom dans `opencell.json` et doit être implémenté dans l'interface Next.js.

## Objectifs
- Connecter l’ensemble des opérations listées ci-dessous via le client généré et les hooks TanStack Query.
- Concevoir les écrans MUI (liste, détail, formulaires) conformément aux standards établis.
- Garantir que chaque tableau de la vue liste propose une pagination alignée sur la liste Clients actuelle.
- Couvrir les scénarios critiques par des tests unitaires (Jest/RTL) et des tests end-to-end (Playwright).

## Notes
- Description OpenAPI : @%Order
- S’appuyer sur AGENTS.md et documenter toute hypothèse complémentaire dans le README si besoin.
- Chaque schéma listé ci-dessous doit être couvert par une modélisation TypeScript, des helpers de mapping et, le cas échéant, des formulaires MUI.

## Détails OpenAPI

### Aperçu des opérations

| Méthode | Chemin | Résumé | OperationId |
| --- | --- | --- | --- |
| GET | `/api/rest/orderManagement/productOrder` |  Get a list of product orders optionaly filtered by some criteria   |     GET_Order_search |
| POST | `/api/rest/orderManagement/productOrder` |  Place a new product order   |     POST_Order_create |
| PATCH | `/api/rest/orderManagement/productOrder/{id}` |  Modify partially a product order   |     PATCH_Order_{id} |
| GET | `/api/rest/orderManagement/productOrder/{orderId}` |  Get details of a single product order   |     GET_Order_{orderId} |
| DELETE | `/api/rest/orderManagement/productOrder/{orderId}` |  Delete a product order   |     DELETE_Order_{orderId} |
| GET | `/api/rest/orderManagement/productOrder/{orderId}/applicableDueDateDelay` |  Evaluate and return the dueDateDelayEL. It checks the EL in this order: Order, CustomerAccount, BillingCycle.   |     GET_Order_{orderId}_applicableDueDateDelay |
| PUT | `/api/rest/orderManagement/productOrder/{orderId}/simpleDueDateDelay` |  Updates the dueDateDelayEL of an Order.    |     PUT_Order_{orderId}_simpleDueDateDelay |
| GET | `/api/rest/orderManagement/productOrder/validate` |  validate a product order  |     GET_Order_validate |

#### GET /api/rest/orderManagement/productOrder

- Résumé:  Get a list of product orders optionaly filtered by some criteria  
- OperationId:     GET_Order_search
- Description: Get a list of product orders optionaly filtered by some criteria
- Sécurité: Aucune exigence déclarée
- Réponses:
  - default: A list of product orders matching search criteria
    - application/json: object
    - application/xml: object

#### POST /api/rest/orderManagement/productOrder

- Résumé:  Place a new product order  
- OperationId:     POST_Order_create
- Description: Place a new product order
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProductOrder
  - application/xml: ProductOrder
- Réponses:
  - default: Product order information
    - application/json: object
    - application/xml: object

#### PATCH /api/rest/orderManagement/productOrder/{id}

- Résumé:  Modify partially a product order  
- OperationId:     PATCH_Order_{id}
- Description: Modify partially a product order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `id` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: ProductOrder
  - application/xml: ProductOrder
- Réponses:
  - default: An updated product order information
    - application/json: object
    - application/xml: object

#### GET /api/rest/orderManagement/productOrder/{orderId}

- Résumé:  Get details of a single product order  
- OperationId:     GET_Order_{orderId}
- Description: Get details of a single product order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `orderId` (PATH, obligatoire) — string
- Réponses:
  - default: Response of the request
    - application/json: object
    - application/xml: object

#### DELETE /api/rest/orderManagement/productOrder/{orderId}

- Résumé:  Delete a product order  
- OperationId:     DELETE_Order_{orderId}
- Description: Delete a product order
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `orderId` (PATH, obligatoire) — string
- Réponses:
  - default: Response of the delete request
    - application/json: object
    - application/xml: object

#### GET /api/rest/orderManagement/productOrder/{orderId}/applicableDueDateDelay

- Résumé:  Evaluate and return the dueDateDelayEL. It checks the EL in this order: Order, CustomerAccount, BillingCycle.  
- OperationId:     GET_Order_{orderId}_applicableDueDateDelay
- Description: Evaluate and return the dueDateDelayEL. It checks the EL in this order: Order, CustomerAccount, BillingCycle.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `orderId` (PATH, obligatoire) — string
- Réponses:
  - default: Response of the due date delay
    - application/json: object
    - application/xml: object

#### PUT /api/rest/orderManagement/productOrder/{orderId}/simpleDueDateDelay

- Résumé:  Updates the dueDateDelayEL of an Order.   
- OperationId:     PUT_Order_{orderId}_simpleDueDateDelay
- Description: Updates the dueDateDelayEL of an Order.
- Sécurité: Aucune exigence déclarée
- Paramètres:
- `orderId` (PATH, obligatoire) — string
- Corps de requête:
  - optionnel
  - application/json: ApplicableDueDateDelayDto
  - application/xml: ApplicableDueDateDelayDto
- Réponses:
  - default: Response of the update request
    - application/json: object
    - application/xml: object

#### GET /api/rest/orderManagement/productOrder/validate

- Résumé:  validate a product order 
- OperationId:     GET_Order_validate
- Description: validate a product order
- Sécurité: Aucune exigence déclarée
- Corps de requête:
  - optionnel
  - application/json: ProductOrder
  - application/xml: ProductOrder
- Réponses:
  - default: Product order information
    - application/json: object
    - application/xml: object

## Schémas principaux

### ProductOrder
Type: object
Propriétés:
- **id**: string
- **href**: string
- **externalId**: string
- **priority**: string
- **description**: string
- **category**: string
- **state**: string
- **orderDate**: string (date-time)
- **completionDate**: string (date-time)
- **requestedStartDate**: string (date-time)
- **requestedCompletionDate**: string (date-time)
- **expectedCompletionDate**: string (date-time)
- **notificationContact**: string
- **note**: Array<Note>
- **relatedParty**: Array<RelatedParty>
- **orderItem**: Array<ProductOrderItem>
- **customFields**: CustomFieldsDto
- **paymentMethods**: Array<PaymentMethodDto>
- **dueDateDelayEL**: string
- **dueDateDelayELSpark**: string
- **billingCycle**: string
- **electronicBilling**: boolean
- **email**: string
- **mailingType**: string
- **emailTemplate**: string
- **ccedEmails**: string

### Note
Type: object
Propriétés:
- **text**: string
- **date**: string (date-time)
- **author**: string

### RelatedParty
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string
- **validFor**: TimeRange
- **role**: string

### TimeRange
Type: object
Propriétés:
- **startDateTime**: string (date-time)
- **endDateTime**: string (date-time)

### ProductOrderItem
Type: object
Propriétés:
- **id**: string
- **action**: string
- **state**: string
- **appointment**: string
- **billingAccount**: Array<BillingAccount>
- **productOffering**: ProductOffering
- **product**: Product
- **customFields**: CustomFieldsDto

### BillingAccount
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string

### ProductOffering
Type: object
Propriétés:
- **id**: string
- **version**: string
- **href**: string
- **name**: string
- **description**: string
- **lastUpdate**: string (date-time)
- **lifecycleStatus**: string (Valeurs: In Study, In Design, In Test, Active, Launched, Retired, Obsolete, Rejected)
- **validFor**: TimeRange
- **isBundle**: boolean
- **category**: Array<CatalogReference>
- **channel**: Array<Channel>
- **place**: Array<Place>
- **bundledProductOffering**: Array<BundledProductReference>
- **serviceLevelAgreement**: ServiceLevelAgreement
- **productSpecification**: CatalogReference
- **serviceCandidate**: CatalogReference
- **resourceCandidate**: CatalogReference
- **productOfferingTerm**: Array<ProductOfferingTerm>
- **productOfferingPrice**: Array<ProductOfferingPrice>

### CatalogReference
Type: object
Propriétés:
- **id**: string
- **version**: string
- **href**: string
- **name**: string
- **description**: string
- **lastUpdate**: string (date-time)
- **lifecycleStatus**: string (Valeurs: In Study, In Design, In Test, Active, Launched, Retired, Obsolete, Rejected)
- **validFor**: TimeRange

### Channel
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string

### Place
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string
- **address**: AddressDto

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

### BundledProductReference
Type: object
Propriétés:
- **id**: string
- **version**: string
- **href**: string
- **name**: string
- **description**: string
- **lastUpdate**: string (date-time)
- **lifecycleStatus**: string (Valeurs: In Study, In Design, In Test, Active, Launched, Retired, Obsolete, Rejected)
- **validFor**: TimeRange

### ServiceLevelAgreement
Type: object
Propriétés:
- **id**: string
- **href**: string
- **name**: string

### ProductOfferingTerm
Type: object
Propriétés:
- **name**: string
- **description**: string
- **duration**: string
- **validFor**: TimeRange

### ProductOfferingPrice
Type: object
Propriétés:
- **priceType**: string (Valeurs: recurring, one time, usage)
- **unitOfMeasure**: string
- **price**: Price
- **recurringChargePeriod**: string
- **productOfferPriceAlteration**: ProductOfferPriceAlteration
- **name**: string
- **description**: string
- **validFor**: TimeRange

### Price
Type: object
Propriétés:
- **taxIncludedAmount**: string
- **dutyFreeAmount**: string
- **taxRate**: string
- **currencyCode**: string
- **percentage**: number

### ProductOfferPriceAlteration
Type: object
Propriétés:
- **name**: string
- **description**: string
- **validFor**: TimeRange
- **priceType**: string (Valeurs: recurring, one time, usage)
- **unitOfMeasure**: string
- **price**: AlterationPrice
- **recurringChargePeriod**: string
- **priceCondition**: string

### AlterationPrice
Type: object
Propriétés:
- **percentage**: string

### Product
Type: object
Propriétés:
- **id**: string
- **href**: string
- **place**: Place
- **productCharacteristic**: Array<ProductCharacteristic>
- **relatedParty**: Array<RelatedParty>
- **productRelationship**: Array<ProductRelationship>

### ProductCharacteristic
Type: object
Propriétés:
- **name**: string
- **value**: string

### ProductRelationship
Type: object
Propriétés:
- **type**: string
- **product**: Product

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

### ApplicableDueDateDelayDto
Type: object
Propriétés:
- **level**: string (Valeurs: ORDER, CA, BC)
- **custom**: boolean
- **referenceDate**: string (Valeurs: INVOICE_DATE, INVOICE_GENERATION_DATE, END_OF_MONTH_INVOICE_DATE, NEXT_MONTH_INVOICE_DATE, END_OF_MONTH_INVOICE_GENERATION_DATE, NEXT_MONTH_INVOICE_GENERATION_DATE)
- **numberOfDays**: integer (int32)
- **dueDateDelayEL**: string

---

_Dernière mise à jour générée automatiquement à partir de `opencell.json`. Veillez à régénérer ce fichier si le schéma OpenAPI évolue._
