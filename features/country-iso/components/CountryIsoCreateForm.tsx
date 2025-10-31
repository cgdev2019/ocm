'use client';

import { useRouter } from '@/lib/i18n/navigation';
import { CountryIsoForm } from '@/features/country-iso/components/CountryIsoForm';

export const CountryIsoCreateForm = () => {
  const router = useRouter();
  return <CountryIsoForm mode="create" onSuccess={(values) => router.replace(`../${values.countryCode}`)} />;
};
