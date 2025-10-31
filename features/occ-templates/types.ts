import type { components } from '@/lib/api/generated/schema';

export type OccTemplateDto = components['schemas']['OccTemplateDto'];
export type GetOccTemplateResponse = components['schemas']['GetOccTemplateResponseDto'];
export type GetOccTemplatesResponse = components['schemas']['GetOccTemplatesResponseDto'];

export type OccTemplateListItem = {
  code: string;
  description?: string;
  occCategory: 'DEBIT' | 'CREDIT';
  accountingCode: string;
  accountCode?: string;
};

export type OccTemplateFormValues = {
  code: string;
  description?: string;
  accountingCode: string;
  accountCode?: string;
  occCategory: 'DEBIT' | 'CREDIT';
  accountCodeClientSide?: string;
  journalCode?: string;
  accountingSchemeCode?: string;
  contractAccountingCode?: string;
  contraAccountingCode2?: string;
};
