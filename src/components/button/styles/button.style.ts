import styled from 'styled-components'
import { Color } from '../../../assets/theme';


type Props = {
    disabled?: boolean;
    width?:string;
    variant?:string;
    height?:string;
    color?:string;
    borderColor?:string;
    fontSize?:string,
    noborder?:boolean;
    align?:string;
    gap?:string;
    margin?:string;
}

export const ButtonContainer = styled.button<Props>` 
display:flex;
justify-content:center;
align-items:center;
background:${({disabled})=>disabled? Color.alerzoLightBlue :({variant})=>variant ? variant: Color.alerzoBlue};
cursor:${({disabled})=>disabled? 'not-allowed': 'pointer' };
width:${({width})=>width? width: '100%'};
height:${({height})=>height? height: '3rem'};
color: ${({color})=>color ? color:`${Color.alerzoWhite}`};
border:none;
font-size:${({fontSize})=>fontSize};
border-radius:.4rem;
transition: background-color .5s linear;

gap:.2rem;

`

export const Group= styled.div<Props>`
display: flex;
align-items: center;
justify-content:${({align})=>align};
width:${({width})=>width? width: '100%'};
gap:${({gap})=>gap? gap:'.5rem'} ;
flex-wrap: wrap;
margin:${({margin})=>margin};
`
