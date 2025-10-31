import { CurrencyDetail } from '@/features/currency/components/CurrencyDetail';

type Props = {
  params: { code: string };
};

export default function CurrencyDetailPage({ params }: Props) {
  return <CurrencyDetail currencyCode={params.code} />;
}
