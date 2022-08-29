import styled from 'styled-components'
import { Color } from '../../../assets/theme';


type formProps = {
 width: string;
 padding: string;
 pr: string;
 pt: string;
 pl: string;
 pb: string;
 alignItems: string;
 bgColor?: string;
 gap?:string;
 smDirections?:string;
 xsDirections?:string;
}

export const FormContainer = styled.form<formProps>`
width:${({width})=>width ? width :'100%'};
padding:${({padding})=>padding} ;
background:${({bgColor}) => bgColor};

@media(max-width:640px){
width:100%;
}
@media(max-width:640px){
padding:${({padding})=>padding?'2rem .2rem': ''} ;
}

`

export const Input = styled.div`
width:100%;
input{
border: 1px solid ${Color.alerzoWhite};
border-radius: 7px;
height: 45px;
width:100%;
padding:.5rem 1rem ;
outline: none;
&::placeholder{
    color:${Color.alerzoWhite};
    font-size:.8rem ;
}
}

`
export const Group = styled.div<formProps>`
display: flex;
gap: ${({gap})=>gap?gap:'10px'};
align-items:${({alignItems})=>alignItems};
padding-top:${({pt})=>pt};
padding-left:${({pl})=>pl};
padding-right:${({pr})=>pr};
padding-bottom:${({pb})=>pb};
padding:${({padding})=>padding} ;
width: 100%;
@media(max-width:640px){
    gap:10px;
    flex-direction:${({smDirections})=> smDirections}
}
@media(max-width:480px){
    gap:10px;
    flex-direction:${({smDirections})=> smDirections}
}

`
export const Control = styled.div<formProps>`
display: flex;
flex-direction:column ;

padding-top:${({pt})=>pt ? pt:'.8rem'};
padding-left:${({pl})=>pl};
padding-right:${({pr})=>pr};
padding-bottom:${({pb})=>pb};
padding:${({padding})=>padding} ;
width: 100%;

`
export const Label = styled.label<formProps>`
padding-top:${({pt})=>pt};
padding-left:${({pl})=>pl};
padding-right:${({pr})=>pr};
padding-bottom:${({pb})=>pb ? pb:'.5rem'};
padding:${({padding})=>padding} ;
font-size:.8rem;

`
export const Error = styled.p`


`
export const Footer = styled.div`
display: flex;
justify-content:space-between; 
padding :3rem 0 ;
a{
    color:${Color.alerzoWhite};
}

`
export const Tags=styled.div`
display:flex;
flex-wrap:wrap;
gap:5px; 
margin:10px 0 0 0;
.tag{
 background:#FFE0E0;
 display:flex;
 cursor:pointer;
 text-transform:capitalize;
 padding:.3rem .5rem;
font-size:.8rem;
border-radius:30px;
align-items:center;
gap:5px;

}
`
