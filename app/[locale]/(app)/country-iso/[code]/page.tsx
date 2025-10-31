import { CountryIsoDetail } from '@/features/country-iso/components/CountryIsoDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryIsoDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CountryIsoDetail countryCode={code} />;
}
