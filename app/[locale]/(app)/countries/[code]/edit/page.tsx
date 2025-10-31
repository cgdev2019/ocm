import { CountryEditForm } from '@/features/countries/components/CountryEditForm';

type Props = {
  params: { code: string };
};

export default function CountryEditPage({ params }: Props) {
  return <CountryEditForm countryCode={params.code} />;
}
