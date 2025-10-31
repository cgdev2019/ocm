import type { components } from '@/lib/api/generated/schema';

export type AccessDto = components['schemas']['AccessDto'];
export type GetAccessResponseDto = components['schemas']['GetAccessResponseDto'];
export type AccessesResponseDto = components['schemas']['AccessesResponseDto'];
export type ActionStatus = components['schemas']['ActionStatus'];

export type AccessListItem = {
  code: string;
  subscription: string;
  startDate?: string;
  endDate?: string;
  disabled?: boolean;
};

export type AccessFormValues = {
  code: string;
  subscription: string;
  subscriptionValidityDate?: string;
  startDate?: string;
  endDate?: string;
  usageDate?: string;
  disabled?: boolean;
};

export type AccessDetailParams = {
  accessCode: string;
  subscriptionCode?: string | null;
};

export type AccessIdentifier = {
  code: string;
  subscription: string;
  startDate?: string;
  endDate?: string;
};
