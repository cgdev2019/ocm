'use client';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import { useTranslations } from 'next-intl';

export const GlobalSearch = () => {
  const t = useTranslations('layout');

  return (
    <TextField
      size="small"
      placeholder={t('searchPlaceholder')}
      sx={{
        minWidth: 240,
        '& .MuiOutlinedInput-root': {
          borderRadius: 999,
          backgroundColor: (theme) => theme.palette.background.paper,
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
    />
  );
};
