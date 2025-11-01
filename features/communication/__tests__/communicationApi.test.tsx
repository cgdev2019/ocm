import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import {
  __internals,
  useEmailTemplate,
  useEmailTemplateMutations,
  useSmsTemplate,
  useSmsTemplateMutations,
} from '@/features/communication/api';
import { getApiClient, type ApiClient } from '@/lib/api/client';
import {
  actionStatusSuccessFixture,
  emailTemplateDetailFixture,
  emailTemplateDtoFixture,
  emailTemplateFormValuesFixture,
  emailTemplateResponseFixture,
  smsTemplateDetailFixture,
  smsTemplateDtoFixture,
  smsTemplateFormValuesFixture,
  smsTemplateResponseFixture,
} from '@/tests/fixtures/opencellDataset';

jest.mock('@/lib/api/client');

const mockedGetApiClient = getApiClient as jest.MockedFunction<typeof getApiClient>;

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });
  const invalidateSpy = jest.spyOn(queryClient, 'invalidateQueries');
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  return { wrapper, invalidateSpy };
};

describe('communication api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('normalizes email template codes', () => {
    expect(__internals.normalizeCode('  INV-EMAIL  ')).toBe('INV-EMAIL');
    expect(__internals.normalizeCode(undefined)).toBe('');
  });

  it('maps email template dto to detail values', () => {
    expect(__internals.mapEmailTemplateDtoToDetail(emailTemplateDtoFixture)).toEqual(emailTemplateDetailFixture);
  });

  it('maps email template form values to dto payload', () => {
    expect(__internals.mapEmailTemplateFormToDto(emailTemplateFormValuesFixture)).toEqual({
      id: 1201,
      code: 'INV-EMAIL',
      description: 'Invoice email template',
      media: 'EMAIL',
      tagStartDelimiter: '{{',
      tagEndDelimiter: '}}',
      startDate: '2025-01-01T00:00:00.000Z',
      endDate: '2025-12-31T23:59:59.000Z',
      type: 'INVOICE',
      textContent: 'Hello {{customer}}',
      subject: 'Invoice {{invoiceNumber}}',
      htmlContent: '<p>Hello {{customer}}</p>',
      translatedTextContent: [
        { languageCode: 'fr', textContent: 'Bonjour {{customer}}' },
      ],
      translatedHtmlContent: [
        { languageCode: 'fr', htmlContent: '<p>Bonjour {{customer}}</p>' },
      ],
      translatedSubject: [
        {
          languageCode: 'fr',
          subject: 'Facture {{invoiceNumber}}',
          textContent: 'Facture {{invoiceNumber}}',
        },
      ],
    });
  });

  it('maps email template form values to patch payload', () => {
    expect(__internals.mapEmailTemplateFormToPatchDto(emailTemplateFormValuesFixture)).toEqual({
      id: 1201,
      code: 'INV-EMAIL',
      description: 'Invoice email template',
      media: 'EMAIL',
      tagStartDelimiter: '{{',
      tagEndDelimiter: '}}',
      startDate: '2025-01-01T00:00:00.000Z',
      endDate: '2025-12-31T23:59:59.000Z',
      type: 'INVOICE',
      textContent: 'Hello {{customer}}',
      subject: 'Invoice {{invoiceNumber}}',
      htmlContent: '<p>Hello {{customer}}</p>',
      translatedTextContent: [
        { languageCode: 'fr', textContent: 'Bonjour {{customer}}' },
      ],
      translatedHtmlContent: [
        { languageCode: 'fr', htmlContent: '<p>Bonjour {{customer}}</p>' },
      ],
      translatedSubject: [
        {
          languageCode: 'fr',
          subject: 'Facture {{invoiceNumber}}',
          textContent: 'Facture {{invoiceNumber}}',
        },
      ],
    });
  });

  it('extracts email template from nested responses', () => {
    expect(__internals.extractEmailTemplate(emailTemplateResponseFixture)).toEqual(emailTemplateDtoFixture);
  });

  it('maps sms template dto to detail values', () => {
    expect(__internals.mapSmsTemplateDtoToDetail(smsTemplateDtoFixture)).toEqual(smsTemplateDetailFixture);
  });

  it('maps sms template form values to dto payload', () => {
    expect(__internals.mapSmsTemplateFormToDto(smsTemplateFormValuesFixture)).toEqual({
      id: 2201,
      code: 'PAYMENT-SMS',
      description: 'Payment reminder SMS',
      media: 'SMS',
      tagStartDelimiter: '<<',
      tagEndDelimiter: '>>',
      startDate: '2025-02-01T00:00:00.000Z',
      endDate: '2025-06-30T23:59:59.000Z',
      type: 'DUNNING',
      textContent: 'Rappel de paiement {{customer}}',
      translatedTextContent: [
        { languageCode: 'en', textContent: 'Payment reminder {{customer}}' },
      ],
    });
  });

  it('extracts sms template from nested responses', () => {
    expect(__internals.extractSmsTemplate(smsTemplateResponseFixture)).toEqual(smsTemplateDtoFixture);
  });

  it('loads email template detail using API V2', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: emailTemplateResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useEmailTemplate('  INV-EMAIL  '), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
      { params: { path: { EmailTemplateCode: 'INV-EMAIL' } } },
    );
    expect(result.current.data).toEqual(emailTemplateDetailFixture);
  });

  it('supports email template create, update, patch and delete mutations', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn(), PATCH: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: emailTemplateResponseFixture });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: emailTemplateResponseFixture });
    (apiClient.PATCH as jest.Mock).mockResolvedValue({
      data: { actionStatus: actionStatusSuccessFixture, result: emailTemplateDtoFixture },
    });
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { actionStatus: actionStatusSuccessFixture } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useEmailTemplateMutations(), { wrapper });

    await result.current.create.mutateAsync(emailTemplateFormValuesFixture);
    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
      {
        params: { path: { EmailTemplateCode: 'INV-EMAIL' } },
        body: __internals.mapEmailTemplateFormToDto(emailTemplateFormValuesFixture),
      },
    );

    await result.current.update.mutateAsync(emailTemplateFormValuesFixture);
    expect(apiClient.PUT).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
      {
        params: { path: { EmailTemplateCode: 'INV-EMAIL' } },
        body: __internals.mapEmailTemplateFormToDto(emailTemplateFormValuesFixture),
      },
    );

    await result.current.partialUpdate.mutateAsync(emailTemplateFormValuesFixture);
    expect(apiClient.PATCH).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
      {
        params: { path: { EmailTemplateCode: 'INV-EMAIL' } },
        body: __internals.mapEmailTemplateFormToPatchDto(emailTemplateFormValuesFixture),
      },
    );

    await result.current.remove.mutateAsync({ code: ' INV-EMAIL ' });
    expect(apiClient.DELETE).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}',
      { params: { path: { EmailTemplateCode: 'INV-EMAIL' } } },
    );

    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['communication', 'emailTemplates'] });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['communication', 'emailTemplates', 'detail', 'INV-EMAIL'],
    });
  });

  it('loads sms template detail using API V2', async () => {
    const apiClient = { GET: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.GET as jest.Mock).mockResolvedValue({ data: smsTemplateResponseFixture });

    const { wrapper } = createWrapper();
    const { result } = renderHook(() => useSmsTemplate(' PAYMENT-SMS '), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(apiClient.GET).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}',
      { params: { path: { SMSTemplateCode: 'PAYMENT-SMS' } } },
    );
    expect(result.current.data).toEqual(smsTemplateDetailFixture);
  });

  it('supports sms template create, update and delete mutations', async () => {
    const apiClient = { POST: jest.fn(), PUT: jest.fn(), DELETE: jest.fn() } as Partial<ApiClient>;
    mockedGetApiClient.mockReturnValue(apiClient as ApiClient);
    (apiClient.POST as jest.Mock).mockResolvedValue({ data: smsTemplateResponseFixture });
    (apiClient.PUT as jest.Mock).mockResolvedValue({ data: smsTemplateResponseFixture });
    (apiClient.DELETE as jest.Mock).mockResolvedValue({ data: { actionStatus: actionStatusSuccessFixture } });

    const { wrapper, invalidateSpy } = createWrapper();
    const { result } = renderHook(() => useSmsTemplateMutations(), { wrapper });

    await result.current.create.mutateAsync(smsTemplateFormValuesFixture);
    expect(apiClient.POST).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/SMSTemplate',
      { body: __internals.mapSmsTemplateFormToDto(smsTemplateFormValuesFixture) },
    );

    await result.current.update.mutateAsync(smsTemplateFormValuesFixture);
    expect(apiClient.PUT).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}',
      {
        params: { path: { SMSTemplateCode: 'PAYMENT-SMS' } },
        body: __internals.mapSmsTemplateFormToDto(smsTemplateFormValuesFixture),
      },
    );

    await result.current.remove.mutateAsync({ code: ' PAYMENT-SMS ' });
    expect(apiClient.DELETE).toHaveBeenCalledWith(
      '/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}',
      { params: { path: { SMSTemplateCode: 'PAYMENT-SMS' } } },
    );

    expect(invalidateSpy).toHaveBeenCalledWith({ queryKey: ['communication', 'smsTemplates'] });
    expect(invalidateSpy).toHaveBeenCalledWith({
      queryKey: ['communication', 'smsTemplates', 'detail', 'PAYMENT-SMS'],
    });
  });
});
