import styled from 'styled-components/macro'

import { Color } from '../../../assets/theme'

export const PolicyWrapper = styled.div`
position:sticky; 
margin-top:auto;
bottom:0px;
zIndex:5px; 
text-align:center;
padding-top:5px;
display:flex; 
justify-items:center; 
align-items:center; 
width:100%; 
height:70px; 
background:${Color.alerzoWhite};
`
export const PolicyInner = styled.div`
max-width:900px;
margin:auto;
font-size:14px;
span{
font-weight:600;
color:${Color.alerzoGrayishBlue2};
&:first-of-type{
color: ${Color.alerzoBlue};
}
}

`

