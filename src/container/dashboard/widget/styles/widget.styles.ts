import styled from 'styled-components/macro'
import { Color } from '../../../../assets/theme'

export const CardWidgetWrapper = styled.div`
display: flex;
justify-content:space-between;
flex-wrap:wrap;

`

export const CardWidgetItem=styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:.3rem;
flex:0 0 23%;
border-radius:20px; 
box-shadow:0px 6px 60px rgba(0, 0, 0, 0.04);
height:150px;
width:200px;
background:${Color.alerzoWhite};
svg{
    margin-bottom:.7rem;
}
small{
    padding:0 .5rem;
    text-align:center;
}
small{
color:${Color.alerzoDarkGray};
}
h3{
    font-weight:700 ;
}

@media(max-width:768px){
flex:0 0 48%; 
margin-bottom:1rem;  
}
@media(max-width:420px){
flex:0 0 100%; 

}

`