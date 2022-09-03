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
z-index:1;
svg{
    cursor: pointer;
}
h3{
    color:${Color.alerzoBlack}; 
    font-size:1.3rem;
    margin-right: 1rem;
}

@media(max-width:640px){
    font-size:1.2rem; 
    padding:0 1rem;
}

`
export const TopbarFilters = styled.div`
display:flex; gap:20px;
overflow-x: scroll;
overflow-y: hidden;
scrollbar-width: none; 
-ms-overflow-style: none;
::-webkit-scrollbar { 
width: 0;
height: 0;
    }
input{    
background: ${Color.alerzoWhite};
border: 1px solid rgba(193, 202, 207, 0.5);
border-radius: 10px;
height: 45px;
padding:0 1rem ;
max-width:120px;
::placeholder{
font-family: 'Gilmer';   
font-style: normal;
font-size: 12px;
line-height: 17px;
color: ${Color.alerzoGray2};
}
outline: none;
@media(max-width:1240px){
    max-width:100px;
}
}
@media(max-width:768px){
gap:10px;
}
`