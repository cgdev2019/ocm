import { CountryIsoEditForm } from '@/features/country-iso/components/CountryIsoEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryIsoEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CountryIsoEditForm countryCode={code} />;
}
