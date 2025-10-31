import type { components } from '@/lib/api/generated/schema';

export type TerminationReasonDto = components['schemas']['TerminationReasonDto'];
export type GetTerminationReasonResponse = components['schemas']['GetTerminationReasonResponse'];

export type TerminationReasonListItem = {
  code: string;
  description?: string;
  overrideProrata?: TerminationReasonDto['overrideProrata'];
  applyTerminationCharges?: boolean;
};

export type TerminationReasonFormValues = {
  code: string;
  description?: string;
  applyAgreement?: boolean;
  invoiceAgreementImmediately?: boolean;
  applyReimbursment?: boolean;
  applyTerminationCharges?: boolean;
  overrideProrata?: TerminationReasonDto['overrideProrata'];
  reimburseOneshots?: boolean;
};
