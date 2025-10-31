import type { components } from '@/lib/api/generated/schema';

export type GenericCodeDto = components['schemas']['GenericCodeDto'];
export type SequenceDto = components['schemas']['SequenceDto'];
export type GetGenericCodeResponseDto = components['schemas']['GetGenericCodeResponseDto'];
export type GenericCodeResponseDto = components['schemas']['GenericCodeResponseDto'];

export type GenericCodeListItem = {
  entityClass: string;
  formatEL?: string;
  prefixOverride?: string;
  sequenceType?: string;
  sequencePattern?: string;
};

export type SequenceFormValues = {
  prefixEL?: string;
  invoiceSequenceCode?: string;
  sequenceSize?: number;
  currentInvoiceNb?: number;
  sequencePattern?: string;
  sequenceType?: SequenceDto['sequenceType'];
};

export type GenericCodeFormValues = {
  entityClass: string;
  formatEL?: string;
  prefixOverride?: string;
  sequence?: SequenceFormValues;
};
