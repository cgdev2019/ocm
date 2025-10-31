import { CurrencyEditForm } from '@/features/currency/components/CurrencyEditForm';

type Props = {
  params: { code: string };
};

export default function CurrencyEditPage({ params }: Props) {
  return <CurrencyEditForm currencyCode={params.code} />;
}
