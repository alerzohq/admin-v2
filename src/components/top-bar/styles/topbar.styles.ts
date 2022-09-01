import styled from 'styled-components/macro'
import { Color } from '../../../assets/theme'

export const TopbarWrapper=styled.div`
height:90px; 
background:${Color.alerzoWhite}; 
display:flex; 
align-items:center; 
padding:0 1.8rem;
box-shadow: 0px 6px 60px rgba(0, 0, 0, 0.08);
position: sticky;
top: 0;
svg{
    cursor: pointer;
}
h3{
    color:${Color.alerzoBlack}; 
    font-size:1.3rem;
}
@media(max-width:640px){
    font-size:1.2rem; 
    padding:0 1rem;
}

`