import { Dashboard, UserIcon,HistoryIcon, BusinessIcon, TerminalIcon, DigitalbankIcon, ActiveHistoryIcon, ActiveDashboardIcon, ActiveBusinessIcon, ActiveDigitalIcon, ActiveUserIcon, ActiveTerminalIcon } from '../assets/icons'
import { Color } from '../assets/theme'
import { Path } from '../constants/route-path'

export const sideBarData = [
  {
    id: 1,
    title: 'Dashboard',
    InActiveIcon: Dashboard,
    ActiveIcon:ActiveDashboardIcon,
    path: `/${Path.DASHBOARD}`,
    activeIconColor: Color.alerzoBlue,
  },
  {
    id: 2,
    title: 'History',
    InActiveIcon: HistoryIcon,
    ActiveIcon:ActiveHistoryIcon,
    activeIconColor: Color.alerzoBlue,
    path: `/${Path.DASHBOARD}/${Path.TRANSACTION}`,
  },
  // {
  //   id: 3,
  //   title: 'Businesses',
  //   InActiveIcon: BusinessIcon,
  //   ActiveIcon:ActiveBusinessIcon,
  //   path: `/${Path.DASHBOARD}/${Path.USERS}`,
  //   activeIconColor: Color.alerzoBlue,
  // },
 
  // {
  //   id: 4,
  //   title: 'Digital Bank',
  //   InActiveIcon:  DigitalbankIcon,
  //   ActiveIcon:ActiveDigitalIcon,
  //   path: `/${Path.DASHBOARD}/${Path.USERS}`,
  //   activeIconColor: Color.alerzoBlue,
  // },
  // {
  //   id: 5,
  //   title: 'Employee  Mgt',
  //   InActiveIcon: UserIcon,
  //   ActiveIcon:ActiveUserIcon,
  //   path: `/${Path.DASHBOARD}/${Path.USERS}`,
  //   activeIconColor: Color.alerzoBlue,
  // },
 
  // {
  //   id: 6,
  //   title: 'Terminals',
  //   InActiveIcon: TerminalIcon,
  //   ActiveIcon:ActiveTerminalIcon,
  //   activeIconColor: Color.alerzoBlue,
  //   path: `/${Path.DASHBOARD}/${Path.TERMINALS}`,
  // },
]
