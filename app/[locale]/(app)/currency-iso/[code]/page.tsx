import { CurrencyIsoDetail } from '@/features/currency-iso/components/CurrencyIsoDetail';

type Props = {
  params: { code: string };
};

export default function CurrencyIsoDetailPage({ params }: Props) {
  return <CurrencyIsoDetail currencyCode={params.code} />;
}
