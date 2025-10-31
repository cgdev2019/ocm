import type { components } from '@/lib/api/generated/schema';

export type TitleDto = components['schemas']['TitleDto'];
export type TitleResponseDto = components['schemas']['TitleResponseDto'];
export type TitlesResponseDto = components['schemas']['TitlesResponseDto'];
export type PagingAndFiltering = components['schemas']['PagingAndFiltering'];
export type LanguageDescriptionDto = components['schemas']['LanguageDescriptionDto'];

export type TitleListItem = {
  code: string;
  description?: string;
  isCompany: boolean;
};

export type TitleFormValues = {
  code: string;
  description?: string;
  isCompany: boolean;
};

export type TitleDetailValues = TitleFormValues & {
  languageDescriptions?: LanguageDescriptionDto[];
};
