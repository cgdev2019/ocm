import { CountryDetail } from '@/features/countries/components/CountryDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryDetailPage({ params }: Props) {
  const { code } = await params;

  return <CountryDetail countryCode={code} />;
}
