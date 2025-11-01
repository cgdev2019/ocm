import { useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import type { ActionStatus } from '@/lib/api/helpers';
import type {
  ChargeCdrFormValues,
  ChargeCdrResponseDto,
  ChargeCdrSummary,
  ChargeCdrListInputRequest,
  ChargeCdrListResult,
  CreateCdrFormValues,
  CdrDto,
  CdrListDto,
  CdrListInputRequest,
  NotifyRejectedCdrsFormValues,
  PrepaidReservationDto,
  ProcessCdrFormValues,
  ProcessCdrResponseDto,
  ProcessCdrSummary,
  RegisterCdrFormValues,
  ReservationActionFormValues,
  ReservationSummary,
  ReserveCdrFormValues,
  CdrReservationResponseDto,
} from '@/features/mediation/types';

const trimLines = (value: string): string[] =>
  value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const isActionStatusLike = (value: unknown): value is ActionStatus =>
  isRecord(value) && typeof value.status === 'string';

const findActionStatus = (payload: unknown): ActionStatus | undefined => {
  const queue: unknown[] = [payload];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();

    if (!current || visited.has(current)) {
      continue;
    }

    visited.add(current);

    if (isActionStatusLike(current)) {
      return current;
    }

    if (Array.isArray(current)) {
      queue.push(...current);
      continue;
    }

    if (isRecord(current)) {
      queue.push(...Object.values(current));
    }
  }

  return undefined;
};

const extractActionStatusMessage = (payload: unknown, errorMessage: string): string | undefined => {
  const status = findActionStatus(payload);
  if (status) {
    assertActionSuccess(status, errorMessage);
    return status.message ?? undefined;
  }

  return undefined;
};

const adaptChargeResponse = (
  payload: ChargeCdrResponseDto | ChargeCdrListResult | undefined,
  errorMessage: string,
): ChargeCdrSummary => {
  if (!payload) {
    return {
      message: undefined,
      amountWithoutTax: undefined,
      amountTax: undefined,
      amountWithTax: undefined,
      walletOperationCount: undefined,
      reservationIds: undefined,
      edrIds: undefined,
    } satisfies ChargeCdrSummary;
  }

  const listResult = payload as ChargeCdrListResult;

  if (Array.isArray(listResult.chargedCDRs)) {
    const firstCharge = listResult.chargedCDRs.find(
      (item): item is ChargeCdrResponseDto => Boolean(item),
    );

    if (listResult.actionStatus) {
      assertActionSuccess(listResult.actionStatus, errorMessage);
    }

    if (firstCharge?.actionStatus) {
      assertActionSuccess(firstCharge.actionStatus, errorMessage);
    }

    return {
      message: listResult.actionStatus?.message ?? firstCharge?.actionStatus?.message ?? undefined,
      amountWithoutTax:
        (typeof listResult.amountWithoutTax === 'number' ? listResult.amountWithoutTax : undefined) ??
        (firstCharge?.amountWithoutTax ?? undefined),
      amountTax:
        (typeof listResult.amountTax === 'number' ? listResult.amountTax : undefined) ??
        (firstCharge?.amountTax ?? undefined),
      amountWithTax:
        (typeof listResult.amountWithTax === 'number' ? listResult.amountWithTax : undefined) ??
        (firstCharge?.amountWithTax ?? undefined),
      walletOperationCount:
        (typeof listResult.walletOperationCount === 'number'
          ? listResult.walletOperationCount
          : undefined) ?? firstCharge?.walletOperationCount ?? undefined,
      reservationIds: firstCharge?.reservationIds ?? undefined,
      edrIds: firstCharge?.edrIds ?? undefined,
    } satisfies ChargeCdrSummary;
  }

  const dto = payload as ChargeCdrResponseDto;
  assertActionSuccess(dto.actionStatus, errorMessage);

  return {
    message: dto.actionStatus?.message ?? undefined,
    amountWithoutTax: dto.amountWithoutTax ?? undefined,
    amountTax: dto.amountTax ?? undefined,
    amountWithTax: dto.amountWithTax ?? undefined,
    walletOperationCount: dto.walletOperationCount ?? undefined,
    reservationIds: dto.reservationIds ?? undefined,
    edrIds: dto.edrIds ?? undefined,
  } satisfies ChargeCdrSummary;
};

const adaptProcessResponse = (payload: ProcessCdrResponseDto | undefined): ProcessCdrSummary => {
  const items = payload?.listProcessCdrDto ?? [];
  const processedCount = items.filter((item) => item?.status === 'PROCESSED').length;
  const rejectedCount = items.filter((item) => item?.status === 'ERROR' || item?.status === 'DISCARDED').length;
  const errors = items
    .filter((item) => item?.rejectReason)
    .map((item) => ({ cdrId: item?.cdrId ?? undefined, rejectReason: item?.rejectReason ?? undefined }));
  return {
    message: payload?.actionStatus?.message ?? undefined,
    processedCount,
    rejectedCount,
    errors,
  };
};

const adaptReservationResponse = (payload: CdrReservationResponseDto | undefined): ReservationSummary => ({
  message: payload?.actionStatus?.message ?? undefined,
  reservationId: payload?.reservationId ?? undefined,
  availableQuantity: payload?.availableQuantity ?? undefined,
});

const toReservationDto = (values: ReservationActionFormValues): PrepaidReservationDto => ({
  reservationId: values.reservationId,
  consumedQuantity: values.consumedQuantity,
});

const toCdrListDto = (values: NotifyRejectedCdrsFormValues): CdrListDto => ({
  cdr: trimLines(values.payload),
  ipAddress: values.ipAddress,
});

const toCdrDto = (values: CreateCdrFormValues): CdrDto => ({
  eventDate: values.eventDate,
  quantity: values.quantity,
  accessCode: values.accessCode,
  parameter1: values.parameter1,
  parameter2: values.parameter2,
  parameter3: values.parameter3,
  extraParam: values.extraParam,
});

const toCdrListInput = (
  values: RegisterCdrFormValues | ReserveCdrFormValues,
): CdrListInputRequest => ({
  cdrs: trimLines(values.payload),
  ...(values.isReturnEDRs !== undefined ? { isReturnEDRs: values.isReturnEDRs } : {}),
  ...(values.mode ? { mode: values.mode } : {}),
});

const toChargeCdrListInput = (values: ChargeCdrFormValues): ChargeCdrListInputRequest => ({
  cdrs: trimLines(values.payload),
  ...(values.mode ? { mode: values.mode } : {}),
  ...(values.isVirtual !== undefined ? { isVirtual: values.isVirtual } : {}),
  ...(values.isRateTriggeredEdr !== undefined
    ? { isRateTriggeredEdr: values.isRateTriggeredEdr }
    : {}),
  ...(typeof values.maxDepth === 'number' ? { maxDepth: values.maxDepth } : {}),
  ...(values.isReturnEDRs !== undefined ? { isReturnEDRs: values.isReturnEDRs } : {}),
  ...(values.isReturnWalletOperations !== undefined
    ? { isReturnWalletOperations: values.isReturnWalletOperations }
    : {}),
  ...(values.isReturnWalletOperationDetails !== undefined
    ? { isReturnWalletOperationDetails: values.isReturnWalletOperationDetails }
    : {}),
  ...(values.isReturnCounters !== undefined ? { isReturnCounters: values.isReturnCounters } : {}),
  ...(values.isGenerateRTs !== undefined ? { isGenerateRTs: values.isGenerateRTs } : {}),
});

export const useMediationOperations = () => {
  const apiClient = getApiClient();

  const register = useMutation({
    mutationFn: async (values: RegisterCdrFormValues) => {
      const dto = toCdrListInput(values);
      const result = await apiClient.POST(
        '/api/rest/v2/mediation/cdrs/registerCdrList' as never,
        { body: dto } as never,
      );
      const payload = unwrapResponse<unknown>(
        { data: (result.data ?? null) as unknown, error: result.error },
        'Unable to register CDR list',
      );
      const message = extractActionStatusMessage(payload, 'Register CDR list failed');
      return { message };
    },
  });

  const process = useMutation({
    mutationFn: async (values: ProcessCdrFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/mediation/processCdrList', { body: values.payload });
      const payload = unwrapResponse<ProcessCdrResponseDto>(
        { data: result.data, error: result.error },
        'Unable to process CDR list',
      );
      assertActionSuccess(payload.actionStatus, 'Process CDR list failed');
      return adaptProcessResponse(payload);
    },
  });

  const charge = useMutation({
    mutationFn: async (values: ChargeCdrFormValues) => {
      const dto = toChargeCdrListInput(values);
      const result = await apiClient.POST(
        '/api/rest/v2/mediation/cdrs/chargeCdrList' as never,
        { body: dto } as never,
      );
      const response = unwrapResponse<ChargeCdrResponseDto | ChargeCdrListResult | undefined>(
        {
          data: (result.data ?? null) as
            | ChargeCdrResponseDto
            | ChargeCdrListResult
            | undefined,
          error: result.error,
        },
        'Unable to charge CDR list',
      );
      return adaptChargeResponse(response, 'Charge CDR list failed');
    },
  });

  const reserve = useMutation({
    mutationFn: async (values: ReserveCdrFormValues) => {
      const dto = toCdrListInput(values);
      const result = await apiClient.POST(
        '/api/rest/v2/mediation/cdrs/reserveCdrList' as never,
        { body: dto } as never,
      );
      const payload = unwrapResponse<CdrReservationResponseDto>(
        { data: result.data, error: result.error },
        'Unable to reserve CDR list',
      );
      assertActionSuccess(payload.actionStatus, 'Reserve CDR list failed');
      return adaptReservationResponse(payload);
    },
  });

  const confirmReservation = useMutation({
    mutationFn: async (values: ReservationActionFormValues) => {
      const dto = toReservationDto(values);
      const result = await apiClient.POST('/api/rest/billing/mediation/confirmReservation', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to confirm reservation',
      );
      assertActionSuccess(payload, 'Confirm reservation failed');
      return { message: payload.message };
    },
  });

  const cancelReservation = useMutation({
    mutationFn: async (values: ReservationActionFormValues) => {
      const dto = toReservationDto(values);
      const result = await apiClient.POST('/api/rest/billing/mediation/cancelReservation', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to cancel reservation',
      );
      assertActionSuccess(payload, 'Cancel reservation failed');
      return { message: payload.message };
    },
  });

  const notifyRejected = useMutation({
    mutationFn: async (values: NotifyRejectedCdrsFormValues) => {
      const dto = toCdrListDto(values);
      const result = await apiClient.POST('/api/rest/billing/mediation/notifyOfRejectedCdrs', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to notify rejected CDRs',
      );
      assertActionSuccess(payload, 'Notify rejected CDRs failed');
      return { message: payload.message };
    },
  });

  const createCdr = useMutation({
    mutationFn: async (values: CreateCdrFormValues) => {
      const dto = toCdrDto(values);
      const result = await apiClient.POST('/api/rest/billing/mediation/createCDR', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create CDR',
      );
      assertActionSuccess(payload, 'Create CDR failed');
      return { message: payload.message };
    },
  });

  return useMemo(
    () => ({
      register,
      process,
      charge,
      reserve,
      confirmReservation,
      cancelReservation,
      notifyRejected,
      createCdr,
    }),
    [cancelReservation, charge, confirmReservation, createCdr, notifyRejected, process, register, reserve],
  );
};
