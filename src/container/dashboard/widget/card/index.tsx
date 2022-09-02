import React from 'react'
import { DepositIcon, UsersSolidIcon, WithDrawIcon } from '../../../../assets/icons'
import { CardWidgetWrapper} from '../styles/widget.styles'
import CardWidgetBox from './card.widget'

const CardWidget = () => {
  return (
    <CardWidgetWrapper>
        <CardWidgetBox Icon={DepositIcon} text={' Total Amount Deposited'} value={'N20,000,000'} />
        <CardWidgetBox Icon={WithDrawIcon} text={' Total Amount Withdrawn'} value={'N9,000,000'} />
        <CardWidgetBox Icon={DepositIcon} text={'Total Number of Transactions'} value={'50,000'} />
        <CardWidgetBox Icon={UsersSolidIcon} text={' Total Number of Users'} value={'70,000'} />
   </CardWidgetWrapper>
  )
}

export default CardWidget