import React,{} from 'react'
import { ContentWrapper} from './styles/dashboard-contents.styles';


type contentProps={
    isCollapsed?:boolean;
}&React.ComponentProps<'div'>

const Content = ({isCollapsed,children}:contentProps) => {

  return (
    <ContentWrapper isCollapsed={isCollapsed}>

       {children}

    </ContentWrapper>
  )
}

export default Content