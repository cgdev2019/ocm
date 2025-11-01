import type { components } from '@/lib/api/generated/schema';
import type { ActionStatus } from '@/lib/api/helpers';

export type Resource = components['schemas']['Resource'];

export type DunningActionInstanceInput = components['schemas']['DunningActionInstanceInput'];
export type DunningLevelInstanceInput = components['schemas']['DunningLevelInstanceInput'];
export type MassPauseDunningCollectionPlan = components['schemas']['MassPauseDunningCollectionPlan'];
export type MassStopDunningCollectionPlan = components['schemas']['MassStopDunningCollectionPlan'];
export type DunningCollectionPlanPause = components['schemas']['DunningCollectionPlanPause'];
export type RemoveActionInstanceInput = components['schemas']['RemoveActionInstanceInput'];
export type RemoveLevelInstanceInput = components['schemas']['RemoveLevelInstanceInput'];
export type DunningCollectionPlanStop = components['schemas']['DunningCollectionPlanStop'];
export type UpdateLevelInstanceInput = components['schemas']['UpdateLevelInstanceInput'];

export type CollectionPlanMutationResult = {
  actionStatus?: ActionStatus | null;
} & Record<string, unknown>;
