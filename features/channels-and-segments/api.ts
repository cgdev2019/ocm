import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ActionStatus,
  ChannelListItem,
  ChannelsAndSegmentsFilters,
  GetListChannelsAndSegmentsResponseDto,
  SegmentListItem,
} from '@/features/channels-and-segments/types';

const adaptChannels = (
  payload: GetListChannelsAndSegmentsResponseDto | null | undefined,
): ChannelListItem[] => {
  const channels = payload?.channels ?? [];
  return channels.map((channel) => ({
    code: channel.code ?? '',
    description: channel.description ?? undefined,
    disabled: channel.disabled ?? undefined,
    languages:
      channel.languageDescriptions?.map((item) => item.description ?? '').filter(Boolean) ?? [],
  }));
};

const adaptSegments = (
  payload: GetListChannelsAndSegmentsResponseDto | null | undefined,
): SegmentListItem[] => {
  const segments = payload?.segments ?? [];
  return segments.map((segment) => ({
    code: segment.code ?? '',
    description: segment.description ?? undefined,
    active: segment.active ?? undefined,
    parentId: segment.parentId ?? undefined,
  }));
};

export const useChannelsAndSegments = (filters?: ChannelsAndSegmentsFilters) =>
  useQuery({
    queryKey: queryKeys.channelsAndSegments.list(filters ?? {}),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/channelsAndSegments', {
        params: { query: filters?.active != null ? { active: filters.active } : undefined },
      });
      const payload = unwrapResponse<GetListChannelsAndSegmentsResponseDto>(
        { data: result.data, error: result.error },
        'Unable to load channels and segments',
      );
      assertActionSuccess(payload?.actionStatus, 'Channels and segments request failed');
      return {
        channels: adaptChannels(payload),
        segments: adaptSegments(payload),
      };
    },
  });

export const useChannelsAndSegmentsVersion = () =>
  useQuery({
    queryKey: queryKeys.channelsAndSegments.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/channelsAndSegments/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load channels and segments version',
      );
      assertActionSuccess(payload, 'Channels and segments version request failed');
      return payload.message ?? '';
    },
  });

export const useChannelsAndSegmentsLists = (filters?: ChannelsAndSegmentsFilters) => {
  const query = useChannelsAndSegments(filters);
  return useMemo(() => ({
    ...query,
    channels: query.data?.channels ?? [],
    segments: query.data?.segments ?? [],
  }), [query]);
};
