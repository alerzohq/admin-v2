
import React from 'react'
import TopBar from '../../top-bar'
import { ContainerProps } from '../type'
import { ContainerWrapper } from './styles/container.styles'

const Container:React.FC<ContainerProps> = ({title, children,...restProps}) => {
  return (
    <>
    <TopBar title={title} {...restProps}/>
    <ContainerWrapper {...restProps}>
        {children}
    </ContainerWrapper>
    </>

  )
}

export default Container