import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getApiClient } from '@/lib/api/client';
import { assertActionSuccess } from '@/lib/api/helpers';
import type { ActionStatus } from '@/lib/api/helpers';
import { queryKeys } from '@/lib/api/query-keys';
import type {
  EmailTemplateDetail,
  EmailTemplateDto,
  EmailTemplateFormValues,
  EmailTemplatePatchDto,
  EmailTemplateResponseDto,
  SMSTemplateDetail,
  SMSTemplateDto,
  SMSTemplateFormValues,
  SMSTemplateResponseDto,
  TranslatedHtmlContentDto,
  TranslatedHtmlContentFormValue,
  TranslatedSubjectDto,
  TranslatedSubjectFormValue,
  TranslatedTextContentDto,
  TranslatedTextContentFormValue,
} from '@/features/communication/types';

type ApiResult = { data?: unknown; error?: unknown | null };

type DeleteEmailTemplateParams = { code: string };
type DeleteSmsTemplateParams = { code: string };

const EMAIL_TEMPLATE_ERROR = 'Email template endpoint returned an error';
const LOAD_EMAIL_TEMPLATE_ERROR = 'Unable to load email template';
const CREATE_EMAIL_TEMPLATE_ERROR = 'Unable to create email template';
const UPDATE_EMAIL_TEMPLATE_ERROR = 'Unable to update email template';
const PATCH_EMAIL_TEMPLATE_ERROR = 'Unable to partially update email template';
const DELETE_EMAIL_TEMPLATE_ERROR = 'Unable to delete email template';

const SMS_TEMPLATE_ERROR = 'SMS template endpoint returned an error';
const LOAD_SMS_TEMPLATE_ERROR = 'Unable to load SMS template';
const CREATE_SMS_TEMPLATE_ERROR = 'Unable to create SMS template';
const UPDATE_SMS_TEMPLATE_ERROR = 'Unable to update SMS template';
const DELETE_SMS_TEMPLATE_ERROR = 'Unable to delete SMS template';

const trimString = (value: string | null | undefined): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
};

const normalizeCode = (code: string | null | undefined): string => trimString(code) ?? '';

const ensureCode = (code: string | null | undefined, errorMessage: string): string => {
  const normalized = normalizeCode(code);
  if (!normalized) {
    throw new Error(errorMessage);
  }
  return normalized;
};

const normalizeDate = (value: string | null | undefined): string | undefined => trimString(value);

const isActionStatus = (value: unknown): value is ActionStatus =>
  Boolean(
    value &&
      typeof value === 'object' &&
      'status' in (value as Record<string, unknown>) &&
      typeof (value as Record<string, unknown>).status === 'string' &&
      !('code' in (value as Record<string, unknown>)),
  );

const isEmailTemplateDto = (value: unknown): value is EmailTemplateDto =>
  Boolean(
    value &&
      typeof value === 'object' &&
      'code' in (value as Record<string, unknown>) &&
      'subject' in (value as Record<string, unknown>),
  );

const isSmsTemplateDto = (value: unknown): value is SMSTemplateDto =>
  Boolean(
    value &&
      typeof value === 'object' &&
      'code' in (value as Record<string, unknown>) &&
      !('subject' in (value as Record<string, unknown>)) &&
      ('textContent' in (value as Record<string, unknown>) ||
        'tagStartDelimiter' in (value as Record<string, unknown>) ||
        'translatedTextContent' in (value as Record<string, unknown>)),
  );

const mapTranslatedTextDtoToForm = (dto: TranslatedTextContentDto): TranslatedTextContentFormValue => ({
  languageCode: trimString(dto.languageCode ?? undefined) ?? '',
  textContent: trimString(dto.textContent ?? undefined) ?? '',
});

const mapTranslatedHtmlDtoToForm = (dto: TranslatedHtmlContentDto): TranslatedHtmlContentFormValue => ({
  languageCode: trimString(dto.languageCode ?? undefined) ?? '',
  htmlContent: trimString(dto.htmlContent ?? undefined) ?? '',
});

const mapTranslatedSubjectDtoToForm = (dto: TranslatedSubjectDto): TranslatedSubjectFormValue => ({
  languageCode: trimString(dto.languageCode ?? undefined) ?? '',
  subject: trimString(dto.subject ?? undefined) ?? '',
  ...(trimString(dto.textContent ?? undefined)
    ? { textContent: trimString(dto.textContent ?? undefined) as string }
    : {}),
});

const sanitizeTranslatedTextContent = (
  values: TranslatedTextContentFormValue[],
): TranslatedTextContentDto[] | undefined => {
  if (!values || values.length === 0) {
    return undefined;
  }

  const normalized = values
    .map((entry) => ({
      languageCode: trimString(entry.languageCode ?? undefined),
      textContent: trimString(entry.textContent ?? undefined),
    }))
    .filter((entry) => entry.languageCode && entry.textContent) as TranslatedTextContentDto[];

  return normalized.length > 0 ? normalized : undefined;
};

const sanitizeTranslatedHtmlContent = (
  values: TranslatedHtmlContentFormValue[],
): TranslatedHtmlContentDto[] | undefined => {
  if (!values || values.length === 0) {
    return undefined;
  }

  const normalized = values
    .map((entry) => ({
      languageCode: trimString(entry.languageCode ?? undefined),
      htmlContent: trimString(entry.htmlContent ?? undefined),
    }))
    .filter((entry) => entry.languageCode && entry.htmlContent) as TranslatedHtmlContentDto[];

  return normalized.length > 0 ? normalized : undefined;
};

const sanitizeTranslatedSubjects = (
  values: TranslatedSubjectFormValue[],
): TranslatedSubjectDto[] | undefined => {
  if (!values || values.length === 0) {
    return undefined;
  }

  const normalized = values
    .map((entry) => ({
      languageCode: trimString(entry.languageCode ?? undefined),
      subject: trimString(entry.subject ?? undefined),
      textContent: trimString(entry.textContent ?? undefined),
    }))
    .filter((entry) => entry.languageCode && (entry.subject || entry.textContent)) as TranslatedSubjectDto[];

  return normalized.length > 0 ? normalized : undefined;
};

const mapEmailTemplateDtoToDetail = (dto: EmailTemplateDto): EmailTemplateDetail => ({
  id: dto.id ?? undefined,
  code: normalizeCode(dto.code ?? undefined),
  description: trimString(dto.description ?? undefined),
  media: dto.media ?? undefined,
  tagStartDelimiter: trimString(dto.tagStartDelimiter ?? undefined),
  tagEndDelimiter: trimString(dto.tagEndDelimiter ?? undefined),
  startDate: normalizeDate(dto.startDate ?? undefined),
  endDate: normalizeDate(dto.endDate ?? undefined),
  type: dto.type ?? undefined,
  textContent: trimString(dto.textContent ?? undefined),
  subject: trimString(dto.subject ?? undefined) ?? '',
  htmlContent: trimString(dto.htmlContent ?? undefined),
  translatedTextContent: (dto.translatedTextContent ?? []).map((item) => mapTranslatedTextDtoToForm(item)),
  translatedHtmlContent: (dto.translatedHtmlContent ?? []).map((item) => mapTranslatedHtmlDtoToForm(item)),
  translatedSubject: (dto.translatedSubject ?? []).map((item) => mapTranslatedSubjectDtoToForm(item)),
  updatedCode: trimString(dto.updatedCode ?? undefined),
});

const mapEmailTemplateFormToDto = (values: EmailTemplateFormValues): EmailTemplateDto => {
  const translatedTextContent = sanitizeTranslatedTextContent(values.translatedTextContent);
  const translatedHtmlContent = sanitizeTranslatedHtmlContent(values.translatedHtmlContent);
  const translatedSubject = sanitizeTranslatedSubjects(values.translatedSubject);

  return {
    id: values.id,
    code: values.code.trim(),
    description: trimString(values.description ?? undefined),
    media: values.media ?? undefined,
    tagStartDelimiter: trimString(values.tagStartDelimiter ?? undefined),
    tagEndDelimiter: trimString(values.tagEndDelimiter ?? undefined),
    startDate: normalizeDate(values.startDate ?? undefined),
    endDate: normalizeDate(values.endDate ?? undefined),
    type: values.type ?? undefined,
    textContent: trimString(values.textContent ?? undefined),
    subject: values.subject.trim(),
    htmlContent: trimString(values.htmlContent ?? undefined),
    ...(translatedTextContent ? { translatedTextContent } : {}),
    ...(translatedHtmlContent ? { translatedHtmlContent } : {}),
    ...(translatedSubject ? { translatedSubject } : {}),
  } satisfies EmailTemplateDto;
};

const mapEmailTemplateFormToPatchDto = (values: EmailTemplateFormValues): EmailTemplatePatchDto => {
  const base = mapEmailTemplateFormToDto(values);
  return {
    ...base,
    subject: trimString(values.subject ?? undefined) ?? undefined,
  } satisfies EmailTemplatePatchDto;
};

const mapSmsTemplateDtoToDetail = (dto: SMSTemplateDto): SMSTemplateDetail => ({
  id: dto.id ?? undefined,
  code: normalizeCode(dto.code ?? undefined),
  description: trimString(dto.description ?? undefined),
  media: dto.media ?? undefined,
  tagStartDelimiter: trimString(dto.tagStartDelimiter ?? undefined),
  tagEndDelimiter: trimString(dto.tagEndDelimiter ?? undefined),
  startDate: normalizeDate(dto.startDate ?? undefined),
  endDate: normalizeDate(dto.endDate ?? undefined),
  type: dto.type ?? undefined,
  textContent: trimString(dto.textContent ?? undefined),
  translatedTextContent: (dto.translatedTextContent ?? []).map((item) => mapTranslatedTextDtoToForm(item)),
  updatedCode: trimString(dto.updatedCode ?? undefined),
});

const mapSmsTemplateFormToDto = (values: SMSTemplateFormValues): SMSTemplateDto => {
  const translatedTextContent = sanitizeTranslatedTextContent(values.translatedTextContent);

  return {
    id: values.id,
    code: values.code.trim(),
    description: trimString(values.description ?? undefined),
    media: values.media ?? undefined,
    tagStartDelimiter: trimString(values.tagStartDelimiter ?? undefined),
    tagEndDelimiter: trimString(values.tagEndDelimiter ?? undefined),
    startDate: normalizeDate(values.startDate ?? undefined),
    endDate: normalizeDate(values.endDate ?? undefined),
    type: values.type ?? undefined,
    textContent: trimString(values.textContent ?? undefined),
    ...(translatedTextContent ? { translatedTextContent } : {}),
  } satisfies SMSTemplateDto;
};

const unwrapActionPayload = (result: ApiResult, fallbackMessage: string): unknown => {
  if (result.error) {
    if (result.error instanceof Error) {
      throw result.error;
    }

    if (typeof result.error === 'object' && result.error !== null) {
      const message =
        // @ts-expect-error — best effort extraction
        result.error?.message ??
        // @ts-expect-error — nested under actionStatus
        result.error?.actionStatus?.message;
      if (typeof message === 'string' && message.length > 0) {
        throw new Error(message);
      }
    }

    throw new Error(fallbackMessage);
  }

  const data = result.data ?? null;
  if (data && typeof data === 'object') {
    if (isActionStatus(data)) {
      assertActionSuccess(data, fallbackMessage);
    } else if ('actionStatus' in (data as Record<string, unknown>)) {
      assertActionSuccess(
        ((data as EmailTemplateResponseDto | SMSTemplateResponseDto).actionStatus ?? undefined) as ActionStatus | undefined,
        fallbackMessage,
      );
    }
  }

  return data;
};

const extractEmailTemplate = (payload: unknown): EmailTemplateDto => {
  const queue: unknown[] = [payload];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || typeof current !== 'object') {
      continue;
    }

    if (visited.has(current)) {
      continue;
    }
    visited.add(current);

    if (Array.isArray(current)) {
      queue.push(...current);
      continue;
    }

    if (isActionStatus(current)) {
      assertActionSuccess(current, EMAIL_TEMPLATE_ERROR);
      continue;
    }

    const container = current as EmailTemplateResponseDto;

    if ('actionStatus' in container) {
      assertActionSuccess(container.actionStatus ?? undefined, EMAIL_TEMPLATE_ERROR);
    }

    if (isEmailTemplateDto(container)) {
      return container;
    }

    queue.push(...Object.values(container));
  }

  throw new Error(LOAD_EMAIL_TEMPLATE_ERROR);
};

const extractSmsTemplate = (payload: unknown): SMSTemplateDto => {
  const queue: unknown[] = [payload];
  const visited = new Set<unknown>();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!current || typeof current !== 'object') {
      continue;
    }

    if (visited.has(current)) {
      continue;
    }
    visited.add(current);

    if (Array.isArray(current)) {
      queue.push(...current);
      continue;
    }

    if (isActionStatus(current)) {
      assertActionSuccess(current, SMS_TEMPLATE_ERROR);
      continue;
    }

    const container = current as SMSTemplateResponseDto;

    if ('actionStatus' in container) {
      assertActionSuccess(container.actionStatus ?? undefined, SMS_TEMPLATE_ERROR);
    }

    if (isSmsTemplateDto(container)) {
      return container;
    }

    queue.push(...Object.values(container));
  }

  throw new Error(LOAD_SMS_TEMPLATE_ERROR);
};

export const useEmailTemplate = (code: string | null | undefined) => {
  const normalizedCode = normalizeCode(code);
  const queryKey = queryKeys.communication.emailTemplates.detail(
    normalizedCode.length > 0 ? normalizedCode : '__empty__',
  );

  return useQuery<EmailTemplateDetail>({
    queryKey,
    enabled: normalizedCode.length > 0,
    queryFn: async () => {
      const resolvedCode = ensureCode(code, 'Email template code is required');
      const apiClient = getApiClient();
      const result = await apiClient.GET(
        '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}' as never,
        { params: { path: { EmailTemplateCode: resolvedCode } } } as never,
      );
      const payload = unwrapActionPayload(result as ApiResult, LOAD_EMAIL_TEMPLATE_ERROR);
      const dto = extractEmailTemplate(payload);
      return mapEmailTemplateDtoToDetail(dto);
    },
    staleTime: 60_000,
  });
};

export const useSmsTemplate = (code: string | null | undefined) => {
  const normalizedCode = normalizeCode(code);
  const queryKey = queryKeys.communication.smsTemplates.detail(
    normalizedCode.length > 0 ? normalizedCode : '__empty__',
  );

  return useQuery<SMSTemplateDetail>({
    queryKey,
    enabled: normalizedCode.length > 0,
    queryFn: async () => {
      const resolvedCode = ensureCode(code, 'SMS template code is required');
      const apiClient = getApiClient();
      const result = await apiClient.GET(
        '/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}' as never,
        { params: { path: { SMSTemplateCode: resolvedCode } } } as never,
      );
      const payload = unwrapActionPayload(result as ApiResult, LOAD_SMS_TEMPLATE_ERROR);
      const dto = extractSmsTemplate(payload);
      return mapSmsTemplateDtoToDetail(dto);
    },
    staleTime: 60_000,
  });
};

const invalidateEmailTemplateQueries = (queryClient: ReturnType<typeof useQueryClient>, code?: string | null) => {
  queryClient.invalidateQueries({ queryKey: queryKeys.communication.emailTemplates.root });
  const normalizedCode = normalizeCode(code ?? null);
  if (normalizedCode) {
    queryClient.invalidateQueries({ queryKey: queryKeys.communication.emailTemplates.detail(normalizedCode) });
  }
};

const invalidateSmsTemplateQueries = (queryClient: ReturnType<typeof useQueryClient>, code?: string | null) => {
  queryClient.invalidateQueries({ queryKey: queryKeys.communication.smsTemplates.root });
  const normalizedCode = normalizeCode(code ?? null);
  if (normalizedCode) {
    queryClient.invalidateQueries({ queryKey: queryKeys.communication.smsTemplates.detail(normalizedCode) });
  }
};

export const useEmailTemplateMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: EmailTemplateFormValues) => {
      const code = ensureCode(values.code, 'Email template code is required');
      const apiClient = getApiClient();
      const dto = mapEmailTemplateFormToDto(values);
      const result = await apiClient.POST(
        '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}' as never,
        { params: { path: { EmailTemplateCode: code } }, body: dto } as never,
      );
      const payload = unwrapActionPayload(result as ApiResult, CREATE_EMAIL_TEMPLATE_ERROR);
      return extractEmailTemplate(payload);
    },
    onSuccess: (data, variables) => {
      const resolvedCode = data?.code ?? variables.code;
      invalidateEmailTemplateQueries(queryClient, resolvedCode);
    },
  });

  const update = useMutation({
    mutationFn: async (values: EmailTemplateFormValues) => {
      const code = ensureCode(values.code, 'Email template code is required');
      const apiClient = getApiClient();
      const dto = mapEmailTemplateFormToDto(values);
      const result = await apiClient.PUT(
        '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}' as never,
        { params: { path: { EmailTemplateCode: code } }, body: dto } as never,
      );
      const payload = unwrapActionPayload(result as ApiResult, UPDATE_EMAIL_TEMPLATE_ERROR);
      return extractEmailTemplate(payload);
    },
    onSuccess: (data, variables) => {
      const resolvedCode = data?.code ?? variables.code;
      invalidateEmailTemplateQueries(queryClient, resolvedCode);
    },
  });

  const partialUpdate = useMutation({
    mutationFn: async (values: EmailTemplateFormValues) => {
      const code = ensureCode(values.code, 'Email template code is required');
      const apiClient = getApiClient();
      const dto = mapEmailTemplateFormToPatchDto(values);
      const result = await apiClient.PATCH(
        '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}' as never,
        { params: { path: { EmailTemplateCode: code } }, body: dto } as never,
      );
      const payload = unwrapActionPayload(result as ApiResult, PATCH_EMAIL_TEMPLATE_ERROR);
      return extractEmailTemplate(payload);
    },
    onSuccess: (data, variables) => {
      const resolvedCode = data?.code ?? variables.code;
      invalidateEmailTemplateQueries(queryClient, resolvedCode);
    },
  });

  const remove = useMutation({
    mutationFn: async ({ code }: DeleteEmailTemplateParams) => {
      const resolvedCode = ensureCode(code, 'Email template code is required');
      const apiClient = getApiClient();
      const result = await apiClient.DELETE(
        '/api/rest/v2/setting/internationalSettings/EmailTemplate/{EmailTemplateCode}' as never,
        { params: { path: { EmailTemplateCode: resolvedCode } } } as never,
      );
      unwrapActionPayload(result as ApiResult, DELETE_EMAIL_TEMPLATE_ERROR);
      return resolvedCode;
    },
    onSuccess: (resolvedCode) => {
      invalidateEmailTemplateQueries(queryClient, resolvedCode);
    },
  });

  return { create, update, partialUpdate, remove };
};

export const useSmsTemplateMutations = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: async (values: SMSTemplateFormValues) => {
      const code = ensureCode(values.code, 'SMS template code is required');
      const apiClient = getApiClient();
      const dto = mapSmsTemplateFormToDto(values);
      const result = await apiClient.POST(
        '/api/rest/v2/setting/internationalSettings/SMSTemplate' as never,
        { body: dto } as never,
      );
      const payload = unwrapActionPayload(result as ApiResult, CREATE_SMS_TEMPLATE_ERROR);
      const dtoResult = extractSmsTemplate(payload);
      return dtoResult;
    },
    onSuccess: (data, variables) => {
      const resolvedCode = data?.code ?? variables.code;
      invalidateSmsTemplateQueries(queryClient, resolvedCode);
    },
  });

  const update = useMutation({
    mutationFn: async (values: SMSTemplateFormValues) => {
      const code = ensureCode(values.code, 'SMS template code is required');
      const apiClient = getApiClient();
      const dto = mapSmsTemplateFormToDto(values);
      const result = await apiClient.PUT(
        '/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}' as never,
        { params: { path: { SMSTemplateCode: code } }, body: dto } as never,
      );
      const payload = unwrapActionPayload(result as ApiResult, UPDATE_SMS_TEMPLATE_ERROR);
      const dtoResult = extractSmsTemplate(payload);
      return dtoResult;
    },
    onSuccess: (data, variables) => {
      const resolvedCode = data?.code ?? variables.code;
      invalidateSmsTemplateQueries(queryClient, resolvedCode);
    },
  });

  const remove = useMutation({
    mutationFn: async ({ code }: DeleteSmsTemplateParams) => {
      const resolvedCode = ensureCode(code, 'SMS template code is required');
      const apiClient = getApiClient();
      const result = await apiClient.DELETE(
        '/api/rest/v2/setting/internationalSettings/SMSTemplate/{SMSTemplateCode}' as never,
        { params: { path: { SMSTemplateCode: resolvedCode } } } as never,
      );
      unwrapActionPayload(result as ApiResult, DELETE_SMS_TEMPLATE_ERROR);
      return resolvedCode;
    },
    onSuccess: (resolvedCode) => {
      invalidateSmsTemplateQueries(queryClient, resolvedCode);
    },
  });

  return { create, update, remove };
};

export const __internals = {
  normalizeCode,
  mapEmailTemplateDtoToDetail,
  mapEmailTemplateFormToDto,
  mapEmailTemplateFormToPatchDto,
  mapSmsTemplateDtoToDetail,
  mapSmsTemplateFormToDto,
  sanitizeTranslatedTextContent,
  sanitizeTranslatedHtmlContent,
  sanitizeTranslatedSubjects,
  extractEmailTemplate,
  extractSmsTemplate,
  trimString,
};
