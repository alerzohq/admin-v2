import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type contentStyleProps={
    isCollapsed?:boolean
}

export const ContentWrapper = styled.div<contentStyleProps>`
margin-left:${({isCollapsed})=>isCollapsed?'6rem':'17rem'};
transition: all .3s ease;
background:${Color.alerzoGray};
min-height:100vh;
@media (max-width:992px){
margin-left:0;
}
`
