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
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import StorefrontIcon from '@mui/icons-material/StorefrontOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOffOutlined';
import BoltIcon from '@mui/icons-material/BoltOutlined';
import VpnKeyIcon from '@mui/icons-material/VpnKeyOutlined';
import AccountTreeIcon from '@mui/icons-material/AccountTreeOutlined';
import ContactsIcon from '@mui/icons-material/ContactsOutlined';
import BadgeIcon from '@mui/icons-material/BadgeOutlined';
import PolicyIcon from '@mui/icons-material/PolicyOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FolderCopyIcon from '@mui/icons-material/FolderCopyOutlined';
import CalculateIcon from '@mui/icons-material/CalculateOutlined';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import WidgetsIcon from '@mui/icons-material/WidgetsOutlined';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import DesignServicesIcon from '@mui/icons-material/DesignServicesOutlined';
import ShareIcon from '@mui/icons-material/ShareOutlined';
import HubIcon from '@mui/icons-material/HubOutlined';
import PriceChangeIcon from '@mui/icons-material/PriceChangeOutlined';
import CountertopsIcon from '@mui/icons-material/CountertopsOutlined';
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
  title: BadgeIcon,
  massImport: CloudUploadIcon,
  occTemplate: SchemaIcon,
  pdfInvoice: PictureAsPdfIcon,
  provider: BusinessIcon,
  audit: PolicyIcon,
  fileFormat: InsertDriveFileIcon,
  files: FolderCopyIcon,
  query: QueryStatsIcon,
  accountingCode: CalculateIcon,
  mediation: SettingsInputComponentIcon,
  scriptInstance: IntegrationInstructionsIcon,
  seller: StorefrontIcon,
  terminationReason: HighlightOffIcon,
  usage: BoltIcon,
  access: VpnKeyIcon,
  businessAccountModel: AccountTreeIcon,
  businessOfferModel: WidgetsIcon,
  businessProductModel: PrecisionManufacturingIcon,
  businessServiceModel: DesignServicesIcon,
  channel: ShareIcon,
  channelsAndSegments: HubIcon,
  chargeTemplate: PriceChangeIcon,
  counterTemplate: CountertopsIcon,
  providerContact: ContactsIcon,
};

export const NavIcon = ({ name }: { name: string }) => {
  const Icon = registry[name] ?? DashboardIcon;
  return <Icon fontSize="small" />;
};
