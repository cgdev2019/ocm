import { useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { QueryResponse, QueryResult } from '@/features/query/types';

const adaptResponse = (payload: QueryResponse): QueryResult => ({
  actionMessage: payload.actionStatus?.message ?? undefined,
  result: payload.result ?? undefined,
});

export const useQueryService = () =>
  useQuery({
    queryKey: queryKeys.queryService.search(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/query');
      const payload = unwrapResponse<QueryResponse>(
        { data: result.data, error: result.error },
        'Unable to execute query service',
      );
      assertActionSuccess(payload.actionStatus, 'Query service request failed');
      return adaptResponse(payload);
    },
  });
