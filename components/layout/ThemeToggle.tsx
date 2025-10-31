'use client';

import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslations } from 'next-intl';
import { useThemeMode } from '@/components/providers/ThemeProvider';

export const ThemeToggle = () => {
  const { mode, toggle } = useThemeMode();
  const t = useTranslations('layout');

  return (
    <Tooltip title={t('theme')}>
      <IconButton color="inherit" onClick={toggle} aria-label={t('theme')}>
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
};
