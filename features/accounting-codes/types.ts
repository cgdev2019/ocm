import type { components } from '@/lib/api/generated/schema';

export type AccountingCodeDto = components['schemas']['AccountingCodeDto'];
export type AccountingCodeGetResponseDto = components['schemas']['AccountingCodeGetResponseDto'];
export type AccountingCodeListResponseDto = components['schemas']['AccountingCodeListResponseDto'];

export type AccountingCodeListItem = {
  code: string;
  description?: string;
  chartOfAccountTypeEnum?: AccountingCodeDto['chartOfAccountTypeEnum'];
  chartOfAccountViewTypeEnum?: AccountingCodeDto['chartOfAccountViewTypeEnum'];
  parentAccountingCode?: string;
  disabled?: boolean;
};

export type AccountingCodeFormValues = {
  code: string;
  description?: string;
  parentAccountingCode?: string;
  chartOfAccountTypeEnum?: AccountingCodeDto['chartOfAccountTypeEnum'];
  chartOfAccountViewTypeEnum?: AccountingCodeDto['chartOfAccountViewTypeEnum'];
  reportingAccount?: string;
  notes?: string;
  disabled?: boolean;
  migrated?: boolean;
};

export type AccountingCodeDetailValues = AccountingCodeFormValues;
