import { CustomerDetail } from '@/features/customers/components/CustomerDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CustomerDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <CustomerDetail code={code} />;
}
