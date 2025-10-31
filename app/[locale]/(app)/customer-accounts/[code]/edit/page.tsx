import { CustomerAccountEditForm } from '@/features/customer-accounts/components/CustomerAccountEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function CustomerAccountEditPage({ params }: Props) {
  const { code } = await params;

  return <CustomerAccountEditForm code={code} />;
}
