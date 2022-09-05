import styled, { css } from 'styled-components/macro';
import { Color } from '../../../assets/theme';


type tabProps = {
    active?: boolean;
    activeColor?: string;
    flexDirection?: string;
}

export const TabWrapper = styled.div<tabProps>`
width: 100%;
display: flex;
align-items: center;
padding: 1em 0;
margin-bottom: .8em;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
background-color: ${Color.alerzoWhite};
flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : "row"}

`
export const transition = css`
transition: transform 0.4s;
`
export const TabContent = styled.div<tabProps>`
width: 100%;
display: flex;
`
export const TabTitle = styled.button<tabProps>`
color: ${({ color, active, activeColor }) => active ? activeColor : color};
font-weight: 400;
background-color: transparent;
font-size: 14px;
border: none;
margin: 0 3em 0 2em;
cursor: pointer;
padding:0 0 .3em 0;
border-bottom: ${({ active }) => active ? `3px solid ${Color.alerzoBlueTint}` : "none"};
`
