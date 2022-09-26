import React from 'react'
import { Button, Stack } from '../'
import { Text } from '../'
import { fallbackProps } from './type'

import { Wrapper } from './styles/fallback.styles'
import { Color } from '../../assets/theme'
import { InfoIcon } from '../../assets/icons'

const FallBack: React.FC<fallbackProps> = ({ title, description,refetch, error }) => {
  return (
    <Wrapper>
      <InfoIcon color={error ? Color.alerzoDanger : Color.alerzoOrange} />
      <Stack padding={'1rem 0'} alignItems={'center'}>
        <Text as={'h4'} color={Color.alerzoBlack} align={'center'}>
          {title}
        </Text>
        {description && (
          <Text
            as={'p'}
            size={'.8rem'}
            width={'400px'}
            padding={'.3rem'}
            color={Color.alerzoDanger}
            align={'center'}
          >
            {description}
          </Text>
          
        )}
         {refetch && (
            <Button onClick={refetch} width={'180px'}>
            Retry
          </Button>
         )}
           
      </Stack>
    </Wrapper>
  )
}

export default FallBack
