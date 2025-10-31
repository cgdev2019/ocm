'use client';

import DashboardIcon from '@mui/icons-material/SpaceDashboardOutlined';
import GroupIcon from '@mui/icons-material/GroupsOutlined';
import ReceiptIcon from '@mui/icons-material/ReceiptLongOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import GavelIcon from '@mui/icons-material/GavelOutlined';
import AutorenewIcon from '@mui/icons-material/AutorenewOutlined';
import EventNoteIcon from '@mui/icons-material/EventNoteOutlined';
import TuneIcon from '@mui/icons-material/TuneOutlined';
import PublicIcon from '@mui/icons-material/PublicOutlined';
import type { SvgIconComponent } from '@mui/icons-material';

const registry: Record<string, SvgIconComponent> = {
  dashboard: DashboardIcon,
  customers: GroupIcon,
  accounts: AccountBalanceIcon,
  invoices: ReceiptIcon,
  taxes: GavelIcon,
  billing: AutorenewIcon,
  calendar: EventNoteIcon,
  settings: TuneIcon,
  globe: PublicIcon,
};

export const NavIcon = ({ name }: { name: string }) => {
  const Icon = registry[name] ?? DashboardIcon;
  return <Icon fontSize="small" />;
};
