import type { components } from '@/lib/api/generated/schema';

export type ScriptInstanceDto = components['schemas']['ScriptInstanceDto'];
export type ScriptInstanceReponseDto = components['schemas']['ScriptInstanceReponseDto'];
export type GetScriptInstanceResponseDto = components['schemas']['GetScriptInstanceResponseDto'];

export type ScriptInstanceListItem = {
  code: string;
  description?: string;
  type?: ScriptInstanceDto['type'];
  disabled?: boolean;
};

export type ScriptInstanceFormValues = {
  code: string;
  description?: string;
  type?: ScriptInstanceDto['type'];
  reuse?: boolean;
  script: string;
  disabled?: boolean;
  scriptInstanceCategoryCode?: string;
  codeOnly?: boolean;
};
