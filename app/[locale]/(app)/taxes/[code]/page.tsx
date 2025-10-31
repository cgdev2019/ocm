import { TaxDetail } from '@/features/taxes/components/TaxDetail';

type Props = {
  params: { code: string };
};

export default function TaxDetailPage({ params }: Props) {
  return <TaxDetail code={params.code} />;
}
