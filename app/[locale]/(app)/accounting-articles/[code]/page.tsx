import { AccountingArticleDetail } from '@/features/accounting-articles/components/AccountingArticleDetail';

type PageProps = {
  params: { code: string };
};

export default function AccountingArticleDetailPage({ params }: PageProps) {
  return <AccountingArticleDetail code={params.code} />;
}
