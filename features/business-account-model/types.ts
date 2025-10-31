import type { components } from '@/lib/api/generated/schema';

export type BusinessAccountModelDto = components['schemas']['BusinessAccountModelDto'];
export type BusinessAccountModelResponseDto = components['schemas']['BusinessAccountModelResponseDto'];
export type MeveoModuleDtosResponse = components['schemas']['MeveoModuleDtosResponse'];
export type ParentListResponse = components['schemas']['ParentListResponse'];

export type BusinessAccountModelListItem = {
  code: string;
  description?: string;
  hierarchyType?: string;
  license?: string;
  disabled?: boolean;
};

export type BusinessAccountModelFormValues = {
  code: string;
  description?: string;
  hierarchyType?: string;
  license?: string;
  disabled?: boolean;
};

export type ParentEntityListItem = {
  code: string;
  description?: string;
};
