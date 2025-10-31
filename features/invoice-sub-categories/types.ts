import type { components } from '@/lib/api/generated/schema';

export type InvoiceSubCategoryDto = components['schemas']['InvoiceSubCategoryDto'];
export type InvoiceSubCategoryResponseDto = components['schemas']['InvoiceSubCategoryResponseDto'];
export type GetInvoiceSubCategoryResponse = components['schemas']['GetInvoiceSubCategoryResponse'];

export type InvoiceSubCategoryListItem = {
  code: string;
  description?: string;
  invoiceCategory: string;
  accountingCode: string;
  occTemplateCode: string;
  occTemplateNegativeCode?: string;
  sortIndex?: number;
};

export type InvoiceSubCategoryFormValues = {
  code: string;
  description?: string;
  invoiceCategory: string;
  accountingCode: string;
  occTemplateCode: string;
  occTemplateNegativeCode?: string;
  sortIndex?: number;
};
