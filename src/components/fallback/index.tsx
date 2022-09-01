import React from 'react'
import {Stack} from '../'
import {Text} from '../'
import { fallbackProps } from './type'

import { Wrapper } from './styles/fallback.styles'
import { Color } from '../../assets/theme'
import { InfoIcon } from '../../assets/icons'

const FallBack: React.FC<fallbackProps>= ({title, description, }) => {

  return (
    <Wrapper>
    <InfoIcon color={Color.alerzoOrange} /> 
       <Stack padding={'1rem 0'} alignItems={'center'}>
          <Text
          as={"h4"}
          color={Color.alerzoBlack}
          align={"center"}
        >
          {title}
        </Text>
        {description &&  <Text
          as={"p"}
          size={'.8rem'}
          width={"400px"}
          padding={".3rem 0"}
          color={Color.alerzoDanger}
          align={"center"}
        >
          {description}
        </Text>}
        </Stack>
     
    </Wrapper>
  )
}

export default FallBack