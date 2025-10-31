import { TaxDetail } from '@/features/taxes/components/TaxDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function TaxDetailPage({ params }: Props) {
  const { code } = await params;

  return <TaxDetail code={code} />;
}
