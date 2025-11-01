import type { components } from '@/lib/api/generated/schema';

export type GetListChannelsAndSegmentsResponseDto = components['schemas']['GetListChannelsAndSegmentsResponseDto'];
export type ActionStatus = components['schemas']['ActionStatus'];
export type ChannelDto = components['schemas']['ChannelDto'];
export type OfferTemplateCategoryDto = components['schemas']['OfferTemplateCategoryDto'];

export type ChannelsAndSegmentsFilters = {
  active?: boolean | null;
};

export type ChannelListItem = {
  code: string;
  description?: string;
  disabled?: boolean;
  languages?: string[];
};

export type SegmentListItem = {
  code: string;
  description?: string;
  active?: boolean;
  parentId?: number | null;
};
