import type { components } from '@/lib/api/generated/schema';

export type InvoiceSequenceDto = components['schemas']['InvoiceSequenceDto'];
export type GetInvoiceSequenceResponse = components['schemas']['GetInvoiceSequenceResponse'];
export type GetInvoiceSequencesResponse = components['schemas']['GetInvoiceSequencesResponse'];

export type InvoiceSequenceListItem = {
  code: string;
  description?: string;
  sequenceType?: InvoiceSequenceDto['sequenceType'];
  sequencePattern?: string;
  sequenceSize?: number;
  currentInvoiceNb?: number;
};

export type InvoiceSequenceFormValues = {
  code: string;
  description?: string;
  sequencePattern?: string;
  sequenceType?: InvoiceSequenceDto['sequenceType'];
  sequenceSize?: number;
  currentInvoiceNb?: number;
};
