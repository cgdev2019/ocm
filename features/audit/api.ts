import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/audit/types';

const toggleAudit = async (mode: 'enable' | 'disable') => {
  const apiClient = getApiClient();
  const result = await apiClient.PUT('/api/rest/admin/audit/{enableORdisable}', {
    params: { path: { enableORdisable: mode } },
  });
  const payload = unwrapResponse<ActionStatus>(
    { data: result.data, error: result.error },
    mode === 'enable' ? 'Failed to enable audit logging' : 'Failed to disable audit logging',
  );
  assertActionSuccess(payload, mode === 'enable' ? 'Failed to enable audit logging' : 'Failed to disable audit logging');
  return payload;
};

export const useAuditMutations = () => {
  const queryClient = useQueryClient();

  const enable = useMutation({
    mutationFn: () => toggleAudit('enable'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.audit.version() });
    },
  });

  const disable = useMutation({
    mutationFn: () => toggleAudit('disable'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.audit.version() });
    },
  });

  return useMemo(() => ({ enable, disable }), [disable, enable]);
};

export const useAuditVersion = () =>
  useQuery({
    queryKey: queryKeys.audit.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/admin/audit/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load audit service version',
      );
      assertActionSuccess(payload, 'Audit version request failed');
      return payload.message ?? '';
    },
  });
