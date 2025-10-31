'use client';

import { SubscriptionForm } from '@/features/subscriptions/components/SubscriptionForm';
import { useRouter } from '@/lib/i18n/navigation';

export const SubscriptionCreateForm = () => {
  const router = useRouter();

  return (
    <SubscriptionForm
      mode="create"
      onSuccess={(values) => router.replace(`../${values.code}`)}
      defaultValues={{}}
    />
  );
};
