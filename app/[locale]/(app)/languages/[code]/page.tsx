import { LanguageDetail } from '@/features/languages/components/LanguageDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function LanguageDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <LanguageDetail code={code} />;
}
