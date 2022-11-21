import React, { memo } from 'react'
import { SettingsIcon } from '../../../../../assets/icons'
import { Text } from '../../../../../components'
import { amountHelper } from '../../../../../utils/formatValue'
import { color } from '../helper'
import { BillerLogo, Card, CardInner } from '../styles/biller.styles'
import { BillerProps } from '../type'

const BillerCard = ({ biller,handleBiller }: BillerProps) => {


  return (
   
    <Card onClick={()=>handleBiller?.(biller)}>
      <CardInner>
        <Text as={'small'} weight={'600'}>
          {biller?.displayName}
        </Text>
        <BillerLogo>
          {biller?.logo ? <img src={biller?.logo} alt="biller-logo" />:null}
        </BillerLogo>
      </CardInner>
      <CardInner>
        <Text as={'h2'} weight={'600'} color={color(biller)}>
          {biller ? amountHelper(biller?.balance) : ''}
        </Text>
        <SettingsIcon />
      </CardInner>
    </Card>
  )
}

export default memo(BillerCard)
