import { CustomerDetail } from '@/features/customers/components/CustomerDetail';

type Props = {
  params: { code: string };
};

export default function CustomerDetailPage({ params }: Props) {
  return <CustomerDetail code={params.code} />;
}
