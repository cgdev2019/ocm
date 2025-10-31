import { CountryIsoEditForm } from '@/features/country-iso/components/CountryIsoEditForm';

type Props = {
  params: { code: string };
};

export default function CountryIsoEditPage({ params }: Props) {
  return <CountryIsoEditForm countryCode={params.code} />;
}
