import { AccountingCodeDetail } from '@/features/accounting-codes/components/AccountingCodeDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function AccountingCodeDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <AccountingCodeDetail code={code} />;
}
