import { OccTemplateDetail } from '@/features/occ-templates/components/OccTemplateDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function OccTemplateDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <OccTemplateDetail code={code} />;
}
