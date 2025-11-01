import type { ActionStatus } from '@/lib/api/helpers';

export type EmailTemplateDto = {
  id?: number;
  code: string;
  description?: string;
  updatedCode?: string;
  media?:
    | 'POSTAL_MAIL'
    | 'EMAIL'
    | 'SMS'
    | 'IM'
    | 'FAX'
    | 'VOICE'
    | 'WEBSERVICE'
    | 'QUEUE'
    | 'FTP_FILE'
    | 'CFT_FILE'
    | 'DATABASE'
    | 'DUNNING_MEDIA';
  tagStartDelimiter?: string;
  tagEndDelimiter?: string;
  startDate?: string;
  endDate?: string;
  type?: 'DUNNING' | 'INVOICE' | 'OTHER';
  textContent?: string;
  translatedTextContent?: TranslatedTextContentDto[];
  subject: string;
  htmlContent?: string;
  translatedHtmlContent?: TranslatedHtmlContentDto[];
  translatedSubject?: TranslatedSubjectDto[];
};

export type EmailTemplatePatchDto = Omit<EmailTemplateDto, 'subject'> & {
  subject?: string;
};

export type TranslatedTextContentDto = {
  languageCode?: string;
  textContent?: string;
};

export type TranslatedHtmlContentDto = {
  languageCode?: string;
  htmlContent?: string;
};

export type TranslatedSubjectDto = {
  languageCode?: string;
  subject?: string;
  textContent?: string;
};

export type EmailTemplateResponseDto = {
  actionStatus?: ActionStatus | null;
  emailTemplate?: EmailTemplateDto | null;
  result?: EmailTemplateDto | EmailTemplateResponseDto | EmailTemplateDto[] | null;
  data?: EmailTemplateDto | EmailTemplateResponseDto | EmailTemplateDto[] | null;
  emailTemplates?: EmailTemplateDto[] | EmailTemplateResponseDto[] | null;
} & Record<string, unknown>;

export type EmailTemplateFormValues = {
  id?: number;
  code: string;
  description?: string;
  media?: EmailTemplateDto['media'];
  tagStartDelimiter?: string;
  tagEndDelimiter?: string;
  startDate?: string;
  endDate?: string;
  type?: EmailTemplateDto['type'];
  textContent?: string;
  subject: string;
  htmlContent?: string;
  translatedTextContent: TranslatedTextContentFormValue[];
  translatedHtmlContent: TranslatedHtmlContentFormValue[];
  translatedSubject: TranslatedSubjectFormValue[];
};

export type EmailTemplateDetail = EmailTemplateFormValues & {
  updatedCode?: string;
};

export type TranslatedTextContentFormValue = {
  languageCode: string;
  textContent: string;
};

export type TranslatedHtmlContentFormValue = {
  languageCode: string;
  htmlContent: string;
};

export type TranslatedSubjectFormValue = {
  languageCode: string;
  subject: string;
  textContent?: string;
};

export type SMSTemplateDto = {
  id?: number;
  code: string;
  description?: string;
  updatedCode?: string;
  media?: EmailTemplateDto['media'];
  tagStartDelimiter?: string;
  tagEndDelimiter?: string;
  startDate?: string;
  endDate?: string;
  type?: EmailTemplateDto['type'];
  textContent?: string;
  translatedTextContent?: TranslatedTextContentDto[];
};

export type SMSTemplateResponseDto = {
  actionStatus?: ActionStatus | null;
  smsTemplate?: SMSTemplateDto | null;
  result?: SMSTemplateDto | SMSTemplateResponseDto | SMSTemplateDto[] | null;
  data?: SMSTemplateDto | SMSTemplateResponseDto | SMSTemplateDto[] | null;
  smsTemplates?: SMSTemplateDto[] | SMSTemplateResponseDto[] | null;
} & Record<string, unknown>;

export type SMSTemplateFormValues = {
  id?: number;
  code: string;
  description?: string;
  media?: SMSTemplateDto['media'];
  tagStartDelimiter?: string;
  tagEndDelimiter?: string;
  startDate?: string;
  endDate?: string;
  type?: SMSTemplateDto['type'];
  textContent?: string;
  translatedTextContent: TranslatedTextContentFormValue[];
};

export type SMSTemplateDetail = SMSTemplateFormValues & {
  updatedCode?: string;
};
