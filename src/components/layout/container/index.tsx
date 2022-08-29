
import React from 'react'
import { ContainerProps } from '../type'
import { ContainerWrapper } from './styles/container.styles'

const Container:React.FC<ContainerProps> = ({children,...restProps}) => {
  return (
    <ContainerWrapper {...restProps}>
        {children}
    </ContainerWrapper>
  )
}

export default Container