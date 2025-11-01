'use client';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useWalletOperationDetail } from '@/features/wallet/api';

export const WalletOperationDetailDrawer = ({
  code,
  open,
  onClose,
}: {
  code: string | null;
  open: boolean;
  onClose: () => void;
}) => {
  const t = useTranslations();
  const detailQuery = useWalletOperationDetail(open ? code : null);

  return (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { width: { xs: '100%', sm: 380 } } }}>
      <Stack spacing={2} sx={{ p: 3, height: '100%' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {code ? t('forms.wallet.operationDetailTitle', { code }) : t('forms.wallet.operationDetail')}
          </Typography>
          <IconButton aria-label={t('actions.close')} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        {detailQuery.isLoading ? (
          <Stack flex={1} justifyContent="center" alignItems="center">
            <CircularProgress />
          </Stack>
        ) : detailQuery.data ? (
          <Stack spacing={2} sx={{ overflowY: 'auto', pr: 1 }}>
            <Stack spacing={0.5}>
              <Typography variant="subtitle2" color="text.secondary">
                {t('forms.wallet.code')}
              </Typography>
              <Typography>{detailQuery.data.code}</Typography>
            </Stack>
            {detailQuery.data.description ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.description')}
                </Typography>
                <Typography>{detailQuery.data.description}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.userAccount ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.userAccount')}
                </Typography>
                <Typography>{detailQuery.data.userAccount}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.walletTemplate ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.walletTemplate')}
                </Typography>
                <Typography>{detailQuery.data.walletTemplate}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.status ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.status')}
                </Typography>
                <Typography>{detailQuery.data.status}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.type ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.type')}
                </Typography>
                <Typography>{detailQuery.data.type}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.operationDate ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.operationDate')}
                </Typography>
                <Typography>{detailQuery.data.operationDate}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.amountWithoutTax !== undefined ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.amountWithoutTax')}
                </Typography>
                <Typography>{detailQuery.data.amountWithoutTax}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.amountWithTax !== undefined ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.amountWithTax')}
                </Typography>
                <Typography>{detailQuery.data.amountWithTax}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.amountTax !== undefined ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.amountTax')}
                </Typography>
                <Typography>{detailQuery.data.amountTax}</Typography>
              </Stack>
            ) : null}
            {detailQuery.data.offerCode ? (
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" color="text.secondary">
                  {t('forms.wallet.offerCode')}
                </Typography>
                <Typography>{detailQuery.data.offerCode}</Typography>
              </Stack>
            ) : null}
          </Stack>
        ) : (
          <Box>
            <Typography color="text.secondary">{t('table.empty')}</Typography>
          </Box>
        )}
      </Stack>
    </Drawer>
  );
};
