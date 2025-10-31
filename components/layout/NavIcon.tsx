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
import CodeIcon from '@mui/icons-material/CodeOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import NumbersIcon from '@mui/icons-material/FormatListNumberedOutlined';
import LabelIcon from '@mui/icons-material/LabelOutlined';
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import LanguageIcon from '@mui/icons-material/LanguageOutlined';
import TranslateIcon from '@mui/icons-material/TranslateOutlined';
import CloudUploadIcon from '@mui/icons-material/CloudUploadOutlined';
import SchemaIcon from '@mui/icons-material/SchemaOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdfOutlined';
import BusinessIcon from '@mui/icons-material/BusinessOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStatsOutlined';
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
  genericCode: CodeIcon,
  invoiceCategory: CategoryIcon,
  invoiceSequence: NumbersIcon,
  invoiceSubCategory: LabelIcon,
  invoiceType: DescriptionIcon,
  languageIso: LanguageIcon,
  language: TranslateIcon,
  massImport: CloudUploadIcon,
  occTemplate: SchemaIcon,
  pdfInvoice: PictureAsPdfIcon,
  provider: BusinessIcon,
  query: QueryStatsIcon,
};

export const NavIcon = ({ name }: { name: string }) => {
  const Icon = registry[name] ?? DashboardIcon;
  return <Icon fontSize="small" />;
};
