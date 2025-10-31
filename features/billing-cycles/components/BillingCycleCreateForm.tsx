'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { BillingCycleForm } from '@/features/billing-cycles/components/BillingCycleForm';

export const BillingCycleCreateForm = () => {
  const router = useRouter();
  return <BillingCycleForm mode="create" onSuccess={(values) => router.replace(`../${values.code}`)} />;
};
