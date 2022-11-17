import React from 'react'
import { SettingsIcon } from '../../../../../assets/icons'
import { Color } from '../../../../../assets/theme'
import { Text } from '../../../../../components'
import { amountHelper } from '../../../../../utils/formatValue'
import { BillerLogo, Card, CardInner } from '../styles/biller.styles'
import { BillerProps } from '../type'

const BillerCard = ({ biller }: BillerProps) => {
  let avarageThreshold = 1500000
  let minimumThreshold = 100000

  const color = () => {
    let balance = biller ? Number(biller?.balance / 100) : 0
    if (balance <= minimumThreshold) {
      return Color.alerzoDanger
    } else if (balance > 0 && balance <= avarageThreshold) {
      return Color.alerzoWarning
    } else {
      return Color.alerzoGreen
    }
  }

  return (
    <Card>
      <CardInner>
        <Text as={'small'} weight={'600'}>
          {biller?.displayName}
        </Text>
        <BillerLogo>
          {biller?.logo && <img src={biller?.logo} alt="biller-logo" />}
        </BillerLogo>
      </CardInner>
      <CardInner>
        <Text as={'h2'} weight={'600'} color={color()}>
          {biller ? amountHelper(biller?.balance) : ''}
        </Text>
        <SettingsIcon />
      </CardInner>
    </Card>
  )
}

export default BillerCard
