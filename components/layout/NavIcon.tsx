'use client';

import DashboardIcon from '@mui/icons-material/SpaceDashboardOutlined';
import GroupIcon from '@mui/icons-material/GroupsOutlined';
import ReceiptIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import GavelIcon from '@mui/icons-material/GavelOutlined';
import type { SvgIconComponent } from '@mui/icons-material';

const registry: Record<string, SvgIconComponent> = {
  dashboard: DashboardIcon,
  customers: GroupIcon,
  accounts: AccountBalanceIcon,
  invoices: ReceiptIcon,
  taxes: GavelIcon,
};

export const NavIcon = ({ name }: { name: string }) => {
  const Icon = registry[name] ?? DashboardIcon;
  return <Icon fontSize="small" />;
};
