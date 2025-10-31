import { CountryDetail } from '@/features/countries/components/CountryDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CountryDetail countryCode={code} />;
}
