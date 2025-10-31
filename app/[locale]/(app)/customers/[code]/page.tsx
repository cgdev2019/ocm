import { CustomerDetail } from '@/features/customers/components/CustomerDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CustomerDetailPage({ params }: Props) {
  const { code } = await params;

  return <CustomerDetail code={code} />;
}
