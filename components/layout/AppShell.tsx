'use client';

import { PropsWithChildren, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';
import { GlobalSearch } from '@/components/layout/GlobalSearch';
import { LocaleSwitcher } from '@/components/layout/LocaleSwitcher';
import { NavIcon } from '@/components/layout/NavIcon';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { UserMenu } from '@/components/layout/UserMenu';
import { NAV_SECTIONS } from '@/lib/config/constants';
import { useAuth } from '@/lib/auth/context';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

const drawerWidth = 280;

export const AppShell = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const locale = useLocale();
  const { user } = useAuth();
  const router = useRouter();

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Stack spacing={2} direction="row" alignItems="center" px={3} py={3}>
        <Avatar src="/logo.svg" alt="Opencell" sx={{ bgcolor: 'primary.main' }}>
          OC
        </Avatar>
        <Box>
          <Typography variant="subtitle1" fontWeight={700}>
            Opencell
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {user?.username}
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <List sx={{ flex: 1 }}>
        {NAV_SECTIONS.map((item) => {
          const href = `/${locale}${item.path}`;
          const selected = pathname?.startsWith(`/${locale}${item.path}`);
          return (
            <ListItemButton
              key={item.path}
              selected={Boolean(selected)}
              onClick={() => {
                router.push(href);
                setOpen(false);
              }}
            >
              <ListItemIcon>
                <NavIcon name={item.icon} />
              </ListItemIcon>
              <ListItemText primary={t(item.label.split('.').pop() ?? item.label)} />
            </ListItemButton>
          );
        })}
      </List>
      <Divider />
      <Box px={3} py={2}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Opencell
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backdropFilter: 'blur(6px)',
        }}
      >
        <Toolbar sx={{ display: 'flex', gap: 2 }}>
          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { md: 'none' } }}
            aria-label="open navigation"
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flex: 1, display: 'flex', gap: 2, alignItems: 'center' }}>
            <GlobalSearch />
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="Notifications">
              <IconButton color="inherit">
                <NotificationsNoneIcon />
              </IconButton>
            </Tooltip>
            <LocaleSwitcher />
            <ThemeToggle />
            <UserMenu />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
