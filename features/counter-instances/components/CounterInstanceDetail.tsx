'use client';

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useCounterInstance } from '@/features/counter-instances/api';
import type { CounterInstanceDetail as CounterInstanceDetailType } from '@/features/counter-instances/types';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

const renderField = (
  t: ReturnType<typeof useTranslations>,
  label: string,
  value: string | number | undefined,
) => (
  <Stack spacing={0.5}>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography variant="body1">{value ?? '—'}</Typography>
  </Stack>
);

const formatBoolean = (value: boolean | undefined, t: ReturnType<typeof useTranslations>) => {
  if (value === undefined) {
    return '—';
  }
  return value ? t('common.yes') : t('common.no');
};

export const CounterInstanceDetail = ({ code }: { code: string }) => {
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

  const detail: CounterInstanceDetailType | null | undefined = detailQuery.data;
  if (!detail) {
    return <Alert severity="warning">{t('table.empty')}</Alert>;
  }

  return (
    <Stack spacing={3} component="section">
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={2}>
        <Stack spacing={0.5}>
          <Typography variant="h4">{detail.code}</Typography>
          <Typography variant="body2" color="text.secondary">
            {t('forms.counterInstance.title')}
          </Typography>
        </Stack>
        <Button variant="contained" onClick={() => router.push(`${pathname}/edit`)}>
          {t('actions.edit')}
        </Button>
      </Stack>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              {renderField(t, t('forms.counterInstance.counterTemplateCode'), detail.counterTemplateCode)}
              {renderField(t, t('forms.counterInstance.chargeInstanceCode'), detail.chargeInstanceCode)}
              {renderField(t, t('forms.counterInstance.productCode'), detail.productCode)}
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              {renderField(t, t('forms.counterInstance.userAccountCode'), detail.userAccountCode)}
              {renderField(t, t('forms.counterInstance.customerAccountCode'), detail.customerAccountCode)}
              {renderField(t, t('forms.counterInstance.billingAccountCode'), detail.billingAccountCode)}
            </Stack>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
              {renderField(t, t('forms.counterInstance.subscriptionCode'), detail.subscriptionCode)}
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h6">{t('forms.counterInstance.counterPeriods')}</Typography>
            <Divider />
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>{t('forms.counterInstance.code')}</TableCell>
                  <TableCell>{t('forms.counterInstance.counterType')}</TableCell>
                  <TableCell>{t('forms.counterInstance.level')}</TableCell>
                  <TableCell>{t('forms.counterInstance.periodStartDate')}</TableCell>
                  <TableCell>{t('forms.counterInstance.periodEndDate')}</TableCell>
                  <TableCell>{t('forms.counterInstance.value')}</TableCell>
                  <TableCell>{t('forms.counterInstance.accumulator')}</TableCell>
                  <TableCell>{t('forms.counterInstance.accumulatorType')}</TableCell>
                  <TableCell>{t('forms.counterInstance.accumulatedValues')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {detail.counterPeriods.map((period) => {
                  let accumulatedValues: string | undefined;
                  if (period.accumulatedValuesJson) {
                    accumulatedValues = period.accumulatedValuesJson;
                  }

                  return (
                    <TableRow key={period.id ?? `${period.code}-${period.level}`}> 
                      <TableCell>{period.code ?? '—'}</TableCell>
                      <TableCell>{period.counterType ?? '—'}</TableCell>
                      <TableCell>{period.level ?? '—'}</TableCell>
                      <TableCell>{period.periodStartDate ?? '—'}</TableCell>
                      <TableCell>{period.periodEndDate ?? '—'}</TableCell>
                      <TableCell>{period.value ?? '—'}</TableCell>
                      <TableCell>{formatBoolean(period.accumulator, t)}</TableCell>
                      <TableCell>{period.accumulatorType ?? '—'}</TableCell>
                      <TableCell>{accumulatedValues ?? '—'}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
