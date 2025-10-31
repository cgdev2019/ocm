import { CountryEditForm } from '@/features/countries/components/CountryEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CountryEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CountryEditForm countryCode={code} />;
}
