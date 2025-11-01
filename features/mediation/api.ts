import { useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import type { ActionStatus } from '@/features/customers/types';
import type {
  ChargeCdrFormValues,
  ChargeCdrResponseDto,
  ChargeCdrSummary,
  CreateCdrFormValues,
  CdrDto,
  CdrListDto,
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

const adaptChargeResponse = (payload: ChargeCdrResponseDto | undefined): ChargeCdrSummary => ({
  message: payload?.actionStatus?.message ?? undefined,
  amountWithoutTax: payload?.amountWithoutTax ?? undefined,
  amountTax: payload?.amountTax ?? undefined,
  amountWithTax: payload?.amountWithTax ?? undefined,
  walletOperationCount: payload?.walletOperationCount ?? undefined,
  reservationIds: payload?.reservationIds ?? undefined,
  edrIds: payload?.edrIds ?? undefined,
});

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

export const useMediationOperations = () => {
  const apiClient = getApiClient();

  const register = useMutation({
    mutationFn: async (values: RegisterCdrFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/mediation/registerCdrList', { body: values.payload });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to register CDR list',
      );
      assertActionSuccess(payload, 'Register CDR list failed');
      return { message: payload.message };
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
      const { payload, maxDepth, ...flags } = values;
      const result = await apiClient.POST('/api/rest/billing/mediation/chargeCdr', {
        params: {
          query: {
            ...Object.fromEntries(
              Object.entries(flags).filter(([, value]) => value !== undefined && value !== null),
            ),
            ...(typeof maxDepth === 'number' ? { maxDepth } : {}),
          },
        },
        body: payload,
      });
      const response = unwrapResponse<ChargeCdrResponseDto>(
        { data: result.data, error: result.error },
        'Unable to charge CDR',
      );
      assertActionSuccess(response.actionStatus, 'Charge CDR failed');
      return adaptChargeResponse(response);
    },
  });

  const reserve = useMutation({
    mutationFn: async (values: ReserveCdrFormValues) => {
      const result = await apiClient.POST('/api/rest/billing/mediation/reserveCdr', { body: values.payload });
      const payload = unwrapResponse<CdrReservationResponseDto>(
        { data: result.data, error: result.error },
        'Unable to reserve CDR',
      );
      assertActionSuccess(payload.actionStatus, 'Reserve CDR failed');
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
