import { CountryEditForm } from '@/features/countries/components/CountryEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryEditPage({ params }: Props) {
  const { code } = await params;

  return <CountryEditForm countryCode={code} />;
}
