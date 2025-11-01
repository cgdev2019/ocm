import { AccountingPeriodEditForm } from '@/features/accounting-periods/components/AccountingPeriodEditForm';

type Props = {
  params: Promise<{ fiscalYear: string }>;
};

export default async function AccountingPeriodEditPage(props: Props) {
  const params = await props.params;
  const { fiscalYear } = params;

  return <AccountingPeriodEditForm fiscalYear={fiscalYear} />;
}
