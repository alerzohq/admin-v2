import React from 'react'
import { Text } from '../../../../components'
import { CardWidgetItem } from '../styles/widget.styles'



const CardWidgetBox = ({text,value, Icon}:CardWidgetItemProps) => {
  return (

      <CardWidgetItem>
           {Icon && <Icon />}
          <Text as={'small'} weight={'600'}>
          {text}
          </Text>
          <Text as={'h3'}>
          {value}
          </Text>
     </CardWidgetItem>
     
    
  )
}

export default CardWidgetBox