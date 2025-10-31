import type { components } from '@/lib/api/generated/schema';

export type InvoiceCategoryDto = components['schemas']['InvoiceCategoryDto'];
export type InvoiceCategoryResponseDto = components['schemas']['InvoiceCategoryResponseDto'];
export type GetInvoiceCategoryResponse = components['schemas']['GetInvoiceCategoryResponse'];

export type InvoiceCategoryListItem = {
  code: string;
  description?: string;
  occTemplateCode: string;
  occTemplateNegativeCode?: string;
  sortIndex?: number;
};

export type InvoiceCategoryFormValues = {
  code: string;
  description?: string;
  occTemplateCode: string;
  occTemplateNegativeCode?: string;
  sortIndex?: number;
};
