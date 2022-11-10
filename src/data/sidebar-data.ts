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
} from '../assets/icons'
import { Color } from '../assets/theme'
import AllPermissions from '../configs/access-control';
import { Path } from '../constants/route-path'




export const SideBarMenus =()=>{

const {adminAccess} = AllPermissions();




  const sideBarData = [
    {
      id: 1,
      title: 'Dashboard',
      InActiveIcon: Dashboard,
      ActiveIcon: ActiveDashboardIcon,
      path: `/${Path.DASHBOARD}`,
      activeIconColor: Color.alerzoBlue,
    },
    {
      id: 2,
      title: 'History',
      InActiveIcon: HistoryIcon,
      ActiveIcon: ActiveHistoryIcon,
      activeIconColor: Color.alerzoBlue,
      path: `/${Path.DASHBOARD}/${Path.TRANSACTION}`,
    },
    (adminAccess && { 
      id: 3,
      title: 'Businesses',
      InActiveIcon: BusinessIcon,
      ActiveIcon: ActiveBusinessIcon,
      path: `/${Path.DASHBOARD}/${Path.BUSINESSES}`,
      activeIconColor: Color.alerzoBlue,
    }),
    
    {
      id: 4,
      title: 'Digital Bank',
      InActiveIcon: DigitalbankIcon,
      ActiveIcon: ActiveDigitalIcon,
      path: `/${Path.DASHBOARD}/${Path.DIGITALBANK}`,
      activeIconColor: Color.alerzoBlue,
    },
    {
      id: 5,
      title: 'Employee  Mgt',
      InActiveIcon: UserIcon,
      ActiveIcon: ActiveUserIcon,
      path: `/${Path.DASHBOARD}/${Path.USERS}`,
      activeIconColor: Color.alerzoBlue,
    },
    {
      id: 6,
      title: 'Product',
      InActiveIcon: ProductIcon,
      ActiveIcon: ActiveProductIcon,
      path: `/${Path.DASHBOARD}/${Path.PRODUCTS}`,
      activeIconColor: Color.alerzoBlue,
    },
    (adminAccess && {
      id: 6,
      title: 'Terminals',
      InActiveIcon: TerminalIcon,
      ActiveIcon: ActiveTerminalIcon,
      activeIconColor: Color.alerzoBlue,
      path: `/${Path.DASHBOARD}/${Path.TERMINALS}`,
    }),
    {
      id: 7,
      title: 'Audit Trail',
      InActiveIcon: AuditIcon,
      ActiveIcon: ActiveAuditIcon,
      activeIconColor: Color.alerzoBlue,
      path: `/${Path.DASHBOARD}/${Path.AUDIT}`,
    },
  ].filter(Boolean);

  return {sideBarData}
}

