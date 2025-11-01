import { useMemo } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import {
  type BillingAccountInRunListItem,
  type BillingRunActionResult,
  type BillingRunDto,
  type BillingRunIdFormValues,
  type BillingRunInfoSummary,
  type CancelBillingRunFormValues,
  type CreateBillingRunDto,
  type CreateBillingRunFormValues,
  type InvoiceActionFormValues,
  type InvalidateInvoiceDocumentsFormValues,
  type PostInvoicingReportSummary,
  type PreInvoicingReportSummary,
  type ValidateBillingRunFormValues,
  type ActionStatus,
  type GetBillingAccountListInRunResponseDto,
  type GetBillingRunInfoResponseDto,
  type GetPostInvoicingReportsResponseDto,
  type GetPreInvoicingReportsResponseDto,
  type InvoiceValidationDto,
  type InvalidateInvoiceDocumentsDto,
} from '@/features/invoicing/types';

type BillingRunDtoWithExtensions = BillingRunDto & {
  code?: string;
  amountWithoutTax?: number;
  amountTax?: number;
  amountWithTax?: number;
};

const parseInvoiceIds = (input: string): number[] =>
  input
    .split(/[,\s]+/)
    .map((value) => Number(value.trim()))
    .filter((value) => !Number.isNaN(value) && value > 0);

const toInvoiceValidationDto = (values: InvoiceActionFormValues): InvoiceValidationDto => ({
  invoices: parseInvoiceIds(values.invoiceIds),
  deleteCanceledInvoices: values.deleteCanceledInvoices,
});

const toInvalidateInvoiceDocumentsDto = (
  values: InvalidateInvoiceDocumentsFormValues,
): InvalidateInvoiceDocumentsDto => ({
  invalidateXMLInvoices: values.invalidateXMLInvoices,
  invalidatePDFInvoices: values.invalidatePDFInvoices,
});

const toCreateBillingRunDto = (values: CreateBillingRunFormValues): CreateBillingRunDto => ({
  billingCycleCode: values.billingCycleCode,
  billingRunTypeEnum: values.billingRunTypeEnum,
  startDate: values.startDate,
  endDate: values.endDate,
  invoiceDate: values.invoiceDate,
  lastTransactionDate: values.lastTransactionDate,
  referenceDate: values.referenceDate,
  collectionDate: values.collectionDate,
  computeDatesAtValidation: values.computeDatesAtValidation,
  skipValidationScript: values.skipValidationScript,
  rejectAutoAction: values.rejectAutoAction,
  suspectAutoAction: values.suspectAutoAction,
  generateAO: values.generateAO,
});

const adaptActionStatus = (status: ActionStatus | undefined): BillingRunActionResult => ({
  message: status?.message ?? undefined,
});

const adaptBillingAccounts = (
  response: GetBillingAccountListInRunResponseDto,
): BillingAccountInRunListItem[] => {
  const list = response.billingAccountsDto?.billingAccount ?? [];
  return list.map((account, index) => ({
    id: account?.code ?? `account-${index}`,
    code: account?.code ?? undefined,
    description: account?.description ?? undefined,
  }));
};

const adaptBillingRunInfo = (response: GetBillingRunInfoResponseDto): BillingRunInfoSummary => {
  const dto = response.billingRunDto as BillingRunDtoWithExtensions | undefined;
  return {
    code: dto?.code ?? dto?.invoiceNumber?.toString() ?? undefined,
    status: dto?.status ?? undefined,
    billingCycle: dto?.billingCycle?.code ?? undefined,
    processDate: dto?.processDate ?? undefined,
    invoiceDate: dto?.invoiceDate ?? undefined,
    statusDate: dto?.statusDate ?? undefined,
    amountWithoutTax:
      dto?.prAmountWithoutTax ?? dto?.producibleAmountWithoutTax ?? dto?.amountWithoutTax ?? undefined,
    amountTax: dto?.prAmountTax ?? dto?.producibleAmountTax ?? dto?.amountTax ?? undefined,
    amountWithTax:
      dto?.prAmountWithTax ?? dto?.producibleAmountWithTax ?? dto?.amountWithTax ?? undefined,
  };
};

const adaptPreInvoicingReport = (
  response: GetPreInvoicingReportsResponseDto,
): PreInvoicingReportSummary => {
  const dto = response.preInvoicingReportsDTO;
  return {
    billingCycleCode: dto?.billingCycleCode ?? undefined,
    billableAccounts: dto?.billableBillingAccountNumber ?? undefined,
    totalAmountWithoutTax: dto?.amoutWitountTax ?? undefined,
    taxesAmount: dto?.taxesAmount ?? undefined,
    lastTransactionDate: dto?.lastTransactionDate ?? undefined,
    invoiceDate: dto?.invoiceDate ?? undefined,
  };
};

const adaptPostInvoicingReport = (
  response: GetPostInvoicingReportsResponseDto,
): PostInvoicingReportSummary => {
  const dto = response.postInvoicingReportsDTO;
  return {
    invoicesNumber: dto?.invoicesNumber ?? undefined,
    positiveInvoicesAmount: dto?.positiveInvoicesAmount ?? undefined,
    negativeInvoicesAmount: dto?.negativeInvoicesAmount ?? undefined,
    globalAmount: dto?.globalAmount ?? undefined,
  };
};

const adaptActionResponse = (payload: ActionStatus | undefined) => {
  assertActionSuccess(payload, 'Invoicing operation failed');
  return adaptActionStatus(payload);
};

export const useInvoicingOperations = () => {
  const apiClient = getApiClient();

  const deleteCanceledInvoices = useMutation({
    mutationFn: async (values: BillingRunIdFormValues) => {
      const result = await apiClient.DELETE(
        '/api/rest/billing/invoicing/billingRun/{billingRunId}/canceledInvoices',
        { params: { path: { billingRunId: values.billingRunId } } },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to delete canceled invoices',
      );
      return adaptActionResponse(payload);
    },
  });

  const cancelInvoice = useMutation({
    mutationFn: async (values: InvoiceActionFormValues) => {
      const dto = toInvoiceValidationDto(values);
      const result = await apiClient.PUT(
        '/api/rest/billing/invoicing/billingRun/{billingRunId}/cancelInvoice',
        {
          params: { path: { billingRunId: values.billingRunId } },
          body: dto,
        },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to cancel invoices',
      );
      return adaptActionResponse(payload);
    },
  });

  const moveInvoice = useMutation({
    mutationFn: async (values: InvoiceActionFormValues) => {
      const dto = toInvoiceValidationDto(values);
      const result = await apiClient.PUT(
        '/api/rest/billing/invoicing/billingRun/{billingRunId}/moveInvoice',
        {
          params: { path: { billingRunId: values.billingRunId } },
          body: dto,
        },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to move invoices',
      );
      return adaptActionResponse(payload);
    },
  });

  const rejectInvoice = useMutation({
    mutationFn: async (values: InvoiceActionFormValues) => {
      const dto = toInvoiceValidationDto(values);
      const result = await apiClient.PUT(
        '/api/rest/billing/invoicing/billingRun/{billingRunId}/rejectInvoice',
        {
          params: { path: { billingRunId: values.billingRunId } },
          body: dto,
        },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to reject invoices',
      );
      return adaptActionResponse(payload);
    },
  });

  const validateInvoice = useMutation({
    mutationFn: async (values: InvoiceActionFormValues) => {
      const dto = toInvoiceValidationDto(values);
      const result = await apiClient.PUT(
        '/api/rest/billing/invoicing/billingRun/{billingRunId}/validateInvoice',
        {
          params: { path: { billingRunId: values.billingRunId } },
          body: dto,
        },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to validate invoices',
      );
      return adaptActionResponse(payload);
    },
  });

  const invalidateInvoiceDocuments = useMutation({
    mutationFn: async (values: InvalidateInvoiceDocumentsFormValues) => {
      const dto = toInvalidateInvoiceDocumentsDto(values);
      const result = await apiClient.PUT(
        '/api/rest/billing/invoicing/billingRun/{billingRunId}/invalidateInvoiceDocuments',
        {
          params: { path: { billingRunId: values.billingRunId } },
          body: dto,
        },
      );
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to invalidate invoice documents',
      );
      return adaptActionResponse(payload);
    },
  });

  const cancelBillingRun = useMutation({
    mutationFn: async (values: CancelBillingRunFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/invoicing/cancelBillingRun', {
        body: values.billingRunId,
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to cancel billing run',
      );
      return adaptActionResponse(payload);
    },
  });

  const cancelBillingRunById = useMutation({
    mutationFn: async (values: CancelBillingRunFormValues) => {
      const result = await apiClient.PUT('/api/rest/billing/invoicing/cancelBillingRun', {
        body: { billingRunId: values.billingRunId },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to cancel billing run by id',
      );
      return adaptActionResponse(payload);
    },
  });

  const createBillingRun = useMutation({
    mutationFn: async (values: CreateBillingRunFormValues) => {
      const dto = toCreateBillingRunDto(values);
      const result = await apiClient.POST('/api/rest/billing/invoicing/createBillingRun', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create billing run',
      );
      return adaptActionResponse(payload);
    },
  });

  const createOrUpdateBillingRun = useMutation({
    mutationFn: async (values: CreateBillingRunFormValues) => {
      const dto = toCreateBillingRunDto(values);
      const result = await apiClient.POST('/api/rest/billing/invoicing/createOrUpdateBillingRun', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create or update billing run',
      );
      return adaptActionResponse(payload);
    },
  });

  const rebuildInvoice = useMutation({
    mutationFn: async (values: InvoiceActionFormValues) => {
      const dto = toInvoiceValidationDto(values);
      const result = await apiClient.PUT('/api/rest/billing/invoicing/rebuildInvoice', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to rebuild invoices',
      );
      return adaptActionResponse(payload);
    },
  });

  const validateBillingRun = useMutation({
    mutationFn: async (values: BillingRunIdFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/invoicing/validateBillingRun', {
        body: values.billingRunId,
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to validate billing run',
      );
      return adaptActionResponse(payload);
    },
  });

  const validateBillingRunById = useMutation({
    mutationFn: async (values: ValidateBillingRunFormValues) => {
      const result = await apiClient.PUT('/api/rest/billing/invoicing/validateBillingRun', {
        body: { billingRunId: values.billingRunId },
      });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to validate billing run by id',
      );
      return adaptActionResponse(payload);
    },
  });

  const billingAccountListInRun = useMutation({
    mutationKey: queryKeys.invoicing.billingAccounts(),
    mutationFn: async (values: BillingRunIdFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/invoicing/getBillingAccountListInRun', {
        body: values.billingRunId,
      });
      const payload = unwrapResponse<GetBillingAccountListInRunResponseDto>(
        { data: result.data, error: result.error },
        'Unable to retrieve billing accounts',
      );
      assertActionSuccess(payload.actionStatus, 'Billing accounts request failed');
      return adaptBillingAccounts(payload);
    },
  });

  const billingRunInfo = useMutation({
    mutationKey: queryKeys.invoicing.billingRunInfo(),
    mutationFn: async (values: BillingRunIdFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/invoicing/getBillingRunInfo', {
        body: values.billingRunId,
      });
      const payload = unwrapResponse<GetBillingRunInfoResponseDto>(
        { data: result.data, error: result.error },
        'Unable to retrieve billing run info',
      );
      assertActionSuccess(payload.actionStatus, 'Billing run info request failed');
      return adaptBillingRunInfo(payload);
    },
  });

  const preInvoicingReport = useMutation({
    mutationKey: queryKeys.invoicing.preInvoicingReport(),
    mutationFn: async (values: BillingRunIdFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/invoicing/getPreInvoicingReport', {
        body: values.billingRunId,
      });
      const payload = unwrapResponse<GetPreInvoicingReportsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to retrieve pre-invoicing report',
      );
      assertActionSuccess(payload.actionStatus, 'Pre-invoicing report request failed');
      return adaptPreInvoicingReport(payload);
    },
  });

  const postInvoicingReport = useMutation({
    mutationKey: queryKeys.invoicing.postInvoicingReport(),
    mutationFn: async (values: BillingRunIdFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/invoicing/getPostInvoicingReport', {
        body: values.billingRunId,
      });
      const payload = unwrapResponse<GetPostInvoicingReportsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to retrieve post-invoicing report',
      );
      assertActionSuccess(payload.actionStatus, 'Post-invoicing report request failed');
      return adaptPostInvoicingReport(payload);
    },
  });

  return useMemo(
    () => ({
      deleteCanceledInvoices,
      cancelInvoice,
      moveInvoice,
      rejectInvoice,
      validateInvoice,
      invalidateInvoiceDocuments,
      cancelBillingRun,
      cancelBillingRunById,
      createBillingRun,
      createOrUpdateBillingRun,
      rebuildInvoice,
      validateBillingRun,
      validateBillingRunById,
      billingAccountListInRun,
      billingRunInfo,
      preInvoicingReport,
      postInvoicingReport,
    }),
    [
      billingAccountListInRun,
      billingRunInfo,
      cancelBillingRun,
      cancelBillingRunById,
      cancelInvoice,
      createBillingRun,
      createOrUpdateBillingRun,
      deleteCanceledInvoices,
      invalidateInvoiceDocuments,
      moveInvoice,
      postInvoicingReport,
      preInvoicingReport,
      rebuildInvoice,
      rejectInvoice,
      validateBillingRun,
      validateBillingRunById,
      validateInvoice,
    ],
  );
};

export const useInvoicingVersion = () =>
  useQuery({
    queryKey: queryKeys.invoicing.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/billing/invoicing/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to retrieve invoicing version',
      );
      assertActionSuccess(payload, 'Invoicing version request failed');
      return payload.message ?? '';
    },
  });
