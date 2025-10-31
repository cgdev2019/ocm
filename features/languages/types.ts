import type { components } from '@/lib/api/generated/schema';

export type LanguageDto = components['schemas']['LanguageDto'];
export type GetTradingLanguageResponse = components['schemas']['GetTradingLanguageResponse'];
export type TradingLanguagesResponseDto = components['schemas']['TradingLanguagesResponseDto'];
export type LanguageDescriptionDto = components['schemas']['LanguageDescriptionDto'];

export type LanguageListItem = {
  code: string;
  description?: string;
  disabled?: boolean;
};

export type LanguageFormValues = {
  code: string;
  description?: string;
  disabled?: boolean;
};

export type LanguageDetailValues = LanguageFormValues & {
  languageDescriptions?: LanguageDescriptionDto[];
};
