import { CustomerEditForm } from '@/features/customers/components/CustomerEditForm';

type Props = {
  params: { code: string };
};

export default function CustomerEditPage({ params }: Props) {
  return <CustomerEditForm code={params.code} />;
}
