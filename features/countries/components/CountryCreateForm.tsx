'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { CountryForm } from '@/features/countries/components/CountryForm';

export const CountryCreateForm = () => {
  const router = useRouter();
  return <CountryForm mode="create" onSuccess={(values) => router.replace(`../${values.countryCode}`)} />;
};
