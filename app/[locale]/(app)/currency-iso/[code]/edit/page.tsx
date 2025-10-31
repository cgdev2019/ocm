import { CurrencyIsoEditForm } from '@/features/currency-iso/components/CurrencyIsoEditForm';

type Props = {
  params: { code: string };
};

export default function CurrencyIsoEditPage({ params }: Props) {
  return <CurrencyIsoEditForm currencyCode={params.code} />;
}
