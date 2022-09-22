import React from 'react'
import { Loader, Text } from '../../../../components'
import { CardWidgetItem } from '../styles/widget.styles'

const CardWidgetBox = ({ text, value, Icon, loading }: CardWidgetItemProps) => {
  return (
    <CardWidgetItem>
      {Icon && <Icon />}
      <Text as={'small'} weight={'600'}>
        {text}
      </Text>
      {loading ? <Loader /> : <Text as={'h3'}>{value}</Text>}
    </CardWidgetItem>
  )
}

export default CardWidgetBox
