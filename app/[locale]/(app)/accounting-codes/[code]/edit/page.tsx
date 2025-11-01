import { AccountingCodeEditForm } from '@/features/accounting-codes/components/AccountingCodeEditForm';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function AccountingCodeEditPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <AccountingCodeEditForm code={code} />;
}
