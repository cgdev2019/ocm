import type { components } from '@/lib/api/generated/schema';

export type BusinessAccountModelDto = components['schemas']['BusinessAccountModelDto'];
export type BusinessAccountModelResponseDto = components['schemas']['BusinessAccountModelResponseDto'];
export type MeveoModuleDtosResponse = components['schemas']['MeveoModuleDtosResponse'];
export type ParentListResponse = components['schemas']['ParentListResponse'];

export const BUSINESS_ACCOUNT_MODEL_LICENSES = [
  'APACHE',
  'BSD3_N',
  'BSD3_R',
  'BSD2_S',
  'FREE_BSD',
  'GPL',
  'AGPL',
  'LGPL',
  'MIT',
  'MOZ',
  'CDDL',
  'EPL',
  'OPEN',
  'COM',
] as const satisfies readonly BusinessAccountModelDto['license'][];

export type BusinessAccountModelLicense = (typeof BUSINESS_ACCOUNT_MODEL_LICENSES)[number];

export const BUSINESS_ACCOUNT_MODEL_HIERARCHY_TYPES = [
  'S',
  'S_C',
  'C',
  'S_CA',
  'C_CA',
  'CA',
  'S_BA',
  'C_BA',
  'CA_BA',
  'BA',
  'S_UA',
  'C_UA',
  'CA_UA',
  'BA_UA',
  'UA',
] as const satisfies readonly BusinessAccountModelDto['hierarchyType'][];

export type BusinessAccountModelHierarchyType = (typeof BUSINESS_ACCOUNT_MODEL_HIERARCHY_TYPES)[number];

export type BusinessAccountModelListItem = {
  code: string;
  description?: string;
  hierarchyType?: BusinessAccountModelHierarchyType;
  license?: BusinessAccountModelLicense;
  disabled?: boolean;
};

export type BusinessAccountModelFormValues = {
  code: string;
  description?: string;
  hierarchyType?: BusinessAccountModelHierarchyType;
  license?: BusinessAccountModelLicense;
  disabled?: boolean;
};

export type ParentEntityListItem = {
  code: string;
  description?: string;
};
