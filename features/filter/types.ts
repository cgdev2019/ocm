import type { components } from '@/lib/api/generated/schema';

export type FilterDto = components['schemas']['FilterDto'];
export type GetFilterResponseDto = components['schemas']['GetFilterResponseDto'];

export type FilterListItem = {
  code: string;
  description?: string;
  entityClass?: string;
  shared?: boolean;
  disabled?: boolean;
};

export type FilterFormValues = {
  code: string;
  description?: string;
  entityClass?: string;
  inputXml?: string;
  pollingQuery?: string;
  shared?: boolean;
  disabled?: boolean;
};
