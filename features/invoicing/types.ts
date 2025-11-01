import type { components } from '@/lib/api/generated/schema';

export type ActionStatus = components['schemas']['ActionStatus'];
export type InvoiceValidationDto = components['schemas']['InvoiceValidationDto'];
export type InvalidateInvoiceDocumentsDto = components['schemas']['InvalidateInvoiceDocumentsDto'];
export type CancelBillingRunRequestDto = components['schemas']['CancelBillingRunRequestDto'];
export type CreateBillingRunDto = components['schemas']['CreateBillingRunDto'];
export type GetBillingAccountListInRunResponseDto = components['schemas']['GetBillingAccountListInRunResponseDto'];
export type GetBillingRunInfoResponseDto = components['schemas']['GetBillingRunInfoResponseDto'];
export type GetPostInvoicingReportsResponseDto = components['schemas']['GetPostInvoicingReportsResponseDto'];
export type GetPreInvoicingReportsResponseDto = components['schemas']['GetPreInvoicingReportsResponseDto'];
export type BillingRunDto = components['schemas']['BillingRunDto'];
export type BillingAccountDto = components['schemas']['BillingAccountDto'];
export type PostInvoicingReportsDTO = components['schemas']['PostInvoicingReportsDTO'];
export type PreInvoicingReportsDTO = components['schemas']['PreInvoicingReportsDTO'];

export type BillingRunIdFormValues = {
  billingRunId: number;
};

export type InvoiceActionFormValues = {
  billingRunId: number;
  invoiceIds: string;
  deleteCanceledInvoices?: boolean;
};

export type InvalidateInvoiceDocumentsFormValues = {
  billingRunId: number;
  invalidateXMLInvoices?: boolean;
  invalidatePDFInvoices?: boolean;
};

export type CancelBillingRunFormValues = BillingRunIdFormValues;

export type ValidateBillingRunFormValues = BillingRunIdFormValues;

export type CreateBillingRunFormValues = {
  billingCycleCode?: string;
  billingRunTypeEnum?: CreateBillingRunDto['billingRunTypeEnum'];
  startDate?: string;
  endDate?: string;
  invoiceDate?: string;
  lastTransactionDate?: string;
  referenceDate?: CreateBillingRunDto['referenceDate'];
  collectionDate?: string;
  computeDatesAtValidation?: boolean;
  skipValidationScript?: boolean;
  rejectAutoAction?: CreateBillingRunDto['rejectAutoAction'];
  suspectAutoAction?: CreateBillingRunDto['suspectAutoAction'];
  generateAO?: boolean;
};

export type BillingAccountInRunListItem = {
  id: string;
  code?: string;
  description?: string;
};

export type BillingRunInfoSummary = {
  code?: string;
  status?: BillingRunDto['status'];
  billingCycle?: string;
  processDate?: string;
  invoiceDate?: string;
  statusDate?: string;
  amountWithoutTax?: number;
  amountTax?: number;
  amountWithTax?: number;
};

export type PreInvoicingReportSummary = {
  billingCycleCode?: string;
  billableAccounts?: number;
  totalAmountWithoutTax?: number;
  taxesAmount?: number;
  lastTransactionDate?: string;
  invoiceDate?: string;
};

export type PostInvoicingReportSummary = {
  invoicesNumber?: number;
  positiveInvoicesAmount?: number;
  negativeInvoicesAmount?: number;
  globalAmount?: number;
};

export type BillingRunActionResult = {
  message?: string;
};
