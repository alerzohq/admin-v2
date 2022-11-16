import React from 'react'
import { SettingsIcon } from '../../../../../assets/icons'
import { Color } from '../../../../../assets/theme'
import { Text } from '../../../../../components'
import { amountHelper } from '../../../../../utils/formatValue'
import { Card, CardInner } from '../styles/biller.styles'
import { BillerProps } from '../type'


const BillerCard = ({biller}:BillerProps) => {

let balance= biller? Number(biller?.balance) : 0;
let color= ()=> {
    if(balance <= 0){
        return Color.alerzoDanger
    }else if(balance > 10 && balance <=1000000){
        return Color.alerzoWarningText
    }else{
        return Color.alerzoGreen
    }
}

  return (
    <Card>
        <CardInner>
            <Text as={'small'} weight={'600'}>{biller?.displayName}</Text>
            <Text as={'small'}>Logo</Text>
        </CardInner>
        <CardInner >
           <Text as={'h2'} weight={'600'} color={color()}>
            {biller ? amountHelper(biller?.balance) :''}
            </Text>
            <SettingsIcon />
        </CardInner>

    </Card> 
  )
}

export default BillerCard