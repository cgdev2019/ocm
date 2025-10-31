import { CurrencyIsoEditForm } from '@/features/currency-iso/components/CurrencyIsoEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CurrencyIsoEditPage({ params }: Props) {
  const resolvedParams = await params;

  return <CurrencyIsoEditForm currencyCode={resolvedParams.code} />;
}
