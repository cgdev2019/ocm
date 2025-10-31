import { CurrencyIsoDetail } from '@/features/currency-iso/components/CurrencyIsoDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CurrencyIsoDetailPage({ params }: Props) {
  const resolvedParams = await params;

  return <CurrencyIsoDetail currencyCode={resolvedParams.code} />;
}
