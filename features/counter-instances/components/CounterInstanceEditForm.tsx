'use client';

import { Alert, Box, CircularProgress } from '@mui/material';
import { CounterInstanceForm } from '@/features/counter-instances/components/CounterInstanceForm';
import { useCounterInstance } from '@/features/counter-instances/api';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { useTranslations } from 'next-intl';

export const CounterInstanceEditForm = ({ code }: { code: string }) => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const detailQuery = useCounterInstance(code);

  if (detailQuery.isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={240}>
        <CircularProgress size={32} />
      </Box>
    );
  }

  if (detailQuery.isError) {
    return <Alert severity="error">{t('forms.error')}</Alert>;
  }

  const detail = detailQuery.data;
  if (!detail) {
    return <Alert severity="warning">{t('table.empty')}</Alert>;
  }

  const handleSuccess = () => {
    const basePath = pathname.endsWith('/edit') ? pathname.slice(0, -5) : pathname;
    router.replace(basePath);
  };

  return <CounterInstanceForm mode="edit" defaultValues={detail} onSuccess={handleSuccess} />;
};
