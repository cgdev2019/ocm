import { CountryIsoDetail } from '@/features/country-iso/components/CountryIsoDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryIsoDetailPage({ params }: Props) {
  const { code } = await params;

  return <CountryIsoDetail countryCode={code} />;
}
