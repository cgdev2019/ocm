import type { components } from '@/lib/api/generated/schema';

export type GetConfigurationResponse = components['schemas']['GetConfigurationResponse'];
export type PropertyDto = components['schemas']['PropertyDto'];
export type ConfigurationDto = components['schemas']['ConfigurationDto'];
export type PropertiesDto = components['schemas']['PropertiesDto'];

export type ConfigurationListItem = {
  key: string;
  value?: string;
};

export type ConfigurationFormValues = {
  key: string;
  value?: string;
};
