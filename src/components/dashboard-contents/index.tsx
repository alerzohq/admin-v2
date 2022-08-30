import React,{} from 'react'
import { ContentWrapper} from './styles/dashboard-contents.styles';
import { contentProps } from './type';



const Content = ({isCollapsed,children}:contentProps) => {

  return (
    <ContentWrapper isCollapsed={isCollapsed}>

       {children}

    </ContentWrapper>
  )
}

export default Content