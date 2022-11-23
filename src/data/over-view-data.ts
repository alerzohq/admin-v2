import {
  TransCountIcon,
  Users2Icon,
  BriefcaseIcon,
  Terminal2Icon,
} from '../assets/icons'
import { thousandSeparator } from '../utils/formatValue'

export const overviewStats = (Statistics: { [key: string]: any }) => {
  let statistics = {
    card1: thousandSeparator(Statistics?.totalCustomers),
    card2: thousandSeparator(Statistics?.totalTransactions),
    card3: thousandSeparator(Statistics?.totalBusinesses),
    card4: thousandSeparator(Statistics?.totalTerminals),
  }
  return statistics
}

export const dashboardLabels = {
  card1: 'Total No of Customer',
  card2: 'Total Number of Transactions',
  card3: 'Total No of Businesses',
  card4: 'Total No of Terminals',
}
export const dashboardStatsIcons = {
  card1: Users2Icon,
  card2: TransCountIcon,
  card3: BriefcaseIcon,
  card4: Terminal2Icon,
}
