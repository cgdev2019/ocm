import { CountryIsoEditForm } from '@/features/country-iso/components/CountryIsoEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryIsoEditPage({ params }: Props) {
  const { code } = await params;

  return <CountryIsoEditForm countryCode={code} />;
}
