'use client';

import { CounterInstanceForm } from '@/features/counter-instances/components/CounterInstanceForm';
import { useRouter } from '@/lib/i18n/navigation';

export const CounterInstanceCreateForm = () => {
  const router = useRouter();
  return (
    <CounterInstanceForm
      mode="create"
      onSuccess={(values) => router.replace(`../${encodeURIComponent(values.code)}`)}
    />
  );
};
