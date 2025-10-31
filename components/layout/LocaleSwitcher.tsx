'use client';

import { useState } from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import { localeNames, locales, type Locale } from '@/lib/i18n/config';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

export const LocaleSwitcher = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('layout');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (targetLocale: Locale) => {
    handleClose();
    if (targetLocale === locale) {
      return;
    }

    router.replace(pathname, { locale: targetLocale });
  };

  return (
    <Box>
      <IconButton
        color="inherit"
        onClick={handleOpen}
        aria-haspopup="true"
        aria-expanded={Boolean(anchorEl)}
        aria-label={t('language')}
      >
        <Stack direction="row" spacing={0.5} alignItems="center">
          <TranslateIcon fontSize="small" />
          <Typography fontSize="0.75rem" sx={{ textTransform: 'uppercase' }}>
            {locale}
          </Typography>
          <ExpandMoreIcon fontSize="small" />
        </Stack>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
        {locales.map((item) => (
          <MenuItem key={item} selected={item === locale} onClick={() => handleSelect(item)}>
            {localeNames[item]}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
