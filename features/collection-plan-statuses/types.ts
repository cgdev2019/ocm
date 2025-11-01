import type { components } from '@/lib/api/generated/schema';
import type { ActionStatus } from '@/lib/api/helpers';

export type DunningCollectionPlanStatusDto = components['schemas']['DunningCollectionPlanStatus'];
export type ResourceDto = components['schemas']['Resource'];

export type DunningCollectionPlanStatusResponseDto = {
  actionStatus?: ActionStatus | null;
  dunningCollectionPlanStatus?:
    | DunningCollectionPlanStatusDto
    | DunningCollectionPlanStatusResponseDto
    | null;
  result?:
    | DunningCollectionPlanStatusDto
    | DunningCollectionPlanStatusResponseDto
    | DunningCollectionPlanStatusDto[]
    | null;
  data?:
    | DunningCollectionPlanStatusDto
    | DunningCollectionPlanStatusResponseDto
    | DunningCollectionPlanStatusDto[]
    | null;
  dunningCollectionPlanStatuses?:
    | DunningCollectionPlanStatusDto[]
    | DunningCollectionPlanStatusResponseDto[]
    | null;
} & Record<string, unknown>;

export type DunningCollectionPlanStatusFormValues = {
  id?: number;
  code: string;
  status: DunningCollectionPlanStatusDto['status'];
  description: string;
  colorCode?: string;
  dunningSettingsCode?: string;
};

export type DunningCollectionPlanStatusDetail = {
  id?: number;
  code: string;
  status: DunningCollectionPlanStatusDto['status'];
  description: string;
  colorCode?: string;
  dunningSettingsCode?: string;
};

export type DunningCollectionPlanStatusListItem = {
  id?: number;
  code: string;
  status: DunningCollectionPlanStatusDto['status'];
  description: string;
  colorCode?: string;
  dunningSettingsCode?: string;
};

export type DunningCollectionPlanStatusDeletePayload = {
  id: number;
  code?: string;
};
