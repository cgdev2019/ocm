import type { components } from '@/lib/api/generated/schema';

export type LanguageIsoDto = components['schemas']['LanguageIsoDto'];
export type GetLanguageIsoResponse = components['schemas']['GetLanguageIsoResponse'];
export type GetLanguagesIsoResponse = components['schemas']['GetLanguagesIsoResponse'];

export type LanguageIsoListItem = {
  code: string;
  description?: string;
};

export type LanguageIsoFormValues = {
  code: string;
  description?: string;
};
