'use client';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs as MUIBreadcrumbs, Link as MuiLink, Typography } from '@mui/material';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/i18n/navigation';
import { NAV_SECTIONS } from '@/lib/config/constants';

type Crumb = {
  href: string;
  label?: string;
  labelKey?: string;
};

const NAVIGATION_LABEL_MAP = NAV_SECTIONS.reduce<Record<string, string>>((acc, section) => {
  acc[section.path] = section.label;
  return acc;
}, {});

const ROOT_LABEL_KEY = NAVIGATION_LABEL_MAP['/'] ?? 'navigation.dashboard';

const normalizePathname = (pathname: string) => {
  if (pathname === '/') {
    return pathname;
  }

  return pathname.replace(/\/$/, '');
};

export const AppBreadcrumbs = () => {
  const pathname = normalizePathname(usePathname());
  const t = useTranslations();

  const items = useMemo<Crumb[]>(() => {
    const segments = pathname.split('/').filter(Boolean);

    const crumbs = [
      {
        href: '/',
        labelKey: ROOT_LABEL_KEY,
      },
    ];

    segments.forEach((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join('/')}`;
      const labelKey = NAVIGATION_LABEL_MAP[href];

      if (labelKey) {
        crumbs.push({ href, labelKey });
        return;
      }

      if (segment === 'new') {
        crumbs.push({ href, labelKey: 'breadcrumbs.new' });
        return;
      }

      crumbs.push({ href, label: decodeURIComponent(segment) });
    });

    return crumbs;
  }, [pathname]);

  if (!items.length) {
    return null;
  }

  return (
    <MUIBreadcrumbs
      aria-label={t('breadcrumbs.ariaLabel')}
      separator={<NavigateNextIcon fontSize="small" color="action" />}
      sx={{ mb: 2 }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const label = item.labelKey ? t(item.labelKey) : item.label ?? '';

        if (isLast) {
          return (
            <Typography key={item.href} color="text.primary" variant="body2" fontWeight={600}>
              {label}
            </Typography>
          );
        }

        return (
          <MuiLink
            key={item.href}
            component={Link}
            href={item.href}
            color="inherit"
            underline="hover"
            variant="body2"
          >
            {label}
          </MuiLink>
        );
      })}
    </MUIBreadcrumbs>
  );
};
