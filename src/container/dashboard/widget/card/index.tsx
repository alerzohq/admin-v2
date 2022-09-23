import React from 'react'
import {
  DepositIcon,
  TransCountIcon,
  UsersSolidIcon,
  WithDrawIcon,
} from '../../../../assets/icons'
import {
  amountConverter,
  numberWithCommas,
} from '../../../../utils/formatValue'
import { CardWidgetWrapper } from '../styles/widget.styles'
import CardWidgetBox from './card.widget'

const CardWidget = ({ stats, loading }: StatsProps) => {
  return (
    <CardWidgetWrapper>
      <CardWidgetBox
        Icon={DepositIcon}
        text={' Total Amount Deposited'}
        value={`N${
          stats?.totalDeposits ? amountConverter(stats?.totalDeposits) : '0'
        }`}
        loading={loading}
      />
      <CardWidgetBox
        Icon={WithDrawIcon}
        text={' Total Amount Withdrawn'}
        value={`N${
          stats?.totalWithrawals ? amountConverter(stats?.totalWithrawals) : '0'
        }`}
        loading={loading}
      />
      <CardWidgetBox
        Icon={TransCountIcon}
        text={'Total Number of Transactions'}
        value={`${
          stats?.totalTransactions
            ? numberWithCommas(stats?.totalTransactions)
            : '0'
        }`}
        loading={loading}
      />
      <CardWidgetBox
        Icon={UsersSolidIcon}
        text={' Total Number of Users'}
        value={`${
          stats?.totalUniqueUsers
            ? numberWithCommas(stats?.totalUniqueUsers)
            : '0'
        }`}
        loading={loading}
      />
    </CardWidgetWrapper>
  )
}

export default CardWidget
