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
export type AvailablePoliciesInput = components['schemas']['AvailablePoliciesInput'];
export type DunningMassSwitchInput = components['schemas']['DunningMassSwitchInput'];
export type MassSwitchDunningCollectionPlan =
  components['schemas']['MassSwitchDunningCollectionPlan'];
export type SwitchDunningCollectionPlan = components['schemas']['SwitchDunningCollectionPlan'];

export type CollectionPlanMutationResult = {
  actionStatus?: ActionStatus | null;
} & Record<string, unknown>;
