import { CountryIsoDetail } from '@/features/country-iso/components/CountryIsoDetail';

type Props = {
  params: { code: string };
};

export default function CountryIsoDetailPage({ params }: Props) {
  return <CountryIsoDetail countryCode={params.code} />;
}
