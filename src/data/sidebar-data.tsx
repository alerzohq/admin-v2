import {
  Dashboard,
  UserIcon,
  DigitalbankIcon,
  ActiveDigitalIcon,
  ActiveUserIcon,
  HistoryIcon,
  BusinessIcon,
  TerminalIcon,
  ActiveHistoryIcon,
  ActiveDashboardIcon,
  ActiveBusinessIcon,
  ProductIcon,
  ActiveProductIcon,
  ActiveTerminalIcon,
  AuditIcon,
  ActiveAuditIcon,
  ActiveKYCIcon,
  BillerIcon,
  ActiveBillerIcon,
} from '../assets/icons'
import { KYCVerification } from '../assets/icons/KYC/KYC'
import { Color } from '../assets/theme'
import AllPermissions from '../configs/access-control'
import { Path } from '../constants/route-path'

export const SideBarMenus = () => {
  const {
    adminAccess,
    businessesAccess,
    customersAccess,
    historyAccess,
    productsAccess,
    rolesAccess,
    terminalAccess,
    KYCAccess,
    viewBillersAccess,
  } = AllPermissions()

  const sideBarData = [
    {
      id: 1,
      title: 'Dashboard',
      InActiveIcon: Dashboard,
      ActiveIcon: <ActiveDashboardIcon />,
      path: `/${Path.DASHBOARD}`,
      activeIconColor: Color.alerzoBlue,
    },
    historyAccess && {
      id: 2,
      title: 'History',
      InActiveIcon: HistoryIcon,
      ActiveIcon: <ActiveHistoryIcon />,
      activeIconColor: Color.alerzoBlue,
      path: `/${Path.DASHBOARD}/${Path.TRANSACTION}`,
    },
    businessesAccess && {
      id: 3,
      title: 'Businesses',
      InActiveIcon: BusinessIcon,
      ActiveIcon: <ActiveBusinessIcon />,
      path: `/${Path.DASHBOARD}/${Path.BUSINESSES}`,
      activeIconColor: Color.alerzoBlue,
    },
    customersAccess && {
      id: 4,
      title: 'Digital Bank',
      InActiveIcon: DigitalbankIcon,
      ActiveIcon: <ActiveDigitalIcon />,
      path: `/${Path.DASHBOARD}/${Path.DIGITALBANK}`,
      activeIconColor: Color.alerzoBlue,
    },
    rolesAccess && {
      id: 5,
      title: 'Employee  Mgt',
      InActiveIcon: UserIcon,
      ActiveIcon: <ActiveUserIcon />,
      path: `/${Path.DASHBOARD}/${Path.USERS}`,
      activeIconColor: Color.alerzoBlue,
    },
    viewBillersAccess && {
      id: 6,
      title: 'Billers',
      InActiveIcon: BillerIcon,
      ActiveIcon: <ActiveBillerIcon />,
      path: `/${Path.DASHBOARD}/${Path.BILLER}`,
      activeIconColor: Color.alerzoBlue,
    },
    productsAccess && {
      id: 7,
      title: 'Products',
      InActiveIcon: ProductIcon,
      ActiveIcon: <ActiveProductIcon />,
      path: `/${Path.DASHBOARD}/${Path.PRODUCTS}`,
      activeIconColor: Color.alerzoBlue,
    },
    terminalAccess && {
      id: 8,
      title: 'Terminals',
      InActiveIcon: TerminalIcon,
      ActiveIcon: <ActiveTerminalIcon />,
      activeIconColor: Color.alerzoBlue,
      path: `/${Path.DASHBOARD}/${Path.TERMINALS}`,
    },
    adminAccess && {
      id: 9,
      title: 'Audit Trail',
      InActiveIcon: AuditIcon,
      ActiveIcon: <ActiveAuditIcon />,
      activeIconColor: Color.alerzoBlue,
      path: `/${Path.DASHBOARD}/${Path.AUDIT}`,
    },
    KYCAccess && {
      id: 10,
      title: 'KYC',
      path: `/${Path.DASHBOARD}/${Path.KYC}`,
      ActiveIcon: <ActiveKYCIcon />,
      InActiveIcon: KYCVerification,
      activeIconColor: Color.alerzoBlue,
    },
  ].filter(Boolean)

  return { sideBarData }
}
