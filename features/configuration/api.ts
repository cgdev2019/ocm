import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type { ActionStatus } from '@/features/customers/types';
import type {
  ConfigurationDto,
  ConfigurationFormValues,
  ConfigurationListItem,
  GetConfigurationResponse,
  PropertyDto,
} from '@/features/configuration/types';

const mapToList = (items: ConfigurationListItem[] | undefined) => items ?? [];

const adaptProperties = (properties: PropertyDto[] | undefined): ConfigurationListItem[] =>
  (properties ?? []).map((item) => ({
    key: item.key ?? '',
    value: item.value ?? undefined,
  }));

const mapFormToDto = (values: ConfigurationFormValues): ConfigurationDto => ({
  property: values.key,
  value: values.value,
});

export const useConfigurationProperties = () =>
  useQuery({
    queryKey: queryKeys.configuration.list(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/configurations/properties');
      const payload = unwrapResponse<GetConfigurationResponse>(
        { data: result.data, error: result.error },
        'Unable to load configuration properties',
      );
      assertActionSuccess(payload.actionStatus, 'Configuration endpoint returned an error');
      return adaptProperties(payload.properties);
    },
  });

export const useConfigurationProperty = (key: string | null) => {
  const query = useConfigurationProperties();
  const property = useMemo(() => {
    if (!key || !query.data) {
      return undefined;
    }
    return mapToList(query.data).find((item) => item.key === key);
  }, [key, query.data]);

  return { ...query, data: property };
};

export const useConfigurationMutations = () => {
  const queryClient = useQueryClient();

  const upsert = useMutation({
    mutationFn: async (values: ConfigurationFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/configurations', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Configuration update failed',
      );
      assertActionSuccess(payload, 'Configuration update failed');
      return payload;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.configuration.list() });
      queryClient.invalidateQueries({ queryKey: queryKeys.configuration.detail(variables.key) });
    },
  });

  return useMemo(() => ({ upsert }), [upsert]);
};
