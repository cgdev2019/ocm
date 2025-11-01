import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  AssignAccountOperationDto,
  AssignAccountOperationFormValues,
  AssignAccountOperationResponse,
} from '@/features/account-operations/types';

const toNumber = (value: string): number => {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    throw new Error('forms.invalidNumber');
  }
  return parsed;
};

const toCustomerAccountId = (value?: string | null): number | undefined => {
  if (!value || value.trim().length === 0) {
    return undefined;
  }
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};

const mapFormToDto = (values: AssignAccountOperationFormValues): AssignAccountOperationDto => ({
  customerAccount: {
    code: values.customerAccountCode.trim(),
    id: toCustomerAccountId(values.customerAccountId),
  },
});

export const useAssignAccountOperation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: AssignAccountOperationFormValues) => {
      const apiClient = getApiClient();
      const result = await apiClient.POST(
        '/api/rest/v2/accountReceivable/accountOperation/assignOperation/{id}' as never,
        {
          params: { path: { id: toNumber(values.accountOperationId) } },
          body: mapFormToDto(values),
        } as never,
      );
      const payload = unwrapResponse<AssignAccountOperationResponse>(
        {
          data: result.data as AssignAccountOperationResponse | undefined,
          error: result.error,
        },
        'Unable to assign account operation',
      );
      const actionStatus = payload.actionStatus ?? undefined;
      assertActionSuccess(actionStatus, 'Unable to assign account operation');
      return { ...payload, actionStatus };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.accountOperations.root });
    },
  });
};
