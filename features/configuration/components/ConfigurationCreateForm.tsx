'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { ConfigurationForm } from '@/features/configuration/components/ConfigurationForm';

export const ConfigurationCreateForm = () => {
  const router = useRouter();
  return <ConfigurationForm mode="create" onSuccess={(values) => router.replace(`../${encodeURIComponent(values.key)}`)} />;
};
