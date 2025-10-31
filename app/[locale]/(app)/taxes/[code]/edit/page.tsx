import { TaxEditForm } from '@/features/taxes/components/TaxEditForm';

type Props = {
  params: { code: string };
};

export default function TaxEditPage({ params }: Props) {
  return <TaxEditForm code={params.code} />;
}
