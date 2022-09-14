import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

type sidebarStyleProps={
    isCollapsed?:boolean;
    padding?:string;
    color?:string;
    isShown?:boolean;
    isActive?:boolean;
}

export const SidebarWrapper = styled.div<sidebarStyleProps>`
width: ${({isCollapsed})=>isCollapsed?'6rem':'17rem'};
transition: all .3s ease;
position:fixed;
height:100vh;
z-index:1;
box-shadow: ${({isCollapsed})=>!isCollapsed ? Color.alerzoLightGray:'none'};
border-right: ${({isCollapsed})=> isCollapsed ? `0.8px solid ${Color.alerzoGrayBorder}` : "none"};
overflow:hidden;
@media (max-width:992px){
    transform: translateX(-17rem)
}
    
`
export const Inner = styled.div<sidebarStyleProps>`
display: flex;
flex-direction: column;
padding:${({isCollapsed})=>isCollapsed?'2rem 1rem':'2rem '};
svg{
    cursor: pointer;
    margin:${({isCollapsed})=>isCollapsed?'auto':'0'};
}
.logo{
    padding-left:1rem;
}
`


export const SidebarList = styled.div`
display: flex;
flex-direction: column;
padding-top: 2.5rem;


`

export const SidebarItem = styled.div<sidebarStyleProps>`
padding:${({padding})=>padding};
cursor: pointer;
display: flex;
flex-direction: column;
align-items: ${({isCollapsed})=>isCollapsed?'center':'flex-start'};
padding: .5rem;
margin-bottom: 1rem;
/* svg{
    padding-left:${({ isActive, isCollapsed}) => isActive && isCollapsed? `0`:'0rem'};
} */
   
p{

    font-size:${({ isActive }) => isActive &&`.9rem`};
    font-weight:${({ isActive }) => isActive &&`700`};
}
${({ isActive }) => isActive &&`
    display: flex;
    justify-content: center;
    color: #fff;
    background-size: 200% 200%;
    background-image: linear-gradient(90deg,rgba(0,121,255,.4) 50%,#07f 0);
    background-position: 100%;
    border-radius: 10px;
    fill: #fff;
    box-shadow: 0 5px 2px rgb(0 121 255 / 40%);
    flex-direction: column;
   
`}

`
export const SidebarDropdown = styled.div<sidebarStyleProps>`
display: flex;
flex-direction: column;
max-height: ${({isShown})=>isShown ? '80px':'0'};
transition: max-height .2s ease;
overflow: hidden;

`

export const DropdownItem = styled.div<sidebarStyleProps>`
padding: .5rem;
color:${({color})=>color? color :Color.alerzoLight};
padding-left: 2.5rem;

`