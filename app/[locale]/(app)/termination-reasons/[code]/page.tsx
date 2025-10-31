import { TerminationReasonDetail } from '@/features/termination-reasons/components/TerminationReasonDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function TerminationReasonDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <TerminationReasonDetail code={code} />;
}
