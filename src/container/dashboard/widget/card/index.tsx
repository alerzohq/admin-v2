import React from 'react'
import {
  DepositIcon,
  TransCountIcon,
  UsersSolidIcon,
  WithDrawIcon,
} from '../../../../assets/icons'
import {
  amountConverter,
  thousandSeparator,
} from '../../../../utils/formatValue'
import { CardWidgetWrapper } from '../styles/widget.styles'
import CardWidgetBox from './card.widget'

const CardWidget = ({
  stats,
  labels,
  icons,
  statistics,
  loading,
}: StatsProps) => {
  return (
    <CardWidgetWrapper>
      <CardWidgetBox
        Icon={icons?.card1 || DepositIcon}
        text={labels?.card1 || ' Total Amount Deposited'}
        value={
          stats
            ? `N${
                stats?.totalAmountDeposited
                  ? amountConverter(stats?.totalAmountDeposited)
                  : '0'
              }`
            : statistics?.card1 || 0
        }
        loading={loading}
      />
      <CardWidgetBox
        Icon={icons?.card2 || WithDrawIcon}
        text={labels?.card2 || ' Total Amount Withdrawn'}
        value={
          statistics?.card2 ||
          `N${
            stats?.totalAmountWithdrawn
              ? amountConverter(stats?.totalAmountWithdrawn)
              : '0'
          }`
        }
        loading={loading}
      />
      <CardWidgetBox
        Icon={icons?.card3 || TransCountIcon}
        text={labels?.card3 || 'Total Number of Transactions'}
        value={
          statistics?.card3 ||
          `${
            stats?.totalTransactions
              ? thousandSeparator(stats?.totalTransactions)
              : '0'
          }`
        }
        loading={loading}
      />
      <CardWidgetBox
        Icon={icons?.card4 || UsersSolidIcon}
        text={labels?.card4 || ' Total Number of Users'}
        value={
          statistics?.card4 ||
          `${stats?.totalUsers ? thousandSeparator(stats?.totalUsers) : '0'}`
        }
        loading={loading}
      />
    </CardWidgetWrapper>
  )
}

export default CardWidget
