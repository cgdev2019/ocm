import { AccountingPeriodDetail } from '@/features/accounting-periods/components/AccountingPeriodDetail';

type Props = {
  params: Promise<{ fiscalYear: string }>;
};

export default async function AccountingPeriodDetailPage(props: Props) {
  const params = await props.params;
  const { fiscalYear } = params;

  return <AccountingPeriodDetail fiscalYear={fiscalYear} />;
}
