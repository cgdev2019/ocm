import { CountryDetail } from '@/features/countries/components/CountryDetail';

type Props = {
  params: { code: string };
};

export default function CountryDetailPage({ params }: Props) {
  return <CountryDetail countryCode={params.code} />;
}
