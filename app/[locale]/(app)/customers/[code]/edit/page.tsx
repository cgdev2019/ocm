import { CustomerEditForm } from '@/features/customers/components/CustomerEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CustomerEditPage({ params }: Props) {
  const { code } = await params;

  return <CustomerEditForm code={code} />;
}
