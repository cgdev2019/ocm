import { CurrencyIsoDetail } from '@/features/currency-iso/components/CurrencyIsoDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CurrencyIsoDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CurrencyIsoDetail currencyCode={code} />;
}
