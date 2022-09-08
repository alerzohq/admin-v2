import React from 'react'
import { Container, JumbotronItem,Pane, Inner, } from './styles/jumbotron.styes'

import { JumbotronProps} from './type'

const Jumbotron = ({children,socialPosition, direction = 'row',  ...restProps }:JumbotronProps) => {
    return (
        <JumbotronItem  {...restProps} >  
            <Inner direction={direction} socialPosition={socialPosition} >
                {children}
            </Inner>
        </JumbotronItem>
   
    )
}


export default Jumbotron

Jumbotron.Container = function JumbotronContainer ({children, ...restProps}:JumbotronProps)  { 
    return <Container {...restProps}> {children} </Container>
}

Jumbotron.Pane = function JumbotronPane ({children, ...restProps}:JumbotronProps)  { 
    return <Pane {...restProps}> {children} </Pane>
}




