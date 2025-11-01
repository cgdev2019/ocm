import { http, HttpResponse } from 'msw';
import type { CurrencyIsoFormValues } from '@/features/currency-iso/types';
import type { CurrencyFormValues } from '@/features/currency/types';
import type { FilterFormValues } from '@/features/filter/types';
import type {
  CancelBillingRunFormValues,
  CreateBillingRunDto,
  InvoiceValidationDto,
  InvalidateInvoiceDocumentsDto,
} from '@/features/invoicing/types';
import type { AccountingCodeFormValues } from '@/features/accounting-codes/types';
import type { AccountingPeriodDetailValues } from '@/features/accounting-periods/types';
import type {
  AccountingCodeMappingFormValues,
  AccountingCodeMappingInputDto,
} from '@/features/accounting-code-mappings/types';
import type { AccountingArticleDto } from '@/features/accounting-articles/types';
import type { AllowedParentDto } from '@/features/allowed-parents/types';
import type { AuxiliaryAccountDto } from '@/features/auxiliary-codes/types';
import type { ArticleMappingDto } from '@/features/article-mappings/types';
import type { BillingRuleDto } from '@/features/billing-rules/types';
import type {
  EmailTemplateDto,
  EmailTemplateFormValues,
  SMSTemplateDto,
  SMSTemplateFormValues,
  TranslatedHtmlContentFormValue,
  TranslatedSubjectFormValue,
  TranslatedTextContentFormValue,
} from '@/features/communication/types';
import type { ContactCategoryFormValues } from '@/features/contact-categories/types';
import type { ContactDto, ContactFormValues } from '@/features/contacts/types';
import {
  customers,
  customerAccounts,
  currencies,
  currencyIsos,
  filtersData,
  genericCodes,
  invoiceCategoriesData,
  invoiceSequencesData,
  invoiceSubCategoriesData,
  invoiceTypesData,
  invoicingPlansData,
  invoicingPlanItemsData,
  languageIsosData,
  languagesData,
  massImportDetection,
  invoices,
  taxes,
  ratedTransactionsData,
  agedReceivablesData,
  accountingCodesData,
  accountingPeriodsData,
  accountingCodeMappingsData,
  accountingArticlesData,
  accountOperationsData,
  allowedParentsData,
  auxiliaryAccountsData,
  articleMappingsData,
  billingRulesData,
  emailTemplatesData,
  smsTemplatesData,
  contactCategoriesData,
  contactsData,
} from '@/mocks/data';

const cloneEmailTemplateForm = (template: EmailTemplateFormValues): EmailTemplateFormValues => ({
  ...template,
  translatedTextContent: template.translatedTextContent.map((item) => ({ ...item })),
  translatedHtmlContent: template.translatedHtmlContent.map((item) => ({ ...item })),
  translatedSubject: template.translatedSubject.map((item) => ({ ...item })),
});

const cloneSmsTemplateForm = (template: SMSTemplateFormValues): SMSTemplateFormValues => ({
  ...template,
  translatedTextContent: template.translatedTextContent.map((item) => ({ ...item })),
});

const toEmailTemplateDto = (template: EmailTemplateFormValues): EmailTemplateDto => ({
  id: template.id,
  code: template.code,
  description: template.description,
  media: template.media,
  tagStartDelimiter: template.tagStartDelimiter,
  tagEndDelimiter: template.tagEndDelimiter,
  startDate: template.startDate,
  endDate: template.endDate,
  type: template.type,
  textContent: template.textContent,
  translatedTextContent:
    template.translatedTextContent.length > 0
      ? template.translatedTextContent.map((entry) => ({
          languageCode: entry.languageCode,
          textContent: entry.textContent,
        }))
      : undefined,
  subject: template.subject,
  htmlContent: template.htmlContent,
  translatedHtmlContent:
    template.translatedHtmlContent.length > 0
      ? template.translatedHtmlContent.map((entry) => ({
          languageCode: entry.languageCode,
          htmlContent: entry.htmlContent,
        }))
      : undefined,
  translatedSubject:
    template.translatedSubject.length > 0
      ? template.translatedSubject.map((entry) => ({
          languageCode: entry.languageCode,
          subject: entry.subject,
          textContent: entry.textContent,
        }))
      : undefined,
});

const toSmsTemplateDto = (template: SMSTemplateFormValues): SMSTemplateDto => ({
  id: template.id,
  code: template.code,
  description: template.description,
  media: template.media,
  tagStartDelimiter: template.tagStartDelimiter,
  tagEndDelimiter: template.tagEndDelimiter,
  startDate: template.startDate,
  endDate: template.endDate,
  type: template.type,
  textContent: template.textContent,
  translatedTextContent:
    template.translatedTextContent.length > 0
      ? template.translatedTextContent.map((entry) => ({
          languageCode: entry.languageCode,
          textContent: entry.textContent,
        }))
      : undefined,
});

const customersStore = [...customers];
const customerAccountsStore = [...customerAccounts];
const allowedParentsStore: AllowedParentDto[] = allowedParentsData.map((item) => ({
  ...item,
}));
const auxiliaryAccountsStore: AuxiliaryAccountDto[] = auxiliaryAccountsData.map((item) => ({
  ...item,
}));
const invoicesStore = [...invoices];
const taxesStore = [...taxes];
const currencyIsoStore = [...currencyIsos];
const currenciesStore = [...currencies];
const filtersStore = [...filtersData];
const genericCodesStore = [...genericCodes];
const invoiceCategoriesStore = [...invoiceCategoriesData];
const invoiceSequencesStore = [...invoiceSequencesData];
const invoiceSubCategoriesStore = [...invoiceSubCategoriesData];
const invoiceTypesStore = [...invoiceTypesData];
const invoicingPlansStore = [...invoicingPlansData];
const invoicingPlanItemsStore = [...invoicingPlanItemsData];
const languageIsosStore = [...languageIsosData];
const languagesStore = [...languagesData];
const ratedTransactionsStore = [...ratedTransactionsData];
const agedReceivablesStore = agedReceivablesData.map((item) => ({
  ...item,
  buckets: item.buckets?.map((bucket) => ({ ...bucket })) ?? [],
}));
const accountingCodesStore = [...accountingCodesData];
const accountingPeriodsStore: AccountingPeriodDetailValues[] = [...accountingPeriodsData];
const accountingCodeMappingsStore = new Map<string, AccountingCodeMappingFormValues['mappings']>();
let nextAccountingCodeMappingId = 1;

accountingCodeMappingsData.forEach((item) => {
  accountingCodeMappingsStore.set(
    item.accountingArticleCode,
    item.mappings.map((mapping) => ({ ...mapping })),
  );
  item.mappings.forEach((mapping) => {
    if (typeof mapping.id === 'number' && mapping.id >= nextAccountingCodeMappingId) {
      nextAccountingCodeMappingId = mapping.id + 1;
    }
  });
});
const accountingArticlesStore = [...accountingArticlesData];
const articleMappingsStore: ArticleMappingDto[] = articleMappingsData.map((item) => ({
  ...item,
}));
const billingRulesStore: BillingRuleDto[] = billingRulesData.map((item) => ({
  ...item,
}));
const emailTemplatesStore: EmailTemplateFormValues[] = emailTemplatesData.map((item) => cloneEmailTemplateForm(item));
const smsTemplatesStore: SMSTemplateFormValues[] = smsTemplatesData.map((item) => cloneSmsTemplateForm(item));
const contactCategoriesStore: ContactCategoryFormValues[] = contactCategoriesData.map((item) => ({
  ...item,
}));
type ContactStoreItem = ContactFormValues & {
  createdAt: string;
  updatedAt: string;
};

const contactsStore: ContactStoreItem[] = contactsData.map((item, index) => {
  const timestamp = new Date(Date.now() - index * 60 * 60 * 1000).toISOString();
  return {
    ...item,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
});
let nextAccountingArticleId = accountingArticlesStore.reduce(
  (acc, item) => (item.id && item.id > acc ? item.id : acc),
  200,
) + 1;
const accountOperationsStore = accountOperationsData.map((operation) => ({ ...operation }));
let nextReservationId = 200;
const mediationReservations = new Map<number, { availableQuantity: number }>();
let nextBillingRuleId =
  billingRulesStore.reduce((acc, item) => (item.id && item.id > acc ? item.id : acc), 500) + 1;
let nextContactCategoryId =
  contactCategoriesStore.reduce(
    (acc, item) => (typeof item.id === 'number' && item.id > acc ? item.id : acc),
    100,
  ) + 1;
let nextContactIncrement = contactsStore.length + 1;

const success = (message = 'OK') => ({ status: 'SUCCESS', message });

const extractBillingRunId = (input: unknown): number | undefined => {
  if (typeof input === 'number') {
    return input;
  }
  if (input && typeof input === 'object' && 'billingRunId' in input) {
    const value = (input as CancelBillingRunFormValues).billingRunId;
    return typeof value === 'number' ? value : undefined;
  }
  return undefined;
};

const normalizeAccountingCodeMappingInput = (
  payload: AccountingCodeMappingInputDto,
): AccountingCodeMappingFormValues => ({
  accountingArticleCode: payload.accountingArticleCode ?? '',
  mappings:
    payload.accountingCodeMappings?.map((mapping) => ({
      id: mapping.id ?? undefined,
      code: mapping.code ?? undefined,
      accountingArticleCode: mapping.accountingArticleCode ?? payload.accountingArticleCode ?? '',
      accountingCode: mapping.accountingCode ?? undefined,
      sellerCode: mapping.sellerCode ?? undefined,
      sellerCountryCode: mapping.sellerCountryCode ?? undefined,
      billingCountryCode: mapping.billingCountryCode ?? undefined,
      billingCurrencyCode: mapping.billingCurrencyCode ?? undefined,
      criteriaElValue: mapping.criteriaElValue ?? undefined,
    })) ?? [],
});

const toAccountingCodeMappingResponse = (
  accountingArticleCode: string,
  mappings: AccountingCodeMappingFormValues['mappings'],
): AccountingCodeMappingInputDto => ({
  accountingArticleCode,
  accountingCodeMappings: mappings.map((mapping) => ({
    id: mapping.id,
    code: mapping.code,
    accountingArticleCode: mapping.accountingArticleCode ?? accountingArticleCode,
    accountingCode: mapping.accountingCode,
    sellerCode: mapping.sellerCode,
    sellerCountryCode: mapping.sellerCountryCode,
    billingCountryCode: mapping.billingCountryCode,
    billingCurrencyCode: mapping.billingCurrencyCode,
    criteriaElValue: mapping.criteriaElValue,
  })),
});

const findCustomer = (code: string) => customersStore.find((c) => c.code === code);
const findCustomerAccount = (code: string) => customerAccountsStore.find((c) => c.code === code);
const findTax = (code: string) => taxesStore.find((t) => t.code === code);
const findCurrencyIso = (code: string) => currencyIsoStore.find((item) => item.code === code);
const findCurrency = (code: string) => currenciesStore.find((item) => item.code === code);
const findFilter = (code: string) => filtersStore.find((item) => item.code === code);
const findGenericCode = (entityClass: string) =>
  genericCodesStore.find((item) => item.entityClass === entityClass);
const findInvoiceCategory = (code: string) =>
  invoiceCategoriesStore.find((item) => item.code === code);
const findInvoiceSequence = (code: string) => invoiceSequencesStore.find((item) => item.code === code);
const findInvoiceSubCategory = (code: string) =>
  invoiceSubCategoriesStore.find((item) => item.code === code);
const findInvoiceType = (code: string) => invoiceTypesStore.find((item) => item.code === code);
const findInvoicingPlan = (code: string) => invoicingPlansStore.find((item) => item.code === code);
const findInvoicingPlanItem = (code: string) =>
  invoicingPlanItemsStore.find((item) => item.code === code);
const findLanguageIso = (code: string) => languageIsosStore.find((item) => item.code === code);
const findLanguage = (code: string) => languagesStore.find((item) => item.code === code);
const findAccountingCode = (code: string) => accountingCodesStore.find((item) => item.code === code);
const findAccountingPeriod = (fiscalYear: string) =>
  accountingPeriodsStore.find((item) => item.fiscalYear === fiscalYear);
const findAccountOperation = (id: number) => accountOperationsStore.find((item) => item.id === id);
const findContact = (code: string) => contactsStore.find((item) => item.code === code);

const normalizeContactInformation = (value: unknown): { email?: string; phone?: string; mobile?: string } => {
  if (!value || typeof value !== 'object') {
    return {};
  }

  const email = 'email' in value && typeof (value as { email?: unknown }).email === 'string'
    ? (value as { email?: string }).email
    : undefined;
  const phone = 'phone' in value && typeof (value as { phone?: unknown }).phone === 'string'
    ? (value as { phone?: string }).phone
    : undefined;
  const mobile = 'mobile' in value && typeof (value as { mobile?: unknown }).mobile === 'string'
    ? (value as { mobile?: string }).mobile
    : undefined;

  return { email: email ?? undefined, phone: phone ?? undefined, mobile: mobile ?? undefined };
};

const toContactDto = (contact: ContactStoreItem): ContactDto => {
  const contactInformation = {
    ...(contact.email ? { email: contact.email } : {}),
    ...(contact.phone ? { phone: contact.phone } : {}),
    ...(contact.mobile ? { mobile: contact.mobile } : {}),
  };

  const hasContactInformation = Object.keys(contactInformation).length > 0;

  return {
    code: contact.code,
    ...(contact.description ? { description: contact.description } : {}),
    ...(contact.company ? { company: contact.company } : {}),
    ...(contact.jobTitle ? { jobTitle: contact.jobTitle } : {}),
    ...(hasContactInformation ? { contactInformation } : {}),
    ...(contact.comment ? { comment: contact.comment } : {}),
  } satisfies ContactDto;
};

const fromContactDto = (payload: Partial<ContactDto>, fallbackCode?: string): ContactStoreItem => {
  const code = typeof payload.code === 'string' && payload.code.trim().length > 0
    ? payload.code.trim()
    : fallbackCode ?? `CT-${String(nextContactIncrement).padStart(3, '0')}`;
  const contactInformation = normalizeContactInformation(payload.contactInformation);
  const now = new Date().toISOString();
  const existing = findContact(code);

  return {
    code,
    description: typeof payload.description === 'string' ? payload.description : existing?.description,
    company: typeof payload.company === 'string' ? payload.company : existing?.company,
    jobTitle: typeof payload.jobTitle === 'string' ? payload.jobTitle : existing?.jobTitle,
    email: contactInformation.email ?? existing?.email,
    phone: contactInformation.phone ?? existing?.phone,
    mobile: contactInformation.mobile ?? existing?.mobile,
    comment: typeof payload.comment === 'string' ? payload.comment : existing?.comment,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  } satisfies ContactStoreItem;
};

const mapAccountingPeriodToDto = (period: AccountingPeriodDetailValues) => ({
  fiscalYear: period.fiscalYear,
  accountingPeriodStatus: period.accountingPeriodStatus,
  subAccountingPeriodType: period.subAccountingPeriodType,
  subAccountingPeriodProgress: period.subAccountingPeriodProgress,
  ongoingSubAccountingPeriods: period.ongoingSubAccountingPeriods,
  useSubAccountingPeriods: period.useSubAccountingPeriods,
  regularUserLockOption: period.regularUserLockOption,
  customLockNumberDays: period.customLockNumberDays,
  customLockOption: period.customLockOption,
  forceCustomDay: period.forceCustomDay,
  forceOption: period.forceOption,
  accountingOperationAction: period.accountingOperationAction,
  startDate: period.startDate,
  endDate: period.endDate,
});

const normalizeTranslatedInput = <T extends
  | TranslatedTextContentFormValue
  | TranslatedHtmlContentFormValue
  | TranslatedSubjectFormValue>(entries: T[] | undefined): T[] =>
  entries
    ? entries.map((item) => ({
        ...item,
        languageCode: typeof item.languageCode === 'string' ? item.languageCode.trim() : '',
      }))
    : [];

const upsertEmailTemplate = (payload: EmailTemplateDto): EmailTemplateDto => {
  const normalizedCode = payload.code?.trim();
  if (!normalizedCode) {
    throw new Error('Email template code is required');
  }

  const index = emailTemplatesStore.findIndex((item) => item.code === normalizedCode);
  const formValues: EmailTemplateFormValues = {
    id: payload.id,
    code: normalizedCode,
    description: payload.description ?? undefined,
    media: payload.media ?? undefined,
    tagStartDelimiter: payload.tagStartDelimiter ?? undefined,
    tagEndDelimiter: payload.tagEndDelimiter ?? undefined,
    startDate: payload.startDate ?? undefined,
    endDate: payload.endDate ?? undefined,
    type: payload.type ?? undefined,
    textContent: payload.textContent ?? undefined,
    subject: payload.subject ?? '',
    htmlContent: payload.htmlContent ?? undefined,
    translatedTextContent: normalizeTranslatedInput(payload.translatedTextContent ?? []).map((entry) => ({
      languageCode: entry.languageCode,
      textContent: entry.textContent ?? '',
    })),
    translatedHtmlContent: normalizeTranslatedInput(payload.translatedHtmlContent ?? []).map((entry) => ({
      languageCode: entry.languageCode,
      htmlContent: entry.htmlContent ?? '',
    })),
    translatedSubject: normalizeTranslatedInput(payload.translatedSubject ?? []).map((entry) => ({
      languageCode: entry.languageCode,
      subject: entry.subject ?? '',
      textContent: entry.textContent ?? undefined,
    })),
  };

  if (index >= 0) {
    emailTemplatesStore[index] = cloneEmailTemplateForm(formValues);
  } else {
    emailTemplatesStore.push(cloneEmailTemplateForm(formValues));
  }

  return toEmailTemplateDto(emailTemplatesStore[index >= 0 ? index : emailTemplatesStore.length - 1]);
};

const upsertSmsTemplate = (payload: SMSTemplateDto): SMSTemplateDto => {
  const normalizedCode = payload.code?.trim();
  if (!normalizedCode) {
    throw new Error('SMS template code is required');
  }

  const index = smsTemplatesStore.findIndex((item) => item.code === normalizedCode);
  const formValues: SMSTemplateFormValues = {
    id: payload.id,
    code: normalizedCode,
    description: payload.description ?? undefined,
    media: payload.media ?? undefined,
    tagStartDelimiter: payload.tagStartDelimiter ?? undefined,
    tagEndDelimiter: payload.tagEndDelimiter ?? undefined,
    startDate: payload.startDate ?? undefined,
    endDate: payload.endDate ?? undefined,
    type: payload.type ?? undefined,
    textContent: payload.textContent ?? undefined,
    translatedTextContent: normalizeTranslatedInput(payload.translatedTextContent ?? []).map((entry) => ({
      languageCode: entry.languageCode,
      textContent: entry.textContent ?? '',
    })),
  };

  if (index >= 0) {
    smsTemplatesStore[index] = cloneSmsTemplateForm(formValues);
  } else {
    smsTemplatesStore.push(cloneSmsTemplateForm(formValues));
  }

  return toSmsTemplateDto(smsTemplatesStore[index >= 0 ? index : smsTemplatesStore.length - 1]);
};

const findEmailTemplate = (code: string) => emailTemplatesStore.find((item) => item.code === code);
const findSmsTemplate = (code: string) => smsTemplatesStore.find((item) => item.code === code);
const deleteEmailTemplate = (code: string) => {
  const index = emailTemplatesStore.findIndex((item) => item.code === code);
  if (index >= 0) {
    emailTemplatesStore.splice(index, 1);
  }
};
const deleteSmsTemplate = (code: string) => {
  const index = smsTemplatesStore.findIndex((item) => item.code === code);
  if (index >= 0) {
    smsTemplatesStore.splice(index, 1);
  }
};
const findAccountingArticleByCode = (code: string) =>
  accountingArticlesStore.find((item) => item.code === code);
const findAccountingArticleIndexByCode = (code: string) =>
  accountingArticlesStore.findIndex((item) => item.code === code);
const findAccountingArticleIndexById = (id: number) =>
  accountingArticlesStore.findIndex((item) => item.id === id);

const filterRatedTransactions = (filters: Record<string, unknown> | undefined) => {
  if (!filters || Object.keys(filters).length === 0) {
    return ratedTransactionsStore;
  }

  const code = typeof filters.code === 'string' ? filters.code : undefined;
  const status = typeof filters.status === 'string' ? filters.status : undefined;
  const userAccountCode = typeof filters.userAccountCode === 'string' ? filters.userAccountCode : undefined;

  return ratedTransactionsStore.filter((transaction) => {
    if (code && transaction.code !== code) {
      return false;
    }
    if (status && transaction.status !== status) {
      return false;
    }
    if (userAccountCode && transaction.userAccountCode !== userAccountCode) {
      return false;
    }
    return true;
  });
};

export const handlers = [
  http.get('*/api/rest/account/customer/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      customers: {
        customer: customersStore.map((customer) => ({
          ...customer,
          contactInformation: {
            email: customer.contactEmail,
            phone: customer.contactPhone,
            address: {
              address1: customer.address1,
              city: customer.city,
              country: customer.country,
            },
          },
        })),
      },
    }),
  ),
  http.get('*/api/rest/account/customer/{customerCode}', ({ params }) => {
    const customer = findCustomer(String(params.customerCode));
    if (!customer) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({
      actionStatus: success(),
      customer: {
        ...customer,
        contactInformation: {
          email: customer.contactEmail,
          phone: customer.contactPhone,
          address: {
            address1: customer.address1,
            city: customer.city,
            country: customer.country,
          },
        },
      },
    });
  }),
  http.post('*/api/rest/account/customer/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof customersStore)[number];
    const existingIndex = customersStore.findIndex((c) => c.code === payload.code);
    if (existingIndex >= 0) {
      customersStore[existingIndex] = { ...customersStore[existingIndex], ...payload };
    } else {
      customersStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/account/customer/{customerCode}', ({ params }) => {
    const index = customersStore.findIndex((c) => c.code === params.customerCode);
    if (index >= 0) {
      customersStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/account/customerAccount/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      customerAccounts: {
        customerAccount: customerAccountsStore,
      },
    }),
  ),
  http.get('*/api/rest/account/customerAccount/{customerAccountCode}', ({ params }) => {
    const account = findCustomerAccount(String(params.customerAccountCode));
    if (!account) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), customerAccount: account });
  }),
  http.post('*/api/rest/account/customerAccount/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof customerAccountsStore)[number];
    const index = customerAccountsStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      customerAccountsStore[index] = { ...customerAccountsStore[index], ...payload };
    } else {
      customerAccountsStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/account/customerAccount/{customerAccountCode}', ({ params }) => {
    const index = customerAccountsStore.findIndex((item) => item.code === params.customerAccountCode);
    if (index >= 0) {
      customerAccountsStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get(
    '*/api/rest/v2/accounts/userAccounts/{userAccountCode}/allowedParents',
    ({ params }) => {
      const userAccountCode = String(params.userAccountCode ?? '').trim();
      if (!userAccountCode) {
        return HttpResponse.json([]);
      }

      const candidates = allowedParentsStore.filter((item) => {
        const candidateCode = typeof item.userAccountCode === 'string' ? item.userAccountCode.trim() : '';
        return candidateCode === userAccountCode;
      });

      return HttpResponse.json(candidates);
    },
  ),

  http.get(
    '*/api/rest/v2/accounting/auxiliaryAccounts/{customerAccountCode}',
    ({ params }) => {
      const customerAccountCode = String(params.customerAccountCode ?? '').trim();
      if (!customerAccountCode) {
        return HttpResponse.json({
          actionStatus: success(),
          auxiliaryAccountCode: null,
          auxiliaryAccountLabel: null,
          customerAccountCode: null,
        });
      }

      const entry = auxiliaryAccountsStore.find((item) => {
        const candidate = typeof item.customerAccountCode === 'string' ? item.customerAccountCode.trim() : '';
        return candidate === customerAccountCode;
      });

      if (!entry) {
        return HttpResponse.json(
          { actionStatus: { status: 'FAIL', message: 'Auxiliary account not found' } },
          { status: 404 },
        );
      }

      return HttpResponse.json({
        actionStatus: success(),
        auxiliaryAccountCode: entry.auxiliaryAccountCode,
        auxiliaryAccountLabel: entry.auxiliaryAccountLabel,
        customerAccountCode: entry.customerAccountCode,
      });
    },
  ),

  http.post(
    '*/api/rest/v2/accountReceivable/accountOperation/assignOperation/:id',
    async ({ params, request }) => {
      const operationId = Number(params.id);
      if (Number.isNaN(operationId)) {
        return HttpResponse.json(
          { actionStatus: { status: 'FAIL', message: 'Missing parameters' } },
          { status: 412 },
        );
      }

      const payload = (await request.json()) as {
        customerAccount?: { code?: string | null; id?: number | null } | null;
      };
      const customerAccount = payload?.customerAccount;
      if (!customerAccount || (!customerAccount.code && customerAccount.id == null)) {
        return HttpResponse.json(
          { actionStatus: { status: 'FAIL', message: 'Missing parameters' } },
          { status: 412 },
        );
      }

      const code = customerAccount.code?.trim();
      let account = code ? findCustomerAccount(code) : undefined;
      if (!account && typeof customerAccount.id === 'number') {
        account = customerAccountsStore.find((item) => {
          const candidate = item as unknown as { id?: number | null };
          return candidate.id === customerAccount.id;
        });
      }
      if (!account) {
        return HttpResponse.json(
          { actionStatus: { status: 'FAIL', message: 'Entity does not exist' } },
          { status: 404 },
        );
      }

      const operation = findAccountOperation(operationId);
      if (!operation) {
        return HttpResponse.json(
          { actionStatus: { status: 'FAIL', message: 'Entity does not exist' } },
          { status: 404 },
        );
      }

      operation.assignedCustomerAccountCode = account.code;

      return HttpResponse.json({ actionStatus: success('Account operation assigned') });
    },
  ),

  http.get('*/api/rest/billing/accountingCode/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      accountingCodes: accountingCodesStore,
    }),
  ),
  http.get('*/api/rest/billing/accountingCode/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      accountingCodes: accountingCodesStore,
    }),
  ),
  http.get('*/api/rest/billing/accountingCode', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('accountingCode');
    const accountingCode = code ? findAccountingCode(code) : undefined;
    if (!accountingCode) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), accountingCode });
  }),
  http.post('*/api/rest/billing/accountingCode', async ({ request }) => {
    const payload = (await request.json()) as AccountingCodeFormValues;
    accountingCodesStore.push({ ...payload });
    return HttpResponse.json(success('Accounting code created'));
  }),
  http.put('*/api/rest/billing/accountingCode', async ({ request }) => {
    const payload = (await request.json()) as AccountingCodeFormValues;
    const index = accountingCodesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      accountingCodesStore[index] = { ...accountingCodesStore[index], ...payload };
    }
    return HttpResponse.json(success('Accounting code updated'));
  }),
  http.post('*/api/rest/billing/accountingCode/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as AccountingCodeFormValues;
    const index = accountingCodesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      accountingCodesStore[index] = { ...accountingCodesStore[index], ...payload };
    } else {
      accountingCodesStore.push({ ...payload });
    }
    return HttpResponse.json(success('Accounting code saved'));
  }),
  http.delete('*/api/rest/billing/accountingCode/{accountingCode}', ({ params }) => {
    const index = accountingCodesStore.findIndex((item) => item.code === params.accountingCode);
    if (index >= 0) {
      accountingCodesStore.splice(index, 1);
    }
    return HttpResponse.json(success('Accounting code removed'));
  }),
  http.post('*/api/rest/billing/accountingCode/{code}/enable', ({ params }) => {
    const code = String(params.code);
    const item = findAccountingCode(code);
    if (item) {
      item.disabled = false;
    }
    return HttpResponse.json(success('Accounting code enabled'));
  }),
  http.post('*/api/rest/billing/accountingCode/{code}/disable', ({ params }) => {
    const code = String(params.code);
    const item = findAccountingCode(code);
    if (item) {
      item.disabled = true;
    }
    return HttpResponse.json(success('Accounting code disabled'));
  }),

  http.post('*/api/rest/v2/generic/all/contactCategory', async ({ request }) => {
    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch (error) {
      body = {};
    }

    const filters = (body.filters as Record<string, unknown>) ?? {};
    const normalize = (value: unknown) =>
      typeof value === 'string' && value.trim().length > 0 ? value.trim().toLowerCase() : undefined;
    const search = normalize(filters.code ?? filters.description);

    let categories = [...contactCategoriesStore];
    if (search) {
      categories = categories.filter((item) => {
        const code = item.code.toLowerCase();
        const description = (item.description ?? '').toLowerCase();
        return code.includes(search) || description.includes(search);
      });
    }

    categories.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));

    const offset = typeof body.offset === 'number' ? Math.max(0, Math.floor(body.offset)) : 0;
    const limit =
      typeof body.limit === 'number' && body.limit >= 0 ? Math.floor(body.limit) : categories.length;
    const paginated = categories.slice(offset, offset + limit);

    return HttpResponse.json({
      actionStatus: success(),
      data: paginated.map((item) => ({
        id: item.id,
        code: item.code,
        description: item.description,
      })),
      paging: { totalNumberOfRecords: categories.length },
    });
  }),

  http.post('*/api/rest/v2/account/contactCategory', async ({ request }) => {
    const payload = (await request.json()) as Partial<ContactCategoryFormValues>;
    const code =
      typeof payload.code === 'string' && payload.code.trim().length > 0
        ? payload.code.trim()
        : `CAT-${nextContactCategoryId}`;
    const description =
      typeof payload.description === 'string' && payload.description.length > 0
        ? payload.description
        : undefined;
    const existingIndex = contactCategoriesStore.findIndex((item) => item.code === code);
    const id =
      typeof payload.id === 'number'
        ? payload.id
        : existingIndex >= 0
          ? contactCategoriesStore[existingIndex].id
          : nextContactCategoryId++;
    const entry: ContactCategoryFormValues = {
      code,
      ...(description ? { description } : {}),
      ...(typeof id === 'number' ? { id } : {}),
    };
    if (existingIndex >= 0) {
      contactCategoriesStore[existingIndex] = { ...contactCategoriesStore[existingIndex], ...entry };
    } else {
      contactCategoriesStore.push(entry);
    }
    return HttpResponse.json({ actionStatus: success('Created') });
  }),

  http.put('*/api/rest/v2/account/contactCategory/{contactCategoryCode}', async ({ params, request }) => {
    const code = String(params.contactCategoryCode);
    const payload = (await request.json()) as Partial<ContactCategoryFormValues>;
    const description =
      typeof payload.description === 'string' && payload.description.length > 0
        ? payload.description
        : undefined;
    const index = contactCategoriesStore.findIndex((item) => item.code === code);
    const id =
      typeof payload.id === 'number'
        ? payload.id
        : index >= 0
          ? contactCategoriesStore[index].id
          : nextContactCategoryId++;
    const entry: ContactCategoryFormValues = {
      code,
      ...(description ? { description } : {}),
      ...(typeof id === 'number' ? { id } : {}),
    };
    if (index >= 0) {
      contactCategoriesStore[index] = { ...contactCategoriesStore[index], ...entry };
    } else {
      contactCategoriesStore.push(entry);
    }
    return HttpResponse.json({ actionStatus: success('Updated') });
  }),

  http.delete('*/api/rest/v2/account/contactCategory/{contactCategoryCode}', ({ params }) => {
    const code = String(params.contactCategoryCode);
    const index = contactCategoriesStore.findIndex((item) => item.code === code);
    if (index >= 0) {
      contactCategoriesStore.splice(index, 1);
    }
    return HttpResponse.json({ actionStatus: success('Deleted') });
  }),

  http.post('*/api/rest/v2/generic/all/Contact', async ({ request }) => {
    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch (error) {
      body = {};
    }

    const filters = (body.filters as Record<string, unknown>) ?? {};
    const normalize = (value: unknown) =>
      typeof value === 'string' && value.trim().length > 0 ? value.trim().toLowerCase() : undefined;

    const searchTerms = [
      normalize(filters.code),
      normalize(filters.description),
      normalize(filters.company),
      normalize(filters.jobTitle),
    ].filter((value): value is string => Boolean(value));

    let contacts = [...contactsStore];
    if (searchTerms.length > 0) {
      contacts = contacts.filter((item) => {
        const haystacks = [item.code, item.description, item.company, item.jobTitle].map((value) =>
          typeof value === 'string' ? value.toLowerCase() : '',
        );
        return searchTerms.some((term) => haystacks.some((value) => value.includes(term)));
      });
    }

    const sortBy = typeof body.sortBy === 'string' ? body.sortBy : undefined;
    const sortOrder = body.sortOrder === 'ASCENDING' ? 1 : -1;

    contacts.sort((a, b) => {
      const direction = sortOrder === 1 ? 1 : -1;
      if (sortBy === 'auditable.created') {
        return a.createdAt.localeCompare(b.createdAt) * direction;
      }
      return a.code.toLowerCase().localeCompare(b.code.toLowerCase()) * direction;
    });

    const offset = typeof body.offset === 'number' ? Math.max(0, Math.floor(body.offset)) : 0;
    const limit =
      typeof body.limit === 'number' && body.limit >= 0 ? Math.floor(body.limit) : contacts.length;
    const paginated = contacts.slice(offset, offset + limit);
    const results = paginated.map((item) => toContactDto(item));

    return HttpResponse.json({
      actionStatus: success(),
      data: results,
      contacts: { contact: results, totalNumberOfRecords: contacts.length },
      paging: { totalNumberOfRecords: contacts.length },
    });
  }),

  http.post('*/api/rest/v2/contact', async ({ request }) => {
    let payload: Partial<ContactDto> = {};
    try {
      payload = (await request.json()) as Partial<ContactDto>;
    } catch (error) {
      payload = {};
    }

    const entry = fromContactDto(payload);
    const index = contactsStore.findIndex((item) => item.code === entry.code);
    if (index >= 0) {
      contactsStore[index] = { ...entry };
    } else {
      contactsStore.push({ ...entry });
      nextContactIncrement += 1;
    }

    return HttpResponse.json({ actionStatus: success('Created') });
  }),

  http.put('*/api/rest/v2/contact', async ({ request }) => {
    let payload: Partial<ContactDto> = {};
    try {
      payload = (await request.json()) as Partial<ContactDto>;
    } catch (error) {
      payload = {};
    }

    const entry = fromContactDto(payload);
    const index = contactsStore.findIndex((item) => item.code === entry.code);
    if (index >= 0) {
      contactsStore[index] = { ...entry };
    } else {
      contactsStore.push({ ...entry });
      nextContactIncrement += 1;
    }

    return HttpResponse.json({ actionStatus: success('Updated') });
  }),

  http.delete('*/api/rest/v2/contact/{code}', ({ params }) => {
    const rawCode = params.code;
    const code = typeof rawCode === 'string' ? rawCode.trim() : rawCode ? String(rawCode) : '';
    if (code) {
      const index = contactsStore.findIndex((item) => item.code === code);
      if (index >= 0) {
        contactsStore.splice(index, 1);
      }
    }

    return HttpResponse.json({ actionStatus: success('Deleted') });
  }),

  http.post('*/v2/generic/all/accountingPeriod', async ({ request }) => {
    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch (err) {
      body = {};
    }
    const filters = (body.filters as Record<string, unknown>) ?? {};
    const normalize = (value: unknown) =>
      typeof value === 'string' && value.length > 0 ? value.toLowerCase() : undefined;

    const fiscalYearFilter = normalize(filters.fiscalYear ?? filters.code ?? filters.query);
    const statusFilter = normalize(filters.accountingPeriodStatus);

    let periods = [...accountingPeriodsStore];
    if (fiscalYearFilter) {
      periods = periods.filter((item) => item.fiscalYear.toLowerCase().includes(fiscalYearFilter));
    }
    if (statusFilter) {
      periods = periods.filter((item) =>
        (item.accountingPeriodStatus ?? '').toLowerCase().includes(statusFilter),
      );
    }

    const offset = typeof body.offset === 'number' ? Math.max(0, body.offset) : 0;
    const limit = typeof body.limit === 'number' && body.limit >= 0 ? body.limit : periods.length;
    const paginated = periods.slice(offset, offset + limit);

    return HttpResponse.json({
      actionStatus: success(),
      results: paginated.map(mapAccountingPeriodToDto),
      paging: { totalNumberOfRecords: periods.length },
    });
  }),

  http.post('*/v2/accountingPeriodManagement/accountingPeriods', async ({ request }) => {
    const payload = (await request.json()) as Partial<AccountingPeriodDetailValues>;
    const fiscalYear =
      typeof payload.fiscalYear === 'string' && payload.fiscalYear.length > 0
        ? payload.fiscalYear
        : `period-${Date.now()}`;
    const detail: AccountingPeriodDetailValues = {
      fiscalYear,
      useSubAccountingPeriods: payload.useSubAccountingPeriods ?? false,
      subAccountingPeriodType: payload.subAccountingPeriodType ?? undefined,
      regularUserLockOption: payload.regularUserLockOption ?? undefined,
      customLockNumberDays: payload.customLockNumberDays ?? undefined,
      customLockOption: payload.customLockOption ?? undefined,
      forceCustomDay: payload.forceCustomDay ?? undefined,
      forceOption: payload.forceOption ?? undefined,
      accountingOperationAction: payload.accountingOperationAction ?? undefined,
      startDate: payload.startDate ?? undefined,
      endDate: payload.endDate ?? undefined,
      accountingPeriodStatus: payload.accountingPeriodStatus ?? 'OPEN',
      subAccountingPeriodProgress: payload.subAccountingPeriodProgress ?? 'NOT_STARTED',
      ongoingSubAccountingPeriods: payload.ongoingSubAccountingPeriods ?? 0,
    };
    const index = accountingPeriodsStore.findIndex((item) => item.fiscalYear === fiscalYear);
    if (index >= 0) {
      accountingPeriodsStore[index] = { ...accountingPeriodsStore[index], ...detail };
    } else {
      accountingPeriodsStore.push(detail);
    }
    return HttpResponse.json({ actionStatus: success('Created') });
  }),

  http.put('*/v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}', async ({ params, request }) => {
    const fiscalYear = String(params.fiscalYear);
    const payload = (await request.json()) as Partial<AccountingPeriodDetailValues>;
    const index = accountingPeriodsStore.findIndex((item) => item.fiscalYear === fiscalYear);
    if (index >= 0) {
      accountingPeriodsStore[index] = { ...accountingPeriodsStore[index], ...payload };
    } else {
      accountingPeriodsStore.push({
        fiscalYear,
        useSubAccountingPeriods: payload.useSubAccountingPeriods ?? false,
        subAccountingPeriodType: payload.subAccountingPeriodType ?? undefined,
        regularUserLockOption: payload.regularUserLockOption ?? undefined,
        customLockNumberDays: payload.customLockNumberDays ?? undefined,
        customLockOption: payload.customLockOption ?? undefined,
        forceCustomDay: payload.forceCustomDay ?? undefined,
        forceOption: payload.forceOption ?? undefined,
        accountingOperationAction: payload.accountingOperationAction ?? undefined,
        startDate: payload.startDate ?? undefined,
        endDate: payload.endDate ?? undefined,
        accountingPeriodStatus: payload.accountingPeriodStatus ?? 'OPEN',
        subAccountingPeriodProgress: payload.subAccountingPeriodProgress ?? 'NOT_STARTED',
        ongoingSubAccountingPeriods: payload.ongoingSubAccountingPeriods ?? 0,
      });
    }
    return HttpResponse.json({ actionStatus: success('Updated') });
  }),

  http.put(
    '*/v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}/{status}',
    ({ params }) => {
      const fiscalYear = String(params.fiscalYear);
      const status = String(params.status);
      const period = findAccountingPeriod(fiscalYear);
      if (period) {
        period.accountingPeriodStatus = status;
      }
      return HttpResponse.json({ actionStatus: success('Status updated') });
    },
  ),

  http.put(
    '*/v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}/subAccountingPeriods/{number}/allUsersStatus/{status}',
    ({ params }) => {
      const fiscalYear = String(params.fiscalYear);
      const status = String(params.status);
      const period = findAccountingPeriod(fiscalYear);
      if (period) {
        period.subAccountingPeriodProgress = status;
        const number = Number(params.number);
        if (!Number.isNaN(number)) {
          period.ongoingSubAccountingPeriods = number;
        }
      }
      return HttpResponse.json({ actionStatus: success('Sub status updated') });
    },
  ),

  http.put(
    '*/v2/accountingPeriodManagement/accountingPeriods/{fiscalYear}/subAccountingPeriods/{number}/regularUsersStatus/{status}',
    ({ params }) => {
      const fiscalYear = String(params.fiscalYear);
      const status = String(params.status);
      const period = findAccountingPeriod(fiscalYear);
      if (period) {
        period.subAccountingPeriodProgress = status;
        const number = Number(params.number);
        if (!Number.isNaN(number)) {
          period.ongoingSubAccountingPeriods = number;
        }
      }
      return HttpResponse.json({ actionStatus: success('Sub status updated') });
    },
  ),

  http.post('*/v2/accountingPeriodManagement/accountingPeriods/generateNextAP', () => {
    const numericYears = accountingPeriodsStore
      .map((item) => Number.parseInt(item.fiscalYear, 10))
      .filter((value) => !Number.isNaN(value));
    const nextYearNumber = numericYears.length > 0 ? Math.max(...numericYears) + 1 : new Date().getFullYear();
    const nextYear = String(nextYearNumber);
    const base = accountingPeriodsStore[accountingPeriodsStore.length - 1] ?? accountingPeriodsStore[0];
    const detail: AccountingPeriodDetailValues = {
      ...(base ?? {
        useSubAccountingPeriods: false,
      }),
      fiscalYear: nextYear,
      accountingPeriodStatus: 'OPEN',
      subAccountingPeriodProgress: 'NOT_STARTED',
      ongoingSubAccountingPeriods: 0,
      startDate: base?.startDate ?? new Date(Date.UTC(nextYearNumber, 0, 1)).toISOString(),
      endDate: base?.endDate ?? new Date(Date.UTC(nextYearNumber, 11, 31, 23, 59, 59)).toISOString(),
    };
    accountingPeriodsStore.push(detail);
    return HttpResponse.json({
      actionStatus: success('Generated'),
      accountingPeriod: mapAccountingPeriodToDto(detail),
    });
  }),
  http.get('*/articles', ({ request }) => {
    const url = new URL(request.url);
    const limitParam = Number(url.searchParams.get('limit') ?? '20');
    const offsetParam = Number(url.searchParams.get('offset') ?? '0');
    const limit = Number.isNaN(limitParam) ? 20 : limitParam;
    const offset = Number.isNaN(offsetParam) ? 0 : offsetParam;
    const page = accountingArticlesStore.slice(offset, offset + limit);

    return HttpResponse.json({
      actionStatus: success(),
      accountingArticles: page,
      totalRecords: accountingArticlesStore.length,
    });
  }),
  http.get('*/articles/{accountingArticleCode}', ({ params }) => {
    const code = String(params.accountingArticleCode);
    const article = findAccountingArticleByCode(code);
    if (!article) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), accountingArticle: article });
  }),
  http.post('*/articles', async ({ request }) => {
    const payload = (await request.json()) as AccountingArticleDto;
    const dto = { ...payload } as AccountingArticleDto;
    const code = typeof dto.code === 'string' && dto.code.length > 0 ? dto.code : `ART-${nextAccountingArticleId}`;
    const normalized = {
      ...dto,
      code,
      id: dto.id ?? nextAccountingArticleId++,
    } as (typeof accountingArticlesStore)[number];
    accountingArticlesStore.push(normalized);
    return HttpResponse.json(success('Accounting article created'));
  }),
  http.put('*/articles/{id}', async ({ params, request }) => {
    const id = Number(params.id);
    const payload = (await request.json()) as AccountingArticleDto;
    const index = findAccountingArticleIndexById(id);
    if (index === -1) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    accountingArticlesStore[index] = {
      ...accountingArticlesStore[index],
      ...(payload as Record<string, unknown>),
      id,
    } as (typeof accountingArticlesStore)[number];
    return HttpResponse.json(success('Accounting article updated'));
  }),
  http.delete('*/articles/{accountingArticleCode}', ({ params }) => {
    const code = String(params.accountingArticleCode);
    const index = findAccountingArticleIndexByCode(code);
    if (index >= 0) {
      accountingArticlesStore.splice(index, 1);
    }
    return HttpResponse.json(success('Accounting article deleted'));
  }),
  http.get('*/articles/products/{productCode}', ({ params }) => {
    const productCode = String(params.productCode);
    const matching = accountingArticlesStore.filter((article) =>
      article.code?.toLowerCase().includes(productCode.toLowerCase()),
    );
    return HttpResponse.json({
      actionStatus: success(),
      accountingArticles: matching.length > 0 ? matching : accountingArticlesStore,
    });
  }),
  http.get('*/api/rest/v2/articleMapping/{code}', ({ params }) => {
    const code = String(params.code ?? '');
    const mapping = articleMappingsStore.find(
      (item) => item.code?.toLowerCase() === code.toLowerCase(),
    );
    if (!mapping) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), articleMapping: mapping });
  }),
  http.post('*/articleMapping', async () => HttpResponse.json(success('Article mapping created'))),

  http.post('*/api/rest/v2/cpq/contracts/:contractCode/billingRule', async ({ request }) => {
    const payload = (await request.json()) as BillingRuleDto;
    const id = typeof payload.id === 'number' && Number.isFinite(payload.id) ? payload.id : nextBillingRuleId++;
    const billingRule: BillingRuleDto = {
      ...payload,
      id,
      code: payload.code ?? `BILL-RULE-${id}`,
    };
    billingRulesStore.push({ ...billingRule });
    return HttpResponse.json({ actionStatus: success('Billing rule created'), billingRule });
  }),
  http.put('*/api/rest/v2/cpq/contracts/:contractCode/billingRule/:id', async ({ params, request }) => {
    const id = Number(params.id);
    if (!Number.isFinite(id)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Invalid identifier' } }, { status: 400 });
    }
    const payload = (await request.json()) as BillingRuleDto;
    const index = billingRulesStore.findIndex((item) => item.id === id);
    if (index < 0) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Billing rule not found' } }, { status: 404 });
    }

    const updated: BillingRuleDto = {
      ...billingRulesStore[index],
      ...payload,
      id,
      code: payload.code ?? billingRulesStore[index].code ?? `BILL-RULE-${id}`,
    };
    billingRulesStore[index] = { ...updated };

    return HttpResponse.json({ actionStatus: success('Billing rule updated'), billingRule: updated });
  }),
  http.delete('*/api/rest/v2/cpq/contracts/:contractCode/billingRule/:id', ({ params }) => {
    const id = Number(params.id);
    if (!Number.isFinite(id)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Invalid identifier' } }, { status: 400 });
    }
    const index = billingRulesStore.findIndex((item) => item.id === id);
    if (index < 0) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Billing rule not found' } }, { status: 404 });
    }

    const [removed] = billingRulesStore.splice(index, 1);
    return HttpResponse.json({ actionStatus: success('Billing rule deleted'), billingRule: removed });
  }),

  http.get('*/api/rest/invoice/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoices: invoicesStore,
    }),
  ),
  http.get('*/api/rest/invoice', ({ request }) => {
    const url = new URL(request.url);
    const idParam = url.searchParams.get('id');
    const invoice = invoicesStore.find((item) => String(item.invoiceId) === idParam);
    if (!invoice) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoice });
  }),
  http.post('*/api/rest/invoice', async ({ request }) => {
    const payload = (await request.json()) as typeof invoicesStore[number];
    const invoiceId = Date.now();
    const invoice = { ...payload, invoiceId, invoiceNumber: `INV-${invoiceId}` };
    invoicesStore.push(invoice);
    return HttpResponse.json({ actionStatus: success(), invoiceId, invoiceNumber: invoice.invoiceNumber });
  }),

  http.get('*/api/rest/v2/standardReports/AgedReceivables', ({ request }) => {
    const url = new URL(request.url);
    const queryParams = Object.fromEntries(url.searchParams.entries());

    const filtered = agedReceivablesStore.filter((item) => {
      if (queryParams.customerAccountCode && item.customerAccountCode !== queryParams.customerAccountCode) {
        return false;
      }
      if (
        queryParams.customerAccountDescription &&
        item.customerAccountDescription !== queryParams.customerAccountDescription
      ) {
        return false;
      }
      if (queryParams.sellerCode && item.sellerCode !== queryParams.sellerCode) {
        return false;
      }
      if (queryParams.sellerDescription && item.sellerDescription !== queryParams.sellerDescription) {
        return false;
      }
      if (queryParams.invoiceNumber && item.invoiceNumber !== queryParams.invoiceNumber) {
        return false;
      }
      if (queryParams.tradingCurrency && item.tradingCurrency !== queryParams.tradingCurrency) {
        return false;
      }
      if (queryParams.funcCurrency && item.funcCurrency !== queryParams.funcCurrency) {
        return false;
      }
      return true;
    });

    const offset = Number.parseInt(queryParams.offset ?? '0', 10);
    const limit = Number.parseInt(queryParams.limit ?? String(filtered.length), 10);
    const safeOffset = Number.isNaN(offset) ? 0 : offset;
    const safeLimit = Number.isNaN(limit) ? filtered.length : limit;
    const paginated = filtered.slice(safeOffset, safeOffset + safeLimit);

    const bucketLabels = new Set<string>();
    paginated.forEach((entry) => {
      entry.buckets?.forEach((bucket) => {
        if (bucket?.label) {
          bucketLabels.add(bucket.label);
        }
      });
    });

    return HttpResponse.json({
      actionStatus: success('Aged receivables fetched'),
      paging: {
        offset: safeOffset,
        limit: safeLimit,
        totalNumberOfRecords: filtered.length,
      },
      bucketLabels: Array.from(bucketLabels),
      agedReceivables: paginated,
    });
  }),

  http.post('*/api/rest/billing/ratedTransaction/list', async ({ request }) => {
    const payload = (await request.json()) as {
      filters?: Record<string, unknown>;
      offset?: number;
      limit?: number;
    };
    const filtered = filterRatedTransactions(payload?.filters);
    const offset = payload?.offset ?? 0;
    const limit = payload?.limit ?? filtered.length;
    const paginated = filtered.slice(offset, offset + limit);
    return HttpResponse.json({
      actionStatus: success(),
      paging: {
        offset,
        limit,
        totalNumberOfRecords: filtered.length,
      },
      ratedTransactions: paginated,
    });
  }),

  http.get('*/api/rest/billing/ratedTransaction/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      paging: {
        offset: 0,
        limit: ratedTransactionsStore.length,
        totalNumberOfRecords: ratedTransactionsStore.length,
      },
      ratedTransactions: ratedTransactionsStore,
    }),
  ),

  http.post('*/api/rest/billing/ratedTransaction/cancelRatedTransactions', async ({ request }) => {
    const payload = (await request.json()) as { filters?: Record<string, unknown> };
    const filteredCodes = new Set(filterRatedTransactions(payload?.filters).map((item) => item.code));
    let affected = 0;
    ratedTransactionsStore.forEach((transaction, index) => {
      if (transaction.code && filteredCodes.has(transaction.code)) {
        ratedTransactionsStore[index] = { ...transaction, status: 'CANCELED' };
        affected += 1;
      }
    });
    return HttpResponse.json({ status: 'SUCCESS', message: `Cancelled ${affected} transactions`, nrAffected: affected });
  }),

  http.get('*/api/rest/billing/ratedTransaction/version', () =>
    HttpResponse.json({ status: 'SUCCESS', message: '5.2.1' }),
  ),

  http.get('*/api/rest/tax/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      taxesDto: {
        tax: taxesStore,
      },
    }),
  ),
  http.get('*/api/rest/tax', ({ request }) => {
    const url = new URL(request.url);
    const taxCode = url.searchParams.get('taxCode');
    const tax = findTax(taxCode ?? '');
    if (!tax) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), tax });
  }),
  http.post('*/api/rest/tax', async ({ request }) => {
    const payload = (await request.json()) as (typeof taxesStore)[number];
    if (findTax(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    taxesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/tax', async ({ request }) => {
    const payload = (await request.json()) as (typeof taxesStore)[number];
    const index = taxesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      taxesStore[index] = { ...taxesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/tax/{taxCode}', ({ params }) => {
    const index = taxesStore.findIndex((item) => item.code === params.taxCode);
    if (index >= 0) {
      taxesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/currencyIso/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      currencies: currencyIsoStore,
    }),
  ),
  http.get('*/api/rest/currencyIso', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('currencyCode');
    const item = findCurrencyIso(code ?? '');
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), currency: item });
  }),
  http.post('*/api/rest/currencyIso', async ({ request }) => {
    const payload = (await request.json()) as CurrencyIsoFormValues;
    if (findCurrencyIso(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    currencyIsoStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/currencyIso', async ({ request }) => {
    const payload = (await request.json()) as CurrencyIsoFormValues;
    const index = currencyIsoStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      currencyIsoStore[index] = { ...currencyIsoStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/currencyIso/{currencyCode}', ({ params }) => {
    const index = currencyIsoStore.findIndex((item) => item.code === params.currencyCode);
    if (index >= 0) {
      currencyIsoStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/genericCode', ({ request }) => {
    const url = new URL(request.url);
    const entityClass = url.searchParams.get('entityClass');
    const item = entityClass ? findGenericCode(entityClass) : genericCodesStore[0];
    if (!item) {
      return HttpResponse.json({ genericCodeDto: null }, { status: 404 });
    }
    return HttpResponse.json({ genericCodeDto: item });
  }),
  http.post('*/api/rest/genericCode', async ({ request }) => {
    const payload = (await request.json()) as (typeof genericCodesStore)[number];
    if (findGenericCode(payload.entityClass)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    genericCodesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/genericCode', async ({ request }) => {
    const payload = (await request.json()) as (typeof genericCodesStore)[number];
    const index = genericCodesStore.findIndex((item) => item.entityClass === payload.entityClass);
    if (index >= 0) {
      genericCodesStore[index] = { ...genericCodesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/genericCode/generateCode', async ({ request }) => {
    const payload = (await request.json()) as (typeof genericCodesStore)[number];
    const item = findGenericCode(payload.entityClass) ?? payload;
    const current = item.sequence?.currentInvoiceNb ?? 0;
    const generated = `${item.prefixOverride ?? ''}${String(current + 1).padStart(item.sequence?.sequenceSize ?? 4, '0')}`;
    if (item.sequence) {
      item.sequence.currentInvoiceNb = current + 1;
    }
    return HttpResponse.json({
      actionStatus: success(),
      generatedCode: generated,
      sequenceType: item.sequence?.sequenceType,
      pattern: item.sequence?.sequencePattern,
    });
  }),
  http.post('*/api/rest/genericCode/sequence', async ({ request }) => {
    const payload = (await request.json()) as Partial<(typeof genericCodesStore)[number]['sequence']>;
    const target = genericCodesStore[0];
    if (target) {
      target.sequence = { ...target.sequence, ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/genericCode/version', () =>
    HttpResponse.json({ actionStatus: success('1.0.0') }),
  ),
  http.get('*/api/rest/invoiceCategory/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoiceCategories: { invoiceCategory: invoiceCategoriesStore },
    }),
  ),
  http.get('*/api/rest/invoiceCategory', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoiceCategoryCode');
    const item = code ? findInvoiceCategory(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoiceCategory: item });
  }),
  http.post('*/api/rest/invoiceCategory', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceCategoriesStore)[number];
    if (findInvoiceCategory(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    invoiceCategoriesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/invoiceCategory', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceCategoriesStore)[number];
    const index = invoiceCategoriesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceCategoriesStore[index] = { ...invoiceCategoriesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/invoiceCategory/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceCategoriesStore)[number];
    const index = invoiceCategoriesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceCategoriesStore[index] = { ...invoiceCategoriesStore[index], ...payload };
    } else {
      invoiceCategoriesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/invoiceCategory/{invoiceCategoryCode}', ({ params }) => {
    const index = invoiceCategoriesStore.findIndex((item) => item.code === params.invoiceCategoryCode);
    if (index >= 0) {
      invoiceCategoriesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/invoiceSequence/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoiceSequencesDto: { invoiceSequences: invoiceSequencesStore },
    }),
  ),
  http.get('*/api/rest/invoiceSequence', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoiceSequenceCode');
    const item = code ? findInvoiceSequence(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoiceSequenceDto: item });
  }),
  http.post('*/api/rest/invoiceSequence', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSequencesStore)[number];
    if (findInvoiceSequence(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    invoiceSequencesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/invoiceSequence', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSequencesStore)[number];
    const index = invoiceSequencesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceSequencesStore[index] = { ...invoiceSequencesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/invoiceSequence/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSequencesStore)[number];
    const index = invoiceSequencesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceSequencesStore[index] = { ...invoiceSequencesStore[index], ...payload };
    } else {
      invoiceSequencesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/invoiceSubCategory/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoiceSubCategories: { invoiceSubCategory: invoiceSubCategoriesStore },
    }),
  ),
  http.get('*/api/rest/invoiceSubCategory', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoiceSubCategoryCode');
    const item = code ? findInvoiceSubCategory(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoiceSubCategory: item });
  }),
  http.post('*/api/rest/invoiceSubCategory', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSubCategoriesStore)[number];
    if (findInvoiceSubCategory(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    invoiceSubCategoriesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/invoiceSubCategory', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSubCategoriesStore)[number];
    const index = invoiceSubCategoriesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceSubCategoriesStore[index] = { ...invoiceSubCategoriesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/invoiceSubCategory/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceSubCategoriesStore)[number];
    const index = invoiceSubCategoriesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceSubCategoriesStore[index] = { ...invoiceSubCategoriesStore[index], ...payload };
    } else {
      invoiceSubCategoriesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/invoiceSubCategory/{invoiceSubCategoryCode}', ({ params }) => {
    const index = invoiceSubCategoriesStore.findIndex((item) => item.code === params.invoiceSubCategoryCode);
    if (index >= 0) {
      invoiceSubCategoriesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/invoiceType/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoiceTypesDto: { invoiceTypes: invoiceTypesStore },
    }),
  ),
  http.get('*/api/rest/invoiceType', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoiceTypeCode');
    const item = code ? findInvoiceType(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoiceTypeDto: item });
  }),
  http.post('*/api/rest/invoiceType', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceTypesStore)[number];
    if (findInvoiceType(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    invoiceTypesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/invoiceType', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceTypesStore)[number];
    const index = invoiceTypesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceTypesStore[index] = { ...invoiceTypesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/invoiceType/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoiceTypesStore)[number];
    const index = invoiceTypesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoiceTypesStore[index] = { ...invoiceTypesStore[index], ...payload };
    } else {
      invoiceTypesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/invoiceType/{invoiceTypeCode}', ({ params }) => {
    const index = invoiceTypesStore.findIndex((item) => item.code === params.invoiceTypeCode);
    if (index >= 0) {
      invoiceTypesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.post('*/api/rest/billing/invoicingPlans/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoicingPlans: { invoicingPlan: invoicingPlansStore },
    }),
  ),
  http.get('*/api/rest/billing/invoicingPlans', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoicingPlanCode');
    const plan = code ? findInvoicingPlan(code) : undefined;
    if (!plan) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoicingPlanDto: plan });
  }),
  http.post('*/api/rest/billing/invoicingPlans', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlansStore)[number];
    invoicingPlansStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/billing/invoicingPlans', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlansStore)[number];
    const index = invoicingPlansStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoicingPlansStore[index] = { ...invoicingPlansStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/billing/invoicingPlans/{invoicingPlanCode}', ({ params }) => {
    const index = invoicingPlansStore.findIndex((item) => item.code === params.invoicingPlanCode);
    if (index >= 0) {
      invoicingPlansStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/billing/invoicingPlans/version', () =>
    HttpResponse.json(success('1.0.0')),
  ),

  http.post('*/api/rest/billing/invoicingPlanItems/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      invoicingPlanItems: { invoicingPlanItem: invoicingPlanItemsStore },
    }),
  ),
  http.get('*/api/rest/billing/invoicingPlanItems', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('invoicingPlanItemCode');
    const item = code ? findInvoicingPlanItem(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), invoicingPlanItemDto: item });
  }),
  http.post('*/api/rest/billing/invoicingPlanItems', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlanItemsStore)[number];
    invoicingPlanItemsStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/billing/invoicingPlanItems', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlanItemsStore)[number];
    const index = invoicingPlanItemsStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoicingPlanItemsStore[index] = { ...invoicingPlanItemsStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/billing/invoicingPlanItems/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof invoicingPlanItemsStore)[number];
    const index = invoicingPlanItemsStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      invoicingPlanItemsStore[index] = { ...invoicingPlanItemsStore[index], ...payload };
    } else {
      invoicingPlanItemsStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/billing/invoicingPlanItems/{invoicingPlanItemCode}', ({ params }) => {
    const index = invoicingPlanItemsStore.findIndex((item) => item.code === params.invoicingPlanItemCode);
    if (index >= 0) {
      invoicingPlanItemsStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.get('*/api/rest/billing/invoicingPlanItems/version', () =>
    HttpResponse.json(success('1.0.0')),
  ),

  http.get('*/api/rest/languageIso/listGetAll', () =>
    HttpResponse.json({
      actionStatus: success(),
      languages: languageIsosStore,
    }),
  ),
  http.get('*/api/rest/languageIso', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('languageCode');
    const item = code ? findLanguageIso(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), language: item });
  }),
  http.post('*/api/rest/languageIso', async ({ request }) => {
    const payload = (await request.json()) as (typeof languageIsosStore)[number];
    if (payload.code && findLanguageIso(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    languageIsosStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/languageIso', async ({ request }) => {
    const payload = (await request.json()) as (typeof languageIsosStore)[number];
    const index = payload.code ? languageIsosStore.findIndex((item) => item.code === payload.code) : -1;
    if (index >= 0) {
      languageIsosStore[index] = { ...languageIsosStore[index], ...payload };
    } else if (payload.code) {
      languageIsosStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/languageIso/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof languageIsosStore)[number];
    const index = payload.code ? languageIsosStore.findIndex((item) => item.code === payload.code) : -1;
    if (index >= 0) {
      languageIsosStore[index] = { ...languageIsosStore[index], ...payload };
    } else if (payload.code) {
      languageIsosStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/languageIso/{languageCode}', ({ params }) => {
    const index = languageIsosStore.findIndex((item) => item.code === params.languageCode);
    if (index >= 0) {
      languageIsosStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/language/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      tradingLanguages: { language: languagesStore },
    }),
  ),
  http.get('*/api/rest/language', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('languageCode');
    const item = code ? findLanguage(code) : undefined;
    if (!item) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), language: item });
  }),
  http.post('*/api/rest/language', async ({ request }) => {
    const payload = (await request.json()) as (typeof languagesStore)[number];
    if (payload.code && findLanguage(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    languagesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/language', async ({ request }) => {
    const payload = (await request.json()) as (typeof languagesStore)[number];
    const index = payload.code ? languagesStore.findIndex((item) => item.code === payload.code) : -1;
    if (index >= 0) {
      languagesStore[index] = { ...languagesStore[index], ...payload };
    } else if (payload.code) {
      languagesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/language/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as (typeof languagesStore)[number];
    const index = payload.code ? languagesStore.findIndex((item) => item.code === payload.code) : -1;
    if (index >= 0) {
      languagesStore[index] = { ...languagesStore[index], ...payload };
    } else if (payload.code) {
      languagesStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/language/{languageCode}', ({ params }) => {
    const index = languagesStore.findIndex((item) => item.code === params.languageCode);
    if (index >= 0) {
      languagesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/language/{code}/enable', ({ params }) => {
    const item = findLanguage(String(params.code));
    if (item) {
      item.disabled = false;
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/language/{code}/disable', ({ params }) => {
    const item = findLanguage(String(params.code));
    if (item) {
      item.disabled = true;
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/currency/list', () =>
    HttpResponse.json({
      actionStatus: success(),
      tradingCurrencies: { currency: currenciesStore },
    }),
  ),
  http.get('*/api/rest/currency', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('currencyCode');
    const currency = findCurrency(code ?? '');
    if (!currency) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), currency });
  }),
  http.post('*/api/rest/currency', async ({ request }) => {
    const payload = (await request.json()) as CurrencyFormValues;
    if (findCurrency(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    currenciesStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/currency', async ({ request }) => {
    const payload = (await request.json()) as CurrencyFormValues;
    const index = currenciesStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      currenciesStore[index] = { ...currenciesStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/currency/{code}/enable', ({ params }) => {
    const currency = findCurrency(String(params.code));
    if (currency) {
      currency.disabled = false;
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/currency/{code}/disable', ({ params }) => {
    const currency = findCurrency(String(params.code));
    if (currency) {
      currency.disabled = true;
    }
    return HttpResponse.json(success());
  }),
  http.delete('*/api/rest/currency/{currencyCode}', ({ params }) => {
    const index = currenciesStore.findIndex((item) => item.code === params.currencyCode);
    if (index >= 0) {
      currenciesStore.splice(index, 1);
    }
    return HttpResponse.json(success());
  }),

  http.get('*/api/rest/filter', ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('filterCode');
    if (!code) {
      return HttpResponse.json({ actionStatus: success(), filter: undefined });
    }
    const filter = findFilter(code);
    if (!filter) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Not found' } }, { status: 404 });
    }
    return HttpResponse.json({ actionStatus: success(), filter });
  }),
  http.post('*/api/rest/filter', async ({ request }) => {
    const payload = (await request.json()) as FilterFormValues;
    if (findFilter(payload.code)) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Already exists' } }, { status: 400 });
    }
    filtersStore.push(payload);
    return HttpResponse.json(success());
  }),
  http.put('*/api/rest/filter', async ({ request }) => {
    const payload = (await request.json()) as FilterFormValues;
    const index = filtersStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      filtersStore[index] = { ...filtersStore[index], ...payload };
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/filter/createOrUpdate', async ({ request }) => {
    const payload = (await request.json()) as FilterFormValues;
    const index = filtersStore.findIndex((item) => item.code === payload.code);
    if (index >= 0) {
      filtersStore[index] = { ...filtersStore[index], ...payload };
    } else {
      filtersStore.push(payload);
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/filter/{code}/enable', ({ params }) => {
    const filter = findFilter(String(params.code));
    if (filter) {
      filter.disabled = false;
    }
    return HttpResponse.json(success());
  }),
  http.post('*/api/rest/filter/{code}/disable', ({ params }) => {
    const filter = findFilter(String(params.code));
    if (filter) {
      filter.disabled = true;
    }
    return HttpResponse.json(success());
  }),

  http.delete('*/api/rest/billing/invoicing/billingRun/{billingRunId}/canceledInvoices', ({ params }) =>
    HttpResponse.json(success(`Billing run ${params.billingRunId} canceled invoices deleted`)),
  ),
  http.put('*/api/rest/billing/invoicing/billingRun/{billingRunId}/cancelInvoice', async ({ request, params }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(
      success(`${invoiceCount} invoice(s) canceled for run ${params.billingRunId ?? 'unknown'}`),
    );
  }),
  http.put('*/api/rest/billing/invoicing/billingRun/{billingRunId}/moveInvoice', async ({ request, params }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(
      success(`${invoiceCount} invoice(s) moved for run ${params.billingRunId ?? 'unknown'}`),
    );
  }),
  http.put('*/api/rest/billing/invoicing/billingRun/{billingRunId}/rejectInvoice', async ({ request, params }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(
      success(`${invoiceCount} invoice(s) rejected for run ${params.billingRunId ?? 'unknown'}`),
    );
  }),
  http.put('*/api/rest/billing/invoicing/billingRun/{billingRunId}/validateInvoice', async ({ request, params }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(
      success(`${invoiceCount} invoice(s) validated for run ${params.billingRunId ?? 'unknown'}`),
    );
  }),
  http.put(
    '*/api/rest/billing/invoicing/billingRun/{billingRunId}/invalidateInvoiceDocuments',
    async ({ request, params }) => {
      const payload = (await request.json()) as InvalidateInvoiceDocumentsDto;
      const xml = payload?.invalidateXMLInvoices ? 'XML' : undefined;
      const pdf = payload?.invalidatePDFInvoices ? 'PDF' : undefined;
      const invalidated = [xml, pdf].filter(Boolean).join(' & ') || 'no documents';
      return HttpResponse.json(
        success(`${invalidated} invalidated for run ${params.billingRunId ?? 'unknown'}`),
      );
    },
  ),
  http.post('*/api/rest/billing/invoicing/cancelBillingRun', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json(
      success(
        billingRunId ? `Billing run ${billingRunId} canceled` : 'Billing run cancellation requested',
      ),
    );
  }),
  http.put('*/api/rest/billing/invoicing/cancelBillingRun', async ({ request }) => {
    const payload = (await request.json()) as CancelBillingRunFormValues;
    return HttpResponse.json(
      success(`Billing run ${payload?.billingRunId ?? 'unknown'} cancelation scheduled`),
    );
  }),
  http.post('*/api/rest/billing/invoicing/createBillingRun', async ({ request }) => {
    const payload = (await request.json()) as CreateBillingRunDto;
    const code = payload?.billingCycleCode ? `${payload.billingCycleCode}-BR-001` : 'BR-2024-01';
    return HttpResponse.json({ ...success('Billing run created'), entityCode: code });
  }),
  http.post('*/api/rest/billing/invoicing/createOrUpdateBillingRun', async ({ request }) => {
    const payload = (await request.json()) as CreateBillingRunDto;
    const code = payload?.billingCycleCode ? `${payload.billingCycleCode}-BR-001` : 'BR-2024-01';
    return HttpResponse.json({ ...success('Billing run saved'), entityCode: code });
  }),
  http.put('*/api/rest/billing/invoicing/rebuildInvoice', async ({ request }) => {
    const payload = (await request.json()) as InvoiceValidationDto;
    const invoiceCount = payload?.invoices?.length ?? 0;
    return HttpResponse.json(success(`${invoiceCount} invoice(s) queued for rebuild`));
  }),
  http.post('*/api/rest/billing/invoicing/validateBillingRun', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json(
      success(
        billingRunId ? `Billing run ${billingRunId} validated` : 'Billing run validation requested',
      ),
    );
  }),
  http.put('*/api/rest/billing/invoicing/validateBillingRun', async ({ request }) => {
    const payload = (await request.json()) as CancelBillingRunFormValues;
    return HttpResponse.json(
      success(`Billing run ${payload?.billingRunId ?? 'unknown'} validation scheduled`),
    );
  }),
  http.post('*/api/rest/billing/invoicing/getBillingAccountListInRun', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    const billingAccounts = customerAccountsStore.slice(0, 3).map((account, index) => ({
      code: index === 2 ? undefined : account.code,
      description: account.description ?? `Billing account ${index + 1}`,
    }));
    return HttpResponse.json({
      actionStatus: success(`Run ${billingRunId ?? 'N/A'} accounts retrieved`),
      billingAccountsDto: {
        billingRunId,
        billingAccount: billingAccounts,
      },
    });
  }),
  http.post('*/api/rest/billing/invoicing/getBillingRunInfo', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json({
      actionStatus: success(),
      billingRunDto: {
        code: billingRunId ? `BR-${billingRunId}` : 'BR-2024-01',
        status: 'VALIDATED',
        billingCycle: { code: 'PLAN-2024' },
        processDate: new Date().toISOString(),
        invoiceDate: new Date().toISOString(),
        statusDate: new Date().toISOString(),
        amountWithoutTax: 1200,
        amountTax: 240,
        amountWithTax: 1440,
      },
    });
  }),
  http.post('*/api/rest/billing/invoicing/getPreInvoicingReport', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json({
      actionStatus: success(),
      preInvoicingReportsDTO: {
        billingCycleCode: 'PLAN-2024',
        billableBillingAccountNumber: 3,
        amoutWitountTax: 1200,
        taxesAmount: 240,
        lastTransactionDate: new Date().toISOString(),
        invoiceDate: new Date().toISOString(),
        billingRunId,
      },
    });
  }),
  http.post('*/api/rest/billing/invoicing/getPostInvoicingReport', async ({ request }) => {
    const payload = await request.json();
    const billingRunId = extractBillingRunId(payload);
    return HttpResponse.json({
      actionStatus: success(),
      postInvoicingReportsDTO: {
        invoicesNumber: 3,
        positiveInvoicesAmount: 1500,
        negativeInvoicesAmount: 100,
        globalAmount: 1400,
        billingRunId,
      },
    });
  }),
  http.get('*/api/rest/billing/invoicing/version', () => HttpResponse.json(success('1.0.0'))),

  http.post('*/api/rest/v2/mediation/cdrs/registerCdrList', async ({ request }) => {
    const payload = ((await request.json().catch(() => ({}))) ?? {}) as {
      cdrs?: string[];
    };
    const count = Array.isArray(payload.cdrs) ? payload.cdrs.length : 0;
    return HttpResponse.json({ actionStatus: success(`CDRs registered (${count})`) });
  }),
  http.post('*/api/rest/billing/mediation/processCdrList', async ({ request }) => {
    await request.text();
    return HttpResponse.json({
      actionStatus: success('CDRs processed'),
      listProcessCdrDto: [
        { cdrId: 1, status: 'PROCESSED' },
        { cdrId: 2, status: 'ERROR', rejectReason: 'Missing wallet' },
      ],
    });
  }),
  http.post('*/api/rest/v2/mediation/cdrs/chargeCdrList', async ({ request }) => {
    await request.json();
    const reservationId = nextReservationId++;
    mediationReservations.set(reservationId, { availableQuantity: 120 });
    return HttpResponse.json({
      actionStatus: success('CDR charged'),
      amountWithoutTax: 1250.5,
      amountTax: 250.1,
      amountWithTax: 1500.6,
      walletOperationCount: 4,
      reservationIds: [reservationId],
      edrIds: [9001, 9002],
    });
  }),
  http.post('*/api/rest/v2/mediation/cdrs/reserveCdrList', async ({ request }) => {
    await request.json();
    const reservationId = nextReservationId++;
    const availableQuantity = 100 + Math.random() * 50;
    mediationReservations.set(reservationId, { availableQuantity });
    return HttpResponse.json({
      actionStatus: success('Reservation created'),
      reservationId,
      availableQuantity,
    });
  }),
  http.post('*/api/rest/billing/mediation/confirmReservation', async ({ request }) => {
    const payload = (await request.json()) as { reservationId?: number };
    if (payload.reservationId && mediationReservations.has(payload.reservationId)) {
      mediationReservations.delete(payload.reservationId);
    }
    return HttpResponse.json(success('Reservation confirmed'));
  }),
  http.post('*/api/rest/billing/mediation/cancelReservation', async ({ request }) => {
    const payload = (await request.json()) as { reservationId?: number };
    if (payload.reservationId && mediationReservations.has(payload.reservationId)) {
      mediationReservations.delete(payload.reservationId);
    }
    return HttpResponse.json(success('Reservation cancelled'));
  }),
  http.post('*/api/rest/billing/mediation/notifyOfRejectedCdrs', async ({ request }) => {
    await request.json();
    return HttpResponse.json(success('Rejected CDRs notified'));
  }),
  http.post('*/api/rest/billing/mediation/createCDR', async ({ request }) => {
    await request.json();
    return HttpResponse.json(success('CDR created'));
  }),

  http.post('*/v2/articles/accountingCodeMapping', async ({ request }) => {
    const payload = (await request.json()) as AccountingCodeMappingInputDto;
    const normalized = normalizeAccountingCodeMappingInput(payload);

    if (!normalized.accountingArticleCode) {
      return HttpResponse.json({ status: 'FAIL', message: 'Missing accountingArticleCode' }, { status: 400 });
    }

    const mappings = normalized.mappings.map((mapping) => {
      if (typeof mapping.id === 'number') {
        return mapping;
      }
      const id = nextAccountingCodeMappingId++;
      return { ...mapping, id };
    });

    accountingCodeMappingsStore.set(normalized.accountingArticleCode, mappings);

    return HttpResponse.json(
      toAccountingCodeMappingResponse(normalized.accountingArticleCode, mappings),
    );
  }),

  http.put('*/v2/articles/{accountingArticleCode}/accountingCodeMapping', async ({ request, params }) => {
    const payload = (await request.json()) as AccountingCodeMappingInputDto;
    const accountingArticleCode =
      typeof params.accountingArticleCode === 'string'
        ? params.accountingArticleCode
        : payload.accountingArticleCode ?? '';

    if (!accountingArticleCode) {
      return HttpResponse.json({ status: 'FAIL', message: 'Missing accountingArticleCode' }, { status: 400 });
    }

    const normalized = normalizeAccountingCodeMappingInput({
      ...payload,
      accountingArticleCode,
    });

    const mappings = normalized.mappings.map((mapping) => {
      if (typeof mapping.id === 'number') {
        return mapping;
      }
      const id = nextAccountingCodeMappingId++;
      return { ...mapping, id };
    });

    accountingCodeMappingsStore.set(accountingArticleCode, mappings);

    return HttpResponse.json(toAccountingCodeMappingResponse(accountingArticleCode, mappings));
  }),

  http.get(
    '*/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
    ({ params }) => {
      const code = typeof params.EmailTemplateCode === 'string' ? params.EmailTemplateCode.trim() : '';
      if (!code) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing email template code' } }, { status: 400 });
      }

      const template = findEmailTemplate(code);
      if (!template) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Email template not found' } }, { status: 404 });
      }

      return HttpResponse.json({ actionStatus: success(), emailTemplate: toEmailTemplateDto(template) });
    },
  ),

  http.post(
    '*/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
    async ({ params, request }) => {
      const pathCode = typeof params.EmailTemplateCode === 'string' ? params.EmailTemplateCode.trim() : '';
      const payload = (await request.json()) as EmailTemplateDto;
      const resolvedCode = pathCode || payload.code;
      if (!resolvedCode) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing email template code' } }, { status: 400 });
      }

      const dto = upsertEmailTemplate({ ...payload, code: resolvedCode });
      return HttpResponse.json({ actionStatus: success(), emailTemplate: dto });
    },
  ),

  http.put(
    '*/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
    async ({ params, request }) => {
      const pathCode = typeof params.EmailTemplateCode === 'string' ? params.EmailTemplateCode.trim() : '';
      const payload = (await request.json()) as EmailTemplateDto;
      const resolvedCode = pathCode || payload.code;
      if (!resolvedCode) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing email template code' } }, { status: 400 });
      }

      const dto = upsertEmailTemplate({ ...payload, code: resolvedCode });
      return HttpResponse.json({ actionStatus: success(), emailTemplate: dto });
    },
  ),

  http.patch(
    '*/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
    async ({ params, request }) => {
      const pathCode = typeof params.EmailTemplateCode === 'string' ? params.EmailTemplateCode.trim() : '';
      const payload = (await request.json()) as Partial<EmailTemplateDto>;
      const resolvedCode = pathCode || payload.code;
      if (!resolvedCode) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing email template code' } }, { status: 400 });
      }

      const existing = findEmailTemplate(resolvedCode);
      const base = existing ? toEmailTemplateDto(existing) : { code: resolvedCode };
      const dto = upsertEmailTemplate({ ...base, ...payload, code: resolvedCode });
      return HttpResponse.json({ actionStatus: success(), emailTemplate: dto });
    },
  ),

  http.delete(
    '*/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
    ({ params }) => {
      const code = typeof params.EmailTemplateCode === 'string' ? params.EmailTemplateCode.trim() : '';
      if (!code) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing email template code' } }, { status: 400 });
      }

      deleteEmailTemplate(code);
      return HttpResponse.json({ actionStatus: success() });
    },
  ),

  http.post('*/api/rest/v2/setting/internationalSettings/SMSTemplate', async ({ request }) => {
    const payload = (await request.json()) as SMSTemplateDto;
    const resolvedCode = payload.code?.trim();
    if (!resolvedCode) {
      return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing SMS template code' } }, { status: 400 });
    }

    const dto = upsertSmsTemplate({ ...payload, code: resolvedCode });
    return HttpResponse.json({ actionStatus: success(), smsTemplate: dto });
  }),

  http.get(
    '*/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}',
    ({ params }) => {
      const code = typeof params.SMSTemplateCode === 'string' ? params.SMSTemplateCode.trim() : '';
      if (!code) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing SMS template code' } }, { status: 400 });
      }

      const template = findSmsTemplate(code);
      if (!template) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'SMS template not found' } }, { status: 404 });
      }

      return HttpResponse.json({ actionStatus: success(), smsTemplate: toSmsTemplateDto(template) });
    },
  ),

  http.put(
    '*/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}',
    async ({ params, request }) => {
      const pathCode = typeof params.SMSTemplateCode === 'string' ? params.SMSTemplateCode.trim() : '';
      const payload = (await request.json()) as SMSTemplateDto;
      const resolvedCode = pathCode || payload.code;
      if (!resolvedCode) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing SMS template code' } }, { status: 400 });
      }

      const dto = upsertSmsTemplate({ ...payload, code: resolvedCode });
      return HttpResponse.json({ actionStatus: success(), smsTemplate: dto });
    },
  ),

  http.delete(
    '*/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}',
    ({ params }) => {
      const code = typeof params.SMSTemplateCode === 'string' ? params.SMSTemplateCode.trim() : '';
      if (!code) {
        return HttpResponse.json({ actionStatus: { status: 'FAIL', message: 'Missing SMS template code' } }, { status: 400 });
      }

      deleteSmsTemplate(code);
      return HttpResponse.json({ actionStatus: success() });
    },
  ),

  http.post('*/api/rest/massImport/uploadAndImport', async ({ request }) => {
    const payload = (await request.json()) as { filename?: string };
    const fileName = typeof payload?.filename === 'string' ? payload.filename : massImportDetection.fileName;
    return HttpResponse.json({ ...massImportDetection, fileName });
  }),
];
