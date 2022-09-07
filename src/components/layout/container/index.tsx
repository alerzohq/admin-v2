
import React from 'react'
import LineLoader from '../../line-loader'
import TopBar from '../../top-bar'
import { ContainerProps } from '../type'
import { ContainerWrapper } from './styles/container.styles'

const Container:React.FC<ContainerProps> = ({title,isFetching, showFilters, children,...restProps}) => {

 
  return (
    <>
    <TopBar title={title} showFilters={showFilters}  {...restProps}/>
     {isFetching ? <LineLoader/>: ''}
    <ContainerWrapper {...restProps}>
        {children}
    </ContainerWrapper>
    </>

  )
}

export default Container