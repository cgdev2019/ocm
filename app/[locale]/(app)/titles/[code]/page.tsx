import { TitleDetail } from '@/features/titles/components/TitleDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function TitleDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <TitleDetail code={code} />;
}
