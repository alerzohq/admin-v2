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
padding: 0.8em 0;
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
font-weight:${({ active }) => active ? 600 : 400};
background-color: transparent;
font-size: 14px;
border: none;
margin: 0 3em 0 2em;
cursor: pointer;
padding:0;
border-bottom: ${({ active }) => active ? `2px solid ${Color.alerzoBlueTint}` : "none"};
`
