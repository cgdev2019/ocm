import { LanguageIsoDetail } from '@/features/language-iso/components/LanguageIsoDetail';

type Props = {
  params: Promise<{ code: string }>;
};

export default async function LanguageIsoDetailPage(props: Props) {
  const params = await props.params;
  const { code } = params;

  return <LanguageIsoDetail code={code} />;
}
