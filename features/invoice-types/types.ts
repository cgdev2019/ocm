import type { components } from '@/lib/api/generated/schema';

export type InvoiceTypeDto = components['schemas']['InvoiceTypeDto'];
export type GetInvoiceTypeResponse = components['schemas']['GetInvoiceTypeResponse'];
export type GetInvoiceTypesResponse = components['schemas']['GetInvoiceTypesResponse'];

export type InvoiceTypeListItem = {
  code: string;
  description?: string;
  occTemplateCode: string;
  occTemplateNegativeCode?: string;
  matchingAuto?: boolean;
  invoiceAccountable?: boolean;
  useSelfSequence?: boolean;
};

export type InvoiceTypeFormValues = {
  code: string;
  description?: string;
  occTemplateCode: string;
  occTemplateNegativeCode?: string;
  invoiceValidationScriptCode?: string;
  customInvoiceXmlScriptInstanceCode?: string;
  billingTemplateName?: string;
  emailTemplateCode?: string;
  matchingAuto?: boolean;
  invoiceAccountable?: boolean;
  useSelfSequence?: boolean;
};
