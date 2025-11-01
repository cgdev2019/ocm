import { useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess, unwrapResponse } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  ActionStatus,
  BundleProductTemplateDto,
  BundleTemplateDto,
  BundleTemplateFormValues,
  ProductChargeTemplateDto,
  WalletTemplateDto,
} from '@/features/bundle-templates/types';

const parseProductChargeTemplates = (input: string): ProductChargeTemplateDto[] =>
  input
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .map((code) => ({ code } as ProductChargeTemplateDto));

const parseBundleProductTemplates = (input: string): BundleProductTemplateDto[] =>
  input
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => {
      const [code, quantity] = line.split(':').map((part) => part.trim());
      const quantityValue = quantity ? Number(quantity) : 1;
      return {
        productTemplate: { code } as BundleProductTemplateDto['productTemplate'],
        quantity: Number.isNaN(quantityValue) ? 1 : quantityValue,
      } as BundleProductTemplateDto;
    });

const parseWalletTemplates = (input?: string): WalletTemplateDto[] | undefined => {
  if (!input) {
    return undefined;
  }
  const items = input
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .map((code) => ({ code }));
  return items.length > 0 ? (items as WalletTemplateDto[]) : undefined;
};

const mapFormToDto = (values: BundleTemplateFormValues): BundleTemplateDto => ({
  code: values.code,
  name: values.name,
  description: values.description,
  lifeCycleStatus: values.lifeCycleStatus,
  modelCode: values.modelCode,
  disabled: values.disabled,
  validFrom: values.validFrom,
  validTo: values.validTo,
  productChargeTemplates: parseProductChargeTemplates(values.productChargeTemplateCodes),
  bundleProductTemplates: parseBundleProductTemplates(values.bundleProductTemplateCodes),
  walletTemplates: parseWalletTemplates(values.walletTemplateCodes),
  customerCategories: [],
  offerTemplateCategories: [],
  channels: [],
  attachments: [],
  sellers: [],
  customFields: undefined,
  languageDescriptions: [],
  longDescriptionsTranslated: [],
  longDescription: undefined,
  imagePath: undefined,
  imageBase64: undefined,
  globalRatingScriptInstance: undefined,
  businessProductModel: undefined,
  codeOnly: false,
});

export const useBundleTemplateMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: queryKeys.bundleTemplates.list() });
    queryClient.invalidateQueries({ queryKey: queryKeys.bundleTemplates.version() });
  };

  const create = useMutation({
    mutationFn: async (values: BundleTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/bundleTemplate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create bundle template',
      );
      assertActionSuccess(payload, 'Bundle template creation failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const update = useMutation({
    mutationFn: async (values: BundleTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.PUT('/api/rest/catalog/bundleTemplate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to update bundle template',
      );
      assertActionSuccess(payload, 'Bundle template update failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  const createOrUpdate = useMutation({
    mutationFn: async (values: BundleTemplateFormValues) => {
      const apiClient = getApiClient();
      const dto = mapFormToDto(values);
      const result = await apiClient.POST('/api/rest/catalog/bundleTemplate/createOrUpdate', { body: dto });
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to create or update bundle template',
      );
      assertActionSuccess(payload, 'Bundle template createOrUpdate failed');
      return payload;
    },
    onSuccess: invalidate,
  });

  return useMemo(() => ({ create, update, createOrUpdate }), [create, createOrUpdate, update]);
};

export const useBundleTemplateVersion = () =>
  useQuery({
    queryKey: queryKeys.bundleTemplates.version(),
    queryFn: async () => {
      const apiClient = getApiClient();
      const result = await apiClient.GET('/api/rest/catalog/bundleTemplate/version');
      const payload = unwrapResponse<ActionStatus>(
        { data: result.data, error: result.error },
        'Unable to load bundle template version',
      );
      assertActionSuccess(payload, 'Bundle template version request failed');
      return payload.message ?? '';
    },
  });
