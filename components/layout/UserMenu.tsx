'use client';

import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useAuth } from '@/lib/auth/context';

const avatarLabel = (name?: string | null) => name?.slice(0, 2).toUpperCase() ?? 'OC';

export const UserMenu = () => {
  const { user, logout } = useAuth();
  const t = useTranslations('auth');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <Tooltip title={user?.username ?? ''}>
        <IconButton color="inherit" onClick={handleOpen} size="small">
          <Avatar sx={{ width: 32, height: 32 }}>{avatarLabel(user?.username)}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={user?.username ?? 'unknown'}
            secondary={user?.email ?? undefined}
            secondaryTypographyProps={{ fontSize: '0.75rem' }}
          />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          {t('signOut')}
        </MenuItem>
      </Menu>
    </Box>
  );
};
